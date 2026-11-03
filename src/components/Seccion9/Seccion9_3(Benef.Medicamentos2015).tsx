import Seccion9_3BenefMedicamentos, { type RegistrosMedicamentosPorMes } from './Seccion9_3(Benef.Medicamentos)';

const registrosPorMes: RegistrosMedicamentosPorMes = {
  Enero: [
    ['RIOS', 'LOPEZ', 'LAURA', 'Decreto N° 088', '14.01.2015'],
    ['SOLIS', 'CABEZAS', 'MATIAS HUMBERTO', 'Decreto N° 087', '14.01.2015']
  ],
  Febrero: [
    ['PESCE', 'REYES', 'ELBA', 'Decreto N° 354', '13.02.2015'],
    ['FUENZALIDA', 'PEREZ', 'PATRICIA', 'Decreto N° 347', '13.02.2015'],
    ['SEPULVEDA', 'FIGUEROA', 'KATHERINE', 'Decreto N° 383', '19.02.2015'],
    ['AHUMADA', 'MORAN', 'GLORIA', 'Decreto N° 382', '19.02.2015']
  ],
  Marzo: [
    ['JIMENEZ', 'CHAPARRO', 'NORMAN', 'Decreto N° 689', '27.03.2015']
  ],
  Abril: [
    ['GUERRA', 'QUINTANA', 'KARLA', 'Decreto N° 711', '01.04.2015'],
    ['VALDERRAMA', 'MONTENEGRO', 'SONIA', 'Decreto N° 780', '10.04.2015']
  ],
  Mayo: [
    ['SALDAÑA', 'ORTIZ', 'FELIX', 'Decreto N° 1038', '15.05.2015'],
    ['SEPULVEDA', 'RETAMAL', 'LUIS', 'Decreto N° 1084', '27.05.2015']
  ],
  Junio: [
    ['TAPIA', 'MENARES', 'OSVALDO', 'Decreto N° 1114', '01.06.2015'],
    ['SANTIS', 'SARMIENTO', 'MANUEL', 'Decreto N° 1310', '22.06.2015'],
    ['ARAVENA', 'CHAVEZ', 'MARIO', 'Decreto N° 1309', '22.06.2015'],
    ['LEAL', 'ROLDAN', 'JOSE MIGUEL', 'Decreto N° 1308', '22.06.2015']
  ],
  Julio: [
    ['MADARIAGA', 'MIRANDA', 'GINA', 'Decreto N° 1353', '02.07.2015'],
    ['CAYUPAN', 'ANTIL', 'NATALIA', 'Decreto N° 1354', '02.07.2015'],
    ['CEA', 'MORENO', 'PAULA', 'Decreto N° 1357', '02.07.2015'],
    ['TOLEDO', 'CARDEMIL', 'CALEB', 'Decreto N° 1427', '09.07.2015'],
    ['QUEZADA', 'MUÑOZ', 'ALEJANDRO', 'Decreto N° 1592', '24.07.2015']
  ],
  Agosto: [
    ['DURAN', 'SOTO', 'YOHANNA', 'Decreto N° 1746', '07.08.2015'],
    ['QUEZADA', 'ARAYA', 'ISAI', 'Decreto N° 1895', '24.08.2015'],
    ['GUERRERO', 'GUERRERO', 'JOSE IGNACIO', 'Decreto N° 1896', '24.08.2015'],
    ['CANALES', 'VEGA', 'GUILLERMINA', 'Decreto N° 1897', '24.08.2015']
  ],
  Septiembre: [
    ['BARREDA', 'GONZALEZ', 'MARIA JOSE', 'Decreto N° 2032', '07.09.2015']
  ]
};

interface Props {
  tipoNomina: string;
  onVolver: () => void;
}

export default function Seccion9_3BenefMedicamentos2015({ tipoNomina, onVolver }: Props) {
  return (
    <Seccion9_3BenefMedicamentos
      anio="2015"
      tipoNomina={tipoNomina}
      onVolver={onVolver}
      registrosPorMes={registrosPorMes}
    />
  );
}
