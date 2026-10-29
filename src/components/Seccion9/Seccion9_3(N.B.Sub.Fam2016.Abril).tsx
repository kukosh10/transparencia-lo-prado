import { useMemo, useState } from 'react';

const beneficiarios = [
  ['ACEVEDO', 'BARRIA', 'JOSELYN'],
  ['AHUMADA', 'ORELLANA', 'MONICA'],
  ['ALVAREZ', 'GALVEZ', 'ELISA'],
  ['ARANGUIZ', 'VASQUEZ', 'THIARA'],
  ['ARAOS', 'PEREIRA', 'MAUREN'],
  ['ARAYA', 'MONTECINOS', 'NINOSKA'],
  ['ARIAS', 'BARRAZA', 'MERY'],
  ['ARIAS', 'MONDACA', 'MASSIEL'],
  ['ASTUDILLO', 'MARIMAN', 'EVA'],
  ['AVENDANO', 'VASQUEZ', 'DANITZA'],
  ['BAEZA', 'BRAVO', 'GLADYS'],
  ['BAHAMONDE', 'RIOS', 'KATTERIN'],
  ['BARRIGA', 'SALAZAR', 'GRACIELA'],
  ['CACERES', 'MARTINEZ', 'DANIELA'],
  ['CALFUEN', 'CHAURA', 'CAROLINA'],
  ['CALVUEN', 'LLAMIN', 'MARGARITA'],
  ['CAMPOS', 'RUBIO', 'GERALDINE'],
  ['CANIUPAN', 'NAHUELPI', 'MARIA'],
  ['CARO', 'ESCOBAR', 'JACQUELINE'],
  ['CARVAJAL', 'MONDACA', 'CLAUDIA'],
  ['CASTILLO', 'ASCURRA', 'ROSA'],
  ['CASTILLO', 'CORREA', 'SCARLET'],
  ['CASTRO', 'CARVAJAL', 'MARCIA'],
  ['CILLERO', 'OROZCO', 'DIANA'],
  ['CODOCEO', 'SALAZAR', 'IGNACIA'],
  ['COLLI', 'CATRINAO', 'MIRTA'],
  ['CONTRERAS', 'TAPIA', 'NICOLE'],
  ['CORTES', 'VILLALOBOS', 'YARITZA'],
  ['CUELLAR', 'PEREZ', 'INGRID'],
  ['CUZCANO', 'GUTIERREZ', 'GISSELA'],
  ['DAVILA', 'HUENTELO', 'STEPHANE'],
  ['DINAMARCA', 'ROJAS', 'PAOLA'],
  ['DOMINGUEZ', 'VERDUGO', 'CAMILA'],
  ['DUPOUY', 'PARRA', 'CONSTANZA'],
  ['ESPINOSA', 'GUERRERO', 'JENNIFER'],
  ['ESTAY', 'PINO', 'MARIA'],
  ['FLORES', 'FLORES', 'CATALINA'],
  ['FLOREZ', 'MANRIQUEZ', 'KATHERINE'],
  ['FUENTES', 'CAROCA', 'MARINA'],
  ['GALLARDO', 'URREJOLA', 'ANDREA'],
  ['GALLEGUILLOS', 'ARTIGAS', 'CATHERINE'],
  ['GALVIS', 'ROJAS', 'JESSICA'],
  ['GARCIA', 'FUENTEALBA', 'ELENA'],
  ['GRANDON', 'CONTRERAS', 'MARCELA'],
  ['GUZMAN', 'MONTERO', 'JAQUELIN'],
  ['HERNANDEZ', 'AHUMADA', 'ELIZABETH'],
  ['HERNANDEZ', 'HUENULAF', 'CRISTINA'],
  ['HOCES', 'CASTILLO', 'TANIA'],
  ['IBANEZ', 'OYARCE', 'ALEJANDRA'],
  ['JEREZ', 'CARO', 'BERNARDA'],
  ['LARA', 'SOTO', 'ANA'],
  ['LARRANAGA', 'PINO', 'DANIEL'],
  ['LEIVA', 'BRAVO', 'PRISCILA'],
  ['LEIVA', 'LLEVUL', 'YESENIA'],
  ['MANSILLA', 'CONCHA', 'MARIA'],
  ['MARTINI', 'LEIVA', 'MARIA'],
  ['MEJIAS', 'IBANEZ', 'NATHALI'],
  ['MORAN', 'TRIANA', 'JENNY'],
  ['MOYA', 'MORENO', 'MARGARITA'],
  ['MUNOZ', 'CHAVEZ', 'CONSTANZA'],
  ['MUNOZ', 'REYES', 'YESSENIA'],
  ['NAVARRETE', 'TOLEDO', 'CECILIA'],
  ['NAVARRO', 'CAYUPEL', 'MARIA'],
  ['NUNEZ', 'GONZALEZ', 'AIDA'],
  ['OLEA', 'CHACANA', 'PAZ'],
  ['OLIVARES', 'ARIAS', 'NATALI'],
  ['OLIVARES', 'GONZALEZ', 'DAYANNA'],
  ['ORELLANA', 'REYES', 'MARIBEL'],
  ['ORELLANA', 'SEVERINO', 'VIVIANA'],
  ['ORREGO', 'MUNOZ', 'GERALDINE'],
  ['ORREGO', 'ORREGO', 'PAULA'],
  ['ORTEGA', 'LLANTEN', 'DENISSE'],
  ['PAILLAL', 'NAHUELHUAL', 'PAULINA'],
  ['PALMA', 'DROGUETT', 'MADELAINE'],
  ['PALMA', 'HORMAZABAL', 'ELIZABETH'],
  ['POBLETE', 'MUNOZ', 'EVELYN'],
  ['QUEIPUL', 'MARILLAN', 'ERICA'],
  ['QUIROZ', 'LAVALLE', 'MARIA'],
  ['RAMIREZ', 'VILLEGAS', 'ANTONIETA'],
  ['RETAMAL', 'SANCHEZ', 'HERALDO'],
  ['RIQUELME', 'PEREZ', 'ELVIRA'],
  ['RODRIGUEZ', 'CAMPOS', 'MARIA'],
  ['ROJAS', 'ACUNA', 'LORENA'],
  ['ROMAN', 'VALENZUELA', 'XIMENA'],
  ['RUBIO', 'ACEITUNO', 'SANDRA'],
  ['SAAVEDRA', 'AGUILERA', 'DANIELA'],
  ['SAAVEDRA', 'OLAVE', 'RUTH'],
  ['SALINAS', 'PEREZ', 'CHERIE'],
  ['SANCHEZ', 'AGUILERA', 'KATHERINE'],
  ['SANDOVAL', 'CARRASCO', 'VALESKA'],
  ['SANDOVAL', 'CUADRA', 'MARCELA'],
  ['SEPULVEDA', 'BRITO', 'GIANNINA'],
  ['SERRANO', 'DUENAS', 'DULIANA'],
  ['SOTO', 'GUZMAN', 'LEYDI'],
  ['TERRAZA', 'BENAVIDES', 'GEMMA'],
  ['TOLEDO', 'BARRAZA', 'ALEJANDRA'],
  ['TOLEDO', 'FUENTEALBA', 'CAMILA'],
  ['TOLEDO', 'MELA', 'LLANDIRY'],
  ['TORO', 'URRA', 'CONSTANZA'],
  ['UGALDE', 'AGUERO', 'JACQUELINE'],
  ['VALDEBENTO', 'TORRES', 'SCARLETTE'],
  ['VALDES', 'ORTIZ', 'INGRID'],
  ['VALENCIA', 'FIGUEROA', 'EVELYN'],
  ['VARGAS', 'MUNOZ', 'CLAUDIA'],
  ['VASQUEZ', 'GONZALEZ', 'CARLA'],
  ['VASQUEZ', 'LARA', 'OLIVIA'],
  ['VASQUEZ', 'LARA', 'THALIA'],
  ['VEAS', 'COLLINAO', 'MARIA'],
  ['VERGARA', 'DIAZ', 'SOFIA'],
  ['VICENCIO', 'MORA', 'MONICA'],
  ['VIDAL', 'SOTO', 'MARIA'],
  ['VILCHES', 'LUVECCE', 'LISETTE'],
  ['VILLENA', 'ALARCON', 'EDITH'],
  ['ZUNGA', 'QUIROZ', 'ARLENE'],
  ['BALLESTEROS', 'TAPIA', 'DOMINIQUE'],
  ['CASILLA', 'ZUNIGA', 'MARCELA'],
  ['JIMENEZ', 'JIMENEZ', 'LESLY'],
  ['OCARANZA', 'MARABOLI', 'PAZ'],
  ['SEGURA', 'OJEDA', 'JATMIRA']
] as const;

