'use client';
import { UploadDropzone } from '@/components/tools/UploadDropzone';

export function PlaceholderToolClient() {
    return (
        <div className="w-full flex flex-col gap-8 max-w-3xl mx-auto">
            <UploadDropzone onUpload={() => { }} accept="*" />
            <div className="mt-8 p-6 bg-muted/50 rounded-2xl text-center border border-border">
                <p className="text-muted-foreground">This tool is currently being provisioned. Processing logic will be loaded dynamically.</p>
            </div>
        </div>
    );
}
