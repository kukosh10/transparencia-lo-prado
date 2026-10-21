import type { PatenteHistorico } from './Seccion7_6Patentes';

interface FilaClausura {
  numero: string;
  fecha: string;
  fechaPublicacion: string;
  tieneEfectosGenerales: string;
  descripcion: string;
  ultimaActualizacion?: string;
  enlaceModificacion?: string;
}

const crearRegistrosClausura = (filas: FilaClausura[]): PatenteHistorico[] =>
  filas.map(({
    numero,
    fecha,
    fechaPublicacion,
    tieneEfectosGenerales,
    descripcion,
    ultimaActualizacion = 'Sin Modificaciones',
    enlaceModificacion = 'Sin Modificaciones'
  }) => ({
    tipoNorma: 'Decreto',
    denominacion: 'Patentes y Permisos',
    nombreTitulo: 'Clausura',
    numero,
    fecha,
    fechaPublicacion,
    tieneEfectosGenerales,
    ultimaActualizacion,
    descripcion,
    enlacePublicacion: 'PDF',
    enlaceModificacion,
    urlPublicacion: '',
    urlModificacion: ''
  }));

const sinRegistrosClausura: PatenteHistorico = {
  tipoNorma: 'Decreto',
  denominacion: 'Patentes y Permisos',
  nombreTitulo: 'Clausura',
  numero: 'No Aplica',
  fecha: 'No Aplica',
  fechaPublicacion: 'No Aplica',
  tieneEfectosGenerales: 'No Aplica',
  ultimaActualizacion: 'No Aplica',
  descripcion: 'No se han producido en este año',
  enlacePublicacion: 'No Aplica',
  enlaceModificacion: 'No Aplica',
  urlPublicacion: '',
  urlModificacion: ''
};

