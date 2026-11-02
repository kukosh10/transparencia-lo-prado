import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['TORRES', 'ANDIA', 'SARA'],
  ['CARRIÓN', 'PALESTRO', 'PATRICIA EUGENIA'],
  ['VIA', 'MARABOLÍ', 'DANIELA ALEJANDRA'],
  ['DÍAZ', 'VARGAS', 'MARÍA INÉS'],
  ['HERNÁNDEZ', 'CIUDAD', 'VIRGEN IRENE'],
  ['MOYA', 'GUTIÉRREZ', 'GLADYS LUCÍA'],
  ['SANDOVAL', 'ITURRIAGA', 'ROSA SILVIA'],
  ['ARANEDA', 'JARA', 'CELMIRA']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2012_Marzo() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Marzo"
      anio="2012"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 530"
      fechaOtorgamiento="01.03.2012"
    />
  );
}
