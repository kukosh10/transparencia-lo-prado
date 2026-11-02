import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['MILLANEN', 'BENAVIDES', 'LEONEL TRASITO'],
  ['INDO', 'TEJOS', 'ELENA DEL CARMEN'],
  ['CALDAS', 'MEDRANO', 'VICTORIA MARISOL'],
  ['SEPÚLVEDA', 'HERNÁNDEZ', 'CECILIA DEL CARMEN'],
  ['PAREDES', 'VÁSQUEZ', 'MANUELA ERMILA'],
  ['CERDA', 'VÁSQUEZ', 'LUIS ALFONSO'],
  ['ARANGUIR', 'SÁEZ', 'PATRICIA DEL CARMEN'],
  ['RUIZ', 'LEÓN', 'ROSA ISABEL'],
  ['CHAURA', 'SOTO', 'ALICIA DEL CARMEN'],
  ['RODRÍGUEZ', 'ROJAS', 'MANUEL ARMANDO'],
  ['POBLETE', 'MOLINA', 'CIELO ALICIA'],
  ['AGUILERA', 'MÉNDEZ', 'BERTA IRENE'],
  ['NAVARRO', 'ROBLEDO', 'ELÍDIO'],
  ['MOLINA', 'ARANCIBIA', 'LUIS CLEMENTE'],
  ['DURAN', 'GONZÁLEZ', 'MARÍA MAGDALENA'],
  ['MARTÍNEZ', 'SÁNCHEZ', 'VÍCTOR MANUEL'],
  ['SANTELICES', 'PINTO', 'EDUARDO EDMUNDO'],
  ['LAGOS', 'ROJAS', 'HERNÁN ERNESTO'],
  ['CHANDÍA', 'CHANDÍA', 'MARÍA ALICIA'],
  ['LEÓN', 'DÍAZ', 'MARÍA MAGDALENA'],
  ['MAURE', 'MOLINA', 'MARÍA MARGARITA'],
  ['VERGARA', 'MIRANDA', 'JOSÉ MONTES'],
  ['QUILAO', 'TAPIA', 'PATRICIA MAGDALENA'],
  ['SABARZO', 'SABARZO', 'TERESA DEL CARMEN'],
  ['CORONA', 'MARTÍNEZ', 'SABINA DEL CARMEN'],
  ['CARRIL', 'SEPÚLVEDA', 'MARÍA HERNÁNDEZ'],
  ['NAVARRO', 'FUENZALIDA', 'VÍCTOR DEL CARMEN'],
  ['FIGUEROA', 'VILCHES', 'JUAN CARLOS'],
  ['BRITO', 'CÁCERES', 'YOLANDA DEL CARMEN'],
  ['PÁVEZ', 'AHUMADA', 'MANUEL FRANCISCO'],
  ['HERRERA', 'VILUGA', 'EVA LUZ'],
  ['AGUILAR', 'AGUILAR', 'DOMINGO IGNACIO'],
  ['BARRIOS', 'POBLETE', 'ROSA ESTER'],
  ['MOLINA', 'ALVARIA', 'SERGIO IVÁN'],
  ['SANTANA', 'SAN MARTÍN', 'AZAEL'],
  ['PÁEZ', 'FIGUEROA', 'PEDRO'],
  ['ANZA', 'NÚÑEZ', 'CRISTINA'],
  ['BRAVO', 'ALLENDES', 'SOLEDAD ESTER'],
  ['RUIZ', 'HERNÁNDEZ', 'KATHERINE LUCY'],
  ['CHANTRE', 'QUINTREQUE', 'CARMEN DE LOURDES'],
  ['CONCHA', 'DONOSO', 'ADRIANA DEL TRánsito']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2012_Noviembre() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Noviembre"
      anio="2012"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 2687"
      fechaOtorgamiento="01.11.2012"
    />
  );
}
