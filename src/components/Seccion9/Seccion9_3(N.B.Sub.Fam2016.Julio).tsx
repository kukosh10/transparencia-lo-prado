import { useMemo, useState } from 'react';

const beneficiarios = [
  ['ABARCA', 'LEMUS', 'YARITZA'],
  ['ABARCA', 'NAVARRO', 'LUZMENIA'],
  ['ACUM', 'OJEDA', 'ELIZABETH'],
  ['AGUERO', 'TREJO', 'CLAUDIA'],
  ['ALFARO', 'CALLEJAS', 'PAOLA'],
  ['ALMARZA', 'FLORES', 'CAMILA'],
  ['ALMARZA', 'SANTIBANEZ', 'ERIKA'],
  ['AMPUERO', 'BELMAR', 'CINTIA'],
  ['ANDRADES', 'CASTILLO', 'VALENTINA'],
  ['ANGELES', 'CONTRERAS', 'PAOLA'],
  ['AREVALO', 'REYES', 'ESTEFANIA'],
  ['ARIAS', 'CONTRERAS', 'PATRICIA'],
  ['ARTIGAS', 'JARA', 'ANA'],
  ['ARZOLA', 'CASTILLO', 'PAOLA'],
  ['ASPIRILLA', 'LARGACHA', 'LUZ'],
  ['BALLASCO', 'SURCO', 'YESSICA'],
  ['BARRA', 'FUENTES', 'DAVINA'],
  ['BARRAZA', 'VERA', 'CINDY'],
  ['BARRIA', 'SILVA', 'MARIA'],
  ['BASCUNAN', 'RODRIGUEZ', 'CECILIA'],
  ['BASTIAS', 'ZARZAR', 'ESTER'],
  ['BELLIDO', 'VALENZUELA', 'CATHERINE'],
  ['BELLO', 'BELLO', 'PAULA'],
  ['BERNAL', 'GANGA', 'SILVANA'],
  ['BERRIOS', 'VIDAL', 'DANIELA'],
  ['BLAS', 'VASQUEZ', 'SEGUNDINA'],
  ['BORRAZ', 'GARCIA', 'DANILA'],
  ['BURGOS', 'OLATE', 'ELIZABETH'],
  ['CABELLO', 'GONZALEZ', 'BERNARDITA'],
  ['CABRERA', 'MARMOL', 'MARLENE'],
  ['CACERES', 'PARRA', 'MARCELA'],
  ['CADEGAN', 'ALVEAL', 'DANIELA'],
  ['CALDERON', 'SALGADO', 'ALICIA'],
  ['CANCINO', 'URRUTIA', 'CAROLINA'],
  ['CARRASCO', 'CRESPO', 'DEBORAH'],
  ['CARRASCO', 'NUNEZ', 'CAMILA'],
  ['CARRASCO', 'SAEZ', 'NANCY'],
  ['CARRASCO', 'SOTO', 'NATHALIE'],
  ['CARRASCO', 'TORRES', 'JONATHAN'],
  ['CARTAGENA', 'GALLARDO', 'GORDANA'],
  ['CARVAJAL', 'CASTRO', 'VERONICA'],
  ['CASIMILLO', 'MINO', 'NELLY'],
  ['CASTILLO', 'ESCOBAR', 'CECILIA'],
  ['CASTILLO', 'LEON', 'BARBARA'],
  ['CASTRO', 'AVILA', 'LORENA'],
  ['CASTRO', 'DONOSO', 'LAURA'],
  ['CASTRO', 'MENDEZ', 'SOLANGE'],
  ['CASTRO', 'RAMOS', 'KARINA'],
  ['CASTRO', 'VIDAL', 'LESLIE'],
  ['CAVIERES', 'VILLARROEL', 'KAREN'],
  ['CAYULAO', 'CARINADO', 'EMILIA'],
  ['CERDA', 'VIDAL', 'MARITZA'],
  ['CHACON', 'VIVAR', 'LETICIA'],
  ['CHAVEZ', 'FIGUEROA', 'KATHERINE'],
  ['CHEUQUE', 'HUENCHULLAN', 'TATIANA'],
  ['CIFUENTES', 'ESPINOZA', 'SOLANGE'],
  ['COLAN', 'ZAMUDIO', 'SILVIA'],
  ['CONCHA', 'TAPIA', 'MURIEL'],
  ['CONTRERAS', 'MARTINEZ', 'NATALIA'],
  ['CORDOVA', 'BECERRA', 'LESLIE'],
  ['CORNEJO', 'MEZA', 'DORIS'],
  ['CORONADO', 'CASTILLO', 'ELIZABETH'],
  ['CUEVAS', 'ACOSTA', 'MIRTA'],
  ['CUNDUMI', 'MONTANO', 'DIANA'],
  ['DAVILA', 'GONZALES', 'MARIA'],
  ['DELGADO', 'NAVARRO', 'MACARENA'],
  ['DIAZ', 'LEIVA', 'GERALDINE'],
  ['DIAZ', 'MORAGA', 'LUZ'],
  ['DONGO', 'MALLMA', 'LUCIA'],
  ['ENCINA', 'SALINAS', 'JOCELYN'],
  ['FERNANDEZ', 'FERNANDEZ', 'MARIA'],
  ['FERNANDEZ', 'VIAL', 'LEILA'],
  ['FLORES', 'GALAZ', 'CAMILA'],
  ['FLORES', 'VILLARROEL', 'NITZAN'],
  ['FUENTES', 'SAAVEDRA', 'HERMOSINA'],
  ['GAETE', 'HALYBURTON', 'LEONOR'],
  ['GALLARDO', 'VERGARA', 'PALOMA'],
  ['GARCES', 'ALCAYAGA', 'MARIA'],
  ['GARCIA', 'SEPULVEDA', 'YOBELY'],
  ['GOMEZ', 'CASTILLO', 'CAROLINA'],
  ['GOMEZ', 'TRONCOSO', 'PAMELA'],
  ['GONZALES', 'NIEVES', 'LISBET'],
  ['GONZALES', 'RIOS', 'CATHERINE'],
  ['GONZALEZ', 'BARRIOS', 'KATHERINE'],
  ['GONZALEZ', 'HERNANDEZ', 'GENESIS'],
  ['GONZALEZ', 'LIEPPE', 'KARINA'],
  ['GONZALEZ', 'PARRA', 'SANDRA'],
  ['GONZALEZ', 'PEREIRA', 'MARIA'],
  ['GONZALEZ', 'RODRIGUEZ', 'LORETO'],
  ['GUNEZ', 'MERCADO', 'JOSELINE'],
  ['GUTIERREZ', 'DONAIRE', 'JULIA'],
  ['GUZMAN', 'GUZMAN', 'CAROLINA'],
  ['GUZMAN', 'URRUTIA', 'MARIA'],
  ['HERNANDEZ', 'PIZARRO', 'SONIA'],
  ['HERRERA', 'CONOCEAN', 'JENIFFER'],
  ['HERRERA', 'GUERRERO', 'VERONICA'],
  ['HORMAZABAL', 'RODRIGUEZ', 'KATHERINE'],
  ['HUACACAYUCHO', 'GUERRA', 'SORAYDA'],
  ['HUANACO', 'HUANACO', 'TERESA'],
  ['HUEICO', 'HERNANDEZ', 'ROCIO'],
  ['HUETRA', 'CHIHUAI PAN', 'ROSA'],
  ['HUENULAF', 'RAIN', 'CYNTHIA'],
  ['HURTADO', 'CANO', 'JULISA'],
  ['IBACACHE', 'ASTETE', 'SOLEDAD'],
  ['IBACACHE', 'FARIAS', 'DIANA'],
  ['IBANEZ', 'GARRIDO', 'PAMELA'],
  ['JARA', 'CHAURA', 'PAMELA'],
  ['JARA', 'MENDEZ', 'MARICELLA'],
  ['JARPA', 'FIGUEROA', 'ALEXANDRA'],
  ['JERDOS', 'PIZARRO', 'SCARLETTE'],
  ['LARA', 'MOYA', 'YANARA'],
  ['LEPE', 'SUAZO', 'DENISSE'],
  ['LINCO', 'SANTI', 'SOFIA'],
  ['LIZAMA', 'HUENCHUMAN', 'VIRGINIA'],
  ['LIZANA', 'NAVARRETE', 'BLANCA'],
  ['LOPEZ', 'IPIRRABARRA', 'NATALY'],
  ['LOPEZ', 'ORELLANA', 'CONSTANZA'],
  ['LORCA', 'REYES', 'LICEROTT'],
  ['LUCO', 'GONZALEZ', 'SUSANA'],
  ['LUENGO', 'BONILLA', 'LILIAN'],
  ['LUVECCE', 'PIUTRIN', 'YENNY'],
  ['MACHARE', 'GONZALES', 'NORA'],
  ['MARAMBIO', 'ESCOBAR', 'JESSICA'],
  ['MARAMBIO', 'PINTO', 'CAMILA'],
  ['MARAMBIO', 'VERGARA', 'LAURA'],
  ['MARDONES', 'GUTIERREZ', 'PAMELA'],
  ['MARQUEZ', 'FUENTES', 'SOLANGE'],
  ['MARZAN', 'GARCIA', 'SOLEDAD'],
  ['MAUREIRA', 'BARRAZA', 'CLAUDIA'],
  ['MAZA', 'GARRIDO', 'GRACE'],
  ['MELIVILU', 'ABARZUA', 'LIZANKA'],
  ['MENDEZ', 'VALDIVIA', 'MARCELA'],
  ['MEZA', 'PINTO', 'VALESKA'],
  ['MOENA', 'GARCIA', 'JULLISSA'],
  ['MOLINA', 'URRA', 'VALERIA'],
  ['MONDACA', 'CORRALES', 'JESSICA'],
  ['MORA', 'CIFUENTES', 'NADIA'],
  ['MORENO', 'MORENO', 'CAROLINA'],
  ['MORGADO', 'TORRES', 'MELISSA'],
  ['MOYA', 'JARAMILLO', 'PATRICIA'],
  ['MOYA', 'MARTINEZ', 'CARLA'],
  ['MUNOZ', 'BUSTOS', 'MAGALY'],
  ['MUNOZ', 'HENRIQUEZ', 'ISIDORA'],
  ['MUNOZ', 'MUNOZ', 'CLAUDIA'],
  ['MUNOZ', 'PARADA', 'JOCELYN'],
  ['MUNOZ', 'SOTO', 'SOLANGE'],
  ['NAVARRO', 'ASTUDILLO', 'EDUARDO'],
  ['NORIN', 'PENA', 'ANA'],
  ['OLEA', 'GONZALEZ', 'MARISOL'],
  ['ONATE', 'HERNANDEZ', 'MIRCIA'],
  ['ORELLANA', 'HERNANDEZ', 'LISSETTE'],
  ['ORELLANA', 'ROMERO', 'JOSELYN'],
  ['ORTIZ', 'ARAYA', 'MARIA'],
  ['OSORIO', 'PEREZ', 'PAOLO'],
  ['PACHECO', 'OYARCE', 'ANGELA'],
  ['PAILLALEF', 'CORNEJO', 'KATHERINE'],
  ['PAILLALEF', 'PAILLALEF', 'LUZ'],
  ['PALMA', 'DROGUETT', 'MADELAINE'],
  ['PALMA', 'VIDAL', 'MARCELA'],
  ['PAVEZ', 'GUERRA', 'TAMARA'],
  ['PENA', 'LEIVA', 'MARIA'],
  ['PENA', 'REYES', 'CECILIA'],
  ['PEREZ', 'MENESES', 'ALEJANDRA'],
  ['PEREZ', 'NAHUEL', 'ALEJANDRA'],
  ['PEREZ', 'RAMIREZ', 'EPIFANIA'],
  ['PINO', 'JIMENEZ', 'MILENA'],
  ['PINO', 'VILLEGAS', 'GINETTE'],
  ['POBLETE', 'JARA', 'JANET'],
  ['POBLETE', 'MORALES', 'MARIBEL'],
  ['PUNO', 'VIEDMA', 'MARGARITA'],
  ['QUEZADA', 'RIQUELME', 'NAYARETH'],
  ['QUEMEN', 'MORENO', 'CAROLINA'],
  ['QUINTANA', 'QUEZADA', 'JOCELYN'],
  ['QUIROZ', 'CABEZAS', 'MARJORIE'],
  ['QUIROZ', 'JAQUE', 'GLORIA'],
  ['QUISPE', 'CALCINA', 'PRIMITIVA'],
  ['RAIPAN', 'FLORES', 'NATHALY'],
  ['RAMIREZ', 'CHAMORRO', 'JACQUELINE'],
  ['RAMOS', 'ROJAS', 'KARINA'],
  ['REYES', 'DIAZ', 'MARCELA'],
  ['REYES', 'GONZALEZ', 'CATALINA'],
  ['RIASCOS', 'QUINONES', 'MILEDY'],
  ['RICOUZ', 'BAHAMONDES', 'CAROLINA'],
  ['RIVERA', 'JARA', 'BARBARA'],
  ['ROBLES', 'RIVEROS', 'MALVINA'],
  ['ROCHA', 'LOPEZ', 'CLAUDIA'],
  ['RODRIGUEZ', 'QUINTANA', 'CATALINA'],
  ['ROJAS', 'LOLOY', 'CARMEN'],
  ['ROZAS', 'VIDAL', 'BERNARDITA'],
  ['SALAZAR', 'RODRIGUEZ', 'EDITH'],
  ['SALDIAS', 'MERINO', 'INGRID'],
  ['SALINAS', 'CORTES', 'TAMARA'],
  ['SANCHEZ', 'ORTEGA', 'NANCY'],
  ['SANTACRUZ', 'YMA', 'MARIA'],
  ['SANTIBANEZ', 'BANADOS', 'JULIA'],
  ['SARAMA', 'CUERO', 'KATHERINE'],
  ['SEPULVEDA', 'MONTECINO', 'VIVIANA'],
  ['SERRANO', 'ACEVEDO', 'DIANE'],
  ['SERRANO', 'ACEVEDO', 'EMILY'],
  ['SERRANO', 'FERRAT', 'MARIA'],
  ['SILVA', 'LEBUL', 'ORIETA'],
  ['SILVA', 'ORELLANA', 'CLARA'],
  ['SILVA', 'VELOSO', 'ELIZABETH'],
  ['SOTELO', 'PAREDES', 'MARIANA'],
  ['SUAREZ', 'FICA', 'INGRID'],
  ['TAPARA', 'CHOQUEPATA', 'HORTENCIA'],
  ['TAPIA', 'TAPIA', 'SABRINA'],
  ['TOBAR', 'SILVA', 'FRANCESCA'],
  ['TREJO', 'RUBILAR', 'IVONNE'],
  ['UBILLA', 'ROSAS', 'YERKO'],
  ['URETA', 'CANCINO', 'ESTEFANY'],
  ['URRA', 'AHUMADA', 'TAMARA'],
  ['VALDES', 'MOLINA', 'MYRIAM'],
  ['VALDIVIA', 'ARENAS', 'ISABEL'],
  ['VALENZUELA', 'GARCIA', 'NICOLE'],
  ['VARGAS', 'CONOMAN', 'SUSY'],
  ['VEGA', 'PINTO', 'VICTORIA'],
  ['VELASCO', 'GOMEZ', 'JOCELYN'],
  ['VIDAL', 'JARA', 'MARIA'],
  ['VILCHES', 'BRAVO', 'BIANCA'],
  ['VILCHES', 'SALAS', 'FRANCISCA'],
  ['VILCHES', 'SANTANA', 'MARCELA'],
  ['VILLAGRA', 'PINA', 'MIRIAM'],
  ['VILLANUEVA', 'CANALES', 'GRACE'],
  ['VILLARROEL', 'PEREZ', 'SYLVIA'],
  ['VILLEGAS', 'BECERRA', 'JOCELYN'],
  ['ZAMBRANO', 'NICOLITA', 'KAREN'],
  ['ZAPATA', 'GARRIDO', 'MARIA'],
  ['ARAYA', 'CARDENAS', 'SILVANA'],
  ['ASTUDILLO', 'FERNANDEZ', 'PABLO'],
  ['BECERRA', 'CHAPARRO', 'GABRIELA'],
  ['CARDENAS', 'CONTRERAS', 'MAGALY'],
  ['GODOY', 'FIGUEROA', 'DANIA'],
  ['GONZALEZ', 'CARRASCO', 'FLOR'],
  ['INDO', 'GALAZ', 'NATALIE'],
  ['JIMENEZ', 'JIMENEZ', 'LESLY'],
  ['LOPEZ', 'VILLEGAS', 'GENESIS'],
  ['LUCO', 'FUENZALIDA', 'CHARLOT'],
  ['MOREIRA', 'CASTRO', 'LINDA'],
  ['NORIN', 'PENA', 'JOCELYN'],
  ['PALMA', 'RAVELLO', 'YOVANNA'],
  ['PINERO', 'ALARCON', 'XIMENA'],
  ['PONCE', 'QUEZADA', 'VIOLETA'],
  ['RIOS', 'MELO', 'ROSA'],
  ['RIVAS', 'MATUS', 'MACARENA'],
  ['SALDIAS', 'MERINO', 'ANA'],
  ['TRANGOL', 'PEREZ', 'MARISOL'],
  ['ULE', 'ALCAMAN', 'BEATRIZ'],
  ['VALENZUELA', 'MUNOZ', 'VALERIA'],
  ['VARGAS', 'MORALES', 'JOCELYN'],
  ['VASQUEZ', 'TAPIA', 'NAYARETH']
] as const;

const filasPorPagina = 20;

export default function Seccion9_3_N_B_Sub_Fam2016_Julio() {
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
    <section aria-label="Nómina de Subsidio Familiar de julio 2016" className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h4 className="text-base font-semibold text-slate-900">Subsidio Familiar · Julio 2016</h4>
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
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">Decreto Exento N° 1485 de 01.06.16</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">01.07.2016</td>
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
