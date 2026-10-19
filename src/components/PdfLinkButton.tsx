import { FileText } from 'lucide-react';

interface PdfLinkButtonProps {
  href?: string;
  ariaLabel?: string;
  className?: string;
}

export default function PdfLinkButton({
  href,
  ariaLabel = 'Abrir archivo PDF',
  className = ''
}: PdfLinkButtonProps) {
  return (
    <a
      href={href && href !== '#' ? href : 'about:blank'}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex items-center gap-1.5 rounded-md border-2 border-black bg-white px-3 py-2 text-xs font-medium text-blue-700 hover:bg-blue-50 ${className}`}
    >
      <FileText className="h-4 w-4 text-red-600" />
      Ver Archivo PDF
    </a>
  );
}
