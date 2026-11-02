import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['RAMÍREZ', 'DÍAZ', 'DARIOLET'],
  ['MOYA', 'PALMA', 'ISABEL'],
  ['ALARCÓN', 'MUNDAÇA', 'ALEJANDRA'],
  ['BLÁSQUEZ', 'JELDRES', 'VALERIA'],
  ['RAMOS', 'URETA', 'ERIKA'],
  ['HERNÁNDEZ', 'CALDERÓN', 'RAÚL'],
  ['BARRIOS', 'ROJAS', 'GALDES'],
  ['CORDERO', 'RIQUELME', 'JACQUELINE'],
  ['FUENTES', 'FUENTES', 'SANDRA'],
  ['MUÑOZ', 'ORMEÑO', 'KATIA'],
  ['VALDIVIA', 'NARANJO', 'SANDRA'],
  ['MORA', 'SEPÚLVEDA', 'ELISA'],
  ['TAPIA', 'FLORES', 'JORGE'],
  ['ZAMORA', 'BERNAL', 'ANA'],
  ['SALINAS', 'PEREIRA', 'MARÍA'],
  ['CORNEJO', 'OSTOLAZA', 'MARGARITA'],
  ['LIZANA', 'GONZÁLEZ', 'ARTURO'],
  ['ROJAS', 'FARIAS', 'GUILLERMINA'],
  ['COGNO', 'GONZÁLEZ', 'ANA'],
  ['HIDALGO', 'ARAVENA', 'MARÍA'],
  ['FIGUEROA', 'ESCOBAR', 'JOSÉ'],
  ['HERNÁNDEZ', 'VALENZUELA', 'WILSON'],
  ['BURGOS', 'MARTÍNEZ', 'OMAR'],
  ['PEREIRA', 'GONZÁLEZ', 'RAQUEL'],
  ['AGUILERA', 'VERGARA', 'EDITH']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2010_Junio() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Junio"
      anio="2010"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 998 de fecha 20.05.2010"
      fechaOtorgamiento="01.06.2010"
    />
  );
}
