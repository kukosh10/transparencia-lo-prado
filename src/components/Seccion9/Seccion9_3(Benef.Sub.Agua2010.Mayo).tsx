import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['VEGAS', 'ILLANES', 'CLARA'],
  ['CASTRO', 'MÉNDEZ', 'AIDA'],
  ['SEPÚLVEDA', 'ROJAS', 'RAMÓN'],
  ['MILLAHUAL', 'TRANANT', 'DANIELA'],
  ['SANDOVAL', 'MUÑOZ', 'CARLOS'],
  ['CORTÉS', 'MUÑOZ', 'JOEL'],
  ['KENDALL', 'ARCE', 'ALEJANDRO'],
  ['CORTÉS', 'QUILAQUEO', 'ERIKA'],
  ['AMIGO', 'NUÑEZ', 'CELSO'],
  ['HENRÍQUEZ', 'HERRERA', 'JUAN'],
  ['CASTILLO', 'HERRERA', 'CARMEN'],
  ['ITURRA', 'MESA', 'MIRIAM'],
  ['RAYES', 'HERRERA', 'SARA'],
  ['SAZO', 'VALDÉS', 'BERNARDO'],
  ['NUÑEZ', 'ASTUDILLO', 'ISABEL'],
  ['HIDALGO', 'MORALES', 'IRMA'],
  ['FERNÁNDEZ', 'FERNÁNDEZ', 'YOLANDA'],
  ['MUÑOZ', 'LÓPEZ', 'GEORGINA'],
  ['VILLALOBOS', 'MUÑOZ', 'YOLANDA'],
  ['COTRERAS', 'VEGA', 'JOSÉ'],
  ['SALAMANCA', 'SUÁREZ', 'JOSÉ'],
  ['LA CRUZ', 'TOLEDO', 'GLORIA'],
  ['DÍAZ', 'GARRIDO', 'HUGO'],
  ['VILLALOBOS', 'GUTIÉRREZ', 'EMILIA'],
  ['GIL', 'HERRERA', 'MÓNICA'],
  ['CAMAÑO', 'VERA', 'JUAN'],
  ['YÁÑEZ', 'OSSES', 'MARÍA'],
  ['ACEÑA', 'FERRONI', 'MARÍA'],
  ['MUGA', 'CÉREZ', 'MARÍA'],
  ['RÍOS', 'RAMOS', 'PEDRO'],
  ['GALDAMES', 'AHUMADA', 'RODOLFO'],
  ['ORTEGA', 'ORTEGA', 'MARTINIANO'],
  ['TORRES', 'HERNÁNDEZ', 'NORMA'],
  ['MORALES', 'MARTÍNEZ', 'HERNÁN'],
  ['LAGOS', 'FARIAS', 'FANI'],
  ['ARAYA', 'GUERRA', 'JOSÉ'],
  ['BARRÍA', 'FLORES', 'JOAQUÍN'],
  ['ARANGUIZ', 'MARIQUIN', 'ROBERTO'],
  ['PINTO', 'SÁNCHEZ', 'ERNESTINA'],
  ['CAGUANO', 'VALLADARES', 'JUAN'],
  ['GONZÁLEZ', 'GONZÁLEZ', 'NELSON'],
  ['COFRE', 'CÁRCAMO', 'MIGUEL'],
  ['CONEJERO', 'MIRANDA', 'LUIS'],
  ['ÁLVAREZ', 'MORALES', 'MARÍA'],
  ['RIVERA', 'PÉREZ', 'RUBÉN']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2010_Mayo() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Mayo"
      anio="2010"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 74 20.04.2010"
      fechaOtorgamiento="01.05.2010"
    />
  );
}
