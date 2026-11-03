import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

interface Seccion9_3NomBecasProps {
  anio: string;
  tipoNomina: string;
  onVolver: () => void;
}

export default function Seccion9_3NomBecas({
  anio,
  tipoNomina,
  onVolver
}: Seccion9_3NomBecasProps) {
  const [mesSeleccionado, setMesSeleccionado] = useState<string | null>(null);

  return (
    <section aria-label={`${tipoNomina} ${anio}`} className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{tipoNomina} · {anio}</h3>
          <p className="mt-1 text-xs text-slate-500">Selecciona un mes para consultar el detalle</p>
        </div>
        <button
          type="button"
          onClick={onVolver}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a los años
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {meses.map((mes) => (
          <button
            key={mes}
            type="button"
            aria-pressed={mesSeleccionado === mes}
            onClick={() => setMesSeleccionado(mes)}
            className={`flex w-full items-center justify-between rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
              mesSeleccionado === mes
                ? 'border-blue-600 bg-blue-600 text-white shadow-sm'
                : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700'
            }`}
          >
            {mes}
            <ChevronRight className={`h-4 w-4 ${mesSeleccionado === mes ? 'text-white' : 'text-slate-400'}`} aria-hidden="true" />
          </button>
        ))}
      </div>

      {mesSeleccionado && (
        <article className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center shadow-xs">
          <h4 className="text-base font-semibold text-slate-900">
            Sin datos · {mesSeleccionado} {anio}
          </h4>
          <p className="mt-2 text-sm text-slate-600">
            No existen registros para este periodo.
          </p>
        </article>
      )}
    </section>
  );
}
