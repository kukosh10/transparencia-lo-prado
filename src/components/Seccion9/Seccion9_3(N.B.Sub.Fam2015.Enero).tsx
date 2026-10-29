import { useMemo, useState } from 'react';

const beneficiarios = [
  ['LOYOLA', 'AGUILERA', 'SOLEDAD'],
  ['PEREZ', 'GOMEZ', 'MARIA'],
  ['RUIZ', 'PEREZ', 'ELIZABETH'],
  ['ZUNIGA', 'GUTIERREZ', 'DANKA'],
  ['ORDENES', 'SOTO', 'ANDREA'],
  ['SERRANO', 'ACEVEDO', 'DIANE'],
  ['TORO', 'ADASME', 'LAURA'],
  ['HUENCHAO', 'LADINO', 'JUANITA'],
  ['BUSTOS', 'DIAZ', 'MARCIA'],
  ['SEPULVEDA', 'CHAMORRO', 'POULETH'],
  ['CONTRERAS', 'TORRES', 'MELANIE'],
  ['CABRERA', 'LOYOLA', 'CRISTINA'],
  ['CHANDIA', 'SEPULVEDA', 'KARINA'],
  ['GONZALEZ', 'UBILLA', 'VALENTINA'],
  ['CONCHA', 'SOTO', 'ANGELA'],
  ['ALVAREZ', 'ARJONA', 'AYLEEN'],
  ['NUNEZ', 'OLIVARES', 'SUSANA'],
  ['BERNALES', 'CALDERON', 'VIVIANA'],
  ['GUZMAN', 'PEREZ', 'YAMILETE'],
  ['CANELO', 'LIEN', 'MARGARITA'],
  ['SOTO', 'ORELLANA', 'MARIA'],
  ['FUENTES', 'BURGOS', 'CAROLINA'],
  ['CHACON', 'AMESTICA', 'PAMELA'],
  ['HEREDIA', 'VENEGAS', 'SANDRA'],
  ['CARLOZA', 'MUNOZ', 'GEOVANA'],
  ['CARDENAS', 'CATALAN', 'SILVANA'],
  ['SANDOVAL', 'RODRIGUEZ', 'FABIOLA'],
  ['INDO', 'GALAZ', 'NATALIE'],
  ['PIZARRO', 'LAZCANO', 'ESTER'],
  ['ROJAS', 'VIDELA', 'JAZMIN'],
  ['GODOY', 'MEDINA', 'ALEJANDRA'],
  ['ALVARADO', 'VERA', 'MARIA'],
  ['ORTIZ', 'CASTANEDA', 'GEMITA'],
  ['SUTRICH', 'HERNANDEZ', 'ROSA'],
  ['ARZA', 'MERINO', 'BERNARDA'],
  ['MESIAS', 'LARENAS', 'DAYANA'],
  ['TAPIA', 'VALENZUELA', 'GIOVANNA'],
  ['TICONA', 'FLORES', 'CARMEN'],
  ['OLIVA', 'SAGARDIA', 'ROXANA'],
  ['BURGOS', 'MADARIAGA', 'SHERY'],
  ['LOPEZ', 'SOTO', 'INGRID'],
  ['MENDEZ', 'PINTO', 'AURELIA'],
  ['RIVERA', 'BARRAZA', 'LISETTE'],
  ['PINO', 'FICA', 'MARIA'],
  ['MERA', 'PONCE', 'NARIMY'],
  ['CATRILEO', 'ALARCON', 'MARIANA'],
  ['HERNANDEZ', 'DIAZ', 'VICTORIA'],
  ['FIGUEROA', 'BARRERA', 'JACQUELINE'],
  ['MOYA', 'GANGA', 'CONSTANZA'],
  ['CISTERNAS', 'GARRIDO', 'WANDA'],
  ['ABARCA', 'LEMUS', 'YARITZA'],
  ['ANCAN', 'ALONZO', 'YESSICA'],
  ['PADILLA', 'LUNA', 'SARA'],
  ['REBOLLEDO', 'JARA', 'ZULEMA'],
  ['BAEZA', 'RUBIO', 'NATALIA'],
  ['OLGUIN', 'BUSTOS', 'CAROLYN'],
  ['BECERRA', 'NANCUPIL', 'CINTHIA'],
  ['OLAVE', 'BARRIENTOS', 'CELIA'],
  ['JORQUERA', 'OLAVE', 'JENNY'],
  ['NORAMBUENA', 'FLORES', 'VIVIANA'],
  ['ESPINOZA', 'ESPINOZA', 'VERONICA'],
  ['CAMPOS', 'BREVIS', 'JACQUELINE'],
  ['BARRA', 'CUADRA', 'EVELYN'],
  ['BALTIERRA', 'MATAMALA', 'MARGARITA'],
  ['MORALES', 'ARAVENA', 'MARGARITA'],
  ['JARAMILLO', 'GONZALEZ', 'IVETTE'],
  ['MEZA', 'VALDEBENITO', 'MIRIAN'],
  ['PARRAGUEZ', 'PARRAGUEZ', 'NATALY'],
  ['QUINTOMAN', 'MARCIAL', 'CLAUDIA'],
  ['VASQUEZ', 'MARDONES', 'LUISA'],
  ['HUANACO', 'QUEIPUL', 'GLORIA'],
  ['VILCAPOMA', 'CABALLERO', 'DE'],
  ['HUERTA', 'CHACON', 'LORENA'],
  ['HUENUAN', 'SICAN', 'ANGELICA'],
  ['REYES', 'JIMENEZ', 'MARGARITA'],
  ['SANTANDER', 'RIVERA', 'ELIZABETH'],
  ['MALDONADO', 'LARA', 'CLAUDIA'],
  ['CALFUQUEO', 'PINA', 'ALEJANDRA'],
  ['CERDA', 'CACERES', 'EVELYN'],
  ['GARRIDO', 'RIVAS', 'GABRIELA'],
  ['MARTICORENA', 'SARABIA', 'EVELYN'],
  ['MANRIQUEZ', 'GUAJARDO', 'JOHANNA'],
  ['SANHUEZA', 'SANCHEZ', 'VIRGINIA'],
  ['FERNANDEZ', 'ZAPATA', 'PAOLA'],
  ['RIQUELME', 'SOTO', 'ROXANA'],
  ['PENA', 'PIZARRO', 'JASMIN'],
  ['ACEVEDO', 'ESPINOSA', 'NELLY'],
  ['MUNOZ', 'HERMOSILLA', 'ROSA'],
  ['SEREY', 'PENA', 'GERALDINE'],
  ['RODRIGUEZ', 'ORTIZ', 'VIVIANA'],
  ['MARTINEZ', 'MATAMALA', 'GABRIELA'],
  ['GUITARD', 'PONCE', 'MACARENA'],
  ['DIAZ', 'TOLEDO', 'GLORIA'],
  ['ARAYA', 'GONZALEZ', 'SOLANGE'],
  ['VALENZUELA', 'FUENZALIDA', 'SADY'],
  ['OLAVARRIA', 'CAMPOS', 'ANDREA'],
  ['BASTIAS', 'CANO', 'MARIA'],
  ['DEL', 'VALLE', 'ULLOA'],
  ['MANZO', 'FIERRO', 'ROMINA'],
  ['RIVAS', 'ARCE', 'SANDRA'],
  ['LOHANS', 'MENDEZ', 'VERONICA'],
  ['ARRIAZA', 'MUNOZ', 'ELIZABETH'],
  ['HENRIQUEZ', 'GARCIA', 'EVELYN'],
  ['MELLA', 'PRADENAS', 'BRENDA'],
  ['SALINAS', 'OJEDA', 'URSULA'],
  ['TRANGOL', 'VALENZUELA', 'EVELYN'],
  ['PAREDES', 'BALBOA', 'KATHERINE'],
  ['CARILEO', 'TRAUMALEO', 'MARIA'],
  ['TOLEDO', 'GONZALEZ', 'MARIA'],
  ['TRAFILAF', 'BOBADILLA', 'ANGELICA'],
  ['IZQUIERDO', 'MADARIAGA', 'TIARE'],
  ['GALLARDO', 'MAULEN', 'FABIOLA'],
  ['ARIAS', 'LARA', 'ROSA'],
  ['CORVALAN', 'QUEVEDO', 'ESTEFANIA'],
  ['ALMEIDA', 'SILVA', 'VICTORIA'],
  ['SANCHEZ', 'TAPIA', 'PAOLA'],
  ['MIRANDA', 'VASQUEZ', 'VIRGINIA'],
  ['BARRIOS', 'ROJAS', 'GALIDES'],
  ['TOBAR', 'MUNOZ', 'ALEJANDRA'],
  ['FARIAS', 'PIZARRO', 'SOLANGE'],
  ['ABARZUA', 'MUNOZ', 'RUDY'],
  ['GOMEZ', 'MANQUEL', 'MARIA'],
  ['MARILLAN', 'CURAMIL', 'MARIA'],
  ['CERNA', 'COINOMAN', 'MILADI'],
  ['CASTRO', 'BARRIOS', 'JOCELYN'],
  ['NEIRA', 'BARRIA', 'ANA'],
  ['NEICUL', 'HERNANDEZ', 'LORENA'],
  ['SUAREZ', 'FLORES', 'CORINA'],
  ['AVENDANO', 'PAREDES', 'ANGELICA'],
  ['CARRASCO', 'GUERRERO', 'XIMENA'],
  ['GRANDON', 'JAQUE', 'BEATRIZ'],
  ['ESCALONA', 'FIGUEROA', 'ALEXANDRA'],
  ['PONCE', 'CORREA', 'THIARE'],
  ['PILOZO', 'ERAZO', 'FATIMA'],
  ['MELINIR', 'MILLARAN', 'PILAR'],
  ['AGUILERA', 'FERNANDEZ', 'XIMENA'],
  ['HERRERA', 'MUNOZ', 'ELIZABETH'],
  ['MENA', 'CACERES', 'SANDRA'],
  ['CADAGAN', 'SEPULVEDA', 'JOCELYN'],
  ['FLORES', 'MOSQUEIRA', 'ROSEMARY'],
  ['IBACACHE', 'FARIAS', 'DIANA'],
  ['VERGARA', 'RAMOS', 'ERIKA'],
  ['PALMA', 'CACERES', 'MARIA'],
  ['ARANEDA', 'RIQUELME', 'KELLY'],
  ['ANTIHUALA', 'CAYULEF', 'VERONICA'],
  ['PINA', 'BUSTAMANTE', 'ANGELA'],
  ['QUEVEDO', 'SILVA', 'CLAUDIA'],
  ['NAVARRO', 'ARRIAGADA', 'PAMELA']
] as const;

const filasPorPagina = 20;

export default function Seccion9_3_N_B_Sub_Fam2015_Enero() {
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
    <section aria-label="Nómina de Subsidio Familiar de enero 2015" className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h4 className="text-base font-semibold text-slate-900">Subsidio Familiar · Enero 2015</h4>
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
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">Decreto Alcaldicio N° 3465 de 01.12.2014</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">01.01.2015</td>
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
