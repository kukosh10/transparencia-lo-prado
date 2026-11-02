import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['CORNEJO', 'GONZÁLEZ', 'ANA MARÍA'],
  ['POBLETE', 'JARA', 'JANET MARIANEL'],
  ['HERNÁNDEZ', 'BORBALAN', 'AMELIA DEL CARMEN'],
  ['MARTÍNEZ', 'TORRES', 'JUAN DE DIOS'],
  ['FLORES', 'JARA', 'LETICIA ANTONIA'],
  ['SÁEZ', 'VALDERRAMA', 'CINTHYA ANDREA'],
  ['BUBALÍA', 'ABAD', 'GLORIA ELIZABETH'],
  ['ERAZA', 'TORO', 'BEATRIZ EUGENIA'],
  ['LEDOO', 'ROJAS', 'ROSELYN JHOSITTA'],
  ['FUENTES', 'NÚÑEZ', 'NORA'],
  ['VALENZUELA', 'CHOQUE', 'YOLANDA DEL CARMEN'],
  ['MELLADO', 'MELO', 'OLGA'],
  ['LUNA', 'DÍAZ', 'OSVALDINA DEL CARMEN'],
  ['VIVANCO', 'GONZÁLEZ', 'JORGE RENÉ'],
  ['SANDOVAL', 'MUÑOZ', 'CARLOS HERNÁN'],
  ['MOLINA', 'MONTEY', 'ROSA MEL'],
  ['PEIRERA', 'GONZÁLEZ', 'RAQUEL DE LAS MERCEDES'],
  ['RODRÍGUEZ', 'PASCUEZ', 'ROSA AMELIA'],
  ['BARRÍA', 'DÍAZ', 'MARIO RODOLFO'],
  ['VALDIVIA', 'SALINAS', 'MARTA NATALIA'],
  ['CARRILLO', 'PINO', 'MARGARITA DEL CARMEN'],
  ['PINT', 'FLORES', 'JOSÉ ALBERTO'],
  ['MACHUCA', 'GONZÁLEZ', 'LUPERTINA DEL CARMEN'],
  ['MUÑOZ', 'ALBORNOZ', 'MARÍA INÉS'],
  ['ESPINOZA', 'JEREZ', 'VALENTÍN NEMESIO'],
  ['ÁVILA', 'DUARTE', 'TRANSITO DEL CARMEN'],
  ['AHUMADA', 'FUENTES', 'EDMUNDO'],
  ['GUTIÉRREZ', 'TOLEDO', 'OCTAVIO DEL CARMEN'],
  ['MELÉNDEZ', 'RETAMALES', 'NORA'],
  ['ESCAREÑO', 'HERNÁNDEZ', 'ADRIANA LILIANA'],
  ['BARRAGÁN', 'DÍAZ', 'ADRIANA LILIANA'],
  ['BARRA', 'ARRIAGADA', 'YOCONDA'],
  ['GAMBOA', 'SALINAS', 'NORA'],
  ['MELLO', 'QUINTERO', 'RÚA'],
  ['ESCARATE', 'CÁRDENAS', 'ELIZABETH'],
  ['CHÁVEZ', 'RIVAS', 'LUCÍA'],
  ['ARIAS', 'PINO', 'FRANCISCA'],
  ['BARRIENTOS', 'RETAMAL', 'MÓNICA'],
  ['NÚÑEZ', 'RIVERA', 'MARÍA ELSA'],
  ['MARTÍNEZ', 'ROJAS', 'SUSANA'],
  ['ORTEGA', 'PARRA', 'ROSA DEL CARMEN'],
  ['BUSTAMANTE', 'ALVARADO', 'FRANCISCA'],
  ['VARGAS', 'NÚÑEZ', 'PATRICIA'],
  ['LÓPEZ', 'MALDONADO', 'EMILIA'],
  ['ALVARADO', 'ARAYA', 'ELISA'],
  ['DONOSO', 'PINO', 'MARCELA'],
  ['MOLINA', 'ASTUDILLO', 'PAULA'],
  ['MIRANDA', 'CARRASCO', 'FRANCISCA'],
  ['NÚÑEZ', 'LON', 'PATRICIA'],
  ['ARELLANES', 'RIVERA', 'LUCÍA'],
  ['BARRERA', 'MORALES', 'JUAN'],
  ['ROJAS', 'ALFARO', 'JOSÉ ANTONIO'],
  ['PELAYO', 'MELLA', 'LUIS'],
  ['ALARCÓN', 'SILVA', 'GLORIA'],
  ['SILVA', 'CÓRDOBA', 'MARÍA ELENA'],
  ['MORALES', 'VARGAS', 'ROSA'],
  ['MIRANDA', 'PINO', 'ROSA'],
  ['PARRA', 'VARGAS', 'PATRICIA'],
  ['HERNÁNDEZ', 'ALVARADO', 'AIDA'],
  ['MONDACA', 'FLORES', 'RUBÉN'],
  ['VALDIVIA', 'PINO', 'SUSANA'],
  ['MADRID', 'RIVERA', 'ROSA'],
  ['PARRA', 'PEÑA', 'ELOÍSA'],
  ['ARROYO', 'MORALES', 'ROSA'],
  ['MORALES', 'RIVERA', 'MARÍA DEL CARMEN']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2013_Julio() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Julio"
      anio="2013"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 1787"
      fechaOtorgamiento="01.07.2013"
    />
  );
}
