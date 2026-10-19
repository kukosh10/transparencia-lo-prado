import type { PatenteHistorico } from './Seccion7_6Patentes';

type FilaPatenteProfesional = [
  numero: string,
  fecha: string,
  fechaPublicacion: string,
  efectosGenerales: string,
  descripcion: string,
  urlPublicacion?: string,
  urlModificacion?: string
];

interface ConfiguracionPatenteProfesional {
  tipoNorma: string;
  denominacion: string;
  nombreTitulo: string;
  enlaceModificacion: string;
}

const crearPatentesProfesionales = (
  filas: FilaPatenteProfesional[],
  configuracion: ConfiguracionPatenteProfesional
): PatenteHistorico[] =>
  filas.map(([numero, fecha, fechaPublicacion, tieneEfectosGenerales, descripcion, urlPublicacion = '', urlModificacion = '']) => ({
    tipoNorma: configuracion.tipoNorma,
    denominacion: configuracion.denominacion,
    nombreTitulo: configuracion.nombreTitulo,
    numero,
    fecha,
    fechaPublicacion,
    tieneEfectosGenerales,
    ultimaActualizacion: 'Sin Modificaciones',
    descripcion,
    urlPublicacion, urlModificacion, enlacePublicacion: 'PDF',
    enlaceModificacion: configuracion.enlaceModificacion
  }));

const configuracionComun: ConfiguracionPatenteProfesional = {
  tipoNorma: 'Decretos',
  denominacion: 'Patentes y Permisos',
  nombreTitulo: 'Patente Profesional',
  enlaceModificacion: 'Sin Modificación'
};