export const clausurasPorAnio: Record<string, PatenteHistorico[]> = {
  '2016': crearRegistrosClausura([
    { numero: '320', fecha: '03.05.2016', fechaPublicacion: '20.05.2016, Página Web', tieneEfectosGenerales: 'No', descripcion: 'ORDENA ALZAMIENTO DE CLAUSURA DEL ESTACIONAMIENTO UBICADO EN AVENIDA SAN PABLO N° 813, A NOMBRE DEL SR. CARLOS CORTEZ ALMARZA.' },
    { numero: '248', fecha: '06.04.2016', fechaPublicacion: '05.05.2016, Página Web', tieneEfectosGenerales: 'No', descripcion: 'CLAUSURA ESTABLECIMIENTO POR EJERCER ACTIVIDAD COMERCIAL SIN AUTORIZACION MUNICIPAL.' },
    { numero: '221', fecha: '30.03.2016', fechaPublicacion: '05.04.2016, Página Web', tieneEfectosGenerales: 'No', descripcion: 'CLAUSURA ESTABLECIMIENTO POR EJERCER ACTIVIDAD COMERCIAL SIN AUTORIZACION MUNICIPAL.' },
    { numero: '201', fecha: '24.03.2016', fechaPublicacion: '05.04.2016, Página Web', tieneEfectosGenerales: 'No', descripcion: 'CLAUSURA ESTABLECIMIENTO A NOMBRE DE CARNES PIGAL SPA POR EJERCER ACTIVIDAD COMERCIAL CON LA PATENTE MOROSA.' },
    { numero: '162', fecha: '10.03.2016', fechaPublicacion: '05.04.2016, Página Web', tieneEfectosGenerales: 'No', descripcion: 'CLAUSURA ESTABLECIMIENTO QUE INDICA POR EJERCER ACTIVIDAD COMERCIAL SIN AUTORIZACION MUNICIPAL.' },
    { numero: '112', fecha: '11.02.2016', fechaPublicacion: '05.03.2016, Página Web', tieneEfectosGenerales: 'No', descripcion: 'CLAUSURA ESTABLECIMIENTO DE COMIDA RAPIDA A NOMBRE DE FERMINA CASTILLO CASTILLO POR EJERCER ACTIVIDAD COMERCIAL SIN AUTORIZACION MUNICIPAL.' },
    { numero: '111', fecha: '11.02.2016', fechaPublicacion: '05.03.2016, Página Web', tieneEfectosGenerales: 'No', descripcion: 'CLAUSURA ESTABLECIMIENTO CHARCHARRERIA A NOMBRE DE SR. JAVIER ALIRIO DIAZ MANSILLA POR EJERCER ACTIVIDAD COMERCIAL SIN AUTORIZACION MUNICIPAL.' }
  ]),
  '2015': crearRegistrosClausura([
    { numero: '716', fecha: '07.09.2015', fechaPublicacion: '06.10.2015, Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'CLAUSURA ESTABLECIMIENTO QUE INDICA POR EJERCER ACTIVIDAD COMERCIAL SIN AUTORIZACION MUNICIPAL.' },
    { numero: '673', fecha: '26.08.2015', fechaPublicacion: '06.09.2015, Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'CLAUSURA ESTABLECIMIENTO QUE INDICA POR EJERCER ACTIVIDAD COMERCIAL SIN AUTORIZACION MUNICIPAL.' },
    { numero: '427', fecha: '09.06.2015', fechaPublicacion: '06.07.2015, Página Web', tieneEfectosGenerales: 'No', descripcion: 'CLAUSURA ESTABLECIMIENTO QUE INDICA POR DENUNCIA MEDIO AMBIENTE Y EJERCER ACTIVIDAD COMERCIAL SIN AUTORIZACION MUNICIPAL.', ultimaActualizacion: '22.08.2015', enlaceModificacion: 'PDF' },
    { numero: '106', fecha: '04.02.2015', fechaPublicacion: '06.02.2015, Página Web', tieneEfectosGenerales: 'No', descripcion: 'ALZAMIENTO DE CLAUSURA TEMPORAL.' },
    { numero: '72', fecha: '22.01.2015', fechaPublicacion: '06.02.2015, Página Web', tieneEfectosGenerales: 'No', descripcion: 'CLAUSURA ESTABLECIMIENTO QUE INDICA POR EJERCER ACTIVIDAD COMERCIAL SIN AUTORIZACION MUNICIPAL.' }
  ]),
  '2014': crearRegistrosClausura([
    { numero: '3522', fecha: '09.12.2014', fechaPublicacion: '06.01.2015, Página Web', tieneEfectosGenerales: 'No', descripcion: 'CLAUSURA ESTABLECIMIENTO QUE INDICA POR EJERCER ACTIVIDAD COMERCIAL SIN AUTORIZACION MUNICIPAL.' },
    { numero: '3517', fecha: '04.12.2014', fechaPublicacion: '06.01.2015, Página Web', tieneEfectosGenerales: 'No', descripcion: 'ORDENA ALZAMIENTO DE CLAUSURA.' },
    { numero: '3269', fecha: '13.11.2014', fechaPublicacion: '06.12.2014, Página Web', tieneEfectosGenerales: 'No', descripcion: 'ORDENA ALZAMIENTO DE CLAUSURA.' },
    { numero: '2661', fecha: '24.09.2014', fechaPublicacion: '06.10.2014, Página Web', tieneEfectosGenerales: 'No', descripcion: 'CLAUSURA ESTABLECIMIENTO POR EJERCER ACTIVIDAD COMERCIAL SIN AUTORIZACION MUNICIPAL.' },
    { numero: '2660', fecha: '24.09.2014', fechaPublicacion: '06.10.2014, Página Web', tieneEfectosGenerales: 'No', descripcion: 'CLAUSURA ESTABLECIMIENTO POR EJERCER ACTIVIDAD COMERCIAL SIN AUTORIZACION MUNICIPAL.' },
    { numero: '1681', fecha: '17.04.2014', fechaPublicacion: '06.05.2014, Página Web', tieneEfectosGenerales: 'No', descripcion: 'ALZAMIENTO DE CLAUSURA TEMPORAL DEL LOCAL.' }
  ]),
  '2013': crearRegistrosClausura([
    { numero: '1277', fecha: '06.05.2013', fechaPublicacion: '21.06.2013, Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'CLAUSURA Y CADUCA PATENTE ROL N° 200633, GIRO COMPRA VENTA DE BOTELLAS Y METALES, LOCAL.', enlaceModificacion: 'Sin Modificación' },
    { numero: '1623', fecha: '07.06.2013', fechaPublicacion: '21.06.2013, Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'ORDENA ALZAMIENTO DEFINITIVO DE CLAUSURA.', enlaceModificacion: 'Sin Modificación' },
    { numero: '2579', fecha: '01.10.2013', fechaPublicacion: '06.11.2013, Página Web', tieneEfectosGenerales: 'No', descripcion: 'ORDENA ALZAMIENTO TEMPORAL DE CLAUSURA DEL LOCAL.', enlaceModificacion: 'Sin Modificación' }
  ]),
  '2012': crearRegistrosClausura([
    { numero: '114', fecha: '10.01.2012', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'ORDENA ALZAMIENTO DE CLAUSURA.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '352', fecha: '30.01.2012', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'CLAUSURA LOCAL COMERCIAL.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '435', fecha: '08.02.2012', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'ORDENA ALZAMIENTO DE CLAUSURA DEL ESTABLECIMIENTO.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '1240', fecha: '16.05.2012', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'CLAUSURASE EL ESTABLECIMIENTO.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2949', fecha: '28.11.2012', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'CLAUSURA ESCUELA DE PARVULOS PINOCHO.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2993', fecha: '04.12.2012', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'CLAUSURA FABRICA DE ROMANAS DE TONELAJE.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '3007', fecha: '05.12.2012', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'ORDENA ALZAMIENTO TEMPORAL DE CLAUSURA DE LA ESCUELA DE PARVULOS PINOCHO.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '3136', fecha: '18.12.2012', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'ALZAMIENTO DE CLAUSURA FABRICA DE ROMANAS DE TONELAJE.', enlaceModificacion: 'Sin Enlaces' }
  ]),
  '2011': crearRegistrosClausura([
    { numero: '2196', fecha: '11.10.2011', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'CLAUSURA LA ACTIVIDAD COMERCIAL Y CADUCA PATENTE ROL N° 202521 DE LAVADO DE AUTOS EN B.N.U.P.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2205', fecha: '11.10.2011', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'CLAUSURA DE LOCAL COMERCIAL.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2237', fecha: '12.10.2011', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'CLAUSURA DE TALLER MECANICO.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2399', fecha: '27.10.2011', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'ALZA CLAUSURA Y DEJA SIN EFECTO CADUCIDAD DE LA PATENTE ROL N° 202521.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2536', fecha: '16.11.2011', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'ORDENA ALZAMIENTO DE CLAUSURA DEL ESTABLECIMIENTOS UBICADOS EN CALLES QUE INDICA.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2810', fecha: '19.12.2011', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'ORDENA ALZAMIENTO DE CLAUSURA DEL ESTABLECIMIENTO.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2865', fecha: '26.12.2011', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'CLAUSURA DE CARRO ISOTERMICO.', enlaceModificacion: 'Sin Enlaces' }
  ]),
  '2010': [sinRegistrosClausura],
  '2009': crearRegistrosClausura([
    { numero: '638', fecha: '24.03.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'ORDENA CLAUSURA DE ESTABLECIMIENTO SIN CONTAR CON PATENTE MUNICIPAL.', enlaceModificacion: 'Sin enlace' },
    { numero: '794', fecha: '08.04.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'ORDENA ALZAMIENTO TEMPORAL DE CLAUSURA DE ESTABLECIMIENTO EN EL CUAL FUNCIONA FRIGORIFICO SIN PATENTE MUNICIPAL.', enlaceModificacion: 'Sin enlace' }
  ])
};
