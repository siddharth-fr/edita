'use client';

import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { PDFDocument } from 'pdf-lib';
import { UploadDropzone } from '@/components/tools/UploadDropzone';
import { FilePreviewCard } from '@/components/tools/FilePreviewCard';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';

interface PdfFile {
    id: string;
    file: File;
}

export default function MergePdfClient() {
    const [pdfFiles, setPdfFiles] = useState<PdfFile[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [mergedPdfUrl, setMergedPdfUrl] = useState<string | null>(null);

    useEffect(() => {
        return () => {
            if (mergedPdfUrl) URL.revokeObjectURL(mergedPdfUrl);
        };
    }, [mergedPdfUrl]);

    const handleUpload = (newFiles: File[]) => {
        // filter only pdfs
        const validFiles = newFiles.filter((f) => f.type === 'application/pdf');
        if (validFiles.length > 0) {
            const newItems = validFiles.map((f) => ({
                id: Math.random().toString(36).substring(7),
                file: f,
            }));
            setPdfFiles((prev) => [...prev, ...newItems]);
            setMergedPdfUrl(null);
        }
    };

    const removeFile = (id: string) => {
        setPdfFiles((prev) => prev.filter((item) => item.id !== id));
        setMergedPdfUrl(null);
    };

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const items = Array.from(pdfFiles);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setPdfFiles(items);
        setMergedPdfUrl(null);
    };

    const handleMerge = async () => {
        if (pdfFiles.length < 2) return;
        setIsProcessing(true);

        try {
            const mergedPdf = await PDFDocument.create();

            for (const item of pdfFiles) {
                const arrayBuffer = await item.file.arrayBuffer();
                const pdf = await PDFDocument.load(arrayBuffer);
                const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                copiedPages.forEach((page) => mergedPdf.addPage(page));
            }

            const pdfBytes = await mergedPdf.save();
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            setMergedPdfUrl(url);
        } catch (error) {
            console.error('Error merging PDFs', error);
            alert('Failed to merge PDFs. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <ToolLayout
            title="Merge PDF"
            description="Combine multiple PDF files into a single document. Processing happens securely and locally in your browser."
        >
            <div className="w-full flex flex-col gap-8 max-w-3xl mx-auto">
                {pdfFiles.length === 0 ? (
                    <UploadDropzone onUpload={handleUpload} accept=".pdf,application/pdf" />
                ) : (
                    <div className="flex flex-col gap-6 w-full">
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="pdfList">
                                {(provided) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        className="flex flex-col gap-3"
                                    >
                                        {pdfFiles.map((item, index) => (
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

                        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-card p-4 rounded-[1.5rem] border border-border shadow-sm">
                            <label className="text-sm cursor-pointer hover:underline text-primary font-medium px-4 py-2 hover:bg-black/5 rounded-full transition-colors">
                                + Add more files
                                <input
                                    type="file"
                                    multiple
                                    accept=".pdf,application/pdf"
                                    className="hidden"
                                    aria-label="Add more files"
                                    onChange={(e) => {
                                        if (e.target.files) handleUpload(Array.from(e.target.files));
                                        e.target.value = '';
                                    }}
                                />
                            </label>

                            {!mergedPdfUrl ? (
                                <Button
                                    size="lg"
                                    onClick={handleMerge}
                                    disabled={pdfFiles.length < 2 || isProcessing}
                                    isLoading={isProcessing}
                                >
                                    {isProcessing ? 'Merging...' : 'Merge PDFs'}
                                </Button>
                            ) : (
                                <a
                                    href={mergedPdfUrl}
                                    download="Merged_Document.pdf"
                                >
                                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-md">
                                        <Download className="w-5 h-5 mr-2" />
                                        Download File
                                    </Button>
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </ToolLayout>
    );
}
