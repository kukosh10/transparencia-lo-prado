import PdfLinkButton from '../PdfLinkButton';

interface Seccion7_6AutorizacionDemoliProps {
  anio: string;
  busqueda: string;
}

interface AutorizacionDemolicion {
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

const crearAutorizacion = (
  numero: string,
  nombreTitulo: string,
  fecha: string,
  denominacion: string,
  tieneEfectosGenerales: string,
  descripcion: string
): AutorizacionDemolicion => ({
  denominacion,
  tipoNorma: 'Actos Administrativos',
  numero,
  nombreTitulo,
  fecha,
  fechaPublicacion: 'Página Web (05.03.2013)',
  tieneEfectosGenerales,
  ultimaActualizacion: 'Sin Modificación',
  descripcion
});

const autorizacionesDemolicionPorAnio: Record<string, AutorizacionDemolicion[]> = {
  '2016': [],
  '2015': [],
  '2014': [],
  '2013': [],
  '2012': [
    crearAutorizacion('6', 'IGLESIA', '05.04.2012', 'AUTORIZACIÓN OBRAS PRELIMINARES DEMOLICION', 'Sí', 'DEMOLICION TOTAL'),
    crearAutorizacion('15', 'CONSULTORIO', '06.11.2012', 'AUTORIZACIÓN OBRAS PRELIMINARES DEMOLICION', 'Sí', 'DEMOLICION TOTAL'),
    crearAutorizacion('18', 'VIVIENDA', '20.12.2012', 'AUTORIZACIÓN OBRAS PRELIMINARES DEMOLICION', 'Sí', 'DEMOLICION PARCIAL')
  ],
  '2011': [
    crearAutorizacion('014', 'CONSULTORIO', '07.09.2011', 'AUTORIZACION OBRAS PRELIMINARES Y/O DEMOLICION', 'Sí', 'DEMOLICION')
  ],
  '2010': [
    crearAutorizacion('004', 'VIVIENDA', '18.02.2010', 'AUTORIZACION OBRAS PRELIMINARES Y/O DEMOLICION', 'No', 'DEMOLICION'),
    crearAutorizacion('005', 'VIVIENDA', '23.02.2010', 'AUTORIZACION OBRAS PRELIMINARES Y/O DEMOLICION', 'No', 'DEMOLICION')
  ],
  '2009': []
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

const Seccion7_6AutorizacionDemoli = Object.assign(function Seccion7_6AutorizacionDemoli({
  anio,
  busqueda
}: Seccion7_6AutorizacionDemoliProps) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (autorizacionesDemolicionPorAnio[anio] ?? []).filter((registro) =>
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
              <div><p className="text-xs text-slate-500">Breve descripción del objeto del acto</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.descripcion}</p></div>
              <div>
                <p className="text-xs text-slate-500">Enlace a la publicación o archivo correspondiente</p>
                <PdfLinkButton className="mt-1" ariaLabel={`Abrir PDF de autorización de demolición número ${registro.numero}`} />
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}, { documentosPorAnio: autorizacionesDemolicionPorAnio });

export default Seccion7_6AutorizacionDemoli;
