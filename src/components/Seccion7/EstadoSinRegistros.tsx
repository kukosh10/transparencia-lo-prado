interface EstadoSinRegistrosProps {
  titulo: string;
  anio: string;
  busqueda?: string;
}

const campos = [
  { etiqueta: 'Número', valor: 'No hay' },
  { etiqueta: 'Fecha', valor: 'No hay' },
  { etiqueta: 'Fecha, medio y forma de publicación', valor: 'No hay' },
  { etiqueta: 'Tiene efectos generales', valor: 'No' },
  { etiqueta: 'Fecha última actualización', valor: 'No hay' },
  { etiqueta: 'Breve descripción del objeto del acto', valor: 'No existen para este año' },
  { etiqueta: 'Enlace a la publicación o archivo', valor: 'No hay' },
  { etiqueta: 'Enlace relacionado a la modificación', valor: 'No hay' }
];

export default function EstadoSinRegistros({ titulo, anio, busqueda = '' }: EstadoSinRegistrosProps) {
  if (busqueda.trim()) {
    return (
      <p className="py-2 text-center text-xs italic text-slate-400" role="status">
        No se encontraron registros que coincidan con “{busqueda}” para el año {anio}.
      </p>
    );
  }

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="p-3">
        <div className="mb-2 inline-flex rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-semibold text-blue-700">
          Sin registros · {anio}
        </div>
        <h4 className="text-xs font-semibold text-slate-900">{titulo}</h4>
      </div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-3 border-t border-slate-100 bg-slate-50 p-3 sm:grid-cols-2 xl:grid-cols-4">
        {campos.map((campo) => (
          <div key={campo.etiqueta}>
            <p className="text-[10px] text-slate-500">{campo.etiqueta}</p>
            <p className="mt-0.5 text-[10px] font-medium text-slate-900">{campo.valor}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
