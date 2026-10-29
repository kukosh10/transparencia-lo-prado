import { ExternalLink, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import PdfLinkButton from '../PdfLinkButton';

interface DatoBeneficio {
  etiqueta: string;
  valor: string;
}

interface FichaBeneficioProps {
  etiqueta: string;
  titulo: string;
  descripcion: string;
  datos: DatoBeneficio[];
  enlaces?: { etiqueta: string; url: string; tipo: 'pdf' | 'web' }[];
}

function FichaBeneficio({ etiqueta, titulo, descripcion, datos, enlaces = [] }: FichaBeneficioProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
      <header className="px-4 py-4 sm:px-5">
        <span className="inline-flex rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
          {etiqueta}
        </span>
        <h4 className="mt-3 text-sm font-semibold text-slate-900">{titulo}</h4>
        <p className="mt-1 text-xs leading-relaxed text-slate-600">{descripcion}</p>
      </header>
      <dl className="grid gap-x-6 gap-y-4 border-t border-slate-100 bg-slate-50/80 px-4 py-4 sm:grid-cols-2 sm:px-5 lg:grid-cols-3">
        {datos.map((dato) => (
          <div key={dato.etiqueta} className="min-w-0">
            <dt className="text-xs font-medium text-slate-500">{dato.etiqueta}</dt>
            <dd className="mt-1 break-words text-xs leading-relaxed text-slate-800">{dato.valor}</dd>
          </div>
        ))}
      </dl>
      {enlaces.length > 0 && (
          <div className="flex flex-wrap gap-2 border-t border-slate-100 px-4 py-4 sm:px-5">
            {enlaces.map((enlace) => (
              enlace.tipo === 'pdf' ? (
                <PdfLinkButton key={enlace.etiqueta} href={enlace.url} />
              ) : (
                <button
                  key={enlace.etiqueta}
                  type="button"
                  onClick={() => window.open(enlace.url, '_blank', 'noopener,noreferrer')}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  {enlace.etiqueta}
                </button>
              )
            ))}
          </div>
      )}
    </article>
  );
}

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

const datosEmergenciaEnero: DatoBeneficio[] = [
  { etiqueta: 'Unidad, órgano interno o dependencia', valor: 'DIDECO' },
  {
    etiqueta: 'Requisitos',
    valor: 'Ser residente de la comuna de Lo Prado. Evaluación social de carencia de recursos para cubrir la demanda, mediante visita domiciliaria, informe social u otro realizado por Asistente Social. Documentación de respaldo cuando así se requiera.'
  },
  { etiqueta: 'Monto global asignado', valor: '—' },
  { etiqueta: 'Unidad monetaria', valor: 'Pesos' },
  { etiqueta: 'Inicio del período de postulación', valor: '01.01.2016' },
  { etiqueta: 'Fin del período de postulación', valor: '31.12.2016' },
  {
    etiqueta: 'Criterio de evaluación',
    valor: 'Evaluación social en terreno y entrega de ayuda inmediata a familias afectadas por incendios, inundaciones u otros fenómenos naturales (lluvias), incluyendo un corte de polietileno.'
  },
  {
    etiqueta: 'Plazos asociados al procedimiento de evaluación y asignación',
    valor: 'El beneficio se entrega de acuerdo con la clasificación de la emergencia y la magnitud del siniestro que afecte a la familia. En caso de incendio con pérdida total, se entrega una mediagua y enseres básicos, tales como camas, camarotes, colchones, frazadas y canasta de alimentos. Si la pérdida es parcial y la vivienda requiere reparaciones, estas se realizan. Además, se apoya a familias afectadas por fenómenos naturales (lluvias) con un corte de polietileno.'
  },
  {
    etiqueta: 'Objetivo',
    valor: 'Apoyo técnico y profesional en situaciones de contingencia, tales como incendios, catástrofes climáticas u otras que califiquen como emergencia social. Los beneficios se asignan según el tipo de emergencia o la evaluación profesional.'
  },
  { etiqueta: 'Tipo de acto', valor: 'Decreto' },
  {
    etiqueta: 'Denominación del acto',
    valor: 'Fija procedimientos para la entrega de subsidios y beneficios sociales para situaciones de emergencia por cambios climáticos'
  },
  { etiqueta: 'Número de acto', valor: 'Decreto N° 1033' },
  { etiqueta: 'Fecha', valor: '15.12.2015' },
  { etiqueta: 'Razones de exclusión de datos', valor: 'No aplica' }
];

const mesesConEnlaces = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const enlacesMesConDocumentos = [
  { etiqueta: 'Ver archivo PDF', url: '', tipo: 'pdf' as const },
  { etiqueta: 'Nómina de beneficiarios', url: '', tipo: 'web' as const },
  { etiqueta: 'Mayor información', url: '', tipo: 'web' as const }
];

