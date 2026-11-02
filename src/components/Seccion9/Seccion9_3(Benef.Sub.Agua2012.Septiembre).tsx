import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['CABRERA', 'REYES', 'SANDRA DE LAS MERCEDES'],
  ['SALINAS', 'GONZÁLEZ', 'VERÓNICA BERNARDA'],
  ['SAAAVEDRA', 'NUÑEZ', 'JOSÉ MIGUEL'],
  ['MERINO', 'BARRA', 'ANDREA LORENA'],
  ['GONZÁLEZ', 'LÓPEZ', 'MARÍA ANGÉLICA'],
  ['VELEZ', 'VITAGUAY', 'MIRIAM MIRIAM'],
  ['ZUÑIGA', 'QUIN', 'ALBERTO'],
  ['HERNÁNDEZ', 'SALAMANCA', 'CARMEN GLORIA'],
  ['VALENCIA', 'GUZMÁN', 'SERGIO EPIFANIO'],
  ['ROJAS', 'RODRÍGUEZ', 'MOISÉS MAURICIO'],
  ['VASQUEZ', 'BENAVIDES', 'PATRICIA ANGÉLICA'],
  ['FUENTEALBA', 'NERETE', 'MANUEL'],
  ['URBINA', 'VILLEGAS', 'EDUARDO RAMÓN'],
  ['VILCHES', 'JIMÉNEZ', 'MARTA PATRICIA'],
  ['KELLER', 'STANDER', 'MARCELA JESSICA'],
  ['MATAMALA', 'PARRA', 'MARÍA CÉSAR'],
  ['QUIROGA', 'QUIROGA', 'VERÓNICA ANDREA'],
  ['FERNÁNDEZ', 'ROJAS', 'ADELAIDA ROSA'],
  ['OLIVEROS', 'LAZO', 'MANUEL ANTONIO'],
  ['URIBE', 'MONTES', 'HÉCTOR FIDEL'],
  ['SIERRA', 'JAQUE', 'SONIA VIRGINIA'],
  ['FARIAS', 'PINO', 'SONIA VIRGINIA'],
  ['FUENZALIDA', 'MORENO', 'MARÍA VICTORIA'],
  ['SALAS', 'JARA', 'CÉSAR ANTONIO'],
  ['INZUNZA', 'ASTETE', 'JOSÉ NICOLÁS'],
  ['ZÚÑIGA', 'BASCUÑÁN', 'LUIS ALEJANDRO'],
  ['TORRES', 'MUÑOZ', 'MAURICIO EDUARDO'],
  ['MALDONADO', 'MORALES', 'PAMELA MARGARITA'],
  ['CALDERÓN', 'MORENO', 'HILDA ROSA'],
  ['ARANDA', 'ESCOBAR', 'MARÍA DE LAS NIEVES'],
  ['MUÑOZ', 'DÍAZ', 'PAMELA MARGARITA'],
  ['MIQUELEZ', 'NARANJO', 'HILDA DE LAS MERCEDES'],
  ['ROJAS', 'PARRA', 'JOSÉ LUIS'],
  ['COLLIOY', 'CATALÁN', 'JUAN ANTONIO'],
  ['COBOS', 'DEL CARMEN', 'JOSÉ'],
  ['ESCOBAR', 'ULLOA', 'JAQUELINE DEL CARMEN'],
  ['SEPÚLVEDA', 'FUENZALIDA', 'ANA MARÍA'],
  ['MUÑOZ', 'VÁSQUEZ', 'CÉSAR RAÚL']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2012_Septiembre() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Septiembre"
      anio="2012"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 2147"
      fechaOtorgamiento="01.09.2012"
    />
  );
}
