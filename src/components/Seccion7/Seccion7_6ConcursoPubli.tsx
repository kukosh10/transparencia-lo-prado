import PdfLinkButton from '../PdfLinkButton';

interface ConcursoPublico {
  tipoNorma: string;
  denominacion: string;
  nombreTitulo: string;
  numero: string;
  fecha: string;
  fechaPublicacion: string;
  tieneEfectosGenerales: string;
  ultimaActualizacion: string;
  descripcion: string;
  enlaceModificacion: string;
  cantidadEnlacesModificacion?: number;
}

const concursosPublicosPorAnio: Record<string, ConcursoPublico[]> = {
  '2016': [],
  '2015': [{
    tipoNorma: 'Decreto',
    denominacion: 'Recursos Humanos',
    nombreTitulo: 'Llamado a concurso público',
    numero: '435',
    fecha: '10.06.2015',
    fechaPublicacion: '11.06.2015, página web',
    tieneEfectosGenerales: 'Sí',
    ultimaActualizacion: 'No aplica',
    descripcion: '1.- Aprueba Bases Administrativas. 2.- Llama a Concurso público, para proveer cargos vacantes.',
    enlaceModificacion: 'No aplica'
  }],
  '2014': [{
    tipoNorma: 'Decreto',
    denominacion: 'Recursos Humanos',
    nombreTitulo: 'Llamado a concurso público',
    numero: '1592',
    fecha: '18.06.14',
    fechaPublicacion: '19.06.2014 Página Web',
    tieneEfectosGenerales: 'Sí',
    ultimaActualizacion: 'Sin Modificaciones',
    descripcion: 'APRUEBA BASES ADMINISTRATIVAS, LLAMA A CONCURSO PUBLICO PARA PROVEER CARGO VACANTE CARGO DIRECTIVO GRADO 6° PARA CUMPLIR FUNCIONES DE DIRECTOR DE CONTROL MUNICIPAL.',
    enlaceModificacion: 'Sin Modificaciones'
  }, {
    tipoNorma: 'Decreto',
    denominacion: 'Recursos Humanos',
    nombreTitulo: 'Llamado a concurso público',
    numero: '1001',
    fecha: '14.04.14',
    fechaPublicacion: '25.04.2014 Página Web',
    tieneEfectosGenerales: 'Sí',
    ultimaActualizacion: '05.06.2014',
    descripcion: 'LLAMA A CONCURSO PUBLICO PARA PROVEER CARGO VACANTE GRADO 6°.',
    enlaceModificacion: 'PDF',
    cantidadEnlacesModificacion: 2
  }],
  '2013': [{
    tipoNorma: 'Decreto',
    denominacion: 'Recursos Humanos',
    nombreTitulo: 'Llamado a concurso público',
    numero: '1295',
    fecha: '07.05.13',
    fechaPublicacion: '21.06.2013 Página Web',
    tieneEfectosGenerales: 'Sí',
    ultimaActualizacion: 'Sin Modificaciones',
    descripcion: 'APRUEBA BASES ADMINISTRATIVAS Y LLAMA A CONCURSO PUBLICO PARA PROVEER CARGO VACANTE DE SECRETARIO MUNICIPAL.',
    enlaceModificacion: 'Sin enlace'
  }, {
    tipoNorma: 'Decreto',
    denominacion: 'Recursos Humanos',
    nombreTitulo: 'Llamado a concurso público',
    numero: '1946',
    fecha: '12.07.2013',
    fechaPublicacion: '09.08.2013 Página Web',
    tieneEfectosGenerales: 'Sí',
    ultimaActualizacion: 'Sin Modificaciones',
    descripcion: '1.- APRUEBA BASES ADMINISTRATIVAS. 2.- LLAMA A CONCURSO PUBLICO, PARA PROVEER CARGOS VACANTES.',
    enlaceModificacion: 'Sin enlace'
  }],
  '2012': [],
  '2011': [{
    tipoNorma: 'Decreto',
    denominacion: 'Recursos Humanos',
    nombreTitulo: 'Llamado a concurso público',
    numero: '1103',
    fecha: '01.06.11',
    fechaPublicacion: '03.05.2013 Página Web',
    tieneEfectosGenerales: 'Sí',
    ultimaActualizacion: 'Sin Modificaciones',
    descripcion: 'DECLARA DESIERTO EL CONCURSO PARA PROVEER EL CARGO DE DIRECTOR DEL ESTABLECIMIENTO POETA VICENTE HUIDOBRO POR RAZONES QUE SE INDICA.',
    enlaceModificacion: 'Sin Enlaces'
  }, {
    tipoNorma: 'Decreto',
    denominacion: 'Recursos Humanos',
    nombreTitulo: 'Llamado a concurso público',
    numero: '1337',
    fecha: '29.06.11',
    fechaPublicacion: '03.05.2013 Página Web',
    tieneEfectosGenerales: 'Sí',
    ultimaActualizacion: 'Sin Modificaciones',
    descripcion: 'APRUEBA BASES ADMINISTRATIVAS Y LLAMA A CONCURSO PUBLICO, PARA PROVEER CARGOS VACANTES.',
    enlaceModificacion: 'PDF',
    cantidadEnlacesModificacion: 1
  }, {
    tipoNorma: 'Decreto',
    denominacion: 'Recursos Humanos',
    nombreTitulo: 'Modificaciones',
    numero: '1510',
    fecha: '14.07.11',
    fechaPublicacion: '03.05.2013 Página Web',
    tieneEfectosGenerales: 'Sí',
    ultimaActualizacion: 'Sin Modificaciones',
    descripcion: 'RECTIFICA DECRETO ALCALDICIO N°1357 DE FECHA 29 DE JUNIO DE 2011 QUE APRUEBA BASES Y LLAMA A CONCURSO PUBLICO.',
    enlaceModificacion: 'PDF',
    cantidadEnlacesModificacion: 1
  }],
  '2010': [{
    tipoNorma: 'Decreto',
    denominacion: 'Recursos Humanos',
    nombreTitulo: 'Llamado a concurso público',
    numero: '220',
    fecha: '28.01.10',
    fechaPublicacion: '03.05.2013 Página Web',
    tieneEfectosGenerales: 'Sí',
    ultimaActualizacion: 'Sin Modificaciones',
    descripcion: 'APRUEBA BASES ADMINISTRATIVAS Y LLAMA A CONCURSO PUBLICO PARA PROVEER CARGO VACANTE “SECRETARIO TECNICO DE SEGURIDAD PUBLICA 2010”.',
    enlaceModificacion: 'Sin enlace'
  }, {
    tipoNorma: 'Decreto',
    denominacion: 'Recursos Humanos',
    nombreTitulo: 'Llamado a concurso público',
    numero: '353',
    fecha: '18.02.10',
    fechaPublicacion: '03.05.2013 Página Web',
    tieneEfectosGenerales: 'Sí',
    ultimaActualizacion: 'Sin Modificaciones',
    descripcion: 'APRUEBA BASES ADMINISTRATIVAS Y LLAMA A CONCURSO PARA PROVEER CARGO VACANTE “SECRETARIO TECNICO DE SEGURIDAD PUBLICA 2010”.',
    enlaceModificacion: 'Sin enlace'
  }, {
    tipoNorma: 'Decreto',
    denominacion: 'Recursos Humanos',
    nombreTitulo: 'Llamado a concurso público',
    numero: '618',
    fecha: '25.03.10',
    fechaPublicacion: '03.05.2013 Página Web',
    tieneEfectosGenerales: 'Sí',
    ultimaActualizacion: 'Sin Modificaciones',
    descripcion: 'APRUEBA BASES ADMINISTRATIVAS Y LLAMA A CONCURSO PUBLICO PARA PROVEER CARGOS “APOYO FAMILIAR UIF”.',
    enlaceModificacion: 'Sin enlace'
  }, {
    tipoNorma: 'Decreto',
    denominacion: 'Recursos Humanos',
    nombreTitulo: 'Llamado a concurso público',
    numero: '1424',
    fecha: '02.08.10',
    fechaPublicacion: '03.05.2013 Página Web',
    tieneEfectosGenerales: 'Sí',
    ultimaActualizacion: 'Sin Modificaciones',
    descripcion: 'APRUEBA BASES ADMINISTRATIVAS Y LLAMA A CONCURSO PUBLICO PARA PROVEER CARGO VACANTE EN LA PLANTA MUNICIPAL, EN ESCALAFON PROFESIONAL, GRADO 6° DE LA E.U.M.',
    enlaceModificacion: 'Sin enlace'
  }],
  '2009': [{
    tipoNorma: 'Decreto',
    denominacion: 'Recursos Humanos',
    nombreTitulo: 'Llamado a concurso público',
    numero: '430',
    fecha: '20.02.09',
    fechaPublicacion: '03.05.2013 Página Web',
    tieneEfectosGenerales: 'Sí',
    ultimaActualizacion: 'Sin Modificaciones',
    descripcion: 'APRUEBA BASES ADMINISTRATIVAS Y LLAMA A CONCURSO PUBLICO PARA PROVEER CARGO VACANTE “SECRETARIO TECNICO DE SEGURIDAD PUBLICA 2009”.',
    enlaceModificacion: 'Sin enlace'
  }]
};

