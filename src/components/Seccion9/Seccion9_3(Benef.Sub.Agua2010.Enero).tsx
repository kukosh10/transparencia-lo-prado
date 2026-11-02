import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['ZÚÑIGA', 'MOLINA', 'NORA'],
  ['ALVARADO', 'VERA', 'MARÍA'],
  ['SANTANDER', 'NEIRA', 'CARNALDO'],
  ['PINO', 'GONZÁLEZ', 'MARÍA'],
  ['MARÍN', 'MUÑOZ', 'MARÍA'],
  ['VERGARA', 'BARRÍAS', 'MARÍA'],
  ['AEDO', 'CARCOS', 'MELISSA'],
  ['MUÑOZ', 'CRUZ', 'LUIS'],
  ['VEGA', 'AVENDAÑO', 'CLOTILDE'],
  ['JIMÉNEZ', 'MONESTO', 'OSSELY'],
  ['RODRÍGUEZ', 'CERRA', 'NORMA'],
  ['BARRERA', 'ARRIAGADA', 'ANA'],
  ['ARAYA', 'FUENTES', 'CARMEN'],
  ['HERRERA', 'PIZARRO', 'FRANCISCA'],
  ['QUINTA', 'PÉREZ', 'ISABEL'],
  ['GONZÁLEZ', 'PÉREZ', 'LUDMILA'],
  ['ZAPATA', 'SEPÚLVEDA', 'MÁXIMO'],
  ['TORRES', 'SILVA', 'ANGÉLICA'],
  ['VASQUEZ', 'MELÉN', 'ALICIA'],
  ['PEÑA', 'ARAYA', 'GLORIA'],
  ['CASTRO', 'ROJAS', 'MARCELA'],
  ['MORALES', 'PINO', 'BLEIDI'],
  ['SANDOVAL', 'PAREDES', 'RICHARD'],
  ['PAILLAF', 'GARCÍA', 'MIRTA'],
  ['PÉREZ', 'LÓPEZ', 'ALBERTO'],
  ['DÍAZ', 'PONCE', 'YOLANDA'],
  ['GUTIÉRREZ', 'JARA', 'LUCÍA'],
  ['MORA', 'CORTÉS', 'JULIA'],
  ['FUENTEALBA', 'MUÑOZ', 'ROSA'],
  ['BARRA', 'LAGOS', 'MARTA'],
  ['MENESES', 'CASTRO', 'PABLO'],
  ['NÚÑEZ', 'ROJAS', 'JAVIER'],
  ['MUÑOZ', 'VERA', 'LUIS'],
  ['TAPIA', 'RAMÍREZ', 'PEDRO'],
  ['HERNÁNDEZ', 'CUEVAS', 'MARÍA'],
  ['LEIVA', 'ESTAY', 'JOSÉ'],
  ['PALMA', 'VALDÉS', 'MAURICIO'],
  ['NAVARRO', 'MORALES', 'PEDRO'],
  ['GUZMÁN', 'RIQUELME', 'JAIME'],
  ['ARRIAGADA', 'HERNÁNDEZ', 'JUANA'],
  ['JARA', 'CARRASCO', 'ELENA'],
  ['OLIVARES', 'BARRÍA', 'KAREN'],
  ['TRUJILLO', 'MORALES', 'FRANKLIN'],
  ['PARRA', 'MOLINA', 'MARÍA'],
  ['MAULÉN', 'MEZA', 'PATRICIO'],
  ['GALVEZ', 'GALVEZ', 'GRACIELA'],
  ['AHUMADA', 'MUÑOZ', 'CARLOS'],
  ['NÚÑEZ', 'CASTILLO', 'ISABEL'],
  ['MUÑOZ', 'CASTILLO', 'CLODOMIRO'],
  ['SAN MARTÍN', 'CARRASCO', 'NANCY'],
  ['PAILAÑÁN', 'PAILAÑÁN', 'NORMA'],
  ['MERINO', 'GRAY', 'SANTIAGO'],
  ['LÓPEZ', 'GALLEGO', 'ATALA'],
  ['CORTÉS', 'ROSALES', 'MARÍA'],
  ['MIRANDA', 'VEGA', 'ALEGRÍA'],
  ['TOBAR', 'CATALÁN', 'HUGO'],
  ['SALAZAR', 'ROJAS', 'JOSÉ'],
  ['AEDO', 'FIGUEROA', 'ROSA'],
  ['MOLINA', 'PEÑA', 'ANTONIO'],
  ['VERA', 'FIGUEROA', 'RÉCTOR'],
  ['CORDERO', 'PASTÉN', 'ROSA'],
  ['ARAYA', 'YÁÑEZ', 'MARÍA'],
  ['HIGUERA', 'ERICES', 'ANA']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2010_Enero() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Enero"
      anio="2010"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 2573"
      fechaOtorgamiento="21.12.2009"
    />
  );
}
