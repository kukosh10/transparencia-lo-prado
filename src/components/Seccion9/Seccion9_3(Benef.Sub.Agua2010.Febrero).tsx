import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['OLEA', 'LÓPEZ', 'GUILLERMO'],
  ['GONZÁLEZ', 'LUQUE', 'MARINA'],
  ['GÓMEZ', 'FARIAS', 'MARÍA'],
  ['VALENZUELA', 'SANTIAGO', 'SILVIA'],
  ['MANRÍQUEZ', 'ARAVENA', 'GLORIA'],
  ['SOTO', 'BARAHONA', 'MARILYN'],
  ['ROJAS', 'MARTÍNEZ', 'ROSA'],
  ['PARRA', 'PARRA', 'MARÍA'],
  ['MARTÍNEZ', 'CÓRDOVA', 'ESTRELLA'],
  ['SOTO', 'NAVARRETE', 'EDUARDO'],
  ['JAQUE', 'CARREÑO', 'INGRID'],
  ['ADASME', 'RAMÍREZ', 'SILVIA'],
  ['ROJAS', 'RAMBINO', 'BERTA'],
  ['DONOSO', 'RODRÍGUEZ', 'PEDRO'],
  ['CIFUENTES', 'ESPINOZA', 'JUDITH'],
  ['MAGAÑA', 'VARGAS', 'NICOLLETE'],
  ['GUTIÉRREZ', 'CASTILLO', 'CLAUDIA'],
  ['ZAMBRANO', 'PINTO', 'FRANCIS'],
  ['CABALLERO', 'LEIVA', 'LIDIA'],
  ['BAMBARA', 'MONTECINOS', 'NANCY'],
  ['OSORIO', 'MORAGA', 'MARÍA'],
  ['SEPÚLVEDA', 'MEDINA', 'ELIANA'],
  ['ULLOA', 'SOTO', 'AURORA']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2010_Febrero() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Febrero"
      anio="2010"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 118 20.01.2010"
      fechaOtorgamiento="01.02.2010"
    />
  );
}