interface Seccion7_6ConcursoPubliProps {
  anio: string;
  busqueda: string;
}

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

export default function Seccion7_6ConcursoPubli({
  anio,
  busqueda
}: Seccion7_6ConcursoPubliProps) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (concursosPublicosPorAnio[anio] ?? []).filter((registro) =>
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
                  {registro.tipoNorma} · {registro.denominacion} · {registro.nombreTitulo}
                </span>
                <span className="mt-1 block text-xs text-slate-600">
                  {registro.tipoNorma} N° {registro.numero} — {registro.fecha}
                </span>
              </span>
            </summary>
            <div className="grid grid-cols-1 gap-4 border-t border-slate-100 bg-white p-4 sm:grid-cols-2 xl:grid-cols-4">
              <div><p className="text-xs text-slate-500">Número</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.numero}</p></div>
              <div><p className="text-xs text-slate-500">Fecha</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fecha}</p></div>
              <div><p className="text-xs text-slate-500">Fecha, medio y forma de publicación</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fechaPublicacion}</p></div>
              <div><p className="text-xs text-slate-500">Tiene efectos generales</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.tieneEfectosGenerales}</p></div>
              <div><p className="text-xs text-slate-500">Fecha última actualización</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.ultimaActualizacion}</p></div>
              <div><p className="text-xs text-slate-500">Breve descripción del objeto del acto</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.descripcion}</p></div>
              <div>
                <p className="text-xs text-slate-500">Enlace a la publicación o archivo</p>
                <PdfLinkButton className="mt-1" ariaLabel={`Abrir PDF de concurso público número ${registro.numero}`} />
              </div>
              <div>
                <p className="text-xs text-slate-500">Enlace relacionado a la modificación</p>
                {registro.cantidadEnlacesModificacion ? (
                  Array.from({ length: registro.cantidadEnlacesModificacion }, (_, enlaceIndex) => (
                    <PdfLinkButton key={enlaceIndex} className="mt-1" ariaLabel={`Abrir PDF de modificación ${enlaceIndex + 1} de concurso público número ${registro.numero}`} />
                  ))
                ) : (
                  <p className="mt-1 text-xs font-medium text-slate-900">{registro.enlaceModificacion}</p>
                )}
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}
