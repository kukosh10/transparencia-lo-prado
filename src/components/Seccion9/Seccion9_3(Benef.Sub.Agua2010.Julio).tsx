import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['CERDA', 'PIZARRO', 'GRACIELA'],
  ['ESPINOZA', 'LADOG', 'MIRIAM'],
  ['LARRÉN', 'ALDANA', 'MARÍA'],
  ['ALVAREZ', 'LARA', 'MARGARITA'],
  ['ROMERO', 'MELANI', 'HERMINIA'],
  ['VASQUEZ', 'HERNÁNDEZ', 'JEANNETTE'],
  ['STACK', 'DÍAZ', 'SANDRA'],
  ['SALINAS', 'ROBLES', 'MARIO'],
  ['YAÑEZ', 'PÉREZ', 'YANET'],
  ['TAPIA', 'QUINTEROS', 'VALERIA'],
  ['MUÑOZ', 'GUZMÁN', 'ALFREDO'],
  ['VEGA', 'CAROCA', 'SORAYA'],
  ['ALARCÓN', 'MOLINA', 'JEANNETTE'],
  ['ROCHA', 'DUGO', 'MARÍA'],
  ['PENROZ', 'BIONDI', 'YASNA'],
  ['HUENCHUCO', 'CONOEPÁN', 'JULIO'],
  ['MARTÍNEZ', 'NOVOA', 'HORACIO'],
  ['TORRES', 'ROMERO', 'JULIO'],
  ['MELINA', 'GÓMEZ', 'FLORENTINA'],
  ['RODRÍGUEZ', 'UPA', 'NANCY'],
  ['ARAVENA', 'PÉREZ', 'FELICIA'],
  ['REYES', 'RIVERA', 'JENNIFER'],
  ['CASTILLO', 'CANALES', 'MIRSA'],
  ['MUÑOZ', 'GARCÉS', 'GERMÁN'],
  ['JELVES', 'RIVERA', 'ADELAIDA'],
  ['ORREGO', 'OLAVE', 'MANUELA'],
  ['ISLA', 'VALENZUELA', 'ELIANA'],
  ['DÍAZ', 'PINTO', 'ANA']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2010_Julio() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Julio"
      anio="2010"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 1174 de fecha 18.06.2010"
      fechaOtorgamiento="01.07.2010"
    />
  );
}
