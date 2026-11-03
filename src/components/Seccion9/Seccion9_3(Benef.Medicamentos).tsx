import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';

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

export type RegistroMedicamento = readonly [
  apellidoPaterno: string,
  apellidoMaterno: string,
  nombres: string,
  acto: string,
  fechaOtorgamiento: string
];

export type RegistrosMedicamentosPorMes = Partial<Record<string, readonly RegistroMedicamento[]>>;

interface Seccion9_3MedicamentosProps {
  anio: string;
  tipoNomina: string;
  onVolver: () => void;
  registrosPorMes: RegistrosMedicamentosPorMes;
}

export default function Seccion9_3BenefMedicamentos({
  anio,
  tipoNomina,
  onVolver,
  registrosPorMes
}: Seccion9_3MedicamentosProps) {
  const [mesSeleccionado, setMesSeleccionado] = useState<string | null>(null);
  const [busqueda, setBusqueda] = useState('');
  const registros = mesSeleccionado ? registrosPorMes[mesSeleccionado] ?? [] : [];
  const resultados = useMemo(() => {
    const termino = busqueda.trim().toLocaleLowerCase('es');
    return registros.filter(([apellidoPaterno, apellidoMaterno, nombres, acto, fecha]) =>
      `${apellidoPaterno} ${apellidoMaterno} ${nombres} ${acto} ${fecha}`
        .toLocaleLowerCase('es')
        .includes(termino)
    );
  }, [busqueda, registros]);

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
            onClick={() => {
              setMesSeleccionado(mes);
              setBusqueda('');
            }}
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

      {mesSeleccionado && registros.length === 0 ? (
        <article className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center shadow-xs">
          <h4 className="text-base font-semibold text-slate-900">
            Sin datos · {mesSeleccionado} {anio}
          </h4>
          <p className="mt-2 text-sm text-slate-600">
            No existen registros para este periodo.
          </p>
        </article>
      ) : mesSeleccionado ? (
        <section aria-label={`Ayudas Sociales Médicas de ${mesSeleccionado} ${anio}`} className="space-y-4">
          <header className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h4 className="text-base font-semibold text-slate-900">
                Ayudas Sociales Médicas · {mesSeleccionado} {anio}
              </h4>
              <p className="mt-1 text-xs text-slate-500">{resultados.length} beneficiarios</p>
            </div>
            <label className="w-full text-xs font-medium text-slate-600 sm:w-72">
              Buscar beneficiario
              <input
                type="search"
                value={busqueda}
                onChange={(event) => setBusqueda(event.target.value)}
                placeholder="Nombre o apellido"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-xs placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              />
            </label>
          </header>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[780px] border-collapse text-left text-xs">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Programa</th>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Apellido paterno</th>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Apellido materno</th>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Nombre</th>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Razón social</th>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">RUT</th>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Acto de otorgamiento</th>
                  <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {resultados.map(([apellidoPaterno, apellidoMaterno, nombres, acto, fecha]) => (
                  <tr key={`${acto}-${apellidoPaterno}-${nombres}`} className="even:bg-slate-50/70">
                    <td className="border-b border-slate-100 px-3 py-2 text-blue-800">AYUDAS SOCIALES MEDICAS</td>
                    <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{apellidoPaterno}</td>
                    <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{apellidoMaterno}</td>
                    <td className="border-b border-slate-100 px-3 py-2 font-medium text-slate-800">{nombres}</td>
                    <td className="border-b border-slate-100 px-3 py-2 text-slate-500">No aplica</td>
                    <td className="border-b border-slate-100 px-3 py-2 text-slate-500">No aplica</td>
                    <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{acto}</td>
                    <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{fecha}</td>
                  </tr>
                ))}
                {resultados.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-4 py-8 text-center text-sm text-slate-500">
                      No se encontraron beneficiarios que coincidan con la búsqueda.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}
    </section>
  );
}
