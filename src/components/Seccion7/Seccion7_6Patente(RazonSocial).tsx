import type { PatenteHistorico } from './Seccion7_6Patentes';

interface FilaCambioRazonSocial {
  numero: string;
  fecha: string;
  fechaPublicacion: string;
  tieneEfectosGenerales: 'Sí' | 'No';
  descripcion: string;
  tipoNorma: string;
  ultimaActualizacion?: string;
  enlaceModificacion?: string;
}

const crearRegistrosCambioRazonSocial = (filas: FilaCambioRazonSocial[]): PatenteHistorico[] =>
  filas.map(({
    numero,
    fecha,
    fechaPublicacion,
    tieneEfectosGenerales,
    descripcion,
    tipoNorma,
    ultimaActualizacion = 'Sin Modificaciones',
    enlaceModificacion = 'Sin Modificaciones'
  }) => ({
    tipoNorma,
    denominacion: 'Patentes y Permisos',
    nombreTitulo: 'Cambio de Razón Social',
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

export const cambioRazonSocialPorAnio: Record<string, PatenteHistorico[]> = {
  '2016': crearRegistrosCambioRazonSocial([
    { numero: '412', fecha: '31.05.2016', fechaPublicacion: '03.06.2016, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA CAMBIO DE TITULAR Y TRASLADO, DE LA PATENTE DE ALCOHOL ROL N° 400459 Y PATENTE COMERCIAL ROL N° 203001 A NOMBRE DE BOTILLERIA MI COMPADRE SPA.' },
    { numero: '399', fecha: '26.05.2016', fechaPublicacion: '03.06.2016, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decretos Alcaldicios', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR DE LAS PATENTES COMERCIAL ROL N° 203006 Y DE ALCOHOLES ROL N° 400511 A NOMBRE DEL SR. MAURICIO VERA DIAZ.' },
    { numero: '1298', fecha: '11.05.2016', fechaPublicacion: '20.05.2016, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Exentos', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 202918 A NOMBRE DE LA SRA. INGRID BRIONES.' },
    { numero: '326', fecha: '04.05.2016', fechaPublicacion: '20.05.2016, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA CAMBIO DE TITULAR Y TRASLADO, DE LA PATENTE DE ALCOHOL ROL N° 400191 Y PATENTE COMERCIAL ROL N° 202980 A NOMBRE DE LA SOCIEDAD GUILLERMO WALDRON ARENSTEN BOTILLERIA E.I.R.L.' },
    { numero: '234', fecha: '31.03.2016', fechaPublicacion: '05.04.2016, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decretos Alcaldicios', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR DE LAS PATENTES COMERCIAL ROL N° 200410 Y DE ALCOHOLES ROL N° 400151 A NOMBRE DEL SR. CARLOS ALVARADO ALVAREZ.' },
    { numero: '658', fecha: '03.03.2016', fechaPublicacion: '05.04.2016, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Exentos', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 202572 A NOMBRE DEL SR. CARLOS ARROYO ARROYO.' },
    { numero: '619', fecha: '26.02.2016', fechaPublicacion: '05.03.2016, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Exentos', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 202321 A NOMBRE DE LA SRA. MONICA AMAYA HERNANDEZ.' },
    { numero: '12', fecha: '08.01.2016', fechaPublicacion: '05.02.2016, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA CAMBIO DE TITULAR, DE LA PATENTE DE ALCOHOL ROLES N° 400465, N° 100466 Y PATENTE COMERCIAL ROL N° 201238 A NOMBRE DE PRODUCCIONES YURI NELSON RIQUELME CLERICI E.I.R.L.' }
  ]),
  '2015': crearRegistrosCambioRazonSocial([
    { numero: '1003', fecha: '04.12.2015', fechaPublicacion: '10.12.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA CAMBIO DE TITULAR DE LAS PATENTES DE ALCOHOL ROL N° 400305, 400419, 400468 Y PATENTES COMERCIALES ROL N° 201027, 201026 A NOMBRE DE LA SRA. GHISLAINE ANA OCARREZ MORALES.' },
    { numero: '997', fecha: '03.12.2015', fechaPublicacion: '10.12.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA CAMBIO DE TITULAR, DE PATENTE DE ALCOHOL ROL N° 400003 Y PATENTE COMERCIAL ROL N° 202924 A NOMBRE DE LA SRA. NATALIE PACHECO HEREDIA.' },
    { numero: '900', fecha: '10.11.2015', fechaPublicacion: '06.12.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA CAMBIO DE TITULAR DE LA PATENTE DE ALCOHOL ROL N° 400271 Y PATENTE COMERCIAL ROL N° 202881 A NOMBRE DEL SR. JUAN MIGUEL GARRIDO AGUILERA.' },
    { numero: '2294', fecha: '08.10.2015', fechaPublicacion: '06.11.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Exentos', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 202350.' },
    { numero: '2291', fecha: '08.10.2015', fechaPublicacion: '06.11.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Exentos', descripcion: 'OTORGA CAMBIO DE FERIA LIBRE AL PERMISO ESTACIONADO ROL N° 280101 A NOMBRE DE LA SRA. ROSA MILLALEN PAILLAN.' },
    { numero: '780', fecha: '28.09.2015', fechaPublicacion: '06.10.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA CAMBIO DE TITULAR DE LA PATENTE DE ALCOHOL ROL N° 400281 Y PATENTE COMERCIAL ROL N° 202883 A NOMBRE DEL SR. JUAN MANUEL AVILA CIFUENTES.' },
    { numero: '2189', fecha: '24.09.2015', fechaPublicacion: '07.10.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Exentos', descripcion: 'OTORGA CAMBIO DE FERIA LIBRE AL PERMISO ROL N° 251068 A NOMBRE DE LA SRA. NELLY FIGUEROA.' },
    { numero: '2084', fecha: '10.09.2015', fechaPublicacion: '07.10.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Exentos', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 203088.' },
    { numero: '2051', fecha: '08.09.2015', fechaPublicacion: '07.10.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Exentos', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 203147.' },
    { numero: '1863', fecha: '18.08.2015', fechaPublicacion: '06.09.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Exentos', descripcion: 'OTORGA CAMBIO DE FERIA LIBRE AL PERMISO ROL N° 251390 A NOMBRE DEL SR. PABLO CORNEJO RIQUELME.' },
    { numero: '1655', fecha: '29.07.2015', fechaPublicacion: '06.08.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Exentos', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 201719.' },
    { numero: '1610', fecha: '27.07.2015', fechaPublicacion: '06.08.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Exentos', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR Y CAMBIO DE MODALIDAD A LA PATENTE COMERCIAL ROL N° 202189.' },
    { numero: '528', fecha: '14.07.2015', fechaPublicacion: '06.08.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA CAMBIO DE TITULAR Y TRASLADO DE LA PATENTE DE ALCOHOL ROL N° 400198 Y PATENTE COMERCIAL ROL N° 202963 A NOMBRE DEL SR. RAFAEL PEZOA AREVALO.' },
    { numero: '1461', fecha: '13.07.2015', fechaPublicacion: '06.08.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Exentos', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 202192.' },
    { numero: '1458', fecha: '13.07.2015', fechaPublicacion: '06.08.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Exentos', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 203094.' },
    { numero: '468', fecha: '23.06.2015', fechaPublicacion: '06.07.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA CAMBIO DE TITULAR DE LA PATENTE DE ALCOHOL ROL N° 400004 Y PATENTE COMERCIAL ROL N° 202925 A NOMBRE DE LA SRA. ANDREA DEL CARMEN OLAVE TRONCOSO.' },
    { numero: '467', fecha: '23.06.2015', fechaPublicacion: '06.07.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA CAMBIO DE TITULAR DE LA PATENTE DE ALCOHOL ROL N° 400229 Y PATENTE COMERCIAL ROL N° 202974 A NOMBRE DEL SR. JUAN ALBORNOZ BARRERA.' },
    { numero: '460', fecha: '18.06.2015', fechaPublicacion: '06.07.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA CAMBIOS DE TITULAR, DE LA PATENTE DE ALCOHOL ROL N° 200913 Y PATENTE COMERCIAL ROL N° 200913 A NOMBRE DE LA SUCESION CATALAN HERMANOS.' },
    { numero: '453', fecha: '15.06.2015', fechaPublicacion: '06.07.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA CAMBIO DE TITULAR, DE LA PATENTE DE ALCOHOL ROL N° 400113 Y PATENTE COMERCIAL ROL N° 202943 A NOMBRE DEL SR. JOSE ERNESTO CANALES FERNANDEZ.' },
    { numero: '1131', fecha: '03.06.2015', fechaPublicacion: '06.07.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Exentos', descripcion: 'AUTORIZA EL CAMBIO DE NOMBRE - RAZON SOCIAL A LA PATENTE COMERCIAL ROL N° 203146.' },
    { numero: '1127', fecha: '03.06.2015', fechaPublicacion: '06.07.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Exentos', descripcion: 'OTORGA CAMBIO DE FERIA LIBRE AL PERMISO ROL N° 251449 A NOMBRE DEL SR. ANDRES CORDERO CASTRO.' },
    { numero: '228', fecha: '31.03.2015', fechaPublicacion: '06.04.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'APRUEBA CAMBIO DE TITULAR, DE LA PATENTE DE ALCOHOL ROL N° 400151 Y PATENTE COMERCIAL ROL N° 200410 A NOMBRE DEL SR. DAGOBERTO ENRIQUE SALGADO GONZALEZ.' },
    { numero: '459', fecha: '27.02.2015', fechaPublicacion: '06.03.2015, Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '18.03.2015', tipoNorma: 'Decretos Exentos', descripcion: 'OTORGA CAMBIO DE FERIA LIBRE AL PERMISO ROL N° 251426.' },
    { numero: '75', fecha: '26.01.2015', fechaPublicacion: '06.02.2015, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decretos Alcaldicios', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR DE LAS PATENTES COMERCIAL ROL N° 202927 Y DE ALCOHOLES ROL N° 400007 A NOMBRE DE LA SRA. VICTORIA GRISSEL ALVAREZ PEÑA.' }
  ]),
  '2014': crearRegistrosCambioRazonSocial([
    { numero: '3616', fecha: '17.12.14', fechaPublicacion: '06.01.2015, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA CAMBIO NOMBRE CHEQUE OTORGADO A LA ORGANIZACION CENTRO DE PADRES Y APODERADOS "JARDIN INFANTIL MUNDO FELIZ".' },
    { numero: '3573', fecha: '11.12.14', fechaPublicacion: '06.01.2015, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR DE LA PATENTE DE ALCOHOL ROL N° 400219 Y PATENTE COMERCIAL AL SR. HUGO ALEJANDRO CARCAMO BERNACHEA.' },
    { numero: '3572', fecha: '11.12.14', fechaPublicacion: '06.01.2015, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR DE LA PATENTE DE ALCOHOL ROL N° 400298 Y PATENTE COMERCIAL ROL N° 202991 A NOMBRE DE LA SRA. MARIA VERONICA LOZANO OCUPA.' },
    { numero: '3141', fecha: '04.11.14', fechaPublicacion: '06.12.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR Y CAMBIO DE MODALIDAD A LA PATENTE COMERCIAL ROL N° 100095.' },
    { numero: '3137', fecha: '04.11.14', fechaPublicacion: '06.12.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 201770.' },
    { numero: '3132', fecha: '04.11.14', fechaPublicacion: '06.12.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR Y CAMBIO DE MODALIDAD A LA PATENTE COMERCIAL ROL N° 200691.' },
    { numero: '3084', fecha: '29.10.14', fechaPublicacion: '06.11.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 202161.' },
    { numero: '3045', fecha: '27.10.14', fechaPublicacion: '06.11.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 202325 A NOMBRE DE EDUARDO BRICEÑO LLABRES.' },
    { numero: '2969', fecha: '21.10.14', fechaPublicacion: '06.11.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR DE LA PATENTE DE ALCOHOL ROL N° 400446 Y PATENTE COMERCIAL ROL N° 201187 A NOMBRE DE LA SOCIEDAD COMERCIAL SAN ESTEBAN LIMITADA.' },
    { numero: '2850', fecha: '10.10.14', fechaPublicacion: '06.11.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR Y CAMBIO DE MODALIDAD A LA PATENTE COMERCIAL ROL N° 201267.' },
    { numero: '2838', fecha: '09.10.14', fechaPublicacion: '06.11.2014, Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '23.12.14', enlaceModificacion: 'PDF', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR DE LA PATENTE DE ALCOHOL ROL N° 400088 Y PATENTE COMERCIAL ROL N° 202941 A NOMBRE DE LA SRA. KELY ARACELY CARRASCO RIVERA.' },
    { numero: '2704', fecha: '26.09.14', fechaPublicacion: '06.10.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR DE LA PATENTE DE ALCOHOL ROL N° 400056 Y PATENTE COMERCIAL ROL N° 203017 A NOMBRE DEL SR. JUSTO JARA JARAMILLO.' },
    { numero: '2589', fecha: '12.09.14', fechaPublicacion: '06.10.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 203088.' },
    { numero: '2304', fecha: '14.08.14', fechaPublicacion: '06.09.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'APRUEBA CAMBIO DE TITULAR Y TRASLADO, DE LA PATENTE DE ALCOHOL, ROL N° 400100 A NOMBRE DE LA SRA. CINDY STEPHANIE HURTADO BEGAZO.' },
    { numero: '2233', fecha: '06.08.14', fechaPublicacion: '06.08.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 201901.' },
    { numero: '1959', fecha: '10.07.14', fechaPublicacion: '06.08.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA CAMBIO DE TITULAR DE LAS PATENTES DE ALCOHOL ROL N° 400171 Y COMERCIAL ROL N° 200830 A NOMBRE DE LA SRA. GLORIA DEL CARMEN BUSTAMANTE AEDO.' },
    { numero: '1844', fecha: '03.07.14', fechaPublicacion: '06.07.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA CAMBIO DE TITULAR Y CAMBIO DE GIRO A LA PATENTE COMERCIAL ROL N° 203113 A NOMBRE DE LA SRA. KATHERINE QUINTEROS CABRERA.' },
    { numero: '1802', fecha: '30.06.14', fechaPublicacion: '06.07.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'CAMBIO DE TITULAR PATENTE DE ALCOHOL.' },
    { numero: '1587', fecha: '18.06.14', fechaPublicacion: '06.07.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR DE LAS PATENTES DE ALCOHOLES ROL N° 400126 Y COMERCIAL ROL N° 202877 A NOMBRE DEL SR. ELIAS PINTO NAVARRETE.' },
    { numero: '1586', fecha: '18.06.14', fechaPublicacion: '06.07.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR DE LAS PATENTES DE ALCOHOLES ROL N° 400007 Y COMERCIAL ROL N° 202927 A NOMBRE DE LA SRA. MARIA ROJAS PACHECO.' },
    { numero: '1564', fecha: '16.06.14', fechaPublicacion: '06.07.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL A NOMBRE DEL SR. JAIME ORTIZ AGUAYO POR EL DE LA SRA. MIRTA VENEGAS AZUA.' },
    { numero: '1356', fecha: '22.05.14', fechaPublicacion: '06.06.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR DE LAS PATENTES DE ALCOHOLES ROL N° 400246 Y COMERCIAL ROL N° 200835 A NOMBRE DE ROSA ORTIZ GALLARDO Y OTROS.' },
    { numero: '1257', fecha: '12.05.14', fechaPublicacion: '06.06.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'APRUEBA CAMBIO DE TITULAR Y TRASLADO, DE LA PATENTE DE ALCOHOL ROL N° 400184 Y PATENTE COMERCIAL ROL N° 202081 A NOMBRE DE JOSE JULIAN SEPULVEDA SAN MARTIN.' },
    { numero: '1149', fecha: '28.04.14', fechaPublicacion: '06.05.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 200454 A NOMBRE DEL SR. CESAR MELLA MOLINA.' },
    { numero: '1070', fecha: '21.04.14', fechaPublicacion: '06.05.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'APRUEBA CAMBIO DE TITULAR DE LA PATENTE DE ALCOHOL ROL N° 400460 Y PATENTE COMERCIAL ROL N° 203060 A NOMBRE DE DON RENE ALFREDO MILLAN PEREDO.' },
    { numero: '1069', fecha: '21.04.14', fechaPublicacion: '06.05.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'APRUEBA CAMBIO DE TITULAR DE LA PATENTE DE ALCOHOL ROL N° 400264 Y PATENTE COMERCIAL ROL N° 202980 A NOMBRE DE DON MANUEL GUILLERMO CERDA GONZALEZ.' },
    { numero: '1068', fecha: '21.04.14', fechaPublicacion: '06.05.2014, Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'APRUEBA CAMBIO DE TITULAR DE LA PATENTE DE ALCOHOL ROL N° 400589 Y PATENTE COMERCIAL ROL N° 201715 A NOMBRE DE DON ARTURO ALARCON SANZANA.' },
    { numero: '936', fecha: '07.04.14', fechaPublicacion: '25.04.2014, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'APRUEBA CAMBIO DE TITULAR, TRASLADO DE LA PATENTE DE ALCOHOL ROL N° 400407 Y PATENTE COMERCIAL ROL N° 202954 A NOMBRE DEL SR. FERNANDO ENRIQUE ANTUCCI TAPIA.' },
    { numero: '930', fecha: '07.04.14', fechaPublicacion: '25.04.2014, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 201187.' },
    { numero: '928', fecha: '07.04.14', fechaPublicacion: '25.04.2014, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'AUTORIZA CAMBIO DE RAZON SOCIAL Y RUT PATENTE ROL N° 202153 A NOMBRE DE OPERADORA DE TARJETAS LIDER SERVICIOS FINANCIEROS.' },
    { numero: '763', fecha: '20.03.14', fechaPublicacion: '06.04.2014, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR DE LA PATENTE COMERCIAL ROL N° 201202.' },
    { numero: '219', fecha: '22.01.14', fechaPublicacion: '06.02.2014, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'Autoriza el cambio de titular de las patentes comercial rol N° 200069 y patente de alcoholes rol N° 400203 a nombre del sr. Jhon Matamala Ciro.' },
    { numero: '218', fecha: '22.01.14', fechaPublicacion: '06.02.2014, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'Autoriza el cambio de titular de la patente de alcoholes rol N° 400161 a nombre del sr. Roberto Antonio Farias Santelices.' },
    { numero: '174', fecha: '21.01.14', fechaPublicacion: '06.02.2014, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'Autoriza el cambio de titular de las patentes comercial rol N° 202932 y de alcoholes rol N° 400032 a nombre del sr. Elias Demetrio Contreras Nuñez.' },
    { numero: '126', fecha: '17.01.14', fechaPublicacion: '06.02.2014, Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'Autoriza el cambio de titular de las patentes comercial rol N° 202932 y de alcoholes rol N° 400032 a nombre del sr. Miguel Antonio Quiroz Abarzua.' }
  ]),
  '2013': crearRegistrosCambioRazonSocial([
    { numero: '104', fecha: '09.01.13', fechaPublicacion: '01.03.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'AUTORIZA CAMBIO DE TITULAR A LA PATENTE ROL N° 200388 A NOMBRE DE JOSE PEREIRA CODOCEO.' },
    { numero: '272', fecha: '22.01.13', fechaPublicacion: '01.03.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'APRUEBA CAMBIO DE TITULAR, TRASLADO DE LA PATENTE ROL N° 400588 A NOMBRE DEL SR. RICHARD NEIRA CARRILLO.' },
    { numero: '319', fecha: '23.01.13', fechaPublicacion: '01.03.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'APRUEBA EL CAMBIO DE TITULAR DE LAS PATENTES ROLES N° 20006, 40044, 40057 A NOMBRE DE JUANA ANGEL ARCE POR JUANA GARCIA ARCE.' },
    { numero: '372', fecha: '25.01.13', fechaPublicacion: '01.03.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE RAZON SOCIAL DE LA PATENTE ROL N° 202542.' },
    { numero: '402', fecha: '29.01.13', fechaPublicacion: '01.03.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'APRUEBA CAMBIO DE TITULAR, TRASLADO DE LA PATENTE ROL N° 400126 A NOMBRE DE LA SRA. HILDA PAREDES ASTUDILLO.' },
    { numero: '406', fecha: '30.01.13', fechaPublicacion: '01.03.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE RAZON SOCIAL DE LA PATENTE ROL N° 20079.' },
    { numero: '695', fecha: '28.02.13', fechaPublicacion: '15.03.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE RAZON SOCIAL DE LA PATENTE ROL N° 2005952 SRA. ANA MORA PEREZ.' },
    { numero: '711', fecha: '01.03.13', fechaPublicacion: '15.03.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE RAZON SOCIAL DE LA PATENTE COMERCIAL ROL N° 201719 DE SRA. JOCELYN SOTO SALGADO.' },
    { numero: '768', fecha: '12.03.13', fechaPublicacion: '05.04.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'APRUEBA CAMBIO DE TITULAR, TRASLADO DE LA PATENTE ROL N° 400092 A NOMBRE DE LA SRA. MARISOL DEL CARMEN DIAZ MUÑOZ.' },
    { numero: '984', fecha: '03.04.13', fechaPublicacion: '05.04.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'OTORGA CAMBIO DE FERIA LIBRE AL TITULAR DE LA PATENTE ROL N° 251255 A NOMBRE DEL SR. RICARDO ROMEROMELLA.' },
    { numero: '1225', fecha: '26.04.13', fechaPublicacion: '03.05.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'AUTORIZA CAMBIO DE TITULAR A LA PATENTE DE ALCOHOLES ROL N° 400583 DE SRA. JULIA ROSA MANQUEOJARAMILLO.' },
    { numero: '1408', fecha: '16.05.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 155470 A NOMBRE MARIO SALINAS ROBLES POR EL DE AMANDA CASTRO VARGAS.' },
    { numero: '1528', fecha: '07.06.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'APRUEBA CAMBIO DE TITULAR, TRASLADO DE LAS PATENTES ROLES N° 400061 Y N° 202187 A NOMBRE DEL CENTRO DE EVENTOS PEDRO FERNANDEZ E.I.R.L.' },
    { numero: '1930', fecha: '09.07.13', fechaPublicacion: '09.08.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'APRUEBA CAMBIO DE TITULAR, TRASLADO DE LA PATENTE ROL N° 400292 A NOMBRE DE LA SRA. TANIA ANDREA MALDONADO CARRASCO.' },
    { numero: '1959', fecha: '12.07.13', fechaPublicacion: '09.08.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE COMERCIAL ROL N° 202292.' },
    { numero: '1992', fecha: '18.07.13', fechaPublicacion: '09.08.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR A LA PATENTE DE ALCOHOLES ROL N° 400003 A NOMBRE DE LA SRA. ROMINA OLGUIN HERRERA.' },
    { numero: '2046', fecha: '25.07.13', fechaPublicacion: '09.08.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR DE LAS PATENTES COMERCIAL ROL N° 200336.' },
    { numero: '2048', fecha: '25.07.13', fechaPublicacion: '09.08.2013 Página Web', tieneEfectosGenerales: 'Sí', tipoNorma: 'Decreto', descripcion: 'AUTORIZA EL CAMBIO DE TITULAR DE LAS PATENTES COMERCIAL ROL N° 202970 Y DE ALCOHOLES ROL N° 400218 A NOMBRE DE LA SRA. GRACIELA PANGUINAO NAHUELHUIR.' },
    { numero: '2345', fecha: '22.08.13', fechaPublicacion: '06.09.2013 Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'APRUEBA EL CAMBIO DE TITULAR DE LAS PATENTES ROLES N° 202301, ROL N° 40271, A NOMBRE DE LA SRA. CARMEN ROSA NUÑEZ TAPIA.' },
    { numero: '2558', fecha: '12.09.13', fechaPublicacion: '06.10.2013 Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'Autoriza el cambio de titular a la patente comercial rol N° 201390 a nombre de salvador farias ibarra.' },
    { numero: '2612', fecha: '23.09.13', fechaPublicacion: '06.10.2013 Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'Autoriza el cambio de titular a la patente rol N° 202296 a nombre de la sra. Tatiana toledo yañez.' },
    { numero: '2690', fecha: '01.10.13', fechaPublicacion: '06.11.2013 Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'Autoriza el cambio de titular a la patente comercial rol N° 202478 a nombre de herberto rojas fuentes.' },
    { numero: '3148', fecha: '13.12.13', fechaPublicacion: '06.01.2014 Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'Aprueba el cambio de titular de la patente de combustibles rol N° 400477 y comercial rol N° 203004 a nombre del sr. Ricardo aravena sandoval.' },
    { numero: '3149', fecha: '13.12.13', fechaPublicacion: '06.01.2014 Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'Aprueba el cambio de titular de la patente de combustibles rol N° 400423 y comercial rol N° 202955 a nombre del sr. Claudio anibal quiroz guevara.' },
    { numero: '3180', fecha: '16.12.13', fechaPublicacion: '06.01.2014 Página Web', tieneEfectosGenerales: 'No', tipoNorma: 'Decreto', descripcion: 'Autoriza el cambio de titular a la patente comercial rol N° 201080 de sra. Teresa de jesus verdejo saavedra.' }
  ]),
  '2012': [],
  '2011': [],
  '2010': [],
  '2009': []
};
