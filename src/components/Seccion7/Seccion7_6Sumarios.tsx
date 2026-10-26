import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_6SumariosProps {
  anio: string;
  busqueda: string;
}

export interface Sumario {
  tipoNorma: string;
  denominacion: string;
  nombreTitulo: string;
  numero: string;
  fecha: string;
  fechaPublicacion: string;
  tieneEfectosGenerales: string;
  ultimaActualizacion: string;
  descripcion: string;
  enlacePublicacion: string;
  urlPublicacion?: string;
  enlaceModificacion: string;
  urlModificacion?: string;
  documentosModificacion?: Array<{ url?: string }>;
}

const crearSumario2015 = (
  numero: string,
  fecha: string,
  nombreTitulo: string,
  fechaPublicacion: string,
  descripcion: string,
  opciones: {
    tieneEfectosGenerales?: string;
    ultimaActualizacion?: string;
    enlaceModificacion?: string;
    urlPublicacion?: string;
    urlModificacion?: string;
  } = {}
): Sumario => ({
  tipoNorma: 'Decretos Alcaldicios',
  denominacion: 'Sumarios',
  nombreTitulo,
  numero,
  fecha,
  fechaPublicacion,
  tieneEfectosGenerales: opciones.tieneEfectosGenerales || 'No',
  ultimaActualizacion: opciones.ultimaActualizacion || 'Sin Modificaciones',
  descripcion,
  enlacePublicacion: 'PDF',
  urlPublicacion: opciones.urlPublicacion ?? '',
  enlaceModificacion: opciones.enlaceModificacion || 'Sin Modificaciones',
  urlModificacion: opciones.urlModificacion ?? ''
});

const crearSumario2014 = (
  numero: string,
  fecha: string,
  nombreTitulo: string,
  fechaPublicacion: string,
  descripcion: string,
  opciones: {
    tieneEfectosGenerales?: string;
    ultimaActualizacion?: string;
    enlaceModificacion?: string;
    documentosModificacion?: Array<{ url?: string }>;
    urlPublicacion?: string;
    urlModificacion?: string;
  } = {}
): Sumario => ({
  tipoNorma: 'Decreto',
  denominacion: 'Sumarios',
  nombreTitulo,
  numero,
  fecha,
  fechaPublicacion,
  tieneEfectosGenerales: opciones.tieneEfectosGenerales || 'No',
  ultimaActualizacion: opciones.ultimaActualizacion || 'Sin Modificaciones',
  descripcion,
  enlacePublicacion: 'PDF',
  urlPublicacion: opciones.urlPublicacion ?? '',
  enlaceModificacion: opciones.enlaceModificacion || 'Sin Modificaciones',
  documentosModificacion: opciones.documentosModificacion?.map((documento) => ({
    ...documento,
    url: documento.url ?? ''
  })),
  urlModificacion: opciones.urlModificacion ?? ''
});