const datosMedicamentos: DatoBeneficio[] = [
  { etiqueta: 'Tipo de beneficio', valor: 'Medicamentos' },
  { etiqueta: 'Unidad responsable', valor: 'DIDECO' },
  {
    etiqueta: 'Requisitos',
    valor: 'Ser residente de la comuna de Lo Prado y mayor de 18 años. Evaluación social de carencia de recursos para cubrir la demanda, mediante visita domiciliaria, informe social u otro realizado por Asistente Social. Documentación de respaldo cuando así se requiera.'
  },
  { etiqueta: 'Unidad monetaria', valor: 'Pesos' },
  { etiqueta: 'Período', valor: '01.01.2016 al 31.12.2016' },
  {
    etiqueta: 'Criterio de evaluación',
    valor: 'Entrevista social, visita domiciliaria y evaluación realizada por profesional Asistente Social. Se pueden utilizar instrumentos como el Registro Social de Hogares actualizado y otros antecedentes aportados por la familia.'
  },
  { etiqueta: 'Plazos asociados', valor: '1235' },
  {
    etiqueta: 'Objetivo',
    valor: 'Ayuda social mediante convenio suscrito entre la Municipalidad y una farmacia, para adquirir medicamentos no provistos por la red pública de salud.'
  },
  {
    etiqueta: 'Acto administrativo',
    valor: 'Decreto N° 1033, de 15.12.2015. Fija procedimientos para la entrega de subsidios y beneficios sociales para enfermedades de alto costo o condiciones de salud desfavorables.'
  },
  { etiqueta: 'Razones de exclusión de datos', valor: 'No aplica' }
];

const beneficiariosAgosto = [
  {
    fechaOtorgamiento: '22/08/2016',
    denominacion: 'Baterías para laringe electrónica',
    fechaDecreto: '22/07/2016',
    numeroDecreto: '1884',
    razonSocial: 'Insumos Médicos AMISEC Ltda.',
    nombre: 'Carlos',
    apellidoPaterno: 'Robles',
    apellidoMaterno: 'Becerra'
  },
  {
    fechaOtorgamiento: '22/08/2016',
    denominacion: 'Examen de alto costo',
    fechaDecreto: '22/07/2016',
    numeroDecreto: '1875',
    razonSocial: 'Hospital San Juan de Dios',
    nombre: 'Raquel',
    apellidoPaterno: 'Inostroza',
    apellidoMaterno: 'Silva'
  },
  {
    fechaOtorgamiento: '22/08/2016',
    denominacion: 'Medicamentos e insumos de alto costo',
    fechaDecreto: '22/07/2016',
    numeroDecreto: '1876',
    razonSocial: 'Hospital San Juan de Dios',
    nombre: 'Claudia',
    apellidoPaterno: 'Hernández',
    apellidoMaterno: 'Sarmiento'
  },
  {
    fechaOtorgamiento: '20/08/2016',
    denominacion: 'Audífonos',
    fechaDecreto: '05/08/2016',
    numeroDecreto: '1981',
    razonSocial: 'Importaciones y Exportaciones IMA',
    nombre: 'Miguel',
    apellidoPaterno: 'Elgueta',
    apellidoMaterno: 'Maldonado'
  }
];

export default function AporteEmergencia2016() {
  const [mesSeleccionado, setMesSeleccionado] = useState<string | null>(null);

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
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-slate-900">Aporte Emergencia · {mesSeleccionado} 2016</h3>
              <p className="mt-1 text-xs text-slate-500">Detalle del beneficio publicado para este período</p>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{mesSeleccionado}</span>
          </div>
          {['Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].includes(mesSeleccionado) ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center">
              <p className="text-sm font-semibold text-slate-700">Sin datos publicados</p>
              <p className="mt-1 text-sm text-slate-500">No se registran datos para {mesSeleccionado.toLowerCase()} de 2016.</p>
            </div>
          ) : mesSeleccionado === 'Agosto' ? (
            <div className="grid gap-4">
              {beneficiariosAgosto.map((registro) => (
                <FichaBeneficio
                  key={registro.numeroDecreto}
                  etiqueta={`Aporte Emergencia · Agosto 2016 · Decreto N° ${registro.numeroDecreto}`}
                  titulo={registro.denominacion}
                  descripcion={`Beneficiario: ${registro.nombre} ${registro.apellidoPaterno} ${registro.apellidoMaterno}`}
                  datos={[
                    { etiqueta: 'Fecha de otorgamiento', valor: registro.fechaOtorgamiento },
                    { etiqueta: 'Fecha del decreto', valor: registro.fechaDecreto },
                    { etiqueta: 'Razón social', valor: registro.razonSocial }
                  ]}
                />
              ))}
            </div>
          ) : (
            <FichaBeneficio
              etiqueta={`Aporte Emergencia · ${mesSeleccionado} 2016`}
              titulo={mesSeleccionado === 'Enero' ? 'Aporte de Emergencias Sociales' : 'Medicamentos'}
              descripcion={
                mesSeleccionado === 'Enero'
                  ? 'Programa de subsidio o beneficio social administrado por la Dirección de Desarrollo Comunitario (DIDECO).'
                  : 'Ayuda social para la adquisición de medicamentos e insumos de alto costo.'
              }
              datos={(mesSeleccionado === 'Enero' ? datosEmergenciaEnero : datosMedicamentos).filter(
                (dato) => dato.etiqueta !== 'Tipo de beneficio'
              )}
              enlaces={mesesConEnlaces.includes(mesSeleccionado) ? enlacesMesConDocumentos : undefined}
            />
          )}
        </div>
      )}
    </div>
  );
}
