import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_6Ley20563Props {
  anio: string;
  busqueda: string;
}

interface PermisoLey20563 {
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

const crearPermisoLey20563 = (
  denominacion: string,
  tipoNorma: string,
  numero: string,
  nombreTitulo: string,
  fecha: string,
  fechaPublicacion: string
): PermisoLey20563 => ({
  denominacion,
  tipoNorma,
  numero,
  nombreTitulo,
  fecha,
  fechaPublicacion,
  tieneEfectosGenerales: 'Sí',
  ultimaActualizacion: 'Sin modificación',
  descripcion: 'REGULARIZACION'
});

const permisosLey20563PorAnio: Record<string, PermisoLey20563[]> = {
  '2016': [],
  '2015': [
    crearPermisoLey20563('PERMISO REGULARIZACION LEY 20563', 'Actos resolutivo', '2', 'OFICINAS Y GALPON', '02.03.2015', 'Pag Web fecha de publicación 05.04.2015'),
    crearPermisoLey20563('PERMISO REGULARIZACION LEY 20563', 'Actos Administrativos', '1', 'TALLER OFICINAS', '13.01.2015', 'Página Web, fecha de publicación 05.02.2015')
  ],
  '2014': [
    crearPermisoLey20563('PERMISO REGULARIZACION LEY 20563', 'Actos Administrativos', '4', 'JUNTA DE VECINOS', '22.12.2014', 'Página Web, fecha de publicación 05.01.2015'),
    crearPermisoLey20563('PERMISO REGULARIZACION LEY 20563', 'Actos Administrativos', '3', 'LOCAL COMERCIAL', '12.11.2014', 'Página Web, fecha de publicación 05.12.2014'),
    crearPermisoLey20563('PERMISO REGULARIZACION LEY 20563', 'Actos Administrativos', '2', 'LOCAL COMERCIAL', '29.04.2014', 'Página Web, fecha de publicación 05.05.2014')
  ],
  '2013': [
    crearPermisoLey20563('PERMISO Y RECEPCION LEY 20.563 MICROEMPRESA O EQUIP. SOCIAL', 'Actos Administrativos', '1', 'MICROEMPRESA', '06.06.2013', 'Página Web (05.07.2013)')
  ],
  '2012': [],
  '2011': [],
  '2010': [],
  '2009': []
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

const Seccion7_6Ley20563 = Object.assign(function Seccion7_6Ley20563({
  anio,
  busqueda
}: Seccion7_6Ley20563Props) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (permisosLey20563PorAnio[anio] ?? []).filter((registro) =>
    !termino || Object.values(registro).some((valor) =>
      normalizarTexto(String(valor)).includes(termino)
    )
  );

  if (registros.length === 0) {
    return <EstadoSinRegistros titulo="Permiso Regularización Ley 20.563" anio={anio} busqueda={busqueda} />;
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
                <PdfLinkButton className="mt-1" ariaLabel={`Abrir PDF de permiso de regularización Ley 20.563 número ${registro.numero}`} />
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}, { documentosPorAnio: permisosLey20563PorAnio });

export default Seccion7_6Ley20563;
