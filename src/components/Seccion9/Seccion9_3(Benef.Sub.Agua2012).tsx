import Seccion9_3_Benef_Sub_Agua from './Seccion9_3(Benef.Sub.Agua)';

interface Props {
  tipoNomina: string;
  onVolver: () => void;
}

export default function Seccion9_3_Benef_Sub_Agua2012({ tipoNomina, onVolver }: Props) {
  return <Seccion9_3_Benef_Sub_Agua anio="2012" tipoNomina={tipoNomina} onVolver={onVolver} />;
}
