import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Seccion9_2_2016 from './Seccion9_2(2016)';
import Seccion9_2_2015 from './Seccion9_2(2015)';
import Seccion9_2_2014 from './Seccion9_2(2014)';
import Seccion9_2_2013 from './Seccion9_2(2013)';

interface Seccion9DetalleProps {
  onVolver: () => void;
  onVolverSeccion: () => void;
}

export default function Seccion9_2({ onVolver, onVolverSeccion }: Seccion9DetalleProps) {
  const [anioSeleccionado, setAnioSeleccionado] = useState<string | null>(null);
  const aniosDisponibles = ['2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009'];

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolverSeccion} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Subsidios y Beneficios
        </button>
        <span className="text-slate-400">&gt;</span>
        {anioSeleccionado ? (
          <>
            <button
              type="button"
              onClick={() => setAnioSeleccionado(null)}
              className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline"
            >
              Subsidios y Beneficios como Intermediario
            </button>
            <span className="text-slate-400">&gt;</span>
            <span className="text-slate-700">{anioSeleccionado}</span>
          </>
        ) : (
          <span className="text-slate-700">Subsidios y Beneficios como Intermediario</span>
        )}
      </nav>

      <header>
        <h2 className="text-xl font-bold text-slate-900">
          {anioSeleccionado
            ? `Subsidios y Beneficios como Intermediario ${anioSeleccionado}`
            : 'Subsidios y Beneficios como Intermediario'}
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          {anioSeleccionado
            ? `Información correspondiente al año ${anioSeleccionado}`
            : 'Selecciona un año para consultar la información'}
        </p>
      </header>

      {anioSeleccionado === '2014' ? (
        <Seccion9_2_2014 />
      ) : anioSeleccionado === '2013' ? (
        <Seccion9_2_2013 />
      // 2012, 2011, 2010 y 2009 comparten estos mismos datos.
      ) : anioSeleccionado === '2012' || anioSeleccionado === '2011' || anioSeleccionado === '2010' || anioSeleccionado === '2009' ? (
        <Seccion9_2_2016 anio={anioSeleccionado} />
      ) : anioSeleccionado === '2015' ? (
        <Seccion9_2_2015 />
      ) : anioSeleccionado === '2016' ? (
        <Seccion9_2_2016 />
      ) : anioSeleccionado ? (
        <section className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-xs">
          La información de este año se agregará aquí.
        </section>
      ) : (
        <section aria-label="Años disponibles" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {aniosDisponibles.map((anio) => (
            <button
              key={anio}
              type="button"
              onClick={() => setAnioSeleccionado(anio)}
              className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-blue-700 shadow-xs transition-colors hover:border-blue-300 hover:bg-blue-50"
            >
              <span>{anio}</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          ))}
        </section>
      )}

      <div className="border-t border-slate-200 pt-4">
        <button
          type="button"
          onClick={() => {
            if (anioSeleccionado) {
              setAnioSeleccionado(null);
            } else {
              onVolver();
            }
          }}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {anioSeleccionado ? 'Volver a años' : 'Volver a Subsidios y Beneficios'}
        </button>
      </div>
    </div>
  );
}
