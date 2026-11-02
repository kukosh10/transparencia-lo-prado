import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['AYARZUN', 'SALAZAR', 'MARTA'],
  ['FUENTES', 'CONCHA', 'DANIELA'],
  ['PAREDES', 'GALLEGOS', 'RUBÉN'],
  ['LUNA', 'VERGARA', 'ELIANA'],
  ['TORO', 'VALENZUELA', 'SONIA'],
  ['VALDÉS', 'COFRE', 'LUIS'],
  ['CALVULEN', 'HUAQUIL', 'LORENZO'],
  ['ORTIZ', 'MENA', 'ELIZABETH'],
  ['URRUTIA', 'ESPINOZA', 'LILA'],
  ['MORALES', 'FLORES', 'SARA'],
  ['PIZARRO', 'VIDAL', 'LUIS'],
  ['SANTIBAÑEZ', 'GARRIDO', 'CHRISTIAN'],
  ['MIRANDA', 'BENAVIDES', 'ROSA'],
  ['CARRASCO', 'GONZÁLEZ', 'MARIO'],
  ['MARTÍNEZ', 'ROJAS', 'CECILIA'],
  ['VILLARROEL', 'SIERRA', 'PATRICIA'],
  ['SEPÚLVEDA', 'CASTRO', 'NATALIA'],
  ['MÉNDEZ', 'PINO', 'JAVIERA'],
  ['REYES', 'MELÉNDEZ', 'PAULA'],
  ['SÁNCHEZ', 'LÓPEZ', 'FABIOLA'],
  ['CARMONA', 'ROJAS', 'MAURICIO'],
  ['ARAYA', 'ALVARADO', 'ANDREA'],
  ['PÉREZ', 'CARRASCO', 'JOSÉ'],
  ['PINTO', 'BARRERA', 'ALICIA'],
  ['RIVERA', 'PIZARRO', 'MARÍA'],
  ['NAVARRO', 'FLORES', 'CLAUDIA'],
  ['LÓPEZ', 'SILVA', 'ROBERTO'],
  ['FARIAS', 'CORTÉS', 'SERGIO'],
  ['DÍAZ', 'MORALES', 'MARGARITA'],
  ['GALLARDO', 'ROJAS', 'SEBASTIÁN'],
  ['BUSTOS', 'MILLA', 'FERNANDA'],
  ['YÁÑEZ', 'MORALES', 'GLORIA'],
  ['HERNÁNDEZ', 'CÁCERES', 'DANIELA'],
  ['MORALES', 'GONZÁLEZ', 'JULIETA'],
  ['GUTIÉRREZ', 'MARTÍNEZ', 'PAMELA'],
  ['ROJAS', 'ARAVENA', 'PABLO'],
  ['VIDAL', 'QUIRARTE', 'ROBERTO'],
  ['CARRIL', 'OLIVARES', 'MELISA'],
  ['FUENZALIDA', 'VÁSQUEZ', 'CARMEN'],
  ['MORA', 'TAPIA', 'ANA'],
  ['TORRES', 'FLORES', 'DIANA'],
  ['VALENZUELA', 'MENDOZA', 'JOSÉ'],
  ['VÁSQUEZ', 'PARRA', 'MARCELA'],
  ['DURÁN', 'ROJAS', 'LUCÍA'],
  ['PICHET', 'IBARRA', 'CLAUDIA'],
  ['GONZÁLEZ', 'PAINE', 'VIVIANA'],
  ['GARCÍA', 'MORALES', 'ISABEL'],
  ['MELÉNDEZ', 'ALVARADO', 'MÓNICA'],
  ['ORREGO', 'MONTENEGRO', 'JOSÉ'],
  ['PINO', 'GALLARDO', 'SILVIA'],
  ['SOTO', 'COBOS', 'RUBÉN'],
  ['ESPINOZA', 'ROJAS', 'MARGARITA']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2011_Enero() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Enero"
      anio="2011"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 2232"
      fechaOtorgamiento="20.12.2010"
    />
  );
}
