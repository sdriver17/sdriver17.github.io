interface PDFViewerProps {
  src: string;
  title: string;
  downloadFilename: string;
  className?: string;
}

export function PDFViewer({
  src,
  title,
  downloadFilename,
  className = "",
}: PDFViewerProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <a
          href={src}
          download={downloadFilename}
          className="inline-block px-6 py-2 bg-accent-green text-white rounded hover:bg-accent-green-hover transition-colors"
        >
          Download {title}
        </a>
      </div>
      <iframe
        src={`${src}#toolbar=0&navpanes=0&scrollbar=0`}
        className="w-full h-[600px] md:h-[800px] border border-border dark:border-border rounded"
        title={title}
      />
    </div>
  );
}