export const sumariosPorAnio: Record<string, Sumario[]> = {
  // Aquí van las URL en urlPublicacion y urlModificacion de cada registro; en crearSumario se agregan dentro de opciones.
  '2016': [
    {
      tipoNorma: 'Decretos Alcaldicios',
      denominacion: 'Sumarios',
      nombreTitulo: 'Sobresee Sumario',
      numero: '267',
      fecha: '12.04.2016',
      fechaPublicacion: '05.05.2016, Página Web',
      tieneEfectosGenerales: 'No',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'SOBRESEE INVESTIGACION SUMARIA ORDENADA DE ACUERDO A LO SEÑALADO EN EL DECRETO ALCALDICIO N°855 DE FECHA 19.08.2015.',
      enlacePublicacion: 'PDF',
      urlPublicacion: '',
      urlModificacion: '',
      enlaceModificacion: 'PDF'
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      denominacion: 'Sumarios',
      nombreTitulo: 'Instruye Investigación',
      numero: '231',
      fecha: '31.03.2016',
      fechaPublicacion: '05.04.2016, Página Web',
      tieneEfectosGenerales: 'No',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'INSTRUYE INVESTIGACION SUMARIA CON EL OBJETO DE DETERMINAR LA EVENTUAL RESPONSABILIDAD ADMINISTRATIVA DE FUNCIONARIO QUE SE INDICA POR REITERADOS RECLAMOS DE CONTRIBUYENTES, DESIGNA FISCAL.',
      enlacePublicacion: 'PDF',
      urlPublicacion: '',
      urlModificacion: '',
      enlaceModificacion: 'Sin Modificaciones'
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      denominacion: 'Sumarios',
      nombreTitulo: 'Instruye Sumario',
      numero: '235',
      fecha: '31.03.2016',
      fechaPublicacion: '05.04.2016, Página Web',
      tieneEfectosGenerales: 'No',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'INSTRUYE SUMARIO',
      enlacePublicacion: 'PDF',
      urlPublicacion: '',
      urlModificacion: '',
      enlaceModificacion: 'Sin Modificaciones'
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      denominacion: 'Sumarios',
      nombreTitulo: 'Instruye Investigación',
      numero: '188',
      fecha: '21.03.2016',
      fechaPublicacion: '05.04.2016, Página Web',
      tieneEfectosGenerales: 'No',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'INSTRUYE INVESTIGACION SUMARIA CON EL OBJETIVO DE DETERMINAR LA EXISTENCIA DE LOS HECHOS SEÑALADOS EN EL MEMORANDO N°18 Y LA INDIVIDUALIZACION DE LOS RESPONSABLES Y SU PARTICIPACION, SI LOS HUBIERE - DESIGNASE FISCAL.',
      enlacePublicacion: 'PDF',
      urlPublicacion: '',
      urlModificacion: '',
      enlaceModificacion: 'Sin Modificaciones'
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      denominacion: 'Sumarios',
      nombreTitulo: 'Sobresee Sumario',
      numero: '99',
      fecha: '08.02.2016',
      fechaPublicacion: '05.03.2016, Página Web',
      tieneEfectosGenerales: 'No',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'SOBRESEE INVESTIGACION SUMARIA EN RELACION A DECRETO ALCALDICIO N°400 DE FECHA 01.06.2015.',
      enlacePublicacion: 'PDF',
      urlPublicacion: '',
      urlModificacion: '',
      enlaceModificacion: 'PDF'
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      denominacion: 'Sumarios',
      nombreTitulo: 'Sobresee Sumario',
      numero: '74',
      fecha: '29.01.2016',
      fechaPublicacion: '05.02.2016, Página Web',
      tieneEfectosGenerales: 'No',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'SOBRESEE SUMARIO ADMINISTRATIVO ORDENADO MEDIANTE DECRETO ALCALDICIO N°339 DE 11 DE MAYO DE 2015.',
      enlacePublicacion: 'PDF',
      urlPublicacion: '',
      urlModificacion: '',
      enlaceModificacion: 'PDF'
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      denominacion: 'Sumarios',
      nombreTitulo: 'Sobresee Sumario',
      numero: '73',
      fecha: '29.01.2016',
      fechaPublicacion: '05.02.2016, Página Web',
      tieneEfectosGenerales: 'No',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'SOBRESEE INVESTIGACION SUMARIA EN RELACION A DECRETO ALCALDICIO N°354 DE FECHA 19 DE AGOSTO DE 2015.',
      enlacePublicacion: 'PDF',
      urlPublicacion: '',
      urlModificacion: '',
      enlaceModificacion: 'PDF'
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      denominacion: 'Sumarios',
      nombreTitulo: 'Acoge parcialmente apelación',
      numero: '18',
      fecha: '11.01.2016',
      fechaPublicacion: '05.02.2016, Página Web',
      tieneEfectosGenerales: 'No',
      ultimaActualizacion: '04.04.2016',
      descripcion: 'ACOGE PARCIALMENTE APELACION PRESENTADA POR EL FUNCIONARIO',
      enlacePublicacion: 'PDF',
      urlPublicacion: '',
      urlModificacion: '',
      enlaceModificacion: 'PDF'
    },
    {
      tipoNorma: 'Decretos Alcaldicios',
      denominacion: 'Sumarios',
      nombreTitulo: 'Acoge parcialmente apelación',
      numero: '19',
      fecha: '11.01.2016',
      fechaPublicacion: '05.02.2016, Página Web',
      tieneEfectosGenerales: 'No',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'ACOGE PARCIALMENTE APELACION PRESENTADA POR LA FUNCIONARIA',
      enlacePublicacion: 'PDF',
      urlPublicacion: '',
      urlModificacion: '',
      enlaceModificacion: 'Sin Modificaciones'
    }
  ],
  // Aquí van las URL en urlPublicacion y urlModificacion de cada registro; en crearSumario se agregan dentro de opciones.
  '2015': [
    crearSumario2015('1091', '30.12.15', 'Acoge parcialmente apelación', '06.01.2016 Página Web', 'ACOGE PARCIALMENTE APELACION PRESENTADA POR LA FUNCIONARIA', { enlaceModificacion: 'PDF' }),
    crearSumario2015('1090', '30.12.15', 'Rechaza Apelaciones', '06.01.2016 Página Web', 'RECHAZA APELACION PRESENTADA Y CONFIRMA LA EVALUACION DE DESEMPEÑO PERIODO 01 DE SEPTIEMBRE DE 2014 AL 31 DE AGOSTO DE 2015.'),
    crearSumario2015('1089', '30.12.15', 'Rechaza Apelaciones', '06.01.2016 Página Web', 'RECHAZA APELACION PRESENTADA Y CONFIRMA LA EVALUACION DE DESEMPEÑO PERIODO 01 DE SEPTIEMBRE DE 2014 AL 31 DE AGOSTO DE 2015.'),
    crearSumario2015('1066', '23.12.15', 'Designación Nuevo Fiscal', '06.01.2016 Página Web', 'DESIGNA NUEVO FISCAL EN INVESTIGACION SUMARIA INSTRUIDA POR DECRETO ALCALDICIO N°949-2015.'),
    crearSumario2015('1062', '23.12.15', 'Sobresee Investigación Sumaria', '06.01.2016 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADO MEDIANTE DECRETO ALCALDICIO N°977 DE FECHA 27.11.2015.'),
    crearSumario2015('1061', '22.12.15', 'Sobresee Investigación Sumaria', '06.01.2016 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADO MEDIANTE DECRETO ALCALDICIO N°405 DE FECHA 01 DE JUNIO DE 2015.'),
    crearSumario2015('1019', '11.12.15', 'Designación Nuevo Fiscal', '06.01.2016 Página Web', 'DESIGNA NUEVO FISCAL EN INVESTIGACION SUMARIA INSTRUIDA MEDIANTE DECRETO ALCALDICIO N°949 DE FECHA 20.11.15.'),
    crearSumario2015('977', '27.11.2015', 'Instruye Sumario', '06.12.2015 Página Web', 'INSTRUYE SUMARIO PARA DETERMINAR LA EXISTENCIA DE LOS HECHOS SEÑALADOS EN EL INFORME FINAL DE LA C.G.R., DESIGNASE FISCAL INVESTIGADOR.', { tieneEfectosGenerales: 'Si' }),
    crearSumario2015('976', '27.11.2015', 'Designación Nuevo Fiscal', '06.12.2015 Página Web', 'DESIGNA NUEVO FISCAL EN INVESTIGACION SUMARIA INSTRUIDA MEDIANTE DECRETO ALCALDICIO N°949 DE FECHA 20.11.15.', { tieneEfectosGenerales: 'Si' }),
    crearSumario2015('949', '20.11.2015', 'Instruye Investigación', '06.12.2015 Página Web', 'INSTRUYE INVESTIGACION SUMARIA CON EL OBJETO DE DETERMINAR LA EXISTENCIA DE LOS HECHOS SEÑALADOS EN LA DENUNCIA Y LA INDIVIDUALIZACION DE LOS RESPONSABLES Y SU PARTICIPACION, SI LOS HUBIERE. DESIGNA A FISCAL INVESTIGADOR.', { tieneEfectosGenerales: 'Si' }),
    crearSumario2015('829', '13.10.2015', 'Instruye Investigación', '06.11.2015 Página Web', 'INSTRUYE INVESTIGACION SUMARIA CON EL OBJETO DE INVESTIGAR LAS EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS QUE PUDIESEN EXISTIR EN LOS HECHOS INFORMADOS, DESIGNA FISCAL INVESTIGADOR.', { tieneEfectosGenerales: 'Si' }),
    crearSumario2015('655', '19.08.2015', 'Instruye Investigación', '06.09.2015 Página Web', 'INSTRUYE INVESTIGACION SUMARIA PARA DETERMINAR EXISTENCIA DE LOS HECHOS SEÑALADOS EN EL INFORME FINAL SINGULARIZADO PRECEDENTEMENTE Y LA INDIVIDUALIZACION DE LOS RESPONSABLES Y SU PARTICIPACION, SI LOS HUBIERE, DESIGNA FISCAL INVESTIGADOR.', { tieneEfectosGenerales: 'Si' }),
    crearSumario2015('654', '19.08.2015', 'Instruye Investigación', '06.09.2015 Página Web', 'INSTRUYE INVESTIGACION SUMARIA PARA DETERMINAR EXISTENCIA DE LOS HECHOS SEÑALADOS EN EL INFORME FINAL SINGULARIZADO PRECEDENTEMENTE Y LA INDIVIDUALIZACION DE LOS RESPONSABLES Y SU PARTICIPACION, SI LOS HUBIERE, DESIGNA FISCAL INVESTIGADOR.', { tieneEfectosGenerales: 'Si' }),
    crearSumario2015('560', '28.07.2015', 'Instruye Investigación', '06.08.2015 Página Web', 'INSTRUYE INVESTIGACION SUMARIA.', { tieneEfectosGenerales: 'Si' }),
    crearSumario2015('524', '14.07.2015', 'Designación Nuevo Fiscal', '06.08.2015 Página Web', 'DESIGNA COMO NUEVO FISCAL EN INVESTIGACION SUMARIA INSTRUIDA POR DECRETO ALCALDICIO N°400 DE FECHA 01.06.15.', { tieneEfectosGenerales: 'Si' }),
    crearSumario2015('511', '08.07.2015', 'Sobresee Investigación Sumaria', '06.08.2015 Página Web', 'SOBRESEE INVESTIGACION SUMARIA DECRETADA MEDIANTE DECRETO ALCALDICIO N°99 DE FECHA 02 DE FEBRERO DE 2015.', { tieneEfectosGenerales: 'Si' }),
    crearSumario2015('405', '01.06.15', 'Instruye Investigación', '02.07.2015 Página Web', 'INSTRUYE INVESTIGACION SUMARIA POR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS QUE PUDIERAN EXISTIR EN LOS HECHOS DENUNCIADOS.'),
    crearSumario2015('400', '01.06.15', 'Instruye Investigación', '02.07.2015 Página Web', 'INSTRUYE INVESTIGACION SUMARIA EN RELACION A CARTA RENUNCIA PRESENTADA EL 19.05.15.'),
    crearSumario2015('398', '01.06.15', 'Medidas Disciplinarias', '02.07.2015 Página Web', 'APRUEBA SUMARIO ADMINISTRATIVO Y APLICA MEDIDA DISCIPLINARIA EN RELACION A DECRETO ALCALDICIO N°1739 DEL 27 DE JUNIO DE 2014.', { enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2015('373', '20.05.15', 'Acoge Recursos Reposición', '06.06.2015 Página Web', 'ACOGE REPOSICION PRESENTADA POR FUNCIONARIO RELACIONADO A DECRETO ALCALDICIO N°118 DE FECHA 09.02.15.'),
    crearSumario2015('355', '15.05.15', 'Rechaza Reposición y Aplica Medida Disciplinaria', '06.06.2015 Página Web', 'RESUELVE REPOSICION EL CUAL RECHAZA EL RECURSO DE REPOSICION PRESENTADO POR LA DEFENSA.'),
    crearSumario2015('339', '11.05.15', 'Instruye Investigación', '06.06.2015 Página Web', 'INSTRUYE INVESTIGACION CON EL OBJETO DE INVESTIGAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS POR HECHOS DENUNCIADOS.'),
    crearSumario2015('287', '23.04.15', 'Medidas Disciplinarias', '06.05.2015 Página Web', 'APRUEBA INVESTIGACION SUMARIA Y APLICA MEDIDA DISCIPLINARIA.', { enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2015('286', '22.04.15', 'Resuelve Reposición', '06.05.2015 Página Web', 'RESUELVE REPOSICION EN CONTRA DE LO RESUELTO MEDIANTE DECRETO ALCALDICIO N°122, DE 11 DE FEBRERO DE 2015.'),
    crearSumario2015('279', '20.04.15', 'Instruye Sumario', '06.05.2015 Página Web', 'INSTRUYE SUMARIO ADMINISTRATIVO.'),
    crearSumario2015('259', '13.04.15', 'Acoge apelación y sobresee sumario', '06.05.2015 Página Web', 'ACOGE APELACION Y APLICA MEDIDA DISCIPLINARIA A FUNCIONARIA.'),
    crearSumario2015('225', '31.03.15', 'Sobresee Sumario', '06.04.2015 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADA MEDIANTE DECRETO ALCALDICIO N°3681 DE FECHA 23.12.2014.'),
    crearSumario2015('178', '09.03.15', 'Acoge parcialmente apelación', '06.04.2015 Página Web', 'ACOGE PARCIALMENTE APELACION PRESENTADA POR LA FUNCIONARIA.'),
    crearSumario2015('177', '09.03.15', 'Rechaza Apelaciones', '06.04.2015 Página Web', 'RECHAZA APELACION PRESENTADA POR EL FUNCIONARIO.'),
    crearSumario2015('176', '09.03.15', 'Rechaza Apelaciones', '06.04.2015 Página Web', 'RECHAZA APELACION PRESENTADA POR EL FUNCIONARIO.'),
    crearSumario2015('175', '09.03.15', 'Acoge parcialmente apelación', '06.04.2015 Página Web', 'ACOGE PARCIALMENTE APELACION PRESENTADA POR EL FUNCIONARIO.'),
    crearSumario2015('174', '09.03.15', 'Acoge parcialmente apelación', '06.04.2015 Página Web', 'ACOGE PARCIALMENTE APELACION PRESENTADA POR LA FUNCIONARIA.'),
    crearSumario2015('168', '06.03.15', 'Rechaza Apelaciones', '06.04.2015 Página Web', 'RECHAZA RECLAMO DE LEGALIDAD ANTECEDENTE POR RAZONES QUE SE INDICA.'),
    crearSumario2015('144', '23.02.15', 'Sobresee Investigación Sumaria', '06.03.2015 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADA MEDIANTE DECRETO ALCALDICIO N°2815 DE 7 DE OCTUBRE DE 2014.'),
    crearSumario2015('122', '11.02.15', 'Medidas Disciplinarias', '06.03.2015 Página Web', 'APRUEBA PROPUESTA DEL INVESTIGADOR, APLICA MEDIDA DISCIPLINARIA Y DISPONE NOTIFICACION.', { enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2015('118', '09.02.15', 'Medidas Disciplinarias', '06.03.2015 Página Web', 'APRUEBA PROPUESTA DEL FISCAL EN SUMARIO ADMINISTRATIVO ORDENADO MEDIANTE DECRETO ALCALDICIO N°1739, DE 27 DE JUNIO DE 2014; APLICA MEDIDA DISCIPLINARIA Y DISPONE NOTIFICACION.', { enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2015('104', '04.02.15', 'Sobresee Sumario', '06.02.2015 Página Web', 'SOBRESEE SUMARIO ADMINISTRATIVO ORDENADO MEDIANTE DECRETO ALCALDICIO N°846, DE 14 DE ABRIL DE 2009.'),
    crearSumario2015('99', '02.02.15', 'Instruye Investigación', '06.02.2015 Página Web', 'INSTRUYE INVESTIGACION SUMARIA.'),
    crearSumario2015('87', '28.01.15', 'Rechaza Apelaciones', '06.02.2015 Página Web', 'RECHAZA APELACION PRESENTADA POR LA FUNCIONARIA.'),
    crearSumario2015('80', '27.01.15', 'Devuelve Investigación sumaria', '06.02.2015 Página Web', 'DEVUELVE INVESTIGACION.'),
    crearSumario2015('74', '23.01.15', 'Sobresee Sumario', '06.02.2015 Página Web', 'SOBRESEE SUMARIO ADMINISTRATIVO ORDENADO MEDIANTE DECRETO ALCALDICIO N°1804 DE FECHA 01 DE JULIO DE 2014.'),
    crearSumario2015('11', '07.01.15', 'modificaciones', '06.02.2015 Página Web', 'COMPLEMENTA DECRETO ALCALDICIO N°2483 DE FECHA 04 DE SEPTIEMBRE DE 2014, EN EL SENTIDO QUE INDICA.', { enlaceModificacion: 'PDF' })
  ],
  // Aquí van las URL en urlPublicacion y urlModificacion de cada registro; en crearSumario se agregan dentro de opciones.
  '2014': [
    crearSumario2014('3681', '23.12.14', 'Instruye Investigación', '06.01.2015 Página Web', 'INSTRUYE INVESTIGACION SUMARIA QUE INDICA.'),
    crearSumario2014('3493', '02.12.14', 'Cúmplase', '06.01.2015 Página Web', 'CUMPLASE CON EL DECRETO ALCALDICIO N°2613 DE 17 DE SEPTIEMBRE DE 2014.'),
    crearSumario2014('3290', '17.11.14', 'Devuelve Investigación sumaria', '06.12.2014 Página Web', 'DEVUELVE INVESTIGACION SUMARIA EN RELACION A DECRETO ALCALDICIO N°2633 DE FECHA 23 DE SEPTIEMBRE DE 2014.'),
    crearSumario2014('2815', '07.10.14', 'Instruye Investigación', '05.11.2014 Página Web', 'INSTRUYE INVESTIGACION SUMARIA PARA INVESTIGAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS QUE PUDIERAN EXISTIR EN LOS HECHOS INFORMADOS EN LOS DOCUMENTOS CITADOS EN LOS VISTOS, DESIGNA INVESTIGADORA.'),
    crearSumario2014('2633', '23.09.14', 'Instruye Investigación', '06.10.2014 Página Web', 'INSTRUYE INVESTIGACION SUMARIA CON EL OBJETO DE INVESTIGAR LAS EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS QUE PUDIERAN EXISTIR EN LOS HECHOS COMUNICADOS.'),
    crearSumario2014('2613', '17.09.14', 'Medidas Disciplinarias', '06.10.2014 Página Web', 'APLICA MEDIDA DISCIPLINARIA A FUNCIONARIO.', { ultimaActualizacion: '02.12.14', enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2014('2413', '26.08.14', 'Eleva a sumario', '06.09.2014 Página Web', 'ELEVA A SUMARIO ADMINISTRATIVO INVESTIGACION SUMARIA ORDENADA MEDIANTE DECRETO ALCALDICIO N°1805 DE FECHA 01 DE JULIO DE 2014.', { documentosModificacion: [{ url: '' }] }), // Aquí poner URL de Drive en url.
    crearSumario2014('2396', '25.08.14', 'Sobresee Sumario', '06.09.2014 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADA MEDIANTE DECRETO ALCALDICIO N°2087 DE 23 DE JULIO DE 2014.'),
    crearSumario2014('2374', '25.08.14', 'Designación Nuevo Fiscal', '06.09.2014 Página Web', 'DESIGNA NUEVO FISCAL EN INVESTIGACION SUMARIA INSTRUIDA POR DECRETO ALCALDICIO N°846 DE FECHA 14 DE ABRIL DE 2009.'),
    crearSumario2014('2209', '05.08.14', 'Sobresee Sumario', '06.08.2014 Página Web', 'SOBRESEE SUMARIO ADMINISTRATIVO ORDENADO MEDIANTE DECRETO ALCALDICIO N°921 DE 12 DE MAYO DE 2010.'),
    crearSumario2014('2087', '23.07.14', 'Instruye Sumario', '06.08.2014 Página Web', 'INSTRUYE SUMARIO ADMINISTRATIVO PARA INVESTIGAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS QUE PUDIERAN EXISTIR EN LOS HECHOS INFORMADOS EN LOS DOCUMENTOS CITADOS EN LOS VISTOS, DESIGNA INVESTIGADORA.'),
    crearSumario2014('2086', '23.07.14', 'Sobresee Sumario', '06.08.2014 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADA MEDIANTE DECRETO ALCALDICIO N°1282 DE 2012.', { documentosModificacion: [{ url: '' }, { url: '' }] }), // Aquí poner URL de Drive en cada url.
    crearSumario2014('2074', '22.07.14', 'Sobresee Sumario', '06.08.2014 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADA POR DECRETO ALCALDICIO N°1275 DE FECHA 13 DE MAYO DE 2014.'),
    crearSumario2014('2052', '18.07.14', 'Sobresee Sumario', '06.08.2014 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADA MEDIANTE DECRETO ALCALDICIO N°1151 DE 2012 Y N°523 DE 2013.'),
    crearSumario2014('1939', '10.07.14', 'Sobresee Sumario', '06.08.2014 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADA MEDIANTE DECRETO ALCALDICIO N°1170 DE FECHA 29 DE ABRIL DE 2014.'),
    crearSumario2014('1920', '09.07.14', 'Sobresee Sumario', '06.08.2014 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADA MEDIANTE DECRETO ALCALDICIO N°1369 DE FECHA 23 DE MAYO DE 2014.'),
    crearSumario2014('1919', '09.07.14', 'Designación Nuevo Fiscal', '06.08.2014 Página Web', 'DESIGNA NUEVO FISCAL EN SUMARIO ADMINISTRATIVO INSTRUIDO POR DECRETO ALCALDICIO N°2925, DE FECHA 22 DE NOVIEMBRE DE 2013.'),
    crearSumario2014('1867', '07.07.14', 'Sobresee Sumario', '06.08.2014 Página Web', 'SOBRESEE SUMARIO ADMINISTRATIVO ORDENADO POR DECRETO ALCALDICIO N°1171 DE FECHA 29 DE ABRIL DE 2014.'),
    crearSumario2014('1805', '01.07.14', 'Instruye Investigación', '06.07.2014 Página Web', 'INSTRUYE SUMARIO ADMINISTRATIVO PARA INVESTIGAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS POR HECHOS DENUNCIADOS.'),
    crearSumario2014('1804', '01.07.14', 'Instruye Investigación', '06.07.2014 Página Web', 'INSTRUYE SUMARIO ADMINISTRATIVO PARA INVESTIGAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS POR HECHOS DENUNCIADOS.'),
    crearSumario2014('1739', '27.06.14', 'Instruye Investigación', '06.07.2014 Página Web', 'INSTRUYE INVESTIGACION SUMARIA PARA INVESTIGAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS POR HECHOS COMUNICADOS POR EL DIRECTOR DE SECPLAC MEDIANTE MEM. RESERVADO N°1 DE 26.06.14, DESIGNA FISCAL.'),
    crearSumario2014('1580', '18.06.14', 'Designación Nuevo Fiscal', '06.07.2014 Página Web', 'DESIGNA NUEVO FISCAL EN SUMARIO ADMINISTRATIVO INSTRUIDO POR DECRETO ALCALDICIO N°1175 - 2014.'),
    crearSumario2014('1486', '09.06.14', 'Sobresee Investigación Sumaria', '06.07.2014 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADA MEDIANTE DECRETO ALCALDICIO N°2197 DE 2013 POR NO HABERSE ACREDITADO LA PARTICIPACION DE ALGUN FUNCIONARIO MUNICIPAL EN LOS HECHOS DENUNCIADOS.'),
    crearSumario2014('1448', '03.06.14', 'Sobresee Investigación Sumaria', '06.07.2014 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADA MEDIANTE DECRETO ALCALDICIO N°829 DE FECHA 28 DE MARZO DE 2014.'),
    crearSumario2014('1389', '23.05.14', 'Instruye Investigación', '06.06.2014 Página Web', 'INSTRUYE INVESTIGACION SUMARIA RESPECTO DE LOS FUNCIONARIOS EN LOS HECHOS DENUNCIADOS.'),
    crearSumario2014('1368', '23.05.14', 'Instruye Investigación', '06.06.2014 Página Web', 'INSTRUYE INVESTIGACION SUMARIA PARA DETERMINAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS, POR HECHOS DENUNCIADOS EN EL REPARO DE LEGALIDAD DEL CONTRATO Y A SU VEZ EL PAGO TARDIO A LA FUNDACION PRESTADORA DEL SERVICIO, DESIGNA COMO FISCAL INVESTIGADOR.'),
    crearSumario2014('1367', '23.05.14', 'Designación Nuevo Fiscal', '06.06.2014 Página Web', 'DESIGNA NUEVO FISCAL EN SUMARIO ADMINISTRATIVO INSTRUIDO POR DECRETO ALCALDICIO N°1171-2014.'),
    crearSumario2014('1275', '13.05.14', 'Instruye Investigación', '06.06.2014 Página Web', 'INSTRUYE INVESTIGACION SUMARIA PARA DETERMINAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS COMPROMETIDAS EN RELACION CON LA FALTA DE CERTIFICACION DE CALIDAD EXIGIDA EN EL INFORME ESTRUCTURAL PARA EL CONTRATO "REPARACION CUPULA PAPAL".'),
    crearSumario2014('1196', '05.05.14', 'Sobresee Sumario', '06.06.2014 Página Web', 'SOBRESEE SUMARIO ADMINISTRATIVO ORDENADO POR DECRETO ALCALDICIO N°869 DE FECHA 01 DE ABRIL DE 2014.'),
    crearSumario2014('1171', '29.04.14', 'Instruye Investigación', '06.05.2014 Página Web', 'INSTRUYE INVESTIGACION SUMARIA, DESIGNA COMO FISCAL.'),
    crearSumario2014('1170', '29.04.14', 'Instruye Investigación', '06.05.2014 Página Web', 'INSTRUYE INVESTIGACION SUMARIA, DESIGNA FISCAL.'),
    crearSumario2014('946', '08.04.14', 'Acoge apelación y sobresee sumario', '06.05.2014 Página Web', 'ACOGE APELACION Y SOBRESEE SUMARIO ADMINISTRATIVO ORDENADO POR DECRETO ALCALDICIO N°1571 DE FECHA 27 DE JULIO DE 2011.'),
    crearSumario2014('876', '01.04.14', 'Sobresee Sumario', '25.04.2014 Página Web', 'SOBRESEE SUMARIO QUE INDICA.'),
    crearSumario2014('875', '01.04.14', 'Sobresee Sumario', '25.04.2014 Página Web', 'SOBRESEE SUMARIO QUE INDICA.'),
    crearSumario2014('869', '01.04.14', 'Instruye Investigación', '25.04.2014 Página Web', 'INSTRUYE INVESTIGACION SUMARIA QUE INDICA.'),
    crearSumario2014('830', '28.03.14', 'Instruye Investigación', '06.04.2014 Página Web', 'INSTRUYE INVESTIGACION SUMARIA PARA DETERMINAR EVENTUAL RESPONSABILIDAD EN ACCIDENTE VEHICULAR.'),
    crearSumario2014('829', '28.03.14', 'Instruye Investigación', '06.04.2014 Página Web', 'INSTRUYE INVESTIGACION SUMARIA PARA DETERMINAR RESPONSABILIDAD EN LOS HECHOS QUE INDICA.'),
    crearSumario2014('828', '28.03.14', 'Instruye Investigación', '06.04.2014 Página Web', 'INSTRUYE INVESTIGACION SUMARIA PARA DETERMINAR EVENTUAL RESPONSABILIDAD EN ACCIDENTE VEHICULAR.')
  ],
  // Aquí van las URL en urlPublicacion y urlModificacion de cada registro; en crearSumario se agregan dentro de opciones.
  '2013': [
    crearSumario2014('6', '03.01.13', 'Sobresee Investigación Sumaria', '01.03.2013 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADA MEDIANTE DECRETO ALCALDICIO N°1419 DE FECHA 04 DE JUNIO DE 2012.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('55', '07.01.13', 'Medidas Disciplinarias', '01.03.2013 Página Web', 'APLICA MEDIDA DISCIPLINARIA A FUNCIONARIO.', { enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2014('153', '14.01.13', 'Sobresee Investigación Sumaria', '01.03.2013 Página Web', 'SOBRESEE INVESTIGACION SUMARIA MEDIANTE DECRETO ALCALDICIO N°426 DE FECHA 24 DE FEBRERO DE 2011.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('209', '15.01.13', 'Medidas Disciplinarias', '01.03.2013 Página Web', 'APLICA MEDIDA DISCIPLINARIA DE CENSURA A FUNCIONARIOS DE ACUERDO A DECRETOS N°250 DE FECHA 29.01.2010 Y N°809 DE 22.04.2013.', { enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2014('1022', '05.04.13', 'Instruye Investigación', '05.04.2013 Página Web', 'INSTRUYE INVESTIGACION SUMARIA PARA INVESTIGAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS, POR HECHOS DENUNCIADOS EN CARTA DE FECHA 19 DE MARZO DE 2013, PRESENTADA.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('1070', '11.04.13', 'Aplica Medida Disciplinaria', '03.05.2013 Página Web', 'APLICA MEDIDA DISCIPLINARIA A FUNCIONARIO.', { enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2014('1109', '17.04.13', 'Sobresee Investigación Sumaria', '03.05.2013 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADA MEDIANTE DECRETO ALCALDICIO N°1860 DE FECHA 25.07.2012 Y DECRETO ALCALDICIO N°927 DE FECHA 28.03.2013.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('1111', '17.04.13', 'Sobresee Investigación Sumaria', '03.05.2013 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADA MEDIANTE DECRETO ALCALDICIO N°2414 DE FECHA 14 DE SEPTIEMBRE DE 2012.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('1234', '29.04.13', 'Sobresee Sumario', '21.06.2013 Página Web', 'SOBRESEE SUMARIO ADMINISTRATIVO, EN RELACION A RECLAMO.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('1327', '09.05.13', 'Sobresee Investigación Sumaria', '21.06.2013 Página Web', 'SOBRESEE SUMARIO ADMINISTRATIVO EN RELACION A DECRETO ALCALDICIO EX. N°1567 DE FECHA 15.06.2012.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('1378', '14.05.13', 'Acoge Recursos Reposición', '21.06.2013 Página Web', 'ACOGE RECURSO DE REPOSICION INTERPUESTO POR EL FUNCIONARIO MUNICIPAL Y SE ORDENA DEJAR SIN EFECTO LA MEDIDA DISCIPLINARIA DE CENSURA ESTABLECIDA EN DECRETO ALCALDICIO N°55 DE FECHA 7 DE ENERO DE 2013.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('1379', '14.05.13', 'Acoge Recursos Reposición', '21.06.2013 Página Web', 'ACOGE PARCIALMENTE RECURSO DE REPOSICION INTERPUESTO POR EL FUNCIONARIO MUNICIPAL Y SE ORDENA REBAJAR LA MEDIDA DISCIPLINARIA ESTABLECIDA EN DECRETO ALCALDICIO N°1445 DE FECHA 05 DE JUNIO DE 2012.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('1523', '30.05.13', 'Rechaza Reposición y Aplica Medida Disciplinaria', '21.06.2013 Página Web', 'RECHAZA REPOSICION Y APLICA MEDIDA DISCIPLINARIA A FUNCIONARIO.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('1524', '30.05.13', 'Resuelve Reposición', '21.06.2013 Página Web', 'RESUELVE REPOSICIONES PRESENTADAS POR EL FUNCIONARIO.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('1525', '30.05.13', 'Sobresee Investigación Sumaria', '21.06.2013 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADO MEDIANTE DECRETO ALCALDICIO N°1567 DE FECHA 15 DE JUNIO DE 2012.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('1760', '19.06.2013', 'Instruye Investigación', '21.06.2013 Página Web', 'INSTRUYE INVESTIGACION SUMARIA QUE INDICA.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('1836', '01.07.2013', 'Instruye Investigación', '02.07.2013 Página Web', 'INSTRUYE INVESTIGACION SUMARIA.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('2010', '19.07.2013', 'Aplica Medida Disciplinaria', '09.08.2013 Página Web', 'APLICA MEDIDA DISCIPLINARIA.', { enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2014('2113', '31.07.2013', 'Sobresee Sumario', '09.08.2013 Página Web', 'SOBRESEE SUMARIO QUE INDICA.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('2114', '31.07.2013', 'Sobresee Sumario', '09.08.2013 Página Web', 'SOBRESEE INVESTIGACIÓN SUMARIA QUE INDICA.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('2115', '31.07.2013', 'Sobresee Sumario', '09.08.2013 Página Web', 'SOBRESEE SUMARIO ADMINISTRATIVO QUE INDICA.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('2197', '09.08.2013', 'Instruye Investigación', '22.08.2013 Página Web', 'INSTRUYE INVESTIGACION SUMARIA QUE INDICA.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('2925', '22.11.13', 'Instruye Sumario', '06.12.2013 Página Web', 'Instruye sumario administrativo en contra del funcionario.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('2992', '28.11.13', 'Instruye Investigación', '06.12.2013 Página Web', 'Instruye investigación sumaria a funcionarias.', { enlaceModificacion: 'Sin Modificación' }),
    crearSumario2014('3250', '23.12.13', 'Designación Nuevo Fiscal', '06.01.2014 Página Web', 'Designa nuevo fiscal en sumario administrativo instruido por decreto alcaldicio N°921 de 2010.', { enlaceModificacion: 'Sin Modificación' })
  ],
  // Aquí van las URL en urlPublicacion y urlModificacion de cada registro; en crearSumario se agregan dentro de opciones.
  '2012': [
    crearSumario2014('390', '02.02.12', 'Aplica Medidas Disciplinarias', '03.05.2013 Página Web', 'APLICA MEDIDAS DISCIPLINARIAS.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('591', '27.02.12', 'Sobresee Sumario', '03.05.2013 Página Web', 'SOBRESEE SUMARIO ADMINISTRATIVO ORDENADO POR DECRETO ALCALDICIO N°1202 DE FECHA 10 DE JUNIO DE 2011, QUE SE INICIO POR INVESTIGACION SUMARIA SEGÚN DECRETO N°646 DE FECHA 31 DE MARZO DE 2011.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('592', '27.02.12', 'Resuelve Sumario', '03.05.2013 Página Web', 'RESUELVE SUMARIO ADMINISTRATIVO, APRUEBA VISTA FISCAL Y APLICA MEDIDA DISCIPLINARIA A FUNCIONARIOS CARLOS FERNANDEZ VELASCO Y LUIS CATALAN FERNANDEZ, INSTRUIDO POR DECRETO N°1148 DE 2009, CUYA REAPERTURA FUE ORDENADA POR DECRETO ALCALDICIO N°1991 DE 2010.', { ultimaActualizacion: '27.03.12', enlaceModificacion: 'Ley 19.628, Artículo 22' }),
    crearSumario2014('779', '23.03.12', 'Aplica Medidas Disciplinarias', '03.05.2013 Página Web', 'APLICA MEDIDAS DISCIPLINARIAS DE ACUERDO A INVESTIGACION SUMARIA ORDENADA POR DECRETOS ALCALDICIOS N°2449 Y 2451 AMBOS DE FECHA 30 DE NOVIEMBRE DE 2009.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('847', '04.04.12', 'Aplica Medidas Disciplinarias', '03.05.2013 Página Web', 'APLICA MEDIDA DISCIPLINARIA A FUNCIONARIO, DE ACUERDO A INVESTIGACION SUMARIA ORDENADA POR DECRETO ALCALDICIO N°1796 DE FECHA 23 DE AGOSTO DE 2011.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('940', '11.04.12', 'Aplica Medidas Disciplinarias', '03.05.2013 Página Web', 'APLICA MEDIDA DISCIPLINARIA A FUNCIONARIOS DE ACUERDO A INVESTIGACION SUMARIA ORDENADA POR DECRETO ALCALDICIO N°508 DE FECHA 10 DE MARZO DE 2011.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('964', '16.04.12', 'Rechaza Apelación', '03.05.2013 Página Web', 'RECHAZA APELACION PRESENTADA POR EL DIRECTOR DE ADMINISTRACION Y FINANZAS REFERENTE A MULTA IMPUESTA POR DECRETO ALCALDICIO N°592 DE FECHA 27 DE FEBRERO DE 2012.', { tieneEfectosGenerales: 'Si', enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('981', '17.04.12', 'Aplica Medidas Disciplinarias', '03.05.2013 Página Web', 'APLICA MEDIDA DISCIPLINARIA A FUNCIONARIO, DE ACUERDO A DECRETO ALCALDICIO N°74 DE FECHA 11 DE ENERO DE 2011 QUE INSTRUYE INVESTIGACION SUMARIA.', { enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2014('1136', '04.05.12', 'Rechaza Apelación y Aplica Medida Disciplinaria', '03.05.2013 Página Web', 'RECHAZA APELACION Y APLICA MEDIDA ORDENADA POR DECRETO ALCALDICIO N°2444 DE FECHA 27 DE OCTUBRE DE 2011 A FUNCIONARIO.', { tieneEfectosGenerales: 'Si', enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('1151', '08.05.12', 'Instruye Investigación', '03.05.2013 Página Web', 'INSTRUYE INVESTIGACION SUMARIA, PARA DETERMINAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS QUE PUDIERAN AFECTAR EN LOS HECHOS DENUNCIADOS, DESIGNA INSTRUCTOR.', { tieneEfectosGenerales: 'Si', enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('1245', '16.05.12', 'Instruye Investigación', '03.05.2013 Página Web', 'INSTRUYE INVESTIGACION SUMARIA, PARA DETERMINAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS QUE PUDIERAN AFECTAR A ALGUN FUNCIONARIO MUNICIPAL POR FALTA DE RENDICION DEL PROYECTO N°113031050 DENOMINADO "LIGAS DEPORTIVAS", DESIGNA INSTRUCTOR.', { tieneEfectosGenerales: 'Si', enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('1246', '16.05.12', 'Instruye Investigación', '03.05.2013 Página Web', 'INSTRUYE INVESTIGACION SUMARIA, PARA DETERMINAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS QUE PUDIERAN AFECTAR A ALGUN FUNCIONARIO MUNICIPAL POR FALTA DE RENDICION PARCIAL DE PROYECTO N°113031050 DENOMINADO "LIGAS DEPORTIVAS", DESIGNA INSTRUCTOR.', { tieneEfectosGenerales: 'Si', enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('1282', '16.05.12', 'Eleva a Sumario', '03.05.2013 Página Web', 'ELEVA A SUMARIO ADMINISTRATIVO LA INVESTIGACION SUMARIA ORDENADA POR DECRETO ALCALDICIO N°1776 DE FECHA 17 DE AGOSTO DE 2011, DESIGNA FISCAL INSTRUCTOR.', { ultimaActualizacion: '17.04.13', documentosModificacion: [{ url: '' }, { url: '' }] }), // Aquí poner URL de Drive en cada url.
    crearSumario2014('1419', '04.06.12', 'Instruye Investigación', '03.05.2013 Página Web', 'INSTRUYE INVESTIGACION SUMARIA EN LA DIRECCION DE TRANSITO, PARA DETERMINAR EVENTUALES RESPONSABILIDADES QUE PUDIERAN AFECTAR A FUNCIONARIOS POR HECHOS ACONTECIDOS, DESIGNA INSTRUCTOR.', { tieneEfectosGenerales: 'Si', ultimaActualizacion: '06.07.12', documentosModificacion: [{ url: '' }, { url: '' }] }), // Aquí poner URL de Drive en cada url.
    crearSumario2014('1445', '05.06.12', 'Aplica Medidas Disciplinarias', '03.05.2013 Página Web', 'APLICA MEDIDA DISCIPLINARIA MULTA DE 15% DE SU REMUNERACION MENSUAL A UN FUNCIONARIO, DE ACUERDO A DECRETO ALCALDICIO N°567 DE FECHA 24 DE FEBRERO DE 2012, QUE ORDENO INSTRUIR INVESTIGACION SUMARIA.', { enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2014('1567', '15.06.12', 'Eleva a Sumario', '03.05.2013 Página Web', 'ELEVA A SUMARIO ADMINISTRATIVO LA INVESTIGACION SUMARIA ORDENADA POR DECRETO ALCALDICIO N°1245 DE FECHA 16 DE MAYO DE 2012, DESIGNA FISCAL AL FUNCIONARIO.', { documentosModificacion: [{ url: '' }] }), // Aquí poner URL de Drive en url.
    crearSumario2014('1727', '04.07.12', 'Aplica Medidas Disciplinarias', '03.05.2013 Página Web', 'APLICA MEDIDAS DISCIPLINARIAS ORDENADA POR DECRETO ALCALDICIO N°1246 DE FECHA 16 DE MAYO DE 2012 A FUNCIONARIOS.', { enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2014('1860', '25.07.12', 'Designación de Funciones', '03.05.2013 Página Web', 'INSTRUYE INVESTIGACION SUMARIA PARA DETERMINAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS QUE PUDIERAN AFECTAR A ALGUN FUNCIONARIO MUNICIPAL POR SITUACION INFORMADA POR LA DIRECCION DE AREAS MUNICIPALES, DESIGNA INSTRUCTOR.', { tieneEfectosGenerales: 'Si', ultimaActualizacion: '28.03.13', documentosModificacion: [{ url: '' }, { url: '' }] }), // Aquí poner URL de Drive en cada url.
    crearSumario2014('1874', '26.07.12', 'Instruye Investigación', '03.05.2013 Página Web', 'INSTRUYE INVESTIGACION SUMARIA PARA DETERMINAR EVENTUAL RESPONSABILIDAD DE FUNCIONARIOS EN HECHOS DENUNCIADOS, POR UN FUNCIONARIO MUNICIPAL POR SITUACION INFORMADA POR EL DIRECTOR DE TRANSITO, RELACIONADA CON DAÑOS AL VEHICULO MUNICIPAL, DESIGNA INSTRUCTOR.', { tieneEfectosGenerales: 'Si', documentosModificacion: [{ url: '' }, { url: '' }] }), // Aquí poner URL de Drive en cada url.
    crearSumario2014('2049', '09.08.12', 'Sobresee Investigación Sumaria', '03.05.2013 Página Web', 'SOBRESEE INVESTIGACION SUMARIA ORDENADA POR DECRETO ALCALDICIO N°1133 DE FECHA 04 DE MAYO DE 2012.', { tieneEfectosGenerales: 'Si' }),
    crearSumario2014('3158', '20.12.12', 'Aplica Medidas Disciplinarias', '03.05.2013 Página Web', 'APLICA MEDIDAS DISCIPLINARIAS A FUNCIONARIOS QUE SE INDICAN, DE ACUERDO A SUMARIO ADMINISTRATIVO INSTRUIDO POR LA CONTRALORIA GENERAL DE LA REPUBLICA.', { enlaceModificacion: 'Ley 19.628, Artículo 21' })
  ],
  // Aquí van las URL en urlPublicacion y urlModificacion de cada registro; en crearSumario se agregan dentro de opciones.
  '2011': [
    crearSumario2014('426', '24.02.11', 'Eleva a sumario', '03.05.2013 Página Web', 'ELEVA INVESTIGACION SUMARIA ORDENADA POR DECRETO ALCALDICIO N°1815 DE FECHA 04 DE 2010 A SUMARIO ADMINISTRATIVO.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('710', '07.04.11', 'Eleva a sumario', '03.05.2013 Página Web', 'ELEVESE LA INVESTIGACION SUMARIA ORDENADA POR DECRETO ALCALDICIO N°75 DE FECHA 11 DE ENERO DE 2011 A SUMARIO ADMINISTRATIVO POR EXISTIR DILIGENCIAS PENDIENTES, DESIGNA FISCAL.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('804', '14.04.11', 'Eleva a sumario', '03.05.2013 Página Web', 'ELEVA A SUMARIO ADMINISTRATIVO LA INVESTIGACION SUMARIA DISPUESTA POR DECRETO ALCALDICIO N°508 DE FECHA 10 DE MARZO DE 2011, POR EXISTIR DILIGENCIAS PENDIENTES, DESIGNA FISCAL INSTRUCTOR.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('1037', '24.05.11', 'Eleva a sumario', '03.05.2013 Página Web', 'ELEVA A SUMARIO ADMINISTRATIVO LA INVESTIGACION SUMARIA DISPUESTA POR DECRETO ALCALDICIO N°522 DE FECHA 11 DE MARZO DE 2011, POR EXISTIR DILIGENCIAS PENDIENTES, DESIGNA FISCAL INSTRUCTOR.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('1202', '10.06.11', 'Eleva a sumario', '03.05.2013 Página Web', 'ELEVA A SUMARIO ADMINISTRATIVO LA INVESTIGACION SUMARIA DISPUESTA POR DECRETO ALCALDICIO N°646 DE FECHA 31 DE MARZO DE 2011, PARA PODER REALIZAR UNA INVESTIGACION CON MAYOR EXTENSION Y PROFUNDIDAD, DESIGNA FISCAL INSTRUCTOR.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('1312', '21.06.11', 'Sobresee Sumario', '03.05.2013 Página Web', 'SOBRESEE SUMARIO ADMINISTRATIVO ORDENADO MEDIANTE DECRETO ALCALDICIO N°77 DE FECHA 27 DE ABRIL DE 2011.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('1372', '30.06.11', 'Instruye Sumario', '03.05.2013 Página Web', 'INSTRUYE SUMARIO ADMINISTRATIVO EN LA EGIS MUNICIPAL PARA DETERMINAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS QUE PUDIERAN AFECTAR A FUNCIONARIOS DE DICHA UNIDAD RESPECTO A LAS RENDICIONES DE FONDOS DE LA CUENTA EL SERVICIO N°1 DE FECHA 24 DE JUNIO DE 2011 DEL DIRECTOR DE SECPLAC, DESIGNA FISCAL.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('1476', '12.07.11', 'Amplía plazo', '03.05.2013 Página Web', 'AMPLIA PLAZO DE SUMARIO ADMINISTRATIVO EN 10 DIAS HABILES, ORDENADO POR DECRETO ALCALDICIO N°607 DE FECHA 25 DE MARZO DE 2011, POR EXISTIR DILIGENCIAS PENDIENTES.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('1477', '12.07.11', 'Amplía plazo', '03.05.2013 Página Web', 'AMPLIA PLAZO DE SUMARIO ADMINISTRATIVO EN 10 DIAS HABILES, ORDENADO POR DECRETO ALCALDICIO N°1037 DE FECHA 24 DE MAYO DE 2011, POR EXISTIR DILIGENCIAS PENDIENTES.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('1480', '12.07.11', 'Eleva a sumario', '03.05.2013 Página Web', 'ELEVA A SUMARIO ADMINISTRATIVO LA INVESTIGACION SUMARIA ORDENADA POR DECRETO ALCALDICIO N°1339 DE FECHA 28 DE JUNIO DE 2011.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('1665', '05.08.11', 'Amplía plazo', '03.05.2013 Página Web', 'AMPLIA MATERIA A INVESTIGAR EN SUMARIO ADMINISTRATIVO ORDENADO POR DECRETO ALCALDICIO N°1372 DE FECHA 30 DE JUNIO DE 2011.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('1895', '02.09.11', 'Amplía plazo', '03.05.2013 Página Web', 'AMPLIA PLAZO DE SUMARIO ADMINISTRATIVO ORDENADO POR DECRETO ALCALDICIO N°1480 DE FECHA 12 DE JULIO DE 2011, EN 20 DIAS HABILES MAS, A CONTAR DE LA FECHA DEL PRESENTE DECRETO.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('2444', '27.10.11', 'Medidas Disciplinarias', '03.05.2013 Página Web', 'APLICA MEDIDAS DISCIPLINARIAS A FUNCIONARIOS QUE INDICA.', { ultimaActualizacion: '11.04.13', enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2014('2491', '11.11.11', 'Amplía plazo', '03.05.2013 Página Web', 'APRUEBA AMPLIACION DE PLAZO DE SUMARIO ADMINISTRATIVO ORDENADO POR DECRETO ALCALDICIO N°1480 DE FECHA 12 DE JULIO DE 2011.', { enlaceModificacion: 'Sin Enlaces' }),
    crearSumario2014('2555', '21.11.11', 'Medidas Disciplinarias', '03.05.2013 Página Web', 'APLICA MEDIDAS DISCIPLINARIAS A FUNCIONARIOS.', { enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2014('2582', '07.12.11', 'Medidas Disciplinarias', '03.05.2013 Página Web', 'APLICA MEDIDA DISCIPLINARIA A FUNCIONARIO QUE INDICA.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('2711', '12.12.11', 'Sobresee Sumario', '03.05.2013 Página Web', 'SOBRESEE SUMARIO ADMINISTRATIVO ORDENADO MEDIANTE DECRETO ALCALDICIO N°1894 DE FECHA 02 DE SEPTIEMBRE DE 2011.', { enlaceModificacion: 'Sin Enlaces' })
  ],
  // Aquí van las URL en urlPublicacion y urlModificacion de cada registro; en crearSumario se agregan dentro de opciones.
  '2010': [
    crearSumario2014('250', '29.01.10', 'Instruye Sumario', '03.05.2013 Página Web', 'INSTRUYE SUMARIO ADMINISTRATIVO, CON EL OBJETO DE DETERMINAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS EN LOS HECHOS SEÑALADOS EN EL INFORME FINAL DE LA CONTRALORIA GENERAL DE LA REPUBLICA N°274/2009, EN SUMARIO N°2, REFERENTE A PAGOS DE INSCRIPCION EN EL REGISTRO DE VEHICULOS CON FONDO A RENDIR, DESIGNA FISCAL.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('269', '03.02.10', 'Eleva a sumario', '03.05.2013 Página Web', 'ELEVESE LA INVESTIGACION SUMARIA ORDENADA MEDIANTE DECRETO ALCALDICIO N°603 DE FECHA 16 DE MARZO DE 2009 A SUMARIO ADMINISTRATIVO, ATENDIDO EL TIEMPO TRANSCURRIDO, DESIGNA NUEVO FISCAL.', { ultimaActualizacion: '16.04.10', documentosModificacion: [{ url: '' }] }), // Aquí poner URL de Drive en url.
    crearSumario2014('607', '25.03.10', 'Instruye Sumario', '03.05.2013 Página Web', 'INSTRUYE SUMARIO ADMINISTRATIVO PARA INVESTIGAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS DE FUNCIONARIOS MUNICIPALES, DE ACUERDO A MEMORANDO N°42-A DE FECHA 08 DE MARZO DE 2010 DEL CONTRALOR MUNICIPAL Y SUS ANTECEDENTES, DESIGNA FISCAL.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('921', '12.05.10', 'Eleva a sumario', '03.05.2013 Página Web', 'ELEVESE LA INVESTIGACION SUMARIA ORDENADA POR DECRETO ALCALDICIO N°1726 DE FECHA 14 DE AGOSTO DE 2009 A SUMARIO ADMINISTRATIVO POR EXISTIR DILIGENCIAS PENDIENTES, DESIGNA FISCAL.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('1057', '02.06.10', 'Amplía plazo', '03.05.2013 Página Web', 'AMPLIA PLAZO DE SUMARIO ADMINISTRATIVO ORDENADO POR DECRETO ALCALDICIO N°607 DE FECHA 25 DE MARZO DE 2010.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('1269', '01.07.10', 'Eleva a sumario', '03.05.2013 Página Web', 'ELEVA A SUMARIO ADMINISTRATIVO INVESTIGACION SUMARIA DISPUESTA POR DECRETO ALCALDICIO N°807 DE FECHA 22 DE ABRIL DE 2010, DESIGNA FISCAL INSTRUCTOR.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('1308', '07.07.10', 'Medidas Disciplinarias', '03.05.2013 Página Web', 'APLICA MEDIDA DISCIPLINARIA A FUNCIONARIOS.', { ultimaActualizacion: '03.11.10', enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2014('1621', '31.08.10', 'Dispone apertura de sumario', '03.05.2013 Página Web', 'DISPONE REAPERTURA DE SUMARIO ORDENADO MEDIANTE DECRETO ALCALDICIO N°2452 DE FECHA 30 DE NOVIEMBRE DE 2009, DESIGNA FISCAL INSTRUCTOR.', { documentosModificacion: [{ url: '' }] }), // Aquí poner URL de Drive en url.
    crearSumario2014('2126', '02.12.10', 'Amplía plazo', '03.05.2013 Página Web', 'AMPLIA PLAZO DE SUMARIO ADMINISTRATIVO, ORDENADO POR DECRETO N°607 DE FECHA 25 DE MARZO DE 2010.', { enlaceModificacion: 'Sin enlace' })
  ],
  // Aquí van las URL en urlPublicacion y urlModificacion de cada registro; en crearSumario se agregan dentro de opciones.
  '2009': [
    crearSumario2014('613', '20.03.09', 'Instruye Sumario', '03.05.2013 Página Web', 'INSTRUYE SUMARIO ADMINISTRATIVO POR HECHOS INFORMADOS POR TESORERO MUNICIPAL, DESIGNA FISCAL INSTRUCTOR.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('634', '24.03.09', 'Instruye Sumario', '03.05.2013 Página Web', 'INSTRUYE SUMARIO ADMINISTRATIVO POR HECHOS DENUNCIADOS POR DESIGNADA FISCAL INSTRUCTOR.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('675', '26.03.09', 'Instruye Sumario', '03.05.2013 Página Web', 'INSTRUYE SUMARIO ADMINISTRATIVO EN HECHOS DENUNCIADOS POR LA DIRECCION DE DESARROLLO COMUNITARIO, DESIGNA FISCAL.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('1032', '08.05.09', 'Instruye Sumario', '03.05.2013 Página Web', 'INSTRUYE SUMARIO ADMINISTRATIVO PARA DETERMINAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS POR HECHOS DENUNCIADOS POR LA DIRECCION DE TRANSITO, DESIGNA FISCAL.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('1148', '27.05.09', 'Instruye Sumario', '03.05.2013 Página Web', 'ORDENA INSTRUCCION DE SUMARIO ADMINISTRATIVO PARA DETERMINAR EVENTUALES RESPONSABILIDADES EN LOS HECHOS SEÑALADOS POR EL ALCALDE EN SU HOJA DE ENVIO N°47 DE FECHA 20 DE MAYO DE 2009, DESIGNA FISCAL.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('1300', '17.06.09', 'Amplía plazo', '03.05.2013 Página Web', 'AMPLIA PLAZO DE INVESTIGACION EN 20 DIAS EL SUMARIO ADMINISTRATIVO ORDENADO POR DECRETO ALCALDICIO N°634 DE FECHA 24 DE MARZO DE 2009.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('1356', '01.07.09', 'Eleva a sumario', '03.05.2013 Página Web', 'ELEVA LA INVESTIGACION DISPUESTA POR DECRETO ALCALDICIO 872 DE 30 DE ABRIL DE 2009 A SUMARIO ADMINISTRATIVO Y ORDENA ACUMULACION DE AUTOS QUE INDICA.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('1489', '15.07.09', 'Resuelve Reposición', '03.05.2013 Página Web', 'RESUELVE REPOSICION SUMARIA DISPUESTA EN DECRETO N°1732.', { ultimaActualizacion: '03.04.2013', enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('1735', '14.08.09', 'Designación Nuevo Fiscal', '03.05.2013 Página Web', 'DESIGNA NUEVO FISCAL INSTRUCTOR PARA PROSEGUIR CON EL SUMARIO ADMINISTRATIVO ORDENADO INSTRUIR MEDIANTE DECRETO ALCALDICIO N°1148 DE FECHA 27 DE MAYO DE 2009.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('2055', '30.09.09', 'Medidas Disciplinarias', '03.05.2013 Página Web', 'RESUELVE REPOSICIONES QUE INDICA EN SUMARIO DISPUESTO POR DECRETO ALCALDICIO N°613 DE FECHA 20 DE MARZO DE 2009 EN QUE APLICARA MEDIDAS DISCIPLINARIAS MEDIANTE DECRETO ALCALDICIO N°1381 DE FECHA 08 DE JULIO DE 2009.', { enlaceModificacion: 'Ley 19.628, Artículo 21' }),
    crearSumario2014('2078', '30.09.09', 'Amplía plazo', '03.05.2013 Página Web', 'AMPLIA PLAZO DE SUMARIO ADMINISTRATIVO ORDENADO POR DECRETO ALCALDICIO N°1804 DE FECHA 25 DE AGOSTO DE 2009.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('2451', '30.11.09', 'Instruye Sumario', '03.05.2013 Página Web', 'INSTRUYE SUMARIO ADMINISTRATIVO, DESIGNA FISCAL INSTRUCTOR A DOÑA SILVIA HERNANDEZ TEJOS.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('2452', '30.11.09', 'Instruye Sumario', '03.05.2013 Página Web', 'INSTRUYE SUMARIO ADMINISTRATIVO, DESIGNA FISCAL INSTRUCTOR.', { enlaceModificacion: 'Sin enlace' }),
    crearSumario2014('2481', '01.12.09', 'Instruye Sumario', '03.05.2013 Página Web', 'ORDENA SUMARIO ADMINISTRATIVO PARA DETERMINAR EVENTUALES RESPONSABILIDADES ADMINISTRATIVAS EN EL USO DEL VEHICULO MUNICIPAL POR PERSONAS AJENAS AL MUNICIPIO EL DIA 01 DE DICIEMBRE DE 2009, DESIGNA FISCAL.', { enlaceModificacion: 'Sin enlace' })
  ]
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

const renderPdfLink = ({ href, ariaLabel }: { href?: string; ariaLabel: string }) => {
  return <PdfLinkButton href={href} ariaLabel={ariaLabel} className="mt-1" />;
};

export default function Seccion7_6Sumarios({ anio, busqueda }: Seccion7_6SumariosProps) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = sumariosPorAnio[anio] || [];
  const registrosFiltrados = termino
    ? registros.filter((registro) =>
        Object.values(registro).some((valor) =>
          normalizarTexto(String(valor ?? '')).includes(termino)
        )
      )
    : registros;

  if (termino && registrosFiltrados.length === 0) {
    return (
      <p className="py-2 text-center text-xs italic text-slate-400" role="status">
        No se encontraron registros que coincidan con “{busqueda}” para el año {anio}.
      </p>
    );
  }

  if (registrosFiltrados.length === 0) {
    return <EstadoSinRegistros titulo="Sumarios" anio={anio} />;
  }

  return (
    <div className="space-y-4">
      {registrosFiltrados.map((registro, index) => (
        <article
          key={`${anio}-${registro.numero}-${index}`}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <div className="p-4">
            <div className="mb-3 inline-flex rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
              {registro.tipoNorma} - {registro.denominacion}
            </div>
            <h4 className="text-sm font-semibold text-slate-900">{registro.nombreTitulo}</h4>
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-slate-100 bg-slate-50 p-4 sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <p className="text-xs text-slate-500">Número</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{registro.numero}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Fecha</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{registro.fecha}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Fecha, medio y forma de publicación</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{registro.fechaPublicacion}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Tiene efectos generales</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{registro.tieneEfectosGenerales}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Fecha última actualización</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{registro.ultimaActualizacion}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Breve descripción del objeto del acto</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{registro.descripcion}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Enlace a la publicación o archivo</p>
              {registro.urlPublicacion || registro.enlacePublicacion.toLocaleLowerCase() === 'pdf'
                ? renderPdfLink({
                    href: registro.urlPublicacion,
                    ariaLabel: `Abrir PDF de sumario número ${registro.numero}`
                  })
                : <p className="mt-1 text-xs font-medium text-slate-900">{registro.enlacePublicacion}</p>}
            </div>
            <div>
              <p className="text-xs text-slate-500">Enlace relacionado a la modificación</p>
              <div className="mt-1 flex flex-col items-start gap-1">
                {registro.documentosModificacion?.length
                  ? registro.documentosModificacion.map((documento, documentoIndex) =>
                      renderPdfLink({
                        href: documento.url,
                        ariaLabel: `Abrir PDF ${documentoIndex + 1} de la modificación del sumario número ${registro.numero}`
                      })
                    )
                  : registro.urlModificacion || registro.enlaceModificacion.toLocaleLowerCase() === 'pdf'
                    ? renderPdfLink({
                        href: registro.urlModificacion,
                        ariaLabel: `Abrir modificación del sumario número ${registro.numero}`
                      })
                    : <p className="text-xs font-medium text-slate-900">{registro.enlaceModificacion}</p>}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
