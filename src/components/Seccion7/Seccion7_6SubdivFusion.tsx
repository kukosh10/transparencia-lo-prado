import PdfLinkButton from '../PdfLinkButton';

interface Seccion7_6SubdivFusionProps {
  anio: string;
  busqueda: string;
}

interface SubdivisionFusion {
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

const crearSubdivisionFusion = (
  numero: string,
  nombreTitulo: string,
  fecha: string,
  fechaPublicacion: string,
  tipoNorma: string,
  tieneEfectosGenerales: string,
  descripcion: string
): SubdivisionFusion => ({
  denominacion: 'RESOLUCION DE APROBACION DE SUBDIVISION O FUSION',
  tipoNorma,
  numero,
  nombreTitulo,
  fecha,
  fechaPublicacion,
  tieneEfectosGenerales,
  ultimaActualizacion: 'Sin Modificación',
  descripcion
});

const subdivisionesFusionPorAnio: Record<string, SubdivisionFusion[]> = {
  '2016': [],
  '2015': [
    crearSubdivisionFusion('4', 'VIVIENDA', '01.09.2015', 'Pag Web, con fecha 06.09.2015', 'Actos resolutivo', 'No', 'FUSION')
  ],
  '2014': [],
  '2013': [],
  '2012': [],
  '2011': [],
  '2010': [],
  '2009': [
    crearSubdivisionFusion('2', 'COMERCIO', '03.07.2009', 'Página Web (05.03.2013)', 'Actos Administrativos', 'Sí', 'DEMOLICION')
  ]
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

const Seccion7_6SubdivFusion = Object.assign(function Seccion7_6SubdivFusion({
  anio,
  busqueda
}: Seccion7_6SubdivFusionProps) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (subdivisionesFusionPorAnio[anio] ?? []).filter((registro) =>
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
                <PdfLinkButton className="mt-1" ariaLabel={`Abrir PDF de subdivisión o fusión número ${registro.numero}`} />
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}, { documentosPorAnio: subdivisionesFusionPorAnio });

export default Seccion7_6SubdivFusion;
