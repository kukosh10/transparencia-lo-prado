import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['PAVEZ', 'MARTINI', 'GLADYS UMELINDA'],
  ['CUEVAS', 'PAVEZ', 'MARÍA ANGÉLICA'],
  ['GUAJARDO', 'NEGRÓN', 'MARÍA TERESA'],
  ['NÚÑEZ', 'CORTÉS', 'PAOLA MARISOL'],
  ['AGUIRRE', 'ABARZÚA', 'VALERIA ELENA'],
  ['COLLINAO', 'COLLINAO', 'NORMA'],
  ['NAVARRO', 'CASTILLO', 'MARGARITA YOLANDA'],
  ['OLEA', 'MARAMBIO', 'RENE ERNESTO']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2009_Febrero() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Febrero"
      anio="2009"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 183 20.01.2009"
      fechaOtorgamiento="01.02.2009"
    />
  );
}
