import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['VENERGAS', 'CAROCA', 'SORAYA SOLEDAD'],
  ['BARRIOS', 'ROJAS', 'GALIDES DEL ROSARIO'],
  ['PAVEZ', 'SOTO', 'FRANCISCO ROBINSON'],
  ['RUIZ', 'DE LA HOZ', 'ROSA XIMENA'],
  ['ACEITUNO', 'ECHAGÜE', 'ANA DEL CARMEN'],
  ['GARCÉS', 'ALCAYAGA', 'MARÍA VIRGINIA'],
  ['BRAVO', 'ESPINOZA', 'LUDOVINA'],
  ['RODRÍGUEZ', 'INOSTROZA', 'MARIANELA ANDREA'],
  ['BUSTOS', 'ORRELLANA', 'JUANA MARÍA'],
  ['ESPINOZA', 'LAGOS', 'MYRIAM']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2013_Agosto() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Agosto"
      anio="2013"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 2011"
      fechaOtorgamiento="01.08.2013"
    />
  );
}
