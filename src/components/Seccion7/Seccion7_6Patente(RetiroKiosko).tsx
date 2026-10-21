import type { PatenteHistorico } from './Seccion7_6Patentes';

interface FilaRetiroKiosco {
  numero: string;
  fecha: string;
  fechaPublicacion: string;
  tieneEfectosGenerales: 'Sí' | 'No';
  descripcion: string;
  tipoNorma?: string;
  denominacion?: string;
  nombreTitulo?: string;
  ultimaActualizacion?: string;
  enlaceModificacion?: string;
}

const crearRegistrosRetiroKiosco = (filas: FilaRetiroKiosco[]): PatenteHistorico[] =>
  filas.map(({
    numero,
    fecha,
    fechaPublicacion,
    tieneEfectosGenerales,
    descripcion,
    tipoNorma = 'Decreto',
    denominacion = 'Patentes y Permisos',
    nombreTitulo = 'Retiro de Kiosco',
    ultimaActualizacion = 'Sin Modificaciones',
    enlaceModificacion = 'Sin Modificaciones'
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
    enlacePublicacion: 'PDF',
    enlaceModificacion,
    urlPublicacion: '',
    urlModificacion: ''
  }));

export const retiroKioscoPorAnio: Record<string, PatenteHistorico[]> = {
  '2016': crearRegistrosRetiroKiosco([
    { numero: '51', fecha: '21.01.16', fechaPublicacion: '05.02.2016, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decretos Alcaldicios', descripcion: 'ORDENA EL RETIRO DE KIOSKO UBICADO EN AV. DORSAL.', ultimaActualizacion: '28.01.2016', enlaceModificacion: 'PDF' },
    { numero: '41', fecha: '15.01.16', fechaPublicacion: '05.02.2016, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decretos Alcaldicios', nombreTitulo: 'Retiro de Carro', descripcion: 'ORDENA EL RETIRO DE CARRO ABANDONADO UBICADO EN CALLE SAN VALENTIN AL LLEGAR A TAMARINDOS.' }
  ]),
  '2015': crearRegistrosRetiroKiosco([
    { numero: '875', fecha: '30.10.2015', fechaPublicacion: '06.11.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'ORDENA EL RETIRO DE KIOSKO A NOMBRE DE LA SRA. PAOLA GONZALEZ AVILA.' },
    { numero: '758', fecha: '17.09.2015', fechaPublicacion: '06.10.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'ORDENA EL RETIRO DE KIOSKO UBICADO EN 9 DE JULIO FRENTE AL N°5841 A NOMBRE DE LA SRA. MARIA HENRIQUEZ ROMERO.' },
    { numero: '670', fecha: '28.08.2015', fechaPublicacion: '06.09.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'ORDENA EL RETIRO DE KIOSKO UBICADO EN TEGUALDA CON LOS COPIHUES EL QUE NO CUENTA CON PERMISO MUNICIPAL.' },
    { numero: '667', fecha: '21.08.2015', fechaPublicacion: '06.09.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', nombreTitulo: 'Retiro de Carro', descripcion: 'ORDENA EL RETIRO DE CARRO ISOTERMICO UBICADO EN EL VEREDON ORIENTE EN CALLE PABLO VALLON A 17 METROS DE SOLERA NORTE DE CALLE AVENIDA DORSAL QUE NO CUENTA CON PERMISO MUNICIPAL.' },
    { numero: '539', fecha: '20.07.2015', fechaPublicacion: '06.08.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'ORDENA EL RETIRO DE KIOSCO UBICADO EN GABRIELA MISTRAL CON AV. SAN PABLO A NOMBRE DE LA SRA. VERONICA ALIAGA SOTO.' },
    { numero: '500', fecha: '02.07.2015', fechaPublicacion: '06.08.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', nombreTitulo: 'Retiro de Carro', descripcion: 'ORDENA EL RETIRO DE CARRO ISOTERMICO UBICADO EN LAGO CALAFQUEN CON LOS COPIHUES COMUNA DE LO PRADO.' },
    { numero: '452', fecha: '15.06.2015', fechaPublicacion: '06.07.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', nombreTitulo: 'Retiro de Carro', descripcion: 'ORDENA EL RETIRO DE CARRO ISOTERMICO UBICADO EN AVENIDA ESTADOS UNIDOS CON QUEBEC.' },
    { numero: '283', fecha: '21.04.2015', fechaPublicacion: '06.05.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', nombreTitulo: 'Retiro de Carro', descripcion: 'ORDENA RETIRO DE CARRO ISOTERMICO UBICADO EN AV. SAN PABLO N°8011.' },
    { numero: '162', fecha: '02.03.2015', fechaPublicacion: '06.04.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'ORDENA RETIRO DE KIOSKO QUE INDICA, DESCARGA Y CADUCA EL PERMISO ROL N° 260606 A NOMBRE DE LA SRA. EUGENIA HENRIQUEZ ESPINOZA.' },
    { numero: '142', fecha: '20.02.2015', fechaPublicacion: '06.03.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'ORDENA EL RETIRO DE KIOSKO UBICADO EN ECHECOCHEA CON LOS COPIHUES COMUNA DE LO PRADO.' },
    { numero: '132', fecha: '13.02.2015', fechaPublicacion: '06.03.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'ORDENA EL RETIRO DE KIOSCO Y CADUCA PERMISO ROL N° 260600 A NOMBRE DE LA SRA. MARICELA JARA MENDEZ.' },
    { numero: '131', fecha: '13.02.2015', fechaPublicacion: '06.03.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'ORDENA EL RETIRO DE KIOSCO Y CADUCA PERMISO ROL N° 260395 A NOMBRE DEL SR. JOSE RUIZ ARBAZUA.' },
    { numero: '130', fecha: '13.02.2015', fechaPublicacion: '06.03.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'ORDENA EL RETIRO DE KIOSCO Y CADUCA PERMISO ROL N° 260164 A NOMBRE DE LA SRA. OTILIA SILVA SILVA.' },
    { numero: '129', fecha: '13.02.2015', fechaPublicacion: '06.03.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'ORDENA EL RETIRO DE KIOSCO Y CADUCA PERMISO ROL N° 260646 A NOMBRE DEL SR. DOMINGO TAUCAN ALVAREZ.' },
    { numero: '128', fecha: '12.02.2015', fechaPublicacion: '06.03.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'ORDENA EL RETIRO DE KIOSCO Y CADUCA PERMISO ROL N° 260463 A NOMBRE DE LA SRA. ELIZABETH ALVAREZ IBARRA.' },
    { numero: '58', fecha: '19.01.2015', fechaPublicacion: '06.02.2015 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', nombreTitulo: 'Retiro de Carro', descripcion: 'ORDENA EL RETIRO DE CARRO ISOTERMICO UBICADO EN LOS CRISANTEMOS CON AVDA. SAN PABLO A NOMBRE DE LA SRA. MONICA NAVARRETE RIQUELME.' }
  ]),
  '2014': crearRegistrosRetiroKiosco([
    { numero: '3717', fecha: '31.12.14', fechaPublicacion: '06.01.2015 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Retiro Kiosco', descripcion: 'ORDENA EL RETIRO DE KIOSCO UBICADO EN SALIDA NOR ORIENTE DE METRO NEPTUNO N°05 A NOMBRE DE LA SRA. INES ALLENDE LORCA.' },
    { numero: '2890', fecha: '14.10.14', fechaPublicacion: '06.11.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Retiro de Carro', descripcion: 'ORDENA EL RETIRO DEL CARRO ISOTERMICO (ANCLADO) UBICADO EN CALLE AMENTIA A 24 MTS. DE SOLERA NORTE EN AVENIDA GENERAL BONILLA.' },
    { numero: '2399', fecha: '26.08.14', fechaPublicacion: '06.09.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'ORDENA EL RETIRO DE KIOSCO UBICADO EN TERRITORIO ANTARTICO CON MORRO DE ARICA A NOMBRE DE LA SRA. LUCIA PARRA INOSTROZA.' },
    { numero: '2398', fecha: '26.08.14', fechaPublicacion: '06.09.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'ORDENA EL RETIRO DE KIOSCO ROL N°260488 UBICADO EN AVDA. MARIA ROZAS CON AVDA. ECUADOR FRENTE AL N°24 A NOMBRE DEL SR. MIGUEL DONOSO DUOGUETT.' },
    { numero: '1836', fecha: '02.07.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'ORDENA EL RETIRO DE KIOSCO QUE SE INDICA Y CADUCA EL PERMISO ROL N°260564 A NOMBRE DEL SR. DARWIN HERMOSILLA TORRES.' },
    { numero: '1133', fecha: '23.04.14', fechaPublicacion: '06.05.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'ORDENA EL RETIRO DE KIOSCO ROL N°260560 UBICADO EN AVDA. DORSAL CON LAS REJAS A NOMBRE DEL SR. FELIPE ARAVENA SALAS.' }
  ]),
  '2013': crearRegistrosRetiroKiosco([
    { numero: '980', fecha: '03.04.13', fechaPublicacion: '05.04.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'ORDENA EL RETIRO DE KIOSCO Y CADUCA, DESCARGA Y ELIMINA PATENTE ROL N° 260548 A NOMBRE DE LA SRA. IRIS GUTIERREZ FUENTES.', enlaceModificacion: 'Sin Modificación' },
    { numero: '1874', fecha: '4.07.2013', fechaPublicacion: '09.08.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'ORDENA EL RETIRO DE KIOSCOS Y CADUCA EL PERMISO ROL N°260356 A NOMBRE DE LA SRA. GLADYS MAUREIRA ROJAS.', enlaceModificacion: 'Sin Modificación' },
    { numero: '2379', fecha: '26.08.2013', fechaPublicacion: '06.09.2013 Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'ORDENA EL RETIRO DE KIOSCO UBICADO EN REINA MAUD CON NEPTUNO, DE PROPIEDAD DE LA SRA. PATRICIA JOPIA IBARRA.', enlaceModificacion: 'Sin Modificación' },
    { numero: '2382', fecha: '26.08.2013', fechaPublicacion: '06.09.2013 Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'ORDENA EL RETIRO DE KIOSCO UBICADO AL COSTADO PONIENTE DEL RECINTO DEPORTIVO "SANTA ANITA", DE PROPIEDAD DE LA SRA. SABINA SOTO VASQUEZ.', enlaceModificacion: 'Sin Modificación' }
  ]),
  '2012': crearRegistrosRetiroKiosco([
    { numero: '89', fecha: '09.01.12', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'ORDENA EL RETIRO DE KIOSCO UBICADO EN PAULA JARAQUEMADA FRENTE AL N° 7947, A NOMBRE DE LA SRA. LUISA PEREZ SAEZ.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '1526', fecha: '12.06.12', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', descripcion: 'ORDENA RETIRO DE KIOSCO QUE SE INDICA A NOMBRE DE LA SRA. MARIA LEGUE QUIÑEL.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2654', fecha: '18.10.12', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Retiro de Carro', descripcion: 'ORDENA EL RETIRO DE KIOSCOS Y CARRO ISOTERMICO CON EMPALME ELECTRICO.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2712', fecha: '26.10.12', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Retiro Kiosco', descripcion: 'AUTORIZA EL RETIRO DE KIOSCO QUE SE INDICA A NOMBRE DE LA SRA. CLARA ROSA VARGAS SAEZ, DESDE Y HACIA EL LUGAR QUE SE INDICA.', enlaceModificacion: 'Sin Enlaces' }
  ]),
  '2011': crearRegistrosRetiroKiosco([
    { numero: '699', fecha: '05.04.11', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', denominacion: 'Permiso Kiosco', descripcion: 'ORDENA EL RETIRO DE KIOSCO Y CADUCA PATENTE ROL N° 260193 A NOMBRE DE LA SRA. CATALINA DIAZ CANETE.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '753', fecha: '11.04.11', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', denominacion: 'Permiso Kiosco', descripcion: 'ORDENA EL RETIRO DE KIOSCO Y CADUCA PATENTE ROL N° 260118 A NOMBRE DE LA SRA. EDITH CLAVERO PEREZ.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '1113', fecha: '01.06.11', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', denominacion: 'Permiso Kiosco', descripcion: 'ORDENA EL RETIRO DE KIOSCO Y CADUCA PATENTE ROL N° 260202 A NOMBRE DEL SR. BERNARDO ROMERO ALVARADO.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '1236', fecha: '14.06.11', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', denominacion: 'Permiso Kiosco', descripcion: 'ORDENA EL RETIRO DE KIOSCO Y CADUCA PATENTE ROL N° 260413 A NOMBRE DE LA SRA. MARCIA BAEZ RIVERA.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '1297', fecha: '21.06.11', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', denominacion: 'Permiso Kiosco', descripcion: 'ORDENA EL RETIRO DE KIOSCO QUE SE INDICA, A NOMBRE DE LA SRA. MARGARITA MUÑOZ VARAS.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '1539', fecha: '21.07.11', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', denominacion: 'Permiso Kiosco', descripcion: 'ORDENA EL RETIRO DE KIOSCO QUE SE INDICA, A NOMBRE DE LA SRA. INES ALLENDE LORCA.', enlaceModificacion: 'Sin Enlaces' }
  ]),
  '2010': crearRegistrosRetiroKiosco([
    { numero: '1433', fecha: '02.08.10', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'ORDENA EL RETIRO DE KIOSCO ROL N° 260155 A NOMBRE DE LA SRA. SUSANA ROA SANDOVAL.', enlaceModificacion: 'Sin enlace' }
  ]),
  '2009': crearRegistrosRetiroKiosco([
    { numero: '661', fecha: '24.03.09', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'ORDENA EL RETIRO DE KIOSCOS ABANDONADOS DE ACUERDO A NOMINA.', ultimaActualizacion: '26.12.11', enlaceModificacion: 'PDF' },
    { numero: '2330', fecha: '10.11.09', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'ORDENA EL RETIRO DE KIOSCOS ROL N° 260057 A NOMBRE DEL SR. OSVALDO GALLARDO VERGARA.', enlaceModificacion: 'Sin enlace' },
    { numero: '2480', fecha: '01.12.09', fechaPublicacion: 'Página Web, de fecha 29.04.2013', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'ORDENA EL RETIRO DE CARRO ISOTERMICO Y KIOSCO ABANDONADO UBICADOS EN CALLES QUE SE INDICAN.', enlaceModificacion: 'Sin enlace' }
  ])
};
