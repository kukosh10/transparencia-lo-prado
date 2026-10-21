import type { PatenteHistorico } from './Seccion7_6Patentes';

interface FilaPermisoExento {
  numero: string;
  fecha: string;
  fechaPublicacion: string;
  descripcion: string;
  tieneEfectosGenerales?: string;
  ultimaActualizacion?: string;
  enlaceModificacion?: string;
  tipoNorma?: string;
  denominacion?: string;
  nombreTitulo?: string;
  enlacePublicacion?: string;
}

const crearPermisosExentos = (filas: FilaPermisoExento[]): PatenteHistorico[] =>
  filas.map(({
    numero,
    fecha,
    fechaPublicacion,
    descripcion,
    tieneEfectosGenerales = 'Sí',
    ultimaActualizacion = 'Sin Modificaciones',
    enlaceModificacion = 'Sin Modificaciones',
    tipoNorma = 'Decreto',
    denominacion = 'Patentes y Permisos',
    nombreTitulo = 'Permiso Exentos',
    enlacePublicacion = 'PDF'
  }) => ({
    tipoNorma,
    denominacion,
    nombreTitulo,
    numero,
    fecha,
    fechaPublicacion,
    tieneEfectosGenerales,
    ultimaActualizacion,
    descripcion,
    enlacePublicacion,
    enlaceModificacion,
    urlPublicacion: '',
    urlModificacion: ''
  }));

export const permisosExentosPorAnio: Record<string, PatenteHistorico[]> = {
  '2016': crearPermisosExentos([
    {
      numero: 'No Aplica',
      fecha: 'No Aplica',
      fechaPublicacion: 'No Aplica',
      tieneEfectosGenerales: 'No Aplica',
      ultimaActualizacion: 'No existen en este año.',
      descripcion: '',
      enlacePublicacion: 'No Aplica',
      enlaceModificacion: 'No Aplica'
    }
  ]),
  '2015': crearPermisosExentos([
    {
      numero: '2852',
      fecha: '18.12.2015',
      fechaPublicacion: '06.01.2016, Página Web',
      descripcion: 'AUTORIZA EXENCION EN EL PAGO DE DERECHOS MUNICIPALES POR LA INSTALACION DE LIENZO PROMOCIONAL EN FERIA NAVIDEÑA LOS TAMARINDOS.',
      tipoNorma: 'Decretos Exentos'
    }
  ]),
  '2014': crearPermisosExentos([
    {
      numero: '1067',
      fecha: '17.04.2014',
      fechaPublicacion: '06.05.2014, Página Web',
      tieneEfectosGenerales: 'No',
      descripcion: 'AUTORIZA EVENTO SOLIDARIO A BENEFICIO DE DAMNIFICADOS DE VALPARAISO.'
    },
    {
      numero: '515',
      fecha: '20.02.2014',
      fechaPublicacion: '06.03.2014, Página Web',
      descripcion: 'Autoriza exencion de pago de Derechos Municipales por uso de bien nacional a Instituciones que indica.'
    }
  ]),
  '2013': crearPermisosExentos([
    {
      numero: '1622',
      fecha: '07.06.2013',
      fechaPublicacion: '21.06.2013, Página Web',
      descripcion: 'OTORGA PERMISO EXENTO DE PAGO A LA INSTITUCION FONDO ESPERANZA, PARA INSTALAR STAND DE PROMOCION EN AVENIDA SAN PABLO CON NEPTUNO.',
      enlaceModificacion: 'Sin Modificación'
    }
  ]),
  '2012': crearPermisosExentos([
    {
      numero: '924',
      fecha: '11.04.2012',
      fechaPublicacion: 'Página Web, de fecha 29.04.2013',
      descripcion: 'OTORGA PERMISO EXENTO DE PAGO A LA EMPRESA PURINA, PARA REALIZAR CHARLA INFORMATIVA SOBRE ALIMENTACION PARA GATOS.',
      enlaceModificacion: 'Sin Enlaces'
    },
    {
      numero: '1063',
      fecha: '25.04.2012',
      fechaPublicacion: 'Página Web, de fecha 29.04.2013',
      descripcion: 'OTORGA PERMISO EXENTO DE PAGO AL CLUB DE ADULTO MAYOR "MARIA AUXILIADORA", PARA LA INSTALACION DE UNA FERIA DE LAS PULGAS, EN LUGAR QUE SE INDICA.',
      enlaceModificacion: 'Sin Enlaces'
    },
    {
      numero: '2635',
      fecha: '17.10.2012',
      fechaPublicacion: 'Página Web, de fecha 29.04.2013',
      descripcion: 'OTORGA PERMISO EXENTO DE PAGO DE PROPAGANDA CON SISTEMA DE PRIFONEO A NOMBRE DE LA SRA. JUANA HUAQUIMILLA MONSALVE.',
      enlaceModificacion: 'Sin Enlaces'
    }
  ]),
  '2011': crearPermisosExentos([
    {
      numero: 'No Aplica',
      fecha: 'No Aplica',
      fechaPublicacion: 'No Aplica',
      tieneEfectosGenerales: 'No Aplica',
      ultimaActualizacion: 'No existen en este año.',
      descripcion: '',
      enlacePublicacion: 'No Aplica',
      enlaceModificacion: 'No Aplica'
    }
  ]),
  '2010': crearPermisosExentos([
    {
      numero: '1831',
      fecha: '07.10.2010',
      fechaPublicacion: 'Página Web, de fecha 29.04.2013',
      descripcion: 'OTORGA PERMISO EXENTO DE PAGO AL TALLER DE DISCAPACITADOS "TALADIS", PARA REALIZAR EXPOSICION EN EL HALL DE LA MUNICIPALIDAD.',
      enlaceModificacion: 'Sin enlace',
      denominacion: 'Patentes',
      nombreTitulo: 'OTORGAMIENTO OTROS'
    }
  ]),
  '2009': crearPermisosExentos([
    {
      numero: '805',
      fecha: '09.04.2009',
      fechaPublicacion: 'Página Web, de fecha 29.04.2013',
      descripcion: 'OTORGA PERMISO EXENTO DE PAGO AL CLUB DE ADULTO "VILLA LONDRES".',
      enlaceModificacion: 'Sin enlace'
    },
    {
      numero: '1922',
      fecha: '09.09.2009',
      fechaPublicacion: 'Página Web, de fecha 29.04.2013',
      descripcion: 'OTORGA PERMISO EXENTO DE PAGO A LA ASOCIACION DE PENSIONADOS Y MONTEPIADAS, ACHIPEM LO PRADO.',
      enlaceModificacion: 'Sin enlace'
    }
  ])
};
