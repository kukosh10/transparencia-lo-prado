import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['ARÁNGUIZ', 'LINEROS', 'LUIS'],
  ['ROJAS', 'SOTO', 'ADA'],
  ['VALENZUELA', 'CÁCERES', 'RAÚL'],
  ['MUÑOZ', 'ÁLVAREZ', 'RICARDO'],
  ['DELGADO', 'LÓPEZ', 'JUANA'],
  ['MIRANDA', 'GALINDO', 'IRMA'],
  ['ZÚÑIGA', 'VERGARA', 'LUCILA'],
  ['MIRANDA', '', 'MARÍA'],
  ['MUÑOZ', 'MAUREIRA', 'JUANA'],
  ['HERNÁNDEZ', '', 'ELÍAS'],
  ['CARREÑO', 'MOYANO', 'HELIO'],
  ['GALDAMES', 'GALLARDO', 'SERGIO'],
  ['PADILLA', 'MEDINA', 'DANIELA'],
  ['NÚÑEZ', 'DÍAZ', 'MÓNICA'],
  ['CARRIÓN', 'VARGAS', 'LUIS'],
  ['MOLINA', '', 'HUGO'],
  ['ESPINOZA', 'CAMPOS', 'ALBERTINA'],
  ['PÉREZ', 'REYES', 'ELIANA'],
  ['CÓRDOVA', 'CORNEJO', 'BERTA'],
  ['FARIAS', 'JARAMILLO', 'ROBINSON'],
  ['SOTOMAYOR', 'CASTRO', 'RAÚL'],
  ['HERRERA', 'GÓMEZ', 'MARÍA'],
  ['HERMOSILLA', 'QUEZADA', 'MARGARITA'],
  ['LEÓN', 'ILUFI', 'ISABEL'],
  ['GRANDÓN', 'VENEGAS', 'ROSA'],
  ['VIGUERAS', 'RAMÍREZ', 'SERGIO'],
  ['CORTEZ', 'RIVEROS', 'IRLANDA'],
  ['GUERRA', 'NAVARRO', 'MARTA'],
  ['PÉREZ', 'CUBILLOS', 'LYLIAN'],
  ['SAGREDO', 'GUERRERO', 'MARÍA'],
  ['BENÍTEZ', 'CORREA', 'LUISA'],
  ['SILVA', 'CASTILLO', 'MARIO'],
  ['MARTÍNEZ', 'PACHECO', 'SEGUNDO'],
  ['NAVARRETE', 'VALLEJOS', 'NÉSTOR'],
  ['GRANDÓN', 'ISLA', 'JOSÉ'],
  ['SABAG', 'CUEFATI', 'JOSÉ'],
  ['VENEGAS', 'ESPINOZA', 'JORGE'],
  ['FUENTES', 'HURTADO', 'HÉCTOR'],
  ['FUENZALIDA', '', 'ERASMO'],
  ['TORO', 'ROMERO', 'HÉCTOR'],
  ['FIGUEROA', 'FIGUEROA', 'ANA'],
  ['GONZÁLEZ', 'DÍAZ', 'GILBERTO'],
  ['BARRERA', 'BECERRA', 'ELSA'],
  ['ESPINOZA', 'CALDERÓN', 'MIRZAIM'],
  ['GAETE', 'CORNEJO', 'ELADIA'],
  ['MUÑOZ', 'HERRERA', 'GUILLERMO'],
  ['CONTRERAS', '', 'ROSA'],
  ['DEVA', 'JAÑA', 'ANA'],
  ['RUIZ', 'QUEZADA', 'ALEJANDRINA'],
  ['RÍOS', 'CAPRISTÁN', 'CARLOS'],
  ['AGURTO', 'INOSTROZA', 'NELVIA'],
  ['GAMBOA', 'PINOCHET', 'BLANCA']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2009_Marzo() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Marzo"
      anio="2009"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 427 20.02.2009"
      fechaOtorgamiento="01.03.2009"
    />
  );
}
