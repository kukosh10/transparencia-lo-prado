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
  enlaceOnline?: EnlaceInformativo;
}

const enlaces = {
  transparencia: 'http://transparencia.loprado.cl/',
  ministerio: 'https://www.midesof.gob.cl/',
  registroSocial: 'https://www.registrosocial.gob.cl/',
  compin: 'http://www.infocompin.cl/',
  pppf: 'https://www.minvu.gob.cl/opensite_20150715123956.aspx',
  mejoramientoCondominios: 'https://www.minvu.gob.cl/opensite_20141022183908.aspx',
  sitioPropio: 'https://www.minvu.gob.cl/opensite_det_20150506170554.aspx'
};

const enlacesSociales: EnlaceInformativo[] = [
  { nombre: 'Ministerio de Desarrollo Social', href: enlaces.ministerio },
  { nombre: 'Transparencia Activa', href: enlaces.transparencia },
  { nombre: 'Organigrama Municipal' },
  { nombre: 'Contacto para consultas' },
  { nombre: 'Registro Social de Hogares / Ministerio de Desarrollo Social', href: enlaces.registroSocial }
];

const enlacesConCompin: EnlaceInformativo[] = [
  { nombre: 'COMPIN', href: enlaces.compin },
  ...enlacesSociales
];

const enlacesMunicipales: EnlaceInformativo[] = [
  { nombre: 'Transparencia Activa', href: enlaces.transparencia },
  { nombre: 'Organigrama Municipal' },
  { nombre: 'Contacto para consultas' }
];

