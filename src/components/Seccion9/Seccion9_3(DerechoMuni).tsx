import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { registrosMarzo2014 } from './Seccion9_3(DerechoMuni.Marzo2014)';
import { registrosMayo2014 } from './Seccion9_3(DerechoMuni.Mayo2014)';
import { registrosJunio2014 } from './Seccion9_3(DerechoMuni.Junio2014)';

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

interface Seccion9_3DerechoMuniProps {
  anio: string;
  tipoNomina: string;
  onVolver: () => void;
  mesesSinDatos?: readonly string[];
}

export default function Seccion9_3DerechoMuni({
  anio,
  tipoNomina,
  onVolver,
  mesesSinDatos = []
}: Seccion9_3DerechoMuniProps) {
  const [mesSeleccionado, setMesSeleccionado] = useState<string | null>(null);
  const registros = anio === '2014'
    ? mesSeleccionado === 'Marzo'
      ? registrosMarzo2014
      : mesSeleccionado === 'Mayo'
        ? registrosMayo2014
        : mesSeleccionado === 'Junio'
          ? registrosJunio2014
          : []
    : [];

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

      {mesSeleccionado && registros.length > 0 ? (
        <section aria-label={`Rebajas Derechos Municipales ${mesSeleccionado} ${anio}`} className="space-y-4">
          <header className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h4 className="text-base font-semibold text-slate-900">
                Rebajas Derechos Municipales · {mesSeleccionado} {anio}
              </h4>
              <p className="mt-1 text-xs text-slate-500">{registros.length} beneficiarios</p>
            </div>
          </header>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[780px] border-collapse text-left text-xs">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Nombre del programa o beneficio</th>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Apellido paterno del beneficiario</th>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Apellido materno del beneficiario</th>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Nombres del beneficiario</th>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Razón Social, si receptor es persona jurídica</th>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">RUT, si receptor es persona jurídica</th>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Acto por el cual se otorgó</th>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Fecha de Otorgamiento</th>
                </tr>
              </thead>
              <tbody>
                {registros.map(([programa, apellidoPaterno, apellidoMaterno, nombres, acto, fecha], index) => (
                  <tr key={`${apellidoPaterno}-${apellidoMaterno}-${index}`} className="even:bg-slate-50/70">
                    <td className="border-b border-slate-100 px-3 py-2 text-blue-800">{programa}</td>
                    <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{apellidoPaterno}</td>
                    <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{apellidoMaterno}</td>
                    <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{nombres}</td>
                    <td className="border-b border-slate-100 px-3 py-2 text-slate-500">No aplica</td>
                    <td className="border-b border-slate-100 px-3 py-2 text-slate-500">No aplica</td>
                    <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{acto}</td>
                    <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : mesSeleccionado ? (
        <article className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center shadow-xs">
          <h4 className="text-base font-semibold text-slate-900">
            {mesesSinDatos.includes(mesSeleccionado)
              ? `Sin datos · ${mesSeleccionado} ${anio}`
              : `Información pendiente · ${mesSeleccionado} ${anio}`}
          </h4>
          <p className="mt-2 text-sm text-slate-600">
            {mesesSinDatos.includes(mesSeleccionado)
              ? 'No existen registros para este periodo.'
              : 'Aún no se han recibido los registros de este periodo.'}
          </p>
        </article>
      ) : null}
    </section>
  );
}
