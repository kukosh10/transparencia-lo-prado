import { useState } from 'react';
import { ChevronRight, ChevronDown, FileText, Globe, Search, ArrowLeft } from 'lucide-react';

interface Seccion2Props {
  onVolver: () => void;
}

interface Norma {
  tipo: string;
  denominacion?: string;
  numero: string;
  fecha: string;
  nombre: string;
  publicadoDiario: string;
  tipoEnlace: 'pdf' | 'web';
  url: string;
  archivoModificado: string;
}

export default function Seccion2({ onVolver }: Seccion2Props) {
  const [subseccionActiva, setSubseccionActiva] = useState<string | null>(null);
  const [busqueda, setBusqueda] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('Todos');
  const [idExpandido, setIdExpandido] = useState<number | null>(null);

  const tarjetasSeccion2 = [
    {
      id: 'normas-organicas',
      titulo: 'Normas Orgánicas',
      etiqueta: 'Legislación Vigente',
    },
    {
      id: 'normas-competencia',
      titulo: 'Normas que entregan competencia',
      etiqueta: 'Competencias',
    },
    {
      id: 'reglamentos',
      titulo: 'Reglamentos',
      etiqueta: 'Normativa Interna',
    },
    {
      id: 'instrucciones',
      titulo: 'Instrucciones',
      etiqueta: 'Archivo Histórico',
    }
  ];

  const normasOrganicasData: Norma[] = [
    {
      tipo: 'REGLAMENTO INTERNO',
      numero: '22',
      fecha: '03/01/2017',
      nombre: 'Aprueba reglamento de organización interna y funciones del municipio.',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: '07/01/2005'
    },
    {
      tipo: 'REGLAMENTO INTERNO',
      numero: '2.044',
      fecha: '03/01/2017',
      nombre: 'Fija texto refundido del reglamento interno de funciones de la Municipalidad de Lo Prado.',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: '21/09/2011'
    },
    {
      tipo: 'REGLAMENTO INTERNO',
      numero: '885',
      fecha: '08/04/2014',
      nombre: 'RECTIFICA DECRETO ALCALDICIO N°3132 DE FECHA 11 DE DICIEMBRE DE 2013',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'REGLAMENTO INTERNO',
      numero: '3132',
      fecha: '11/12/2013',
      nombre: 'Modifica reglamento de organización interna y funciones del municipio',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: '08/04/2014'
    },
    {
      tipo: 'REGLAMENTO INTERNO',
      numero: '2521',
      fecha: '09/09/2013',
      nombre: 'Reglamento Interno Municipalidad de Lo Prado',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: '11/12/2013'
    },
    {
      tipo: 'CONSTITUCIÓN',
      numero: '1',
      fecha: '22/09/2005',
      nombre: 'Constitución Política de la República de Chile.',
      publicadoDiario: 'No',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: '03/05/2014'
    },
    {
      tipo: 'LEY ORGÁNICA CONSTITUCIONAL',
      numero: '18.695',
      fecha: '26/07/2006',
      nombre: 'Orgánica Constitucional de Municipalidades.',
      publicadoDiario: 'No',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: '25/04/2016'
    },
    {
      tipo: 'D.F.L. MINISTERIO DEL INTERIOR',
      numero: '1-3260',
      fecha: '17/03/1981',
      nombre: 'Determina límites de la Región Metropolitana de Santiago; crea nuevas comunas, establece y describe sus límites.',
      publicadoDiario: 'No',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: '21/10/1991'
    }
  ];

  const normasCompetenciaData: Norma[] = [
    {
      tipo: 'Ley',
      numero: '19.925',
      fecha: '19.01.2004',
      nombre: 'Ley Sobre Expendio y Consumo De Bebidas Alcohólicas',
      publicadoDiario: 'Sí',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: '24.01.2014'
    },
    {
      tipo: 'Ley',
      numero: '19.803',
      fecha: '27/04/2002',
      nombre: 'Establece asignación de mejoramiento de la gestión municipal',
      publicadoDiario: 'Sí',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: '30/01/2014'
    },
    {
      tipo: 'Ley',
      numero: '19.754',
      fecha: '29.01.2001',
      nombre: 'Autoriza a Las Municipalidades Para Otorgar Prestaciones De Bienestar a sus Funcionarios',
      publicadoDiario: 'Sí',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: '08.01.2013'
    },
    {
      tipo: 'Ley',
      numero: '19.418',
      fecha: '09.10.1995',
      nombre: 'Juntas De Vecinos y Demás Organizaciones Comunitarias',
      publicadoDiario: 'Sí',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: '07.11.2009'
    },
    {
      tipo: 'Ley',
      numero: '18.883',
      fecha: '29.12.1989',
      nombre: 'Aprueba Estatuto Administrativo Para Funcionarios Municipales',
      publicadoDiario: 'Sí',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: '01.04.2014'
    },
    {
      tipo: 'Ley',
      numero: '18.290',
      fecha: '07.02.1984',
      nombre: 'Ley De Tránsito',
      publicadoDiario: 'Sí',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: '07.11.2009'
    },
    {
      tipo: 'Ley',
      numero: '18.287',
      fecha: '29.12.1989',
      nombre: 'Procedimiento ante Juzgados Policía Local',
      publicadoDiario: 'Sí',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: '08.01.2011'
    },
    {
      tipo: 'Ley',
      numero: '17.235',
      fecha: '29.10.2009',
      nombre: 'Sobre Impuesto Territorial',
      publicadoDiario: 'Sí',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: '29.10.2012'
    },
    {
      tipo: 'Ley',
      numero: '15.231',
      fecha: '23.05.1978',
      nombre: 'Sobre Organización y Atribuciones de los Juzgados de Los Policía Local',
      publicadoDiario: 'Sí',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: '23.01.2012'
    },
    {
      tipo: 'D.F.L.',
      numero: '458',
      fecha: '13.04.1976',
      nombre: 'Ley General De Urbanismo y Construcciones',
      publicadoDiario: 'Sí',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: '01.04.2014'
    },
    {
      tipo: 'D.L.',
      numero: '3063',
      fecha: '29.12.1979',
      nombre: 'Sobre Rentas Municipales, cuyo texto fue refundido por D.F.L. N° 2385-98',
      publicadoDiario: 'Sí',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: '01.04.2014'
    },
    {
      tipo: 'D.S. Ministerio del Interior',
      numero: '1161',
      fecha: '11.04.2012',
      nombre: 'Reglamento para la aplicación de las normas de la Ley 18.695 Orgánica Constitucional de Municipalidades, referidas a las asociaciones municipales con personalidad jurídica',
      publicadoDiario: 'Sí',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: 'Sin modificación'
    },
    {
      tipo: 'D.S. Ministerio de Justicia',
      numero: '61',
      fecha: '29.02.2008',
      nombre: 'Reglamento del registro de multas de tránsito no pagadas',
      publicadoDiario: 'Sí',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: 'Sin modificación'
    },
    {
      tipo: 'D.S. Ministerio del Interior',
      numero: '156',
      fecha: '12.03.2002',
      nombre: 'Plan Nacional de Protección Civil y Emergencia',
      publicadoDiario: 'Sí',
      tipoEnlace: 'web',
      url: '#',
      archivoModificado: '18.03.2011'
    },
    {
      tipo: 'Decreto Alcaldicio',
      numero: '080',
      fecha: '20.01.2005',
      nombre: 'Delega atribuciones específicas que indica en directores que señala en razón de sus cargos',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    }
  ];

  const reglamentosData: Norma[] = [
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '470',
      fecha: '24.06.2016',
      nombre: 'Aprueba actualización de Reglamentos municipal de Contratación de Bienes y Servicios de la Municipalidad de Lo Prado',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '502',
      fecha: '02.07.2015',
      nombre: 'APRUEBA REGLAMENTO SOBRE CONCESION DE HONORES Y DISTINCIONES DE LA I.MUNICIPALIDAD DE LO PRADO',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '894',
      fecha: '02.04.2014',
      nombre: 'APRUEBA REGLAMENTO INTERNO PARA EL ACCESO A LA INFORMACION PUBLICA EN LA MUNICIPALIDAD DE LO PRADO Y DEJA SIN EFECTO DECRETO ALCALDICIO N°2247 DE FECHA 27 DE AGOSTO DE 2012',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '2521',
      fecha: '09.09.2013',
      nombre: 'Aprueba nuevo reglamento y organigrama municipal que regula la estructura y organización interna de la I. Municipalidad de lo prado".',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '2392',
      fecha: '27.08.2013',
      nombre: 'AUTORIZA CREACION DEL SERVICIO DE BIENESTAR DE LOS FUNCIONARIOS DE SALUD DE LA CORPORACION MUNICIPAL DE LO PRADO, DE CONFORMIDAD A LO ESTABLECIDO EN EL ARTÍCULO 50 TRANSITORIO DE LA LEY, N°20.647, Y APRUEBA SU REGLAMENTO.',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificación'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '2642',
      fecha: '18.10.2012',
      nombre: 'APRUEBA REGLAMENTO INTERNO DE ADMINISTRACION Y USO DEL BUS MUNICIPAL',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '2660',
      fecha: '02.12.2011',
      nombre: 'APRUEBA REGLAMENTO PARA LA ELECCION DE CONSEJEROS COMUNALES DE ORGANIZACIONES DE LA SOCIEDAD CIVIL A EFECTUARSE EL DIA 17/12/2011',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificación'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '2042',
      fecha: '21.09.2011',
      nombre: 'APRUEBA REGLAMENTO DEL CONSEJO COMUNAL DE ORGANIZACIONES DE LA SOCIEDAD CIVIL DE LA COMUNA DE LO PRADO.',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificación'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '1978',
      fecha: '29.10.2010',
      nombre: 'APRUEBA REGLAMENTO SOBRE NORMAS QUE REGIRAN PARA ILUMINACION ORNAMENTAL EN PERIODO DE NAVIDAD.',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin modificación'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '1662',
      fecha: '03.09.2010',
      nombre: 'APRUEBA REGLAMENTO SOBRE USO Y RENDICION DE LOS FONDOS GLOBALES EN EFECTIVO PARA OPERACIONES MENORES.',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '1488',
      fecha: '15.07.2009',
      nombre: 'APRUEBA REGLAMENTO INTERNO DE HIGIENE Y SEGURIDAD.',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '1563',
      fecha: '13.04.2009',
      nombre: 'Aprueba Reglamento que regula procedimientos para el otorgamiento de Patentes de Microempresa Familiares',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin enlace'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '820',
      fecha: '13.04.2009',
      nombre: 'CREA COMITE DE TRANSPARENCIA Y APRUEBA EL REGLAMENTO DE FUNCIONAMIENTO INTERNO DEL COMITE.',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '1064',
      fecha: '01.08.2005',
      nombre: 'Aprueba Reglamento sobre el uso de inmuebles Municipales entregados en Comodato a dos o mas Organizaciones Comunitarias y Establece normas sobre el funcionamiento de las Comunidades de Comodatarios',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin enlace'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '766',
      fecha: '10.06.2005',
      nombre: 'Aprueba Reglamento para la entrega de permisos sociales',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin enlace'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '1544',
      fecha: '19.12.2003',
      nombre: 'Aprueba Reglamento sobre el funcionamiento de las Comunidades de Comodatarios',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin enlace'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '989',
      fecha: '30.07.2003',
      nombre: 'Aprueba Reglamento Fondo de Desarrollo Vecinal comuna de Lo Prado',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin enlace'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '478',
      fecha: '06.05.2002',
      nombre: 'Aprueba Reglamento sobre Procedimiento, Administrativo General aplicable a los proyectos de inversión y empleo ejecutados por administración directa',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin enlace'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '1160',
      fecha: '06.09.2001',
      nombre: 'Aprueba Reglamento de Operaciones de la estación de transferencia y relleno sanitario',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin enlace'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Reglamentos',
      numero: '1',
      fecha: '23.01.2001',
      nombre: 'Reglamento Interno de Funcionamiento del Concejo Municipal de Lo Prapdo',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    }
  ];

  const instruccionesData: Norma[] = [
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Plan',
      numero: '1016',
      fecha: '11.10.2016',
      nombre: 'APRUEBA PROPUESTA DE PLAN ANUAL DE CAPACITACION DE LA MUNICIPALIDAD DE LO PRADO',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Política',
      numero: '885',
      fecha: '08.11.2016',
      nombre: 'APRUEBA POLITICA GENERAL DE SEGURIDAD DE LA INFORMACION DE LA MUNICIPALIDAD DE LO PRADO',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Manual de Procedimiento',
      numero: '897',
      fecha: '05.12.2016',
      nombre: 'APRUEBA LOS MANUALES DE PROCEDIMIENTOS TECNOLOGICOS Y DE SEGURIDAD INFORMATICA QUE SE SEÑALAN',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Manual de Procedimiento',
      numero: '613',
      fecha: '10.08.2015',
      nombre: 'APRUEBA PROCEDIMIENTO PARA LA CONTRATACION DE PERSONAS A HONORARIOS DE LA MUNICIPALIDAD DE LO PRADO',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Política',
      numero: '673',
      fecha: '28.08.2015',
      nombre: 'APRUEBA POLITICA DE TRATAMIENTO DE DATOS PERSONALES DE LA ILUSTRE MUNICIPALIDAD DE LO PRADO',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Manual de Procedimiento',
      numero: '3378',
      fecha: '11.12.2014',
      nombre: 'APRUEBA PROCEDIMIENTO ELUMINACION DE ARCHIVOS DE LA MUNICIPALIDAD DE LO PRADO',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Protocolo',
      numero: '1882',
      fecha: '07.07.2016',
      nombre: 'APRUEBA PROTOCOLO DE ATENCION DE USUARIOS/AS DE LA MUNICIPALIDAD DE LO PRADO',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    },
    {
      tipo: 'Otras Normas que atribuyen competencias',
      denominacion: 'Manual de Procedimiento',
      numero: '807',
      fecha: '26.03.2014',
      nombre: 'APRUEBA IMPLEMENTACION DE POLITICA DE PREVENCION DE RIESGOS',
      publicadoDiario: 'No',
      tipoEnlace: 'pdf',
      url: '#',
      archivoModificado: 'Sin Modificaciones'
    }
  ];

  const tiposOrganicas = ['Todos', 'REGLAMENTO INTERNO', 'CONSTITUCIÓN', 'LEY ORGÁNICA CONSTITUCIONAL', 'D.F.L. MINISTERIO DEL INTERIOR'];
  const tiposCompetencia = ['Todos', 'Ley', 'D.F.L.', 'D.L.', 'D.S. Ministerio del Interior', 'D.S. Ministerio de Justicia', 'Decreto Alcaldicio'];
  const tiposInstrucciones = ['Todos', 'Plan', 'Política', 'Manual de Procedimiento', 'Protocolo'];

  let datosActuales = normasOrganicasData;
  let tiposDisponibles = tiposOrganicas;
  let tituloSeccion = '';

  if (subseccionActiva === 'normas-organicas') {
    datosActuales = normasOrganicasData;
    tiposDisponibles = tiposOrganicas;
    tituloSeccion = 'Normas Orgánicas';
  } else if (subseccionActiva === 'normas-competencia') {
    datosActuales = normasCompetenciaData;
    tiposDisponibles = tiposCompetencia;
    tituloSeccion = 'Normas que entregan competencia';
  } else if (subseccionActiva === 'reglamentos') {
    datosActuales = reglamentosData;
    tituloSeccion = 'Reglamentos';
  } else if (subseccionActiva === 'instrucciones') {
    datosActuales = instruccionesData;
    tiposDisponibles = tiposInstrucciones;
    tituloSeccion = 'Instrucciones';
  }

  const normasFiltradas = datosActuales.filter((n) => {
    const coincideTexto =
      n.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      n.numero.toLowerCase().includes(busqueda.toLowerCase()) ||
      n.tipo.toLowerCase().includes(busqueda.toLowerCase()) ||
      (n.denominacion && n.denominacion.toLowerCase().includes(busqueda.toLowerCase()));
    
    // Si estamos en reglamentos, no hay filtro. Si estamos en instrucciones o competencias, sí filtramos por denominación o tipo correspondiente.
    let coincideFiltro = true;
    if (subseccionActiva === 'reglamentos') {
      coincideFiltro = true;
    } else if (subseccionActiva === 'instrucciones') {
      coincideFiltro = filtroTipo === 'Todos' || n.denominacion === filtroTipo;
    } else {
      coincideFiltro = filtroTipo === 'Todos' || n.tipo === filtroTipo;
    }

    return coincideTexto && coincideFiltro;
  });

  if (subseccionActiva) {
    return (
      <div className="content-box-wide space-y-6">
        {/* Ruta de navegación superior */}
        <div className="flex items-center gap-2 text-sm text-slate-700 bg-[#f0f4f9] p-3 rounded-lg border border-slate-200/80 font-semibold">
          <button onClick={() => { setSubseccionActiva(null); setFiltroTipo('Todos'); setBusqueda(''); }} className="text-blue-700 hover:underline cursor-pointer bg-transparent border-none p-0 font-semibold">
            Marco Normativo
          </button>
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-900 font-bold">{tituloSeccion}</span>
        </div>

        {/* Contenedor principal */}
        <div className="bg-[#f0f4f9] p-6 rounded-xl shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-xl font-bold text-slate-900">
              {tituloSeccion}
            </h2>
            <span className="text-xs text-slate-500">Última actualización: 5/10/2026</span>
          </div>

          {/* Barra de herramientas adaptativa (Con select si no es reglamentos) */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {subseccionActiva !== 'reglamentos' ? (
              <div className="flex items-center gap-3 w-full md:w-auto">
                <span className="text-sm font-medium text-slate-700 shrink-0">Filtrar por:</span>
                <select
                  value={filtroTipo}
                  onChange={(e) => setFiltroTipo(e.target.value)}
                  className="bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 w-full md:w-72 cursor-pointer"
                >
                  {tiposDisponibles.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="text-sm font-medium text-slate-600">
                Mostrando todos los registros de <span className="font-bold text-slate-900">Reglamentos</span>
              </div>
            )}

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar por número o título..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Lista de tarjetas desplegables */}
          <div className="space-y-3">
            {normasFiltradas.length > 0 ? (
              normasFiltradas.map((norma, index) => {
                const estaExpandido = idExpandido === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-slate-200 shadow-xs transition-all overflow-hidden"
                  >
                    <div
                      onClick={() => setIdExpandido(estaExpandido ? null : index)}
                      className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50/60 transition-colors gap-4"
                    >
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-xs font-bold tracking-wide">
                          {norma.denominacion ? `${norma.denominacion} - ` : ''}{norma.tipo} N° {norma.numero}
                        </span>
                        <h3 className="text-sm font-semibold text-slate-900">
                          {norma.nombre}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-medium text-blue-600 shrink-0">
                        <span>Ver detalle</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${estaExpandido ? 'rotate-180' : ''}`} />
                      </div>
                    </div>

                    {estaExpandido && (
                      <div className="bg-slate-50 border-t border-slate-100 p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                        <div>
                          <span className="block text-slate-400 font-medium mb-1">Publicado en Diario Oficial:</span>
                          <span className="font-semibold text-slate-800">{norma.publicadoDiario}</span>
                        </div>
                        <div>
                          <span className="block text-slate-400 font-medium mb-1">Fecha de publicación / dictación:</span>
                          <span className="font-semibold text-slate-800">{norma.fecha}</span>
                        </div>
                        <div>
                          <span className="block text-slate-400 font-medium mb-1">Archivo modificado / Última mod.:</span>
                          <span className="font-semibold text-slate-800">{norma.archivoModificado}</span>
                        </div>
                        <div>
                          <span className="block text-slate-400 font-medium mb-1">Enlace al documento:</span>
                          <a
                            href={norma.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:underline"
                          >
                            {norma.tipoEnlace === 'pdf' ? (
                              <>
                                <FileText className="w-4 h-4 text-red-600" />
                                <span>Ver Archivo PDF</span>
                              </>
                            ) : (
                              <>
                                <Globe className="w-4 h-4 text-blue-600" />
                                <span>Ver Enlace Web</span>
                              </>
                            )}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="bg-white p-8 rounded-xl border border-slate-200 text-center text-slate-500 text-sm">
                No se encontraron registros que coincidan con la búsqueda.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content-box-wide space-y-6">
      {/* Ruta de navegación superior */}
      <div className="flex items-center gap-2 text-sm text-slate-700 bg-[#f0f4f9] p-3 rounded-lg border border-slate-200/80 font-semibold">
        <button onClick={onVolver} className="text-blue-700 hover:underline cursor-pointer bg-transparent border-none p-0 font-semibold">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-900 font-bold">Marco Normativo</span>
      </div>

      {/* Contenedor principal */}
      <div className="bg-[#f0f4f9] p-6 rounded-xl shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <h2 className="text-xl font-bold text-slate-900">
            Actos y documentos sobre Potestades y Marco Normativo
          </h2>
          <span className="text-xs text-slate-500">Última actualización: 5/10/2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tarjetasSeccion2.map((tarjeta) => (
            <div
              key={tarjeta.id}
              onClick={() => {
                if (tarjeta.id === 'normas-organicas' || tarjeta.id === 'normas-competencia' || tarjeta.id === 'reglamentos' || tarjeta.id === 'instrucciones') {
                  setSubseccionActiva(tarjeta.id);
                  setFiltroTipo('Todos');
                  setBusqueda('');
                  setIdExpandido(null);
                }
              }}
              className="bg-[#f0f4f9] p-5 rounded-xl border border-slate-200/80 hover:scale-[1.02] transition-all duration-200 flex flex-col justify-between group cursor-pointer min-h-[140px] shadow-xs"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {tarjeta.titulo}
                </h3>
                <div className="text-blue-600 shrink-0 mt-0.5 transform group-hover:translate-x-1 transition-transform duration-200">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>

              <div className="border-t border-slate-300/60 pt-3 mt-4 flex justify-end">
                <span className="text-xs font-medium text-slate-600 bg-slate-200/70 px-2 py-0.5 rounded">
                  {tarjeta.etiqueta}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-200 pt-4 flex justify-between items-center">
        <button 
          onClick={onVolver}
          className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-all cursor-pointer flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a sección principal
        </button>
      </div>

      </div>
    </div>
  );
}