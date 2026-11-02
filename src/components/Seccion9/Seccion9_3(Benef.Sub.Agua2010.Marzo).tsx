import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['ALVAREZ', 'OPAZO', 'MAIDEY'],
  ['VILCHES', 'SÁNCHEZ', 'ELIAS'],
  ['ARAVENA', 'PÉREZ', 'ALICIA'],
  ['LILLO', 'TRONCOSO', 'GRISELDA'],
  ['ORTUZAR', 'DÍAZ', 'ROSA'],
  ['RIVERA', 'CHAVEZ', 'AURISTELA'],
  ['GUTIÉRREZ', 'BAVESTRELLO', 'JOHANNA'],
  ['MORALES', 'MELLADO', 'GRACIELA'],
  ['PÉREZ', 'GARRIDO', 'NORA'],
  ['BARRA', 'IBÁÑEZ', 'MARIO'],
  ['HERRERA', 'TORRES', 'EDUARDO'],
  ['VEGA', 'CALVEZ', 'NÉLIDA'],
  ['LEÓN', 'VILLEGAS', 'ARTURO'],
  ['ALIAGA', 'ALIAGA', 'ZOILA'],
  ['FIGUEROA', '', 'ZULEMA'],
  ['VILCHES', 'TRONCOSO', 'FLORINDA']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2010_Marzo() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Marzo"
      anio="2010"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 358 19.02.2010"
      fechaOtorgamiento="01.03.2010"
    />
  );
}
