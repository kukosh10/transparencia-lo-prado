import PdfLinkButton from '../PdfLinkButton';

interface Seccion7_6ModifProEdifProps {
  anio: string;
  busqueda: string;
}

interface ModificacionProyectoEdificacion {
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

const crearModificacion = (
  numero: string,
  nombreTitulo: string,
  fecha: string,
  fechaPublicacion: string,
  tipoNorma: string,
  tieneEfectosGenerales: string,
  descripcion: string
): ModificacionProyectoEdificacion => ({
  denominacion: 'RESOLUCION DE MODIFICACION PROYECTO DE EDIFICACION',
  tipoNorma,
  numero,
  nombreTitulo,
  fecha,
  fechaPublicacion,
  tieneEfectosGenerales,
  ultimaActualizacion: 'Sin modificación',
  descripcion
});

const modificacionesProyectoEdificacionPorAnio: Record<string, ModificacionProyectoEdificacion[]> = {
  '2016': [
    crearModificacion('2', 'HABITACIONAL SEDE SOCIAL', '14.07.16', 'Página Web', 'Actos resolutivo', 'Sí', '')
  ],
  '2015': [
    crearModificacion('25', 'VIVIENDA', '07.09.2015', 'Pag Web', 'Actos resolutivo', 'No', 'AMPLIACION'),
    crearModificacion('9', 'VIVIENDA', '01.06.2015', 'Pag Web', 'Actos resolutivo', 'No', 'AMPLIACION')
  ],
  '2014': [
    crearModificacion('13', 'VIVIENDA COMERCIO', '20.11.2014', 'Página Web, fecha de publicación 05.12.2014', 'Actos Administrativos', 'Sí', 'AMPLIACION')
  ],
  '2013': [],
  '2012': [],
  '2011': [
    crearModificacion('051', 'COMERCIO', '28.11.2011', 'Página Web', 'Actos Administrativos', 'Sí', 'AMPLIACION')
  ],
  '2010': [],
  '2009': []
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

const Seccion7_6ModifProEdif = Object.assign(function Seccion7_6ModifProEdif({
  anio,
  busqueda
}: Seccion7_6ModifProEdifProps) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (modificacionesProyectoEdificacionPorAnio[anio] ?? []).filter((registro) =>
    !termino || Object.values(registro).some((valor) =>
      normalizarTexto(String(valor)).includes(termino)
    )
  );

  if (registros.length === 0) {
    return (
      <p className="py-4 text-center text-xs italic text-slate-400">
        {termino
          ? `No se encontraron registros que coincidan con “${busqueda}” para el año ${anio}.`
          : `Sin registros para el año ${anio}`}
      </p>
    );
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
              <div><p className="text-xs text-slate-500">Breve descripción del objeto del acto</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.descripcion || '—'}</p></div>
              <div>
                <p className="text-xs text-slate-500">Enlace a la publicación o archivo correspondiente</p>
                <PdfLinkButton className="mt-1" ariaLabel={`Abrir PDF de modificación de proyecto de edificación número ${registro.numero}`} />
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}, { documentosPorAnio: modificacionesProyectoEdificacionPorAnio });

export default Seccion7_6ModifProEdif;
