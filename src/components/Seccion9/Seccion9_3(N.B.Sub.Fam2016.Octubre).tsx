import { useMemo, useState } from 'react';

const beneficiarios = [
  ['ACEVEDO', 'ESPINOSA', 'NELLY'],
  ['ACUNA', 'GATICA', 'SANDRA'],
  ['AGUAYO', 'AGUAYO', 'CAROLINA'],
  ['AGUILA', 'DOMINGUEZ', 'JOCELYN'],
  ['AGUILERA', 'RIQUELME', 'YESENIA'],
  ['AGUIRRE', 'HIDALGO', 'CAMILA'],
  ['ALARCON', 'CONEJEROS', 'JOANA'],
  ['ALARCON', 'VALDES', 'MITZY'],
  ['ALCALDE', 'OLIVARES', 'NAOMI'],
  ['ALMONACID', 'ROJAS', 'SUSANA'],
  ['ALVAREZ', 'PAVEZ', 'ROSA'],
  ['ALVEAR', 'DE PAULO', 'MAKARENA'],
  ['AMESTICA', 'ALBARRAN', 'CAROLINA'],
  ['ANGASPILCO', 'TUMBAJULCA', 'CATHERINE'],
  ['ANTIL', 'CHEUQUE', 'JUANA'],
  ['ANTINAO', 'LIEMPE', 'TATIANA'],
  ['ANTOLIN', 'GONZALEZ', 'DANIELA'],
  ['APARICIO', 'SILVA', 'MARIBEL'],
  ['ARAGON', 'BARRIOS', 'SANDRA'],
  ['ARANGUIZ', 'CARRASCO', 'YOSELIN'],
  ['ARANGUIZ', 'MOYA', 'JOHANNA'],
  ['ARAVENA', 'MUNOZ', 'JOCELYN'],
  ['ARAYA', 'PAVEZ', 'MARIA'],
  ['ARCE', 'DURAN', 'LUCIA'],
  ['ARCE', 'GUERRERO', 'CATALINA'],
  ['ARRUE', 'HERNANDEZ', 'MARIENNE'],
  ['ASTORGA', 'CONTRERAS', 'MARISEL'],
  ['ASTUDILLO', 'MORALES', 'KATALINA'],
  ['ASTUDILLO', 'SEGUEL', 'MARIA'],
  ['AVILA', 'DUARTE', 'MARIA'],
  ['BANDA', 'VIDAL', 'BERIOSKA'],
  ['BARRIENTO', 'HUENCHUAL', 'CAROLINA'],
  ['BARRON', 'SALINAS', 'CLEMENTINA'],
  ['BAUFFANAIS', 'CONTRERAS', 'INGRID'],
  ['BECERRA', 'RODRIGUEZ', 'VERONICA'],
  ['BENAVIDES', 'BENAVIDES', 'MARIA'],
  ['BENITEZ', 'URTUBIA', 'MIREYA'],
  ['BULNES', 'NAVARRETE', 'MARIA'],
  ['CABRERA', 'MANCILLA', 'KAROLL'],
  ['CADAGAN', 'TORREALBA', 'JENNIFER'],
  ['CALFUAO', 'ARAVENA', 'ISMENIA'],
  ['CALLUQUEO', 'CARILAO', 'VIRGINIA'],
  ['CAMPOS', 'GOMEZ', 'MIRIAM'],
  ['CANALES', 'RIVAS', 'VALESKA'],
  ['CARDENAS', 'CUMIAN', 'NICOLE'],
  ['CARO', 'ANTINAO', 'MARLY'],
  ['CARRASCO', 'TORRES', 'MARINA'],
  ['CASMER', 'CISTERNA', 'ANGELINA'],
  ['CASTRO', 'CARVAJAL', 'MARCIA'],
  ['CATRILEO', 'ALARCON', 'CATALINA'],
  ['CIFUENTES', 'LEAL', 'MARIELA'],
  ['CISTERNA', 'JELDRES', 'SOLANGE'],
  ['COLIMAN', 'ANTIPAN', 'MARGOT'],
  ['COLLI', 'MILLAN', 'MADELEINE'],
  ['CONTRERAS', 'ZEPEDA', 'KAREN'],
  ['CORDERO', 'CORDERO', 'ISABEL'],
  ['CORREA', 'VARGAS', 'MARIA'],
  ['CORTES', 'BARRIGA', 'YASNA'],
  ['CORTES', 'CURIQUEO', 'NATASHA'],
  ['CORTES', 'RIQUELME', 'LOIS'],
  ['CRISTI', 'CABRERA', 'DELIA'],
  ['CURILLAN', 'CALFIN', 'ERNESTINA'],
  ['DE LA CUADRA', 'POZO', 'ELIZABETH'],
  ['DIAZ', 'AVENDANO', 'MOLLIE'],
  ['DIAZ', 'CORTES', 'MARIA'],
  ['DIAZ', 'MORALES', 'MARIA'],
  ['DINAMARCA', 'ESPINOSA', 'ISABEL'],
  ['DINAMARCA', 'ESPINOSA', 'PAULA'],
  ['DINAMARCA', 'FUENTES', 'GENOVEVA'],
  ['DONAIRE', 'ORTEGA', 'CONSTANZA'],
  ['DONOSO', 'ARAYA', 'MARIA'],
  ['ELGUETA', 'PAINENANCO', 'JESSICA'],
  ['ERICES', 'MUNOZ', 'CRISTINA'],
  ['ESPINA', 'ABACA', 'VICTORIA'],
  ['ESPINOLA', 'INOSTROZA', 'VALESKA'],
  ['ESPINOZA', 'ARAVENA', 'LEONTINA'],
  ['ESPOZ', 'JAQUE', 'MARILYN'],
  ['FALCON', 'BIANCHI', 'LUCIA'],
  ['FARIAS', 'CATALAN', 'GABY'],
  ['FAUNDES', 'LIVA', 'MIRIAM'],
  ['FERRADA', 'PEREZ', 'MARIA'],
  ['FERROA', 'ORTECHO', 'LOURDES'],
  ['FIGUEROA', 'FIERRO', 'MASIEL'],
  ['FLORES', 'CARO', 'FRANCISCA'],
  ['FLORES', 'GALAZ', 'VICTOR'],
  ['FUENTES', 'MERINO', 'KATHERINE'],
  ['GAETE', 'ARAYA', 'ELENA'],
  ['GAJARDO', 'MORALES', 'BETZABE'],
  ['GALLARDO', 'PEREZ', 'STEPHANIE'],
  ['GALVEZ', 'OSORIO', 'PRISCILLA'],
  ['GAMBOA', 'TRONCOSO', 'TAMARA'],
  ['GARCIA', 'BAEZA', 'FERNANDA'],
  ['GARCIA', 'MIRANDA', 'PRISCILLA'],
  ['GARRIDO', 'HERMOSILLA', 'CLAUDIA'],
  ['GIL', 'URRUTIA', 'JULIA'],
  ['GONZALEZ', 'AGUILERA', 'MAGALI'],
  ['GONZALEZ', 'CANETE', 'ROSA'],
  ['GONZALEZ', 'GONZALEZ', 'LORENA'],
  ['GONZALEZ', 'JOFRE', 'GEORGINA'],
  ['GONZALEZ', 'MUNOZ', 'EVELYN'],
  ['GONZALEZ', 'MUNOZ', 'MARIA'],
  ['GONZALEZ', 'ORELLANA', 'FABIOLA'],
  ['GONZALEZ', 'SALDIAS', 'CLAUDIA'],
  ['GRABUZ', 'ROJAS', 'ISAMAR'],
  ['GUERRA', 'GARCIA', 'SANDRA'],
  ['GUTIERREZ', 'PAREDES', 'GLORIA'],
  ['GUTIERREZ', 'SALINAS', 'SOLANGE'],
  ['GUTIERREZ', 'SUCO', 'KIMBERLY'],
  ['GUZMAN', 'SILVA', 'ELSA'],
  ['HERNANDEZ', 'GODOY', 'ANA'],
  ['HERNANDEZ', 'PINEDA', 'EVELYN'],
  ['HERNANDEZ', 'PINO', 'GUILLERMINA'],
  ['HERNANDEZ', 'POBLETE', 'PAOLA'],
  ['HERNANDEZ', 'RUIZ', 'ANA'],
  ['HERRERA', 'MEDINA', 'VERONICA'],
  ['HERRERA', 'RIVEROS', 'SOLANGE'],
  ['JANA', 'MADRID', 'ELBA'],
  ['JARA', 'CHAURA', 'PAMELA'],
  ['JEREZ', 'ANDRADE', 'SABINA'],
  ['JIMENEZ', 'CERNA', 'STEPHANY'],
  ['JIMENEZ', 'MEDINA', 'VERONICA'],
  ['JORQUERA', 'GONZALEZ', 'GEMMA'],
  ['LADRON DE GUEVA', 'AVALOS', 'ELIZABETH'],
  ['LAGOS', 'ULLOA', 'PATRICIA'],
  ['LARA', 'CAMPOS', 'GUILLERMINA'],
  ['LEIVA', 'OLAVE', 'ANGELY'],
  ['LEMUS', 'VILLARROEL', 'SCARLETTE'],
  ['LEON', 'ORMAZABAL', 'PAMELA'],
  ['LICANQUEO', 'CHIHUAICURA', 'JIMENA'],
  ['LINEROS', 'FUENTES', 'MONICA'],
  ['LOBOS', 'VENEGAS', 'ALEXANDRA'],
  ['LOPEZ', 'VILLAGRA', 'MONICA'],
  ['LUCERO', 'ZAPATA', 'ALBA'],
  ['MARILEO', 'HUAQUIMAN', 'ERIKA'],
  ['MARIN', 'COROSO', 'MARIA'],
  ['MARTINEZ', 'POBLETE', 'LUISA'],
  ['MARTINEZ', 'RAMIREZ', 'JENNY'],
  ['MATUS', 'VIDAL', 'MICHELLE'],
  ['MENDEZ', 'CHAVEZ', 'DANIELA'],
  ['MENDEZ', 'FUENTES', 'PATRICIA'],
  ['MENDEZ', 'PINO', 'ROXANA'],
  ['MILLAQUEO', 'CURAMIL', 'MARIA'],
  ['MINCHILLANCA', 'LIEMPI', 'AUDOLINA'],
  ['MIRA', 'AROS', 'MARGARITA'],
  ['MIRANDA', 'MEDEL', 'IVANSKA'],
  ['MIRANDA', 'VERGARA', 'WENDY'],
  ['MONTECINOS', 'MUNOZ', 'CELIA'],
  ['MORALES', 'MARQUEZ', 'GIANINA'],
  ['MORALES', 'RUBIO', 'KATHERINE'],
  ['MORIS', 'LECAROS', 'AYLEEN'],
  ['MOYA', 'FIGUEROA', 'ANA'],
  ['MOYA', 'ZUNIGA', 'GUADALUPE'],
  ['MUJICA', 'MUJICA', 'JOHANA'],
  ['MUNOZ', 'LAVIN', 'ELIZABETH'],
  ['MUNOZ', 'ZENTENO', 'MARIA'],
  ['NAHUELHUAL', 'POBLETE', 'DANIELA'],
  ['NANCULIPE', 'NANCOAN', 'MARIA'],
  ['NAVARRETE', 'CLERICI', 'ERIKA'],
  ['NAVARRETE', 'ROA', 'ELISA'],
  ['NAVARRO', 'SANCHEZ', 'MARCELA'],
  ['NOVOA', 'RODRIGUEZ', 'OLGA'],
  ['NUNEZ', 'GARCIA', 'MARIE'],
  ['NUNEZ', 'JIMENEZ', 'CAROLINA'],
  ['NUNEZ', 'OSSES', 'NATALIA'],
  ['OLATE', 'PINOLER', 'ANA'],
  ['OLAVE', 'CELIS', 'DANITZA'],
  ['OLIVARES', 'ARIAS', 'THALIA'],
  ['OLIVARES', 'KUSCHEL', 'PAULINA'],
  ['OLIVARES', 'SILVA', 'BERNARDITA'],
  ['ORELLANA', 'MORAGA', 'CAMILA'],
  ['ORREGO', 'ORREGO', 'PAULA'],
  ['ORTIZ', 'VALDEZ', 'PATRICIA'],
  ['OSORIO', 'PEREZ', 'NICOLE'],
  ['PENA', 'CASTRO', 'MARIA'],
  ['PENA', 'CASTRO', 'MARLENE'],
  ['PENA', 'LAGOS', 'ANALIDA'],
  ['PENA', 'MENDEZ', 'SOFIA'],
  ['PINEDA', 'GUTIERREZ', 'GUILLERMINA'],
  ['PINO', 'PEREIRA', 'MABET'],
  ['PINO', 'HENRIQUEZ', 'ZULEMA'],
  ['POLANCO', 'BUSTOS', 'HERTA'],
  ['PONCE', 'SEPULVEDA', 'JOCELYN'],
  ['PUERTA', 'CAMAN', 'MEREDITH'],
  ['QUEZADA', 'MUNOZ', 'VALERIA'],
  ['QUIMEN', 'CHEUHIN', 'ELSA'],
  ['RAMIREZ', 'ULLOA', 'MARUJA'],
  ['RAMOS', 'ROMERO', 'CECILIA'],
  ['REINA', 'WILSON', 'HERNALINA'],
  ['REYES', 'ESPINOZA', 'MIRIAM'],
  ['REYES', 'RAMIREZ', 'JUDITH'],
  ['RIVERA', 'MUNOZ', 'KARLA'],
  ['RODRIGUEZ', 'OVIEDO', 'AIDA'],
  ['RODRIGUEZ', 'PALLERO', 'GRACIELA'],
  ['RODRIGUEZ', 'SAAVEDRA', 'NICOL'],
  ['ROJAS', 'CALDERON', 'PAOLA'],
  ['ROJAS', 'DUARTE', 'RODRIGO'],
  ['ROJAS', 'PALMA', 'IVA'],
  ['ROLDAN', 'CASTRO', 'CASSANDRA'],
  ['ROMERO', 'LAGOS', 'CONSTANZA'],
  ['RUBIO', 'MORENO', 'MAGALY'],
  ['RUIZ', 'OLIVO', 'MARISOL'],
  ['RUIZ', 'SOLIS', 'ALEJANDRA'],
  ['SALAS', 'JARA', 'KAREN'],
  ['SALAS', 'PALACIOS', 'TATIANA'],
  ['SALGADO', 'ZAPATA', 'MERCEDES'],
  ['SALINAS', 'PEREZ', 'GRACE'],
  ['SAN', 'JUAN', 'VERGARA'],
  ['SANCHEZ', 'MARCHANT', 'YENIFFER'],
  ['SANCHEZ', 'VEGA', 'NANCY'],
  ['SANDOVAL', 'LARREU', 'LORENA'],
  ['SANGUINETTI', 'HERRERA', 'ROMINA'],
  ['SEPULVEDA', 'LARENAS', 'SILVIA'],
  ['SEPULVEDA', 'LAZO', 'LUCIA'],
  ['SEPULVEDA', 'SAAVEDRA', 'NANCY'],
  ['SILVA', 'ORELLANA', 'CLARA'],
  ['SOTELO', 'PAREDES', 'STEPHANY'],
  ['SOTO', 'CARMONA', 'GERALDINE'],
  ['SOTO', 'CIFUENTES', 'DINA'],
  ['SOTO', 'MANOSALVA', 'LISSET'],
  ['SOTOMAYOR', 'MENARES', 'CATERINE'],
  ['SUCO', 'CANALES', 'DAVINA'],
  ['TAPIA', 'VIGORENA', 'CLAUDIA'],
  ['TARAZONA', 'SANDOVAL', 'CECILIA'],
  ['TOBAR', 'CRUCES', 'SARA'],
  ['TOBAR', 'SOTO', 'MARJONIE'],
  ['TOLEDO', 'TORRES', 'MARIA'],
  ['TORRES', 'BLANCHETEAU', 'CAROLINA'],
  ['TORRES', 'MARABOLI', 'DANIELA'],
  ['TREJO', 'BARRERA', 'JACQUELINE'],
  ['TRUJILLO', 'CORTES', 'SUSANA'],
  ['URRUTIA', 'RIQUELME', 'DELIA'],
  ['UTRERAS', 'VILLANUEVA', 'CRISTINA'],
  ['VALENZUELA', 'ALONQUEO', 'DEISY'],
  ['VARGAS', 'BENAVIDES', 'MARIA'],
  ['VARGAS', 'CATRILEF', 'NADIA'],
  ['VARGAS', 'PARADA', 'JOCELYN'],
  ['VASQUEZ', 'BAEZA', 'CLAUDIA'],
  ['VASQUEZ', 'MENARES', 'CAROLINA'],
  ['VASQUEZ', 'RIQUELME', 'ELISABETH'],
  ['VENEGAS', 'ZUNIGA', 'EVELYN'],
  ['VIDAL', 'ALARCON', 'JESSICA'],
  ['VIDAL', 'MARAMBIO', 'CLAUDIA'],
  ['VIDAL', 'SOTO', 'MARIA'],
  ['VILCHES', 'TAPIA', 'ANA'],
  ['VILLABLANCA', 'POBLETE', 'MARJORIE'],
  ['VILLANUEVA', 'TORRES', 'MARISOL'],
  ['VILLEGAS', 'LOPEZ', 'BLANCA'],
  ['VIVANCO', 'HUENOLAF', 'ROSA'],
  ['WUTRICH', 'SAN', 'MARTIN'],
  ['ZAMORANO', 'LOG', 'MARIANELA'],
  ['ACEVEDO', 'VARGAS', 'CLAUDIA'],
  ['CASILLA', 'ZUNIGA', 'MARCELA'],
  ['CASTILLO', 'PEREZ', 'ESTRELLA'],
  ['ERICES', 'JARA', 'MARIA'],
  ['GALVEZ', 'MENESES', 'PAULINA'],
  ['GODOY', 'ESPINOLA', 'DANIELA'],
  ['IBARRA', 'GONZALEZ', 'ALBERTO'],
  ['LAGOS', 'BARRIENTOS', 'CAROLINA'],
  ['MIRANDA', 'AGUIRRE', 'MARIA'],
  ['MOREIRA', 'CASTRO', 'LINDA'],
  ['PAILLAL', 'ANTINAO', 'CARMEN'],
  ['PARRA', 'ESCOBAR', 'GLORIA'],
  ['PINA', 'BUSTAMANTE', 'VERONICA'],
  ['ROJAS', 'LOPEZ', 'MACARENA'],
  ['VASQUEZ', 'SOLAR', 'BETANIA'],
  ['VIDAL', 'DONOSO', 'LUCIA'],
  ['PARRA', 'ESCOBAR', 'GLORIA'],
  ['PINA', 'BUSTAMANTE', 'VERONICA'],
  ['ROJAS', 'LOPEZ', 'MACARENA'],
  ['VASQUEZ', 'SOLAR', 'BETANIA'],
  ['VIDAL', 'DONOSO', 'LUCIA']
] as const;

const filasPorPagina = 20;

export default function Seccion9_3_N_B_Sub_Fam2016_Octubre() {
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
    <section aria-label="Nómina de Subsidio Familiar de octubre 2016" className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h4 className="text-base font-semibold text-slate-900">Subsidio Familiar · Octubre 2016</h4>
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
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">Decreto Exento N° 2199 de 01.09.16</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">01.10.2016</td>
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
