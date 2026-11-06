import { ArrowLeft, FileText, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

interface Seccion12_2Props {
  onVolver: () => void;
  onVolverSeccion: () => void;
}

interface AuditoriaExterna {
  nombre: string;
  numero: string;
  entidad: string;
  unidad: string;
  materia: string;
  periodo: string;
  inicio: string;
  termino: string;
  informeUrl: string;
  publicacion: string;
  aclaraciones: string;
  aclaracionesUrl?: string;
}

const encabezados = [
  'Nombre del informe',
  'Número del informe (N°/año)',
  'Entidad que efectuó la auditoría',
  'Unidad auditada',
  'Materia',
  'Periodo auditado (dd/mm/aaaa - dd/mm/aaaa)',
  'Fecha de inicio de la auditoría (dd/mm/aaaa)',
  'Fecha de término de la auditoría (dd/mm/aaaa)',
  'Enlace al informe final de auditoría',
  'Fecha de publicación del informe (dd/mm/aaaa)',
  'Enlace al informe de aclaraciones, si corresponde',
] as const;

const auditoriasPorAnio: Record<string, readonly AuditoriaExterna[]> = {
  '2014': [],
  '2009': [
    {
      nombre: 'INFORME FINAL N° 286-09 MUNICIPALIDAD DE LO PRADO SOBRE AUDITORÍA DE TRANSACCIONES EFECTUADAS EN LA CORPORACIÓN MUNICIPAL - DICIEMBRE 2009',
      numero: '286-09',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'La auditoría tuvo como propósito verificar, en los términos señalados en los artículos 25 de la ley N° 10.336, Orgánica de esta Institución, y 136 de la ley N° 18.695, Orgánica Constitucional de Municipalidades, si la entidad fiscalizada aplicó los ingresos percibidos en los fines para los cuales había sido creada.',
      periodo: 'Julio 2008 a Junio 2009',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=0c5377f0420cf1f7dc135b39b962881f&_adf.ctrl-state=toilcm5mm_107',
      publicacion: '28.12.2009',
      aclaraciones: 'No existe información al respecto',
    },
    {
      nombre: 'INFORME FINAL N° 236 DE 2009 SOBRE AUDITORÍA DE RECURSOS EN ADMINISTRACIÓN DE LA MUNICIPALIDAD DE LO PRADO.',
      numero: '236-09',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'La auditoría practicada tuvo por finalidad examinar la correcta percepción y utilización de los fondos recibidos en administración, verificando el cumplimiento de la normativa vigente sobre la materia, en el período 2008.',
      periodo: 'Enero a diciembre del 2008',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=00d33d517943560149d204ac66fbd28f&_adf.ctrl-state=toilcm5mm_111',
      publicacion: '25.11.2009',
      aclaraciones: '',
      aclaracionesUrl: '',
    },
    {
      nombre: 'INFORME FINAL, DMSAI 748/08, SOBRE AUDITORÍA AL PROGRAMA DE SEGURIDAD Y PARTICIPACIÓN CIUDADANA, DE LA MUNICIPALIDAD DE LO PRADO',
      numero: '748-2008',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'INFORME FINAL, DMSAI 748/08, SOBRE AUDITORÍA AL PROGRAMA DE SEGURIDAD Y PARTICIPACIÓN CIUDADANA, DE LA MUNICIPALIDAD DE LO PRADO',
      periodo: 'No existe información al respecto',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=3a5f21f97f7ed746f85f802f1d569bd9&_adf.ctrl-state=toilcm5mm_115',
      publicacion: '27.08.2009',
      aclaraciones: 'No existe información al respecto',
    },
    {
      nombre: 'INFORME FINAL SOBRE AUDITORÍA DE RECURSOS PARA LA EJECUCIÓN DEL PROGRAMA DE SEGURIDAD Y PARTICIPACIÓN CIUDADANA DE LA MUNICIPALIDAD DE LO PRADO',
      numero: '748-2008',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'El objetivo del examen consistió en verificar la recepción e inversión de los recursos transferidos por el Ministerio del Interior destinados a la ejecución del Programa de Seguridad y Participación Ciudadana.',
      periodo: '1° Enero al 31 Diciembre 2007',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=4fc2e3436b5b8a1b1b4b0966d5d4697d&_adf.ctrl-state=toilcm5mm_119',
      publicacion: '29.12.2008',
      aclaraciones: '',
      aclaracionesUrl: '',
    },
    {
      nombre: 'INFORME FINAL DE CONCLUSIONES SOBRE INCUMPLIMIENTO DE JORNADA ORDINARIA DE TRABAJO, HORAS EXTRAORDINARIAS Y OTRAS MATERIAS EN LA MUNICIPALIDAD DE LO PRADO',
      numero: '596-08',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'INFORME FINAL DE CONCLUSIONES SOBRE INCUMPLIMIENTO DE JORNADA ORDINARIA DE TRABAJO, HORAS EXTRAORDINARIAS Y OTRAS MATERIAS EN LA MUNICIPALIDAD DE LO PRADO',
      periodo: 'No existe información al respecto',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=adbc31c7e7df230657c0f4a2f1f43d36&_adf.ctrl-state=toilcm5mm_123',
      publicacion: '29.12.2008',
      aclaraciones: '',
      aclaracionesUrl: '',
    },
    {
      nombre: 'INFORME FINAL SOBRE FISCALIZACIÓN DE RECURSOS PROVENIENTES DEL FONDO DE SOLIDARIDAD E INVERSIÓN SOCIAL MUNICIPALIDAD DE LO PRADO.',
      numero: '1374-07',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'INFORME FINAL SOBRE FISCALIZACIÓN DE RECURSOS PROVENIENTES DEL FONDO DE SOLIDARIDAD E INVERSIÓN SOCIAL MUNICIPALIDAD DE LO PRADO.',
      periodo: 'No existe información al respecto',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=58d8d5d3bdc1c29c590e5014b784974f&_adf.ctrl-state=toilcm5mm_127',
      publicacion: '21.12.2007',
      aclaraciones: 'No existe información al respecto',
    },
  ],
  '2010': [
    {
      nombre: 'INFORME FINAL N° 274 SOBRE AUDITORÍA AL PROCESO DE PERMISOS DE CIRCULACIÓN DE LA MUNICIPALIDAD DE LO PRADO.',
      numero: '274-09',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'La auditoría tuvo por finalidad examinar el cumplimiento de la normativa legal y reglamentaria vigente, respecto del proceso de permisos de circulación ejecutado por la entidad edilicia, verificando la correcta percepción y recaudación de los ingresos y su adecuada contabilización, de conformidad con lo dispuesto en el artículo 95 de la ley N° 10.336, Orgánica de esta Institución, la ley N° 18.695, Orgánica Constitucional de Municipalidades, el decreto ley N° 3.063 de 1979, Ley de Rentas Municipales, la ley N° 18.290, de Tránsito, y el decreto supremo N° 152 de 2000, del Ministerio de Transportes y Telecomunicaciones.',
      periodo: '1° Enero al 31 Diciembre 2008',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=d6095e91452e0489a6f207a436fe34e7&_adf.ctrl-state=toilcm5mm_99',
      publicacion: '13.01.2011',
      aclaraciones: '',
      aclaracionesUrl: '',
    },
    {
      nombre: 'INV E N° 01-2010 MUNICIPALIDAD DE LO PRADO SOBRE DENUNCIA ACOGIDA A LA LEY N° 20.205',
      numero: '01-10',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'Este Organismo de Control efectuó una investigación en la Municipalidad de Lo Prado, con ocasión de una denuncia que cuestiona diversos hechos que se habrían producido en ella, presentada conforme lo dispuesto por la ley N° 20.205, que protege al funcionario que denuncia irregularidades y faltas al principio de probidad, y acogida expresamente a la reserva de identidad del recurrente.',
      periodo: 'No existe información al respecto',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=2cff544c50fe881c3172d218abe5585a&_adf.ctrl-state=toilcm5mm_103',
      publicacion: '10.03.2010',
      aclaraciones: 'No existe información al respecto',
    },
  ],
  '2011': [
    {
      nombre: 'INFORME DE SEGUIMIENTO N° 85-10 MUNICIPALIDAD DE LO PRADO SOBRE AUDITORÍA DE DESARROLLO COMUNITARIO, RECURSOS EN ADMINISTRACIÓN Y GENERACIÓN DE RECURSOS - DICIEMBRE 2011',
      numero: '85-10',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'En cumplimiento del plan anual de fiscalización de esta Contraloría General para el año 2011, y de acuerdo con las facultades establecidas en la ley N° 10.336, de Organización y Atribuciones de esta Institución, se efectuó en la Municipalidad de Lo Prado un seguimiento respecto de la efectividad de las medidas adoptadas por esa entidad, en relación con las observaciones formuladas en el informe final N° 85, de 2010, remitido a esa entidad por oficio N° 8.504, de 10 de febrero de 2011, sobre auditoría a los macroprocesos de desarrollo comunitario, recursos en administración y generación de recursos.',
      periodo: 'No existe información al respecto',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=e69e8152b9d3c310cfe697e8b2cd7499&_adf.ctrl-state=toilcm5mm_79',
      publicacion: '22.12.2011',
      aclaraciones: '',
      aclaracionesUrl: '',
    },
    {
      nombre: 'INFORME FINAL N° 33-11 MUNICIPALIDAD DE LO PRADO SOBRE AUDITORÍA A LOS MACROPROCESOS DE CONCESIONES Y TRANSFERENCIAS A OTRAS ENTIDADES - NOVIEMBRE 2011',
      numero: '33-11',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'La auditoría tuvo por finalidad comprobar la veracidad y fidelidad de las cuentas; la autenticidad de la documentación de respaldo, de conformidad a lo dispuesto en el artículo 95 de la precitada ley, la correcta imputación de las operaciones, así como verificar la normativa legal vigente que rige los macroprocesos de transferencias efectuadas por el municipio a otras entidades, tanto del sector público como privado, y de concesiones; en especial, lo establecido en los artículos 8 y 85, letra j), y 66 de la ley N° 18.695, Orgánica Constitucional de Municipalidades, este último modificado a través de la ley N° 20.355; y lo previsto en la ley N° 19.886, de Bases sobre Contratos Administrativos de Suministro y Prestación de Servicios, y su reglamento, contenido en el decreto N° 250, de 2004, del Ministerio de Hacienda.',
      periodo: '1° Enero 2010 al 30 Abril 2011',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=be1c300f59a89b9a5c83713c872d2cc2&_adf.ctrl-state=toilcm5mm_83',
      publicacion: '10.11.2011',
      aclaraciones: '',
      aclaracionesUrl: '',
    },
    {
      nombre: 'INFORME FINAL N° 85-10 MUNICIPALIDAD DE LO PRADO, SOBRE AUDITORÍA A LOS MACROPROCESOS DE RECURSOS EN ADMINISTRACIÓN, DESARROLLO COMUNITARIO Y GENERACIÓN DE RECURSOS - FEBRERO 2011',
      numero: '85-10',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'La auditoría tuvo por finalidad verificar la correcta utilización e inversión de los recursos físicos y financieros transferidos por el Ministerio del Interior, de acuerdo con lo dispuesto en la resolución exenta N° 1.789, de 9 de marzo de 2010, modificada por la N° 2.284, de 26 de mayo del mismo año, sobre Fondos de Emergencia, y las circulares N° 27, 42 y 43, de 30 de marzo, 12 de mayo y 24 de junio, respectivamente, todas del año 2010, de esa misma cartera ministerial, que impartieron instrucciones a las municipalidades para la implementación del programa Manos a la Obra y Mejor su Vivienda. Además, verificar la correcta recepción y distribución de especies remitidas por la Oficina Nacional de Emergencia, ONEMI, en ayuda a las familias damnificadas por el terremoto de 27 de febrero de 2010. Asimismo, comprobar la veracidad y fidelidad de las cuentas, de acuerdo con la normativa de la Contraloría General, y la autenticidad de la documentación de respaldo, de conformidad con lo dispuesto en el artículo 95 de la ley N° 10.336, así como verificar la correcta percepción de los recursos provenientes de los permisos de circulación.',
      periodo: 'No existe información al respecto',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=a684aad3a14fad4ca2a2390d35cea141&_adf.ctrl-state=toilcm5mm_87',
      publicacion: '10.02.2011',
      aclaraciones: '',
      aclaracionesUrl: '',
    },
    {
      nombre: 'SOBRE SEGUIMIENTO DE LAS OBSERVACIONES CONTENIDAS EN INFORME FINAL N° 236 DE 2009, SOBRE AUDITORÍA DE RECURSOS EN ADMINISTRACIÓN DE LA MUNICIPALIDAD DE LO PRADO.',
      numero: '236-09',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'En cumplimiento del Plan Anual de Fiscalización de esta Contraloría General y de acuerdo con las facultades establecidas en la ley N° 10.336, Orgánica de esta Institución, se efectuó en la Municipalidad de Lo Prado un seguimiento respecto de la efectividad de las medidas adoptadas por esa entidad, en relación con las observaciones formuladas en el informe final N° 236, de 2009, sobre auditoría al macroproceso de recursos en administración, remitido a ese municipio por oficio N° 65.709, de 25 de noviembre de 2009.',
      periodo: 'No existe información al respecto',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=186f7b567066034736cdb8d71fbb6d93&_adf.ctrl-state=toilcm5mm_95',
      publicacion: '02.02.2011',
      aclaraciones: 'No existe información al respecto',
    },
  ],
  '2012': [
    {
      nombre: 'INFORME FINAL 29-12 MUNICIPALIDAD DE LO PRADO SOBRE OBRA EJECUTADA CON CARGO AL PROGRAMA FONDO DE RECUPERACIÓN DE CIUDADES DE LA SUBSECRETARÍA DE DESARROLLO REGIONAL Y ADMINISTRATIVO - NOVIEMBRE 2012',
      numero: '29/2012',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'La auditoría en el citado municipio tuvo por finalidad realizar el examen de cuentas del contrato de obra individualizado precedentemente, verificando que en sus etapas de licitación, adjudicación y ejecución, se haya ajustado a las bases administrativas generales y especiales, planos, especificaciones técnicas y a la normativa que lo regula, comprobando, además, la debida observancia de los principios y prácticas contables y administrativas, los controles internos implementados respecto de cada uno de los procesos relacionados con la materia, y que los pagos efectuados guarden la debida concordancia entre el avance físico y el financiero.',
      periodo: 'No existe información al respecto',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=a9570157fc87a93d36a12e71c5a6e64e&_adf.ctrl-state=toilcm5mm_67',
      publicacion: '14.11.2012',
      aclaraciones: '',
    },
    {
      nombre: 'INFORME FINAL N° 18, DE 2012, SOBRE PROGRAMA DE AUDITORÍA DE CATÁSTROFES Y EMERGENCIAS, EFECTUADO EN MUNICIPALIDAD DE LO PRADO.',
      numero: '18/2012',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'El trabajo estuvo orientado, fundamentalmente, a verificar la labor preventiva desarrollada por los diferentes organismos que conforman el Sistema de Protección Civil, en este caso, en la respectiva instancia municipal, conforme lo establece el Plan Nacional de Protección Civil aprobado por el decreto N° 156, de 12 de marzo de 2002, del Ministerio del Interior, actual Ministerio del Interior y Seguridad Pública.',
      periodo: '1° Enero 2011 al 29 Febrero 2012',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=a82e5141f8ee6984554233547e427c25&_adf.ctrl-state=toilcm5mm_71',
      publicacion: '20.06.2012',
      aclaraciones: '',
    },
    {
      nombre: 'INFORME INVESTIGACIÓN ESPECIAL 2-11 MUNICIPALIDAD DE LO PRADO SOBRE EJECUCIÓN DE OBRAS VINCULADAS A PROGRAMA RECUPERACIÓN DE BARRIOS - MARZO 2012',
      numero: '002/2011',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'INFORME INVESTIGACIÓN ESPECIAL 2-11 MUNICIPALIDAD DE LO PRADO SOBRE EJECUCIÓN DE OBRAS VINCULADAS A PROGRAMA RECUPERACIÓN DE BARRIOS - MARZO 2012',
      periodo: 'No existe información al respecto',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=0366687233c6d5ff660f689a96fbf927&_adf.ctrl-state=toilcm5mm_75',
      publicacion: '14.03.2012',
      aclaraciones: 'No existe informe de aclaración',
    },
  ],
  '2013': [
    {
      nombre: 'INFORME FINAL 5-13 MUNICIPALIDAD DE LO PRADO GASTOS DE OBRAS CIVILES - AGOSTO 2013',
      numero: '5-13',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'La fiscalización tuvo por finalidad verificar que los mencionados gastos se ciñeran a las disposiciones normativas que resulten aplicables, como asimismo, comprobar la veracidad y fidelidad de las operaciones y su correspondiente registro, validando que los fondos se hayan imputado correctamente, que las operaciones contables se encuentren documentadas en conformidad a las normas que rigen la materia, y que se cumplan las exigencias relativas con las cauciones y multas, en caso de proceder. En el orden técnico, la revisión tuvo por objeto constatar que el avance físico indicado en los estados de pago de los proyectos examinados sea concordante con lo efectivamente ejecutado, ajustándose a las exigencias constructivas y de requerimientos de calidad establecidos en sus antecedentes contractuales.',
      periodo: '1° Enero al 31 Diciembre 2012',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=28c19d2e2c8bf4ef9d5cfb79c1c46d4f&_adf.ctrl-state=toilcm5mm_59',
      publicacion: '14.08.2013',
      aclaraciones: 'No existe información al respecto',
    },
    {
      nombre: 'INFORME DE SEGUIMIENTO 29-12 MUNICIPALIDAD DE LO PRADO OBRA EJECUTADA CON FONDO DE RECUPERACIÓN DE CIUDADES DE LA SUBDERE - JULIO 2013',
      numero: '29-12',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'Se realizó un seguimiento con la finalidad de verificar la efectividad de las medidas adoptadas por la entidad examinada, para subsanar las observaciones y atender los requerimientos contenidos en el informe final N°29, de 2012, sobre auditoría a obra ejecutada por la Municipalidad de Lo Prado con cargo al programa Fondo de Recuperación de Ciudades, de la Subsecretaría de Desarrollo Regional y Administrativo.',
      periodo: 'No existe información al respecto',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=54632fb0a60f57a95f60bc25e0996011&_adf.ctrl-state=toilcm5mm_63',
      publicacion: '15.07.2013',
      aclaraciones: 'No existe información al respecto',
    },
  ],
  '2015': [
    {
      nombre: 'INFORME FINAL A LAS CONTRATACIONES DE HONORARIOS EN PROGRAMAS COMUNITARIOS',
      numero: '614/2015',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'Verificar el cumplimiento de las disposiciones legales y reglamentarias relativas a las contrataciones a honorarios con cargo a la cuenta 21.04.004, como verificar si los cálculos son exactos y si se encuentran debidamente documentados y registrados.',
      periodo: '01.01 al 31.12.2014',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=be391094db2967fe9323628e7fdbad92&_adf.ctrl-state=toilcm5mm_35',
      publicacion: '07.10.2015',
      aclaraciones: 'No existe información al respecto',
    },
    {
      nombre: 'INFORME FINAL SOBRE AUDITORÍA AL MACROPROCESO DE TECNOLOGÍAS DE INFORMACIÓN Y COMUNICACIÓN',
      numero: '345/2015',
      entidad: 'Contraloría General de la República',
      unidad: 'Municipalidad de Lo Prado',
      materia: 'Revisar y evaluar aspectos relacionados con las políticas, normas, prácticas y procedimientos de control relativos a los sistemas basados en las tecnologías de información y comunicación y la seguridad de éstas en conformidad con la norma técnica para los Órganos de la Administración del Estado sobre Seguridad y Confidencialidad de los documentos electrónicos.',
      periodo: '01.01 al 31.12.2014',
      inicio: 'No existe información al respecto',
      termino: 'No existe información al respecto',
      informeUrl: 'https://www.contraloria.cl/SicaProd/SICAv3-BIFAPortalCGR/faces/detalleInforme?docIdcm=318db3e0abefc3a25d731b01ce290ac0&_adf.ctrl-state=toilcm5mm_39',
      publicacion: '10.08.2015',
      aclaraciones: 'No existe información al respecto',
    },
  ],
};

const anios = ['2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009'];

export default function Seccion12_2({ onVolver, onVolverSeccion }: Seccion12_2Props) {
  const [anioSeleccionado, setAnioSeleccionado] = useState('2016');
  const [busqueda, setBusqueda] = useState('');
  const auditoriasFiltradas = useMemo(() => {
    const termino = busqueda.trim().toLocaleLowerCase('es');
    return (auditoriasPorAnio[anioSeleccionado] ?? []).filter((auditoria) =>
      Object.values(auditoria).join(' ').toLocaleLowerCase('es').includes(termino),
    );
  }, [anioSeleccionado, busqueda]);

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolverSeccion} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Auditorías
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Auditoría Externa</span>
      </nav>

      <header className="flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Fiscalización y auditorías</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Auditoría Externa</h2>
        </div>
        <label className="w-full text-xs font-medium text-slate-600 sm:w-48">
          Seleccione año
          <select
            value={anioSeleccionado}
            onChange={(event) => setAnioSeleccionado(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800"
          >
            {anios.map((anio) => <option key={anio} value={anio}>{anio}</option>)}
          </select>
        </label>
      </header>

      <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xs focus-within:border-blue-300">
        <Search className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
        <span className="sr-only">Buscar auditorías externas</span>
        <input
          type="search"
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
          placeholder="Buscar por informe, número o materia..."
          className="w-full border-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </label>

      <section aria-label={`Auditorías externas del año ${anioSeleccionado}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px] table-fixed border-collapse text-left text-xs lg:min-w-0">
            <colgroup>
              <col className="w-[13%]" />
              <col className="w-[6%]" />
              <col className="w-[7%]" />
              <col className="w-[8%]" />
              <col className="w-[22%]" />
              <col className="w-[9%]" />
              <col className="w-[7%]" />
              <col className="w-[7%]" />
              <col className="w-[7%]" />
              <col className="w-[7%]" />
              <col className="w-[7%]" />
            </colgroup>
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                {encabezados.map((encabezado) => (
                  <th key={encabezado} scope="col" className="border-b border-slate-200 px-3 py-3 font-semibold">{encabezado}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {auditoriasFiltradas.map((auditoria) => (
                <tr key={`${auditoria.numero}-${auditoria.publicacion}`} className="even:bg-slate-50/70">
                  <td className="max-w-80 border-b border-slate-100 px-3 py-2 align-top text-slate-700">{auditoria.nombre}</td>
                  <td className="border-b border-slate-100 px-3 py-2 align-top text-slate-700">{auditoria.numero}</td>
                  <td className="max-w-48 border-b border-slate-100 px-3 py-2 align-top text-slate-700">{auditoria.entidad}</td>
                  <td className="max-w-48 border-b border-slate-100 px-3 py-2 align-top text-slate-700">{auditoria.unidad}</td>
                  <td className="max-w-[32rem] border-b border-slate-100 px-3 py-2 align-top text-slate-700">{auditoria.materia}</td>
                  <td className="border-b border-slate-100 px-3 py-2 align-top text-slate-700">{auditoria.periodo}</td>
                  <td className="max-w-44 border-b border-slate-100 px-3 py-2 align-top text-slate-700">{auditoria.inicio}</td>
                  <td className="max-w-44 border-b border-slate-100 px-3 py-2 align-top text-slate-700">{auditoria.termino}</td>
                  <td className="border-b border-slate-100 px-3 py-2 align-top text-center">
                    <a
                      href={auditoria.informeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir informe ${auditoria.numero} en Contraloría`}
                      className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-[10px] font-medium text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-50"
                    >
                      <FileText className="h-3 w-3 text-red-600" aria-hidden="true" />
                      Ver PDF
                    </a>
                  </td>
                  <td className="border-b border-slate-100 px-3 py-2 align-top text-slate-700">{auditoria.publicacion}</td>
                  <td className="max-w-48 border-b border-slate-100 px-3 py-2 align-top text-slate-700">
                    {auditoria.aclaracionesUrl !== undefined ? (
                      <a
                        href={auditoria.aclaracionesUrl || 'about:blank'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir PDF de aclaraciones del informe ${auditoria.numero}`}
                        className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-[10px] font-medium text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-50"
                      >
                        <FileText className="h-3 w-3 text-red-600" aria-hidden="true" />
                        Ver PDF
                      </a>
                    ) : auditoria.aclaraciones}
                  </td>
                </tr>
              ))}
              {auditoriasFiltradas.length === 0 && (
                <tr>
                  <td colSpan={encabezados.length} className="px-4 py-8 text-center text-sm text-slate-500">
                    No existen Auditorías Externas{busqueda.trim() ? ' que coincidan con la búsqueda' : ''} para el año {anioSeleccionado}.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <div className="border-t border-slate-200 pt-4">
        <button type="button" onClick={onVolver} className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a Auditorías
        </button>
      </div>
    </div>
  );
}
