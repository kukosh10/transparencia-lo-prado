import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_6RecCatastroProps {
  anio: string;
  busqueda: string;
}

interface RecepcionCatastrofe {
  denominacion: string;
  tipoNorma: string;
  numero: string;
  nombreTitulo: string;
  fecha: string;
  fechaPublicacion: string;
  tieneEfectosGenerales: string;
  ultimaActualizacion: string;
  descripcion: string;
  enlacePublicacion: string;
}

const crearRegistro = (
  numero: string,
  nombreTitulo: string,
  fecha: string,
  tieneEfectosGenerales: string,
  fechaPublicacion = 'Pagina Web',
  tipoNorma = 'Actos resolutivo',
  ultimaActualizacion = 'Sin Modificación',
  descripcion = 'REGULARIZACION'
): RecepcionCatastrofe => ({
  denominacion: 'REGULARIZACION ARTICULO 5.1.4 N°7 DE OGUC. (CATASTROFE)',
  tipoNorma,
  numero,
  nombreTitulo,
  fecha,
  fechaPublicacion,
  tieneEfectosGenerales,
  ultimaActualizacion,
  descripcion,
  enlacePublicacion: ''
});

const registrosPorAnio: Record<string, RecepcionCatastrofe[]> = {
  '2016': [
    crearRegistro('77', 'VIVIENDA COMERCIO', '29.08.16', 'Sí'),
    crearRegistro('76', 'VIVIENDA COMERCIO', '29.08.16', 'Sí'),
    crearRegistro('75', 'VIVIENDA', '26.08.16', 'No'),
    crearRegistro('74', 'VIVIENDA', '26.08.16', 'No'),
    crearRegistro('73', 'VIVIENDA', '23.08.16', 'No'),
    crearRegistro('72', 'VIVIENDA', '19.08.16', 'No'),
    crearRegistro('71', 'VIVIENDA INDUSTRIA COMERCIO', '18.08.16', 'Sí'),
    crearRegistro('70', 'VIVIENDA COMERCIO', '16.08.16', 'Sí'),
    crearRegistro('69', 'VIVIENDA', '12.08.16', 'No'),
    crearRegistro('68', 'VIVIENDA COMERCIO', '10.08.16', 'Sí'),
    crearRegistro('67', 'VIVIENDA', '08.08.16', 'No'),
    crearRegistro('66', 'VIVIENDA', '08.08.16', 'No'),
    crearRegistro('65', 'VIVIENDA', '08.08.16', 'No'),
    crearRegistro('64', 'VIVIENDA COMERCIO', '05.08.16', 'Sí'),
    crearRegistro('63', 'VIVIENDA', '03.08.16', 'No'),
    crearRegistro('62', 'VIVIENDA', '02.08.16', 'No'),
    crearRegistro('61', 'LOCAL COMERCIAL', '02.08.16', 'Sí'),
    crearRegistro('60', 'VIVIENDA', '27.07.16', 'No'),
    crearRegistro('59', 'VIVIENDA', '27.07.16', 'No'),
    crearRegistro('58', 'VIVIENDA', '25.07.16', 'No'),
    crearRegistro('57', 'VIVIENDA', '20.07.16', 'No'),
    crearRegistro('56', 'VIVIENDA COMERCIO', '20.07.16', 'Sí'),
    crearRegistro('55', 'VIVIENDA', '18.07.16', 'No'),
    crearRegistro('54', 'VIVIENDA COMERCIO', '18.07.16', 'Sí'),
    crearRegistro('53', 'VIVIENDA', '15.07.16', 'No'),
    crearRegistro('52', 'VIVIENDA', '07.07.16', 'No'),
    crearRegistro('51', 'VIVIENDA', '04.07.16', 'No'),
    crearRegistro('50', 'COMERCIO', '04.07.16', 'Sí'),
    crearRegistro('49', 'VIVIENDA OFICINAS', '29.06.16', 'Sí'),
    crearRegistro('48', 'VIVIENDA', '29.06.16', 'Sí'),
    crearRegistro('47', 'VIVIENDA COMERCIO', '29.06.16', 'Sí'),
    crearRegistro('46', 'COMERCIO', '21.06.16', 'Sí'),
    crearRegistro('45', 'VIVIENDA COMERCIO', '20.06.16', 'Sí'),
    crearRegistro('44', 'VIVIENDA COMERCIO', '17.06.16', 'Sí'),
    crearRegistro('43', 'VIVIENDA', '16.06.16', 'No'),
    crearRegistro('42', 'VIVIENDA', '14.06.16', 'No'),
    crearRegistro('41', 'VIVIENDA', '14.06.16', 'No'),
    crearRegistro('40', 'VIVIENDA', '13.06.16', 'No'),
    crearRegistro('39', 'VIVIENDA COMERCIO', '09.06.16', 'Sí'),
    crearRegistro('38', 'VIVIENDA', '09.06.16', 'No'),
    crearRegistro('37', 'VIVIENDA', '02.06.16', 'No'),
    crearRegistro('36', 'VIVIENDA', '31.05.2016', 'No'),
    crearRegistro('35', 'VIVIENDA', '25.05.2016', 'No'),
    crearRegistro('34', 'COMERCIO', '25.05.2016', 'Sí'),
    crearRegistro('33', 'VIVIENDA', '24.05.2016', 'No'),
    crearRegistro('32', 'VIVIENDA', '23.05.2016', 'No'),
    crearRegistro('31', 'VIVIENDA COMERCIO', '20.05.2016', 'Sí'),
    crearRegistro('30', 'VIVIENDA', '19.05.2016', 'No'),
    crearRegistro('29', 'VIVIENDA', '09.05.2016', 'No'),
    crearRegistro('28', 'VIVIENDA COMERCIO', '04.05.2016', 'Sí'),
    crearRegistro('27', 'VIVIENDA COMERCIO', '03.05.2016', 'Sí'),
    crearRegistro('26', 'VIVIENDA', '02.06.2016', 'No'),
    crearRegistro('25', 'VIVIENDA', '02.05.2016', 'No'),
    crearRegistro('24', 'VIVIENDA', '25.04.2016', 'No'),
    crearRegistro('23', 'VIVIENDA TALLER', '19.04.2016', 'Sí'),
    crearRegistro('22', 'VIVIENDA', '12.04.2016', 'No'),
    crearRegistro('21', 'VIVIENDA', '04.04.2016', 'No'),
    crearRegistro('20', 'EQUIPAMIENTO DEPORTIVO', '15.03.2016', 'Sí'),
    crearRegistro('19', 'VIVIENDA Y EQUIPAMIENTO', '14.03.2016', 'No'),
    crearRegistro('18', 'VIVIENDA', '11.03.2016', 'No'),
    crearRegistro('17', 'VIVIENDA Y EQUIPAMIENTO', '09.03.2016', 'No'),
    crearRegistro('16', 'VIVIENDA', '03.03.2016', 'No'),
    crearRegistro('14', 'COMERCIO', '26.02.2016', 'Sí', 'Página Web, de fecha 05.03.2016'),
    crearRegistro('13', 'VIVIENDA', '17.02.2016', 'No', 'Página Web, de fecha 05.03.2016'),
    crearRegistro('12', 'VIVIENDA', '15.02.2016', 'No', 'Página Web, de fecha 05.03.2016'),
    crearRegistro('11', 'VIVIENDA', '12.02.2016', 'No', 'Página Web, de fecha 05.03.2016'),
    crearRegistro('10', 'VIVIENDA', '12.02.2016', 'No', 'Página Web, de fecha 05.03.2016'),
    crearRegistro('9', 'VIVIENDA', '10.02.2016', 'No', 'Página Web, de fecha 05.03.2016'),
    crearRegistro('8', 'VIVIENDA', '05.02.2016', 'No', 'Página Web, de fecha 05.03.2016'),
    crearRegistro('7', 'VIVIENDA', '04.02.2016', 'No', 'Página Web, de fecha 05.03.2016'),
    crearRegistro('5', 'VIVIENDA', '28.01.2016', 'No', 'Página Web, de fecha 05.02.2016'),
    crearRegistro('4', 'VIVIENDA', '19.01.2016', 'No', 'Página Web, de fecha 05.02.2016'),
    crearRegistro('3', 'VIVIENDA', '07.01.2016', 'No', 'Página Web, de fecha 05.02.2016'),
    crearRegistro('2', 'VIVIENDA', '04.01.2016', 'No', 'Página Web, de fecha 05.02.2016'),
    crearRegistro('1', 'VIVIENDA', '04.01.2016', 'No', 'Página Web, de fecha 05.02.2016')
  ],
  '2015': [
    crearRegistro('21', 'VIVIENDA', '21.12.2015', 'No', 'Página Web, fecha de publicación 05.01.2016'),
    crearRegistro('20', 'VIVIENDA', '27.11.2015', 'No', 'Página Web, fecha de publicación 05.12.2015'),
    crearRegistro('19', 'DEPORTIVO', '09.11.2015', 'Sí', 'Página Web, fecha de publicación 05.12.2015'),
    crearRegistro('18', 'VIVIENDA COMERCIO', '30.10.2015', 'Sí', 'Página Web, fecha de publicación 05.11.2015'),
    crearRegistro('17', 'VIVIENDA', '21.10.2015', 'No', 'Página Web, fecha de publicación 05.11.2015'),
    crearRegistro('16', 'VIVIENDA COMERCIO', '16.10.2015', 'Sí', 'Página Web, fecha de publicación 05.11.2015'),
    crearRegistro('15', 'VIVIENDA', '06.10.2015', 'No', 'Página Web, fecha de publicación 05.11.2015'),
    crearRegistro('14', 'VIVIENDA', '19.08.2015', 'No', 'Página Web, fecha de publicación 05.09.2015'),
    crearRegistro('13', 'VIVIENDA', '19.08.2015', 'No', 'Página Web, fecha de publicación 05.09.2015'),
    crearRegistro('12', 'COMERCIO', '07.08.2015', 'Sí', 'Página Web, fecha de publicación 05.08.2015'),
    crearRegistro('11', 'COMERCIO', '02.07.2015', 'Sí', 'Página Web, fecha de publicación 05.07.2015'),
    crearRegistro('10', 'COMERCIO', '01.07.2015', 'Sí', 'Página Web, fecha de publicación 05.07.2015'),
    crearRegistro('9', 'VIVIENDA', '22.06.2015', 'No', 'Página Web, fecha de publicación 05.07.2015'),
    crearRegistro('8', 'VIVIENDA', '08.06.2015', 'No', 'Página Web, fecha de publicación 05.07.2015'),
    crearRegistro('7', 'VIVIENDA', '07.05.2015', 'No', 'Página Web, fecha de publicación 05.06.2015'),
    crearRegistro('6', 'COMERCIO VIVIENDA', '16.04.2015', 'Sí', 'Página Web, fecha de publicación 05.05.2015'),
    crearRegistro('5', 'VIVIENDA', '27.02.2015', 'No', 'Página Web, fecha de publicación 05.03.2015', 'Actos Administrativos'),
    crearRegistro('4', 'VIVIENDA', '03.02.2015', 'No', 'Página Web, fecha de publicación 05.03.2015', 'Actos Administrativos'),
    crearRegistro('3', 'VIVIENDA', '22.01.2015', 'No', 'Página Web, fecha de publicación 05.02.2015', 'Actos Administrativos'),
    crearRegistro('2', 'CENTRO COMUNITARIO', '21.01.2015', 'Sí', 'Página Web, fecha de publicación 05.02.2015', 'Actos Administrativos'),
    crearRegistro('1', 'VIVIENDA', '09.01.2015', 'No', 'Página Web, fecha de publicación 05.02.2015', 'Actos Administrativos')
  ],
  '2014': [
    crearRegistro('30', 'VIVIENDA', '02.12.2014', 'No', 'Página Web, fecha de publicación 05.12.2014', 'Actos Administrativos'),
    crearRegistro('29', 'EQUIPAMIENTO DEPORTIVO', '20.11.2014', 'Sí', 'Página Web, fecha de publicación 05.12.2014', 'Actos Administrativos'),
    crearRegistro('28', 'VIVIENDA COMERCIO', '14.11.2014', 'Sí', 'Página Web, fecha de publicación 05.12.2014', 'Actos Administrativos'),
    crearRegistro('27', 'VIVIENDA', '05.11.2014', 'No', 'Página Web, fecha de publicación 05.12.2014', 'Actos Administrativos'),
    crearRegistro('26', 'VIVIENDA LOCAL COMERCIAL', '03.10.2014', 'Sí', 'Página Web, fecha de publicación 05.11.2014', 'Actos Administrativos'),
    crearRegistro('25', 'VIVIENDA', '26.09.2014', 'No', 'Página Web, fecha de publicación 06.10.2014', 'Actos Administrativos'),
    crearRegistro('24', 'VIVIENDA', '15.09.2014', 'No', 'Página Web, fecha de publicación 06.10.2014', 'Actos Administrativos'),
    crearRegistro('23', 'VIVIENDA Y SERVICIO', '02.09.2014', 'Sí', 'Página Web, fecha de publicación 06.10.2014', 'Actos Administrativos'),
    crearRegistro('22', 'VIVIENDA', '22.08.2014', 'No', 'Página Web, fecha de publicación 06.09.2014', 'Actos Administrativos'),
    crearRegistro('21', 'VIVIENDA Y COMERCIO', '21.08.2014', 'Sí', 'Página Web, fecha de publicación 06.09.2014', 'Actos Administrativos'),
    crearRegistro('20', 'VIVIENDA', '21.08.2014', 'No', 'Página Web, fecha de publicación 06.09.2014', 'Actos Administrativos'),
    crearRegistro('19', 'VIVIENDA', '08.08.2014', 'Sí', 'Página Web, fecha de publicación 06.09.2014', 'Actos Administrativos'),
    crearRegistro('18', 'VIVIENDA', '04.08.2014', 'Sí', 'Página Web, fecha de publicación 06.09.2014', 'Actos Administrativos'),
    crearRegistro('17', 'VIVIENDA Y COMERCIO', '01.08.2014', 'Sí', 'Página Web, fecha de publicación 06.09.2014', 'Actos Administrativos'),
    crearRegistro('16', 'VIVIENDA Y COMERCIO', '01.08.2014', 'Sí', 'Página Web, fecha de publicación 06.08.2014', 'Actos Administrativos'),
    crearRegistro('15', 'COMERCIO', '17.07.2014', 'Sí', 'Página Web, fecha de publicación 06.08.2014', 'Actos Administrativos'),
    crearRegistro('14', 'VIVIENDA', '10.07.2014', 'No', 'Página Web, fecha de publicación 06.08.2014', 'Actos Administrativos'),
    crearRegistro('13', 'VIVIENDA', '07.07.2014', 'No', 'Página Web, fecha de publicación 06.08.2014', 'Actos Administrativos'),
    crearRegistro('12', 'VIVIENDA', '07.07.2014', 'No', 'Página Web, fecha de publicación 06.08.2014', 'Actos Administrativos'),
    crearRegistro('11', 'VIVIENDA Y COMERCIO', '02.07.2014', 'Sí', 'Página Web, fecha de publicación 06.08.2014', 'Actos Administrativos'),
    crearRegistro('10', 'VIVIENDA', '12.06.2014', 'No', 'Página Web, fecha de publicación 06.07.2014', 'Actos Administrativos'),
    crearRegistro('9', 'VIVIENDA', '13.05.2014', 'No', 'Página Web, fecha de publicación 06.06.2014', 'Actos Administrativos'),
    crearRegistro('8', 'VIVIENDA', '23.04.2014', 'No', 'Página Web, fecha de publicación 06.04.2014', 'Actos Administrativos'),
    crearRegistro('7', 'VIVIENDA', '14.04.2014', 'No', 'Página Web, fecha de publicación 06.04.2014', 'Actos Administrativos'),
    crearRegistro('5', 'VIVIENDA Y COMERCIO', '29.01.2014', 'No', 'Página Web, fecha de publicación 06.02.2014', 'Actos Administrativos'),
    crearRegistro('4', 'VIVIENDA Y COMERCIO', '21.01.2014', 'No', 'Página Web, fecha de publicación 06.02.2014', 'Actos Administrativos'),
    crearRegistro('3', 'VIVIENDA', '16.01.2014', 'No', 'Página Web, fecha de publicación 06.02.2014', 'Actos Administrativos'),
    crearRegistro('2', 'VIVIENDA', '09.01.2014', 'No', 'Página Web, fecha de publicación 06.02.2014', 'Actos Administrativos'),
    crearRegistro('1', 'VIVIENDA', '03.01.2014', 'No', 'Página Web, fecha de publicación 06.02.2014', 'Actos Administrativos')
  ],
  '2013': [
    crearRegistro('15', 'VIVIENDA Y TALLER ARTESANAL', '17.12.2013', 'Sí', 'Página Web (05.01.2014)', 'Actos Administrativos'),
    crearRegistro('14', 'VIVIENDA', '16.12.2013', 'No', 'Página Web (05.01.2014)', 'Actos Administrativos'),
    crearRegistro('13', 'VIVIENDA', '12.12.2013', 'No', 'Página Web (05.01.2014)', 'Actos Administrativos'),
    crearRegistro('12', 'VIVIENDA', '20.07.2013', 'No', 'Página Web (05.08.2013)', 'Actos Administrativos'),
    crearRegistro('11', 'VIVIENDA', '20.06.2013', 'No', 'Página Web (05.07.2013)', 'Actos Administrativos'),
    crearRegistro('10', 'VIVIENDA', '19.06.2013', 'No', 'Página Web (05.07.2013)', 'Actos Administrativos'),
    crearRegistro('8', 'VIVIENDA', '17.05.2013', 'No', 'Página Web (05.06.2013)', 'Actos Administrativos'),
    crearRegistro('7', 'VIVIENDA', '06.05.2013', 'No', 'Página Web (05.06.2013)', 'Actos Administrativos'),
    crearRegistro('5', 'VIVIENDA', '05.04.2013', 'No', 'Página Web (05.05.2013)', 'Actos Administrativos'),
    crearRegistro('4', 'VIVIENDA', '14.03.2013', 'No', 'Página Web (05.05.2013)', 'Actos Administrativos'),
    crearRegistro('3', 'VIVIENDA', '14.03.2013', 'No', 'Página Web (05.05.2013)', 'Actos Administrativos'),
    crearRegistro('2', 'VIVIENDA', '08.03.2013', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos'),
    crearRegistro('1', 'VIVIENDA', '04.02.2013', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos')
  ],
  '2012': [
    crearRegistro('21', 'VIVIENDA', '12.12.2012', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos', 'LADYS PIÑA GONZALEZ'),
    crearRegistro('19', 'VIVIENDA/OFICINA', '01.10.2012', 'Sí', 'Página Web (05.03.2013)', 'Actos Administrativos', 'ROSA RAMIREZ POBLETE', 'AMPLIACION'),
    crearRegistro('18', 'VIVIENDA', '11.09.2012', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos', 'MARIA MOSCOSO AVILES', 'REG. AMPLIACION'),
    crearRegistro('17', 'VIV./L. COMERCIAL', '07.09.2012', 'Sí', 'Página Web (05.03.2013)', 'Actos Administrativos', 'LUCIA VASQUEZ PALLAMA', 'REG. AMPLIACION'),
    crearRegistro('16', 'VIVIENDA', '07.09.2012', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos', 'MARCOS ARAVENA ROMERO', 'REG. AMPLIACION'),
    crearRegistro('15', 'VIVIENDA', '04.09.2012', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos', 'OSVALDO CUEVAS CASTRO', 'REG. AMPLIACION'),
    crearRegistro('14', 'VIVIENDA', '04.09.2012', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos', 'CARLOS MATUS DE LA PARRA FREZ', 'REG. AMPLIACION'),
    crearRegistro('13', 'VIVIENDA', '20.07.2012', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos', 'GLADYS ESPINOZA RODRIGUEZ'),
    crearRegistro('13', 'VIVIENDA', '20.07.2012', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos', 'GLADYS ESPINOZA RODRIGUEZ'),
    crearRegistro('8', 'VIVIENDA', '26.04.2012', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos', 'GUILLERMO HERNAN JARA LOPEZ'),
    crearRegistro('7', 'EQUIP./DEPORTIVO', '19.04.2012', 'Sí', 'Página Web (05.03.2013)', 'Actos Administrativos', 'MUNICIPALIDAD DE LO PRADO'),
    crearRegistro('6', 'VIVIENDA', '18.04.2012', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos', 'ORLANDO GARCES LAMADRID'),
    crearRegistro('5', 'VIVIENDA', '17.04.2012', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos', 'HUGO MEZA LARA'),
    crearRegistro('4', 'VIVIENDA', '09/04/2012', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos', 'LUIS A/PEREZ AGUIRRE'),
    crearRegistro('3', 'VIVIENDA', '14.03.2012', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos', 'ANTONIO RAMOS MEWES'),
    crearRegistro('2', 'VIVIENDA, 1.LOCAL COMERCIAL', '27.02.2012', 'Sí', 'Página Web (05.03.2013)', 'Actos Administrativos', 'RAMON QUINTULEM MELIN'),
    crearRegistro('2', 'VIVIENDA', '20.11.2012', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos', 'MARGARITA PEREZ BARRIA'),
    crearRegistro('1', 'VIVIENDA, 1.LOCAL COMERCIAL', '10.02.2012', 'Sí', 'Página Web (05.03.2013)', 'Actos Administrativos', 'GRACIELA ERNESTINA FARFAN MUÑOZ')
  ],
  '2011': [
    crearRegistro('5', 'VIVIENDA', '07.11.2011', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos'),
    crearRegistro('4', 'VIVIENDA', '26.10.2011', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos'),
    crearRegistro('3', 'VIVIENDA', '21.10.2011', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos'),
    crearRegistro('2', 'VIVIENDA', '25.07.2011', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos'),
    crearRegistro('1', 'VIVIENDA', '14.07.2011', 'No', 'Página Web (05.03.2013)', 'Actos Administrativos')
  ],
  '2010': [],
  '2009': []
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

export default function Seccion7_6RecCatastro({ anio, busqueda }: Seccion7_6RecCatastroProps) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (registrosPorAnio[anio] ?? []).filter((registro) =>
    !termino || Object.values(registro).some((valor) => normalizarTexto(valor).includes(termino))
  );

  if (registros.length === 0) {
    return <EstadoSinRegistros titulo="Permiso Recepción Catástrofe" anio={anio} busqueda={busqueda} />;
  }

  return (
    <div className="space-y-2">
      {registros.map((registro, index) => (
        <article
          key={`${anio}-${registro.numero}-${index}`}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <details open className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 border-none bg-slate-50/80 p-4 text-left [&::-webkit-details-marker]:hidden">
              <span>
                <span className="block text-xs font-semibold text-blue-800">{registro.denominacion}</span>
                <span className="mt-1 block text-xs text-slate-600">
                  {registro.tipoNorma} N° {registro.numero} — {registro.fecha} · {registro.nombreTitulo}
                </span>
              </span>
            </summary>
            <div className="grid grid-cols-1 gap-4 border-t border-slate-100 bg-white p-4 sm:grid-cols-2 xl:grid-cols-4">
              <div><p className="text-xs text-slate-500">Denominación</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.denominacion}</p></div>
              <div><p className="text-xs text-slate-500">Tipo de norma</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.tipoNorma}</p></div>
              <div><p className="text-xs text-slate-500">Número</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.numero}</p></div>
              <div><p className="text-xs text-slate-500">Nombre / título</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.nombreTitulo}</p></div>
              <div><p className="text-xs text-slate-500">Fecha</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fecha}</p></div>
              <div><p className="text-xs text-slate-500">Fecha, medio y forma de publicación</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fechaPublicacion}</p></div>
              <div><p className="text-xs text-slate-500">Tiene efectos generales</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.tieneEfectosGenerales}</p></div>
              <div><p className="text-xs text-slate-500">Fecha última actualización</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.ultimaActualizacion}</p></div>
              <div><p className="text-xs text-slate-500">Breve descripción del objeto del acto</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.descripcion}</p></div>
              <div>
                <p className="text-xs text-slate-500">Enlace a la publicación o archivo correspondiente</p>
                <PdfLinkButton
                  href={registro.enlacePublicacion}
                  className="mt-1"
                  ariaLabel={`Abrir PDF de recepción por catástrofe número ${registro.numero}`}
                />
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}
