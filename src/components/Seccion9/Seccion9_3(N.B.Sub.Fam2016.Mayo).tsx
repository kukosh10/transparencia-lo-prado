import { useMemo, useState } from 'react';

const beneficiarios = [
  ['ACOSTA', 'CALDERON', 'ISABEL'],
  ['ACUM', 'AMOLEF', 'ELIANA'],
  ['ACUNA', 'RETAMAL', 'PRISCILLA'],
  ['AGUAYO', 'AGUAYO', 'CARLOS'],
  ['AGUILERA', 'SILVA', 'ABIGAIL'],
  ['ALARCON', 'FUENTES', 'MARTA'],
  ['ALDEA', 'CASTRO', 'FALON'],
  ['ALFARO', 'GIL', 'YOYSI'],
  ['ANABALON', 'GONZALEZ', 'LINDA'],
  ['ANDAUR', 'CONTRERAS', 'GABRIELA'],
  ['ANDAUR', 'MANRIQUEZ', 'MARGARITA'],
  ['ARANEDA', 'ALVAREZ', 'PAMELA'],
  ['ARANGUIZ', 'CARRASCO', 'NAYARETH'],
  ['ARANGUIZ', 'ORTEGA', 'ANA'],
  ['ARANGUIZ', 'URETA', 'NANCY'],
  ['ARAVENA', 'LEAL', 'PALMENIA'],
  ['ARAYA', 'ROMERO', 'ROMINA'],
  ['ARENAS', 'ARAYA', 'SANDRA'],
  ['ARO', 'HERRERA', 'SANDRA'],
  ['ARREDONDO', 'ACUNA', 'EMA'],
  ['ARRIAGADA', 'BRISMONITER', 'LUISA'],
  ['BALLESTEROS', 'FUENTES', 'GEORGINA'],
  ['BARRERA', 'CONTRERAS', 'PAOLA'],
  ['BAYONA', 'PAPPA', 'SANTOS'],
  ['BAZAN', 'CARRILLO', 'MICHEL'],
  ['BELMAR', 'CANALES', 'EVELYN'],
  ['BERNAL', 'GANGA', 'PRISCILLA'],
  ['BEZZOLO', 'GOMEZ', 'SANDRA'],
  ['BLANCO', 'LIENCURA', 'CATALINA'],
  ['BOUFFANAIS', 'TUDESCA', 'VITALIA'],
  ['BRICENO', 'MORALES', 'JAZMINA'],
  ['BURGOS', 'ENCINA', 'ALEJANDRA'],
  ['BUSTOS', 'BUSTAMANTE', 'DAYANUS'],
  ['BUSTOS', 'NAVARRO', 'GEMMA'],
  ['CABEZAS', 'TERRAZA', 'JESSICA'],
  ['CABRERA', 'REYES', 'SANDRA'],
  ['CACERES', 'CACERES', 'BARBARA'],
  ['CALDERON', 'BRAVO', 'MARIA'],
  ['CANALES', 'SOTO', 'OLIVIA'],
  ['CARDENAS', 'CUMIAN', 'NICOLE'],
  ['CARO', 'BASCUR', 'CATERINA'],
  ['CARRASCO', 'PALMA', 'BARBARA'],
  ['CARRASCO', 'TORRES', 'KARINA'],
  ['CARRASCO', 'VEGA', 'ROSA'],
  ['CARRILLO', 'NAVARRO', 'DAMARIS'],
  ['CARSTENS', 'SOTO', 'RAQUEL'],
  ['CASTILLO', 'ESCOBAR', 'MARIA'],
  ['CASTRO', 'BENITEZ', 'MARIA'],
  ['CASTRO', 'SUAREZ', 'JOCELYN'],
  ['CATRILEO', 'MUNOZ', 'SONIA'],
  ['CATRINAO', 'MILLAN', 'SILVIA'],
  ['CERDA', 'OYARZUN', 'MARCELA'],
  ['CERDA', 'ROMAN', 'MICHELLE'],
  ['CERDA', 'VIDAL', 'MARITZA'],
  ['CHIPANA', 'ESTANA', 'ADRIANA'],
  ['COLLANTES', 'CANALES', 'LUZ'],
  ['CONOPAN', 'MALDONADO', 'KATHERINE'],
  ['CONTRERAS', 'SALGADO', 'ROMINA'],
  ['CONTRERAS', 'SANTANDER', 'CRISTINA'],
  ['CORNEJO', 'ARMIJO', 'NATHALIE'],
  ['CRISTI', 'CABRERA', 'DELIA'],
  ['CRUZ', 'GONZALEZ', 'NIRMA'],
  ['CRUZ', 'OVANDO', 'CAMILA'],
  ['DIAZ', 'ARAYA', 'EVA'],
  ['DIAZ', 'BULNES', 'KATHERINE'],
  ['DIAZ', 'CARRILLO', 'NATACHA'],
  ['DIAZ', 'FERNANDEZ', 'JENNY'],
  ['DIAZ', 'HUENUPAN', 'FABIOLA'],
  ['DIAZ', 'QUIROGA', 'MANUELA'],
  ['DIAZ', 'SILVA', 'JACQUELINE'],
  ['DONOSO', 'BUSTAMANTE', 'CATHERIN'],
  ['DUARTE', 'ORTIZ', 'JACQUELINE'],
  ['DURAN', 'MARTINEZ', 'PATRICIA'],
  ['DURAND', 'CORNEJO', 'YARITZA'],
  ['EGANA', 'NUNEZ', 'CLAUDIA'],
  ['ERAZO', 'ARANGUIZ', 'PAULA'],
  ['ESCUDERO', 'ECHEVERRIA', 'JAZMINA'],
  ['ESPINOZA', 'LOBOS', 'KATHERINE'],
  ['ESPINOZA', 'PAZ', 'PRISCILLA'],
  ['ESPINOZA', 'ROJAS', 'PATRICIA'],
  ['ESPINOZA', 'TORO', 'ELIZABETH'],
  ['FARFAN', 'JARA', 'YESENIA'],
  ['FERNANDEZ', 'VILCHEZ', 'GIOVANNA'],
  ['FIGUEROA', 'LEYTON', 'ELIZABETH'],
  ['FUENTES', 'MIRANDA', 'GLORIA'],
  ['GAETE', 'HALYBURTON', 'LEONOR'],
  ['GARCIA', 'CARMONA', 'DEBORA'],
  ['GARCIA', 'ILLANES', 'CAMILA'],
  ['GARRIDO', 'DIAZ', 'CELINDA'],
  ['GARRIDO', 'QUEZADA', 'VALERIA'],
  ['GOMEZ', 'SANCHEZ', 'GLORIA'],
  ['GONZALES', 'PINEDA', 'ANLLERINA'],
  ['GONZALEZ', 'BARRIOS', 'KATHERINE'],
  ['GONZALEZ', 'CORNEJO', 'DANAE'],
  ['GONZALEZ', 'CORNEJO', 'JOCELYN'],
  ['GONZALEZ', 'CUEVAS', 'ANGELINA'],
  ['GONZALEZ', 'FUENTES', 'KELLY'],
  ['GONZALEZ', 'GOMEZ', 'ELSA'],
  ['GONZALEZ', 'HERRERA', 'IVONNE'],
  ['GONZALEZ', 'JARA', 'LISETTE'],
  ['GONZALEZ', 'MIRANDA', 'RUTH'],
  ['GONZALEZ', 'MUNOZ', 'ANDREA'],
  ['GONZALEZ', 'OLIVA', 'LYNDA'],
  ['GONZALEZ', 'ORELLANA', 'AYLEEN'],
  ['GONZALEZ', 'PARRA', 'SANDRA'],
  ['GONZALEZ', 'VERGARA', 'FLOR'],
  ['GUERRA', 'MARTINEZ', 'ANA'],
  ['GUERRERO', 'HINESTROZA', 'SHIRLEY'],
  ['GUERRERO', 'HORMAZABAL', 'JACQUELINE'],
  ['GUERRERO', 'MUNOZ', 'DINA'],
  ['HELIOTT', 'SUAREZ', 'MARION'],
  ['HENRIQUEZ', 'GARCIA', 'JEANNETTE'],
  ['HERNANDEZ', 'GONZALEZ', 'MACARENA'],
  ['HERNANDEZ', 'LUEIZA', 'DIANA'],
  ['HIDALGO', 'HERNANDEZ', 'MARIA'],
  ['HORMAZABAL', 'GARCIA', 'KARINA'],
  ['HORMAZABAL', 'REYES', 'DANIELA'],
  ['HUANACO', 'HUANACO', 'TERESA'],
  ['HUENCHULLAN', 'CONTRERAS', 'CLAUDIA'],
  ['HUENCHULLAN', 'CONTRERAS', 'GLADYS'],
  ['HUENTEN', 'NAVARRETE', 'NAYARET'],
  ['HUERTA', 'GACITUA', 'MARIA'],
  ['HUILLIN', 'LEFIQUEO', 'DORIS'],
  ['IBARRA', 'AGUSTO', 'SARAI'],
  ['IBARRA', 'GARRIDO', 'SONIA'],
  ['INOSTROZA', 'VASQUEZ', 'MARIA'],
  ['JARA', 'MARDONES', 'FERNANDA'],
  ['JARAMILLO', 'CALFIN', 'ROSA'],
  ['LABBE', 'GUZMAN', 'PRISCILA'],
  ['LARA', 'MUNOZ', 'LILIANA'],
  ['LEMUS', 'VILLARROEL', 'JOCELYN'],
  ['LIEMPI', 'HUENHUMAN', 'ROSARIO'],
  ['LIZAMA', 'HINOJOSA', 'GLADYS'],
  ['LOBOS', 'MIRANDA', 'MIRELLA'],
  ['LOBOS', 'VALENZUELA', 'MARIBEL'],
  ['LOPEZ', 'NUNEZ', 'ROSA'],
  ['LOPEZ', 'RAMOS', 'JEAGNELLE'],
  ['LUCERO', 'VALDERRAMA', 'NICOLE'],
  ['MADRID', 'ROMAN', 'INGRID'],
  ['MANCILLA', 'HENRIQUEZ', 'MARA'],
  ['MANRIQUEZ', 'VILLALOBOS', 'LORETO'],
  ['MANTERO', 'MANRIQUEZ', 'XIMENA'],
  ['MARILAO', 'MARILAO', 'MARIELA'],
  ['MARIN', 'MUNOZ', 'LUISA'],
  ['MARTINEZ', 'VIVANCO', 'NICOLE'],
  ['MATUS', 'JEREZ', 'FRANCIS'],
  ['MAYOLAFQUEN', 'COFRE', 'JAIQUE'],
  ['MELLA', 'ALIAGA', 'LUCIA'],
  ['MILLAN', 'RUBIO', 'JOCELYN'],
  ['MIRANDA', 'CALCUMIL', 'ANA'],
  ['MOLINA', 'CASTRO', 'ANDREA'],
  ['MONTECINOS', 'BRAVO', 'PAMELA'],
  ['MORAGA', 'MAGANA', 'INGRID'],
  ['MORALES', 'LAMOZA', 'CLAUDIA'],
  ['MORALES', 'LARA', 'HILDA'],
  ['MOYA', 'OGAZ', 'IVONNE'],
  ['MUNOZ', 'AVENDANO', 'ANGELICA'],
  ['MUNOZ', 'COLLANTE', 'JOSCELINE'],
  ['MUNOZ', 'DELGADO', 'STEPHANIE'],
  ['MUNOZ', 'HUINCAHUE', 'LEYDY'],
  ['MUNOZ', 'PAILAHUEQUE', 'ANGELICA'],
  ['NAVARRETE', 'TRONCOSO', 'JACQUELINE'],
  ['NEIRA', 'ZUNIGA', 'GEMA'],
  ['NUNJA', 'CHILON', 'URSULA'],
  ['OLAVE', 'ARANDA', 'LILIAN'],
  ['OLGUIN', 'BUSTOS', 'CAROLYN'],
  ['ORDONEZ', 'BASILI', 'YASNA'],
  ['OSORIO', 'HERNANDEZ', 'ROSA'],
  ['OSSES', 'SOTO', 'CAMILA'],
  ['OYANEDEL', 'RIVERO', 'NATALIA'],
  ['OYARZO', 'ANCAPICHUN', 'JOCELYN'],
  ['OYARZO', 'ANCAPICHUN', 'MASSIEL'],
  ['PAILLALEF', 'CAYUPAN', 'DELIA'],
  ['PALOMINO', 'CANIUPAN', 'MACARENA'],
  ['PARDO', 'ANCAN', 'LORENA'],
  ['PARRA', 'ESCOBAR', 'GLORIA'],
  ['PARRA', 'PALMA', 'SUSANA'],
  ['PENA', 'GALINDO', 'ROSSANA'],
  ['PEREIRA', 'PENA', 'CLAUDIA'],
  ['PEREZ', 'GALINDO', 'CYNTHIA'],
  ['PEREZ', 'LEON', 'JACQUELINE'],
  ['PEREZ', 'LOPEZ', 'SOLANGE'],
  ['PINO', 'JOFRE', 'YESSENIA'],
  ['POLANCO', 'LEPE', 'XIMENA'],
  ['PUNOLEF', 'COLINANCO', 'SOFIA'],
  ['QUEZADA', 'ABURTO', 'SINDY'],
  ['QUEZADA', 'IBACETA', 'CARMEN'],
  ['QUIROZ', 'JAQUE', 'EVA'],
  ['RAIN', 'HUENHUMAN', 'MARIA'],
  ['RAMOS', 'HERRERA', 'MARIANNE'],
  ['RANINAC', 'LEVI', 'MARIA'],
  ['REBOLLEDO', 'ALARCON', 'LUZ'],
  ['REBOLLEDO', 'CANALES', 'NANCY'],
  ['REYES', 'SAGAL', 'MARIA'],
  ['RIVEROS', 'VERA', 'YESSENIA'],
  ['RODRIGUEZ', 'GONZALES', 'INGRID'],
  ['RODRIGUEZ', 'SALAZAR', 'LORETO'],
  ['ROJAS', 'BRISMONITER', 'MERCEDES'],
  ['ROJAS', 'GUERRA', 'ROMANETTE'],
  ['ROJAS', 'HERNANDEZ', 'CONSTANZA'],
  ['ROJAS', 'LINCOPAN', 'JAVIERA'],
  ['ROJAS', 'LOPEZ', 'KATHERINE'],
  ['ROJAS', 'MARTINEZ', 'CLAUDIA'],
  ['ROJAS', 'OVANDO', 'GLADYS'],
  ['ROJAS', 'PAREDES', 'FABIOLA'],
  ['ROJAS', 'ROJAS', 'JACQUELINE'],
  ['ROMERO', 'CONSTANZO', 'NELLY'],
  ['ROMERO', 'ROMERO', 'PAOLA'],
  ['ROSALES', 'ALVA', 'NANCY'],
  ['ROSALES', 'BRITO', 'PAOLA'],
  ['RUBIO', 'REYES', 'CLAUDIA'],
  ['RUBIO', 'TEJO', 'MARJORIE'],
  ['RUEDA', 'ROBLES', 'NARCISA'],
  ['RUIDIAS', 'PERALTA', 'ANA'],
  ['RUIZ', 'FLORES', 'LORETO'],
  ['RUIZ', 'UMANA', 'LUZ'],
  ['SAAVEDRA', 'CHAVERRA', 'DIANA'],
  ['SAAVEDRA', 'ESQUIVEL', 'MARIA'],
  ['SAAVEDRA', 'SALINAS', 'VALESKA'],
  ['SALAZAR', 'ARRIAGADA', 'LORETO'],
  ['SALAZAR', 'NAVARRETE', 'SORAYA'],
  ['SALDANA', 'SOTO', 'VIRGINIA'],
  ['SALINAS', 'BASTIAS', 'ANA'],
  ['SALVO', 'REYES', 'ANTONELA'],
  ['SANDOVAL', 'CERDA', 'ANA'],
  ['SANHUEZA', 'ESPINOZA', 'MARCIA'],
  ['SANHUEZA', 'FUENTES', 'SANDRA'],
  ['SANTANA', 'PAREDES', 'CYNTHIA'],
  ['SEPULVEDA', 'HUENCHUMILLA', 'JENNIFER'],
  ['SEPULVEDA', 'LUENGO', 'BLANCA'],
  ['SEPULVEDA', 'NUNEZ', 'DORKA'],
  ['SERRANO', 'DUENAS', 'DULIAEL'],
  ['SOLARZA', 'VERGARA', 'PRICILA'],
  ['SUAZO', 'PALMA', 'MARIA'],
  ['TAPIA', 'CURIANTE', 'CLAUDIA'],
  ['TAPIA', 'LAZO', 'JAVIERA'],
  ['TAPIA', 'SERRES', 'MARIA'],
  ['TOBAR', 'SAEZ', 'MARTA'],
  ['TORO', 'MOLINA', 'CARMEN'],
  ['TORRES', 'CARRENO', 'VIVIANA'],
  ['TRUJILLO', 'LECAROS', 'VIOLETA'],
  ['VALENZUELA', 'ELGUETA', 'ALEJANDRA'],
  ['VALENZUELA', 'VIDAL', 'MARIA'],
  ['VALLEJOS', 'ZUNIGA', 'JUANA'],
  ['VARGAS', 'ARIAS', 'VANESSA'],
  ['VARGAS', 'ROMERO', 'MARIA'],
  ['VASQUEZ', 'LARA', 'OLIVIA'],
  ['VASQUEZ', 'MENARES', 'CAROLINA'],
  ['VASQUEZ', 'SOTO', 'CHARLOTT'],
  ['VEGA', 'CID', 'MAGDALENA'],
  ['VEGUER', 'VEGUER', 'LUISA'],
  ['VELASQUEZ', 'TORRES', 'ROXANA'],
  ['VELEZ', 'GOMEZ', 'ROSA'],
  ['VERGARA', 'IBARRA', 'CLAUDIA'],
  ['VIDAL', 'SOTO', 'MARIA'],
  ['VIDAL', 'VIDAL', 'MARIA'],
  ['VILCHES', 'SALINAS', 'CATALINA'],
  ['VILCHES', 'ORTIZ', 'SOLEDAD'],
  ['VILLABLANCA', 'JARA', 'JESSICA'],
  ['VILLABLANCA', 'MIRA', 'FRANCISCA'],
  ['VILLALOBOS', 'APABLAZA', 'SCARLETT'],
  ['VILLALOBOS', 'TRIGOSO', 'CLAUDIA'],
  ['VILLANUEVA', 'OPAZO', 'VALERIA'],
  ['VILLENA', 'ALARCON', 'LILIANA'],
  ['YANEZ', 'DIAZ', 'YOVANA'],
  ['AYALA', 'PINTO', 'CAROLINA'],
  ['CASTILLO', 'CARRASCO', 'ESTER'],
  ['ESPINOZA', 'DIESTRA', 'FLOR'],
  ['FIGUEROA', 'QUIROGA', 'SUSAN'],
  ['GAMBOA', 'QUIROZ', 'VIVIANA'],
  ['GOMEZ', 'ACEVEDO', 'PRISCILA'],
  ['HEROLD', 'IBARRA', 'YENNIFER'],
  ['HUARACAN', 'ARANCIBIA', 'JOHANNA'],
  ['JARA', 'MENDEZ', 'MARCELLA'],
  ['LIZANA', 'OYARCE', 'CYNTHIA'],
  ['MARILAF', 'LLANQUIN', 'LUCIA'],
  ['MONTANO', 'LORCA', 'CAROL'],
  ['MONTECINO', 'BARRA', 'MARITZA'],
  ['NAVARRO', 'VERGARA', 'CLAUDIA'],
  ['ORTEGA', 'CUCOCH', 'PETRAELL'],
  ['OVIEDO', 'SALAZAR', 'ISABEL'],
  ['QUINTEROS', 'CABRERA', 'JENIFFER'],
  ['RIQUELME', 'LABRIN', 'KATHERINE'],
  ['RIVERA', 'MEDINA', 'SOLANGE'],
  ['RUBIO', 'LIZAMA', 'MONICA'],
  ['SANDOVAL', 'ALVAREZ', 'CATALINA'],
  ['SANDOVAL', 'MERINO', 'ANA'],
  ['VERGARA', 'COFRE', 'MARISA'],
  ['VILLANUEVA', 'REYES', 'XIMENA']
] as const;

const filasPorPagina = 20;

export default function Seccion9_3_N_B_Sub_Fam2016_Mayo() {
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
    <section aria-label="Nómina de Subsidio Familiar de mayo 2016" className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h4 className="text-base font-semibold text-slate-900">Subsidio Familiar · Mayo 2016</h4>
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
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">Decreto Exento · Beneficio · N° 926</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">01.05.2016</td>
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