const filasPorPagina = 20;

export default function Seccion9_3_N_B_Sub_Fam2016_Abril() {
  const [busqueda, setBusqueda] = useState('');
  const [pagina, setPagina] = useState(1);
  const resultados = useMemo(() => {
    const termino = busqueda.trim().toLocaleLowerCase('es');
    return beneficiarios.filter(([paterno, materno, nombres]) =>
      `${paterno} ${materno} ${nombres}`.toLocaleLowerCase('es').includes(termino)
    );
  }, [busqueda]);
  const totalPaginas = Math.max(1, Math.ceil(resultados.length / filasPorPagina));
  const paginaActual = Math.min(pagina, totalPaginas);
  const filas = resultados.slice((paginaActual - 1) * filasPorPagina, paginaActual * filasPorPagina);

  return (
    <section aria-label="Nómina de Subsidio Familiar de abril 2016" className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h4 className="text-base font-semibold text-slate-900">Subsidio Familiar · Abril 2016</h4>
          <p className="mt-1 text-xs text-slate-500">{resultados.length} beneficiarios</p>
        </div>
        <label className="w-full text-xs font-medium text-slate-600 sm:w-72">
          Buscar beneficiario
          <input
            type="search"
            value={busqueda}
            onChange={(event) => {
              setBusqueda(event.target.value);
              setPagina(1);
            }}
            placeholder="Nombre o apellido"
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-xs placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          />
        </label>
      </header>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[780px] border-collapse text-left text-xs">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Programa</th>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Apellido paterno</th>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Apellido materno</th>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Nombre</th>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Razón social</th>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">RUT</th>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Acto de otorgamiento</th>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {filas.map(([paterno, materno, nombres], index) => (
              <tr key={`${paterno}-${materno}-${nombres}-${index}`} className="even:bg-slate-50/70">
                <td className="border-b border-slate-100 px-3 py-2 text-blue-800">Subsidio Familiar</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{paterno}</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{materno}</td>
                <td className="border-b border-slate-100 px-3 py-2 font-medium text-slate-800">{nombres}</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-500">No aplica</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-500">No aplica</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">Decreto Exento · Beneficio · N° 634</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">01.04.2016</td>
              </tr>
            ))}
            {filas.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-sm text-slate-500">
                  No se encontraron beneficiarios que coincidan con la búsqueda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
        <span>
          {resultados.length === 0
            ? 'Sin resultados'
            : `Mostrando ${(paginaActual - 1) * filasPorPagina + 1}–${Math.min(paginaActual * filasPorPagina, resultados.length)} de ${resultados.length}`}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={paginaActual <= 1}
            onClick={() => setPagina((actual) => Math.max(1, actual - 1))}
            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Anterior
          </button>
          <span>Página {paginaActual} de {totalPaginas}</span>
          <button
            type="button"
            disabled={paginaActual >= totalPaginas}
            onClick={() => setPagina((actual) => Math.min(totalPaginas, actual + 1))}
            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
}
