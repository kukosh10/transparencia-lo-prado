import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['MENDOZA', 'HERRERA', 'MIRIAM DEL CARMEN'],
  ['ALVARADO', 'LARA', 'MARÍA ANGÉLICA'],
  ['PÉREZ', 'ALARCÓN', 'PATRICIA DEL CARMEN'],
  ['GONZÁLEZ', 'MEJÍAS', 'GILDA HILDA'],
  ['SALDÍAS', 'MIRANDA', 'ROSA ESTER'],
  ['VARGAS', 'GONZÁLEZ', 'HÉCTOR MANUEL'],
  ['JARA', 'BARRA', 'ELSA DEL CARMEN'],
  ['ROJAS', 'ACUÑA', 'PAULINA INÉS'],
  ['PINO', 'PARRA', 'ALEJANDRA DEL CARMEN'],
  ['SOTO', 'ROJAS', 'JUAN CARLOS'],
  ['CAMPOS', 'PÉREZ', 'MARTA ELENA'],
  ['RIVERA', 'HIDALGO', 'JORGE LUIS'],
  ['CERDA', 'DÍAZ', 'ARMANDO ENRIQUE'],
  ['MELÉNDEZ', 'MORALES', 'VIRGINIA DEL CARMEN'],
  ['PÉREZ', 'COLLAO', 'ALICIA'],
  ['LÓPEZ', 'DOMÍNGUEZ', 'MARGARITA DEL CARMEN'],
  ['ARAVENA', 'MORALES', 'MIGUEL ÁNGEL'],
  ['DÍAZ', 'PÉREZ', 'ELVIRA SOLEDAD'],
  ['FUENTES', 'MARDONES', 'CARLOS ALBERTO'],
  ['GODOY', 'MORAGA', 'LUISA MARÍA'],
  ['CARRASCO', 'MUÑOZ', 'NANCY DEL CARMEN'],
  ['GUTIÉRREZ', 'MELÉNDEZ', 'JUAN FRANCISCO'],
  ['SANHUEZA', 'ROJAS', 'CARMEN GLORIA'],
  ['RODRÍGUEZ', 'MORA', 'ANDREA DEL CARMEN'],
  ['HERRERA', 'DÍAZ', 'LUCÍA TERESA'],
  ['RIQUELME', 'GARCÍA', 'MIGUEL ANGEL'],
  ['CÓRDOBA', 'SAAVEDRA', 'ANA LUISA'],
  ['LAGOS', 'VÁSQUEZ', 'PAOLA ANDREA'],
  ['MARTÍNEZ', 'BARRA', 'JOSÉ RAMÓN'],
  ['NAVARRO', 'DÍAZ', 'NÉLIDA'],
  ['SÁNCHEZ', 'PINO', 'ROSA ELVIRA'],
  ['VÁSQUEZ', 'SILVA', 'CÉSAR AUGUSTO'],
  ['PÉREZ', 'ROJAS', 'MARTA DE LOS ÁNGELES'],
  ['BUSTOS', 'CASTRO', 'RENÉ ORLANDO'],
  ['MALDONADO', 'SOLAR', 'MARGARITA ESTER'],
  ['DURÁN', 'PAREDES', 'NANCY DEL CARMEN'],
  ['FLORES', 'TORRES', 'PEDRO PABLO'],
  ['FIERRO', 'GUAJARDO', 'GLORIA MARGARITA'],
  ['MIRANDA', 'LAGOS', 'SUSANA DEL CARMEN'],
  ['ZAPATA', 'ORTIZ', 'LUIS ANTONIO'],
  ['CORTÍNEZ', 'GONZÁLEZ', 'DIANA ELIZABETH']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2012_Diciembre() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Diciembre"
      anio="2012"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 1848"
      fechaOtorgamiento="20.12.2012"
    />
  );
}
