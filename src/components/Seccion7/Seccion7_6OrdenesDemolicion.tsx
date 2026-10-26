import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_6OrdenesDemolicionProps {
  anio: string;
  busqueda: string;
}

export interface OrdenDemolicion {
  tipoNorma: string;
  numero: string;
  titulo: string;
  fecha: string;
  fechaPublicacion: string;
  publicadoDiarioOficial: string;
  efectosGenerales: string;
  ultimaActualizacion: string;
  descripcion: string;
  modificacion: string;
  modificacionesPdf?: number;
  urlModificaciones?: string[];
  urlDrive: string; // Aquí poner URL de Drive del PDF de publicación.
}

const crearOrden2010 = (
  numero: string,
  fecha: string,
  titulo: string,
  descripcion: string,
  urlDrive = '' // Aquí va la URL de Drive del PDF de este registro.
): OrdenDemolicion => ({
  tipoNorma: 'Decreto',
  numero,
  titulo,
  fecha,
  fechaPublicacion: '03.05.2013 Página Web',
  publicadoDiarioOficial: 'No',
  efectosGenerales: 'Si',
  ultimaActualizacion: 'Sin Modificaciones',
  descripcion,
  modificacion: 'Sin modificación',
  urlDrive
});

export const ordenesPorAnio: Record<string, OrdenDemolicion[]> = {
  // Aquí va la URL de Drive en urlDrive de cada registro con PDF.
  '2016': [
    {
      tipoNorma: 'Decretos Alcaldicios',
      numero: '183',
      titulo: 'Dispone Demolición Inmediata',
      fecha: '16.03.2016',
      fechaPublicacion: '05.04.2016, Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'No',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DISPONE DEMOLICIÓN INMEDIATA EN CONSTRUCCIÓN IRREGULAR UBICADA LO PRADO',
      modificacion: 'Sin Modificaciones',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      numero: '134',
      titulo: 'Dispone Demolición Inmediata',
      fecha: '25.02.2016',
      fechaPublicacion: '05.03.2016, Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'No',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DISPONE DEMOLICIÓN INMEDIATA EN CONSTRUCCIÓN IRREGULAR UBICADA LO PRADO',
      modificacion: 'Sin Modificaciones',
      urlDrive: ''
    }
  ],
  // Aquí va la URL de Drive en urlDrive de cada registro con PDF.
  '2015': [
    {
      tipoNorma: 'Decretos Alcaldicios',
      numero: '953',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '24.11.2015',
      fechaPublicacion: '06.12.2015, Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Sí',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DECLARA INHABILIDAD DE CONSTRUCCIÓN IRREGULAR, SIN PERMISO DE EDIFICACIÓN',
      modificacion: 'Sin Modificaciones',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      numero: '839',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '19.11.2015',
      fechaPublicacion: '06.12.2015, Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Sí',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DECLARA INHABILIDAD DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN',
      modificacion: 'Sin Modificaciones',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      numero: '617',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '11.08.2015',
      fechaPublicacion: '06.09.2015, Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Sí',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DECLARA INHABILIDAD DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN',
      modificacion: 'Sin Modificaciones',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      numero: '602',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '05.08.2015',
      fechaPublicacion: '06.09.2015, Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Sí',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DECLARA INHABILIDAD DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN',
      modificacion: 'Sin Modificaciones',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      numero: '601',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '05.08.2015',
      fechaPublicacion: '06.09.2015, Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Sí',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DECLARA INHABILIDAD DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN',
      modificacion: 'Sin Modificaciones',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      numero: '554',
      titulo: 'Desafectación de Declaratoria de utilidad Pública',
      fecha: '27.07.2015',
      fechaPublicacion: '06.08.2015, Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Sí',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DESAFECTACIÓN DE DECLARATORIA DE UTILIDAD PÚBLICA',
      modificacion: 'Sin Modificaciones',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      numero: '509',
      titulo: 'Dispone Demolición Inmediata',
      fecha: '07.07.2015',
      fechaPublicacion: '06.08.2015, Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Sí',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DISPONE DEMOLICIÓN INMEDIATA AL INTERIOR DEL CONDOMINIO SOCIAL "ARTURO PRAT"',
      modificacion: 'Sin Modificaciones',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      numero: '341',
      titulo: 'Dispone Demolición Inmediata',
      fecha: '11.05.2015',
      fechaPublicacion: '06.06.2015, Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Sí',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DECLARA DEMOLICIÓN INMEDIATA DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN',
      modificacion: 'Sin Modificaciones',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      numero: '316',
      titulo: 'Dispone Demolición Inmediata',
      fecha: '30.04.2015',
      fechaPublicacion: '06.05.2015, Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Sí',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DISPONE DEMOLICIÓN INMEDIATA EN LUGAR QUE INDICA',
      modificacion: 'Sin Modificaciones',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      numero: '146',
      titulo: 'Expropiación',
      fecha: '24.02.2015',
      fechaPublicacion: '06.03.2015, Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Sí',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'AUTORIZA A LA DIRECCIÓN DE OBRAS MUNICIPALES A PROCEDER SEGÚN INDICA',
      modificacion: 'Sin Modificaciones',
      urlDrive: ''
    }
  ],
  // Aquí va la URL de Drive en urlDrive de cada registro con PDF.
  '2014': [
    {
      tipoNorma: 'Decreto',
      numero: '2747',
      titulo: 'Dispone Demolición Inmediata',
      fecha: '01.10.14',
      fechaPublicacion: '06.11.2014 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'No',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DISPONE DEMOLICIÓN INMEDIATA DE AMPLIACIÓN IRREGULAR',
      modificacion: 'Sin Modificaciones',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '2867',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '24.09.14',
      fechaPublicacion: '06.10.2014 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Sí',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DECLARA INHABILIDAD DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN, CON DESALOJO DE LA PROPIEDAD Y DISPONE DEMOLICIÓN INMEDIATA DE LAS OBRAS QUE INDICA',
      modificacion: 'Sin Modificaciones',
      urlDrive: ''
    }
  ],
  // Aquí va la URL de Drive en urlDrive de cada registro con PDF.
  '2013': [
    {
      tipoNorma: 'Decreto',
      numero: '1493',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '24.05.2013',
      fechaPublicacion: '21.06.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Si',
      ultimaActualizacion: '22.08.2013',
      descripcion: 'DECLARA INHABILIDAD DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN Y SIN RECEPCIÓN FINAL',
      modificacion: 'Sin Modificación',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '2271',
      titulo: 'Otorga Ampliación de Plazo de Demolición',
      fecha: '19.08.2013',
      fechaPublicacion: '22.08.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Si',
      ultimaActualizacion: '22.08.2013',
      descripcion: 'OTORGA AMPLIACIÓN DE PLAZO PARA DEMOLICIÓN DE CONSTRUCCIÓN IRREGULAR',
      modificacion: 'Sin Modificación',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '2291',
      titulo: 'Otorga Ampliación de Plazo de Demolición',
      fecha: '21.08.2013',
      fechaPublicacion: '22.08.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Si',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'OTORGA AMPLIACIÓN DE PLAZO PARA DEMOLICIÓN DE CONSTRUCCIÓN IRREGULAR EN',
      modificacion: 'Sin Modificación',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '2295',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '21.08.2013',
      fechaPublicacion: '23.08.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Si',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DECLARA INHABILIDAD DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN EN LUGAR QUE INDICA',
      modificacion: 'Sin Modificación',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '2386',
      titulo: 'Otorga Ampliación de Plazo de Demolición',
      fecha: '22.08.2013',
      fechaPublicacion: '06.09.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'No',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'RECTIFICA Y COMPLEMENTA DECRETO ALCALDICIO N° 2271 DE FECHA 19 DE AGOSTO DE 2013 EN LA FORMA QUE INDICA',
      modificacion: 'Sin Modificación',
      urlDrive: ''
    }
  ],
  // Aquí va la URL de Drive en urlDrive de cada registro con PDF.
  '2012': [
    {
      tipoNorma: 'Decreto',
      numero: '136',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '12.01.12',
      fechaPublicacion: '21.06.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'SI',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DECLARA INHABILIDAD DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN',
      modificacion: 'Sin Enlaces',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '137',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '12.01.12',
      fechaPublicacion: '21.06.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'SI',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DECLARA INHABILIDAD DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN',
      modificacion: 'Sin Enlaces',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '138',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '12.01.12',
      fechaPublicacion: '21.06.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'SI',
      ultimaActualizacion: '08.05.12',
      descripcion: 'DECLARA INHABILIDAD DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN',
      modificacion: '',
      modificacionesPdf: 1,
      urlModificaciones: [''], // Aquí poner URL de Drive del PDF de modificación.
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '139',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '12.01.12',
      fechaPublicacion: '21.06.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'SI',
      ultimaActualizacion: '08.05.12',
      descripcion: 'DECLARA INHABILIDAD DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN',
      modificacion: '',
      modificacionesPdf: 1,
      urlModificaciones: [''], // Aquí poner URL de Drive del PDF de modificación.
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '855',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '05.04.12',
      fechaPublicacion: '21.06.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'SI',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DECLARA INHABILIDAD DE OBRAS SIN PERMISO DE EDIFICACIÓN Y SIN RECEPCIÓN FINAL',
      modificacion: 'Sin Enlaces',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '1157',
      titulo: 'Otorga Ampliación de Plazo de Demolición',
      fecha: '08.05.12',
      fechaPublicacion: '21.06.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'SI',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'OTORGA AMPLIACIÓN DE PLAZO PARA INHABILIDAD DE CONSTRUCCIONES SIN PERMISO DE EDIFICACIÓN',
      modificacion: '',
      modificacionesPdf: 2,
      urlModificaciones: ['', ''], // Aquí poner URL de Drive de cada PDF de modificación.
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '1242',
      titulo: 'Otorga Ampliación de Plazo de Demolición',
      fecha: '16.05.12',
      fechaPublicacion: '21.06.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'SI',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'OTORGA AMPLIACIÓN DE PLAZO PARA DEMOLICIONES DE CONSTRUCCIONES IRREGULARES QUE SE INDICA.',
      modificacion: '',
      modificacionesPdf: 2,
      urlModificaciones: ['', ''], // Aquí poner URL de Drive de cada PDF de modificación.
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '1401',
      titulo: 'Otorga Ampliación de Plazo de Demolición',
      fecha: '04.06.12',
      fechaPublicacion: '21.06.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'SI',
      ultimaActualizacion: '03.07.12',
      descripcion: 'OTORGA AMPLIACIÓN DE PLAZO PARA INHABILIDAD DE CONSTRUCCIONES SIN PERMISO DE EDIFICACIÓN',
      modificacion: '',
      modificacionesPdf: 1,
      urlModificaciones: [''], // Aquí poner URL de Drive del PDF de modificación.
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '1698',
      titulo: 'Dispone Demolición Inmediata',
      fecha: '03.07.12',
      fechaPublicacion: '21.06.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'SI',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DISPONE DEMOLICIÓN INMEDIATA DE INMUEBLE DE PROPIEDAD, POR APLICACIÓN DE LO DISPUESTO EN EL ARTÍCULO 148, N° 1 DEL DFL 458 DE 1976, LEY GENERAL DE URBANISMO Y CONSTRUCCIONES.',
      modificacion: 'Sin Enlaces',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '1728',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '04.07.12',
      fechaPublicacion: '21.06.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'SI',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DECLARA INHABILIDAD DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN',
      modificacion: 'Sin Enlaces',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '1735',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '05.07.12',
      fechaPublicacion: '21.06.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'SI',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DECLARA INHABILIDAD DE CONSTRUCCIÓN SOBRE EL BIEN NACIONAL DE USO PÚBLICO UBICADO EN LA ESQUINA SUR ORIENTE DE LAS CALLES REINA MAUD Y SANTA MARTA EJECUTADAS SIN PERMISO DE OCUPACIÓN NI DE EDIFICACIÓN',
      modificacion: 'Sin Enlaces',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '1783',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '13.07.12',
      fechaPublicacion: '21.06.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'SI',
      ultimaActualizacion: '21.08.2013',
      descripcion: 'DECLARA INHABILIDAD DE LAS OBRAS SIN PERMISO DE EDIFICACIÓN Y SIN RECEPCIÓN FINAL',
      modificacion: '',
      modificacionesPdf: 1,
      urlModificaciones: [''], // Aquí poner URL de Drive del PDF de modificación.
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '2104',
      titulo: 'Declara Inhabilidad de Construcción',
      fecha: '13.08.12',
      fechaPublicacion: '21.06.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'SI',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DECLARA INHABILIDAD DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN Y SIN RECEPCIÓN FINAL',
      modificacion: 'Sin Enlaces',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '2510',
      titulo: 'Otorga Ampliación de Plazo de Demolición',
      fecha: '03.10.12',
      fechaPublicacion: '21.06.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'SI',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'OTORGA AMPLIACIÓN DE PLAZO PARA DEMOLICIÓN DE CONSTRUCCIONES SIN PERMISOS DE EDIFICACIÓN',
      modificacion: '',
      modificacionesPdf: 2,
      urlModificaciones: ['', ''], // Aquí poner URL de Drive de cada PDF de modificación.
      urlDrive: ''
    }
  ],
  // Aquí va la URL de Drive en urlDrive de cada registro con PDF.
  '2011': [
    {
      tipoNorma: 'Decreto',
      numero: '533',
      titulo: 'Dispone Demolición Inmediata',
      fecha: '11.03.11',
      fechaPublicacion: '03.05.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'si',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DISPONE DEMOLICIÓN INMEDIATA DE AMPLIACIÓN IRREGULAR',
      modificacion: 'Sin Enlaces',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '1594',
      titulo: 'Dispone Demolición Inmediata',
      fecha: '01.08.11',
      fechaPublicacion: '03.05.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'si',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DISPONE DEMOLICIÓN INMEDIATA DE CONSTRUCCIÓN IRREGULAR EN PARTE POSTERIOR DEL INMUEBLE',
      modificacion: 'Sin Enlaces',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '2657',
      titulo: 'Dispone Demolición Inmediata',
      fecha: '01.12.11',
      fechaPublicacion: '03.05.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'si',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'DISPONE DEMOLICIÓN INMEDIATA DE AMPLIACIÓN IRREGULAR',
      modificacion: 'Sin Enlaces',
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '2848',
      titulo: 'Dispone Demolición Inmediata',
      fecha: '26.12.11',
      fechaPublicacion: '03.05.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'si',
      ultimaActualizacion: '16.05.2012',
      descripcion: 'DISPONE DEMOLICIÓN INMEDIATA DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN',
      modificacion: '',
      modificacionesPdf: 2,
      urlModificaciones: ['', ''], // Aquí poner URL de Drive de cada PDF de modificación.
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '2878',
      titulo: 'Dispone Demolición Inmediata',
      fecha: '26.12.11',
      fechaPublicacion: '03.05.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'si',
      ultimaActualizacion: '16.05.2012',
      descripcion: 'ORDÉNASE LA DEMOLICIÓN INMEDIATA DE CONSTRUCCIÓN SIN PERMISO DE EDIFICACIÓN',
      modificacion: '',
      modificacionesPdf: 2,
      urlModificaciones: ['', ''], // Aquí poner URL de Drive de cada PDF de modificación.
      urlDrive: ''
    }
  ],
  // Aquí va la URL de Drive en el 5.º argumento de crearOrden2010 en cada registro.
  '2010': [
    crearOrden2010('507', '15.03.10', 'Dispone Demolición Inmediata', 'DISPONE DEMOLICIÓN INMEDIATA DE INMUEBLE'),
    crearOrden2010('508', '15.03.10', 'Dispone Demolición Inmediata', 'DISPONE DEMOLICIÓN INMEDIATA DE INMUEBLE'),
    crearOrden2010('509', '15.03.10', 'Dispone Demolición Inmediata', 'DISPONE DEMOLICIÓN INMEDIATA DE INMUEBLE'),
    crearOrden2010('510', '15.03.10', 'Dispone Demolición Inmediata', 'DISPONE DEMOLICIÓN INMEDIATA'),
    crearOrden2010('549', '18.03.10', 'Dispone Demolición Inmediata', 'DISPONE DEMOLICIÓN INMEDIATA DE PROPIEDAD'),
    crearOrden2010('550', '18.03.10', 'Dispone Demolición Inmediata', 'DISPONE DEMOLICIÓN INMEDIATA DE INMUEBLE.'),
    crearOrden2010('551', '18.03.10', 'Dispone Demolición Inmediata', 'DISPONE DEMOLICIÓN INMEDIATA DE INMUEBLE.'),
    crearOrden2010('552', '18.03.10', 'Dispone Demolición Inmediata', 'DISPONE DEMOLICIÓN INMEDIATA DE INMUEBLE.'),
    crearOrden2010('621', '26.03.10', 'Dispone Demolición Inmediata', 'DISPONE DEMOLICIÓN INMEDIATA DE PROPIEDAD'),
    crearOrden2010('622', '26.03.10', 'Dispone Demolición Inmediata', 'DISPONE DEMOLICIÓN INMEDIATA DE PROPIEDAD'),
    crearOrden2010('623', '26.03.10', 'Dispone Demolición Inmediata', 'DISPONE DEMOLICIÓN INMEDIATA DE PROPIEDAD'),
    crearOrden2010('626', '29.03.10', 'Dispone Demolición Inmediata', 'DISPONE DEMOLICIÓN INMEDIATA DE PROPIEDAD'),
    crearOrden2010('627', '29.03.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE INMUEBLE'),
    crearOrden2010('628', '29.03.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE INMUEBLE'),
    crearOrden2010('629', '29.03.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE INMUEBLE'),
    crearOrden2010('644', '31.03.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE INMUEBLE'),
    crearOrden2010('645', '31.03.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE INMUEBLE'),
    crearOrden2010('648', '31.03.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE INMUEBLE'),
    crearOrden2010('658', '05.04.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE INMUEBLE'),
    crearOrden2010('659', '05.04.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE INMUEBLE'),
    crearOrden2010('660', '05.04.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE INMUEBLE'),
    crearOrden2010('750', '14.04.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE PROPIEDAD'),
    crearOrden2010('751', '14.04.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE PROPIEDAD'),
    crearOrden2010('753', '14.04.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE PROPIEDAD'),
    crearOrden2010('754', '14.04.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE PROPIEDAD'),
    crearOrden2010('755', '14.04.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE PROPIEDAD'),
    crearOrden2010('756', '14.04.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE PROPIEDAD'),
    crearOrden2010('757', '14.04.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE PROPIEDAD'),
    crearOrden2010('793', '20.04.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE PROPIEDADES'),
    crearOrden2010('821', '23.04.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE PROPIEDADES'),
    crearOrden2010('912', '11.05.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE PROPIEDAD'),
    crearOrden2010('913', '11.05.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE PROPIEDAD'),
    crearOrden2010('1163', '17.06.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL DE PROPIEDADES'),
    crearOrden2010('1164', '17.06.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL DE PROPIEDAD'),
    crearOrden2010('1165', '17.06.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL DE PROPIEDADES'),
    crearOrden2010('1166', '17.06.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL DE PROPIEDADES'),
    crearOrden2010('1417', '29.07.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE INMUEBLE.'),
    crearOrden2010('1418', '29.07.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE INMUEBLE'),
    crearOrden2010('1419', '29.07.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE INMUEBLE'),
    crearOrden2010('1420', '29.07.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE INMUEBLE'),
    crearOrden2010('1794', '28.09.10', 'Dispone Demolición Parcial Inmediata', 'DISPONE DEMOLICIÓN PARCIAL INMEDIATA DE PROPIEDAD')
  ],
  // Aquí va la URL de Drive en urlDrive de cada registro con PDF.
  '2009': [
    {
      tipoNorma: 'Decreto',
      numero: '678',
      titulo: 'Dispone Demolición Inmediata',
      fecha: '26.03.09',
      fechaPublicacion: '03.05.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Si',
      ultimaActualizacion: '22.07.2009',
      descripcion: 'DISPONE DEMOLICIÓN INMEDIATA DE CONSTRUCCIÓN IRREGULAR INSTALADA AL COSTADO SUR PONIENTE DEL BLOCK 39 DEL ÁREA COPROPIEDAD DE VILLA SANTA ANITA.',
      modificacion: '',
      modificacionesPdf: 1,
      urlModificaciones: [''], // Aquí poner URL de Drive del PDF de modificación.
      urlDrive: ''
    },
    {
      tipoNorma: 'Decreto',
      numero: '1817',
      titulo: 'Dispone Demolición Inmediata',
      fecha: '26.08.09',
      fechaPublicacion: '03.05.2013 Página Web',
      publicadoDiarioOficial: 'No',
      efectosGenerales: 'Si',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'AUTORIZA DEMOLICIÓN TOTAL DE LA ESCALA CONSTRUIDA ENTRE LOS BLOCK N° 7 Y 8 DEL CONJUNTO HABITACIONAL UBICADO EN CALLE NEPTUNO ESQUINA VALLE TAFTE, SOLICITADA POR LOS VECINOS DEL REFERIDO CONJUNTO.',
      modificacion: 'Sin enlace',
      urlDrive: ''
    }
  ]
};

