import { ArrowLeft, FileText, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

interface MetasInstitucionalesProps {
  onVolver: () => void;
}

type Modificaciones = readonly string[] | 'Sin Modificaciones' | 'Sin Enlaces';

interface MetaInstitucional {
  anio: string;
  tipo: string;
  denominacion: string;
  nombre: string;
  numero: string;
  fecha: string;
  publicacion: string;
  efectos: string;
  actualizacion: string;
  descripcion: string;
  documentoUrl: string;
  modificaciones: Modificaciones;
}

const metasPorAnio: Record<string, readonly MetaInstitucional[]> = {
  '2016': [
    {
      anio: '2016',
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Otros',
      nombre: 'Metas Institucionales',
      numero: '258',
      fecha: '07.04.16',
      publicacion: '05.05.2016, Página Web',
      efectos: 'No',
      actualizacion: 'Sin Modificaciones',
      descripcion: 'APRUEBA CUMPLIMIENTO DE METAS INSTITUCIONALES Y COLECTIVAS DEL AÑO 2015.',
      documentoUrl: '',
      modificaciones: 'Sin Modificaciones',
    },
  ],
  '2015': [
    {
      anio: '2015',
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Otros',
      nombre: 'Metas Institucionales',
      numero: '1086',
      fecha: '30.12.2015',
      publicacion: '06.01.2016, Página Web',
      efectos: 'No',
      actualizacion: 'Sin Modificaciones',
      descripcion: 'APRUEBA METAS INSTITUCIONALES Y COLECTIVAS AÑO 2016',
      documentoUrl: '',
      modificaciones: 'Sin Modificaciones',
    },
    {
      anio: '2015',
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Otros',
      nombre: 'Metas Institucionales',
      numero: '1081',
      fecha: '29.12.2015',
      publicacion: '06.01.2016, Página Web',
      efectos: 'No',
      actualizacion: 'Sin Modificaciones',
      descripcion: 'APRUEBA CUMPLIMIENTO DE LA META PRIORIDAD ALTA DE LA DIRECCIÓN DE MEDIO AMBIENTE PARA EL AÑO 2015',
      documentoUrl: '',
      modificaciones: 'Sin Modificaciones',
    },
    {
      anio: '2015',
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Otros',
      nombre: 'Metas Institucionales',
      numero: '699',
      fecha: '31.08.2015',
      publicacion: '06.01.2016, Página Web',
      efectos: 'No',
      actualizacion: 'Sin Modificaciones',
      descripcion: 'APRUEBA CUMPLIMIENTO DE META INSTITUCIONAL Y COLECTIVA DEL AÑO 2015 DE CONTROL MUNICIPAL',
      documentoUrl: '',
      modificaciones: 'Sin Modificaciones',
    },
    {
      anio: '2015',
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Otros',
      nombre: 'Metas Institucionales',
      numero: '315',
      fecha: '30.04.2015',
      publicacion: '06.05.2015, Página Web',
      efectos: 'No',
      actualizacion: 'Sin Modificaciones',
      descripcion: 'APRUEBA CUMPLIMIENTO DE META INSTITUCIONAL Y COLECTIVA DEL AÑO 2015 DE LA DIDECO.',
      documentoUrl: '',
      modificaciones: 'Sin Modificaciones',
    },
    {
      anio: '2015',
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Otros',
      nombre: 'Metas Institucionales',
      numero: '195',
      fecha: '20.03.2015',
      publicacion: '06.04.2015, Página Web',
      efectos: 'No',
      actualizacion: 'Sin Modificaciones',
      descripcion: 'APRUEBA CUMPLIMIENTO DE LOS OBJETIVOS DE LA GESTIÓN INSTITUCIONAL Y LAS METAS DE DESEMPEÑO COLECTIVO AÑO 2014',
      documentoUrl: '',
      modificaciones: 'Sin Modificaciones',
    },
  ],
  '2014': [
    {
      anio: '2014',
      tipo: 'Decreto',
      denominacion: 'Recursos Humanos',
      nombre: 'Aprueba Metas Institucionales',
      numero: '2947',
      fecha: '21.10.14',
      publicacion: '06.11.2014, Página Web',
      efectos: 'No',
      actualizacion: 'Sin Modificaciones',
      descripcion: 'APRUEBA META DE LA DIRECCIÓN DE MEDIO AMBIENTE PARA EL AÑO 2014',
      documentoUrl: '',
      modificaciones: 'Sin Modificaciones',
    },
  ],
  '2013': [
    {
      anio: '2013',
      tipo: 'Decreto',
      denominacion: 'Otros',
      nombre: 'Metas Institucionales',
      numero: '3274',
      fecha: '26.12.13',
      publicacion: '06.01.2014, Página Web',
      efectos: 'No',
      actualizacion: '15.07.14',
      descripcion: 'Aprueba metas institucionales y colectivas para el año 2014',
      documentoUrl: '',
      modificaciones: [''],
    },
  ],
  '2012': [
    {
      anio: '2012',
      tipo: 'Decreto',
      denominacion: 'Otros',
      nombre: 'Metas Institucionales',
      numero: '3220',
      fecha: '27.12.12',
      publicacion: 'Página Web',
      efectos: 'No',
      actualizacion: 'Sin Modificaciones',
      descripcion: 'APRUEBA METAS INSTITUCIONALES Y COLECTIVAS PARA EL AÑO 2013.',
      documentoUrl: '',
      modificaciones: 'Sin Enlaces',
    },
  ],
  '2011': [
    {
      anio: '2011',
      tipo: 'Decreto',
      denominacion: 'Otros',
      nombre: 'Metas Institucionales',
      numero: '365',
      fecha: '18.02.2011',
      publicacion: '12.04.2016, Página Web',
      efectos: 'No',
      actualizacion: '20.06.2011',
      descripcion: 'APRUEBA METAS INSTITUCIONALES Y COLECTIVAS AÑO 2011',
      documentoUrl: '',
      modificaciones: [''],
    },
    {
      anio: '2011',
      tipo: 'Decreto',
      denominacion: 'Otros',
      nombre: 'Metas Institucionales',
      numero: '2816',
      fecha: '20.12.2011',
      publicacion: '12.04.2016, Página Web',
      efectos: 'No',
      actualizacion: '05.10.2012',
      descripcion: 'APRUEBA METAS INSTITUCIONALES Y COLECTIVAS 2012.',
      documentoUrl: '',
      modificaciones: ['', ''],
    },
    {
      anio: '2011',
      tipo: 'Decreto',
      denominacion: 'Otros',
      nombre: 'Metas Institucionales',
      numero: '2839',
      fecha: '21.12.2011',
      publicacion: '12.04.2016, Página Web',
      efectos: 'No',
      actualizacion: 'Sin Modificaciones',
      descripcion: 'APRUEBA METAS INSTITUCIONALES Y COLECTIVAS AÑO 2011, MANUAL DE PROCEDIMIENTO "ARCHIVO MUNICIPAL"',
      documentoUrl: '',
      modificaciones: 'Sin Modificaciones',
    },
  ],
  '2010': [
    {
      anio: '2010',
      tipo: 'Decreto',
      denominacion: 'Otros',
      nombre: 'Metas Institucionales',
      numero: '34',
      fecha: '12.01.2010',
      publicacion: '12.04.2016, Página Web',
      efectos: 'No',
      actualizacion: 'Sin Modificaciones',
      descripcion: 'APRUEBA METAS INSTITUCIONALES Y COLECTIVAS AÑO 2010.',
      documentoUrl: '',
      modificaciones: [''],
    },
  ],
  '2009': [
    {
      anio: '2009',
      tipo: 'Decreto',
      denominacion: 'Resolución Fundada',
      nombre: 'Metas Institucionales',
      numero: '259',
      fecha: '28.01.2009',
      publicacion: '12.04.2016, Página Web',
      efectos: 'No',
      actualizacion: '05.10.2009',
      descripcion: 'APRUEBA METAS INSTITUCIONALES Y COLECTIVAS AÑO 2009.',
      documentoUrl: '',
      modificaciones: ['', ''],
    },
  ],
};

const anios = ['2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009'];
const encabezados = [
  'Tipo de norma',
  'Denominación (tipologías)',
  'Nombre/título',
  'Número',
  'Fecha',
  'Fecha, medio y forma de publicación',
  'Tiene efectos generales',
  'Fecha última actualización',
  'Breve descripción del objeto del acto',
  'Enlace a la publicación o archivo correspondiente',
  'Enlace relacionado a la modificación',
];

function PdfButton({ url, label }: { url: string; label: string }) {
  return (
    <a
      href={url || 'about:blank'}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-[10px] font-medium text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-50"
    >
      <FileText className="h-3 w-3 text-red-600" aria-hidden="true" />
      Ver PDF
    </a>
  );
}

export default function MetasInstitucionales({ onVolver }: MetasInstitucionalesProps) {
  const [anioSeleccionado, setAnioSeleccionado] = useState('2016');
  const [busqueda, setBusqueda] = useState('');
  const registrosFiltrados = useMemo(() => {
    const termino = busqueda.trim().toLocaleLowerCase('es');
    return (metasPorAnio[anioSeleccionado] ?? []).filter((meta) =>
      Object.values(meta).flat().join(' ').toLocaleLowerCase('es').includes(termino),
    );
  }, [anioSeleccionado, busqueda]);

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Otros antecedentes
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Metas Institucionales</span>
      </nav>

      <header className="flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Registro histórico</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Metas Institucionales</h2>
        </div>
        <label className="w-full text-xs font-medium text-slate-600 sm:w-48">
          Seleccione año
          <select
            value={anioSeleccionado}
            onChange={(event) => setAnioSeleccionado(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800"
          >
            {anios.map((anio) => <option key={anio} value={anio}>{anio}</option>)}
          </select>
        </label>
      </header>

      <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xs focus-within:border-blue-300">
        <Search className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
        <span className="sr-only">Buscar metas institucionales</span>
        <input
          type="search"
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
          placeholder="Buscar por número, descripción o tipo de norma..."
          className="w-full border-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </label>

      <section aria-label={`Metas institucionales del año ${anioSeleccionado}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1500px] table-fixed border-collapse text-left text-xs lg:min-w-0">
            <colgroup>
              <col className="w-[8%]" />
              <col className="w-[9%]" />
              <col className="w-[9%]" />
              <col className="w-[5%]" />
              <col className="w-[7%]" />
              <col className="w-[9%]" />
              <col className="w-[7%]" />
              <col className="w-[10%]" />
              <col className="w-[18%]" />
              <col className="w-[9%]" />
              <col className="w-[9%]" />
            </colgroup>
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                {encabezados.map((encabezado) => (
                  <th key={encabezado} scope="col" className="border-b border-slate-200 px-2 py-3 text-center font-semibold">{encabezado}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {registrosFiltrados.map((meta, indice) => (
                <tr key={`${meta.numero}-${indice}`} className="even:bg-slate-50/70">
                  <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{meta.tipo}</td>
                  <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{meta.denominacion}</td>
                  <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{meta.nombre}</td>
                  <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{meta.numero}</td>
                  <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{meta.fecha}</td>
                  <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{meta.publicacion}</td>
                  <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{meta.efectos}</td>
                  <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{meta.actualizacion}</td>
                  <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{meta.descripcion}</td>
                  <td className="border-b border-slate-100 px-2 py-3 text-center align-top">
                    <PdfButton url={meta.documentoUrl} label={`Ver publicación del decreto ${meta.numero}, ${meta.anio}`} />
                  </td>
                  <td className="border-b border-slate-100 px-2 py-3 text-center align-top">
                    {Array.isArray(meta.modificaciones)
                      ? meta.modificaciones.map((url, indiceModificacion) => (
                        <PdfButton
                          key={`${meta.numero}-modificacion-${indiceModificacion}`}
                          url={url}
                          label={`Ver modificación ${indiceModificacion + 1} del decreto ${meta.numero}, ${meta.anio}`}
                        />
                      ))
                      : <span className="text-slate-600">{meta.modificaciones}</span>}
                  </td>
                </tr>
              ))}
              {registrosFiltrados.length === 0 && (
                <tr>
                  <td colSpan={encabezados.length} className="px-4 py-8 text-center text-sm text-slate-500">
                    No se encontraron registros para el año {anioSeleccionado}.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <div className="border-t border-slate-200 pt-4">
        <button type="button" onClick={onVolver} className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a Otros antecedentes
        </button>
      </div>
    </div>
  );
}
