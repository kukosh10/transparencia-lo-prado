import Seccion9_3_N_B_Sub_Fam2016 from './Seccion9_3(N.B.Sub.Fam2016)';

interface Props {
  tipoNomina: string;
  onVolver: () => void;
}

export default function Seccion9_3_N_B_Sub_Fam2011({ tipoNomina, onVolver }: Props) {
  return <Seccion9_3_N_B_Sub_Fam2016 anio="2011" tipoNomina={tipoNomina} onVolver={onVolver} />;
}
