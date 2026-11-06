import { ArrowLeft, ChevronRight, ExternalLink, FileText } from 'lucide-react';

interface Seccion12Props {
  onVolver: () => void;
  onAbrirAuditoriaInterna: () => void;
  onAbrirAuditoriaExterna: () => void;
}

const enlaceContraloria = 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/buscadorBifa?_adf.ctrl-state=h8dnb03ox_15';

const auditorias = [
  {
    titulo: 'Auditorías Internas',
    descripcion: 'Informes y revisiones realizados por auditoría interna.',
    onClickProp: 'interna',
  },
  {
    titulo: 'Auditoría Contraloría General de la República Municipalidad de Lo Prado',
    descripcion: 'Auditorías externas de la Municipalidad de Lo Prado.',
    onClickProp: 'externa',
  },
] as const;

export default function Seccion12({ onVolver, onAbrirAuditoriaInterna, onAbrirAuditoriaExterna }: Seccion12Props) {
  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Auditorías al ejercicio presupuestario y aclaraciones</span>
      </nav>

      <header className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Fiscalización y auditorías</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Auditorías</h2>
      </header>

      <section aria-label="Categorías de auditoría" className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {auditorias.map((auditoria) => (
          <button
            key={auditoria.onClickProp}
            type="button"
            onClick={auditoria.onClickProp === 'interna' ? onAbrirAuditoriaInterna : onAbrirAuditoriaExterna}
            className="group flex min-h-36 flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
              <FileText className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="mt-4 text-sm font-bold leading-relaxed text-slate-900 transition-colors group-hover:text-blue-700">
              {auditoria.titulo}
            </span>
            <span className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
              {auditoria.descripcion}
              <ChevronRight className="ml-3 h-4 w-4 shrink-0 text-blue-600 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </button>
        ))}
        <a
          href={enlaceContraloria}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-36 flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="mt-4 text-sm font-bold leading-relaxed text-slate-900 transition-colors group-hover:text-blue-700">
            Auditoría Contraloría General de la República
          </span>
          <span className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-blue-600">
            Abrir sitio de la Contraloría
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </span>
        </a>
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
