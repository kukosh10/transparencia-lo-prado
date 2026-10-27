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

interface Fila {
  etiqueta: string;
  contenido: ReactNode;
}

interface FichaDesarrollo {
  titulo?: string;
  filas: Fila[];
  enlaces?: EnlaceInformativo[];
}

const enlaces = {
  transparencia: 'http://transparencia.loprado.cl/',
  ministerio: 'https://www.midesof.gob.cl/',
  registroSocial: 'https://www.registrosocial.gob.cl/',
  fosis: 'https://www.fosis.cl/',
  bne: 'https://www.bne.cl/',
  conadi: 'https://www.conadi.gob.cl/'
};

const enlacesComunes: EnlaceInformativo[] = [
  { nombre: 'Transparencia Activa', href: enlaces.transparencia },
  { nombre: 'Organigrama Municipal' },
  { nombre: 'Contacto para consultas' }
];

const enlacesConMinisterio: EnlaceInformativo[] = [
  { nombre: 'Ministerio de Desarrollo Social', href: enlaces.ministerio },
  ...enlacesComunes,
  { nombre: 'Registro Social de Hogares / Ministerio de Desarrollo Social', href: enlaces.registroSocial }
];

const enlacesLaborales: EnlaceInformativo[] = [
  ...enlacesComunes,
  { nombre: 'Bolsa Nacional de Empleo', href: enlaces.bne }
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

function ListaEnlaces({ items }: { items: EnlaceInformativo[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5">
      {items.map((enlace) => (
        <li key={enlace.nombre}><Enlace {...enlace} /></li>
      ))}
    </ul>
  );
}

function RegistroSocial() {
  return <Enlace nombre="Registro Social de Hogares" href={enlaces.registroSocial} />;
}

const direccionOMIL = 'OMIL Comuna de Lo Prado, Avda. San Pablo 7127, Lo Prado.';
const fichaPostulacionMujer: FichaDesarrollo = {
  titulo: 'Programa Mujer Trabajadora y Jefa de Hogar - Lo Prado.',
  filas: [
    { etiqueta: 'Trámite o Servicio', contenido: 'Programa Mujer Trabajadora y Jefa de Hogar - Lo Prado.' },
    {
      etiqueta: 'En qué Consiste',
      contenido: 'El programa Mujer Trabajadora y Jefa de Hogar consiste en contribuir a la inserción laboral de calidad de las mujeres de la comuna de Lo Prado, entregando herramientas para enfrentar las principales barreras de acceso que enfrentan en el mercado de trabajo.'
    },
    {
      etiqueta: 'Requisitos',
      contenido: (
        <ul className="list-disc space-y-1 pl-5">
          <li>Ser jefa de hogar o núcleo.</li>
          <li>Mujeres con responsabilidades familiares (ejemplo: hijos/as, nietos/as, personas que dependan económicamente de ella).</li>
          <li>Tener entre 18 y 65 años de edad.</li>
          <li>Ser económicamente activa: estar trabajando (dependiente e independiente), cesante buscando trabajo.</li>
          <li>Vivir en la comuna.</li>
          <li>Pertenecer al I, II y III quintil de ingresos per cápita.</li>
          <li>No pertenecer al Programa Puente o Prodemu.</li>
        </ul>
      )
    },
    {
      etiqueta: 'Documentos requeridos',
      contenido: (
        <ul className="list-disc space-y-1 pl-5">
          <li>Cédula de identidad.</li>
          <li><RegistroSocial />.</li>
          <li>Inscripción Oficina Municipal de Intermediación Laboral (OMIL).</li>
        </ul>
      )
    },
    { etiqueta: 'A quién está dirigido', contenido: 'Podrán participar de este programa mujeres trabajadoras, con énfasis en las jefas de hogar.' },
    { etiqueta: 'Trámite a realizar y/o etapas', contenido: 'Postulación al Programa Mujer Trabajadora y Jefa de Hogar en los períodos de enero a marzo.' },
    {
      etiqueta: '¿Dónde se realiza?',
      contenido: (
        <>
          Oficina Municipal de Intermediación Laboral (OMIL).
          <br />
          Ubicada en: San Pablo #7127. Teléfonos 264345027 - 26434470 - Lo Prado.
        </>
      )
    },
    { etiqueta: 'Tiene costo', contenido: 'No' },
    { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
  ],
  enlaces: [
    { nombre: 'Ministerio de Desarrollo Social', href: enlaces.ministerio },
    ...enlacesComunes,
    { nombre: 'Programa Mujeres Jefas de Hogar / Servicio Nacional de la Mujer' },
    { nombre: 'Registro Social de Hogares / Ministerio de Desarrollo Social', href: enlaces.registroSocial }
  ]
};

const fichaEncuesta: FichaDesarrollo = {
  filas: [
    { etiqueta: 'Trámite o Servicio', contenido: 'Solicitud de Encuesta para Nueva Registro Social Hogar' },
    {
      etiqueta: 'En qué Consiste',
      contenido: 'Proceso administrativo y operativo en el cual se realiza la encuesta del solicitante y grupo familiar declarado, siendo esta la piedra angular para la obtención del porcentaje del Registro Social Hogar.'
    },
    {
      etiqueta: 'Requisitos',
      contenido: 'Acercarse al Municipio, Dirección de Desarrollo Comunitario, Oficina de Estratificación Social, para ciudadanos chilenos y extranjeros: cédula nacional de identidad vigente (único documento válido para iniciar el trámite).'
    },
    {
      etiqueta: 'Documentos requeridos',
      contenido: (
        <ul className="list-disc space-y-1 pl-5">
          <li>Llenar Declaración Jurada Simple (como se indicará en gabinete).</li>
          <li>Traer boletas de luz y agua o gas (si fuese de cañería).</li>
          <li>Certificados de nacimiento de los menores de edad (si el menor viviera solo con la madre).</li>
          <li>Si un menor de edad no estuviera al cuidado de la madre se deberá presentar la tuición o cuidado personal dictado por un Tribunal, que designe al solicitante como tutor.</li>
        </ul>
      )
    },
    { etiqueta: 'A quién está dirigido', contenido: 'A todo vecino de la Comuna de Lo Prado que resida hace más de 6 meses.' },
    {
      etiqueta: 'Trámite a realizar y/o etapas',
      contenido: (
        <ol className="list-decimal space-y-1 pl-5">
          <li>Solicitar número de atención presencial, indicando que se dirige a la Oficina de Estratificación Social.</li>
          <li>Entregar documentación requerida en gabinete a las ejecutivas de atención, quienes harán el ingreso e indicarán fecha de aplicación de encuesta.</li>
          <li>Encuesta en terreno.</li>
          <li>Registro y aprobación de datos al sistema del <RegistroSocial />.</li>
          <li>Luego de 7 a 8 días se asignará porcentaje desde el <RegistroSocial />.</li>
        </ol>
      )
    },
    { etiqueta: '¿Dónde se realiza?', contenido: 'Oficina de Estratificación Social, San Pablo 5959, patio interior.' },
    { etiqueta: 'Tiene costo', contenido: 'No' },
    { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'Sí' }
  ],
  enlaces: enlacesConMinisterio
};

const fichaCertificadoRegistro: FichaDesarrollo = {
  titulo: 'Obtención de Certificado de Registro Social de Hogares',
  filas: [
    { etiqueta: 'Trámite o Servicio', contenido: 'Obtención de Certificado de Registro Social de Hogares' },
    {
      etiqueta: 'En qué Consiste',
      contenido: (
        <>
          Obtención de manera presencial o a través de la página del <Enlace nombre="Ministerio de Desarrollo Social" href={enlaces.ministerio} /> del Certificado de <RegistroSocial />.
        </>
      )
    },
    {
      etiqueta: 'Requisitos',
      contenido: 'Acercarse al Municipio, Dirección de Desarrollo Comunitario, Oficina de Estratificación Social con cédula nacional de identidad vigente (único documento válido para iniciar el trámite).'
    },
    {
      etiqueta: 'Documentos requeridos',
      contenido: (
        <ul className="list-disc space-y-1 pl-5">
          <li>Cédula de identidad.</li>
          <li>Huella dactilar (para el dispensador de certificados).</li>
          <li>Registro y clave para portal web del <Enlace nombre="Ministerio de Desarrollo Social" href={enlaces.ministerio} />.</li>
        </ul>
      )
    },
    { etiqueta: 'A quién está dirigido', contenido: 'A todo vecino de la Comuna de Lo Prado con el trámite de encuesta realizado.' },
    {
      etiqueta: 'Trámite a realizar y/o etapas',
      contenido: (
        <>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Con la cédula de identidad y huella dactilar, acercarse al dispensador de certificados, el cual lo entregará de forma inmediata.</li>
            <li>Frente a alguna dificultad con el dispensador, con número de atención podrá solicitarlo en gabinete.</li>
            <li>También podrá registrarse en el portal del <Enlace nombre="Ministerio de Desarrollo Social" href={enlaces.ministerio} /> y pedir su certificado online.</li>
          </ol>
          <p className="mt-2">Nota: Los certificados son personales; solo en caso de menores de edad y discapacidad podrán ser entregados a tutores, previa acreditación.</p>
        </>
      )
    },
    {
      etiqueta: '¿Dónde se realiza?',
      contenido: (
        <>
          Oficina de Estratificación Social, San Pablo 5959, patio interior y Portal web <RegistroSocial />.
        </>
      )
    },
    { etiqueta: 'Tiene costo', contenido: 'No' },
    { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'Sí' }
  ],
  enlaces: enlacesConMinisterio
};

const fichaFosis: FichaDesarrollo = {
  filas: [
    { etiqueta: 'Trámite o Servicio', contenido: 'Postulación a Fondos de emprendimiento de FOSIS y otros.' },
    {
      etiqueta: 'En qué Consiste',
      contenido: 'Se asesora y ayuda al participante del programa en la postulación en línea a emprendimientos de FOSIS y otros fondos.'
    },
    { etiqueta: 'Requisitos', contenido: 'Pertenecer a familias del Ingreso Ético Familiar y trabajar el componente sociolaboral del Programa Ingreso Ético Familiar.' },
    { etiqueta: 'Documentos requeridos', contenido: 'Carné de identidad para verificar que la persona pertenece al programa.' },
    { etiqueta: 'A quién está dirigido', contenido: 'Exclusivamente a integrantes de familias de los programas Puente, Chile Solidario e Ingreso Ético Familiar.' },
    { etiqueta: 'Trámite a realizar y/o etapas', contenido: 'Acordar sesión con asesor laboral que le corresponde a la familia para asesorar la postulación.' },
    { etiqueta: '¿Dónde se realiza?', contenido: 'Oficina del Programa Ingreso Ético Familiar - DIDECO.' },
    { etiqueta: 'Tiene costo', contenido: 'No' },
    { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
  ],
  enlaces: [
    ...enlacesComunes,
    { nombre: 'Chile Crece Contigo', href: 'https://www.crececontigo.gob.cl/' },
    { nombre: 'Registro Social de Hogares / Ministerio de Desarrollo Social', href: enlaces.registroSocial },
    { nombre: 'FOSIS', href: enlaces.fosis }
  ]
};

const fichaInscripcionBNE: FichaDesarrollo = {
  filas: [
    { etiqueta: 'Trámite o Servicio', contenido: 'Inscripción BNE' },
    { etiqueta: 'Información', contenido: 'No recibí una captura con los datos de este trámite. La ficha se completará cuando me compartas esa imagen.' }
  ],
  enlaces: [...enlacesLaborales, { nombre: 'Ministerio de Desarrollo Social', href: enlaces.ministerio }]
};

const fichaIntermediacion: FichaDesarrollo = {
  filas: [
    { etiqueta: 'Trámite o Servicio', contenido: 'Intermediación Laboral' },
    { etiqueta: 'En qué consiste', contenido: 'Postulación a empleos disponibles en la OMIL.' },
    { etiqueta: 'Requisitos', contenido: 'Inscripción BNE.' },
    {
      etiqueta: 'Documentos',
      contenido: (
        <>
          Cédula de identidad.
          <br />
          Tarjeta OMIL.
        </>
      )
    },
    { etiqueta: 'A quién está dirigido', contenido: 'Inscritos en BNE (de cualquier comuna de la Región Metropolitana).' },
    { etiqueta: 'Dónde realizar', contenido: direccionOMIL },
    { etiqueta: 'Tiene costo', contenido: 'No' },
    { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
  ],
  enlaces: enlacesLaborales
};

const fichaCapacitacionOfertas: FichaDesarrollo = {
  filas: [
    { etiqueta: 'Trámite o Servicio', contenido: 'Capacitación en postulación a Ofertas laborales de BNE' },
    { etiqueta: 'En qué consiste', contenido: 'Capacitación para la postulación en línea de las ofertas laborales de la BNE.' },
    { etiqueta: 'Requisitos', contenido: 'Inscripción BNE.' },
    { etiqueta: 'Documentos', contenido: 'Currículum Vitae.' },
    { etiqueta: 'A quién está dirigido', contenido: 'Inscritos BNE.' },
    { etiqueta: 'Dónde realizar', contenido: direccionOMIL },
    { etiqueta: 'Tiene costo', contenido: 'No' },
    { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
  ],
  enlaces: enlacesLaborales
};

const fichaCursos: FichaDesarrollo = {
  filas: [
    { etiqueta: 'Trámite o Servicio', contenido: 'Postulación a Cursos de Capacitación' },
    { etiqueta: 'En qué consiste', contenido: 'Postulación y derivación a centros de capacitación designados por SENCE.' },
    { etiqueta: 'Requisitos', contenido: 'Inscripción BNE.' },
    {
      etiqueta: 'Documentos',
      contenido: (
        <>
          Cédula de identidad.
          <br />
          Registro Social de Hogar (depende del Programa de Capacitación al cual se postule).
        </>
      )
    },
    { etiqueta: 'A quién está dirigido', contenido: 'Inscritos BNE.' },
    { etiqueta: 'Dónde realizar', contenido: direccionOMIL },
    { etiqueta: 'Tiene costo', contenido: 'No' },
    { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
  ],
  enlaces: enlacesLaborales
};

const fichaSeguroCesantia: FichaDesarrollo = {
  filas: [
    { etiqueta: 'Trámite o Servicio', contenido: 'Registro de Beneficiarios del Seguro de Cesantía' },
    { etiqueta: 'En qué consiste', contenido: 'Registro y firma mensual de beneficiarios del Seguro de Cesantía.' },
    { etiqueta: 'Requisitos', contenido: 'Inscripción en AFC.' },
    {
      etiqueta: 'Documentos',
      contenido: (
        <>
          Cédula de identidad.
          <br />
          Derivación de AFC.
        </>
      )
    },
    { etiqueta: 'A quién está dirigido', contenido: 'Beneficiarios del Seguro de Cesantía.' },
    { etiqueta: 'Dónde realizar', contenido: direccionOMIL },
    { etiqueta: 'Tiene costo', contenido: 'No' },
    { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
  ],
  enlaces: enlacesLaborales
};

const fichaSubsidioCesantia: FichaDesarrollo = {
  filas: [
    { etiqueta: 'Trámite o Servicio', contenido: 'Registro de Beneficiarios del Subsidio de Cesantía' },
    { etiqueta: 'En qué consiste', contenido: 'Registro para el cobro del Subsidio de Cesantía vía Caja de Compensación.' },
    { etiqueta: 'Requisitos', contenido: 'Inscripción en la Caja de Compensación o IPS ex INP, según corresponda.' },
    { etiqueta: 'Documentos', contenido: 'Cédula de identidad y solicitud de Subsidio de Cesantía emitida por la Caja de Compensación o IPS.' },
    { etiqueta: 'A quién está dirigido', contenido: 'Beneficiarios del Subsidio de Cesantía.' },
    { etiqueta: 'Dónde realizar', contenido: direccionOMIL },
    { etiqueta: 'Tiene costo', contenido: 'No' },
    { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
  ],
  enlaces: enlacesLaborales
};

const fichaTalleres: FichaDesarrollo = {
  filas: [
    { etiqueta: 'Trámite o Servicio', contenido: 'Talleres de Apresto laboral' },
    { etiqueta: 'En qué consiste', contenido: 'Capacitación para el desarrollo de competencias laborales.' },
    { etiqueta: 'Requisitos', contenido: 'Inscripción BNE.' },
    {
      etiqueta: 'Documentos',
      contenido: (
        <>
          Cédula de identidad.
          <br />
          Comprobante de inscripción BNE.
        </>
      )
    },
    { etiqueta: 'A quién está dirigido', contenido: 'Cesantes de la comuna de Lo Prado.' },
    { etiqueta: 'Dónde realizar', contenido: direccionOMIL },
    { etiqueta: 'Tiene costo', contenido: 'No' },
    { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
  ],
  enlaces: enlacesLaborales
};

const fichaIndigena: FichaDesarrollo = {
  filas: [
    { etiqueta: 'Trámite o Servicio', contenido: 'Certificado de Calidad Indígena' },
    {
      etiqueta: 'En qué consiste',
      contenido: 'Obtener un certificado que emite la Corporación de Desarrollo Indígena, CONADI, que acredita la ascendencia indígena de quien lo solicita.'
    },
    {
      etiqueta: 'Requisitos',
      contenido: 'Este certificado se entrega por una sola vez y es hasta la tercera generación el reconocimiento. Ser hijo de padre o madre indígena, cualquiera sea la naturaleza de su afiliación, inclusive la adoptiva. Ser cónyuge de una persona indígena.'
    },
    {
      etiqueta: 'Documentos',
      contenido: (
        <>
          Solicitud de acreditación por procedencia del apellido.
          <ol className="mt-1 list-decimal space-y-1 pl-5">
            <li>Fotocopia simple de la Cédula Nacional de Identidad vigente.</li>
            <li>Certificado de Nacimiento.</li>
            <li>Solicitud de acreditación por ascendencia: fotocopia de la Cédula Nacional de Identidad vigente.</li>
            <li>Certificado de Nacimiento del solicitante.</li>
            <li>Solicitud de acreditación conforme al artículo 2°, letra a), de la Ley N° 19.253:</li>
            <li>Fotocopia simple de la Cédula Nacional de Identidad vigente.</li>
            <li>Certificado de Nacimiento de los ascendientes.</li>
          </ol>
        </>
      )
    },
    { etiqueta: 'A quién está dirigido', contenido: 'A los chilenos pertenecientes a las culturas indígenas reconocidas por la Ley N° 19.253 y sus cónyuges.' },
    {
      etiqueta: 'Dónde realizar',
      contenido: 'Asistir a la Oficina de Pueblos Originarios de la Municipalidad de Lo Prado para ser asesorado, donde se indicarán los papeles que se necesitan según la situación de quien lo solicita. Se tramita el certificado de calidad indígena y en 5 días hábiles se entrega (esto también va a depender de la situación de quien lo solicita).'
    },
    { etiqueta: 'Costo', contenido: 'En la Oficina de Pueblos Originarios ubicada en San Germán 1052 o directamente en la oficina de CONADI ubicada en Sotero del Río N° 326.' },
    { etiqueta: 'Tiene costo', contenido: 'No' },
    { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
  ],
  enlaces: [...enlacesComunes, { nombre: 'Corporación de Desarrollo Indígena (CONADI)', href: enlaces.conadi }]
};

const fichaAtencionSocial: FichaDesarrollo = {
  filas: [
    { etiqueta: 'Trámite o Servicio', contenido: 'Atención social profesional' },
    {
      etiqueta: 'En qué Consiste',
      contenido: 'Atención y seguimiento de casos a través de la entrega de atención y asistencia técnica especializada a familias que requieren apoyo de acuerdo a sus características particulares asociadas a niños, niñas y adolescentes en situación de vulnerabilidad o condiciones especiales. Se generan las articulaciones, derivaciones, gestiones y atención necesaria entre la red local e instituciones para abordar la intervención con la familia y/o el niño. Se realiza intervención personalizada para niños/as que pertenecen al programa Chile Crece Contigo.'
    },
    {
      etiqueta: 'Requisitos',
      contenido: 'Vivir en la comuna (particularmente para el programa Chile Crece Contigo, los niños/as deben tener menos de 5 años de edad).'
    },
    {
      etiqueta: 'Documentos requeridos',
      contenido: 'Carné de identidad / Registro Social de Hogares en el caso de gestionar ayudas sociales.'
    },
    { etiqueta: 'A quién está dirigido', contenido: 'Padres, cuidadores y adultos responsables de niños, niñas y adolescentes que vivan en la comuna.' },
    { etiqueta: 'Trámite a realizar y/o etapas', contenido: 'Ingreso por demanda espontánea / atención de público.' },
    { etiqueta: '¿Dónde se realiza?', contenido: 'Dependencias de DIDECO, Oficina de Niñez y Juventud Temprana.' },
    { etiqueta: 'Tiene costo', contenido: 'No' },
    { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' },
    { etiqueta: 'Enlace a mayor información', contenido: 'amoreno@loprado.cl / 3887524' }
  ],
  enlaces: []
};

const fichas: Record<string, FichaDesarrollo> = {
  'Trámites Programa de la Mujer, Jefa de Hogar': fichaPostulacionMujer,
  'Solicitud de Encuesta para Nuevo Registro Social Hogar': fichaEncuesta,
  'Obtención de Certificado de Ficha de Protección Social': fichaCertificadoRegistro,
  'Postulación a Fondos de emprendimiento de FOSIS y otros': fichaFosis,
  'Inscripción BNE': fichaInscripcionBNE,
  'Intermediación Laboral': fichaIntermediacion,
  'Capacitación en postulación a Ofertas laborales de BNE': fichaCapacitacionOfertas,
  'Postulación a Cursos de Capacitación': fichaCursos,
  'Registro de Beneficiarios del Seguro de Cesantía': fichaSeguroCesantia,
  'Registro de Beneficiarios del Subsidio de Cesantía': fichaSubsidioCesantia,
  'Talleres de Apresto laboral': fichaTalleres,
  'Certificado de Calidad Indígena': fichaIndigena,
  'Atención Social Profesional': fichaAtencionSocial
};

export default function Seccion8TramDesComuni3({
  tramite,
  onVolver,
  onVolverSeccion
}: Seccion8TramDesComuniDetalleProps) {
  const ficha = fichas[tramite];
  const titulo = ficha?.titulo ?? tramite;

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
        <span className="text-slate-700">{titulo}</span>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900">{titulo}</h2>
        <p className="mt-1 text-xs text-slate-500">Trámite como intermediario</p>
      </div>

      {ficha ? (
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 bg-blue-50 md:grid-cols-2">
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Trámite:</h3>
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Dirección de Desarrollo Comunitario</h3>
          </div>
          <dl className="divide-y divide-slate-100">
            {ficha.filas.map(({ etiqueta, contenido }, index) => (
              <div key={`${etiqueta}-${index}`} className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
                <dt className="self-center text-xs font-semibold text-slate-500">{etiqueta}</dt>
                <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">{contenido}</dd>
              </div>
            ))}
            {(ficha.enlaces?.length ?? 1) > 0 && (
              <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
                <dt className="self-center text-xs font-semibold text-slate-500">Enlace a mayor información</dt>
                <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                  <ListaEnlaces items={ficha.enlaces ?? enlacesConMinisterio} />
                </dd>
              </div>
            )}
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
