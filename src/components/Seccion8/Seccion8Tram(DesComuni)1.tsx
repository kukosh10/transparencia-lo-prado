import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';

interface Seccion8TramDesComuniDetalleProps {
  tramite: string;
  onVolver: () => void;
  onVolverSeccion: () => void;
}

interface EnlaceInformativo {
  nombre: string;
  href?: string;
}

interface FichaDesarrollo {
  nombre?: string;
  filas: { etiqueta: string; contenido: ReactNode }[];
  enlaces?: EnlaceInformativo[];
}

const enlaceRegistroSocial = 'https://www.registrosocial.gob.cl/';
const enlacesGenerales: EnlaceInformativo[] = [
  { nombre: 'Transparencia Activa', href: 'http://transparencia.loprado.cl/' },
  { nombre: 'Organigrama Municipal' },
  { nombre: 'Contacto para consultas' },
  { nombre: 'Chile Crece Contigo', href: 'https://www.crececontigo.gob.cl/' },
  { nombre: 'Registro Social de Hogares / Ministerio de Desarrollo Social', href: enlaceRegistroSocial }
];

function Enlace({ nombre, href }: EnlaceInformativo) {
  return (
    <a
      href={href ?? 'about:blank'}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
    >
      {nombre}
    </a>
  );
}

