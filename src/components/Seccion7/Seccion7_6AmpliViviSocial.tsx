import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_6AmpliViviSocialProps {
  anio: string;
  busqueda: string;
}

interface AmpliacionViviendaSocial {
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
  fecha: string,
  fechaPublicacion: string,
  tieneEfectosGenerales: string,
  descripcion: string,
  nombreTitulo = 'VIVIENDA',
  denominacion = 'PERMISO OBRA MENOR AMPLIACION VIVIENDA SOCIAL'
): AmpliacionViviendaSocial => ({
  denominacion,
  tipoNorma: 'Actos Administrativos',
  numero,
  nombreTitulo,
  fecha,
  fechaPublicacion,
  tieneEfectosGenerales,
  ultimaActualizacion: 'Sin Modificación',
  descripcion
});

const ampliacionesViviendaSocialPorAnio: Record<string, AmpliacionViviendaSocial[]> = {
  '2016': [
    crearPermiso('19', '19.08.2016', 'Página Web, fecha de publicación 05.03.2016', 'No', 'OBRA MENOR'),
    crearPermiso('15', '14.06.2016', 'Página Web, fecha de publicación 05.03.2016', 'No', 'OBRA MENOR'),
    crearPermiso('13', '02.06.2016', 'Página Web, fecha de publicación 05.03.2016', 'No', 'OBRA MENOR'),
    crearPermiso('12', '01.06.2016', 'Página Web, fecha de publicación 05.03.2016', 'No', 'OBRA MENOR'),
    crearPermiso('11', '11.05.2016', 'Página Web, fecha de publicación 05.03.2016', 'No', 'OBRA MENOR'),
    crearPermiso('06', '08.02.2016', 'Página Web, fecha de publicación 05.03.2016', 'No', 'OBRA MENOR'),
    crearPermiso('05', '02.02.2016', 'Página Web, fecha de publicación 05.03.2016', 'No', 'OBRA MENOR')
  ],
  '2015': [
    crearPermiso('32', '16.11.2015', 'Página Web, fecha de publicación 05.12.2015', 'No', 'OBRA MENOR'),
    crearPermiso('31', '06.11.2015', 'Página Web, fecha de publicación 05.12.2015', 'No', 'OBRA MENOR'),
    crearPermiso('10', '05.06.2015', 'Página Web, fecha de publicación 05.07.2015', 'No', 'OBRA MENOR')
  ],
  '2014': [
    crearPermiso('1', '20.08.2014', 'Página Web, fecha de publicación 05.09.2014', 'No', 'AMPLIACION OBRA MENOR')
  ],
  '2013': [
    crearPermiso('5', '26.11.2013', 'Página Web (05.12.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('4', '02.10.2013', 'Página Web (05.11.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('3', '03.04.2013', 'Página Web (05.05.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('2', '30.01.2013', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('1', '21.01.2013', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL')
  ],
  '2012': [
    crearPermiso('4', '22.11.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'BODEGA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('3', '13.07.2012', 'Página Web (05.03.2013)', 'Sí', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL')
  ],
  '2011': [
    crearPermiso('23', '21.06.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('17', '03.05.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('16', '29.04.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('14', '14.04.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('9', '22.03.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('8', '16.03.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('1', '23.03.2011', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL')
  ],
  '2010': [
    crearPermiso('43', '29.10.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('11', '30.04.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('3', '26.07.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('2', '07.01.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('1', '30.04.2010', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL')
  ],
  '2009': [
    crearPermiso('56', '22.12.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('49', '02.10.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('48', '30.09.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('45', '14.09.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('43', '27.08.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('42', '24.08.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('39', '11.08.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('37', '10.08.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('27', '14.07.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('22', '09.07.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('21', '09.07.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('15', '27.05.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('12', '04.05.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL'),
    crearPermiso('2', '02.07.2009', 'Página Web (05.03.2013)', 'No', 'AMPLIACION', 'VIVIENDA', 'PERMISO DE OBRAS MENOR AMPLIACIÓN DE VIVIENDA SOCIAL')
  ]
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

const Seccion7_6AmpliViviSocial = Object.assign(function Seccion7_6AmpliViviSocial({
  anio,
  busqueda
}: Seccion7_6AmpliViviSocialProps) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (ampliacionesViviendaSocialPorAnio[anio] ?? []).filter((registro) =>
    !termino || Object.values(registro).some((valor) =>
      normalizarTexto(String(valor)).includes(termino)
    )
  );

  if (registros.length === 0) {
    return <EstadoSinRegistros titulo="Permiso Obra Menor Ampliación Vivienda Social" anio={anio} busqueda={busqueda} />;
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
              <div><p className="text-xs text-slate-500">Nombre / título</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.nombreTitulo}</p></div>
              <div><p className="text-xs text-slate-500">Fecha</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fecha}</p></div>
              <div><p className="text-xs text-slate-500">Fecha, medio y forma de publicación</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fechaPublicacion}</p></div>
              <div><p className="text-xs text-slate-500">Tiene efectos generales</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.tieneEfectosGenerales}</p></div>
              <div><p className="text-xs text-slate-500">Fecha última actualización</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.ultimaActualizacion}</p></div>
              <div><p className="text-xs text-slate-500">Breve descripción del objeto del acto</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.descripcion}</p></div>
              <div>
                <p className="text-xs text-slate-500">Enlace a la publicación o archivo correspondiente</p>
                <PdfLinkButton className="mt-1" ariaLabel={`Abrir PDF del permiso de ampliación de vivienda social número ${registro.numero}`} />
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}, { documentosPorAnio: ampliacionesViviendaSocialPorAnio });

export default Seccion7_6AmpliViviSocial;
