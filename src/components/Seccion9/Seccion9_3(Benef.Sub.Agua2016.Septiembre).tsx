import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['GONZÁLEZ', 'OYARZÚN', 'ANA ALICIA'],
  ['GÓMEZ', 'ASTORGA', 'MIGUEL PATRICIO'],
  ['LEÓN', 'VILLEGAS', 'ARTURO'],
  ['GAMBOA', 'MORALES', 'REBECA HERMINIA']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2016_Septiembre() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Septiembre"
      anio="2016"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Exento N° 2063 de 19.08.16"
      fechaOtorgamiento="01-sep-16"
    />
  );
}
