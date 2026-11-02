import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['OVARZÚN', 'SALAZAR', 'NORMA'],
  ['URQUEJO', 'MATUS', 'GRACIELA'],
  ['ROMERO', 'GRANDÓN', 'MARÍA'],
  ['SANTANDER', 'ARAYA', 'NANCY'],
  ['MEDEL', 'MEDEL', 'CLAUDIA'],
  ['DÍAZ', 'GONZÁLEZ', 'DANITZA'],
  ['CANIUQUE', 'HUILIMAN', 'MARÍA'],
  ['ROJAS', 'CLAVE', 'ANA'],
  ['ARREDONDO', 'RIVERA', 'ROBERTO'],
  ['FLORES', 'AGUIRRE', 'DEAN'],
  ['MERINO', 'CID', 'LUIS'],
  ['JORQUERA', 'MORAGA', 'PAOLA'],
  ['NEIRA', 'GUERRERO', 'CATALINA'],
  ['JOFRÉ', 'ROJAS', 'CAMILA'],
  ['TRONCOSO', 'MORENO', 'FRANCIA'],
  ['BRAVO', 'CAMPOS', 'AMADA'],
  ['OVIEDO', 'SALAZAR', 'ISABEL'],
  ['DE LA CUADRA', 'POBLETE', 'NELSON'],
  ['ARREDONDO', 'SILVA', 'KARINA'],
  ['SANTANDER', 'ALARCÓN', 'HUMBERTO'],
  ['GALLARDO', 'CUMIAN', 'PRUDENCIO'],
  ['FERNÁNDEZ', 'CONTARDO', 'JORGE'],
  ['VALDENEGRI', 'ALLENDES', 'LUIS'],
  ['OLIVARES', 'ALBORNOZ', 'OLGA'],
  ['CONA', 'PAINEMIL', 'AURELIO'],
  ['ROA', 'VALDEBENITO', 'FÉLIX'],
  ['VASQUEZ', 'FIGUEROA', 'AMANDINA'],
  ['ZAMORANO', 'CUMIL', 'MARÍA'],
  ['RÍOS', 'CASTRO', 'ALFONSO'],
  ['CARES', 'CABELLO', 'DELIA'],
  ['FARIAS', 'CARTAGENA', 'RAFAEL'],
  ['LOYOLA', 'GONZÁLEZ', 'VERÓNICA'],
  ['GARCÍA', 'REBOLLEDO', 'ESTER'],
  ['PÉREZ', 'AGUILERA', 'JAIME'],
  ['CONTRERAS', 'MUGA', 'MOISÉS']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2011_Diciembre() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Diciembre"
      anio="2011"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 2558"
      fechaOtorgamiento="01.12.2011"
    />
  );
}
