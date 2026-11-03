import Seccion9_3BenefMedicamentos, { type RegistrosMedicamentosPorMes } from './Seccion9_3(Benef.Medicamentos)';

const registrosPorMes: RegistrosMedicamentosPorMes = {
  Enero: [
    ['MARCHANT', 'ZEPEDA', 'LUIS', 'D/A 301', '23.01.2013'],
    ['ESPINOZA', 'MOYA', 'MANUEL', 'D/A 298', '23.01.2013'],
    ['MENDEZ', 'RETAMAL', 'SOFIA', 'D/A 120', '11.01.2013'],
    ['MORA', 'FERNANDEZ', 'FERNANDA', 'D/A 43', '04.01.2013'],
    ['GOMEZ', 'ACEVEDO', 'PRISCILLA', 'D/A 08', '03.01.2013'],
    ['LIZAMA', 'ESPINOZA', 'MARIA', 'D/A 14', '03.01.2013'],
    ['CASTILLO', 'VIVANCO', 'ANA', 'D/A 19', '03.01.2013'],
    ['INSULZA', 'ADASME', 'SOFIA', 'D/A 18', '03.01.2013']
  ],
  Febrero: [
    ['GUIÑEZ', 'ALBORNOZ', 'FERNANDO', 'D/A 644', '20.02.2013'],
    ['VIDAL', 'MARAMBIO', 'SILVIA', 'D/A 630', '19.02.2013']
  ],
  Marzo: [
    ['MIRANDA', 'FERNANDEZ', 'CHRISTIAN', 'D/A 869', '20.03.2013']
  ],
  Abril: [
    ['GARRIDO', 'GODOY', 'DORA ADELIA', 'D/A 939', '02.04.2013']
  ],
  Mayo: [
    ['PATIÑO', 'BUSTOS', 'FLORENCIO', 'D/A 1398', '16.05.2013']
  ],
  Junio: [
    ['ALTAMIRANO', 'JELDRES', 'MAURICIO', 'D/A 1533', '03.06.2013'],
    ['ROSAS', 'CARRASCO', 'LAURA', 'D/A 1532', '03.06.2013']
  ],
  Julio: [
    ['MESIAS', 'OSORIO', 'NELIDA', 'D/A 1944', '12.07.2013'],
    ['CRUZ', 'MUÑOZ', 'OSCAR', 'D/A 1943', '12.07.2013'],
    ['CONTRERAS', 'INOSTROZA', 'MARIA', 'D/A 1945', '12.07.2013']
  ],
  Agosto: [
    ['SANDOVAL', 'SALINAS', 'LAURA', 'D/A 2299', '21.08.2013'],
    ['CARVALLO', 'CASTILLO', 'BRANDON', 'D/A 2305', '21.08.2013'],
    ['CASANOVA', 'VALDIVIA', 'JOCELYN', 'D/A 2312', '21.08.2013']
  ],
  Septiembre: [
    ['ROBLES', 'BECERRA', 'CARLOS', 'D/A 2638', '26.09.2013'],
    ['CELIS', 'ANABALON', 'SONIA', 'D/A 2573', '13.09.2013'],
    ['IBARRA', 'GOMEZ', 'YANET', 'D/A 2544', '11.09.2013']
  ],
  Octubre: [
    ['PIÑEIRO', 'RODRIGUEZ', 'MARTA', 'D/A 2815', '10.10.2013'],
    ['VILLAGRAN', 'CARRASCO', 'SOFIA', 'D/A 2814', '10.10.2013']
  ],
  Noviembre: [
    ['GONZALEZ', 'ESPINOZA', 'RODRIGO', 'D/A 3008', '29.11.2013']
  ],
  Diciembre: [
    ['CASANOVA', 'VALDIVIA', 'JOCELYN', 'D/A 3122', '11.12.2013'],
    ['ARRIAZA', 'DIAZ', 'SANTIAGO', 'D/A 3086', '06.12.2013']
  ]
};

interface Props {
  tipoNomina: string;
  onVolver: () => void;
}

export default function Seccion9_3BenefMedicamentos2013({ tipoNomina, onVolver }: Props) {
  return (
    <Seccion9_3BenefMedicamentos
      anio="2013"
      tipoNomina={tipoNomina}
      onVolver={onVolver}
      registrosPorMes={registrosPorMes}
    />
  );
}
