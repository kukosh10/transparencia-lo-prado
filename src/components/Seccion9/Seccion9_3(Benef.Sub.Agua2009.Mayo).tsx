import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';

export const beneficiariosAgua2009 = [
  ['VALDIVIA', 'GUAJARDO', 'MARÍA'],
  ['GUERRERO', 'COFRE', 'YASNA'],
  ['SOTO', 'PAÑEMÁN', 'MARÍA'],
  ['SANTANDER', 'MALDONADO', 'JACQUELINE'],
  ['RAVELLO', 'GÁLVEZ', 'BEATRIZ'],
  ['GONZÁLEZ', 'SEPÚLVEDA', 'CARLOS'],
  ['FARÍAS', 'GONZÁLEZ', 'CLARA'],
  ['LÓPEZ', 'VILLAGRA', 'MÓNICA'],
  ['CORRALES', 'QUIROZ', 'JAIME'],
  ['BARROS', 'ESTAY', 'MÓNICA'],
  ['PERRERO', 'ARGOMEDO', 'PILAR'],
  ['ARANEDA', 'MALUENDA', 'FRESIA'],
  ['MEDEL', 'DELGADO', 'ALFREDO'],
  ['GONZÁLEZ', 'CUBILLOS', 'HUGO'],
  ['SAN MARTÍN', 'SAN MARTÍN', 'VERÓNICA'],
  ['NÚÑEZ', 'MADRID', 'SANDRA'],
  ['OÑATE', 'GARCÉS', 'JUANA'],
  ['CORONA', 'VARGAS', 'JORGE'],
  ['HUENUPIL', 'RETAMAL', 'RUTH'],
  ['RIQUELME', 'GUTIÉRREZ', 'CARLOS'],
  ['VELOSO', 'CUEVAS', 'EDELMIRA'],
  ['TOLOZA', 'MUÑOZ', 'CARLOS'],
  ['FUENTEALBA', 'CAMAÑO', 'ISOLINA'],
  ['NAVARRETE', 'GONZÁLEZ', 'LORENA'],
  ['CANCINO', 'SOTO', 'GUILLERMO'],
  ['ROMERO', 'VILLASECA', 'PATRICIO'],
  ['NECULPÁN', 'HUENTEMIL', 'ALFREDO'],
  ['RAMOS', 'MUÑOZ', 'CARMEN'],
  ['CASTILLO', 'POBLETE', 'MARÍA'],
  ['ROJAS', 'ORTEGA', 'ROSA'],
  ['BUSTAMANTE', 'LÓPEZ', 'MARÍA'],
  ['QUEZADA', 'ROJAS', 'OMAR'],
  ['GONZÁLEZ', 'TAPIA', 'GYSLANE'],
  ['VALDIVIA', 'FUENTEALBA', 'MARTINA'],
  ['SOLÍS', 'BADILLA', 'JORGE'],
  ['IBARRA', 'CATALÁN', 'ALBINA'],
  ['PIZARRO', 'ROJAS', 'MARTHA'],
  ['LEMUEL', 'HUENCHUL', 'MATILDE'],
  ['MOLINA', 'CERDA', 'VERÓNICA'],
  ['CLAVEAU', 'ROMERO', 'SONIA'],
  ['GONZÁLEZ', 'VÉLIZ', 'SILVIA'],
  ['CARVAJAL', 'CANDIA', 'AURORA'],
  ['NEIRA', 'VARGAS', 'EDMUNDO'],
  ['PAILLAMIL', 'PAILLAMIL', 'ANA'],
  ['CONTRERAS', 'MUÑOZ', 'HERTA'],
  ['NÚÑEZ', 'FIERRO', 'EMA'],
  ['SEPÚLVEDA', 'CANDIA', 'MARÍA'],
  ['TAPIA', 'REYES', 'EDUARDO'],
  ['LÓPEZ', '', 'LUIS'],
  ['URZÚA', '', 'PASCUAL'],
  ['MIRANDA', 'LÓPEZ', 'ADRIANA'],
  ['RIQUELME', 'TRONCOSO', 'HERMINDA'],
  ['CANALES', 'SOTO', 'OLMA'],
  ['ARRIAGADA', 'MARÍN', 'ROSA'],
  ['TOLEDO', 'ARIAS', 'JUANA'],
  ['MUÑOZ', 'QUEZADA', 'CLORINDA'],
  ['QUINTANILLA', 'BERNAL', 'CARMEN'],
  ['ALARCON', 'SANDOVAL', 'AMÉRICA'],
  ['MUÑOZ', 'MÉNDEZ', 'ROSA'],
  ['FERNÁNDEZ', 'CÁNEZ', 'MAXIMILIANO'],
  ['PAINEPI', 'LEFÍN', 'SOFÍA'],
  ['SOTO', 'TEJOS', 'SYLVIA'],
  ['LEIVA', 'TRUJILLO', 'NELLY'],
  ['AGÜERO', '', 'MARÍA'],
  ['VARGAS', 'VÁSQUEZ', 'ERIKA']
] as const;

export default function Seccion9_3_Benef_Sub_Agua2009_Mayo() {
  return (
    <Seccion9_3_N_B_Sub_Fam2015_Mayo
      mes="Mayo"
      anio="2009"
      programa="Subsidio Agua Potable"
      beneficiariosPersonalizados={beneficiariosAgua2009}
      acto="Decreto Alcaldicio N° 886 de fecha 20.04.2009"
      fechaOtorgamiento="01.05.2009"
    />
  );
}
