import Seccion9_3BenefMedicamentos from './Seccion9_3(Benef.Medicamentos)';

interface Props {
  tipoNomina: string;
  onVolver: () => void;
}

export default function Seccion9_3BenefMedicamentos2016({ tipoNomina, onVolver }: Props) {
  return (
    <Seccion9_3BenefMedicamentos
      anio="2016"
      tipoNomina={tipoNomina}
      onVolver={onVolver}
      registrosPorMes={{}}
    />
  );
}
