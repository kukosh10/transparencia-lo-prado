import type { PatenteHistorico } from './Seccion7_6Patentes';

interface FilaKiosco {
  numero: string;
  fecha: string;
  fechaPublicacion: string;
  descripcion: string;
  tieneEfectosGenerales?: string;
  ultimaActualizacion?: string;
  enlaceModificacion?: string;
  tipoNorma?: string;
}

const crearPermisosKiosco = (filas: FilaKiosco[]): PatenteHistorico[] =>
  filas.map(({
    numero,
    fecha,
    fechaPublicacion,
    descripcion,
    tieneEfectosGenerales = 'Sí',
    ultimaActualizacion = 'Sin Modificaciones',
    enlaceModificacion = 'Sin Modificaciones',
    tipoNorma = 'Decreto'
  }) => ({
    tipoNorma,
    denominacion: 'Patentes y Permisos',
    nombreTitulo: 'Permiso Kiosco',
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

export const permisosKioscoPorAnio: Record<string, PatenteHistorico[]> = {
  '2016': crearPermisosKiosco([
    { numero: '817', fecha: '21.03.2016', fechaPublicacion: '05.04.2016, Página Web', descripcion: 'OTORGA PERMISO DE KIOSKO EN LA VIA PUBLICA A LA SRA. ELIZABETH HERNANDEZ AHUMADA.', tipoNorma: 'Decretos Exentos' },
    { numero: '816', fecha: '21.03.2016', fechaPublicacion: '05.04.2016, Página Web', descripcion: 'OTORGA PERMISO DE KIOSKO EN LA VIA PUBLICA A LA SRA. KATHERINE ORMEÑO LAGO.', tipoNorma: 'Decretos Exentos' }
  ]),
  '2015': crearPermisosKiosco([
    { numero: '2768', fecha: '07.12.2015', fechaPublicacion: '10.12.2015, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. LUIS ORTEGA RIQUELME.', tipoNorma: 'Decretos Exentos' },
    { numero: '2114', fecha: '17.09.2015', fechaPublicacion: '07.10.2015, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. ANTONIO VALDEBENITO AQUEVEQUE.', tipoNorma: 'Decretos Exentos' },
    { numero: '1795', fecha: '12.08.2015', fechaPublicacion: '06.09.2015, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. AURELIA ZEPEDA BAEZA.', tipoNorma: 'Decretos Exentos' },
    { numero: '1407', fecha: '08.07.2015', fechaPublicacion: '06.08.2015, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. SARA ARAYA RODRIGUEZ.', tipoNorma: 'Decretos Exentos' },
    { numero: '1402', fecha: '08.07.2015', fechaPublicacion: '06.08.2015, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. SEBASTIAN CLAVERO MUÑOZ.', tipoNorma: 'Decretos Exentos' },
    { numero: '856', fecha: '16.04.2015', fechaPublicacion: '06.05.2015, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. JOSE GONZALEZ MORAGA.', tipoNorma: 'Decretos Exentos' },
    { numero: '638', fecha: '20.03.2015', fechaPublicacion: '06.04.2015, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. ALEXIS VILCHES QUIROZ.', tipoNorma: 'Decretos Exentos' },
    { numero: '597', fecha: '16.03.2015', fechaPublicacion: '06.04.2015, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO Y AUTORIZA EL CAMBIO DE MODALIDAD AL PERMISO ROL N° 280244.', tipoNorma: 'Decretos Exentos' },
    { numero: '411', fecha: '23.02.2015', fechaPublicacion: '06.03.2015, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. JORGE SANTANA ALFARO.', tipoNorma: 'Decretos Exentos' },
    { numero: '312', fecha: '06.02.2015', fechaPublicacion: '06.03.2015, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. VERONICA FREZ ROJAS.', tipoNorma: 'Decretos Exentos' },
    { numero: '266', fecha: '05.02.2015', fechaPublicacion: '06.03.2015, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. EDITH HUENCHULLAN CONTRERAS.', tipoNorma: 'Decretos Exentos' },
    { numero: '20', fecha: '05.01.2015', fechaPublicacion: '06.02.2015, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. RICARDO ARADENA ROMERO.', tipoNorma: 'Decretos Exentos' }
  ]),
  '2014': crearPermisosKiosco([
    { numero: '2790', fecha: '03.10.2014', fechaPublicacion: '06.11.2014, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. ZUGEY VASQUEZ NUÑEZ.', tieneEfectosGenerales: 'No', ultimaActualizacion: '28.11.2014', enlaceModificacion: 'PDF' },
    { numero: '1974', fecha: '15.07.2014', fechaPublicacion: '06.08.2014, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. ARISTEO HUAQUIQUE PACHECO.', tieneEfectosGenerales: 'No', ultimaActualizacion: '31.07.2014', enlaceModificacion: 'PDF' },
    { numero: '1480', fecha: '09.06.2014', fechaPublicacion: '06.07.2014, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. MARIA MATELUNA QUEZADA.', tieneEfectosGenerales: 'No' },
    { numero: '1118', fecha: '23.04.2014', fechaPublicacion: '06.05.2014, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. EUGENIA HENRIQUEZ ESPINOZA.', tieneEfectosGenerales: 'No' },
    { numero: '777', fecha: '21.03.2014', fechaPublicacion: '06.04.2014, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. MARGARITA MORAGA VIVAS.' },
    { numero: '579', fecha: '28.02.2014', fechaPublicacion: '06.03.2014, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. HERNAN VIVANCO FARFAN.' },
    { numero: '488', fecha: '18.02.2014', fechaPublicacion: '06.03.2014, Página Web', descripcion: 'Otorga permiso de kiosco en la via publica al sr. Marcelo Carrasco Torrens.' },
    { numero: '152', fecha: '20.01.2014', fechaPublicacion: '06.02.2014, Página Web', descripcion: 'Otorga permiso de kiosco en la via publica al sr. Hugo Armijo Gonzalez.' }
  ]),
  '2013': crearPermisosKiosco([
    { numero: '373', fecha: '25.01.2013', fechaPublicacion: '01.03.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. JESSICA PINTO MEZA.', enlaceModificacion: 'Sin Modificación' },
    { numero: '1333', fecha: '09.05.2013', fechaPublicacion: '21.06.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. JACQUELINE NUDELMAN LOBOS.', enlaceModificacion: 'Sin Modificación' },
    { numero: '1402', fecha: '16.05.2013', fechaPublicacion: '21.06.2013, Página Web', descripcion: 'MODIFICA DECRETO ALCALDICIO N° 1062 DE FECHA 16 DE ABRIL DE 2013 EN EL SENTIDO QUE DEBE DECIR KIOSCO, EN VEZ DE ESTACIONADO.', enlaceModificacion: 'Sin Modificación' },
    { numero: '1560', fecha: '04.06.2013', fechaPublicacion: '21.06.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. GENOVEVA PIÑA GONZALEZ.', enlaceModificacion: 'Sin Modificación' },
    { numero: '1980', fecha: '17.07.2013', fechaPublicacion: '09.08.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. CARMEN CASTILLO LUCERO.', enlaceModificacion: 'Sin Modificación' },
    { numero: '2206', fecha: '12.08.2013', fechaPublicacion: '22.08.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. JOSE VARGAS VEAS.', enlaceModificacion: 'Sin Modificación' },
    { numero: '2405', fecha: '28.08.2013', fechaPublicacion: '06.09.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. MARICELLA JARA MENDEZ.', tieneEfectosGenerales: 'No', enlaceModificacion: 'Sin Modificación' },
    { numero: '2807', fecha: '10.10.2013', fechaPublicacion: '06.11.2013, Página Web', descripcion: 'Otorga permiso de kiosco en la via publica a la sra. Jennifer Marin Navarrete.', tieneEfectosGenerales: 'No', enlaceModificacion: 'Sin Modificación' }
  ]),
  '2012': crearPermisosKiosco([
    { numero: '461', fecha: '09.02.2012', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. SONIA SOTO GONZALEZ.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '462', fecha: '09.02.2012', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. JAIME MEJIAS MUÑOZ.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '1275', fecha: '16.05.2012', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. SUSANA GODOY ORELLANA.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '1423', fecha: '04.06.2012', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. MARIA FLORES FLORES.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '1485', fecha: '11.06.2012', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. HERNAN RUIZ URIBE.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2603', fecha: '10.10.2012', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. JAIME BRAVO GONZALEZ.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2781', fecha: '08.11.2012', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. GLORIA BAHAMONDES BARRIA.', enlaceModificacion: 'Sin Enlaces' }
  ]),
  '2011': crearPermisosKiosco([
    { numero: '25', fecha: '06.01.2011', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. DIONILA ESPINOZA GOMEZ.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '163', fecha: '21.01.2011', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. MONICA MADARIAGA CONTRERAS.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '464', fecha: '03.03.2011', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'AUTORIZA TRANSFERENCIA DE PATENTE DE KIOSCO ROL N° 260344.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '748', fecha: '11.04.2011', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. MERCEDES ROMAN RAMIREZ.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '1046', fecha: '25.05.2011', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. BELISARIO LAZARTE PAVEZ.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '1509', fecha: '13.07.2011', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. CLAUDIO ALEGRIA SALDIVAR.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2015', fecha: '14.09.2011', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'AUTORIZA EL TRASLADO DE KIOSCO AL PERMISO ROL N° 260139 A NOMBRE DEL SR. EMILIO MUÑOZ ALVAREZ.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2056', fecha: '22.09.2011', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. HECTOR FARIAS PINO.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2202', fecha: '11.10.2011', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. HERNAN POZAS GOMEZ.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2405', fecha: '27.10.2011', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. INGER DONATO ROMERO.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2408', fecha: '27.10.2011', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO A LA SRA. ROMINA COFRE FUENTES.', enlaceModificacion: 'Sin Enlaces' },
    { numero: '2500', fecha: '11.11.2011', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. SONIA OJEDA TENORIO.', enlaceModificacion: 'Sin Enlaces' }
  ]),
  '2010': crearPermisosKiosco([
    { numero: '472', fecha: '10.03.2010', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. RUTH BLICHE MUÑOZ.', enlaceModificacion: 'Sin enlace' },
    { numero: '850', fecha: '03.05.2010', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'ORDENA EL RETIRO DE KIOSCO ROL N° 260321 A NOMBRE DE LA SRA. SANDRA QUIROZ ARMIO.', enlaceModificacion: 'Sin enlace' },
    { numero: '1111', fecha: '09.06.2010', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PATENTE DE KIOSCO EN LA VIA PUBLICA AL SR. JOSE RODRIGO PEREZ TORO.', enlaceModificacion: 'Sin enlace' },
    { numero: '1241', fecha: '01.07.2010', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. JAIME AHUMADA REYES.', enlaceModificacion: 'Sin enlace' },
    { numero: '1242', fecha: '01.07.2010', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. MARIA HIDALGO HIDALGO.', enlaceModificacion: 'Sin enlace' },
    { numero: '1251', fecha: '01.07.2010', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. ELIZABETH TORRES MEZA.', enlaceModificacion: 'Sin enlace' },
    { numero: '1467', fecha: '01.08.2010', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. JORGE CARCACHO ARAYA.', enlaceModificacion: 'Sin enlace' },
    { numero: '1618', fecha: '30.08.2010', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. HUGO OYARZUN BARAHONA.', enlaceModificacion: 'Sin enlace' },
    { numero: '1674', fecha: '07.09.2010', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PATENTE COMERCIAL A SOCIEDAD O & B GROUP PARK S.A., EN KIOSCO UBICADO EN SALIDA SUR LADO ORIENTE ESTACION METRO PAJARITOS.', enlaceModificacion: 'Sin enlace' },
    { numero: '1676', fecha: '07.09.2010', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PATENTE COMERCIAL A SOCIEDAD O & B GROUP PARK S.A., EN KIOSCO UBICADO EN GENERAL BONILLA N° 5600.', enlaceModificacion: 'Sin enlace' },
    { numero: '1690', fecha: '08.09.2010', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. MIRTA VALVERDE FARFAN.', enlaceModificacion: 'Sin enlace' },
    { numero: '1710', fecha: '13.09.2010', fechaPublicacion: '29.04.2013, Página Web', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. MARTIN BURGOS MONTECINOS.', enlaceModificacion: 'Sin enlace' }
  ]),
  '2009': crearPermisosKiosco([
    { numero: '78', fecha: '12.01.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. PAOLA GONZALEZ AVILA.', enlaceModificacion: 'Sin enlace' },
    { numero: '161', fecha: '16.01.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. RUTH FONSECA YAÑEZ.', enlaceModificacion: 'Sin enlace' },
    { numero: '174', fecha: '16.01.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. LUIS CARRASCO AYALA.', enlaceModificacion: 'Sin enlace' },
    { numero: '192', fecha: '21.01.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. DELFINA ALCHAO CEA.', enlaceModificacion: 'Sin enlace' },
    { numero: '298', fecha: '02.02.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. ROSA MORALES CORTES.', enlaceModificacion: 'Sin enlace' },
    { numero: '348', fecha: '06.02.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. IRIS GUTIERREZ FUENTES.', enlaceModificacion: 'Sin enlace' },
    { numero: '470', fecha: '26.02.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. RICARDO ROMERO GONZALEZ.', enlaceModificacion: 'Sin enlace' },
    { numero: '483', fecha: '27.02.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. RODRIGO OLIVOS FERNANDEZ.', enlaceModificacion: 'Sin enlace' },
    { numero: '485', fecha: '27.02.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. ADRIANA ROMAN FUENTES.', enlaceModificacion: 'Sin enlace' },
    { numero: '567', fecha: '12.03.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. VERONICA BAHAMONDES ASTORGA.', enlaceModificacion: 'Sin enlace' },
    { numero: '718', fecha: '30.03.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. JUAN MERINO ROMERO.', enlaceModificacion: 'Sin enlace' },
    { numero: '941', fecha: '27.04.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. NANCY CARRASCO URRUTIA.', enlaceModificacion: 'Sin enlace' },
    { numero: '942', fecha: '27.04.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. SILVANA VILCHES RAMIREZ.', enlaceModificacion: 'Sin enlace' },
    { numero: '1022', fecha: '06.05.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. LUCIANO SILVA CANIU.', enlaceModificacion: 'Sin enlace' },
    { numero: '1103', fecha: '19.05.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. HERMINIA JARA CRUZ.', enlaceModificacion: 'Sin enlace' },
    { numero: '1412', fecha: '13.07.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. FELIPE ARAVENA SALAS.', enlaceModificacion: 'Sin enlace' },
    { numero: '1415', fecha: '13.07.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. MARIA LEON ALEGRIA.', enlaceModificacion: 'Sin enlace' },
    { numero: '1416', fecha: '13.07.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. SEBASTIAN MANSILLA CANIO.', enlaceModificacion: 'Sin enlace' },
    { numero: '1417', fecha: '13.07.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. NAYADETH PIZARRO ESCUDERO.', enlaceModificacion: 'Sin enlace' },
    { numero: '1436', fecha: '13.07.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. LIDIA CASTRO CERDA.', enlaceModificacion: 'Sin enlace' },
    { numero: '1717', fecha: '13.08.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. ATILA GOMEZ ROJAS.', enlaceModificacion: 'Sin enlace' },
    { numero: '2032', fecha: '25.09.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA AL SR. DARWIN HERMOSILLA TORRES.', enlaceModificacion: 'Sin enlace' },
    { numero: '2063', fecha: '30.09.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. JENNIFER CARRILLO SANCHEZ.', enlaceModificacion: 'Sin enlace' },
    { numero: '2409', fecha: '26.11.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. ISABEL GARCIA VALENZUELA.', enlaceModificacion: 'Sin enlace' },
    { numero: '2642', fecha: '31.12.2009', fechaPublicacion: 'Página Web, de fecha 29.04.2013', descripcion: 'OTORGA PERMISO DE KIOSCO EN LA VIA PUBLICA A LA SRA. MARIA GONZALEZ CARREÑO.', enlaceModificacion: 'Sin enlace' }
  ])
};
