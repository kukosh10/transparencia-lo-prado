import Seccion9_3BenefMedicamentos, { type RegistrosMedicamentosPorMes } from './Seccion9_3(Benef.Medicamentos)';

const registrosPorMes: RegistrosMedicamentosPorMes = {
  Febrero: [
    ['PINO', 'SOTO', 'MARIA', 'Decreto N° 318', '03.02.2014'],
    ['LIZANA', 'VALENZUELA', 'MARIA', 'Decreto N° 317', '03.02.2014'],
    ['BARRERA', 'BRAVO', 'ALEJANDRO', 'Decreto N° 316', '03.02.2014'],
    ['CARRION', 'PALESTRO', 'AIDA', 'Decreto N° 314', '03.02.2014'],
    ['WIKE', 'REYES', 'IRIS', 'Decreto N° 315', '03.02.2014'],
    ['RIVEROS', 'OLIVOS', 'MARIA LORETO', 'Decreto N° 389', '07.02.2014'],
    ['RIVADENEIRA', 'CASTILLO', 'DAFNNE', 'Decreto N° 388', '07.02.2014'],
    ['AMAYA', 'JARA', 'MERCEDES', 'Decreto N° 547', '25.02.2014'],
    ['ROJAS', 'MOYA', 'JEREMY', 'Decreto N° 548', '26.02.2014']
  ],
  Marzo: [
    ['PAREDES', 'INOSTROZA', 'NAHUEL', 'Decreto N° 640', '07.03.2014']
  ],
  Mayo: [
    ['CONTRERAS', 'CANALES', 'MARCO ANDRES', 'Decreto N° 1204', '05.05.2014'],
    ['DIAZ', 'RODRIGUEZ', 'GERMAN', 'Decreto N° 1203', '05.05.2014'],
    ['CONTRERAS', 'CASANOVA', 'ISAI', 'Decreto N° 1252', '09.05.2014'],
    ['CAYUPAN', 'ANTIL', 'NATALIA', 'Decreto N° 1313', '15.05.2014']
  ],
  Junio: [
    ['CELIS', 'ANABALON', 'SONIA', 'Decreto N° 1550', '13.06.2014'],
    ['REBOLLEDO', 'ARRIAGADA', 'CLARA', 'Decreto N° 1548', '13.06.2014']
  ],
  Julio: [
    ['NAVARRO', 'ORDENES', 'JUAN', 'Decreto N° 1829', '02.07.2014'],
    ['MIRANDA', 'ZUÑIGA', 'FRANCISCA', 'Decreto N° 1822', '02.07.2014'],
    ['BRITO', 'HIDALGO', 'MAXIMILIANO', 'Decreto N° 1877', '07.07.2014'],
    ['TOLEDO', 'CARDEMIL', 'CALEB', 'Decreto N° 2030', '15.07.2014'],
    ['VERA', 'FLORES', 'JUAN', 'Decreto N° 2024', '15.07.2014'],
    ['FAUS', 'PALMA', 'SOPHIA', 'Decreto N° 2022', '15.07.2014'],
    ['SOLIS', 'CACERES', 'JAIME', 'Decreto N° 2014', '15.07.2014'],
    ['ROMAN', 'QUISPE', 'FRANCISCO', 'Decreto N° 2013', '15.07.2014'],
    ['VIVALLOS', 'ANABALON', 'MANUEL', 'Decreto N° 2158', '31.07.2014']
  ],
  Agosto: [
    ['SANCHEZ', 'PEÑA', 'SANDRA', 'Decreto N° 2351', '21.08.2014'],
    ['PULGAR', 'ROJAS', 'IAN', 'Decreto N° 2350', '21.08.2014'],
    ['INZULZA', 'ADASME', 'SOFIA', 'Decreto N° 2352', '21.08.2014'],
    ['CATRIMIL', 'QUEIPO', 'INES', 'Decreto N° 2394', '25.08.2014']
  ],
  Septiembre: [
    ['SAN JUAN', 'ZUÑIGA', 'BRUNO', 'Decreto N° 2470', '02.09.2014'],
    ['ROJAS', 'URRUTIA', 'JOHNSON', 'Decreto N° 2651', '24.09.2014'],
    ['SEPULVEDA', 'ARRIAGADA', 'ELEN', 'Decreto N° 2647', '24.09.2014'],
    ['LOPEZ', 'LOPEZ', 'GRIMALDINA', 'Decreto N° 2648', '24.09.2014'],
    ['SEPULVEDA', 'RETAMAL', 'LUIS', 'Decreto N° 2737', '30.09.2014']
  ],
  Octubre: [
    ['MORGADO', 'FLORES', 'BLANCA', 'Decreto N° 2823', '10.10.2014'],
    ['TOBAR', 'DROGUETT', 'ALICIA', 'Decreto N° 3038', '27.10.2014']
  ],
  Noviembre: [
    ['RIVERA', 'VERGARA', 'AMINTA', 'Decreto N° 3206', '07.11.2014'],
    ['RAMIREZ', 'SILVA', 'CAMILA', 'Decreto N° 3205', '07.11.2014'],
    ['OSORIO', 'URRUTIA', 'CARLOS', 'Decreto N° 3204', '07.11.2014'],
    ['LEAL', 'ROLDAN', 'JOSE MIGUEL', 'Decreto N° 3443', '27.11.2014']
  ],
  Diciembre: [
    ['BOBADILLA', 'VASQUEZ', 'MARCO', 'Decreto N° 3563', '10.12.2014'],
    ['PALMA', 'GONZALEZ', 'EDMUNDO', 'Decreto N° 3562', '10.12.2014'],
    ['VALDEZ', 'LLANTEN', 'SERGIO', 'Decreto N° 3705', '30.12.2014']
  ]
};

interface Props {
  tipoNomina: string;
  onVolver: () => void;
}

export default function Seccion9_3BenefMedicamentos2014({ tipoNomina, onVolver }: Props) {
  return (
    <Seccion9_3BenefMedicamentos
      anio="2014"
      tipoNomina={tipoNomina}
      onVolver={onVolver}
      registrosPorMes={registrosPorMes}
    />
  );
}
