import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['BAEZ', 'VELASQUEZ', 'NEFTALÍ'],
  ['ROS', 'URIBE', 'JULIA'],
  ['ARENAS', 'HERRERA', 'SILVIA'],
  ['MELLA', 'ÁVILA', 'JAIME'],
  ['CAMPUSANO', 'PALACIOS', 'MANUEL'],
  ['CORREA', '', 'LUIS'],
  ['ARCE', 'CORREA', 'SONIA'],
  ['CERDA', 'PAEZ', 'ROLANDO'],
  ['JARAMILLO', 'ARRIAGADA', 'JUAN'],
  ['SAAVEDRA', 'FUENTES', 'NÉSTOR'],
  ['CUADRO', 'OBREQUE', 'FELICIA'],
  ['FLORES', 'MUÑOZ', 'ANA'],
  ['NÚÑEZ', 'GALLARDO', 'IRMA'],
  ['TORRES', 'LEÓN', 'GILDA'],
  ['OLAVE', 'REYES', 'SERGIO'],
  ['GUTIÉRREZ', 'BELTRÁN', 'JOSÉ'],
  ['DÍAZ', 'BASTÍAS', 'FERMÍN'],
  ['SALAZAR', 'OLATE', 'ELIANA'],
  ['HIDALGO', 'LARA', 'ANA'],
  ['TOBAR', 'SÁEZ', 'MARTA'],
  ['URQUIETA', 'AMÉNEZ', 'FLORA'],
  ['BARRA', 'VEGA', 'EDUVINA'],
  ['VELÁSQUEZ', 'UGARTE', 'BENICIO'],
  ['VERA', 'MEDINA', 'DORILA'],
  ['ZAPATA', 'SÁNCHEZ', 'ALBERTO'],
  ['FUENTES', 'CHAVARRO', 'BERTA'],
  ['CASTRO', 'MÁRQUEZ', 'ELCIRA'],
  ['MUÑOZ', 'MIRANDA', 'MIGUEL'],
  ['ARAGÓN', 'CARVACHO', 'AUREL'],
  ['LÓPEZ', 'ARAYA', 'MARIANES'],
  ['RODRÍGUEZ', 'OCHOA', 'OMAR'],
  ['PÉREZ', 'AHUMADA', 'JOSÉ'],
  ['GONZÁLEZ', 'RIOSECO', 'JORGE'],
  ['MORA', 'ORTIZ', 'BERTA'],
  ['CAMPOS', 'GÁLVEZ', 'MARÍA'],
  ['ZAPATA', 'ASALGADO', 'ESTELA'],
  ['CANO', 'BUSTOS', 'MARÍA'],
  ['BUSTOS', 'CARREÑO', 'NELSON'],
  ['ALARCÓN', 'MELLADO', 'RAMÓN'],
  ['ESPINOZA', 'GARRIDO', 'JORGE']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2011_Abril() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Abril"
      anio="2011"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 567"
      fechaOtorgamiento="01.04.2011"
    />
  );
}
