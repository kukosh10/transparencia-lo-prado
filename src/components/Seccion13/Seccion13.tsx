import { ArrowLeft, ExternalLink, FileText } from 'lucide-react';

interface Seccion13Props {
  onVolverSeccion: () => void;
}

interface VinculoInstitucional {
  entidad: string;
  tipo: string;
  descripcion: string;
  inicio: string;
  termino: string;
  fuenteLegal: string;
  fuenteUrl: string;
  normaPdf: string;
  certificadoPdf: string;
}

const vinculos: readonly VinculoInstitucional[] = [
  {
    entidad: 'Corporación Educación y Salud de Lo Prado',
    tipo: 'Representación',
    descripcion: 'Alcalde preside la Corporación',
    inicio: '20.12.1995',
    termino: 'Indefinido',
    fuenteLegal: 'Ley 18.695, Art. 137 y siguientes',
    fuenteUrl: 'https://www.bcn.cl/leychile/navegar?idNorma=3389',
    normaPdf: '',
    certificadoPdf: '',
  },
  {
    entidad: 'Asociación Chilena de Municipalidades',
    tipo: 'Representación',
    descripcion: 'El Municipio es miembro de la Asamblea Nacional, con derecho a voz y voto. El Alcalde representa al Municipio.',
    inicio: '20.12.2012',
    termino: 'Indefinido',
    fuenteLegal: 'Art. 137 y siguientes',
    fuenteUrl: 'https://www.bcn.cl/leychile/navegar?idNorma=251693#asociacion0',
    normaPdf: '',
    certificadoPdf: 'Sin enlace',
  },
  {
    entidad: 'Fundación Centro Cultural de Lo Prado',
    tipo: 'Representación',
    descripcion: 'Alcalde presidente',
    inicio: '17.04.2014',
    termino: 'Indefinido',
    fuenteLegal: 'Ley 18.625, Artículo N° 129 y siguiente',
    fuenteUrl: 'https://www.bcn.cl/leychile/navegar?idNorma=30016',
    normaPdf: '',
    certificadoPdf: '',
  },
  {
    entidad: 'Corporación Municipal de Deportes Lo Prado',
    tipo: 'Representación',
    descripcion: 'Alcalde presidente',
    inicio: '14.10.2014',
    termino: 'Indefinido',
    fuenteLegal: 'Ley 18.625, Artículo N° 129 y siguiente',
    fuenteUrl: 'https://www.bcn.cl/leychile/navegar?idNorma=30016',
    normaPdf: '',
    certificadoPdf: 'Sin enlace',
  },
];

const encabezados = [
  'Entidad sobre la que recae el derecho de participación',
  'Tipo de vínculo',
  'Descripción o detalle del vínculo',
  'Fecha de inicio (dd/mm/aaaa)',
  'Fecha de término (dd/mm/aaaa)',
  'Fuente legal del vínculo',
  'Enlace a la norma jurídica o convenio que lo justifica',
  'Enlace Certificado de Personalidad Jurídica y Directorio',
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

export default function Seccion13({ onVolverSeccion }: Seccion13Props) {
  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolverSeccion} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Vínculos otras instituciones</span>
      </nav>

      <header className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Participación institucional</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Participación en otras entidades</h2>
        <p className="mt-2 text-sm text-slate-600">
          A continuación se presenta información sobre los vínculos de participación y representación del municipio.
        </p>
      </header>

      <section aria-label="Vínculos con otras instituciones" className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] table-fixed border-collapse text-left text-xs lg:min-w-0">
            <colgroup>
              <col className="w-[14%]" />
              <col className="w-[8%]" />
              <col className="w-[19%]" />
              <col className="w-[8%]" />
              <col className="w-[8%]" />
              <col className="w-[14%]" />
              <col className="w-[14%]" />
              <col className="w-[15%]" />
            </colgroup>
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                {encabezados.map((encabezado) => (
                  <th key={encabezado} scope="col" className="border-b border-slate-200 px-3 py-3 text-center font-semibold">
                    {encabezado}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {vinculos.map((vinculo) => (
                <tr key={vinculo.entidad} className="even:bg-slate-50/70">
                  <td className="max-w-56 border-b border-slate-100 px-3 py-3 align-middle text-slate-700">{vinculo.entidad}</td>
                  <td className="border-b border-slate-100 px-3 py-3 align-middle text-slate-700">{vinculo.tipo}</td>
                  <td className="min-w-80 border-b border-slate-100 px-3 py-3 align-middle text-slate-700">{vinculo.descripcion}</td>
                  <td className="whitespace-nowrap border-b border-slate-100 px-3 py-3 text-center align-middle text-slate-700">{vinculo.inicio}</td>
                  <td className="whitespace-nowrap border-b border-slate-100 px-3 py-3 text-center align-middle text-slate-700">{vinculo.termino}</td>
                  <td className="min-w-56 border-b border-slate-100 px-3 py-3 text-center align-middle">
                    <a
                      href={vinculo.fuenteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-center font-medium text-blue-700 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                    >
                      {vinculo.fuenteLegal}
                      <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                    </a>
                  </td>
                  <td className="border-b border-slate-100 px-3 py-3 text-center align-middle">
                    <PdfButton url={vinculo.normaPdf} label={`Abrir PDF de la norma legal para ${vinculo.entidad}`} />
                  </td>
                  <td className="border-b border-slate-100 px-3 py-3 text-center align-middle">
                    {vinculo.certificadoPdf === 'Sin enlace'
                      ? <span className="text-slate-600">Sin enlace</span>
                      : <PdfButton url={vinculo.certificadoPdf} label={`Abrir certificado de personalidad jurídica de ${vinculo.entidad}`} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="border-t border-slate-200 pt-4">
        <button type="button" onClick={onVolverSeccion} className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a Transparencia Activa
        </button>
      </div>
    </div>
  );
}
