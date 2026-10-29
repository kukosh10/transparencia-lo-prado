import { ChevronRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import PdfLinkButton from '../PdfLinkButton';

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

const datos = [
  { etiqueta: 'Tipo de subsidio o beneficio', valor: 'Rebaja del 50% en pago de los Derechos de Aseo Domiciliario' },
  { etiqueta: 'Unidad, órgano interno o dependencia', valor: 'Oficina de Cobranza' },
  { etiqueta: 'Requisitos y antecedentes para postular', valor: 'Ver enlace web de requisitos y antecedentes para postular.' },
  { etiqueta: 'Monto global asignado', valor: 'Monto indeterminado' },
  { etiqueta: 'Tipo de unidad monetaria', valor: 'Pesos' },
  { etiqueta: 'Inicio del período de postulación', valor: '01.01.2016' },
  { etiqueta: 'Fin del período de postulación', valor: '30.04.2016' },
  { etiqueta: 'Criterio de evaluación y asignación', valor: 'Mayo, fecha de la resolución' },
  { etiqueta: 'Plazos asociados al procedimiento de evaluación y asignación', valor: 'Mayo' },
  {
    etiqueta: 'Objetivo del subsidio o beneficio',
    valor: '1) Los que posean un puntaje de la Ficha de Protección Social superior a 11.734 y hasta 12.500 puntos, y cuyo ingreso no sea superior a un ingreso mínimo mensual, situación esta última que será acreditada con informe social. 2) Los que tengan una pensión entre $200.000 y $400.000 previo informe social.'
  },
  { etiqueta: 'Tipo', valor: 'Ordenanza' },
  { etiqueta: 'Denominación', valor: 'Decreto' },
  { etiqueta: 'Número', valor: '2290' },
  { etiqueta: 'Fecha', valor: '27.12.2010' },
  { etiqueta: 'Razones de exclusión de datos', valor: 'No existen' }
];

const enlaces = [
  { etiqueta: 'Ver archivo PDF', tipo: 'pdf' as const, url: '' },
  { etiqueta: 'Nómina de beneficiarios', tipo: 'web' as const },
  { etiqueta: 'Mayor información', tipo: 'web' as const }
];

export default function Seccion9_1_AseoDomici() {
  const [mesSeleccionado, setMesSeleccionado] = useState<string | null>(null);
  const mesesConDatos = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

  return (
    <div>
      <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Selecciona un mes</div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {meses.map((mes) => (
          <button
            key={mes}
            type="button"
            aria-pressed={mesSeleccionado === mes}
            onClick={() => setMesSeleccionado(mesSeleccionado === mes ? null : mes)}
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
        <div className="mt-5 border-t border-slate-200 pt-5">
          <div className="mb-4">
            <h3 className="text-base font-semibold text-slate-900">Rebaja de Derechos de Aseo Domiciliario · {mesSeleccionado} 2016</h3>
            <p className="mt-1 text-xs text-slate-500">Detalle del beneficio publicado para este período</p>
          </div>
          {!mesesConDatos.includes(mesSeleccionado) ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center">
              <p className="text-sm font-semibold text-slate-700">Sin datos publicados</p>
              <p className="mt-1 text-sm text-slate-500">No se registran datos para {mesSeleccionado.toLowerCase()} de 2016.</p>
            </div>
          ) : (
            <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
              <header className="px-4 py-4 sm:px-5">
                <span className="inline-flex rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                  Rebaja de Derechos de Aseo Domiciliario · {mesSeleccionado} 2016
                </span>
                <h4 className="mt-3 text-sm font-semibold text-slate-900">Rebaja del 50% en el pago de Derechos de Aseo Domiciliario</h4>
              </header>
              <dl className="grid gap-x-6 gap-y-4 border-t border-slate-100 bg-slate-50/80 px-4 py-4 sm:grid-cols-2 sm:px-5 lg:grid-cols-3">
                {datos.map((dato) => (
                  <div key={dato.etiqueta} className="min-w-0">
                    <dt className="text-xs font-medium text-slate-500">{dato.etiqueta}</dt>
                    <dd className="mt-1 break-words text-xs leading-relaxed text-slate-800">{dato.valor}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-2 border-t border-slate-100 px-4 py-4 sm:px-5">
                {enlaces.map((enlace) =>
                  enlace.tipo === 'pdf' ? (
                    <PdfLinkButton key={enlace.etiqueta} href={enlace.url} />
                  ) : (
                    <button
                      key={enlace.etiqueta}
                      type="button"
                      onClick={() => window.open('about:blank', '_blank', 'noopener,noreferrer')}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      {enlace.etiqueta}
                    </button>
                  )
                )}
              </div>
            </article>
          )}
        </div>
      )}
    </div>
  );
}
