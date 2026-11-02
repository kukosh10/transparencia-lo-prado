import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Seccion9_3_Benef_Sub_Agua2014_Mayo from './Seccion9_3(Benef.Sub.Agua2014.Mayo)';
import Seccion9_3_Benef_Sub_Agua2014_Abril from './Seccion9_3(Benef.Sub.Agua2014.Abril)';
import Seccion9_3_Benef_Sub_Agua2014_Marzo from './Seccion9_3(Benef.Sub.Agua2014.Marzo)';
import Seccion9_3_Benef_Sub_Agua2014_Febrero from './Seccion9_3(Benef.Sub.Agua2014.Febrero)';
import Seccion9_3_Benef_Sub_Agua2014_Enero from './Seccion9_3(Benef.Sub.Agua2014.Enero)';
import Seccion9_3_Benef_Sub_Agua2016_Enero from './Seccion9_3(Benef.Sub.Agua2016.Enero)';
import Seccion9_3_Benef_Sub_Agua2016_Febrero from './Seccion9_3(Benef.Sub.Agua2016.Febrero)';
import Seccion9_3_Benef_Sub_Agua2016_Marzo from './Seccion9_3(Benef.Sub.Agua2016.Marzo)';
import Seccion9_3_Benef_Sub_Agua2016_Abril from './Seccion9_3(Benef.Sub.Agua2016.Abril)';
import Seccion9_3_Benef_Sub_Agua2016_Mayo from './Seccion9_3(Benef.Sub.Agua2016.Mayo)';
import Seccion9_3_Benef_Sub_Agua2016_Junio from './Seccion9_3(Benef.Sub.Agua2016.Junio)';
import Seccion9_3_Benef_Sub_Agua2016_Julio from './Seccion9_3(Benef.Sub.Agua2016.Julio)';
import Seccion9_3_Benef_Sub_Agua2016_Agosto from './Seccion9_3(Benef.Sub.Agua2016.Agosto)';
import Seccion9_3_Benef_Sub_Agua2016_Septiembre from './Seccion9_3(Benef.Sub.Agua2016.Septiembre)';

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

interface Props {
  anio: string;
  tipoNomina: string;
  onVolver: () => void;
  mesesSinDatos?: readonly string[];
}

export default function Seccion9_3_Benef_Sub_Agua({
  anio,
  tipoNomina,
  onVolver,
  mesesSinDatos = []
}: Props) {
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
          Volver a la nómina
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

      {mesSeleccionado === 'Enero' && anio === '2016' ? (
        <Seccion9_3_Benef_Sub_Agua2016_Enero />
      ) : mesSeleccionado === 'Febrero' && anio === '2016' ? (
        <Seccion9_3_Benef_Sub_Agua2016_Febrero />
      ) : mesSeleccionado === 'Marzo' && anio === '2016' ? (
        <Seccion9_3_Benef_Sub_Agua2016_Marzo />
      ) : mesSeleccionado === 'Abril' && anio === '2016' ? (
        <Seccion9_3_Benef_Sub_Agua2016_Abril />
      ) : mesSeleccionado === 'Mayo' && anio === '2016' ? (
        <Seccion9_3_Benef_Sub_Agua2016_Mayo />
      ) : mesSeleccionado === 'Junio' && anio === '2016' ? (
        <Seccion9_3_Benef_Sub_Agua2016_Junio />
      ) : mesSeleccionado === 'Julio' && anio === '2016' ? (
        <Seccion9_3_Benef_Sub_Agua2016_Julio />
      ) : mesSeleccionado === 'Agosto' && anio === '2016' ? (
        <Seccion9_3_Benef_Sub_Agua2016_Agosto />
      ) : mesSeleccionado === 'Septiembre' && anio === '2016' ? (
        <Seccion9_3_Benef_Sub_Agua2016_Septiembre />
      ) : mesSeleccionado === 'Enero' && anio === '2014' ? (
        <Seccion9_3_Benef_Sub_Agua2014_Enero />
      ) : mesSeleccionado === 'Febrero' && anio === '2014' ? (
        <Seccion9_3_Benef_Sub_Agua2014_Febrero />
      ) : mesSeleccionado === 'Marzo' && anio === '2014' ? (
        <Seccion9_3_Benef_Sub_Agua2014_Marzo />
      ) : mesSeleccionado === 'Abril' && anio === '2014' ? (
        <Seccion9_3_Benef_Sub_Agua2014_Abril />
      ) : mesSeleccionado === 'Mayo' && anio === '2014' ? (
        <Seccion9_3_Benef_Sub_Agua2014_Mayo />
      ) : mesSeleccionado && mesesSinDatos.includes(mesSeleccionado) ? (
        <article className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center shadow-xs">
          <h4 className="text-base font-semibold text-slate-900">Sin datos · {mesSeleccionado} {anio}</h4>
          <p className="mt-2 text-sm text-slate-600">
            No se registran datos para {mesSeleccionado.toLowerCase()} de {anio}.
          </p>
        </article>
      ) : mesSeleccionado ? (
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
          <h4 className="text-base font-semibold text-slate-900">{tipoNomina} · {mesSeleccionado} {anio}</h4>
          <p className="mt-2 text-sm text-slate-600">El detalle de beneficiarios de este mes se agregará aquí.</p>
        </article>
      ) : null}
    </section>
  );
}
