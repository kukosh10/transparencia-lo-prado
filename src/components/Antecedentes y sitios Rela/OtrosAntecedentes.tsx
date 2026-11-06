import { ArrowLeft, ChevronRight, ExternalLink, FileText } from 'lucide-react';

interface OtrosAntecedentesProps {
  onVolver: () => void;
  onAbrirPladeco: () => void;
  onAbrirPlanRegulador: () => void;
  onAbrirMetas: () => void;
}

const antecedentes = [
  {
    titulo: 'Consulta de Patentes de vehículos',
    descripcion: 'Consulta de patentes de vehículo con permiso de circulación vigente en la comuna',
    url: 'https://transito.loprado.cl/',
  },
  { titulo: 'PLADECO', onAbrir: 'pladeco' },
  { titulo: 'Plan Regulador', onAbrir: 'plan-regulador' },
  { titulo: 'Metas Institucionales', onAbrir: 'metas-institucionales' },
] as const;

export default function OtrosAntecedentes({
  onVolver,
  onAbrirPladeco,
  onAbrirPlanRegulador,
  onAbrirMetas,
}: OtrosAntecedentesProps) {
  const abrirAntecedente = (destino: 'pladeco' | 'plan-regulador' | 'metas-institucionales') => {
    if (destino === 'pladeco') onAbrirPladeco();
    else if (destino === 'plan-regulador') onAbrirPlanRegulador();
    else onAbrirMetas();
  };

  return (
    <div className="content-box-wide space-y-6">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Antecedentes y sitios relacionados</span>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Otros antecedentes</span>
      </nav>

      <header className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Documentos y consultas</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Otros antecedentes</h2>
        <p className="mt-2 text-sm text-slate-600">Accede a consultas y documentos institucionales.</p>
      </header>

      <section aria-label="Otros antecedentes disponibles" className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {antecedentes.map((item) => {
          const onAbrir = 'onAbrir' in item
            ? () => abrirAntecedente(item.onAbrir)
            : 'url' in item
              ? () => window.open(item.url, '_blank', 'noopener,noreferrer')
              : undefined;

          return (
            <button
              key={item.titulo}
              type="button"
              onClick={onAbrir}
              className="group flex min-h-48 cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-0 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <div className="flex flex-1 items-start gap-3 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.titulo}</h3>
                  {'descripcion' in item && (
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.descripcion}</p>
                  )}
                </div>
              </div>
              <div className="border-t border-slate-100 bg-slate-50/70 p-4">
                {'descripcion' in item ? (
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 group-hover:text-blue-900">
                    Consulta disponible
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 transition-colors group-hover:bg-blue-100 group-hover:text-blue-900">
                    Históricos
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </section>

      <div className="border-t border-slate-200 pt-4">
        <button type="button" onClick={onVolver} className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a Transparencia Activa
        </button>
      </div>
    </div>
  );
}