const enlacesVivienda = (programaHref: string): EnlaceInformativo[] => [
  { nombre: 'Transparencia Activa', href: enlaces.transparencia },
  { nombre: 'Organigrama Municipal' },
  { nombre: 'Contacto para consultas' },
  { nombre: 'Programa de subsidio Minvu', href: programaHref },
  { nombre: 'Registro Social de Hogares / Ministerio de Desarrollo Social', href: enlaces.registroSocial }
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

function EnlaceRegistroSocial() {
  return <Enlace nombre="Registro Social de Hogares" href={enlaces.registroSocial} />;
}

const ubicacionSubsidios = 'Ventanilla Única Área Social, San Pablo 5959, patio interior';
const pasosPostulacionSubsidio = (
  <ul className="list-disc space-y-1 pl-5">
    <li>Se solicita número de atención en forma presencial.</li>
    <li>Cumplir requisitos.</li>
    <li>Postular al beneficio.</li>
    <li>Ver listado con beneficiarios al interior de la Dirección de Desarrollo Comunitario.</li>
  </ul>
);
const sinCostoNoEnLinea: Fila[] = [
  { etiqueta: 'Tiene costo', contenido: 'No' },
  { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
];
const descripcionSubsidio = 'Subsidio monetario otorgado por el Estado';
const dirigidoDideco = 'Dirección de Desarrollo Comunitario';

const fichas: Record<string, FichaDesarrollo> = {
  'Subsidio Único Familiar': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Subsidio Único Familiar' },
      { etiqueta: 'En qué Consiste', contenido: descripcionSubsidio },
      { etiqueta: 'Requisitos', contenido: 'Ser padre, madre o tutor, a cargo de niños y niñas menores de 18 años carentes de recursos y sin previsión social.' },
      {
        etiqueta: 'Documentos requeridos',
        contenido: (
          <ul className="list-disc space-y-1 pl-5">
            <li>Cédula de identidad.</li>
            <li><EnlaceRegistroSocial /> con un porcentaje igual o inferior a 60%.</li>
            <li>Certificado de nacimiento.</li>
            <li>Copia de carátula de carnet de control sano al día para niños menores de 6 años.</li>
            <li>Certificado de alumno regular del año en curso para niños mayores de 6 años.</li>
          </ul>
        )
      },
      { etiqueta: 'A quién está dirigido', contenido: dirigidoDideco },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        contenido: (
          <>
            {pasosPostulacionSubsidio}
            <p className="mt-1">Ver listado de beneficiarios en el sitio web de <Enlace nombre="Transparencia Activa" href={enlaces.transparencia} /> / <Enlace nombre="Nómina de Subsidio de Familia" />.</p>
          </>
        )
      },
      { etiqueta: '¿Dónde se realiza?', contenido: ubicacionSubsidios },
      ...sinCostoNoEnLinea
    ]
  },
  'Subsidio Prenatal': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Subsidio Prenatal' },
      { etiqueta: 'En qué Consiste', contenido: descripcionSubsidio },
      { etiqueta: 'Requisitos', contenido: 'Mujeres embarazadas con quinto mes de gestación.' },
      {
        etiqueta: 'Documentos requeridos',
        contenido: (
          <ul className="list-disc space-y-1 pl-5">
            <li>Cédula de identidad.</li>
            <li><EnlaceRegistroSocial /> con un porcentaje igual o inferior a 60%.</li>
            <li>Certificado extendido por matrona que acredite 5.º mes de embarazo.</li>
          </ul>
        )
      },
      { etiqueta: 'A quién está dirigido', contenido: dirigidoDideco },
      { etiqueta: 'Trámite a realizar y/o etapas', contenido: pasosPostulacionSubsidio },
      { etiqueta: '¿Dónde se realiza?', contenido: ubicacionSubsidios },
      ...sinCostoNoEnLinea
    ]
  },
  'Subsidio Único Familiar Duplo': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Subsidio Único Familiar Duplo' },
      { etiqueta: 'En qué Consiste', contenido: descripcionSubsidio },
      { etiqueta: 'Requisitos', contenido: 'Ser madre, padre o tutor que tenga a su cargo el cuidado del menor de 18 años que presente discapacidad física, psíquica o sensorial.' },
      {
        etiqueta: 'Documentos requeridos',
        contenido: (
          <ul className="list-disc space-y-1 pl-5">
            <li>Cédula de identidad.</li>
            <li><EnlaceRegistroSocial /> con un porcentaje igual o inferior a 60%.</li>
            <li>Certificado de nacimiento.</li>
            <li>Copia de carátula de carnet de control sano al día para niños menores de 6 años.</li>
            <li>Certificado de alumno regular del año en curso para niños mayores de 6 años.</li>
            <li>Resolución de invalidez del <Enlace nombre="COMPIN" href={enlaces.compin} />.</li>
          </ul>
        )
      },
      { etiqueta: 'A quién está dirigido', contenido: dirigidoDideco },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        contenido: (
          <>
            {pasosPostulacionSubsidio}
            <p className="mt-1">Plazo de 60 días para el resultado.</p>
          </>
        )
      },
      { etiqueta: '¿Dónde se realiza?', contenido: ubicacionSubsidios },
      ...sinCostoNoEnLinea
    ],
    enlaces: enlacesConCompin
  },
  'Subsidio Agua Potable': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Subsidio Agua Potable' },
      { etiqueta: 'En qué Consiste', contenido: descripcionSubsidio },
      {
        etiqueta: 'Requisitos',
        contenido: 'Subsidio económico otorgado por el Estado al consumo de agua potable, consistente en un 50% del valor del mes de consumo de agua potable, con un tope de 15 m³.'
      },
      {
        etiqueta: 'Documentos requeridos',
        contenido: (
          <ul className="list-disc space-y-1 pl-5">
            <li>Cédula de identidad del jefe de familia.</li>
            <li>Cuenta del agua que debe encontrarse al día o en convenio de pago al día.</li>
            <li>Última boleta del servicio de agua potable cancelada.</li>
          </ul>
        )
      },
      { etiqueta: 'A quién está dirigido', contenido: dirigidoDideco },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        contenido: (
          <ul className="list-disc space-y-1 pl-5">
            <li>Se solicita número de atención en forma presencial.</li>
            <li>Cumplir requisitos.</li>
            <li>Postular al beneficio.</li>
            <li>Ver boleta del agua y verificar si es beneficiario.</li>
          </ul>
        )
      },
      { etiqueta: '¿Dónde se realiza?', contenido: ubicacionSubsidios },
      ...sinCostoNoEnLinea
    ],
    enlaces: enlacesMunicipales
  },
  'Pensión Básica Solidaria de Vejez': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Pensión Básica Solidaria de Vejez' },
      { etiqueta: 'En qué Consiste', contenido: descripcionSubsidio },
      { etiqueta: 'Requisitos', contenido: 'Subsidio monetario otorgado por el Estado a las personas adultas mayores carentes de recursos y sin previsión social.' },
      {
        etiqueta: 'Documentos requeridos',
        contenido: (
          <ul className="list-disc space-y-1 pl-5">
            <li>Cédula de identidad.</li>
            <li>No haber cotizado en ninguna AFP.</li>
            <li>Tener sobre 65 años.</li>
          </ul>
        )
      },
      { etiqueta: 'A quién está dirigido', contenido: dirigidoDideco },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        contenido: (
          <>
            <ul className="list-disc space-y-1 pl-5">
              <li>Se solicita número de atención en forma presencial.</li>
              <li>Cumplir requisitos.</li>
              <li>Postular al beneficio.</li>
              <li>Plazo de 60 días para el resultado.</li>
            </ul>
          </>
        )
      },
      { etiqueta: '¿Dónde se realiza?', contenido: ubicacionSubsidios },
      ...sinCostoNoEnLinea
    ],
    enlaces: enlacesMunicipales
  },
  'Pensión Básica Solidaria de Invalidez': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Pensión Básica Solidaria de Invalidez' },
      { etiqueta: 'En qué Consiste', contenido: descripcionSubsidio },
      {
        etiqueta: 'Requisitos',
        contenido: 'Subsidio monetario otorgado por el Estado a las personas que tienen algún tipo de invalidez, carentes de recursos y sin previsión social.'
      },
      {
        etiqueta: 'Documentos requeridos',
        contenido: (
          <ul className="list-disc space-y-1 pl-5">
            <li>Cédula de identidad.</li>
            <li>Registro Social de Hogares.</li>
            <li>No haber cotizado en ninguna AFP.</li>
            <li>Presentar alguna enfermedad invalidante y que sea certificada por su médico tratante.</li>
          </ul>
        )
      },
      { etiqueta: 'A quién está dirigido', contenido: dirigidoDideco },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        contenido: (
          <ul className="list-disc space-y-1 pl-5">
            <li>Se solicita número de atención en forma presencial.</li>
            <li>Cumplir requisitos.</li>
            <li>Postular al beneficio.</li>
            <li>Plazo de 60 días para el resultado.</li>
          </ul>
        )
      },
      { etiqueta: '¿Dónde se realiza?', contenido: ubicacionSubsidios },
      ...sinCostoNoEnLinea
    ],
    enlaces: enlacesMunicipales
  },
  'Subsidio para Niño y Niña con Deficiencia Mental': {
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Subsidio para Niño y Niña con Deficiencia Mental' },
      { etiqueta: 'En qué Consiste', contenido: descripcionSubsidio },
      { etiqueta: 'Requisitos', contenido: 'Subsidio monetario para niño o niña menor de 18 años que presente algún grado de discapacidad mental.' },
      {
        etiqueta: 'Documentos requeridos',
        contenido: (
          <ul className="list-disc space-y-1 pl-5">
            <li>Cédula de identidad del postulante.</li>
            <li>Cédula de identidad del tutor del postulante.</li>
            <li>Ministerio de Desarrollo Social: <EnlaceRegistroSocial /> con porcentaje no superior al 60%.</li>
            <li>No tener ingresos propios ni per cápita del grupo familiar superiores al 50% de la Pensión Mínima.</li>
            <li>Certificado de nacimiento.</li>
            <li>Certificado de residencia.</li>
            <li>Resolución de invalidez del <Enlace nombre="COMPIN" href={enlaces.compin} />.</li>
          </ul>
        )
      },
      { etiqueta: 'A quién está dirigido', contenido: dirigidoDideco },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        contenido: (
          <ul className="list-disc space-y-1 pl-5">
            <li>Se solicita número de atención en forma presencial.</li>
            <li>Cumplir requisitos.</li>
            <li>Postular al beneficio.</li>
            <li>Plazo de 60 días para el resultado.</li>
          </ul>
        )
      },
      { etiqueta: '¿Dónde se realiza?', contenido: ubicacionSubsidios },
      ...sinCostoNoEnLinea
    ],
    enlaces: enlacesConCompin.filter((enlace) => enlace.nombre !== 'Registro Social de Hogares / Ministerio de Desarrollo Social')
  },
  'Subsidios de Postulación a Proyectos de Mejoramiento Interior de la Vivienda': {
    titulo: 'Postulación a Proyectos de Mejoramiento Interior de la Vivienda (Programa Protección Patrimonio Familiar Llamado Regular)',
    filas: [
      {
        etiqueta: 'Trámite o Servicio',
        contenido: 'Postulación a Proyectos de Mejoramiento Interior de la Vivienda (Programa Protección Patrimonio Familiar Llamado Regular)'
      },
      {
        etiqueta: 'En qué Consiste',
        contenido: 'Postular a la comunidad organizada para obtener recursos con el fin de mejorar el interior de las viviendas por un monto total de 58 UF por vivienda.'
      },
      {
        etiqueta: 'Requisitos',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Agruparse con la Junta de Vecinos u otra organización.</li>
            <li>Ser propietario mayor de 18 años.</li>
            <li>No haber recibido el beneficio anteriormente.</li>
            <li>Ser propietario de una sola vivienda.</li>
            <li>Aporte de un ahorro de 3 UF, el último día hábil del mes anterior a la postulación.</li>
            <li>Contar con planos de la vivienda recibidos por la Dirección de Obras Municipal.</li>
            <li>Dirigirse a la Oficina de Vivienda u otra Prestadora de Servicio de Asistencia Técnica.</li>
          </ol>
        )
      },
      {
        etiqueta: 'Documentos requeridos',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Ficha Protección Social vigente en la comuna, no requiere puntaje mínimo.</li>
            <li>Plano regularizado en la DOM (Dirección de Obras Municipal).</li>
            <li>Libreta de ahorro para la vivienda con un depósito de 3 UF.</li>
            <li>Fotocopia de carné del postulante.</li>
            <li>Certificados a firmar en Oficina de Vivienda.</li>
          </ol>
        )
      },
      {
        etiqueta: 'A quién está dirigido',
        contenido: 'A vecinos que necesiten mejorar sus viviendas, sean propietarios y que estén organizados a través de la junta de vecinos u otra organización.'
      },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Coordinar con la Oficina de Vivienda u otra Entidad Patrocinante para realizar un proyecto.</li>
            <li>Organizar un grupo de vecinos de una misma Villa y/o Unidad Vecinal de al menos 30 personas.</li>
            <li>La totalidad del grupo debe entregar documentación requerida.</li>
            <li>La totalidad del grupo recibe visitas técnicas a sus viviendas, por parte de la Oficina, para determinar el presupuesto y las partidas a postular.</li>
            <li>Reunión con postulantes donde se aprueban y firman presupuestos.</li>
            <li>Postulación a recursos SERVIU del grupo.</li>
            <li>Asignación de recursos.</li>
            <li>Construcción y ejecución de Plan de Habilitación Social.</li>
          </ol>
        )
      },
      { etiqueta: '¿Dónde se realiza?', contenido: 'Oficina de Vivienda Mejoramiento de Barrios, San Pablo 7127 u otra Prestadora de Servicio de Asistencia Técnica.' },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea? (sí / no)', contenido: 'Sí' }
    ],
    enlaceOnline: {
      nombre: 'Título II del Programa de Protección del Patrimonio Familiar: Subsidios para Reparación y Mejoramiento de la Vivienda',
      href: enlaces.pppf
    },
    enlaces: enlacesVivienda(enlaces.pppf)
  },
  'Subsidios de Conformar y Formalizar Copropiedad (Programa Protección Patrimonio Familiar Llamado Especial)': {
    titulo: 'Conformar y Formalizar Copropiedad (Programa Protección Patrimonio Familiar Llamado Especial)',
    filas: [
      {
        etiqueta: 'Trámite o Servicio',
        contenido: 'Conformar y Formalizar Copropiedad (Programa Protección Patrimonio Familiar Llamado Especial)'
      },
      {
        etiqueta: 'En qué Consiste',
        contenido: 'Consiste en organizar bajo la Ley 19.537 de Copropiedad a los vecinos de un Condominio de Vivienda Social (CVS).'
      },
      {
        etiqueta: 'Requisitos',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Ser copropietario.</li>
            <li>Tener un representante de la Villa.</li>
            <li>Dirigirse a la Oficina de Vivienda Mejoramiento de Barrios.</li>
          </ol>
        )
      },
      { etiqueta: 'Documentos requeridos', contenido: 'Escritura de la Propiedad (solo para presentarla).' },
      { etiqueta: 'A quién está dirigido', contenido: 'Copropietarios de un determinado Condominio de Vivienda Social.' },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Coordinar con la Oficina de Vivienda.</li>
            <li>Realizar registro de a lo menos el 50% de Copropietarios con la presentación de sus escrituras.</li>
            <li>A lo menos el 50% de los copropietarios deben elegir una Directiva, con presencia de Ministro de Fe.</li>
            <li>Aprobación de un reglamento por parte de a lo menos el 50% de los copropietarios.</li>
            <li>Realizar Escritura Pública de Acta de Elecciones y Reglamento.</li>
            <li>Inscribir Escritura Pública de Acta de Elecciones y Reglamento en el Conservador de Bienes Raíces.</li>
            <li>Solicitar RUT en SII.</li>
            <li>Sacar Cuenta Corriente Bipersonal a nombre de la Copropiedad.</li>
            <li>Realizar Escritura Pública de Acta de Elecciones y Reglamento ante Notario.</li>
          </ol>
        )
      },
      { etiqueta: '¿Dónde se realiza?', contenido: 'Oficina de Vivienda Mejoramiento de Barrios, San Pablo 7127.' },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'Sí' }
    ],
    enlaceOnline: { nombre: 'Programa de Protección del Patrimonio Familiar (PPPF)', href: enlaces.pppf },
    enlaces: enlacesVivienda(enlaces.pppf)
  },
  'Subsidios Programa de Mejoramiento de Condominios Sociales': {
    titulo: 'Postulación a Proyectos de Mejoramiento de Condominios de Vivienda Social',
    filas: [
      {
        etiqueta: 'Trámite o Servicio',
        contenido: 'Postulación a Proyectos de Mejoramiento de Condominios de Vivienda Social'
      },
      {
        etiqueta: 'En qué Consiste',
        contenido: 'Postular a una Copropiedad a Proyectos de Mejoramiento para los espacios comunes. El mejoramiento tendrá un presupuesto de entre 80 y 195 UF por copropietario.'
      },
      {
        etiqueta: 'Requisitos',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Estar organizados bajo la Ley de Copropiedad.</li>
            <li>Tener una Directiva vigente.</li>
            <li>Aportar una UF por cada Unidad del Condominio.</li>
            <li>Dirigirse a la Oficina de Vivienda u otra Entidad Patrocinante.</li>
            <li>Tener a lo menos el 50% de participación de la Copropiedad en reuniones de definición de Proyecto.</li>
          </ol>
        )
      },
      {
        etiqueta: 'Documentos requeridos',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Escritura Pública de Acta de Elecciones y Reglamento inscrito en el Conservador de Bienes Raíces.</li>
            <li>Depósito a plazo.</li>
            <li>Certificados a firmar: Reuniones con la Comunidad.</li>
            <li>Certificado de Vigencia de la Directiva.</li>
            <li>Ficha Protección Social vigente en la Comuna (no requiere puntaje mínimo) de a lo menos el 50% de los copropietarios.</li>
          </ol>
        )
      },
      { etiqueta: 'A quién está dirigido', contenido: 'A vecinos que vivan bajo el régimen de Copropiedad y que quieran realizar mejoras en su villa.' },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Coordinar con la Oficina de Vivienda u otra Entidad Patrocinante para realizar un proyecto.</li>
            <li>Organizar a lo menos el 50% de los copropietarios para que participen, aporten con el ahorro de la comunidad, elijan las obras a realizar y sean parte del mejoramiento.</li>
            <li>Realización de visitas donde se realiza diagnóstico técnico de la Villa.</li>
            <li>Reunión con la Copropiedad donde se escogen las obras a postular.</li>
            <li>Ingreso a SERVIU de “Condominio Objeto de Programa”.</li>
            <li>Definición y realización de Proyecto Técnico, Social, Legal y Administrativo a Postular.</li>
            <li>Postulación.</li>
            <li>Asignación de recursos.</li>
            <li>Construcción y ejecución de Plan de Habilitación Social.</li>
          </ol>
        )
      },
      { etiqueta: '¿Dónde se realiza?', contenido: 'Oficina de Vivienda Mejoramiento de Barrios, San Pablo 7127.' },
      { etiqueta: 'Unidad monetaria', contenido: 'Aporte de un ahorro de 1 UF por parte de cada miembro de la Copropiedad. Aproximadamente $25.000 por cada miembro.' },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'Sí' }
    ],
    enlaceOnline: { nombre: 'Programa de Mejoramiento de Condominios Sociales', href: enlaces.mejoramientoCondominios },
    enlaces: enlacesVivienda(enlaces.mejoramientoCondominios)
  },
  'Subsidios Postulación Programa Construcción en Sitio Propio': {
    titulo: 'Postulación Programa Construcción en Sitio Propio',
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Postulación Programa Construcción en Sitio Propio' },
      {
        etiqueta: 'En qué Consiste (descripción breve)',
        contenido: 'Este subsidio está destinado a apoyar la construcción en sitio propio o en densificación predial de una vivienda económica de hasta 1.200 UF, en sectores urbanos o rurales, para uso habitacional del beneficiario y su familia.'
      },
      {
        etiqueta: 'Requisitos',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Ser único propietario del terreno postulando o ser mayor de 18 años.</li>
            <li>No contar con otra propiedad, o herencia de terreno.</li>
            <li>No haber recibido el beneficio anteriormente.</li>
            <li>Contar con el certificado de inhabitabilidad de la vivienda, o un terreno vacío sin vivienda.</li>
            <li>Contar con el ahorro mínimo de 10 UF, depositado en una cuenta de Ahorro para la Vivienda, al último día hábil del mes anterior al de la postulación.</li>
            <li>Dirigirse a la Oficina de Vivienda u otra Entidad Patrocinante.</li>
          </ol>
        )
      },
      {
        etiqueta: 'Documentos requeridos',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Ficha Protección Social vigente en la Comuna (con máximo 13.484 puntos).</li>
            <li>Fotocopia Escritura de la Propiedad.</li>
            <li>Fotocopia libreta de ahorro para la Vivienda con un depósito de 10 UF.</li>
            <li>Fotocopia carné del postulante y de propietario del terreno.</li>
            <li>Certificado de Inhabitabilidad de la Dirección de Obras Municipal.</li>
            <li>Certificado de Informes Previos y Número de la Dirección de Obras Municipal.</li>
            <li>Certificado de Avalúo fiscal desglosado de la propiedad (no sacar hasta la postulación).</li>
            <li>Certificado de factibilidad de agua potable y alcantarillado, o en su lugar Boleta de Agua (sin importar si está al día).</li>
            <li>Certificado de factibilidad eléctrica, o en su lugar Boleta de Luz (sin importar si está al día).</li>
          </ol>
        )
      },
      { etiqueta: 'A quién está dirigido', contenido: 'A familias de grupos emergentes, carentes de vivienda, o viviendas en muy mal estado, y que cuenten con un terreno propio.' },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        contenido: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Coordinar con la Oficina de Vivienda u otra Entidad Patrocinante para realizar un proyecto.</li>
            <li>Organizar un grupo de vecinos que cumplan con los requisitos, o adherirse a un grupo existente. La Oficina realizará nexo entre grupo y entidad patrocinante en convenio.</li>
            <li>La totalidad del grupo debe entregar documentación requerida.</li>
            <li>La totalidad del grupo recibe visitas técnicas a sus viviendas para definir ubicación de vivienda y calidad de suelo. Se debe realizar calicatas.</li>
            <li>Se ingresa expediente a Dirección de Obras Municipal para aprobación.</li>
            <li>Con expediente aprobado, este se ingresa a SERVIU para aprobación.</li>
            <li>Una vez aprobado se postula el grupo al llamado SERVIU.</li>
            <li>Asignación de recursos.</li>
            <li>Construcción y ejecución de Plan de Habilitación Social.</li>
            <li>Recepción de las viviendas.</li>
            <li>Entrega de vivienda para ser habitada.</li>
          </ol>
        )
      },
      {
        etiqueta: '¿Dónde se realiza?',
        contenido: 'Se puede postular en el SERVIU y sus delegaciones, en Municipalidades acreditadas por el SERVIU o a través de medios electrónicos que se establezcan para estos efectos.'
      },
      { etiqueta: 'Tiene costo', contenido: 'No' },
      { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'Sí' }
    ],
    enlaceOnline: { nombre: 'Postulación Programa Construcción en Sitio Propio', href: enlaces.sitioPropio },
    enlaces: enlacesVivienda(enlaces.sitioPropio)
  },
  'Tramitación y postulación a becas JUNAEB': {
    titulo: 'Tramitación y postulación a becas JUNAEB',
    filas: [
      { etiqueta: 'Trámite o Servicio', contenido: 'Tramitación y postulación a becas JUNAEB' },
      {
        etiqueta: 'En qué Consiste (descripción breve)',
        contenido: (
          <>
            PLAZO ENSEÑANZA MEDIA: 01 diciembre 2014 al 19 enero 2015.
            <br />
            PLAZO ENSEÑANZA SUPERIOR: 01 diciembre 2014 al 02 marzo 2015.
            <br />
            Los/as estudiantes becados de Enseñanza Superior renovarán en Bienestar Estudiantil de su institución dentro de los plazos establecidos en el Calendario Anual, siempre y cuando este cuente con el profesional Asistente Social. De no ser así, deberá renovar en la Municipalidad correspondiente a su domicilio familiar.
          </>
        )
      },
      {
        etiqueta: 'Requisitos Generales',
        contenido: 'Estudiantes con destacado rendimiento académico y en situación económica vulnerable.'
      },
      {
        etiqueta: 'Documentos requeridos',
        contenido: (
          <>
            <p className="font-semibold">RENOVANTES:</p>
            <p>Ser promovido de curso con un promedio mínimo de nota 6,0 (Ed. Media). También puede mantener la beca el alumno que, por razones justificadas, baje el promedio exigido (hasta un 5,5. Apelación, solo por una vez). Alumnos que egresan de educación media deben acreditar un rendimiento académico igual o superior a 6,0 y obtención de 475 o más puntos en la PSU. No se exigirá el requisito de puntaje mínimo en la PSU para los becados que se matriculen en Institutos Profesionales y Centros de Formación Técnica reconocidos por el Estado. Si obtuvo la beca desde el año 2011 en adelante y actualmente está en Educación Superior, para renovar el beneficio debe acreditar semestralmente rendimiento académico igual o superior a 5,0. Acreditar calidad de alumno regular y situación socioeconómica según lo solicitado por JUNAEB.</p>
            <p className="mt-2 font-semibold">POSTULANTES (SÓLO ENSEÑANZA MEDIA):</p>
            <p>Promedio mínimo de notas de 6,0. Acreditar documentalmente una situación socioeconómica deficiente que justifique la necesidad del beneficio. No podrán postular a aquellos estudiantes que no presenten calificaciones académicas.</p>
          </>
        )
      },
      { etiqueta: '¿Dónde se realiza?', contenido: 'Oficina de Asistencia Social.' },
      { etiqueta: 'Tiene costo (sí / no)', contenido: 'NO' },
      { etiqueta: 'Unidad monetaria', contenido: 'Pesos' },
      { etiqueta: 'Valor del servicio', contenido: 'NO' },
      { etiqueta: '¿Este trámite está disponible en línea? (sí / no)', contenido: 'NO' },
      { etiqueta: 'Enlace al Trámite en línea, si corresponde', contenido: 'NO' },
      { etiqueta: 'Enlace al Trámite en línea, si corresponde', contenido: 'NO' },
      {
        etiqueta: 'A quién está dirigido',
        contenido: (
          <>
            <p className="font-semibold">RENOVANTES:</p>
            <ol className="list-decimal space-y-1 pl-5">
              <li>Certificado Anual de Estudios 2014 o último año cursado.</li>
              <li>Comprobante de Matrícula o Alumno Regular 2015.</li>
              <li>Fotocopia de cédula de identidad del alumno(a).</li>
              <li>Documentación económica de respaldo de integrantes que generan ingresos (meses septiembre, octubre y noviembre).</li>
              <li>Documentación que acredite Puntaje de PSU para el caso de los nuevos becados del año 2011 en adelante (DEMRE).</li>
              <li>Documentación anexa solicitada por el profesional Asistente Social considerada de importancia para la caracterización del estudiante.</li>
              <li>Sólo en el caso de renovantes de educación superior se debe considerar que aquellos/as integrantes del grupo familiar mayores de 18 años que no se encuentren estudiando e indiquen que no poseen ingresos ni se encuentran efectuando actividad remunerada alguna deberán presentar Certificado de Afiliación a AFP o Certificado de Cotizaciones obligatorias de los últimos 12 meses, excluyendo a pensionados y dueñas de casa.</li>
            </ol>
            <p className="mt-2 font-semibold">POSTULANTES:</p>
            <ol className="list-decimal space-y-1 pl-5">
              <li>Certificado Anual de Estudios 2014 o último año cursado.</li>
              <li>Comprobante de Matrícula o Alumno Regular 2015.</li>
              <li>Fotocopia de cédula de identidad del alumno(a).</li>
              <li>Documentación económica de respaldo de integrantes que generan ingresos (meses septiembre, octubre y noviembre).</li>
              <li>Certificado Médico, credencial de discapacidad o Anexo Informe Médico para enfermedad crónica o catastrófica.</li>
              <li>Acreditar Déficit en Red de Apoyo Familiar cuando corresponda: apoyo sólo de la madre o del padre (Certificado de Residencia del padre ausente o cert. de Aporte de Tercero); a cargo de abuelos o parientes (Cert. de cuidado personal o tuición, emitido por el Juzgado de Familia; o Certificado de Nacimiento); a cargo de cuidadores no parientes: Anexo Cert. para acreditar déficit red de apoyo familiar. Institución de Protección: Certificado emitido por la institución.</li>
              <li>Para hermanos o hijos estudiantes: Certificado de alumno regular o matrícula o colilla de Pago de Matrícula de Establecimiento de Educación Media; Certificado de alumno regular para el caso de Institución de Educación Superior.</li>
              <li>Datos del Grupo Familiar que vive con el/la postulante (Nombre completo, Rut, fecha nacimiento, estado civil y parentesco postulante).</li>
            </ol>
          </>
        )
      },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        contenido: 'Es una postulación a institución externa, por tanto no depende del municipio la duración del trámite.'
      }
    ],
    enlaces: enlacesMunicipales
  }
};

export default function Seccion8TramDesComuni2({
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
            {ficha.enlaceOnline && (
              <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
                <dt className="self-center text-xs font-semibold text-slate-500">Enlace al Trámite en línea, si corresponde</dt>
                <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2"><Enlace {...ficha.enlaceOnline} /></dd>
              </div>
            )}
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="self-center text-xs font-semibold text-slate-500">Enlace a mayor información</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ListaEnlaces items={ficha.enlaces ?? enlacesSociales} />
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
