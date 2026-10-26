import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface PermisoObraMenor {
  denominacion: string;
  tipoNorma: string;
  numero: string;
  nombreTitulo: string;
  fecha: string;
  fechaPublicacion: string;
  tieneEfectosGenerales: string;
  ultimaActualizacion: string;
  descripcion: string;
}

const crearPermisoObraMenor = (
  numero: string,
  nombreTitulo: string,
  fecha: string,
  fechaPublicacion: string,
  tieneEfectosGenerales: string,
  descripcion: string,
  denominacion = 'PERMISO OBRA MENOR',
  tipoNorma = 'Actos resolutivo'
): PermisoObraMenor => ({
  denominacion,
  tipoNorma,
  numero,
  nombreTitulo,
  fecha,
  fechaPublicacion,
  tieneEfectosGenerales,
  ultimaActualizacion: 'Sin Modificación',
  descripcion
});

const permisosObraMenorPorAnio: Record<string, PermisoObraMenor[]> = {
  '2016': [
    crearPermisoObraMenor('17', 'VIVIENDA COMERCIO', '25.07.16', 'Página Web, fecha de publicación 18.09.2016', 'Sí', 'AMPLIACION'),
    crearPermisoObraMenor('10', 'VIVIENDA COMERCIO', '22.04.2016', 'Página Web, fecha de publicación 18.09.2016', 'No', 'AMPLIACION'),
    crearPermisoObraMenor('9', 'VIVIENDA', '14.04.2016', 'Página Web, fecha de publicación 18.09.2016', 'No', 'MODIFICACION'),
    crearPermisoObraMenor('4', 'COMERCIO VIVIENDA', '25.01.2016', 'Página Web, fecha de publicación 05.02.2016', 'Sí', 'AMPLIACION'),
    crearPermisoObraMenor('3', 'EQUIPAMIENTO SOCIAL', '25.01.2016', 'Página Web, fecha de publicación 05.02.2016', 'Sí', 'AMPLIACION')
  ],
  '2015': [
    crearPermisoObraMenor('30', 'EDUCACION COLEGIO', '23.10.2015', 'Página Web, fecha de publicación 05.11.2015', 'Sí', 'AMPLIACION'),
    crearPermisoObraMenor('29', 'EDUCACION JARDIN INFANTIL', '21.10.2015', 'Página Web, fecha de publicación 05.11.2015', 'Sí', 'AMPLIACION'),
    crearPermisoObraMenor('27', 'VIVIENDA COMERCIO', '11.09.2015', 'Página Web, fecha de publicación 05.10.2015', 'Sí', 'AMPLIACION'),
    crearPermisoObraMenor('26', 'VIVIENDA COMERCIO', '09.09.2015', 'Página Web, fecha de publicación 05.10.2015', 'Sí', 'AMPLIACION'),
    crearPermisoObraMenor('23', 'EDUCACION (COLEGIO)', '01.09.2015', 'Página Web, fecha de publicación 05.10.2015', 'Sí', 'AMPLIACION'),
    crearPermisoObraMenor('22', 'EDUCACION (SALA CUNA)', '01.09.2015', 'Página Web, fecha de publicación 05.10.2015', 'Sí', 'AMPLIACION'),
    crearPermisoObraMenor('21', 'VIVIENDA', '26.08.2015', 'Página Web, fecha de publicación 05.09.2015', 'No', 'AMPLIACION'),
    crearPermisoObraMenor('20', 'COMERCIO', '14.08.2015', 'Página Web, fecha de publicación 05.08.2015', 'Sí', 'AMPLIACION'),
    crearPermisoObraMenor('1', 'VIVIENDA OFICINAS', '30.01.2015', 'Página Web, fecha de publicación 05.01.2015', 'Sí', 'AMPLIACION')
  ],
  '2014': [
    crearPermisoObraMenor('11', 'EQUIPAMIENTO', '22.09.2014', 'Página Web, fecha de publicación 05.10.2014', 'Sí', 'AMPLIACION', 'PERMISO OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('9', 'VIVIENDA', '11.08.2014', 'Página Web, fecha de publicación 05.07.2014', 'No', 'AMPLIACION', 'PERMISO OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('7', 'VIVIENDA', '09.06.2014', 'Página Web, fecha de publicación 05.07.2014', 'No', 'AMPLIACION', 'PERMISO OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('6', 'EDUCACION', '13.05.2014', 'Página Web, fecha de publicación 05.06.2014', 'Sí', 'AMPLIACION', 'PERMISO OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('5', 'VIVIENDA', '10.04.2014', 'Página Web, fecha de publicación 05.05.2018', 'Sí', 'OBRA MENOR/AMPLIACION', 'PERMISO OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('4', 'VIVIENDA Y COMERCIO', '10.3.2014', 'Página Web, fecha de publicación 05.04.2019', 'Sí', 'AMPLIACION', 'PERMISO OBRA MENOR', 'Actos Administrativos')
  ],
  '2013': [
    crearPermisoObraMenor('9', 'UNIDAD VECINAL N°7', '30.09.2013', 'Página Web (05.10.2013)', 'Sí', 'OBRA MENOR CON AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('5', 'VIVIENDA', '07.06.2013', 'Página Web (05.07.2013)', 'No', 'OBRA MENOR CON AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('4', 'EQUIPAMIENTO DEPORTIVO', '19.04.2013', 'Página Web (05.05.2013)', 'Sí', 'OBRA MENOR CON AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos')
  ],
  '2012': [
    crearPermisoObraMenor('19', 'VIVIENDA/LOCAL', '10.12.2012', 'Página Web (05.03.2013)', 'Sí', 'MODIFICACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('18', 'EDUCACION', '14.11.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('17', 'LOCAL COMERCIAL', '12.11.2012', 'Página Web (05.03.2013)', 'Sí', 'MODIFICACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('16', '', '08.11.2012', 'Página Web (05.03.2013)', 'Sí', 'MODIFICACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('14', 'OFICINAS', '18.10.2012', 'Página Web (05.03.2013)', 'No', 'AMPLIACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('13', 'VIVIENDA', '04.09.2012', 'Página Web (05.03.2013)', 'No', 'AMPLIACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('12', 'VIVIENDA', '30.07.2012', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('12A', 'LOCALES COMERCIALES', '31.08.2012', 'Página Web (05.03.2013)', 'No', 'MODIFICACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('11', 'EDUCACION', '11.07.2012', 'Página Web (05.03.2013)', 'No', 'MODIFICACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('10', 'VIVIENDA', '26.07.2012', 'Página Web (05.03.2013)', 'No', 'MODIFICACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('10A', 'VIVIENDA', '20.07.2012', 'Página Web (05.03.2013)', 'No', 'MODIFICACION Y AMPLIACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('9', 'VIVIENDA', '11.07.2012', 'Página Web (05.03.2013)', 'No', 'MODIFICACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('8', 'VIVIENDA', '11.06.2012', 'Página Web (05.03.2013)', 'No', 'MODIFICACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('7', '', '08.06.2012', 'Página Web (05.03.2013)', 'No', 'MODIFICACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('6', 'VIVIENDA/LOCAL COMERCIAL', '14.06.2012', 'Página Web (05.03.2013)', 'No', 'MODIFICACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('5', '', '07.05.2012', 'Página Web (05.03.2013)', 'Sí', 'OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('5A', 'EDUCACION', '07.05.2012', 'Página Web (05.03.2013)', 'Sí', 'OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('4', 'COMERCIO', '27.04.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('3', 'LOCALES COMERCIALES', '27.03.2012', 'Página Web (05.03.2013)', 'Sí', 'OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('2', 'OFICINAS', '05.01.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('2A', 'OFICINAS', '05.01.2012', 'Página Web (05.03.2013)', 'Sí', 'MODIFICACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('1', 'LOCAL COMERCIAL', '17.01.2012', 'Página Web (05.03.2013)', 'Sí', 'REMODELACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('1A', 'MUNICIPALIDAD', '03.02.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos')
  ],
  '2011': [
    crearPermisoObraMenor('054', 'SEDE SOCIAL', '29.12.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('053', 'SEDE SOCIAL', '29.12.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('052', 'SEDE SOCIAL', '29.12.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('034', 'EDUCACION', '17.11.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('032', 'CULTO', '24.10.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR CON AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('030', 'OFICINA', '01.09.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('029', 'EQUIPAMIENTO', '18.08.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('025', 'EDUCACION', '22.06.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('022', 'VIVIENDA', '21.06.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('021', 'VIVIENDA', '21.06.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('020', 'VIVIENDA', '26.05.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('019', 'VIVIENDA', '19.05.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('016', 'LOCAL COMERCIAL', '01.12.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('015', 'VIVIENDA', '20.04.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('015', 'ESTADIO LO PRADO', '15.11.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('013', 'LOCAL COMERCIAL', '14.04.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('013', 'CONSULTA DENTAL', '28.07.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('012', 'VIVIENDA', '13.04.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('012', 'BODEGA MUNICIPAL', '30.06.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('011', 'VIVIENDA', '28.03.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('011', 'LOCAL COMERCIAL', '23.06.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('010', 'COMERCIO', '22.06.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('009', 'LOCAL COMERCIAL', '10.05.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('008', 'EDUCACION', '25.04.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('007', 'EDUCACION', '23.03.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('006', 'VIVIENDA', '14.02.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('006', 'LOCAL COMERCIAL', '23.03.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('005', 'LOCAL COMERCIAL', '21.03.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('004', 'EQUIPAMIENTO', '04.02.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('004', 'LOCAL COMERCIAL', '21.03.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('003', 'LOCAL COMERCIAL', '25.02.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('002', 'LOCALES COMERCIALES', '10.02.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('002', 'VIVIENDA', '04.02.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('001', 'EDUCACION', '11.01.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos')
  ],
  '2010': [
    crearPermisoObraMenor('050', 'VIVIENDA', '30.12.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('049', 'VIVIENDA', '27.12.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('047', 'VIVIENDA', '23.11.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('046', 'EDUCACION', '12.11.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('045', 'VIVIENDA', '12.11.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('039', 'LOCAL COMERCIAL', '24.08.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('037', 'VIVIENDA', '23.08.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('034', 'VIVIENDA', '12.08.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('033', 'LOCAL COMERCIAL', '11.08.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('032', 'LOCAL COMERCIAL', '04.08.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('023', 'SEDE SOCIAL', '14.06.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('021', 'LOCAL COMERCIAL', '', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('020', 'LOCAL COMERCIAL', '28.05.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('018', 'VIVIENDA', '28.05.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('018', 'LOCAL COMERCIAL', '25.11.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('017', 'LOCAL COMERCIAL', '10.06.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('016', 'VIVIENDA', '24.05.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('016', 'EDUCACION', '14.10.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('015', 'LOCAL COMERCIAL', '18.05.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('015', 'EDUCACION', '14.10.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('014', 'EDUCACION', '07.10.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('013', 'EDUCACION', '04.10.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('012', 'EDUCACION', '15.09.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('011', 'EQUIPAMIENTO SALUD', '13.09.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('010', 'LOCAL COMERCIAL', '19.07.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('009', 'LOCAL COMERCIAL', '21.06.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('008', 'VIVIENDA', '15.04.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('008', 'LOCAL COMERCIAL', '21.06.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('007', 'LOCAL COMERCIAL', '15.04.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('006', 'VIVIENDA', '05.04.2010', 'Página Web (05.03.2013)', 'No', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('004', 'VIVIENDA', '19.01.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('003', 'LOCAL COMERCIAL', '19.01.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('003', 'VIVIENDA', '13.01.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('002', 'LOCAL COMERCIAL', '19.01.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('001', 'LOCAL COMERCIAL', '15.01.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('001', 'VIVIENDA', '07.01.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos')
  ],
  '2009': [
    crearPermisoObraMenor('055', 'VIVIENDA', '04.12.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('051', 'EDUCACION', '16.11.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('050', 'VIVIENDA', '06.11.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('047', 'VIVIENDA', '30.09.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('044', 'VIVIENDA', '07.09.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('040', 'VIVIENDA', '17.08.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('036', 'LOCAL COMERCIAL', '05.08.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('035', 'VIVIENDA', '28.07.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('029', 'VIVIENDA', '15.07.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('026', 'VIVIENDA', '09.07.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('024', 'VIVIENDA', '09.07.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('019', 'EDUCACION', '01.07.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('018', 'VIVIENDA', '30.06.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('017', 'VIVIENDA', '16.06.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('016', 'VIVIENDA', '04.06.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('011', 'COMERCIO', '02.10.2009', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('010', 'VIVIENDA', '24.04.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('010', 'COMERCIO', '10.09.2009', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('009', 'CENTRO CIVICO', '20.04.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('009', 'CENTRO MEDICO', '27.08.2009', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('008', 'CENTRO COMERCIAL SAN PABLO', '27.08.2009', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('007', 'VIVIENDA', '23.07.2009', 'Página Web (05.03.2013)', 'No', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('006', 'COMERCIO', '29.01.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('005', 'LOCAL COMERCIAL', '29.01.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('005', 'EDUCACION', '29.05.2009', 'Página Web (05.03.2013)', 'Sí', 'OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('004', 'VIVIENDA', '28.04.2009', 'Página Web (05.03.2013)', 'No', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('003', 'EDUCACION', '23.03.2009', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('002', 'EDUCACION', '20.02.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('002', 'VIVIENDA COMERCIO', '22.01.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos'),
    crearPermisoObraMenor('001', 'COMERCIO', '22.01.2009', 'Página Web (05.03.2013)', 'Sí', 'OBRA MENOR', 'PERMISOS DE EDIFICACION OBRA MENOR', 'Actos Administrativos')
  ]
};

interface Seccion7_6ObraMenorProps {
  anio: string;
  busqueda: string;
}

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

const Seccion7_6ObraMenor = Object.assign(function Seccion7_6ObraMenor({
  anio,
  busqueda
}: Seccion7_6ObraMenorProps) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (permisosObraMenorPorAnio[anio] ?? []).filter((registro) =>
    !termino || Object.values(registro).some((valor) =>
      normalizarTexto(String(valor)).includes(termino)
    )
  );

  if (registros.length === 0) {
    return <EstadoSinRegistros titulo="Permiso Edificación Obra Menor" anio={anio} busqueda={busqueda} />;
  }

  return (
    <div className="space-y-2">
      {registros.map((registro, index) => (
        <article key={`${anio}-${registro.numero}-${index}`} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <details open className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 border-none bg-slate-50/80 p-4 text-left [&::-webkit-details-marker]:hidden">
              <span>
                <span className="block text-xs font-semibold text-blue-800">
                  {registro.denominacion}
                </span>
                <span className="mt-1 block text-xs text-slate-600">
                  {registro.tipoNorma} N° {registro.numero} — {registro.fecha} · {registro.nombreTitulo}
                </span>
              </span>
            </summary>
            <div className="grid grid-cols-1 gap-4 border-t border-slate-100 bg-white p-4 sm:grid-cols-2 xl:grid-cols-4">
              <div><p className="text-xs text-slate-500">Denominación</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.denominacion}</p></div>
              <div><p className="text-xs text-slate-500">Tipo de norma</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.tipoNorma}</p></div>
              <div><p className="text-xs text-slate-500">Número</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.numero}</p></div>
              <div><p className="text-xs text-slate-500">Nombre / título</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.nombreTitulo || '—'}</p></div>
              <div><p className="text-xs text-slate-500">Fecha</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fecha}</p></div>
              <div><p className="text-xs text-slate-500">Fecha, medio y forma de publicación</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fechaPublicacion}</p></div>
              <div><p className="text-xs text-slate-500">Tiene efectos generales</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.tieneEfectosGenerales}</p></div>
              <div><p className="text-xs text-slate-500">Fecha última actualización</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.ultimaActualizacion}</p></div>
              <div><p className="text-xs text-slate-500">Breve descripción del objeto del acto</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.descripcion}</p></div>
              <div>
                <p className="text-xs text-slate-500">Enlace a la publicación o archivo correspondiente</p>
                <PdfLinkButton className="mt-1" ariaLabel={`Abrir PDF del permiso de obra menor número ${registro.numero}`} />
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}, { documentosPorAnio: permisosObraMenorPorAnio });

export default Seccion7_6ObraMenor;
