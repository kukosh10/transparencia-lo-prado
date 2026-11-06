import { ArrowLeft, ExternalLink, FileText } from 'lucide-react';

interface Seccion11_1Props {
  onVolverSeccion: () => void;
  onAbrirPresupuesto: (anio: string) => void;
}

const presupuestosPorAnio = [
  { anio: '2016', decreto: '', gasto: '', ingreso: '' },
  { anio: '2015', decreto: '', gasto: '', ingreso: '' },
  { anio: '2014', decreto: '', gasto: '', ingreso: '' },
  { anio: '2013', decreto: '', gasto: '', ingreso: '' },
  { anio: '2012', decreto: '', gasto: '', ingreso: '' },
  { anio: '2011', decreto: '', gasto: '', ingreso: '' },
  { anio: '2010', decreto: '', gasto: '', ingreso: '' },
  { anio: '2009', decreto: '', gasto: '', ingreso: '' },
];

const enlacesPdf = [
  { clave: 'decreto', titulo: 'Decreto Alcaldicio' },
  { clave: 'gasto', titulo: 'Presupuesto de Gasto' },
  { clave: 'ingreso', titulo: 'Presupuesto de Ingreso' },
] as const;

export default function Seccion11_1({ onVolverSeccion, onAbrirPresupuesto }: Seccion11_1Props) {
  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolverSeccion} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Presupuesto asignado y su ejecución</span>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Presupuestos asignados y modificaciones</span>
      </nav>
      <header className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Presupuesto histórico</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Presupuesto Inicial y sus Modificaciones</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Consulta los documentos presupuestarios y las modificaciones correspondientes a cada año.
        </p>
      </header>

      <section aria-label="Presupuestos por año" className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="w-24 px-4 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Año</th>
                {enlacesPdf.map(({ clave, titulo }) => (
                  <th key={clave} scope="col" className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {titulo}
                  </th>
                ))}
                <th scope="col" className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Modificaciones del Presupuesto
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {presupuestosPorAnio.map((presupuesto) => (
                <tr key={presupuesto.anio} className="transition-colors hover:bg-blue-50/40">
                  <th scope="row" className="whitespace-nowrap px-4 py-3 text-sm font-bold text-slate-800">
                    {presupuesto.anio}
                  </th>
                  {enlacesPdf.map(({ clave, titulo }) => (
                    <td key={clave} className="px-4 py-3 text-center">
                      <a
                        href={presupuesto[clave] || 'about:blank'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${titulo} ${presupuesto.anio}: ver archivo PDF`}
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                      >
                        <FileText className="h-4 w-4 text-red-600" aria-hidden="true" />
                        Ver Archivo PDF
                      </a>
                    </td>
                  ))}
                  <td className="px-4 py-3 text-center">
                    <button
                      type="button"
                      onClick={() => onAbrirPresupuesto(presupuesto.anio)}
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-100 hover:text-blue-900"
                    >
                      Ver modificaciones
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
