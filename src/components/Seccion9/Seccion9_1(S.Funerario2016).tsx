import { ExternalLink, ChevronRight } from 'lucide-react';
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
  { etiqueta: 'Unidad, órgano interno o dependencia', valor: 'DIDECO' },
  {
    etiqueta: 'Requisitos y antecedentes para postular',
    valor: 'Ser vecino residente de la comuna de Lo Prado, mayor de 18 años. Evaluación social de carencia de recursos para cubrir la demanda, a través de visita domiciliaria, informe social u otro realizado por la Asistente Social de la Municipalidad. Documentación de respaldo cuando así se requiera.'
  },
  { etiqueta: 'Monto global asignado', valor: '—' },
  { etiqueta: 'Tipo de unidad monetaria', valor: 'Pesos' },
  { etiqueta: 'Inicio del período de postulación', valor: '01.01.2016' },
  { etiqueta: 'Fin del período de postulación', valor: '31.12.2016' },
  {
    etiqueta: 'Criterio de evaluación y asignación',
    valor: 'Entrevista social, revisión de antecedentes y establecimiento de aporte económico de la familia de comuna de acuerdo con la profesional.'
  },
  {
    etiqueta: 'Plazos asociados al procedimiento de evaluación y asignación',
    valor: 'Disposición de un bus para traslado de personas. Financiamiento compartido con los beneficiarios.'
  },
  {
    etiqueta: 'Objetivo del subsidio o beneficio',
    valor: 'Es un servicio que se entrega a la comunidad, para trasladar a los deudos de una persona fallecida hasta el Cementerio donde tendrán lugar los funerales.'
  },
  { etiqueta: 'Tipo de acto', valor: 'Decreto' },
  {
    etiqueta: 'Denominación',
    valor: 'Fija procedimientos para la entrega de subsidios y beneficios sociales para traslado de deudos para familias en situación vulnerable.'
  },
  { etiqueta: 'Número', valor: 'Decreto N° 1033' },
  { etiqueta: 'Fecha', valor: '15.12.2015' },
  { etiqueta: 'Razones de exclusión de datos', valor: 'No aplica' }
];

const enlaces = [
  { etiqueta: 'Ver archivo PDF', tipo: 'pdf' as const, url: '' },
  { etiqueta: 'Nómina de beneficiarios', tipo: 'web' as const },
  { etiqueta: 'Mayor información', tipo: 'web' as const }
];

const beneficiariosAgosto = [
  {
    fechaOtorgamiento: '',
    denominacion: 'Servicio funerario',
    fechaDecreto: '22/07/2016',
    numeroDecreto: '1874',
    razonSocial: 'Angelo Antonucci Tapia',
    nombre: 'Mariano',
    apellidoPaterno: 'Dominguez',
    apellidoMaterno: 'Moscoso'
  },
  {
    fechaOtorgamiento: '25/08/2015',
    denominacion: 'Servicio funerario',
    fechaDecreto: '11/08/2016',
    numeroDecreto: '2022',
    razonSocial: 'Angelo Antonucci Tapia',
    nombre: 'Evelyn',
    apellidoPaterno: 'Torres',
    apellidoMaterno: 'Lopez'
  }
];

export default function Seccion9_1_S_Funerario2016() {
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
            <h3 className="text-base font-semibold text-slate-900">Servicios Funerarios · {mesSeleccionado} 2016</h3>
            <p className="mt-1 text-xs text-slate-500">Detalle del beneficio publicado para este período</p>
          </div>
          {!mesesConDatos.includes(mesSeleccionado) && mesSeleccionado !== 'Agosto' ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center">
              <p className="text-sm font-semibold text-slate-700">Sin datos publicados</p>
              <p className="mt-1 text-sm text-slate-500">No se registran datos para {mesSeleccionado.toLowerCase()} de 2016.</p>
            </div>
          ) : mesSeleccionado === 'Agosto' ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {beneficiariosAgosto.map((registro) => (
                <article key={registro.numeroDecreto} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
                  <header className="px-4 py-4">
                    <span className="inline-flex rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                      Servicios Funerarios · Agosto 2016 · Decreto N° {registro.numeroDecreto}
                    </span>
                    <h4 className="mt-3 text-sm font-semibold text-slate-900">{registro.denominacion}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      Beneficiario: {registro.nombre} {registro.apellidoPaterno} {registro.apellidoMaterno}
                    </p>
                  </header>
                  <dl className="grid gap-3 border-t border-slate-100 bg-slate-50/80 px-4 py-4 text-xs sm:grid-cols-2">
                    <div>
                      <dt className="font-medium text-slate-500">Fecha de otorgamiento</dt>
                      <dd className="mt-1 text-slate-800">{registro.fechaOtorgamiento || 'No informada'}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-slate-500">Fecha del decreto</dt>
                      <dd className="mt-1 text-slate-800">{registro.fechaDecreto}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-slate-500">Razón social</dt>
                      <dd className="mt-1 text-slate-800">{registro.razonSocial}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          ) : (
            <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
              <header className="px-4 py-4 sm:px-5">
                <span className="inline-flex rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                  Servicios Funerarios · {mesSeleccionado} 2016
                </span>
                <h4 className="mt-3 text-sm font-semibold text-slate-900">Traslado de deudos</h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Servicio de apoyo a la comunidad para el traslado de personas fallecidas al Cementerio.
                </p>
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
