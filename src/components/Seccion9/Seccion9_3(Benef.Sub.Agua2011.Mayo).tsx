import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['BARRIOS', 'POBLETE', 'ROSA'],
  ['VEGA', 'PAVEZ', 'MIREYA'],
  ['VALDÉS', 'COFRE', 'LUIS'],
  ['ESPINOZA', 'ALONSO', 'JORGE'],
  ['COLIHUECH', 'NAUTIL', 'SARA'],
  ['SÁNCHEZ', 'APONTE', 'MARITZA'],
  ['RUIZ', 'ESPINOSA', 'MARÍA'],
  ['CARRASCO', 'BRIONES', 'ELENA'],
  ['RIVERA', 'TRONCOSO', 'JULIO'],
  ['CASTILLO', 'ALCAINO', 'LEONOR'],
  ['MORENO', 'RIVAS', 'LINA'],
  ['HERRERA', 'ARENAS', 'AMELIA'],
  ['MOYA', 'SANTIBAÑEZ', 'MARÍA ÁNGELICA'],
  ['SOTELO', 'VALENZUELA', 'PATRICIA'],
  ['HERNÁNDEZ', 'MOLINA', 'NASARIO'],
  ['GONZÁLEZ', 'ROJAS', 'ISABEL'],
  ['FERRER', 'OGAZ', 'CECILIA'],
  ['MARENES', 'ARAYA', 'ELIANA'],
  ['SOTO', 'PINO', 'JULIO'],
  ['RÍOS', 'MORÍS', 'LUIS'],
  ['CEA', 'COLLINAO', 'FLOR'],
  ['RÍOS', 'VALENZUELA', 'ORITIA'],
  ['CÁRCAMO', 'DEL RÍO', 'RIGOBERTO'],
  ['FUENTES', 'MALDONADO', 'VIVIANA'],
  ['SIERRA', 'OLIVARES', 'ARIELA'],
  ['PÉREZ', 'NOGUEIRA', 'MARIA'],
  ['CARRUHUICA', 'LLANCAMÁN', 'NICOMEDES'],
  ['HUERTA', 'REYES', 'EDUARDO'],
  ['GARCÍA', 'MIRANDA', 'ELISABETH'],
  ['VALENZUELA', 'ORTEGA', 'JORGE'],
  ['QUEVEDO', 'DONOSO', 'LUIS'],
  ['CÉSPEDES', 'ORTIZ', 'LUZ'],
  ['SALGADO', 'MELIZ', 'HILDA'],
  ['SÁNCHEZ', 'PAVEZ', 'NURY'],
  ['FERNÁNDEZ', 'PEZOA', 'ROSA'],
  ['GARRATE', 'ZAVALETA', 'GLORIA'],
  ['ALARCÓN', 'TORRES', 'FRANCISCA'],
  ['MERCADO', 'QUEZADA', 'ANA'],
  ['ARAYA', 'GUERRA', 'IRIS'],
  ['ZÚÑIGA', 'FERNÁNDEZ', 'ELSA'],
  ['HORMAZÁBAL', 'CARREÑO', 'CARMEN'],
  ['DÍAZ', 'LOBOS', 'TERESA'],
  ['DONOSO', 'RAMÍREZ', 'FABIOLA'],
  ['SÁEZ', 'CARRIÉ', 'ROSA Mª'],
  ['BASCUR', 'SALINAS', 'BERTA'],
  ['CÁCERES', 'CHÁVECES', 'JORGE'],
  ['GIL', 'ESPINOSA', 'BERNARDINA'],
  ['OLAVES', 'NAVARRO', 'MISEL'],
  ['CONDEPAN', 'VELÁSQUEZ', 'BRUNILDA'],
  ['CÓRDOZ', 'MUÑOZ', 'MARÍA'],
  ['LÓPEZ', 'ROBLES', 'MARÍA'],
  ['TAYAHY', 'DONGO', 'EDUARDO'],
  ['PABO', 'MARTA', 'ELISA'],
  ['NARVAEZ', 'PEREZ', 'PAZ'],
  ['GÁLVEZ', 'PONCE', 'VALENTINA'],
  ['CANIQUEO', 'HUILIPAN', 'ELENA'],
  ['AGUILAR', 'GONZÁLEZ', 'DEMOFILA'],
  ['GÓMEZ', 'COLÍN', 'JUAN'],
  ['FIGUEROA', 'ESPINOZA', 'SERGIO'],
  ['QUEUEN', 'ALVARADO', 'ANADELA'],
  ['LAGOS', 'SILVA', 'LEOPOLDO'],
  ['MUÑOZ', 'ARAVENA', 'OSVALDO'],
  ['SALINAS', 'ESCALONA', 'MANUEL'],
  ['ABARCA', 'GALLARDO', 'MARÍA MARTA'],
  ['BUSTOS', 'ROJAS', 'RUBÉN'],
  ['FUENTES', 'BUSTOS', 'RUBÉN'],
  ['MOLINA', 'DONOSO', 'ARTURO'],
  ['SOTO', 'GÁLVEZ', 'LUIS'],
  ['HERRERA', 'S', 'GRACIELA'],
  ['ARRIAGADA', 'VALERIA', 'LUIS']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2011_Mayo() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Mayo"
      anio="2011"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 840"
      fechaOtorgamiento="01.05.2011"
    />
  );
}