export default function Seccion7_6OrdenesDemolicion({ anio, busqueda }: Seccion7_6OrdenesDemolicionProps) {
  const ordenesAnio = ordenesPorAnio[anio] || [];
  const termino = busqueda
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase();
  const ordenes = termino
    ? ordenesAnio.filter((orden) =>
        Object.values(orden)
          .some((valor) =>
            String(valor ?? '')
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLocaleLowerCase()
              .includes(termino)
          )
      )
    : ordenesAnio;

  if (ordenes.length === 0 && termino) {
    return (
      <p className="text-xs text-slate-400 italic text-center py-2">
        No se encontraron registros que coincidan con “{busqueda}” para el año {anio}.
      </p>
    );
  }

  if (ordenes.length === 0) {
    return <EstadoSinRegistros titulo="Órdenes de Demolición" anio={anio} />;
  }

  return (
    <div className="space-y-4">
      {ordenes.map((orden) => (
        <article
          key={orden.numero}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <div className="p-4">
            <div className="mb-3 inline-flex rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
              {orden.tipoNorma} - Obras Municipales N° {orden.numero}
            </div>
            <h4 className="text-sm font-semibold text-slate-900">
              {orden.titulo}
            </h4>
            <p className="mt-1 text-xs text-slate-600">{orden.descripcion}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-slate-100 bg-slate-50 p-4 sm:grid-cols-2 xl:grid-cols-5">
            <div>
              <p className="text-xs text-slate-500">Publicado en Diario Oficial</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{orden.publicadoDiarioOficial}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Fecha de publicación / dictación</p>
              <p className="mt-1 text-xs font-medium text-slate-900">
                {orden.fecha}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Fecha, medio y forma de publicación</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{orden.fechaPublicacion}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Tiene efectos generales</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{orden.efectosGenerales}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Fecha última actualización</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{orden.ultimaActualizacion}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Enlace al documento</p>
              <PdfLinkButton href={orden.urlDrive} ariaLabel={`Abrir PDF de la orden de demolición número ${orden.numero}`} className="mt-1" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Enlace relacionado a la modificación</p>
              {orden.modificacionesPdf ? (
                <div className="mt-1 flex items-center gap-1">
                  {Array.from({ length: orden.modificacionesPdf }, (_, indice) => {
                    const url = orden.urlModificaciones?.[indice];
                    const ariaLabel = `Abrir PDF de modificación ${indice + 1} del decreto ${orden.numero}`;

                    return <PdfLinkButton key={indice} href={url} ariaLabel={ariaLabel} />;
                  })}
                </div>
              ) : (
                <p className="mt-1 text-xs font-medium text-slate-900">{orden.modificacion}</p>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
