import type { PatenteHistorico } from './Seccion7_6Patentes';

const crearRegistroAmpliacionHorario = (): PatenteHistorico => ({
  tipoNorma: 'Decreto',
  denominacion: 'Patentes y Permisos',
  nombreTitulo: 'Ampliación de plazo de funcionamiento',
  numero: '2919',
  fecha: '16.10.14',
  fechaPublicacion: '06.11.2014 Página Web',
  tieneEfectosGenerales: 'No',
  ultimaActualizacion: 'Sin Modificaciones',
  descripcion: 'AMPLIA PLAZO HORARIO DEL FUNCIONAMIENTO DEL PERMISO A NOMBRE DE SRA. DEVORA LEAL GONZALEZ.',
  enlacePublicacion: 'PDF',
  enlaceModificacion: 'Sin Modificaciones',
  urlPublicacion: '',
  urlModificacion: ''
});

export const ampliacionHorarioPorAnio: Record<string, PatenteHistorico[]> = {
  '2016': [],
  '2015': [],
  '2014': [crearRegistroAmpliacionHorario()],
  '2013': [],
  '2012': [],
  '2011': [],
  '2010': [],
  '2009': []
};
