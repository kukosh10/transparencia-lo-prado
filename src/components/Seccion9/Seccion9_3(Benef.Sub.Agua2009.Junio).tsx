import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';
import { beneficiariosAgua2009 } from './Seccion9_3(Benef.Sub.Agua2009.Mayo)';

export default function Seccion9_3_Benef_Sub_Agua2009_Junio() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Junio"
      anio="2009"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiariosAgua2009}
      acto="Decreto Alcaldicio N° 1112 de fecha 20.05.2009"
      fechaOtorgamiento="01.06.2009"
    />
  );
}
