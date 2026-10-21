import type { PatenteHistorico } from './Seccion7_6Patentes';

interface FilaCambioDireccion {
  numero: string;
  fecha: string;
  fechaPublicacion: string;
  tieneEfectosGenerales: 'Sí' | 'No';
  descripcion: string;
  tipoNorma?: string;
  denominacion?: string;
  ultimaActualizacion?: string;
  enlaceModificacion?: string;
}

const crearRegistrosCambioDireccion = (filas: FilaCambioDireccion[]): PatenteHistorico[] =>
  filas.map(({
    numero,
    fecha,
    fechaPublicacion,
    tieneEfectosGenerales,
    descripcion,
    tipoNorma = 'Decretos Exentos',
    denominacion = 'Patentes y Permisos',
    ultimaActualizacion = 'Sin Modificaciones',
    enlaceModificacion = 'Sin Modificaciones'
  }) => ({
    tipoNorma,
    denominacion,
    nombreTitulo: 'Cambio de Dirección',
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

export const cambioDireccionComercialPorAnio: Record<string, PatenteHistorico[]> = {
  '2016': crearRegistrosCambioDireccion([
    { numero: '57', fecha: '08.01.16', fechaPublicacion: '05.02.2016, Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'OTORGA CAMBIO DE FERIA LIBRE AL PERMISO ROL N° 251450 A NOMBRE DE LA SRA. MARIA DONOSO DONOSO.' }
  ]),
  '2015': crearRegistrosCambioDireccion([
    { numero: '663', fecha: '20.08.2015', fechaPublicacion: '06.09.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA TRASLADO DE LA PATENTE DE ALCOHOL ROL N° 400135 Y LA PATENTE COMERCIAL ROL N° 203062 A NOMBRE DEL SR. ARTURO GERMAN FLORES CARRASCO.' },
    { numero: '1700', fecha: '11.08.2015', fechaPublicacion: '06.09.2015, Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'AUTORIZA EL CAMBIO DE DIRECCION Y CAMBIO DE MODALIDAD A LA PATENTE COMERCIAL ROL N° 202922.' },
    { numero: '1632', fecha: '29.07.2015', fechaPublicacion: '06.08.2015, Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'AUTORIZA EL CAMBIO DE DIRECCION Y CAMBIO DE MODALIDAD DE LA PATENTE COMERCIAL ROL N° 203123.' },
    { numero: '891', fecha: '23.04.2015', fechaPublicacion: '06.05.2015, Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'AUTORIZA EL TRASLADO AL PERMISO DE KIOSKO ROL N° 260328 A NOMBRE DE LA SRA. MARGARITA MORAGA VARAS.' },
    { numero: '663', fecha: '20.08.2015', fechaPublicacion: '06.09.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA TRASLADO DE LA PATENTE DE ALCOHOL ROL N° 400135 Y LA PATENTE COMERCIAL ROL N° 203062 A NOMBRE DEL SR. ARTURO GERMAN FLORES CARRASCO.' },
    { numero: '527', fecha: '14.07.2015', fechaPublicacion: '06.08.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA TRASLADO DE LA PATENTE DE ALCOHOL ROL N° 400032 Y LA PATENTE COMERCIAL ROL N° 202932 A NOMBRE DEL SR. MIGUEL QUIROZ ABARZUA.' },
    { numero: '310', fecha: '06.02.2015', fechaPublicacion: '06.03.2015, Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'AUTORIZA EL TRASLADO DE LA PATENTE COMERCIAL ROL N° 201345.' },
    { numero: '247', fecha: '03.02.2015', fechaPublicacion: '06.03.2015, Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'AUTORIZA EL CAMBIO DE DIRECCION Y CAMBIO DE TIPO DE PATENTE COMERCIAL ROL N° 203133.' }
  ]),
  '2014': crearRegistrosCambioDireccion([
    { numero: '3779', fecha: '31.12.14', fechaPublicacion: '06.01.2015, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'APRUEBA TRASLADO DEL PERMISO ESTACIONADO ROL N° 280162 A NOMBRE DE LA SRA. NOLFA ALVAREZ MAZZAQUINO.' },
    { numero: '2968', fecha: '21.10.14', fechaPublicacion: '06.11.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'APRUEBA TRASLADO DE LA PATENTE DE ALCOHOL ROL N° 400113 Y COMERCIAL ROL N° 202943 A NOMBRE DEL SR. CARLOS ALBERTO MORA OLGUIN.' },
    { numero: '2145', fecha: '31.07.14', fechaPublicacion: '06.08.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'APRUEBA TRASLADO DE PATENTE DE ALCOHOL.' },
    { numero: '1857', fecha: '03.07.14', fechaPublicacion: '06.07.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'OTORGA CAMBIO DE FERIA LIBRE SANTA MARTA POR EL DE FERIA LIBRE PAULA JARAQUEMADA A LA PATENTE ROL N° 250925 A NOMBRE DE LA SRA. MARIA MUÑOZ TOFANORI.' },
    { numero: '1856', fecha: '03.07.14', fechaPublicacion: '06.07.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'OTORGA CAMBIO EN FERIA LIBRE LAS TORRES POR EL DE FERIA LIBRE IBIS A LA PATENTE ROL N° 250964 A NOMBRE DE LA SRA. VERONICA CAMUS ESCANILLA.' },
    { numero: '1850', fecha: '03.07.14', fechaPublicacion: '06.07.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'OTORGA CAMBIO DE FERIA LIBRE PAULA JARAQUEMADA A LA PATENTE ROL N° 251114 A NOMBRE DEL SR. WLADIMIR HENRIQUEZ CARDENAS.' },
    { numero: '1817', fecha: '02.07.14', fechaPublicacion: '06.07.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'OTORGA CAMBIO DE FERIA LIBRE A LA PATENTE ROL N° 250897 A NOMBRE DE LA SRA. MIREYA BURGOS FUENTES.' },
    { numero: '1775', fecha: '30.06.14', fechaPublicacion: '06.07.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'OTORGA CAMBIO DE FERIA LIBRE PAULA JARAQUEMADA POR EL DE FERIA LIBRE SANTA MARTA A LA PATENTE ROL N° 250991 A NOMBRE DEL SR. CESAR PAVEZ BURGOS.' },
    { numero: '1764', fecha: '30.06.14', fechaPublicacion: '06.07.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'OTORGA CAMBIO DE FERIA LIBRE A LA PATENTE ROL N° 250971 A NOMBRE DE LA SRA. GLORIA GUTIERREZ PAREDES.' },
    { numero: '1761', fecha: '30.06.14', fechaPublicacion: '06.07.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'OTORGA CAMBIO DE FERIA LIBRE A LA PATENTE ROL N° 251366 A NOMBRE DE LA SRA. KATHERINE COÑOPAN MALDONADO.' },
    { numero: '1726', fecha: '26.06.14', fechaPublicacion: '06.07.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'APRUEBA TRASLADO DE LA PATENTE DE ALCOHOL ROL N° 400161 Y OTORGA PATENTE COMERCIAL A NOMBRE DEL SR. ROBERTO FARIAS SANTELICES.' },
    { numero: '1491', fecha: '09.06.14', fechaPublicacion: '06.07.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'APRUEBA CAMBIO DE TITULAR Y TRASLADO DE LA PATENTE ROL N° 400446 A NOMBRE DE COMERCIAL ROBINSON ROLANDO AGUAYO ABARCA E.I.R.L.' },
    { numero: '1490', fecha: '09.06.14', fechaPublicacion: '06.07.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'APRUEBA TRASLADO DE LA PATENTE DE ALCOHOL ROL N° 400460 A NOMBRE DEL SR. RENE ALFREDO MILLAN PEREDO.' },
    { numero: '1428', fecha: '02.06.14', fechaPublicacion: '06.06.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE DIRECCION A LA PATENTE ROL N° 202524 A NOMBRE DE LA SRA. MARIA ROJAS ARAVENA.' },
    { numero: '1392', fecha: '28.05.14', fechaPublicacion: '06.06.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE DIRECCION A LA PATENTE ROL N° 202268 A NOMBRE DE LA SRA. ANDREA MEZA CARVAJAL.' },
    { numero: '1349', fecha: '20.05.14', fechaPublicacion: '06.06.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE DIRECCION A LA PATENTE ROL N° 202906 A NOMBRE DE LA SRA. MARIA CHAMORRO NUÑEZ.' },
    { numero: '1258', fecha: '12.05.14', fechaPublicacion: '06.06.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'APRUEBA TRASLADO DE LA PATENTE DE ALCOHOL ROL N° 400264 Y LA PATENTE COMERCIAL ROL N° 202980 A NOMBRE DEL SR. MANUEL GUILLERMO CERDA GONZALEZ.' },
    { numero: '1238', fecha: '07.05.14', fechaPublicacion: '06.06.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE DIRECCION A LA PATENTE ROL N° 202825 A NOMBRE DE SERVICIO DE RECURSOS HUMANOS, TECNICOS Y ASESORIA EN SEGURIDAD PRIVADA LTDA.' },
    { numero: '572', fecha: '28.02.14', fechaPublicacion: '06.03.2014, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE DIRECCION DEL PERMISO ROL N° 260563 A NOMBRE DEL SR. SERGIO ESPINOZA MANCILLA.' },
    { numero: '154', fecha: '20.01.14', fechaPublicacion: '06.02.2014, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'Otorga cambio de feria libre al permiso rol N° 250994 a nombre del Sr. Jorge Romero Grez.' }
  ]),
  '2013': crearRegistrosCambioDireccion([
    { numero: '72', fecha: '08.01.13', fechaPublicacion: '01.03.2013, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Patentes y Permisos', denominacion: 'Decreto', enlaceModificacion: '', descripcion: 'AUTORIZA TRASLADO DE DOMICILIO A LA PATENTE ROL N° 202432 A NOMBRE DE NORMA HIDALGO PARRA.' },
    { numero: '407', fecha: '30.01.13', fechaPublicacion: '01.03.2013, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Patentes y Permisos', denominacion: 'Decreto', enlaceModificacion: '', descripcion: 'AUTORIZA EL CAMBIO DE DIRECCION A LA PATENTE ROL N° 155540 A NOMBRE DEL SR. JOSE ESPINOZA TORRES.' },
    { numero: '690', fecha: '27.02.13', fechaPublicacion: '15.03.2013, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Patentes y Permisos', denominacion: 'Decreto', enlaceModificacion: '', descripcion: 'AUTORIZA TRASLADO DE KIOSCO ROL N° 260463 A NOMBRE DE LA SRA. ELIZABETH ALVEAR IBARRA.' },
    { numero: '1028', fecha: '08.04.13', fechaPublicacion: '03.05.2013, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Patentes y Permisos', denominacion: 'Decreto', enlaceModificacion: '', descripcion: 'AUTORIZA EL CAMBIO DE DIRECCION A LA PATENTE ROL N° 202489 A NOMBRE DEL SR. JORGE BAXTER MENDEZ.' },
    { numero: '1097', fecha: '17.04.13', fechaPublicacion: '03.05.2013, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Patentes y Permisos', denominacion: 'Decreto', enlaceModificacion: '', descripcion: 'APRUEBA TRASLADO DE LAS PATENTES DE ALCOHOL ROL N° 400123 Y COMERCIAL ROL N° 202198 AMBAS A NOMBRE DE LA SRA. JUANA ROSA BRAVO LOYOLA.' },
    { numero: '1157', fecha: '23.04.13', fechaPublicacion: '03.05.2013, Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '22.05.13', enlaceModificacion: '', tipoNorma: 'Patentes y Permisos', denominacion: 'Decreto', descripcion: 'OTORGA CAMBIO DE FERIA LIBRE A LA PATENTE ROL N° 250766 A NOMBRE DE LA SRA. MARTA LOPEZ ALBORNOZ.' },
    { numero: '1249', fecha: '02.05.13', fechaPublicacion: '03.05.2013, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Patentes y Permisos', denominacion: 'Decreto', enlaceModificacion: '', descripcion: 'OTORGA CAMBIO DE FERIA LIBRE AL PERMISO ROL N° 251330 A NOMBRE DE LA SRA. BERTHA JON PANDO.' },
    { numero: '1729', fecha: '14.06.13', fechaPublicacion: '21.06.2013, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Patentes y Permisos', denominacion: 'Decreto', enlaceModificacion: '', descripcion: 'AUTORIZA EL TRASLADO DE KIOSCO, DEL PERMISO ROL N° 260395 A NOMBRE DE JOSE RUIZ ABARZUA.' },
    { numero: '1856', fecha: '01.07.2013', fechaPublicacion: '02.07.2013, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Patentes y Permisos', denominacion: 'Decreto', enlaceModificacion: '', descripcion: 'AUTORIZA EL TRASLADO DE KIOSCO, DEL PERMISO ROL N° 260198 A NOMBRE DE SUSANA ORMEÑO DINAMARCA.' },
    { numero: '1906', fecha: '08.07.2013', fechaPublicacion: '09.08.2013, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Patentes y Permisos', denominacion: 'Decreto', enlaceModificacion: '', descripcion: 'AUTORIZA EL TRASLADO DE KIOSCO, DEL PERMISO ROL N° 260467 A NOMBRE DE IRIS ITURRA OPAZO.' }
  ]),
  '2012': [],
  '2011': [],
  '2010': [],
  '2009': []
};
