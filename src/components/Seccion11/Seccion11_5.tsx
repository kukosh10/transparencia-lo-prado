import { ArrowLeft, ChevronRight, FileText } from 'lucide-react';
import { useState } from 'react';

interface Seccion11_5Props {
  onVolverSeccion: () => void;
}

const tiposDePasivo = ['Pasivo Municipalidad', 'Pasivo Corporación Municipal'] as const;
const trimestres = [
  'Primer Trimestre',
  'Segundo Trimestre',
  'Tercer Trimestre',
  'Cuarto Trimestre',
] as const;

const pasivosMunicipalidad = [
  { anio: '2016', pdfs: ['', '', '', ''], sinDatos: ['Cuarto Trimestre'] },
  { anio: '2015', pdfs: ['', '', '', ''], sinDatos: [] },
  { anio: '2014', pdfs: ['', '', '', ''], sinDatos: [] },
  { anio: '2013', pdfs: ['', '', '', ''], sinDatos: [] },
  { anio: '2012', pdfs: ['', '', '', ''], sinDatos: [] },
  { anio: '2011', pdfs: ['', '', '', ''], sinDatos: [] },
  { anio: '2010', pdfs: ['', '', '', ''], sinDatos: [] },
  { anio: '2009', pdfs: ['', '', '', ''], sinDatos: trimestres },
];

const pasivosCorporacion = [
  { anio: '2016', pdfs: ['', '', '', ''], sinDatos: ['Cuarto Trimestre'] },
  { anio: '2015', pdfs: ['', '', '', ''], sinDatos: [] },
  { anio: '2014', pdfs: ['', '', '', ''], sinDatos: [] },
  { anio: '2013', pdfs: ['', '', '', ''], sinDatos: ['Primer Trimestre', 'Segundo Trimestre'] },
  { anio: '2012', pdfs: ['', '', '', ''], sinDatos: trimestres },
  { anio: '2011', pdfs: ['', '', '', ''], sinDatos: trimestres },
  { anio: '2010', pdfs: ['', '', '', ''], sinDatos: trimestres },
  { anio: '2009', pdfs: ['', '', '', ''], sinDatos: trimestres },
];

export default function Seccion11_5({ onVolverSeccion }: Seccion11_5Props) {
  const [tipoSeleccionado, setTipoSeleccionado] = useState<(typeof tiposDePasivo)[number] | null>(null);
  const registrosSeleccionados = tipoSeleccionado === 'Pasivo Municipalidad'
    ? pasivosMunicipalidad
    : pasivosCorporacion;

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolverSeccion} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Presupuesto asignado y su ejecución</span>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Presupuestos de Pasivos</span>
        {tipoSeleccionado && (
          <>
            <span className="text-slate-400">&gt;</span>
            <span className="text-slate-700">{tipoSeleccionado}</span>
          </>
        )}
      </nav>

      {tipoSeleccionado ? (
        <>
          <header className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Presupuesto de pasivos</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">{tipoSeleccionado}</h2>
          </header>
          <section aria-label={`${tipoSeleccionado} por año y trimestre`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] table-fixed border-collapse text-left lg:min-w-0">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="sticky left-0 z-10 w-24 border-b border-slate-200 bg-slate-50 px-4 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Año
                    </th>
                    {trimestres.map((trimestre) => (
                      <th key={trimestre} scope="col" className="border-b border-slate-200 px-4 py-4 text-center text-xs font-semibold text-slate-600">
                        {trimestre}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {registrosSeleccionados.map((registro) => (
                    <tr key={registro.anio} className="transition-colors hover:bg-blue-50/40">
                      <th scope="row" className="sticky left-0 bg-white px-4 py-3 text-sm font-bold text-slate-800">
                        {registro.anio}
                      </th>
                      {trimestres.map((trimestre, indice) => (
                        <td key={trimestre} className="px-3 py-3 text-center">
                          {registro.sinDatos.includes(trimestre) ? (
                            <span className="text-xs text-slate-500">No hay datos</span>
                          ) : (
                            <a
                              href={registro.pdfs[indice] || 'about:blank'}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${tipoSeleccionado}, ${trimestre}, ${registro.anio}: ver archivo PDF`}
                              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                            >
                              <FileText className="h-4 w-4 text-red-600" aria-hidden="true" />
                              Ver PDF
                            </a>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      ) : (
        <>
          <header className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Presupuesto histórico</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Presupuesto de pasivos</h2>
          </header>
          <section aria-label="Tipos de presupuesto de pasivos" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {tiposDePasivo.map((tipo) => (
              <button
                key={tipo}
                type="button"
                onClick={() => setTipoSeleccionado(tipo)}
                className="group flex min-h-24 items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 text-left shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50/40 hover:shadow-md"
              >
                <span className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-700">{tipo}</span>
                <ChevronRight className="h-5 w-5 shrink-0 text-blue-600 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
            ))}
          </section>
        </>
      )}

      <div className="border-t border-slate-200 pt-4">
        <button
          type="button"
          onClick={() => {
            if (tipoSeleccionado) {
              setTipoSeleccionado(null);
            } else {
              onVolverSeccion();
            }
          }}
          className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {tipoSeleccionado ? 'Volver a Presupuesto de pasivos' : 'Volver a Transparencia Activa'}
        </button>
      </div>
    </div>
  );
}
