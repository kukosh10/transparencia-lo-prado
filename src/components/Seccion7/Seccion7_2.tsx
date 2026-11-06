import { ArrowLeft, FileText } from 'lucide-react';

interface Seccion7_2Props {
  onVolver: () => void;
}

interface PeriodoPladeco {
  periodo: string;
  url: string;
}

const periodosPladeco: readonly PeriodoPladeco[] = [
  { periodo: 'Periodo 2012 - 2016', url: '' },
  { periodo: 'Periodo 2006 - 2010', url: '' },
];

export default function Seccion7_2({ onVolver }: Seccion7_2Props) {
  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Actos y resoluciones con efectos sobre terceros
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">PLADECO</span>
      </nav>

      <header className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Planificación comunal</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">PLADECO</h2>
        <p className="mt-2 text-sm text-slate-600">Plan de Desarrollo Comunal. Selecciona un período para abrir su documento PDF.</p>
      </header>

      <section aria-label="Documentos PLADECO por período" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {periodosPladeco.map((item) => (
          <article key={item.periodo} className="flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md sm:p-6">
            <div>
              <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Plan de Desarrollo Comunal
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{item.periodo}</h3>
            </div>
            <a
              href={item.url || 'about:blank'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver PDF del PLADECO ${item.periodo}`}
              className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50"
            >
              <FileText className="h-4 w-4 text-red-600" aria-hidden="true" />
              Ver PDF
            </a>
          </article>
        ))}
      </section>

      <div className="border-t border-slate-200 pt-4">
        <button type="button" onClick={onVolver} className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a Actos y Resoluciones
        </button>
      </div>
    </div>
  );
}
