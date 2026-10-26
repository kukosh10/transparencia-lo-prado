import { ChevronRight, FileText } from 'lucide-react';

interface Props {
  onSeleccionar: (tramite: string) => void;
}

const tramites = [
  'Trámites Emprendimientos',
  'Trámites para Permisos de Uso Persa Neptuno'
];

export default function Seccion8TramAdminFinanza5({ onSeleccionar }: Props) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {tramites.map((tramite) => (
        <button
          key={tramite}
          type="button"
          onClick={() => onSeleccionar(tramite)}
          className="group flex min-h-16 items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-4 text-left transition-colors hover:border-blue-300 hover:bg-blue-50"
        >
          <span className="flex items-center gap-3 text-sm font-medium text-slate-800 group-hover:text-blue-700">
            <FileText className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
            {tramite}
          </span>
          <ChevronRight className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
