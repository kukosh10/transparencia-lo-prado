import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

const beneficiarios = [
  ['ARMUJO', 'CORNEJO', 'DANIELA'],
  ['OLIVEROS', 'LAZO', 'MANUEL'],
  ['SALINAS', 'GONZÁLEZ', 'VERÓNICA'],
  ['PAREDES', 'GALLEGOS', 'DANIELA'],
  ['CORNEJO', 'BOUFFANAIS', 'ALFREDO'],
  ['ROMÁN', 'ROMERO', 'ROSA'],
  ['PEÑA', 'FARÍAS', 'LORENA'],
  ['ROJAS', 'PARRA', 'JOSÉ'],
  ['ORTEGA', 'ZÚÑIGA', 'MIGUEL'],
  ['MOYA', 'MONROY', 'RAMIRO'],
  ['ARENAS', 'GUERRERO', 'ROSA'],
  ['RIVADENEIRA', 'JACOME', 'GLADYS'],
  ['VALENCIA', 'GUZMÁN', 'SERGIO'],
  ['VÁSQUEZ', 'CHARELLA', 'ELENA'],
  ['SANTELICES', 'PINTO', 'EDUARDO'],
  ['VALENZUELA', 'VARGAS', 'CRISTIAN'],
  ['SALINAS', 'SALINAS', 'JUAN'],
  ['BARRIENTOS', 'MÉNDEZ', 'MARÍA'],
  ['GÓMEZ', 'TRONCOSO', 'PAMELA'],
  ['DÍAZ', 'MARTÍNEZ', 'GERALDINA'],
  ['GÁLVEZ', 'TOBAR', 'GRACIELA'],
  ['CORREA', 'CORREA', 'ROSA'],
  ['MILLALÉN', 'BENAVIDES', 'LEONEL'],
  ['SOTO', 'SANDOVAL', 'IMELDA'],
  ['LLANILLOS', 'NARANJO', 'FERNANDO'],
  ['BRAVO', 'QUISPE', 'FRANCISCO'],
  ['FUENZALIDA', 'MORENO', 'MARÍA'],
  ['LEÓN', 'VENEGAS', 'ÁNGELA'],
  ['LLANOS', 'PÉREZ', 'NELLY'],
  ['PÁVEZ', 'AHUMADA', 'MANUEL'],
  ['MUÑOZ', 'DÍAZ', 'PAMELA'],
  ['INZUNZA', 'ASTETE', 'JOSÉ'],
  ['ZÚÑIGA', 'BASCUÑÁN', 'LUIS'],
  ['PADILLA', 'CONTRERAS', 'MARÍA'],
  ['ANDRADE', 'GUTIÉRREZ', 'LOLA'],
  ['YÁÑEZ', 'BERRÍOS', 'CAMILA'],
  ['GONZÁLEZ', 'LÓPEZ', 'MARÍA'],
  ['FUENTES', 'CÁCERES', 'VICTORIA'],
  ['NEIRÁN', 'ANTILAO', 'JUANA'],
  ['RUBILLO', 'ELIZONDO', 'LUISA']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2009_Septiembre() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Septiembre"
      anio="2009"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiarios}
      acto="Decreto Alcaldicio N° 1775 de fecha 20.08.2009"
      fechaOtorgamiento="01.09.2009"
    />
  );
}
