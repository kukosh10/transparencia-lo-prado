import { useMemo, useState } from 'react';

const beneficiarios = [
  ['ABARCA', 'VIDAL', 'MARIA'],
  ['ACEVEDO', 'MOSCOSO', 'ROXANA'],
  ['AGUILAR', 'BRAVO', 'VANESSA'],
  ['AGURTO', 'MERINO', 'CAROLINA'],
  ['ALCANTARA', 'GUERRA', 'NELVA'],
  ['ALDUNATE', 'MIRALLES', 'ANGELICA'],
  ['ALLENDE', 'ACUNA', 'FABIOLA'],
  ['ANGELES', 'CONTRERAS', 'PAOLA'],
  ['ARAYA', 'ERICA', 'MARCELA'],
  ['ARENAS', 'QUEZADA', 'RODRIGO'],
  ['ARIAS', 'BARRAZA', 'MERY'],
  ['ASTUDILLO', 'MORALES', 'KATALINA'],
  ['AYALA', 'LEIVA', 'NICOLE'],
  ['BAEZA', 'FLORES', 'MARIA'],
  ['BARRAZA', 'VERA', 'CINDY'],
  ['BARRERA', 'MOGLIA', 'JESSENIA'],
  ['BARRIA', 'BARRIA', 'LISSETTE'],
  ['BASTIAS', 'LABBE', 'JACQUELINE'],
  ['BONDIS', 'JARA', 'NATHALIE'],
  ['BRAVO', 'VASQUEZ', 'STEPHANIE'],
  ['BUSTAMANTE', 'ALVAREZ', 'NICOLE'],
  ['CACERES', 'GALVEZ', 'VALERIA'],
  ['CACERES', 'PARRA', 'PILAR'],
  ['CALFUEN', 'DIAZ', 'SOLEDAD'],
  ['CAMPOS', 'SILVA', 'SARA'],
  ['CANALES', 'SOTO', 'OLIVIA'],
  ['CANULEF', 'OJEDA', 'GUISELA'],
  ['CARRASCO', 'CARRASCO', 'ANA'],
  ['CARRASCO', 'MARDONES', 'ERCILIA'],
  ['CARRASCO', 'PARDO', 'DANIELA'],
  ['CARRASCO', 'SAEZ', 'JIMENA'],
  ['CASTILLO', 'CARANZA', 'DENISSE'],
  ['CASTILLO', 'GODOY', 'MARIA'],
  ['CASTRO', 'LINE', 'MARITZA'],
  ['COLLI', 'MILLAN', 'MADELEINE'],
  ['CONCHA', 'ARANEDA', 'SHARON'],
  ['CORNEJO', 'LEON', 'CYNTHYA'],
  ['DIAZ', 'CASTILLO', 'GIOCONDA'],
  ['ESCOBAR', 'ULLOA', 'JACQUELINE'],
  ['ESPARZA', 'ESPARZA', 'YOHANA'],
  ['ESPINOZA', 'GUERRA', 'JACQUELINE'],
  ['FERNANDEZ', 'SARAVIA', 'ANA'],
  ['FIGUEROA', 'SAN MARTIN', 'CINDY'],
  ['FLORES', 'COLLAO', 'MELANIE'],
  ['FUENTES', 'HERRERA', 'PAMELA'],
  ['GARRIDO', 'QUEZADA', 'VALERIA'],
  ['GATICA', 'PARADA', 'JESSICA'],
  ['GAUNA', 'PINO', 'NATALIA'],
  ['GOMEZ', 'BOLBARAN', 'AYLEEN'],
  ['GONZALEZ', 'BELLO', 'MARIA'],
  ['GONZALEZ', 'HERNANDEZ', 'GENESIS'],
  ['GONZALEZ', 'LEFIN', 'MARGOTH'],
  ['GONZALEZ', 'MIRANDA', 'RUTH'],
  ['GONZALEZ', 'ORELLANA', 'CONSTANZA'],
  ['GONZALEZ', 'PEREZ', 'DAHYNA'],
  ['GONZALEZ', 'ZAMORANO', 'CAROLINA'],
  ['GRANDON', 'VARGAS', 'CAMILA'],
  ['GUERRERO', 'AMPUERO', 'KATHERINE'],
  ['GUERRERO', 'ARANEDA', 'EDITH'],
  ['GUZMAN', 'ROA', 'LAURA'],
  ['HENRIQUEZ', 'SALDANO', 'ROSA'],
  ['HERNANDEZ', 'MADRID', 'ELIZABETH'],
  ['HERRERA', 'GUERRERO', 'VERONICA'],
  ['HERRERA', 'ROJAS', 'JENNIFER'],
  ['HORMAZABAL', 'RODRIGUEZ', 'KATHERINE'],
  ['HUENTO', 'HINOJOSA', 'SARA'],
  ['IBACETA', 'SILVA', 'KATIA'],
  ['IBANEZ', 'RETAMAL', 'SILVIA'],
  ['ITURRIAGA', 'CARCAMO', 'SUSANA'],
  ['JARA', 'CASTRO', 'MATILDE'],
  ['JEREZ', 'CARO', 'BERNARDA'],
  ['JOFRE', 'ISLA', 'NELLY'],
  ['LEVIN', 'LEVIN', 'PATRICIA'],
  ['LINCO', 'SANTI', 'SOFIA'],
  ['LIPILAO', 'SEPULVEDA', 'DANIELA'],
  ['LOMBARDO', 'LARA', 'MARIA'],
  ['LONCON', 'DIAZ', 'IRMA'],
  ['LOYOLA', 'SAN', 'MARTIN'],
  ['LUCERO', 'ZAPATA', 'FRANCIS'],
  ['MANCILLA', 'SOTO', 'CAROLINA'],
  ['MARTINEZ', 'ALVAREZ', 'JANETH'],
  ['MARTINEZ', 'LOPEZ', 'VALERIA'],
  ['MATIS', 'VIDAL', 'MICHELLE'],
  ['MERILLAN', 'PAINE', 'PILAR'],
  ['MEZA', 'VALDES', 'ELIZABETH'],
  ['MILLAO', 'MELIN', 'ISABEL'],
  ['MORALES', 'NORAMBUENA', 'KARLA'],
  ['MORGADO', 'TORRES', 'MELISSA'],
  ['MUNOZ', 'MERINO', 'SANDRA'],
  ['MUNOZ', 'SOTO', 'SOLANGE'],
  ['NECULPAN', 'CAYUPIL', 'XIMENA'],
  ['ONATE', 'HERNANDEZ', 'MIRCIA'],
  ['ORELLANA', 'CORTES', 'NATALIA'],
  ['PAINEPI', 'LEFIN', 'SOFIA'],
  ['PALMA', 'LINEROS', 'VERONICA'],
  ['PEREZ', 'FIGUEROA', 'KATHERINE'],
  ['PICARTE', 'VERGARA', 'CYNTHIA'],
  ['PINA', 'SALAZAR', 'DENISSE'],
  ['POZO', 'GONZALEZ', 'YOVANNA'],
  ['QUINCHEL', 'IBARRA', 'CINDY'],
  ['QUINENHUAL', 'CAYUMIL', 'VIVIANA'],
  ['RAMIREZ', 'FUENTES', 'CLAUDIA'],
  ['RETAMALES', 'RAMIREZ', 'MACARENA'],
  ['REYES', 'MUNOZ', 'KARINA'],
  ['RIQUELME', 'MORAGA', 'AIDA'],
  ['RIVERA', 'TORRES', 'DIANA'],
  ['RODRIGUEZ', 'PESSINI', 'PAULETTE'],
  ['RODRIGUEZ', 'SANDOVAL', 'ELIZABETH'],
  ['ROJAS', 'PAREDES', 'FABIOLA'],
  ['ROMERO', 'DAZA', 'RITA'],
  ['ROMERO', 'ROMERO', 'PAOLA'],
  ['ROZAS', 'CASTRO', 'CATHERINE'],
  ['RUBIO', 'MUNOZ', 'TERESA'],
  ['SANCHEZ', 'SANCHEZ', 'SANDRA'],
  ['SANDOVAL', 'SANDOVAL', 'LORENA'],
  ['SARMIENTO', 'BARRERA', 'LILIANA'],
  ['SEPULVEDA', 'ARRIAGADA', 'ELLEN'],
  ['SEPULVEDA', 'HIDALGO', 'SOLYENPSY'],
  ['SEPULVEDA', 'MONTECINO', 'VIVIANA'],
  ['SILVA', 'FLORES', 'MELISSA'],
  ['SOTO', 'BRULL', 'JACQUELINE'],
  ['SOTOMAYOR', 'GODOY', 'DANIELA'],
  ['TORO', 'MOLINA', 'CARMEN'],
  ['TRIGO', 'PINO', 'MARIA'],
  ['URETA', 'BUSTOS', 'MELISSA'],
  ['URRUTIA', 'GOMEZ', 'HELLEN'],
  ['VALDERRAMA', 'HENRIQUEZ', 'LUZ'],
  ['VARGAS', 'VEGA', 'ERIKA'],
  ['VELIZ', 'TRONCOSO', 'JENNIFER'],
  ['VIVANCO', 'MEZA', 'YESENIA'],
  ['ZAMORANO', 'CURAMIL', 'MONICA'],
  ['ZULUAGA', 'AROCA', 'ZILET'],
  ['ZUNIGA', 'FUENZALIDA', 'PATRICIA'],
  ['ZUNIGA', 'MARTINEZ', 'MONICA'],
  ['ZUNIGA', 'QUIROZ', 'ARLENE'],
  ['BAHAMONDES', 'BAHAMONDES', 'MARLY'],
  ['JARAMILLO', 'EPUL', 'MACARENA'],
  ['OLGUIN', 'ASTORGA', 'MARIA'],
  ['OLIVA', 'PUELLES', 'ANGELA'],
  ['OLIVOS', 'QUINTANA', 'NATHALIE'],
  ['OSORIO', 'SALGADO', 'ANTONELLA']
] as const;

const filasPorPagina = 20;

export default function Seccion9_3_N_B_Sub_Fam2016_Marzo() {
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
    <section aria-label="Nómina de Subsidio Familiar de marzo 2016" className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h4 className="text-base font-semibold text-slate-900">Subsidio Familiar · Marzo 2016</h4>
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
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">Decreto Exento · Beneficio</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">01.03.2017</td>
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
