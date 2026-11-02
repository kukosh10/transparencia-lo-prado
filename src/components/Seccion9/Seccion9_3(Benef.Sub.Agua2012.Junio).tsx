import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['LABARCA', 'CÓRDOVA', 'JESICA VIVIANA'],
  ['GONZÁLEZ', 'SILVA', 'ANA DE LAS MERCEDES'],
  ['CORVALÁN', 'ESPINOZA', 'LUIS LEOPOLDO'],
  ['TOLOZA', 'MUÑOZ', 'CARLOS ANTONIO'],
  ['PÉREZ', 'PÉREZ', 'MARIO OSWALDO'],
  ['GÓMEZ', 'CERDA', 'SUSANA DEL CARMEN'],
  ['SILVA', 'CASTILLO', 'MARIO DEL CARMEN'],
  ['TAPIA', 'CORTÉS', 'JUAN RAMÓN'],
  ['OSSES', 'LIZANA', 'RUBY DE LAS MERCEDES'],
  ['CASTRO', 'VERDEJO', 'RODOLFO SEGUNDO'],
  ['MORALES', 'BÁEZ', 'VICTOR MANUEL'],
  ['VALLEJOS', 'MORALES', 'MARÍA RAQUEL'],
  ['ORTEGA', 'CUEVAS', 'MIRTA FRESIA'],
  ['SOTO', 'RIVAS', 'HECTOR OMAR'],
  ['VERA', 'HERNÁNDEZ', 'ERICA ESTER'],
  ['YEVENES', 'RÍOS', 'MARÍA GRACIELA'],
  ['MEDINA', 'MEDINA', 'PETRONILA'],
  ['MUÑOZ', 'MENÉNDEZ', 'ROSALÍA'],
  ['MAUREIRA', 'ANDRACA', 'ALEJANDRO ANTONIO'],
  ['ASTORGA', 'ESCAREZ', 'ORIELA DEL CARMEN'],
  ['ROJAS', 'GONZÁLEZ', 'ALICIA DEL CARMEN'],
  ['HERNÁNDEZ', 'RODRÍGUEZ', 'CRESCENCIO ANTONIO'],
  ['AGÜERO', 'MORALES', 'MARÍA BERNARDITA'],
  ['ALISTE', 'JOSÉ DANIEL', 'JOSÉ DANIEL'],
  ['GONZÁLEZ', 'REYES', 'INGRID FABIOLA'],
  ['LEAL', 'TORRES', 'GABI'],
  ['VALENCIA', 'VALENZUELA', 'OSCAR JAVIER'],
  ['PENA', 'VILLABLANCA', 'IRMA ESTER'],
  ['BUSTAMANTE', 'AHUMADA', 'JOSÉ LUIS'],
  ['VEGA', 'ALTAMIRANO', 'ROBERTO'],
  ['PÉREZ', 'GONZÁLEZ', 'SEBASTIÁN'],
  ['SANDOVAL', 'LLOU', 'GUILLERMO DEL CARMEN'],
  ['MALDONADO', 'LAGOS', 'AMANDA DEL CARMEN'],
  ['BENÍTEZ', 'MADARIAGA', 'ORIANA DEL CARMEN'],
  ['BELTRÁN', 'REBOLLEDO', 'RAMÓN'],
  ['FRETES', 'QUEZADA', 'GUADALUPE'],
  ['LARA', 'UNZUETA', 'ARMANDO DEL ROSARIO'],
  ['NEIRA', 'SANHUEZA', 'ISABEL ZULU'],
  ['PÉREZ', 'SÁEZ', 'ANA MAGDALENA'],
  ['PIZARRO', 'TAPIA', 'MARIA'],
  ['MORALES', 'MENA', 'MARÍA CECILIA'],
  ['CUEVAS', 'GUTIÉRREZ', 'PATRICIO'],
  ['ROJAS', 'BRICEÑO', 'RICARDO'],
  ['MELLADO', 'MORALES', 'MARTA'],
  ['GONZÁLEZ', 'RIVERA', 'JOSÉ MANUEL'],
  ['RIVAS', 'MUÑOZ', 'MARCELA']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2012_Junio() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Junio"
      anio="2012"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 1268"
      fechaOtorgamiento="01.06.2012"
    />
  );
}
