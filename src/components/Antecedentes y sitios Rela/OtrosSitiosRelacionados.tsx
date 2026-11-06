import { ArrowLeft, ExternalLink } from 'lucide-react';

interface OtrosSitiosRelacionadosProps {
  categoria: {
    categoria: string;
    enlaces: readonly { texto: string; url: string }[];
  };
  onVolver: () => void;
}

export default function OtrosSitiosRelacionados({ categoria, onVolver }: OtrosSitiosRelacionadosProps) {
  return (
    <div className="content-box-wide space-y-6">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">Transparencia Activa</button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Antecedentes y sitios relacionados</span>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">{categoria.categoria}</span>
      </nav>
      <header className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Información institucional</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">{categoria.categoria}</h2>
        <p className="mt-2 text-sm text-slate-600">Consulta la información y los recursos disponibles en esta sección.</p>
      </header>
      <section aria-label={categoria.categoria} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {categoria.enlaces.map((enlace) => (
              <a key={enlace.texto} href={enlace.url} target="_blank" rel="noopener noreferrer" className="group flex min-h-24 items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/70 p-5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:from-blue-50 hover:to-blue-100 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                <span className="group-hover:text-blue-800">{enlace.texto}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
          ))}
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
