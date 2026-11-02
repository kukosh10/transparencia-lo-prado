import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['BUSTAMANTE', 'VARGAS', 'MIRIAM'],
  ['PAREDES', 'CARRASCO', 'FLERIDA MARGARITA'],
  ['MALHUE', 'TORRES', 'MARLENE DEL CARMEN'],
  ['SOTO', 'CARRASCO', 'ERNESTINA DE LAS MERCEDES'],
  ['TRUDEO', 'VÁLDEZ', 'JOEL JEREMÍAS'],
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
  ['RIQUELME', 'TRONCOSO', 'HERMELINDA DEL CARMEN']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2012_Julio() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Julio"
      anio="2012"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 1801"
      fechaOtorgamiento="20.06.2012"
    />
  );
}
