import type { PatenteHistorico } from './Seccion7_6Patentes';

const crearRegistroAmpliacionKiosco = (): PatenteHistorico => ({
  tipoNorma: 'Decreto',
  denominacion: 'Patentes y Permisos',
  nombreTitulo: 'Ampliación de Kiosco',
  numero: '337',
  fecha: '03.02.14',
  fechaPublicacion: '06.03.2014 Página Web',
  tieneEfectosGenerales: 'Sí',
  ultimaActualizacion: 'Sin Modificaciones',
  descripcion: 'Aprueba ampliacion de kiosco en la via publica rol N°260569 a nombre de la sra. Ruth Bliche Muñoz',
  enlacePublicacion: 'PDF',
  enlaceModificacion: 'Sin Modificaciones',
  urlPublicacion: '',
  urlModificacion: ''
});

export const ampliacionKioscoPorAnio: Record<string, PatenteHistorico[]> = {
  '2016': [],
  '2015': [],
  '2014': [crearRegistroAmpliacionKiosco()],
  '2013': [],
  '2012': [],
  '2011': [],
  '2010': [],
  '2009': []
};