function ListaEnlaces({ enlaces = enlacesGenerales }: { enlaces?: EnlaceInformativo[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5">
      {enlaces.map((enlace) => (
        <li key={enlace.nombre}><Enlace {...enlace} /></li>
      ))}
    </ul>
  );
}

function RegistroSocial() {
  return <Enlace nombre="Registro Social de Hogares" href={enlaceRegistroSocial} />;
}

const dirigidoVulnerabilidad = 'A todos los habitantes de la comuna de Lo Prado que se encuentren en situación de vulnerabilidad social.';
const documentosCarencia = 'Acreditar situación de carencia con documentos mencionados en recuadro superior.';
const lugarAsistenciaSocial = 'Oficina de Asistencia Social - DIDECO - Municipalidad de Lo Prado';
const etapasAsistenciaSocial = (
  <ol className="list-decimal space-y-1 pl-5">
    <li>Solicitar número de atención en la Oficina de Asistencia Social.</li>
    <li>Se realiza visita domiciliaria según corresponda al trámite.</li>
  </ol>
);
const requisitosPrograma = 'Pertenecer a familias de los programas Puente, Chile Solidario o Ingreso Ético Familiar y no haber obtenido el beneficio anteriormente.';
const audienciaPrograma = 'Exclusivamente a integrantes de familias de los programas Puente, Chile Solidario e Ingreso Ético Familiar.';
const documentosPrograma = 'Carné de identidad para verificar que la persona pertenece al programa.';

const fichasDesarrollo: Record<string, FichaDesarrollo> = {
  'Informes Sociales': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Informes Sociales' },
      {
        etiqueta: 'En qué Consiste',
        contenido: 'Instrumento técnico que acredita situación socioeconómica de la familia para optar a diversos beneficios estatales y privados.'
      },
      {
        etiqueta: 'Requisitos Generales',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Poseer <RegistroSocial /> en la comuna.</li>
            <li>Presentar cédula de identidad, libreta de familia y/o certificados de nacimiento de todos los miembros de la familia (obligatorio según sea el caso).</li>
            <li>De no poseer Registro Social de Hogares, se realizará una visita domiciliaria por la Profesional (Asistente Social).</li>
          </ol>
        )
      },
      {
        etiqueta: 'Documentos requeridos',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Acreditar ingresos de las personas que trabajan en la familia (las 3 últimas liquidaciones de sueldo y/o boletas de honorarios).</li>
            <li>Declaración jurada ante notario de los ingresos obtenidos por actividades laborales informales o independientes.</li>
            <li>Para acreditar cesantía se debe presentar finiquito laboral, cobro de seguro de cesantía y/o certificado de las últimas 12 cotizaciones de AFP.</li>
            <li>Acreditar gastos del núcleo familiar (boletas de pago de servicios básicos, arriendo, dividendo, colegiaturas, cuentas varias, etc.).</li>
          </ol>
        )
      },
      { etiqueta: 'A quién está dirigido', contenido: dirigidoVulnerabilidad },
      { etiqueta: 'Trámite a realizar y/o etapas', contenido: etapasAsistenciaSocial },
      { etiqueta: '¿Dónde se realiza?', contenido: lugarAsistenciaSocial },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
    ]
  },
  'Trámites Entrega de Ajuar Municipal': {
    nombre: 'Entrega de Ajuar Municipal',
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Entrega de Ajuar Municipal' },
      { etiqueta: 'En qué Consiste', contenido: 'Entrega de un ajuar para recién nacido.' },
      {
        etiqueta: 'Requisitos',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Tener un embarazo de 38 semanas.</li>
            <li>Asistir a una charla de los días miércoles para Derechos Sociales para embarazadas.</li>
            <li>Tener <RegistroSocial /> en Lo Prado.</li>
            <li>Evaluación de asistente social para verificar situación de vulnerabilidad social.</li>
          </ol>
        )
      },
      {
        etiqueta: 'Documentos requeridos',
        contenido: (
          <ul className="list-disc space-y-1 pl-5">
            <li>Carné de identidad.</li>
            <li>Control de embarazo.</li>
            <li><RegistroSocial />.</li>
          </ul>
        )
      },
      {
        etiqueta: 'A quién está dirigido',
        contenido: 'Embarazadas de Lo Prado que se atiendan en algún consultorio de la comuna y que presenten vulnerabilidad social y bajo nivel socioeconómico.'
      },
      { etiqueta: 'Trámite a realizar y/o etapas', contenido: 'Presentar documentos y pedir entrevista con Asistente Social de Programa Chile Crece Contigo.' },
      { etiqueta: '¿Dónde se realiza?', contenido: 'Oficina Chile Crece Contigo - DIDECO - Municipalidad de Lo Prado' },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
    ]
  },
  'Ayudas Sociales (materiales)': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Ayudas Sociales (materiales)' },
      {
        etiqueta: 'En qué Consiste (descripción breve)',
        contenido: (
          <>
            Ayuda consistente en la entrega de:
            <ol className="mt-1 list-decimal space-y-1 pl-5">
              <li>Alimentos.</li>
              <li>Camarotes.</li>
              <li>Frazadas.</li>
              <li>Colchonetas.</li>
              <li>Pañales adultos.</li>
              <li>Materiales de mejoramiento de viviendas.</li>
            </ol>
          </>
        )
      },
      {
        etiqueta: 'Requisitos Generales',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Poseer <RegistroSocial /> en la comuna cuyo porcentaje no supere el 40%.</li>
            <li>Presentar cédula de identidad, libreta de familia y/o certificados de nacimiento de todos los miembros de la familia (obligatorio según sea el caso).</li>
          </ol>
        )
      },
      { etiqueta: 'Documentos requeridos', contenido: documentosCarencia },
      { etiqueta: 'A quién está dirigido', contenido: dirigidoVulnerabilidad },
      { etiqueta: 'Trámite a realizar y/o etapas', contenido: etapasAsistenciaSocial },
      { etiqueta: '¿Dónde se realiza?', contenido: lugarAsistenciaSocial },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
    ]
  },
  'Ayudas para medicamentos de Alto Costo': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Ayudas para medicamentos de Alto Costo' },
      {
        etiqueta: 'En qué Consiste (descripción breve)',
        contenido: 'Consiste en ayudas económicas a personas que presenten situación económica deficitaria y necesidad manifiesta, y que requieran adquirir medicamentos e insumos de alto costo.'
      },
      {
        etiqueta: 'Requisitos Generales',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Certificado médico que acredite condición de salud crónica.</li>
            <li>Recetas médicas por medicamentos y/o exámenes de Servicio de Salud Pública (si corresponde).</li>
          </ol>
        )
      },
      { etiqueta: 'Documentos requeridos', contenido: documentosCarencia },
      { etiqueta: 'A quién está dirigido', contenido: dirigidoVulnerabilidad },
      { etiqueta: 'Trámite a realizar y/o etapas', contenido: etapasAsistenciaSocial },
      { etiqueta: '¿Dónde se realiza?', contenido: lugarAsistenciaSocial },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
    ]
  },
  'Ayudas para Fundación Vivienda': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Ayudas para Fundación Vivienda' },
      {
        etiqueta: 'En qué Consiste (descripción breve)',
        contenido: 'Aporte económico para que puedan adquirir mediaguas de emergencia para familias que habitan con problemas de hacinamiento, viviendas precarias o en condición de allegados.'
      },
      {
        etiqueta: 'Requisitos Generales',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Poseer <RegistroSocial /> en la comuna cuyo porcentaje no supere el 60%.</li>
            <li>Presentar cédula de identidad, libreta de familia y/o certificados de nacimiento de todos los miembros de la familia (obligatorio según sea el caso).</li>
          </ol>
        )
      },
      { etiqueta: 'Documentos requeridos', contenido: documentosCarencia },
      { etiqueta: 'A quién está dirigido', contenido: dirigidoVulnerabilidad },
      { etiqueta: 'Trámite a realizar y/o etapas', contenido: etapasAsistenciaSocial },
      { etiqueta: '¿Dónde se realiza?', contenido: lugarAsistenciaSocial },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
    ]
  },
  Emergencias: {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Emergencias' },
      {
        etiqueta: 'En qué Consiste',
        contenido: 'Atender situaciones de carácter grave y/o catastrófico que afecten a los habitantes de la comuna de Lo Prado. Brindar ayuda oportuna y pertinente ante situaciones tales como sismos, incendios, derrumbes, desalojos judiciales (lanzamientos), temporales de lluvia, entre otros.'
      },
      { etiqueta: 'Requisitos Generales', contenido: 'Residir en la comuna de Lo Prado.' },
      { etiqueta: 'Documentos requeridos', contenido: documentosCarencia },
      { etiqueta: 'A quién está dirigido', contenido: dirigidoVulnerabilidad },
      { etiqueta: 'Trámite a realizar y/o etapas', contenido: 'Se realiza visita domiciliaria según corresponda al trámite.' },
      { etiqueta: '¿Dónde se realiza?', contenido: lugarAsistenciaSocial },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
    ]
  },
  'Emergencias por Fallecimiento': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Emergencias por Fallecimiento' },
      {
        etiqueta: 'En qué Consiste',
        contenido: (
          <>
            <ol className="list-decimal space-y-1 pl-5">
              <li>Servicio funerario: consiste en un aporte para adquirir féretro.</li>
              <li>Traslado de deudos: consiste en un aporte para el traslado de la familia y vecinos.</li>
              <li>Derecho de sepultación: consiste en un aporte para el cementerio.</li>
            </ol>
            <p className="mt-2">Nota: el municipio brinda uno de estos tres servicios.</p>
          </>
        )
      },
      {
        etiqueta: 'Requisitos Generales',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li><RegistroSocial />.</li>
            <li>Tener el 40% de vulnerabilidad.</li>
            <li>Pase de sepultación.</li>
            <li>Certificado de defunción.</li>
            <li>Informe Social.</li>
          </ol>
        )
      },
      {
        etiqueta: 'Documentos requeridos',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Residir en la comuna de Lo Prado.</li>
            <li>Tener <RegistroSocial />.</li>
            <li>Ser mayor de 18 años.</li>
            <li>Evaluación social de carencia de recursos para cubrir la demanda por una Asistente Social.</li>
          </ol>
        )
      },
      { etiqueta: 'A quién está dirigido', contenido: dirigidoVulnerabilidad },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        contenido: (
          <>
            <ol className="list-decimal space-y-1 pl-5">
              <li>Solicitar número de atención en la Oficina de Asistencia Social.</li>
              <li>Será evaluado por una Asistente Social.</li>
            </ol>
            <p className="mt-2">En caso de emergencia que ocurra el fin de semana existe Turno de Emergencia que puede contactar a través de la Central de Radio. Fono: 22 388 74 00.</p>
          </>
        )
      },
      { etiqueta: '¿Dónde se realiza?', contenido: lugarAsistenciaSocial },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
    ],
    enlaces: enlacesGenerales.filter((enlace) => enlace.nombre !== 'Chile Crece Contigo')
  },
  'Rebaja para acceder a sacar o renovar Cédula de Identidad en Registro Civil': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Rebaja para acceder a sacar o renovar Cédula de Identidad en Registro Civil.' },
      { etiqueta: 'En qué Consiste', contenido: 'Entrega de un certificado que activa beneficio para sacar o renovar cédula de identidad por un valor de $500.' },
      { etiqueta: 'Requisitos', contenido: 'Pertenecer al Programa Puente, Chile Solidario o Ingreso Ético Familiar y no haber obtenido el beneficio anteriormente.' },
      { etiqueta: 'Documentos requeridos', contenido: 'Carné de identidad vencido o RUT. / trámite presencial.' },
      { etiqueta: 'A quién está dirigido', contenido: 'Exclusivamente a familias de los programas Puente, Chile Solidario e Ingreso Ético Familiar.' },
      { etiqueta: 'Trámite a realizar y/o etapas', contenido: 'Solicitar presencialmente el beneficio (certificado) y dirigirse al Registro Civil.' },
      { etiqueta: '¿Dónde se realiza?', contenido: 'Certificado: Oficina Ingreso Ético Familiar - DIDECO. Activación de beneficio: Registro Civil.' },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
    ]
  },
  'Rebaja y/o gratuidad para matrículas y beneficios estudiantiles en colegios municipales y/o particular subvencionados': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Rebaja y/o gratuidad para matrículas y beneficios estudiantiles en colegios municipales y/o particular subvencionados.' },
      {
        etiqueta: 'En qué Consiste',
        contenido: 'Se entrega un Certificado (Formulario Único de Derivación) a nombre del alumno(a). Este documento certifica que el alumno pertenece a alguno de estos programas y el colegio o institución lo prioriza en la matrícula y activa descuento y/o gratuidad en becas y beneficios estudiantiles.'
      },
      { etiqueta: 'Requisitos', contenido: requisitosPrograma },
      { etiqueta: 'Documentos requeridos', contenido: 'Carné de identidad para verificar que la persona pertenece al programa.' },
      { etiqueta: 'A quién está dirigido', contenido: audienciaPrograma },
      { etiqueta: 'Trámite a realizar y/o etapas', contenido: 'Solicitar presencialmente el beneficio (Formulario Único de Derivación) y dirigirse a presentarlo al colegio.' },
      { etiqueta: '¿Dónde se realiza?', contenido: 'Formulario Único de Derivación: oficina Ingreso Ético Familiar - DIDECO. Activación de beneficio: colegios y escuelas.' },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
    ]
  },
  'Gratuidad para atención veterinaria municipal (Vacunas, cirugías, controles)': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Gratuidad para atención veterinaria municipal (Vacunas, cirugías, controles)' },
      {
        etiqueta: 'En qué Consiste',
        contenido: 'Se entrega un Certificado (Formulario Único de Derivación FUD) a nombre del beneficiario. Este documento certifica que la persona pertenece a uno de estos programas y el municipio entrega gratuidad en servicio de atención veterinaria y/o cirugías.'
      },
      { etiqueta: 'Requisitos', contenido: 'Pertenecer a familias del Programa Puente, Chile Solidario o Ingreso Ético Familiar.' },
      { etiqueta: 'Documentos requeridos', contenido: documentosPrograma },
      { etiqueta: 'A quién está dirigido', contenido: audienciaPrograma },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        contenido: 'Solicitar presencialmente el beneficio (Formulario Único de Derivación) y dirigirse a presentarlo a la Ventanilla Única de la Municipalidad de Lo Prado, quienes darán una hora de atención.'
      },
      {
        etiqueta: '¿Dónde se realiza?',
        contenido: 'Formulario Único de Derivación: oficina Ingreso Ético Familiar - DIDECO. Activación de beneficio: Ventanilla Única de la Municipalidad de Lo Prado, donde darán una hora de atención.'
      },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
    ]
  },
  'Gratuidad para servicio de desratización y fumigación en domicilio': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Gratuidad para servicio de desratización y fumigación en domicilio.' },
      {
        etiqueta: 'En qué Consiste',
        contenido: 'Se entrega un Certificado (Formulario Único de Derivación FUD) a nombre del beneficiario. Este documento certifica que la persona pertenece a uno de estos programas y el municipio entrega gratuidad en el servicio de desratización y fumigación del domicilio de la persona.'
      },
      { etiqueta: 'Requisitos', contenido: 'Pertenecer a familias del Programa Puente, Chile Solidario o Ingreso Ético Familiar.' },
      { etiqueta: 'Documentos requeridos', contenido: documentosPrograma },
      { etiqueta: 'A quién está dirigido', contenido: audienciaPrograma },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        contenido: 'Solicitar presencialmente el beneficio (Formulario Único de Derivación) en oficina y dirigirse a presentarlo a la Ventanilla Única de la Municipalidad de Lo Prado, donde darán hora de atención.'
      },
      {
        etiqueta: '¿Dónde se realiza?',
        contenido: 'Formulario Único de Derivación: oficina Ingreso Ético Familiar - DIDECO. Activación de beneficio: Ventanilla Única de la Municipalidad de Lo Prado, donde darán una hora de atención.'
      },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
    ]
  },
  'Beca Deportiva': {
    nombre: 'Solicitud de Beca Deportiva',
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Solicitud de Beca Deportiva' },
      { etiqueta: 'En qué consiste', contenido: 'Solicitud de Beca deportiva para deportista destacado de la comuna de Lo Prado.' },
      { etiqueta: 'Requisitos', contenido: 'Persona natural, ser residente y habitante de la comuna de Lo Prado.' },
      {
        etiqueta: 'Documentos',
        contenido: (
          <>
            Carta solicitud dirigida al alcalde con copia a oficina de deportes.
            <br />
            Documentos que avalen solicitud de Beca:
            <ol className="mt-1 list-decimal space-y-1 pl-5">
              <li>Currículum deportivo.</li>
              <li>Carta Federación correspondiente.</li>
              <li>Fotocopia cédula de identidad.</li>
              <li>Certificado de residencia.</li>
            </ol>
          </>
        )
      },
      {
        etiqueta: 'A quién está dirigido',
        contenido: 'A toda persona deportista de proyección que se encuentra activa en una federación deportiva y que represente al país.'
      },
      { etiqueta: 'Dónde realizar', contenido: 'Ingresar carta solicitud al alcalde. Copia de carta solicitud a oficina de deportes.' },
      { etiqueta: 'Costo', contenido: 'Oficina de partes - Oficina de deportes' },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
    ],
    enlaces: enlacesGenerales.filter((enlace) =>
      ['Transparencia Activa', 'Organigrama Municipal', 'Contacto para consultas'].includes(enlace.nombre)
    )
  }
};

