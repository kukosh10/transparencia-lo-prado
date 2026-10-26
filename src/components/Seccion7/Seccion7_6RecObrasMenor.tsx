import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_6RecObrasMenorProps {
  anio: string;
  busqueda: string;
}

interface RecepcionObraMenor {
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
  fechaPublicacion: string,
  tieneEfectosGenerales: string,
  descripcion: string,
  tipoNorma = 'Actos Administrativos',
  denominacion = 'RECEPCION OBRA MENOR'
): RecepcionObraMenor => ({
  denominacion,
  tipoNorma,
  numero,
  nombreTitulo,
  fecha,
  fechaPublicacion,
  tieneEfectosGenerales,
  ultimaActualizacion: 'Sin Modificación',
  descripcion,
  enlacePublicacion: ''
});

const registrosPorAnio: Record<string, RecepcionObraMenor[]> = {
  '2016': [
    crearRegistro('11', 'EQUIPAMIENTO RESIDENCIAL', '17.08.16', 'Página Web, fecha de publicación 16.09.2016', 'Sí', 'AMPLIACION', 'Actos resolutivo'),
    crearRegistro('10', 'VIVIENDA COMERCIO', '01.08.16', 'Página Web, fecha de publicación 16.09.2016', 'Sí', 'AMPLIACION', 'Actos resolutivo'),
    crearRegistro('8', 'EQUIPAMIENTO EDUCACIONAL', '11.07.16', 'Página Web, fecha de publicación 16.09.2016', 'Sí', 'MODIFICACION', 'Actos resolutivo'),
    crearRegistro('7', 'EQUIPAMIENTO', '07.07.16', 'Página Web, fecha de publicación 16.09.2016', 'Sí', 'ALTERACION', 'Actos resolutivo'),
    crearRegistro('6', 'EDUCACION', '21.04.2016', 'Página Web, fecha de publicación 16.09.2016', 'Sí', 'AMPLIACION', 'Actos resolutivo'),
    crearRegistro('5', 'VIVIENDA COMERCIO', '31.03.2016', 'Página Web, fecha de publicación 16.09.2016', 'Sí', 'AMPLIACION', 'Actos resolutivo'),
    crearRegistro('1', 'VIVIENDA COMERCIO', '25.02.2016', 'Página Web, fecha de publicación 16.09.2016', 'Sí', 'AMPLIACION', 'Actos resolutivo')
  ],
  '2015': [
    crearRegistro('14', 'EDUCACION COLEGIO', '20.10.2015', 'Página Web', 'Sí', 'AMPLIACION', 'Actos resolutivo'),
    crearRegistro('13', 'LOCAL COMERCIAL', '29.09.2015', 'Página Web', 'Sí', 'AMPLIACION', 'Actos resolutivo'),
    crearRegistro('6', 'VIVIENDA', '27.02.2015', 'Página Web', 'No', 'AMPLIACION'),
    crearRegistro('2', 'COMERCIO', '10.02.2015', 'Página Web', 'Sí', 'MODIFICACION'),
    crearRegistro('1', 'VIVIENDA COMERCIO', '30.01.2015', 'Página Web', 'Sí', 'AMPLIACION')
  ],
  '2014': [
    crearRegistro('6', 'EQUIPAMIENTO EDUCACION', '12.08.2014', 'Página Web, fecha de Publicación 05.09.2014', 'Sí', 'AMPLIACION'),
    crearRegistro('5', 'SEDE SOCIAL', '21.07.2014', 'Página Web, fecha de Publicación 05.08.2015', 'Sí', 'AMPLIACION')
  ],
  '2013': [
    crearRegistro('007', 'VIVIENDA', '30.09.2013', 'Página Web (05.10.2013)', 'No', 'AMPLIACION'),
    crearRegistro('004', 'LOCAL COMERCIAL', '29.05.2013', 'Página Web (05.06.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('003', 'EQUIPAMIENTO DEPORTIVO', '23.04.2013', 'Página Web (05.05.2013)', 'Sí', 'OBRA MENOR CON AUMENTO DE SUPERFICIE'),
    crearRegistro('001', 'LOCAL COMERCIAL', '21.03.2013', 'Página Web (05.03.2013)', 'Sí', 'MODIFICACION OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR')
  ],
  '2012': [
    crearRegistro('18', 'VIVIENDA/LOCAL COMERCIAL', '14.12.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION Y MODIFICACION DE OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR'),
    crearRegistro('16', 'CENTRO DE DIALISIS', '28.11.2012', 'Página Web (05.03.2013)', 'Sí', 'OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR'),
    crearRegistro('14', 'EDUCACION', '15.11.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR'),
    crearRegistro('11', 'CULTO', '26.09.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR'),
    crearRegistro('10', 'EDUCACION', '20.08.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR'),
    crearRegistro('9', 'COMERCIO', '30.07.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR'),
    crearRegistro('8', 'COMERCIO', '11.07.2012', 'Página Web (05.03.2013)', 'Sí', 'MODIFICACION OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR'),
    crearRegistro('7A', 'SALUD', '19.06.2012', 'Página Web (05.03.2013)', 'Sí', 'MODIFICACION OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR'),
    crearRegistro('7', 'EDUCACION', '11.05.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR'),
    crearRegistro('6', 'EDUCACION', '30.04.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR'),
    crearRegistro('5', 'COMERCIO', '17.05.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR'),
    crearRegistro('4', 'CANCHA', '11.05.2012', 'Página Web (05.03.2013)', 'Sí', 'MODIFICACION OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR'),
    crearRegistro('3', 'ESCUELA DE LENGUAJE', '28.03.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION Y MODIFICACION DE OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR'),
    crearRegistro('2', 'LOCAL COMERCIAL', '27.03.2012', 'Página Web (05.03.2013)', 'Sí', 'MODIFICACION OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR'),
    crearRegistro('1A', 'ESCUELA', '03.02.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR'),
    crearRegistro('1', 'LOCAL COMERCIAL', '03.02.2012', 'Página Web (05.03.2013)', 'Sí', 'MODIFICACION OBRA MENOR', 'Actos Administrativos', 'RECEPCION DE obras MENOR')
  ],
  '2011': [
    crearRegistro('033', 'EDUCACION', '28.11.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('031', 'LOCAL COMERCIAL', '04.11.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('029', 'EDUCACION', '26.08.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('027', 'COMERCIO', '15.07.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('026', 'LOCAL COMERCIAL', '30.06.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('024', 'EDUCACION', '30.06.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('019', 'VIVIENDA', '21.04.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('017', 'VIVIENDA/LOCAL COMERCIAL', '14.04.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('015', 'VIVIENDA', '14.04.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('013', 'VIVIENDA COMERCIO', '04.04.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('012', 'VIVIENDA', '04.04.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('011', 'LOCAL COMERCIAL', '30.03.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('010', 'CONSULTA DENTAL', '16.08.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('009', 'CENTRO CIVICO', '12.07.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('008', 'LOCAL COMERCIAL', '30.06.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('007', 'VIVIENDA/LOCAL COMERCIAL', '29.06.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('008', 'COMERCIO', '28.03.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('007', 'VIVIENDA', '16.03.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('006', 'VIVIENDA', '11.02.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('005', 'COMERCIO', '03.05.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('004', 'VILLA SAN VALENTIN VILLA CAUPOLICAN', '25.04.2011', 'Página Web (05.03.2013)', 'No', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('003', 'LOCAL COMERCIAL', '12.04.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('002', 'LOCALES COMERCIALES', '11.02.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('002', 'VIVIENDA', '11.01.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('001', 'COMERCIO', '10.01.2011', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE')
  ],
  '2010': [
    crearRegistro('032', 'LOCAL COMERCIAL', '23.11.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('031', 'EDUCACION', '12.11.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('027', 'VIVIENDA', '15.09.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('026', 'LOCAL COMERCIAL', '09.09.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('010', 'EDUCACION', '15.09.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('009', 'EQUIPAMIENTO SALUD', '15.09.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('024', 'JARDIN INFANTIL', '12.08.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('020', 'VIVIENDA', '19.07.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('016', 'VIVIENDA', '08.06.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('015', 'VIVIENDA', '08.06.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('014', 'VIVIENDA/LOCAL COMERCIAL', '27.05.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('012', 'VIVIENDA', '10.05.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('010', 'COMERCIO', '10.05.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('009', 'SALA CUNA', '03.05.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('008', 'LOCAL COMERCIAL', '11.08.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('007', 'LOCAL COMERCIAL', '21.07.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('006', 'LOCAL COMERCIAL', '27.05.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('005', 'LOCAL COMERCIAL', '03.05.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('004', 'LOCAL COMERCIAL', '26.04.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('003', 'LOCAL COMERCIAL', '27.01.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('002', 'LOCAL COMERCIAL', '27.01.2010', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('001', 'LOCAL COMERCIAL OFICINAS', '', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE')
  ],
  '2009': [
    crearRegistro('045', 'VIVIENDA', '30.12.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('015', 'VIVIENDA', '15.12.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('044', 'VIVIENDA', '15.12.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('043', 'EDUCACION', '16.11.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('041', 'VIVIENDA', '19.10.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('038', 'VIVIENDA', '30.09.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('033', 'VIVIENDA', '27.08.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('032', 'COMERCIO', '20.08.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('026', 'VIVIENDA', '22.07.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('025', 'LOCAL COMERCIAL', '21.07.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('024', 'VIVIENDA', '20.07.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('023', 'VIVIENDA', '01.07.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearRegistro('017', 'LOCAL COMERCIAL', '01.06.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('015', 'CENTRO CIVICO', '27.05.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('014', 'LOCAL COMERCIAL', '29.10.2009', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('013', 'LOCAL COMERCIAL', '30.09.2009', 'Página Web (05.03.2013)', 'Sí', 'OBRA MENOR'),
    crearRegistro('012', 'LOCAL COMERCIAL', '16.09.2009', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('012', 'TELECENTRO', '14.05.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('011', 'LOCAL COMERCIAL', '03.09.2009', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('010', 'LOCAL COMERCIAL', '27.09.2009', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('009', 'LOCAL COMERCIAL', '27.07.2009', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('008', 'VIVIENDA', '04.08.2009', 'Página Web (05.03.2013)', 'No', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('007', 'EDUCACION', '29.05.2009', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('006', 'TELECENTRO', '14.05.2009', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('005', 'VIVIENDA/LOCAL COMERCIAL', '15.04.2009', 'Página Web (05.03.2013)', 'Sí', 'OBRA MENOR'),
    crearRegistro('006', 'EDUCACION', '23.02.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('005', 'LOCAL COMERCIAL', '03.02.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('004', 'EDUCACION', '23.03.2009', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('003', 'COMERCIO', '13.01.2009', 'Página Web (05.03.2013)', 'Sí', 'OBRA MENOR'),
    crearRegistro('002', 'LOCAL COMERCIAL', '08.01.2009', 'Página Web (05.03.2013)', 'Sí', 'O. MENOR SIN AUMENTO DE SUPERFICIE'),
    crearRegistro('001', 'EDUCACION', '22.01.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearRegistro('001', 'VIVIENDA', '05.01.2009', 'Página Web (05.03.2013)', 'No', 'O. MENOR SIN AUMENTO DE SUPERFICIE')
  ]
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

export default function Seccion7_6RecObrasMenor({ anio, busqueda }: Seccion7_6RecObrasMenorProps) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (registrosPorAnio[anio] ?? []).filter((registro) =>
    !termino || Object.values(registro).some((valor) => normalizarTexto(valor).includes(termino))
  );

  if (registros.length === 0) {
    return <EstadoSinRegistros titulo="Recepción Obra Menor" anio={anio} busqueda={busqueda} />;
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
                  ariaLabel={`Abrir PDF de recepción de obra menor número ${registro.numero}`}
                />
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}