export const patentesProfesionalesPorAnio: Record<string, PatenteHistorico[]> = {
  '2016': crearPatentesProfesionales([
    ['2473', '13.10.2016', '11.01.2017, Página Web', 'No', 'OTORGA PATENTE PROFESIONAL AL SR. BORIS ANDRÉS PALACIOS DÍAZ.', '', ''],
    ['2135', '25.08.2016', '11.01.2017, Página Web', 'No', 'OTORGA PATENTE PROFESIONAL AL SR. ORLANDO CERDA SILVA.', '', ''],
    ['1894', '26.07.2016', '11.01.2017, Página Web', 'No', 'OTORGA PATENTE PROFESIONAL AL SR. JUAN MAUREIRA CARREÑO.', '', ''],
    ['1383', '20.05.2016', '03.06.2016, Página Web', 'No', 'OTORGA PATENTE PROFESIONAL AL SR. HUGO MOYA GATICA.', '', ''],
    ['1347', '17.05.2016', '20.06.2016, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL A LA SRA. GABRIELA HENRÍQUEZ TAPIA.', '', ''],
    ['970', '06.04.2016', '05.05.2016, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. RICARDO NÚÑEZ LUCERO.', '', ''],
    ['496', '11.02.2016', '05.03.2016, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. EDGARDO ROJAS SEPÚLVEDA.', '', ''],
    ['247', '22.01.2016', '05.02.2016, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. JAIME VILLABLANCA GÁLVEZ.', '', '']
  ], { ...configuracionComun, tipoNorma: 'Decretos Exentos', enlaceModificacion: 'Sin Modificaciones' }),
  '2015': crearPatentesProfesionales([
    ['2955', '30.12.2015', '06.01.2016, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL A LA SRA. YASAREL MALGUE BERNAL.', '', ''],
    ['2906', '23.12.2015', '06.01.2016, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL A LA SRA. ANA CARMONA SEPÚLVEDA.', '', ''],
    ['2743', '02.12.2015', '10.12.2015, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. DAVID CARRILLO NAVARRETE.', '', ''],
    ['2421', '30.10.2015', '06.11.2015, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. JUAN ANDRÉS SILVA VIÑA.', '', ''],
    ['2389', '27.10.2015', '06.11.2015, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. JOHNNY REYES MAYÓN.', '', ''],
    ['2071', '10.09.2015', '07.10.2015, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. PATRICIO CHAURA NÚÑEZ.', '', ''],
    ['1524', '15.07.2015', '06.08.2015, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. JOSÉ CORTEZ AGUILERA.', '', ''],
    ['1286', '15.06.2015', '06.07.2015, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. MARCOS DINAMARCA MARTÍNEZ.', '', ''],
    ['1083', '20.05.2015', '08.06.2015, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL A LA SRA. KARINA ARAYA PERALTA.', '', ''],
    ['319', '02.03.2015', '03.03.2015, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL A KAROL BORRERO CAMPOS.', '', ''],
    ['249', '02.03.2015', '03.03.2015, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. JORGE RODRÍGUEZ BAEZA.', '', ''],
    ['98', '16.01.2015', '06.02.2015, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. LENIN MALDONADO CASTILLO.', '', '']
  ], { ...configuracionComun, tipoNorma: 'Decretos Exentos', enlaceModificacion: 'Sin Modificaciones' }),
  '2014': crearPatentesProfesionales([
    ['3358', '20.11.2014', '06.12.2014, Página Web', 'No', 'OTORGA PATENTE PROFESIONAL AL SR. CRISTIAN ALBORNOZ VALDÉS.', '', ''],
    ['3196', '06.11.2014', '06.12.2014, Página Web', 'No', 'OTORGA PATENTE PROFESIONAL A LA SRA. CARMEN MEZA FRÍAS.', '', ''],
    ['2539', '10.09.2014', '06.10.2014, Página Web', 'No', 'OTORGA PATENTE PROFESIONAL AL SR. JORGE FIGUEROA SANDOVAL.', '', ''],
    ['1484', '09.06.2014', '06.07.2014, Página Web', 'No', 'OTORGA PATENTE PROFESIONAL AL SR. CRISTÓBAL ZAMORA SALINAS.', '', ''],
    ['1470', '06.06.2014', '06.07.2014, Página Web', 'No', 'OTORGA PATENTE PROFESIONAL AL SR. JUAN CASTRO GONZÁLEZ.', '', ''],
    ['1438', '03.06.2014', '06.07.2014, Página Web', 'No', 'PATENTE PROFESIONAL JOSÉ VICENT. INGRID REYES.', '', ''],
    ['926', '07.04.2014', '25.04.2014, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL A LA SRA. ABIGAIL SEPÚLVEDA TEJERA.', '', ''],
    ['917', '07.04.2014', '25.04.2014, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. ÁLVARO ALFARO HARO.', '', ''],
    ['780', '21.03.2014', '06.04.2014, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. RODRIGO SEPÚLVEDA MORALES.', '', '']
  ], configuracionComun),
  '2013': crearPatentesProfesionales([
    ['479', '01.02.2013', '01.03.2013, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL, A LA SRA. VERÓNICA DEL CARMEN ARIAS PEDRAZA.', '', ''],
    ['692', '28.02.2013', '15.03.2013, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL, AL SR. CÉSAR TURBAY HENRÍQUEZ.', '', ''],
    ['693', '28.02.2013', '15.03.2013, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL, AL SR. FIDEL SILVA CERDA.', '', ''],
    ['743', '08.03.2013', '15.03.2013, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL, AL SR. CLAUDIO CASTILLO MORALES.', '', ''],
    ['788', '13.03.2013', '05.04.2013, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. RODRIGO PÉREZ ARANDA.', '', ''],
    ['1072', '11.04.2013', '03.05.2013, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL A LA SRA. GLADYS CACIEDO ANGULO.', '', ''],
    ['2041', '24.07.2013', '09.08.2013, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. FELIPE ERRÁZURIZ GUZMÁN.', '', ''],
    ['2094', '30.07.2013', '09.08.2013, Página Web', 'Sí', 'OTORGA PATENTE PROFESIONAL, A LA SRA. AYLLALLIN PARDO PÁVEZ.', '', ''],
    ['2689', '01.10.2013', '06.11.2013, Página Web', 'No', 'OTORGA PATENTE PROFESIONAL A LA SRA. LAURA MELLADO CARO.', '', ''],
    ['2846', '15.10.2013', '06.11.2013, Página Web', 'No', 'OTORGA PATENTE PROFESIONAL AL SR. ÁLVARO ARAYA LETELIER.', '', ''],
    ['2865', '18.10.2013', '06.11.2013, Página Web', 'No', 'OTORGA PATENTE PROFESIONAL AL SR. CARLOS DÍAZ RÍOS.', '', ''],
    ['3150', '13.12.2013', '06.01.2014, Página Web', 'No', 'OTORGA PATENTE PROFESIONAL A LA SRA. MYRIAM GRACIELA RUIZ JIMÉNEZ.', '', ''],
    ['3252', '24.12.2013', '06.01.2014, Página Web', 'No', 'OTORGA PATENTE PROFESIONAL A LA SRA. ALEJANDRA JOFRE REYES.', '', '']
  ], configuracionComun),
  '2012': crearPatentesProfesionales([
    ['561', '24.02.2012', 'Página Web, 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL A LA SRA. KATTY VIDAL LIBIOT.', '', ''],
    ['582', '27.02.2012', 'Página Web, 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL A MYRIAM RUIZ JIMÉNEZ PARA DESARROLLAR ACTIVIDAD COMERCIAL DE CONSTRUCTOR CIVIL.', '', ''],
    ['673', '12.03.2012', 'Página Web, 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. LEONARDO MELLA LOBOS.', '', ''],
    ['815', '30.03.2012', 'Página Web, 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. ÁLVARO ESPINOZA SALAS.', '', ''],
    ['862', '05.04.2012', 'Página Web, 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL A LA SRA. CAROLINA NARANJO ANTIGALLO.', '', ''],
    ['942', '11.04.2012', 'Página Web, 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL A DON ALEX LANDSKRON ORTIZ.', '', ''],
    ['1946', '01.08.2012', 'Página Web, 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL A LA SRA. MARÍA TERESA SÁNCHEZ URBINA.', '', ''],
    ['2269', '29.08.2012', 'Página Web, 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. ÁNGEL PÉREZ QUINTEROS.', '', ''],
    ['2393', '13.09.2012', 'Página Web, 29.04.2013', 'Sí', 'PATENTE PROFESIONAL CLAUDIA SEGOVIA. INGRID REYES.', '', ''],
    ['2669', '19.10.2012', 'Página Web, 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. RODRIGO PÁVEZ LEIVA.', '', ''],
    ['2920', '26.11.2012', 'Página Web, 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. CLAUDIO HURTADO ACEVEDO.', '', '']
  ], { ...configuracionComun, nombreTitulo: 'Profesionales', enlaceModificacion: 'Sin Enlace' }),
  '2011': crearPatentesProfesionales([
    ['378', '18.02.2011', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL, A LA SRA. ANA AMÉSTICA FUENTES.', '', ''],
    ['418', '24.02.2011', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. PABLO SALAMANCA GONZÁLEZ.', '', ''],
    ['622', '28.03.2011', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL A LA SRA. ALEJANDRA MIRANDA COLETTI.', '', ''],
    ['868', '26.04.2011', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. RICARDO GUAJARDO GONZÁLEZ.', '', ''],
    ['920', '02.05.2011', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. CELSO SILVA ACOSTA.', '', ''],
    ['1191', '10.06.2011', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. JUAN HENRÍQUEZ GÓMEZ.', '', ''],
    ['1192', '10.06.2011', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. RODRIGO FUENTES POLANCA.', '', ''],
    ['1322', '28.06.2011', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. BRAULIO DÍAZ HUENUP(E).', '', ''],
    ['1810', '23.08.2011', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SEÑOR EDGARDO MOYA VÁSQUEZ.', '', ''],
    ['2025', '14.09.2011', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. CARLOS SUCCO ESCOBAR.', '', ''],
    ['2388', '27.10.2011', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL A LA SRA. SCARLET MANAN SILVA.', '', ''],
    ['2680', '06.12.2011', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. RAFAEL RETAMAL HERNÁNDEZ.', '', '']
  ], { ...configuracionComun, enlaceModificacion: 'Sin Enlaces' }),
  '2010': crearPatentesProfesionales([
    ['103', '19.01.2010', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. JUAN FUENTES DURÁN.', '', ''],
    ['596', '25.03.2010', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. ANGELLO GUAJARDO QUEMPOMIL, PARA DESARROLLAR LA ACTIVIDAD PROFESIONAL DE ABOGADO.', '', ''],
    ['685', '07.04.2010', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. NICOLÁS SUAZO CONTRERAS.', '', ''],
    ['805', '21.04.2010', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL A LA SRA. FRANCISCA MAZZO ITURRIAGA.', '', ''],
    ['859', '04.05.2010', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. LESLIE SANTANDER VALENZUELA.', '', ''],
    ['949', '14.05.2010', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL A LA SRA. CLAUDIO FARIAS NAZEL.', '', ''],
    ['977', '19.05.2010', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. MAURICIO KEN-SAN MORGADO CAM.', '', ''],
    ['2116', '30.11.2010', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. RODRIGO ALEJANDRO CANALES LARA.', '', '']
  ], { ...configuracionComun, denominacion: 'Patentes', nombreTitulo: 'OTORGAMIENTO PROFESIONAL', enlaceModificacion: 'Sin enlace' }),
  '2009': crearPatentesProfesionales([
    ['45', '09.01.2009', 'Página Web, de fecha 29.04.2013', 'Sí', 'APRUEBA DEVOLUCIÓN DE PATENTE PROFESIONAL AL DÍA ROL N° 300216 A NOMBRE DEL SR. BORIS ARRAÑO VALENZUELA.', '', ''],
    ['67', '12.01.2009', 'Página Web, de fecha 29.04.2013', 'Sí', 'APRUEBA DEVOLUCIÓN DE PATENTE PROFESIONAL AL DÍA ROL N° 300253 A NOMBRE CLAUDIO CORRABARRUBIAS PEÑALOZA.', '', ''],
    ['564', '12.03.2009', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. PEDRO DÍAZ VARGAS.', '', ''],
    ['585', '16.03.2009', 'Página Web, de fecha 29.04.2013', 'Sí', 'APRUEBA DEVOLUCIÓN DE PATENTE PROFESIONAL AL DÍA ROL N° 300146 A NOMBRE DE LA SRA. CAROLINA ALEJANDRA BRAVO SOLÍS.', '', ''],
    ['728', '30.03.2009', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. LUIS NÚÑEZ PINTO.', '', ''],
    ['729', '30.03.2009', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. CRISTIAN GALLARDO TAPIA.', '', ''],
    ['1044', '11.05.2009', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. DAVID PASSI CATALÁN.', '', ''],
    ['1212', '05.06.2009', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. RODRIGO TORRES MUÑOZ.', '', ''],
    ['1860', '02.09.2009', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. SAÚL PARADA DE LA CRUZ.', '', ''],
    ['2465', '01.12.2009', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL A LA SRA. NORA HERRERA PADILLA.', '', ''],
    ['2467', '01.12.2009', 'Página Web, de fecha 29.04.2013', 'Sí', 'OTORGA PATENTE PROFESIONAL AL SR. RODRIGO SEPÚLVEDA MORALES.', '', '']
  ], { ...configuracionComun, enlaceModificacion: 'Sin enlace' })
};
