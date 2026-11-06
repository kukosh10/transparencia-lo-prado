import { ArrowLeft, FileText } from 'lucide-react';

interface Seccion11_2Props {
  onVolverSeccion: () => void;
}

const meses = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
] as const;

const presupuestosPorAnio = [
  { anio: '2016', pdfs: ['', '', '', '', '', '', '', '', '', '', '', ''], sinDatos: ['noviembre', 'diciembre'] },
  { anio: '2015', pdfs: ['', '', '', '', '', '', '', '', '', '', '', ''], sinDatos: [] },
  { anio: '2014', pdfs: ['', '', '', '', '', '', '', '', '', '', '', ''], sinDatos: [] },
  { anio: '2013', pdfs: ['', '', '', '', '', '', '', '', '', '', '', ''], sinDatos: [] },
  { anio: '2012', pdfs: ['', '', '', '', '', '', '', '', '', '', '', ''], sinDatos: [] },
  { anio: '2011', pdfs: ['', '', '', '', '', '', '', '', '', '', '', ''], sinDatos: [] },
  { anio: '2010', pdfs: ['', '', '', '', '', '', '', '', '', '', '', ''], sinDatos: [] },
  { anio: '2009', pdfs: ['', '', '', '', '', '', '', '', '', '', '', ''], sinDatos: [] },
];

export default function Seccion11_2({ onVolverSeccion }: Seccion11_2Props) {
  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolverSeccion} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Presupuesto Aprobado por el Concejo</span>
      </nav>

      <header className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Presupuesto histórico</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Presupuesto Inicial Aprobado por el Concejo</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Consulta los documentos mensuales del presupuesto aprobado entre 2009 y 2016.
        </p>
      </header>

      <section aria-label="Presupuestos mensuales aprobados por año" className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] table-fixed border-collapse text-left lg:min-w-0">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="sticky left-0 z-10 w-24 border-b border-slate-200 bg-slate-50 px-4 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Año
                </th>
                {meses.map((mes) => (
                  <th key={mes} scope="col" className="border-b border-slate-200 px-3 py-4 text-center text-xs font-semibold capitalize tracking-wide text-slate-600">
                    {mes}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {presupuestosPorAnio.map((presupuesto) => (
                <tr key={presupuesto.anio} className="transition-colors hover:bg-blue-50/40">
                  <th scope="row" className="sticky left-0 bg-white px-4 py-3 text-sm font-bold text-slate-800">
                    {presupuesto.anio}
                  </th>
                  {meses.map((mes, indice) => {
                    return (
                      <td key={mes} className="px-2 py-3 text-center">
                        {presupuesto.sinDatos.includes(mes) ? (
                          <span className="text-xs text-slate-500">No hay datos</span>
                        ) : (
                          <a
                            href={presupuesto.pdfs[indice] || 'about:blank'}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Presupuesto ${mes} ${presupuesto.anio}: ver archivo PDF`}
                            className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-[10px] font-medium text-slate-700 shadow-xs transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                          >
                            <FileText className="h-3 w-3 text-red-600" aria-hidden="true" />
                            Ver PDF
                          </a>
                        )}
                      </td>
                    );
                  })}
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
