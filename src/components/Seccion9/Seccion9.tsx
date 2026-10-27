import { ArrowLeft, ChevronRight, FileText } from 'lucide-react';

interface Seccion9Props {
  onVolver: () => void;
  onSeleccionarSubseccion: (subseccionId: string) => void;
}

const subsecciones = [
  { id: 'seccion9-1', titulo: 'Subsidios y Beneficios Propios' },
  { id: 'seccion9-2', titulo: 'Subsidios y Beneficios como Intermediario' },
  { id: 'seccion9-3', titulo: 'Nómina de Beneficiarios de Programas de Subsidios y Beneficios' }
];

export default function Seccion9({ onVolver, onSeleccionarSubseccion }: Seccion9Props) {
  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Subsidios y Beneficios</span>
      </nav>

      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Subsidios y Beneficios</h2>
          <p className="mt-1 text-xs text-slate-500">Selecciona una categoría para consultar su información</p>
        </div>
        <span className="text-xs font-medium text-slate-500">Última actualización: 26/10/2026</span>
      </header>

      <section aria-label="Categorías de subsidios y beneficios" className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {subsecciones.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSeleccionarSubseccion(item.id)}
            className="group flex min-h-40 flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 text-left shadow-xs transition-all hover:border-blue-300 hover:shadow-md"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
              <FileText className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="mt-4 text-sm font-bold leading-relaxed text-slate-900 transition-colors group-hover:text-blue-700">
              {item.titulo}
            </span>
            <span className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-blue-600">
              <span>Ver información</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </button>
        ))}
      </section>

      <div className="border-t border-slate-200 pt-4">
        <button type="button" onClick={onVolver} className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a Transparencia Activa
        </button>
      </div>
    </div>
  );
}
