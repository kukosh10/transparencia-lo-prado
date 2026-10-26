import { useState } from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_7Props {
  onVolver: () => void;
}

const aniosDisponibles = ['2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009'];

export default function Seccion7_7({ onVolver }: Seccion7_7Props) {
  const [anioSeleccionado, setAnioSeleccionado] = useState('2016');

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
        <button
          onClick={onVolver}
          className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
        >
          Actos y resoluciones con efectos sobre terceros
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Respuesta Transparencia Pasiva</span>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Respuesta Transparencia Pasiva</h2>
          <p className="text-xs text-slate-500 mt-1">
            Selecciona el año para consultar los registros correspondientes
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-300 shadow-2xs">
          <Calendar className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
          <label htmlFor="seccion7-7-anio" className="text-xs font-semibold text-slate-700">Año:</label>
          <select
            id="seccion7-7-anio"
            value={anioSeleccionado}
            onChange={(event) => setAnioSeleccionado(event.target.value)}
            className="text-xs font-bold text-blue-800 bg-transparent border-none outline-none cursor-pointer pr-2"
          >
            {aniosDisponibles.map((anio) => (
              <option key={anio} value={anio}>{anio}</option>
            ))}
          </select>
        </div>
      </div>

      <EstadoSinRegistros titulo="Respuesta Transparencia Pasiva" anio={anioSeleccionado} />

      <div className="border-t border-slate-200 pt-4 flex justify-between items-center">
        <button
          onClick={onVolver}
          className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-all cursor-pointer flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a Actos y Resoluciones
        </button>
      </div>
    </div>
  );
}
