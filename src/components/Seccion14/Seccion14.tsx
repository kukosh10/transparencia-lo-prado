import { ArrowLeft, Info } from 'lucide-react';

interface Seccion14Props {
  onVolverSeccion: () => void;
}

export default function Seccion14({ onVolverSeccion }: Seccion14Props) {
  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolverSeccion} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Antecedentes preparatorios</span>
      </nav>

      <header className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Normativa y transparencia</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          Índice de antecedentes preparatorios de normas jurídicas
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Antecedentes de normas jurídicas generales que afecten a empresas de menor tamaño.
        </p>
      </header>

      <section
        aria-labelledby="seccion14-no-aplica"
        className="flex gap-4 rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm sm:p-7"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-blue-700 shadow-sm">
          <Info className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h3 id="seccion14-no-aplica" className="font-semibold text-slate-900">
            Este ítem no aplica al municipio
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            El artículo 5 de la Ley N° 20.416 excluye de esta publicación los antecedentes relativos a ordenanzas municipales.
          </p>
        </div>
      </section>

      <div className="border-t border-slate-200 pt-4">
        <button type="button" onClick={onVolverSeccion} className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a Transparencia Activa
        </button>
      </div>
    </div>
  );
}
