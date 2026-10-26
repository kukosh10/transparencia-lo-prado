import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_6Ley20251Props {
  anio: string;
  busqueda: string;
}

interface RegularizacionLey20251 {
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

const crearRegistro = (numero: string, fecha: string): RegularizacionLey20251 => ({
  denominacion: 'REGULARIZACION LEY 20251',
  tipoNorma: 'Actos Administrativos',
  numero,
  nombreTitulo: 'VIVIENDA',
  fecha,
  fechaPublicacion: 'Página Web (05.03.2013)',
  tieneEfectosGenerales: 'No',
  ultimaActualizacion: 'Sin Modificación',
  descripcion: 'REGULARIZACION',
  enlacePublicacion: ''
});

const registrosPorAnio: Record<string, RegularizacionLey20251[]> = {
  '2016': [],
  '2015': [],
  '2014': [],
  '2013': [],
  '2012': [{
    denominacion: 'REGULARIZACION LEY 20250',
    tipoNorma: 'Actos Administrativos',
    numero: '1',
    nombreTitulo: 'VIVIENDA',
    fecha: '07.05.2012',
    fechaPublicacion: 'Página Web (05.06.2013)',
    tieneEfectosGenerales: 'No',
    ultimaActualizacion: 'Sin Modificación',
    descripcion: 'REGULARIZACION',
    enlacePublicacion: ''
  }],
  '2011': [
    crearRegistro('45', '28.11.2011'),
    crearRegistro('44', '28.11.2011'),
    crearRegistro('42', '14.11.2011'),
    crearRegistro('41', '11.11.2011'),
    crearRegistro('40', '27.10.2011'),
    crearRegistro('39', '18.10.2011'),
    crearRegistro('38', '17.10.2011'),
    crearRegistro('37', '30.09.2011'),
    crearRegistro('36', '13.09.2011'),
    crearRegistro('35', '13.09.2011'),
    crearRegistro('34', '22.08.2011'),
    crearRegistro('33', '19.07.2011'),
    crearRegistro('32', '12.07.2011'),
    crearRegistro('31', '11.07.2011'),
    crearRegistro('30', '21.06.2001'),
    crearRegistro('29', '14.06.2011'),
    crearRegistro('28', '14.06.2011'),
    crearRegistro('27', '08.06.2011'),
    crearRegistro('26', '23.05.2011'),
    crearRegistro('25', '19.05.2011'),
    crearRegistro('24', '18.05.2011'),
    crearRegistro('23', '17.05.2011'),
    crearRegistro('22', '29.04.2011'),
    crearRegistro('21', '27.04.2011'),
    crearRegistro('20', '26.04.2011'),
    crearRegistro('19', '21.04.2011'),
    crearRegistro('18', '19.04.2011'),
    crearRegistro('17', '19.04.2011'),
    crearRegistro('16', '12.04.2011'),
    crearRegistro('15', '29.03.2011'),
    crearRegistro('14', '25.03.2011'),
    crearRegistro('13', '24.03.2011'),
    crearRegistro('12', '24.03.2011'),
    crearRegistro('11', '22.03.2011'),
    crearRegistro('10', '01.03.2011'),
    crearRegistro('9', '17.02.2011'),
    crearRegistro('8', '11.02.2011'),
    crearRegistro('7', '11.02.2011'),
    crearRegistro('6', '11.02.2011'),
    crearRegistro('5', '10.02.2011'),
    crearRegistro('4', '09.02.2011'),
    crearRegistro('3', '04.02.2011'),
    crearRegistro('2', '03.02.2011'),
    crearRegistro('1', '10.01.2011')
  ],
  '2010': [
    crearRegistro('36', '23.10.2010'),
    crearRegistro('35', '23.10.2010'),
    crearRegistro('34', '23.12.2010'),
    crearRegistro('33', '11.11.2010'),
    crearRegistro('32', '04.11.2010'),
    crearRegistro('31', '03.11.2010'),
    crearRegistro('30', '18.10.2010'),
    crearRegistro('29', '14.10.2010'),
    crearRegistro('28', '14.10.2010'),
    crearRegistro('27', '13.10.2010'),
    crearRegistro('26', '13.10.2010'),
    crearRegistro('25', '12.10.2010'),
    crearRegistro('24', '12.10.2010'),
    crearRegistro('23', '03.09.2010'),
    crearRegistro('22', '19.08.2010'),
    crearRegistro('21', '19.08.2010'),
    crearRegistro('20', '06.08.2010'),
    crearRegistro('19', '06.08.2010'),
    crearRegistro('18', '04.08.2010'),
    crearRegistro('17', '04.08.2010'),
    crearRegistro('16', '15.07.2010'),
    crearRegistro('15', '25.06.2010'),
    crearRegistro('14', '16.06.2010'),
    crearRegistro('13', '09.06.2010'),
    crearRegistro('12', '07.05.2010'),
    crearRegistro('11', '26.05.2010'),
    crearRegistro('10', '19.05.2010'),
    crearRegistro('9', '11.05.2010'),
    crearRegistro('8', '10.05.2010'),
    crearRegistro('7', '01.04.2010'),
    crearRegistro('6', '24.02.2010'),
    crearRegistro('5', '16.02.2010'),
    crearRegistro('4', '16.02.2010'),
    crearRegistro('3', '10.02.2010'),
    crearRegistro('2', '21.01.2010'),
    crearRegistro('1', '15.01.2010')
  ],
  '2009': [
    crearRegistro('97', '22.12.2009'),
    crearRegistro('96', '11.12.2009'),
    crearRegistro('95', '11.12.2009'),
    crearRegistro('94', '07.12.2009'),
    crearRegistro('93', '04.12.2009'),
    crearRegistro('92', '24.11.2009'),
    crearRegistro('91', '19.11.2009'),
    crearRegistro('90', '12.11.2009'),
    crearRegistro('89', '06.11.2009'),
    crearRegistro('88', '29.10.2009'),
    crearRegistro('87', '22.10.2009'),
    crearRegistro('86', '19.10.2009'),
    crearRegistro('85', '19.10.2009'),
    crearRegistro('84', '16.10.2009'),
    crearRegistro('83', '14.10.2009'),
    crearRegistro('82', '14.10.2009'),
    crearRegistro('81', '06.10.2009'),
    crearRegistro('80', '02.10.2009'),
    crearRegistro('79', '01.10.2009'),
    crearRegistro('78', ''),
    crearRegistro('77', '24.09.2009'),
    crearRegistro('76', '22.09.2009'),
    crearRegistro('75', '14.09.2009'),
    crearRegistro('74', '14.09.2009'),
    crearRegistro('73', '14.09.2009'),
    crearRegistro('72', '18.08.2009'),
    crearRegistro('71', '17.08.2009'),
    crearRegistro('70', '10.08.2009'),
    crearRegistro('69', '10.08.2009'),
    crearRegistro('68', '10.08.2009'),
    crearRegistro('67', '05.08.2009'),
    crearRegistro('66', '24.07.2009'),
    crearRegistro('65', '09.07.2009'),
    crearRegistro('64', '09.07.2009'),
    crearRegistro('63', '02.07.2009'),
    crearRegistro('62', ''),
    crearRegistro('61', '26.06.2009'),
    crearRegistro('60', '26.06.2009'),
    crearRegistro('59', '17.06.2009'),
    crearRegistro('58', '16.06.2009'),
    crearRegistro('57', '08.06.2009'),
    crearRegistro('56', '04.06.2009'),
    crearRegistro('55', '04.06.2009'),
    crearRegistro('54', '01.06.2009'),
    crearRegistro('53', ''),
    crearRegistro('52', '27.05.2009'),
    crearRegistro('51', '26.05.2009'),
    crearRegistro('50', '19.05.2009'),
    crearRegistro('49', '19.05.2009'),
    crearRegistro('48', '19.05.2009'),
    crearRegistro('47', '19.05.2009'),
    crearRegistro('46', '19.05.2009'),
    crearRegistro('45', '15.05.2009'),
    crearRegistro('44', '12.05.2009'),
    crearRegistro('43', '07.05.2009'),
    crearRegistro('42', '07.05.2009'),
    crearRegistro('41', '07.05.2009'),
    crearRegistro('40', '07.05.2009'),
    crearRegistro('39', '07.05.2009'),
    crearRegistro('38', '04.05.2009'),
    crearRegistro('37', '04.05.2009'),
    crearRegistro('36', '04.05.2009'),
    crearRegistro('35', '30.04.2009'),
    crearRegistro('34', '30.04.2009'),
    crearRegistro('33', '20.04.2009'),
    crearRegistro('32', '14.04.2009'),
    crearRegistro('31', '14.04.2009'),
    crearRegistro('30', '07.04.2009'),
    crearRegistro('29', '06.04.2009'),
    crearRegistro('28', '03.04.2009'),
    crearRegistro('27', '02.03.2009'),
    crearRegistro('26', '24.02.2009'),
    crearRegistro('25', '24.02.2009'),
    crearRegistro('24', '24.02.2009'),
    crearRegistro('23', '24.02.2009'),
    crearRegistro('22', '19.02.2009'),
    crearRegistro('21', '16.02.2009'),
    crearRegistro('20', '09.02.2009'),
    crearRegistro('19', '06.02.2009'),
    crearRegistro('18', '06.02.2009'),
    crearRegistro('17', '05.02.2009'),
    crearRegistro('16', '04.02.2009'),
    crearRegistro('15', '03.02.2009'),
    crearRegistro('14', '02.02.2009'),
    crearRegistro('13', '02.02.2009'),
    crearRegistro('12', '29.01.2009'),
    crearRegistro('11', '26.01.2009'),
    crearRegistro('10', '26.01.2009'),
    crearRegistro('9', '26.01.2009'),
    crearRegistro('8', '22.01.2009'),
    crearRegistro('7', '21.01.2009'),
    crearRegistro('6', '19.01.2009'),
    crearRegistro('5', '16.01.2009'),
    crearRegistro('4', '12.01.2009'),
    crearRegistro('3', '12.01.2009'),
    crearRegistro('2', '12.01.2009'),
    crearRegistro('1', '06.01.2009')
  ]
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

export default function Seccion7_6Ley20251({ anio, busqueda }: Seccion7_6Ley20251Props) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (registrosPorAnio[anio] ?? []).filter((registro) =>
    !termino || Object.values(registro).some((valor) =>
      normalizarTexto(valor).includes(termino)
    )
  );

  if (registros.length === 0) {
    return (
      <EstadoSinRegistros
        titulo="REGULARIZACION LEY 20251"
        anio={anio}
        busqueda={busqueda}
      />
    );
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
                <span className="block text-xs font-semibold text-blue-800">
                  {registro.denominacion}
                </span>
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
                  ariaLabel={`Abrir PDF de regularización Ley 20.251 número ${registro.numero}`}
                />
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}
