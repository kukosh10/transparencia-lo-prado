import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['ACEVEDO', 'JIMÉNEZ', 'PAULA'],
  ['ALTAMIRANO', 'CARRASCO', 'JUAN'],
  ['ARAYA', 'ROJAS', 'MARCELA'],
  ['BARRERA', 'PÉREZ', 'EVA'],
  ['BUSTOS', 'GONZÁLEZ', 'ELICIA'],
  ['CARRASCO', 'ROJAS', 'JULIA'],
  ['CERDA', 'MORALES', 'PATRICIA'],
  ['CUEVAS', 'PAZ', 'MIRIAM'],
  ['DÍAZ', 'CARRASCO', 'JOSÉ MANUEL'],
  ['FLORES', 'BARRERA', 'ELIZABETH'],
  ['GARCÍA', 'URZÚA', 'PÍA'],
  ['GONZÁLEZ', 'PÉREZ', 'CARLA'],
  ['HERRERA', 'MORALES', 'NANCY'],
  ['JARA', 'LÓPEZ', 'JOHANA'],
  ['LÓPEZ', 'TORRES', 'VIVIANA'],
  ['MARTÍNEZ', 'PARRA', 'MARÍA ELENA'],
  ['MELÉNDEZ', 'GONZÁLEZ', 'MARÍA'],
  ['MORALES', 'ALVARADO', 'MARTA'],
  ['MORALES', 'SÁNCHEZ', 'JUANA'],
  ['MORALES', 'RODRÍGUEZ', 'LUCÍA'],
  ['PÉREZ', 'LÓPEZ', 'PATRICIA'],
  ['PEREZ', 'HERRERA', 'TERESA'],
  ['PINO', 'RIVERA', 'MARGARITA'],
  ['RAMÍREZ', 'PINO', 'NELLY'],
  ['RIVERA', 'GONZÁLEZ', 'MIRTA'],
  ['ROJAS', 'CÉSPEDES', 'ELENA'],
  ['ROJAS', 'LAGOS', 'ALINA'],
  ['ROJAS', 'MIRANDA', 'JUDITH'],
  ['SANDOVAL', 'DE LA CRUZ', 'SOLEDAD'],
  ['SOTO', 'MORALES', 'PATRICIA'],
  ['TORRES', 'ROJAS', 'EMILIA'],
  ['VARGAS', 'SILVA', 'PATRICIA'],
  ['VELÁSQUEZ', 'GUTIÉRREZ', 'LUISA'],
  ['VILCHES', 'SEPÚLVEDA', 'PATRICIA'],
  ['ZAPATA', 'CÁCERES', 'MIREYA']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2012_Abril() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Abril"
      anio="2012"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 1421"
      fechaOtorgamiento="01.04.2012"
    />
  );
}