export default function Seccion8TramDesComuni1({
  tramite,
  onVolver,
  onVolverSeccion
}: Seccion8TramDesComuniDetalleProps) {
  const ficha = fichasDesarrollo[tramite];

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolverSeccion} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Trámites
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Dirección de Desarrollo Comunitario</span>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">{ficha?.nombre ?? tramite}</span>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900">{ficha?.nombre ?? tramite}</h2>
        <p className="mt-1 text-xs text-slate-500">Trámite con Recursos Propios</p>
      </div>

      {ficha ? (
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 bg-blue-50 md:grid-cols-2">
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Trámite:</h3>
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Dirección de Desarrollo Comunitario</h3>
          </div>
          <dl className="divide-y divide-slate-100">
            {ficha.filas.map(({ etiqueta, contenido }) => (
              <div key={etiqueta} className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
                <dt className="self-center text-xs font-semibold text-slate-500">{etiqueta}</dt>
                <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">{contenido}</dd>
              </div>
            ))}
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="self-center text-xs font-semibold text-slate-500">Enlace a mayor información</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ListaEnlaces enlaces={ficha.enlaces} />
              </dd>
            </div>
          </dl>
        </section>
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
          No hay información disponible para este trámite.
        </div>
      )}

      <div className="border-t border-slate-200 pt-4">
        <button type="button" onClick={onVolver} className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a trámites de Desarrollo Comunitario
        </button>
      </div>
    </div>
  );
}
