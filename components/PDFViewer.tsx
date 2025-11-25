import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

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
    <Card className={`shadow-lg ${className}`}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Button asChild size="sm" className="w-fit">
            <a href={src} download={downloadFilename}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg overflow-hidden border border-border">
          <iframe
            src={`${src}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-[600px] md:h-[800px]"
            title={title}
          />
        </div>
      </CardContent>
    </Card>
  );
}
