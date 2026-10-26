export interface RegularizacionLey20898 {
  denominacion: string;
  tipoNorma: string;
  numero: string;
  nombreTitulo: string;
  fecha: string;
  fechaPublicacion: string;
  tieneEfectosGenerales: string;
  ultimaActualizacion: string;
  descripcion: string;
  enlacePublicacion: string;
}

function crearRegistro(numero: string, fecha: string): RegularizacionLey20898 {
  return {
    denominacion: 'REGULARIZACION LEY 20.898',
    tipoNorma: 'Actos resolutivo',
    numero,
    nombreTitulo: 'VIVIENDA',
    fecha,
    fechaPublicacion: 'Pagina Web',
    tieneEfectosGenerales: 'No',
    ultimaActualizacion: 'Sin Modificación',
    descripcion: 'REGULARIZACION',
    enlacePublicacion: ''
  };
}

export const registrosLey20898: RegularizacionLey20898[] = [
  crearRegistro('4', '31.08.16'),
  crearRegistro('3', '16.08.16'),
  crearRegistro('2', '04.08.16'),
  crearRegistro('1', '29.07.16')
];
