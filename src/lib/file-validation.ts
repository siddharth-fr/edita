export function validateFiles(files: File[], accept: string | undefined): { valid: File[], rejectedCount: number } {
  if (!accept) return { valid: files, rejectedCount: 0 };

  const acceptedTypes = accept.split(',').map(t => t.trim().toLowerCase());
  const valid = files.filter(file => {
    const fileName = file.name.toLowerCase();
    const fileType = file.type.toLowerCase();

    return acceptedTypes.some(type => {
      // Extension check (e.g. .pdf)
      if (type.startsWith('.')) {
        return fileName.endsWith(type);
      }
      // Wildcard check (e.g. image/*)
      if (type.endsWith('/*')) {
        const baseType = type.replace('/*', '');
        return fileType.startsWith(baseType);
      }
      // Full MIME check (e.g. application/pdf)
      return fileType === type;
    });
  });

  return { valid, rejectedCount: files.length - valid.length };
}
