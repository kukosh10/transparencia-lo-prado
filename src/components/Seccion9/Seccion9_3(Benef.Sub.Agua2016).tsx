import Seccion9_3_Benef_Sub_Agua from './Seccion9_3(Benef.Sub.Agua)';

const mesesSinDatos = ['Octubre', 'Noviembre', 'Diciembre'];

interface Props {
  tipoNomina: string;
  onVolver: () => void;
}

export default function Seccion9_3_Benef_Sub_Agua2016({ tipoNomina, onVolver }: Props) {
  return (
    <Seccion9_3_Benef_Sub_Agua
      anio="2016"
      tipoNomina={tipoNomina}
      onVolver={onVolver}
      mesesSinDatos={mesesSinDatos}
    />
  );
}
