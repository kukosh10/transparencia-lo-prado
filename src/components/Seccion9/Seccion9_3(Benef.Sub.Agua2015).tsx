import Seccion9_3_Benef_Sub_Agua from './Seccion9_3(Benef.Sub.Agua)';

const mesesSinDatos = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

interface Props {
  tipoNomina: string;
  onVolver: () => void;
}

export default function Seccion9_3_Benef_Sub_Agua2015({ tipoNomina, onVolver }: Props) {
  return (
    <Seccion9_3_Benef_Sub_Agua
      anio="2015"
      tipoNomina={tipoNomina}
      onVolver={onVolver}
      mesesSinDatos={mesesSinDatos}
    />
  );
}
