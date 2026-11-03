import Seccion9_3BenefMedicamentos, { type RegistrosMedicamentosPorMes } from './Seccion9_3(Benef.Medicamentos)';

const registrosPorMes: RegistrosMedicamentosPorMes = {
  Enero: [
    ['CANABES', 'MADRID', 'MARIA INES', 'Decreto N° 334', '25.01.2012'],
    ['DE LA FUENTE', 'GALLARDO', 'MARIA', 'Decreto N° 286', '24.01.2012'],
    ['MORA', 'FERNANDEZ', 'FERNANDA', 'Decreto N° 281', '24.01.2012'],
    ['PINO', 'NUÑEZ', 'MARJORIE', 'Decreto N° 280', '24.01.2012'],
    ['DONOSO', 'CARREÑO', 'JOSE', 'Decreto N° 275', '24.01.2012'],
    ['MONTES', 'ITURRIETA', 'ROSA', 'Decreto N° 270', '24.01.2012'],
    ['PAVEZ', 'IBACACHE', 'ROSA', 'Decreto N° 269', '24.01.2012'],
    ['COLIPAN', 'ORTIZ', 'MARIA', 'Decreto N° 032', '24.01.2012'],
    ['HERNANDEZ', 'URQUEJO', 'HECTOR', 'Decreto N° 031', '04.01.2012'],
    ['HERNANDEZ', 'BENAVIDES', 'SONIA', 'Decreto N° 030', '04.01.2012']
  ],
  Febrero: [
    ['MARCHANT', 'ZEPEDA', 'LUIS', 'Decreto N° 508', '10.02.2012'],
    ['ESPINA', 'DIAZ', 'DANIELA', 'Decreto N° 507', '10.02.2012'],
    ['DIAZ', 'GUTIERREZ', 'MARIANTONIETA', 'Decreto N° 505', '10.02.2012'],
    ['RAMIREZ', 'LEIVA', 'EMILIO', 'Decreto N° 416', '03.02.2012']
  ],
  Abril: [
    ['PONCE', 'CORREA', 'ALLAN', 'Decreto N° 1059', '25.04.2012'],
    ['LEAL', 'ROLDAN', 'JOSE MIGUEL', 'Decreto N° 1051', '25.04.2012'],
    ['SOTO', 'PINTO', 'JORGE EDUARDO', 'Decreto N° 1049', '25.04.2012'],
    ['OYARCE', 'ROJAS', 'ELVIRA', 'Decreto N° 894', '10.04.2012'],
    ['LIZAMA', 'ESPINOZA', 'MARIA VIOLETA', 'Decreto N° 844', '04.04.2012'],
    ['CALFUMAN', 'CAYUÑIR', 'JOSE DAVID', 'Decreto N° 843', '04.04.2012'],
    ['SILVA', 'PINEDA', 'PEDRO', 'Decreto N° 841', '04.04.2012'],
    ['RUZ', 'CASTRO', 'GLADYS DEL CARMEN', 'Decreto N° 838', '04.04.2012']
  ],
  Mayo: [
    ['ARAYA', 'CARDENAS', 'NAYADE', 'Decreto N° 1130', '03.05.2012'],
    ['MUÑOZ', 'SALDAÑA', 'AUGUSTO ENRIQUE', 'Decreto N° 1128', '03.05.2012']
  ],
  Junio: [
    ['BRAVO', 'CABRERA', 'GERMAN', 'Decreto N° 1650', '26.06.2012'],
    ['CASTAÑEDA', 'SANCHEZ', 'MARIA', 'Decreto N° 1597', '20.06.2012'],
    ['ARENAS', 'GONZALEZ', 'CELIA', 'Decreto N° 1596', '20.06.2012'],
    ['RIVERA', 'DONOSO', 'JUAN CUSTODIO', 'Decreto N° 1389', '01.06.2012']
  ],
  Julio: [
    ['CALFULEF', 'ALBURQUEQUE', 'IGNACIA', 'Decreto N° 1765', '12.07.2012'],
    ['MARCHANT', 'ZEPEDA', 'LUIS', 'Decreto N° 1702', '04.07.2012']
  ],
  Agosto: [
    ['CASTRO', 'GONZALEZ', 'MATIAS', 'Decreto N° 2234', '24.08.2012'],
    ['INZULZA', 'ADASME', 'SOFIA', 'Decreto N° 2221', '23.08.2012'],
    ['BARRIOS', 'TRONCOSO', 'LUISA', 'Decreto N° 2220', '23.08.2012'],
    ['RIVAS', 'ALVAREZ', 'HONORATO', 'Decreto N° 2168', '21.08.2012'],
    ['RIVAS', 'ALVAREZ', 'HONORATO', 'Decreto N° 2167', '21.08.2012'],
    ['MESIAS', 'OSORIO', 'NELIDA', 'Decreto N° 2042', '08.08.2012'],
    ['ARAYA', 'GUTIERREZ', 'ANA', 'Decreto N° 2032', '08.08.2012'],
    ['CHAVEZ', 'GUZMAN', 'DORIS', 'Decreto N° 1902', '01.08.2012']
  ],
  Septiembre: [
    ['ARAVENA', 'QUIROZ', 'ERIKA', 'Decreto N° 2478', '27.09.2012'],
    ['GUERRA', 'FUENTES', 'ABEL', 'Decreto N° 2390', '12.09.2012'],
    ['ALARCON', 'GONZALEZ', 'CECILIA', 'Decreto N° 2388', '12.09.2012'],
    ['MARTINEZ', 'CASTILLO', 'ROSA', 'Decreto N° 2361', '10.09.2012']
  ],
  Octubre: [
    ['GUERRERO', 'FARIAS', 'JORDANO', 'Decreto N° 2657', '18.10.2012'],
    ['DURAN', 'OLGUIN', 'JIMENA', 'Decreto N° 2598', '10.10.2012']
  ],
  Diciembre: [
    ['ROBLES', 'BECERRA', 'CARLOS', 'Decreto N° 3130', '18.12.2012'],
    ['QUEZADA', 'MUÑOZ', 'ALEJANDRO', 'Decreto N° 3120', '18.12.2012'],
    ['VARGAS', 'VARGAS', 'MARIANELA', 'Decreto N° 3117', '18.12.2012'],
    ['SEPULVEDA', 'PAVEZ', 'AQUILES', 'Decreto N° 3111', '18.12.2012'],
    ['BLANCO', 'COÑUEÑIR', 'OCTAVIO', 'Decreto N° 3048', '11.12.2012'],
    ['GONZALEZ', 'BRAVO', 'EMILIO', 'Decreto N° 3046', '11.12.2012'],
    ['ALAMOS', 'SANCHEZ', 'SEBASTIAN', 'Decreto N° 3045', '11.12.2012']
  ]
};

interface Props {
  tipoNomina: string;
  onVolver: () => void;
}

export default function Seccion9_3BenefMedicamentos2012({ tipoNomina, onVolver }: Props) {
  return (
    <Seccion9_3BenefMedicamentos
      anio="2012"
      tipoNomina={tipoNomina}
      onVolver={onVolver}
      registrosPorMes={registrosPorMes}
    />
  );
}
