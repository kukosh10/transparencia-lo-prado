import { ArrowLeft } from 'lucide-react';

interface Seccion10_5Props {
  onVolver: () => void;
  onVolverSeccion: () => void;
}

export default function Seccion10_5({ onVolver, onVolverSeccion }: Seccion10_5Props) {
  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolverSeccion} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Participación Ciudadana
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Comisión Defensora Ciudadana</span>
      </nav>
      <header>
        <h2 className="text-xl font-bold text-slate-900">Comisión Defensora Ciudadana</h2>
      </header>
      <section className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center">
        <p className="text-sm text-slate-600">Aún no se ha cargado información para esta categoría.</p>
      </section>
      <div className="border-t border-slate-200 pt-4">
        <button type="button" onClick={onVolver} className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a Participación Ciudadana
        </button>
      </div>
    </div>
  );
}
