import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface PermisoEdificacion {
  denominacion: string;
  tipoNorma: string;
  numero: string;
  nombreTitulo: string;
  fecha: string;
  fechaPublicacion: string;
  tieneEfectosGenerales: string;
  ultimaActualizacion: string;
  descripcion: string;
}

const crearPermiso = (
  numero: string,
  nombreTitulo: string,
  fecha: string,
  fechaPublicacion: string,
  tieneEfectosGenerales: string,
  descripcion: string,
  ultimaActualizacion = 'Sin Modificación',
  denominacion = 'PERMISO DE EDIFICACION',
  tipoNorma = 'Actos Administrativos'
): PermisoEdificacion => ({
  denominacion,
  tipoNorma,
  numero,
  nombreTitulo,
  fecha,
  fechaPublicacion,
  tieneEfectosGenerales,
  ultimaActualizacion,
  descripcion
});

const permisosEdificacionPorAnio: Record<string, PermisoEdificacion[]> = {
  '2016': [
    crearPermiso('18', 'EQUIPAMIENTO IGLESIA', '16.08.16', 'Página Web', 'Sí', 'AMPLIACION', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('16', 'EQUIPAMIENTO EDUCACIONAL', '11.07.16', 'Página Web', 'Sí', 'ALTERACION', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('14', 'ESTACION DE SERVICIO', '07.06.16', 'Página Web', 'Sí', 'AMPLIACION', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('8', 'EQUIPAMIENTO DEPORTIVO', '24.03.2016', 'Página Web', 'Sí', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('7', 'SALUD', '23.02.2016', 'Página Web, fecha de publicación 05.03.2016', 'Sí', 'AMPLIACION', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('2', 'EDUCACION', '19.01.2016', 'Página Web, fecha de publicación 05.02.2016', 'Sí', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('1', 'EDUCACION', '11.01.2016', 'Página Web, fecha de publicación 05.02.2016', 'Sí', 'AMPLIACION', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo')
  ],
  '2015': [
    crearPermiso('36', 'DISCOTEQUE', '11.12.2015', 'Página Web, fecha de publicación 05.01.2016', 'Sí', 'AMPLIACION', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('35', 'VIVIENDAS SOCIALES Y DEPORTE', '25.11.2015', 'Página Web, fecha de publicación 05.12.2015', 'Sí', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('34', 'VIVIENDAS SOCIALES LOCAL COMUNITARIO', '25.11.2015', 'Página Web, fecha de publicación 05.12.2015', 'Sí', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('33', 'COMERCIO', '17.11.2015', 'Página Web, fecha de publicación 05.12.2015', 'Sí', 'AMPLIACION', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('28', 'COMERCIO', '16.10.2015', 'Página Web, fecha de publicación 05.11.2015', 'Sí', 'AMPLIACION', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('24', 'EDUCACION (JARDIN INFANTIL - SALA CUNA)', '03.09.2015', 'Página Web, fecha de publicación 05.10.2015', 'Sí', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('19', 'COMERCIO', '03.07.2015', 'Página Web, fecha de publicación 05.08.2015', 'Sí', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('18', 'VIVIENDA', '30.06.2015', 'Página Web, fecha de publicación 05.07.2015', 'No', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('17', 'VIVIENDA', '30.06.2015', 'Página Web, fecha de publicación 05.07.2015', 'No', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('16', 'VIVIENDA', '30.06.2015', 'Página Web, fecha de publicación 05.07.2015', 'No', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('15', 'VIVIENDA', '30.06.2015', 'Página Web, fecha de publicación 05.07.2015', 'No', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('14', 'VIVIENDA', '30.06.2015', 'Página Web, fecha de publicación 05.07.2015', 'No', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('13', 'VIVIENDA', '30.06.2015', 'Página Web, fecha de publicación 05.07.2015', 'No', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('12', 'VIVIENDA', '30.06.2015', 'Página Web, fecha de publicación 05.07.2015', 'No', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('11', 'VIVIENDA', '30.06.2015', 'Página Web, fecha de publicación 05.07.2015', 'No', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('8', 'EQUIPAMIENTO SOCIAL LOCAL COMUNITARIO', '22.04.2015', 'Página Web, fecha de publicación 05.05.2015', 'Sí', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('7', 'EQUIPAMIENTO DEPORTIVO', '13.04.2015', 'Página Web, fecha de publicación 05.05.2015', 'Sí', 'AMPLIACION', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('5', 'EQUIPAMIENTO RECREACIONAL DEPORTIVO', '05.03.2015', 'Página Web, fecha de publicación 05.04.2015', 'Sí', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('4', 'EQUIPAMIENTO RECREACIONAL DEPORTIVO', '05.03.2015', 'Página Web, fecha de publicación 05.04.2015', 'Sí', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('3', 'EQUIPAMIENTO RECREACIONAL DEPORTIVO', '05.03.2015', 'Página Web, fecha de publicación 05.04.2015', 'Sí', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo'),
    crearPermiso('2', 'EQUIPAMIENTO DEPORTIVO', '27.02.2015', 'Página Web, fecha de publicación 05.03.2015', 'Sí', 'OBRA NUEVA', 'Sin Modificación', 'PERMISO DE EDIFICACION', 'Actos resolutivo')
  ],
  '2014': [
    crearPermiso('14', 'CONSULTA MEDICA', '24.11.2014', 'Página Web, fecha de publicación 05.12.2014', 'Sí', 'OBRA NUEVA'),
    crearPermiso('12', 'EDUCACION JARDIN INFANTIL', '02.10.2014', 'Página Web, fecha de publicación 05.11.2014', 'Sí', 'AMPLIACION'),
    crearPermiso('10', 'EDUCACION JARDIN INFANTIL', '09.09.2014', 'Página Web, fecha de publicación 05.10.2014', 'Sí', 'AMPLIACION'),
    crearPermiso('8', 'COMERCIO', '11.06.2014', 'Página Web, fecha de publicación 05.07.2014', 'No', 'OBRA NUEVA')
  ],
  '2013': [
    crearPermiso('11', 'LOCALES COMERCIALES', '17.12.2013', 'Página Web (05.01.2014)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('8', 'LOCAL COMERCIAL Y OFICINA', '28.08.2013', 'Página Web (05.09.2013)', 'Sí', 'AMPLIACION'),
    crearPermiso('7', 'VIVIENDA', '23.08.2013', 'Página Web (05.09.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('6', 'EQUIPAMIENTO DEPORTIVO RECREATIVO', '12.08.2013', 'Página Web (05.09.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('4', 'EQUIPAMIENTO DEPORTIVO', '19.04.2013', 'Página Web (05.05.2013)', 'Sí', 'OBRA MENOR CON AUMENTO DE SUPERFICIE'),
    crearPermiso('3', 'ESCUELA PREBASICA JARDIN INFANTIL', '19.02.2013', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('2', 'EQUIPAMIENTO CENTRO COMUNITARIO', '14.02.2013', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('1', 'VIVIENDA/LOCAL COMERCIAL', '30.01.2013', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'Sin Modificación', 'PERMISO OBRA MENOR')
  ],
  '2012': [
    crearPermiso('17', 'VIVIENDA', '24.10.2012', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'SERAFIN LAGOS PINO'),
    crearPermiso('16', 'VIVIENDA/LOCAL COMERCIAL', '04.10.2012', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA', 'GLORIA QUIROZ MENDOZA'),
    crearPermiso('11', 'COLEGIO', '26.07.2012', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA', 'SOCIEDAD EDUCACIONAL VILLA LOURDES LTDA.'),
    crearPermiso('10', 'VIVIENDA', '20.07.2012', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'CENTRO MEDICO Y DIALISIS SANTIAGO PONIENTE LTDA.'),
    crearPermiso('9', 'COMERCIO', '10.07.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'RAIMUNDO RIQUELME SANDOVAL'),
    crearPermiso('7', 'HABITACIONAL', '07.06.2012', 'Página Web (05.03.2013)', 'No', 'AMPLIACIÓN MAYOR A 100 M2', 'JOSE ARVENA TOLEDO'),
    crearPermiso('6', 'EDUCACION', '22.05.2012', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA', 'I. MUNICIPALIDAD LO PRADO'),
    crearPermiso('1', 'COMERCIO. DISCOTHEQUE', '05.01.2012', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA')
  ],
  '2011': [
    crearPermiso('050', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('049', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('048', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('047', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('046', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('045', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('044', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('043', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('042', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('041', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('040', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('039', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('038', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('037', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('036', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('035', 'VIVIENDA', '28.11.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('033', 'COMERCIO', '04.11.2011', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('031', 'COMERCIO', '30.09.2011', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('028', 'EDUCACION', '11.08.2011', 'Página Web (05.03.2013)', 'Sí', 'REGULARIZACION'),
    crearPermiso('027', 'EDUCACION', '19.07.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearPermiso('026', 'EDUCACION', '23.06.2011', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('024', 'EQUIPAMIENTO DEPORTIVO', '22.06.2011', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('018', 'VIVIENDA', '10.05.2011', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('007', 'VIVIENDA/LOCAL COMERCIAL', '15.03.2011', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('003', 'VIVIENDA', '04.02.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearPermiso('001', 'COMERCIO', '10.01.2011', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION')
  ],
  '2010': [
    crearPermiso('048', 'OFICINA', '02.12.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearPermiso('044', 'COMERCIO', '02.11.2010', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('042', 'COMERCIO', '29.10.2010', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('041', 'JARDIN INFANTIL SALA CUNA', '05.10.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearPermiso('040', 'JARDIN INFANTIL SALA CUNA', '01.10.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearPermiso('038', 'SEDE SOCIAL', '23.08.2010', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('036', 'VIVIENDA', '20.08.2010', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('035', 'EQUIPAMIENTO EDUCACIONAL', '13.08.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearPermiso('031', 'SEDE SOCIAL', '27.07.2010', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('029', 'VIVIENDA', '13.07.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearPermiso('026', 'VIVIENDA/COMERCIO', '30.06.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearPermiso('022', 'VIVIENDA', '09.06.2010', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('017', 'CONDOMINIO VIVIENDA', '21.10.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearPermiso('013', 'VIVIENDA', '04.02.2010', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('012', 'VIVIENDA', '04.03.2010', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('007', 'LOCAL COMERCIAL', '13.04.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearPermiso('006', 'VIVIENDA/LOCAL COMERCIAL', '23.03.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearPermiso('005', 'EDUCACION', '22.01.2010', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION/CAMBIO DE USO')
  ],
  '2009': [
    crearPermiso('058', 'JARDIN INFANTIL', '30.12.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearPermiso('057', 'EDUCACION', '30.12.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearPermiso('054', 'EDUCACION', '01.12.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearPermiso('053', 'COMERCIO', '16.11.2009', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('052', 'VIVIENDA COMERCIO', '16.11.2009', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('046', 'EDUCACION', '29.09.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearPermiso('041', 'VIVIENDA LOCAL COMERCIAL', '24.08.2009', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('034', 'SUPERMERCADO', '24.07.2009', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('032', 'VIVIENDA', '21.07.2009', 'Página Web (05.03.2013)', 'No', 'OBRA NUEVA'),
    crearPermiso('025', 'EDUCACION', '09.07.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION . OBRA NUEVA'),
    crearPermiso('023', 'LOCAL COMERCIAL', '09.07.2009', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION'),
    crearPermiso('014', 'EDUCACION', '20.05.2009', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('013', 'COMERCIO', '12.05.2009', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('008', 'VIVIENDA', '14.04.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION'),
    crearPermiso('007', 'LOCALES COMERCIALES', '06.03.2009', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('004', 'LOCAL Y OFICINAS', '28.01.2009', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('003', 'SALA CUNA JARDIN INFANTIL', '28.01.2009', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA'),
    crearPermiso('001', 'OFICINA COMERCIAL', '07.01.2009', 'Página Web (05.03.2013)', 'Sí', 'OBRA NUEVA')
  ]
};

interface Seccion7_6PermEdificacionProps {
  anio: string;
  busqueda: string;
}

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

const Seccion7_6PermEdificacion = Object.assign(function Seccion7_6PermEdificacion({
  anio,
  busqueda
}: Seccion7_6PermEdificacionProps) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (permisosEdificacionPorAnio[anio] ?? []).filter((registro) =>
    !termino || Object.values(registro).some((valor) =>
      normalizarTexto(String(valor)).includes(termino)
    )
  );

  if (registros.length === 0) {
    return <EstadoSinRegistros titulo="Permiso Edificación" anio={anio} busqueda={busqueda} />;
  }

  return (
    <div className="space-y-2">
      {registros.map((registro, index) => (
        <article key={`${anio}-${registro.numero}-${index}`} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
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
              <div><p className="text-xs text-slate-500">Nombre / título</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.nombreTitulo || '—'}</p></div>
              <div><p className="text-xs text-slate-500">Fecha</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fecha}</p></div>
              <div><p className="text-xs text-slate-500">Fecha, medio y forma de publicación</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fechaPublicacion}</p></div>
              <div><p className="text-xs text-slate-500">Tiene efectos generales</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.tieneEfectosGenerales}</p></div>
              <div><p className="text-xs text-slate-500">Fecha última actualización</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.ultimaActualizacion}</p></div>
              <div><p className="text-xs text-slate-500">Breve descripción del objeto del acto</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.descripcion}</p></div>
              <div>
                <p className="text-xs text-slate-500">Enlace a la publicación o archivo correspondiente</p>
                <PdfLinkButton className="mt-1" ariaLabel={`Abrir PDF del permiso de edificación número ${registro.numero}`} />
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}, { documentosPorAnio: permisosEdificacionPorAnio });

export default Seccion7_6PermEdificacion;
