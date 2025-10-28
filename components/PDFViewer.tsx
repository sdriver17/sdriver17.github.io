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
          className="inline-block px-6 py-2 bg-brand-pink text-white rounded hover:bg-brand-pink/80 transition-colors"
        >
          Download {title}
        </a>
      </div>
      <iframe
        src={`${src}#toolbar=0&navpanes=0&scrollbar=0`}
        className="w-full h-[600px] md:h-[800px] border border-gray-300 rounded"
        title={title}
      />
    </div>
  );
}
