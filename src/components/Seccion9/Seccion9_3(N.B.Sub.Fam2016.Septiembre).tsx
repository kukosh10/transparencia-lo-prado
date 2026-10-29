import { useMemo, useState } from 'react';

const beneficiarios = [
  ['ALARCON', 'OLIVERA', 'KARINA'],
  ['ALLENDE', 'VIDAL', 'FANNY'],
  ['ALVAREZ', 'PINO', 'GENESIS'],
  ['ANDAUR', 'CONTRERAS', 'GABRIELA'],
  ['ARAVENA', 'GRANDON', 'VALENTINA'],
  ['ARELLANO', 'TAPIA', 'BERTA'],
  ['ARIAS', 'ARIAS', 'KATHERINE'],
  ['ARRIAGADA', 'LIZAMA', 'PATRICIA'],
  ['ARTEAGA', 'CAMPOS', 'ROSA'],
  ['ASTUDILLO', 'MARIMAN', 'EVA'],
  ['AVENDANO', 'ORTIZ', 'EVELYN'],
  ['AYALA', 'ARMIJO', 'TALITA'],
  ['BAEZA', 'FLORES', 'MARIA'],
  ['BARRERA', 'CORTES', 'MARIA'],
  ['BASTIAS', 'CAVIERES', 'BRYAN'],
  ['BERTANIS', 'GODOY', 'VANIA'],
  ['BRAVO', 'DIAZ', 'SOLANGE'],
  ['BUSTOS', 'BENITEZ', 'MACARENA'],
  ['CAMPOS', 'ARDILES', 'PAULA'],
  ['CAMPOS', 'NAVARRO', 'DENISSE'],
  ['CAMPOS', 'QUINTRELEO', 'ROSA'],
  ['CAMUS', 'HENRIQUEZ', 'JUDITH'],
  ['CANCINO', 'URRUTIA', 'CAROLINA'],
  ['CASMER', 'CISTERNA', 'ANGELINA'],
  ['CASTILLO', 'FARFAN', 'JENNY'],
  ['CASTILLO', 'LEON', 'JANIS'],
  ['CASTILLO', 'TORO', 'BLANCA'],
  ['CASTRO', 'SUAREZ', 'CARLA'],
  ['CATALAN', 'CLAVEAU', 'ANDREA'],
  ['CEA', 'FUENTES', 'MARIA'],
  ['CHACON', 'TAPIA', 'THIARE'],
  ['CHAMORRO', 'CID', 'VERONICA'],
  ['CIFUENTES', 'BENAVIDES', 'VERONICA'],
  ['COLILEO', 'NAHUELPAN', 'JUANA'],
  ['CONTRERAS', 'ALVIAL', 'MARCELA'],
  ['CONTRERAS', 'CONTRERAS', 'GUADALUPE'],
  ['CONTRERAS', 'ESPINOZA', 'MARTA'],
  ['CORNEJO', 'PULGAR', 'ROSA'],
  ['DIAZ', 'CANCINO', 'NATALI'],
  ['DURAN', 'SOTO', 'YOHANNA'],
  ['ECHEGARAY', 'DELGADO', 'HUGO'],
  ['ESCOBAR', 'TRONCOSO', 'GIOVANNA'],
  ['FUENTES', 'ARAVENA', 'CECILIA'],
  ['GALLARDO', 'MARQUEZ', 'CLAUDIA'],
  ['GARCIA', 'SAN', 'JUAN'],
  ['GARRIDO', 'GONZALEZ', 'PAOLA'],
  ['GARRIDO', 'MILLAHUINCA', 'NICOLE'],
  ['GODOY', 'MARTINEZ', 'MELISSA'],
  ['GONGORA', 'ZULETA', 'ELSA'],
  ['GONZALEZ', 'AGUILERA', 'MARIA'],
  ['GONZALEZ', 'CERDA', 'SHAILE'],
  ['GONZALEZ', 'HERNANDEZ', 'SARA'],
  ['GUTIERREZ', 'SALINAS', 'SOLANGE'],
  ['HENRIQUEZ', 'GARCIA', 'JEANNETTE'],
  ['HENRIQUEZ', 'GUERRA', 'KATHERINE'],
  ['HENRIQUEZ', 'SALDANO', 'PAMELA'],
  ['HERNANDEZ', 'CARVALLO', 'PAMELA'],
  ['HERNANDEZ', 'VARGAS', 'EDUVIGES'],
  ['HUAMAN', 'MOCARRO', 'KATHIA'],
  ['JHONSON', 'NOVOA', 'PRISCILLA'],
  ['JIMENEZ', 'CARRENO', 'KATHERINE'],
  ['JOPIA', 'RETAMAL', 'ELIZABETH'],
  ['LEAL', 'ARAVENA', 'FABIANA'],
  ['LEGUA', 'ALDERETE', 'CAMILA'],
  ['LEHUYE', 'CASTRO', 'CAMILA'],
  ['LEYTON', 'ARMIJO', 'JOICE'],
  ['LEYTON', 'LOYOLA', 'VALERIA'],
  ['LOPEZ', 'LOPEZ', 'FABIOLA'],
  ['LUCO', 'FUENZALIDA', 'SHARITY'],
  ['MADRID', 'TAPIA', 'SONIA'],
  ['MAINO', 'MIRANDA', 'KRISTAL'],
  ['MALTEZ', 'MOYANO', 'CLARISA'],
  ['MARQUEZ', 'RODRIGUEZ', 'NATALIA'],
  ['MARTINEZ', 'AHUMADA', 'MARCELA'],
  ['MATOS', 'ABURTO', 'NORMA'],
  ['MAYLLE', 'ORTIZ', 'ADMA'],
  ['MAYOLAFQUEN', 'COFRE', 'JAIQUE'],
  ['MEDINA', 'VIO', 'KARINA'],
  ['MEJIAS', 'IBANEZ', 'BEATRIZ'],
  ['MIRANDA', 'MILLAHUAL', 'SANDRA'],
  ['MOLINA', 'LARA', 'MARCELA'],
  ['MORALES', 'RUBIO', 'CAROLINA'],
  ['MUNOZ', 'BARAHONA', 'DAMARIS'],
  ['MUNOZ', 'IBARRA', 'LIDUVINA'],
  ['MUNOZ', 'LETRANZ', 'KIPSHY'],
  ['MUNOZ', 'LLEVUL', 'ANA'],
  ['MUNOZ', 'SOTOMAYOR', 'TAMARA'],
  ['NAVARRO', 'LUCERO', 'ELENA'],
  ['NUNEZ', 'CORTES', 'PAOLA'],
  ['OBREGON', 'DUENAS', 'MARILUZ'],
  ['OLGUIN', 'PAVEZ', 'YAMIRA'],
  ['OLIVA', 'GUANILO', 'DORA'],
  ['OLIVARES', 'ALCANTARA', 'VERONICA'],
  ['ORELLANA', 'REYES', 'MARIBEL'],
  ['ORTEGA', 'GONZALEZ', 'CINDY'],
  ['OSORIO', 'MATOS', 'CAROLINA'],
  ['OSORIO', 'PULGAR', 'ROSA'],
  ['PAILLAMAQUI', 'AGUERO', 'MARIA'],
  ['PAITA', 'MAYLLE', 'SANDY'],
  ['PARDO', 'ROJAS', 'CAROLINA'],
  ['PENA', 'REYES', 'CECILIA'],
  ['PERALTA', 'HERNANDEZ', 'ELIZABETH'],
  ['PEREDA', 'PEREDA', 'MARIA'],
  ['PEREZ', 'BASTIAS', 'KATHERINE'],
  ['PINILLA', 'VALDES', 'MARISOL'],
  ['PINO', 'BEIZA', 'NORMA'],
  ['PROVIBEL', 'ESPINOZA', 'GLORIA'],
  ['QUEZADA', 'PARAM', 'PILAR'],
  ['QUEZADA', 'VEGA', 'KAREN'],
  ['QUINEHUAL', 'CAYUMIL', 'VIVIANA'],
  ['QUIROZ', 'JAQUE', 'RUTH'],
  ['RAJCEVIC', 'GALLEGUILLOS', 'MARCELA'],
  ['RAMADE', 'MORALES', 'CLAUDIA'],
  ['RIVEROS', 'RAMIREZ', 'CARMEN'],
  ['ROBLES', 'ALVAREZ', 'CLAUDIA'],
  ['ROJAS', 'PINTO', 'EVELYN'],
  ['ROMAN', 'ESPINOZA', 'MARLEN'],
  ['ROMAN', 'VILLAGRA', 'NICOLE'],
  ['ROMERO', 'CHAMORRO', 'MARIA'],
  ['RUBILAR', 'MOSCOSO', 'ANDREA'],
  ['RUBIO', 'CASTRO', 'CATALINA'],
  ['RUIZ', 'BAZAN', 'MYRIAM'],
  ['RUZ', 'CASTRO', 'GLADYS'],
  ['SAENZ', 'SUAZO', 'KATHERINE'],
  ['SAEZ', 'MUNOZ', 'CECILIA'],
  ['SALAS', 'SALDIVAR', 'ELISA'],
  ['SALGADO', 'GOMEZ', 'YANETT'],
  ['SANCHEZ', 'PENA', 'SANDRA'],
  ['SANDOVAL', 'SANDOVAL', 'LORENA'],
  ['SEGUEL', 'SANDOVAL', 'LEONILA'],
  ['SEGURA', 'BERRIOS', 'LINDA'],
  ['SEPULVEDA', 'GOMEZ', 'YASMINA'],
  ['SEPULVEDA', 'ROJAS', 'ANA'],
  ['SEPULVEDA', 'SEPULVEDA', 'SANDRA'],
  ['SERRUYS', 'MUNOZ', 'MARIA'],
  ['SEVERINO', 'VASQUEZ', 'JOCELYN'],
  ['SOTO', 'ALVARADO', 'BARBARA'],
  ['TAPIA', 'VIGORENA', 'CLAUDIA'],
  ['TELLO', 'MEJIAS', 'MARGOTH'],
  ['URRA', 'AHUMADA', 'TAMARA'],
  ['VALDEBENITO', 'ESPINOZA', 'IVONNE'],
  ['VALDERRAMA', 'ESPINOZA', 'SUSANA'],
  ['VARGAS', 'CATRILEF', 'NADIA'],
  ['VARGAS', 'HUAICO', 'MABEL'],
  ['VASQUEZ', 'YANEZ', 'CAROLA'],
  ['VERGARA', 'DURAN', 'ANGIE'],
  ['VERGARA', 'LEIVA', 'RUTH'],
  ['VILCHES', 'BRAVO', 'BIANCA'],
  ['VILLA', 'CONTRERAS', 'LUCRECIA'],
  ['VILLARROEL', 'GONZALEZ', 'PERLA'],
  ['ZAMORANO', 'CURAMIL', 'MONICA'],
  ['ACUNA', 'CORNEJO', 'JACQUELINE'],
  ['AGUERO', 'TREJO', 'PAMELA'],
  ['AGUILAR', 'SUBIABRE', 'JENIFFER'],
  ['ARRIAZA', 'MUNOZ', 'ELIZABETH'],
  ['AVILA', 'ACUNA', 'MARIA'],
  ['BARROS', 'SOTO', 'CAMILA'],
  ['CAMPOS', 'AUGER', 'DANIELA'],
  ['CANIO', 'CARILAO', 'YESENIA'],
  ['CORNEJO', 'ARMIJO', 'LUISA'],
  ['DE', 'LA BARRA', 'VANIA'],
  ['DOMINGUEZ', 'HERNANDEZ', 'VANIA'],
  ['GONZALEZ', 'BENAVIDES', 'OLGA'],
  ['GUZMAN', 'DIAZ', 'MARISELA'],
  ['HERRERA', 'GUERRERO', 'VERONICA'],
  ['IBARRA', 'ORTIZ', 'ANAIS'],
  ['LLANOS', 'HENRIQUEZ', 'KAREN'],
  ['LOPEZ', 'CATALDO', 'KARINA'],
  ['NECULPAN', 'CAYUPIL', 'XIMENA'],
  ['OLIVARES', 'GONZALEZ', 'DAYANNA'],
  ['ORDONEZ', 'CONTRERAS', 'IRENE'],
  ['PAILLAL', 'ANTINAO', 'CARMEN'],
  ['PAVEZ', 'VIVEROS', 'TABITA'],
  ['PENAILILLO', 'PENAILILLO', 'ESTEFANI'],
  ['PEREZ', 'GUZMAN', 'JENNIFER'],
  ['PONCE', 'QUEZADA', 'VIOLETA'],
  ['QUILAQUEO', 'CANIQUIEO', 'NIEVES'],
  ['QUINCHEL', 'HUICHIMAN', 'ALIDA'],
  ['RODRIGUEZ', 'QUINTANA', 'TERESA'],
  ['ROMAN', 'VALENZUELA', 'XIMENA'],
  ['SAIHUEQUE', 'CHEUQUE', 'DOMINGA'],
  ['SILVA', 'ROMERO', 'MARISEL'],
  ['SOLIS', 'IGOR', 'ANDREA'],
  ['VALENZUELA', 'ESCOBAR', 'ESTEFANIA'],
  ['VALLEJOS', 'MENARES', 'DAISY'],
  ['VARGAS', 'FUENTES', 'JULIA'],
  ['VERA', 'ACEVEDO', 'ROXANA'],
  ['VILCHES', 'OLGUIN', 'PAMELA'],
  ['VIVANCO', 'MOLINA', 'ANA']
] as const;

const filasPorPagina = 20;

export default function Seccion9_3_N_B_Sub_Fam2016_Septiembre() {
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
    <section aria-label="Nómina de Subsidio Familiar de septiembre 2016" className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h4 className="text-base font-semibold text-slate-900">Subsidio Familiar · Septiembre 2016</h4>
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
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">Decreto Exento N° 1934 de 01.08.16</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">01.09.2016</td>
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
