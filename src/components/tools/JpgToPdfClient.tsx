'use client';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { PDFDocument } from 'pdf-lib';
import { UploadDropzone } from '@/components/tools/UploadDropzone';
import { FilePreviewCard } from '@/components/tools/FilePreviewCard';
import { Button } from '@/components/ui/Button';
import { Download, ImageIcon } from 'lucide-react';
import { formatBytes } from '@/components/tools/FilePreviewCard';

interface ImageFile {
    id: string;
    file: File;
}

export function JpgToPdfClient() {
    const [imageFiles, setImageFiles] = useState<ImageFile[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [resultUrl, setResultUrl] = useState<string | null>(null);

    const handleUpload = (newFiles: File[]) => {
        const validFiles = newFiles.filter((f) => f.type.startsWith('image/'));
        if (validFiles.length > 0) {
            const newItems = validFiles.map((f) => ({
                id: Math.random().toString(36).substring(7),
                file: f,
            }));
            setImageFiles((prev) => [...prev, ...newItems]);
            setResultUrl(null);
        }
    };

    const removeFile = (id: string) => {
        setImageFiles((prev) => prev.filter((item) => item.id !== id));
        setResultUrl(null);
    };

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const items = Array.from(imageFiles);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setImageFiles(items);
        setResultUrl(null);
    };

    const convertToPdf = async () => {
        if (imageFiles.length === 0) return;
        setIsProcessing(true);

        try {
            const pdfDoc = await PDFDocument.create();

            for (const item of imageFiles) {
                const arrayBuffer = await item.file.arrayBuffer();
                let image;

                if (item.file.type === 'image/png') {
                    image = await pdfDoc.embedPng(arrayBuffer);
                } else if (item.file.type === 'image/jpeg' || item.file.type === 'image/jpg') {
                    image = await pdfDoc.embedJpg(arrayBuffer);
                } else {
                    // If unsupported type skips or alerts (we fallback to png format embedding if possible, but simplest is ignore/alert)
                    console.warn('Unsupported image type for direct embed:', item.file.type);
                    continue;
                }

                const { width, height } = image.scale(1);
                const page = pdfDoc.addPage([width, height]);
                page.drawImage(image, {
                    x: 0,
                    y: 0,
                    width,
                    height,
                });
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
            setResultUrl(URL.createObjectURL(blob));
        } catch (error) {
            console.error('Conversion failed', error);
            alert('Failed to convert images to PDF. Please ensure they are valid JPG/PNG files.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="w-full flex flex-col gap-8 max-w-3xl mx-auto">
            {imageFiles.length === 0 ? (
                <UploadDropzone onUpload={handleUpload} accept="image/jpeg,image/png" multiple={true} />
            ) : (
                <div className="flex flex-col gap-6 w-full animate-in slide-in-from-bottom-4 fade-in duration-500">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="imageList">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="flex flex-col gap-3"
                                >
                                    {imageFiles.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <FilePreviewCard
                                                        file={item.file}
                                                        onRemove={() => removeFile(item.id)}
                                                        isDraggable
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>

                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-card p-4 rounded-3xl border border-border shadow-sm">
                        <label className="text-sm cursor-pointer hover:underline text-primary font-bold px-4 py-2 hover:bg-primary/10 rounded-full transition-colors">
                            + Add more images
                            <input
                                type="file"
                                multiple
                                accept="image/jpeg,image/png"
                                className="hidden"
                                aria-label="Add more images"
                                onChange={(e) => {
                                    if (e.target.files) handleUpload(Array.from(e.target.files));
                                    e.target.value = '';
                                }}
                            />
                        </label>

                        {!resultUrl ? (
                            <Button
                                size="lg"
                                onClick={convertToPdf}
                                disabled={imageFiles.length === 0 || isProcessing}
                                isLoading={isProcessing}
                                className="w-full sm:w-auto"
                            >
                                {isProcessing ? 'Converting...' : 'Convert to PDF'}
                            </Button>
                        ) : (
                            <a
                                href={resultUrl}
                                download="Converted_Images.pdf"
                                className="w-full sm:w-auto"
                            >
                                <Button size="lg" className="w-full shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]">
                                    <Download className="w-5 h-5 mr-2" />
                                    Download PDF
                                </Button>
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
