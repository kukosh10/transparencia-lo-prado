import Seccion9_3BenefMedicamentos, { type RegistrosMedicamentosPorMes } from './Seccion9_3(Benef.Medicamentos)';

const registrosPorMes: RegistrosMedicamentosPorMes = {
  Enero: [
    ['MATAMALA', 'NAVARRO', 'IVONNE', 'Decreto N° 192', '24.01.2011'],
    ['PASTEN', 'DIAZ', 'PATRICIO', 'Decreto N° 56', '10.01.2011']
  ],
  Abril: [
    ['MARTINEZ', 'BILLANINI', 'LUCIANO', 'Decreto N° 675', '01.04.2011'],
    ['HUMERES', 'BADIÑO', 'GABRIELA', 'Decreto N° 678', '01.04.2011']
  ],
  Mayo: [
    ['HINOJOSA', 'PEÑA', 'SERGIO', 'Decreto N° 1059', '25.05.2011'],
    ['CASTILLO', 'CORVALAN', 'DELIA', 'Decreto N° 1060', '25.05.2011'],
    ['OLGUIN', 'URETA', 'LUIS', 'Decreto N° 1054', '25.05.2011'],
    ['LAGOS', 'VIVALLOS', 'VANESSA', 'Decreto N° 983', '11.05.2011']
  ],
  Junio: [
    ['LIZAMA', 'ESPINOZA', 'MARIA VIOLETA', 'Decreto N° 1251', '05.06.2011'],
    ['FUENTES', 'RAMIREZ', 'HECTOR', 'Decreto N° 1252', '15.06.2011'],
    ['MORALES', 'VEAS', 'JULIO', 'Decreto N° 1253', '15.06.2011']
  ],
  Julio: [
    ['CASTRO', 'FLORES', 'RAMIRO', 'Decreto N° 1503', '13.07.2011'],
    ['VALDENEGRO', 'MANQUE', 'MACARENA', 'Decreto N° 1419', '06.07.2011'],
    ['ROMERO', 'CACERES', 'GASTON', 'Decreto N° 1418', '06.07.2011'],
    ['AGUILERA', 'SILVA', 'ELIZABETH', 'Decreto N° 1420', '06.07.2011'],
    ['GONZALEZ', 'BRAVO', 'ROSA', 'Decreto N° 1398', '05.07.2011'],
    ['SALDAÑA', 'ORTIZ', 'FELIX', 'Decreto N° 1406', '05.07.2011'],
    ['VARGAS', 'TORREJON', 'LUIS', 'Decreto N° 1379', '01.07.2011']
  ],
  Agosto: [
    ['BALBOA', 'CHAVARRIA', 'JORGE', 'Decreto N° 1740', '17.08.2011'],
    ['SEPULVEDA', 'RETAMAL', 'LUIS', 'Decreto N° 1739', '17.08.2011']
  ],
  Septiembre: [
    ['ECHANES', 'CID', 'FERNANDO', 'Decreto N° 2102', '27.09.2011'],
    ['CERDA', 'OLATE', 'ALIRO', 'Decreto N° 1926', '07.09.2011'],
    ['IBACACHE', 'CAMPOS', 'CARLOS ENRIQUE', 'Decreto N° 1877', '01.09.2011']
  ],
  Octubre: [
    ['QUINTEROS', 'GUZMAN', 'EMILIO', 'Decreto N° 2287', '17.10.2011']
  ],
  Noviembre: [
    ['AMAYA', 'JARA', 'MERCEDES', 'Decreto N° 2570', '22.11.2011']
  ],
  Diciembre: [
    ['ECHEVERRIA', 'COÑOMAN', 'NATALY', 'Decreto N° 2722', '13.12.2011'],
    ['MARCHANT', 'ZEPEDA', 'LUIS', 'Decreto N° 2719', '13.12.2011'],
    ['MORA', 'FERNANDEZ', 'FERNANDA', 'Decreto N° 2717', '13.12.2011']
  ]
};

interface Props {
  tipoNomina: string;
  onVolver: () => void;
}

export default function Seccion9_3BenefMedicamentos2011({ tipoNomina, onVolver }: Props) {
  return (
    <Seccion9_3BenefMedicamentos
      anio="2011"
      tipoNomina={tipoNomina}
      onVolver={onVolver}
      registrosPorMes={registrosPorMes}
    />
  );
}
