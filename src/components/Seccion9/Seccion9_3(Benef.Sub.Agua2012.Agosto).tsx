import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['BUSTAMANTE', 'VARGAS', 'MIRIAM'],
  ['PAREDES', 'CARRASCO', 'FLERIDA MARGARITA'],
  ['MALHUE', 'TORRES', 'MARLENE DEL CARMEN'],
  ['SOTO', 'CARRASCO', 'ERNESTINA DE LAS MERCEDES'],
  ['TRUDEO', 'VALDÉS', 'JOEL JEREMÍAS'],
  ['GARRIDO', 'ALBORNOZ', 'MYRIAM DEL CARMEN'],
  ['ROCHA', 'INALAF', 'ERIKA SILVANA'],
  ['MEDEL', 'DELGADO', 'ALFREDO NICOLÁS'],
  ['DONOSO', 'ESPINOZA', 'PASCUALA DE LAS MERCEDES'],
  ['SALGADO', 'BAZÁN', 'GLADYS DE LAS MERCEDES'],
  ['ORTIZ', 'SALDIAS', 'ERNESTINA VIOLETA'],
  ['ROA', 'ACUÑA', 'ROSA ESTER'],
  ['SOTO', 'ALARCÓN', 'CARLOS RENÉ'],
  ['QUEZADA', 'MOLINA', 'JEANNETTE DEL CARMEN'],
  ['TORRES', 'BUSTAMANTE', 'KAREN PAZ'],
  ['CARRASCO', 'VERGARA', 'MIRIAM DEL PILAR'],
  ['CARREÑO', 'VALDÉS', 'SONIA DEL CARMEN'],
  ['ALSTE', 'QUEZADA', 'FERNANDA DEL CARMEN'],
  ['RIQUELME', 'TRONCOSO', 'HERMELINDA DEL CARMEN'],
  ['CASTILLO', 'CUBILLOS', 'HUMILDÉ CRISTINA'],
  ['BUSTOS', 'ROJAS', 'MARÍA TERESA'],
  ['IBARRA', 'PIZARRO', 'INGRID DEL CARMEN'],
  ['ESPINOZA', 'IRARRÁZABAL', 'PAZ DE LOS ÁNGELES'],
  ['MONDACA', 'MOLINA', 'GLORIA DEL CARMEN'],
  ['FERNÁNDEZ', 'ORI', 'VIOLETA'],
  ['PRETEL', 'MORALES', 'ANA MARÍA'],
  ['TORRE', 'FUENTEL', 'ANA MARÍA'],
  ['SÁNCHEZ', 'VALENZUELA', 'AURORA'],
  ['FLORES', 'PÉREZ', 'EMMA'],
  ['MORALES', 'TORRE', 'ANA MARÍA'],
  ['LÓPEZ', 'CASTRO', 'JUAN CARLOS'],
  ['RIVERA', 'PÉREZ', 'ANITA'],
  ['CÁCERES', 'GONZÁLEZ', 'MARTA'],
  ['GONZÁLEZ', 'PEREZ', 'MARCELA'],
  ['RIVERA', 'LÓPEZ', 'JOSÉ ANTONIO'],
  ['PEREZ', 'LÓPEZ', 'PATRICIA'],
  ['QUINTEROS', 'NOVA', 'HUGO EDUARDO'],
  ['ESCABAR', 'BALLADA', 'LISBETH'],
  ['TORO', 'CADENA', 'FRANCISCO ALBERTO'],
  ['PEÑALOZA', 'CÁCERES', 'ERNESTINA DE LAS MERCEDES'],
  ['PÉREZ', 'PARRA', 'MÓNICA EUGENIA'],
  ['URIARTE', 'BARRAZA', 'RAMÓN'],
  ['GÓMEZ', 'BERRÍOS', 'CARMEN'],
  ['MARTÍNEZ', 'BARRA', 'JOSÉ ANTONIO'],
  ['CARRASCO', 'DIAZ', 'MÓNICA'],
  ['DÍAZ', 'PIZARRO', 'ALBERTO'],
  ['GONZÁLEZ', 'VERA', 'JOSÉ LUIS'],
  ['PÉREZ', 'CORREA', 'CLARA'],
  ['ROJAS', 'PIZARRO', 'NATALIA'],
  ['ZÚÑIGA', 'HERRERA', 'NATALIA'],
  ['BALLESTEROS', 'MORALES', 'MARTA'],
  ['BARRÍA', 'CÁCERES', 'MARCELA'],
  ['GONZÁLEZ', 'VERA', 'ALICIA'],
  ['LÓPEZ', 'MORALES', 'MIRIAM'],
  ['ÁLVAREZ', 'PÉREZ', 'ANGÉLICA'],
  ['ZAMBRANO', 'MILLA', 'FELIPE'],
  ['NÚÑEZ', 'RÍOS', 'ANTONIA'],
  ['CARMONA', 'MARTÍNEZ', 'PATRICIA'],
  ['BARRERA', 'PIZARRO', 'XIMENA'],
  ['VÁSQUEZ', 'CONTRERAS', 'MARTA'],
  ['FLORES', 'GONZÁLEZ', 'GABRIELA'],
  ['ARAYA', 'MORALES', 'MARGARITA'],
  ['MARTÍNEZ', 'PIZARRO', 'MIREYA']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2012_Agosto() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Agosto"
      anio="2012"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 1335"
      fechaOtorgamiento="01.08.2012"
    />
  );
}
