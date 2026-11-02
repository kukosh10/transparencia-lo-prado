import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['LÓPEZ', 'PAREDES', 'JUAN'],
  ['MANRÍQUEZ', 'MUÑOZ', 'ADRIANA'],
  ['BROOKE', 'REYES', 'BÁRBARA'],
  ['FREZ', 'DURÁN', 'EDELMIRA'],
  ['DEL PINO', 'PINO', 'JUANA'],
  ['GARCÍA', 'PICEROS', 'HERIBERTO'],
  ['NAVARRO', 'NAVARRO', 'ALICIA'],
  ['QUIROZ', 'AGUIRRE', 'JOSÉ'],
  ['RETAMALES', 'OLGUÍN', 'VIOLETA'],
  ['DÁZA', 'BERMÚDEZ', 'WILLIAM'],
  ['CARRIZO', 'GONZÁLEZ', 'CARLOS'],
  ['CASTRO', 'ZÚÑIGA', 'TERESA'],
  ['OSSES', 'ARAVENA', 'ALICIA'],
  ['CÁCERES', 'SALAVIERRA', 'JUANA'],
  ['PINO', 'MEDINA', 'ALBINA'],
  ['PAVEZ', 'MESA', 'ROSA'],
  ['TORO', 'LEÓN', 'GLADYS'],
  ['COLIQUEO', 'RAPIMÁN', 'PEDRO'],
  ['ASTUDILLO', 'MONSALVE', 'NORMA'],
  ['MOJICA', 'CORNEJO', 'RICARDO'],
  ['ADONES', 'CANO', 'DANILO'],
  ['CARIQUEO', 'MELLADO', 'SONIA'],
  ['LARA', 'JARA', 'EDITH'],
  ['CARROZA', 'VARGAS', 'FABIÁN'],
  ['RIVERA', 'CARMONA', 'MARGARITA'],
  ['MARTÍNEZ', 'DÍAZ', 'ALVARO'],
  ['SILVA', 'RIVERA', 'LUCÍA'],
  ['YÁÑEZ', 'BUSTOS', 'PATRICIA'],
  ['SEGUEL', 'PULGAR', 'EDUARDO'],
  ['SALINAS', 'PÉREZ', 'MARCELA'],
  ['VILLARROEL', 'PINO', 'ALEJANDRO'],
  ['RÍOS', 'MELLA', 'JOSÉ'],
  ['GONZÁLEZ', 'LÓPEZ', 'ROSA']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2011_Julio() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Julio"
      anio="2011"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 1030"
      fechaOtorgamiento="01.07.2011"
    />
  );
}
