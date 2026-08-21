export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
};

export type BlogCategory = {
  id: string;
  title: string;
  description: string;
  badges: string[];
  buttonText: string;
  posts: BlogPost[];
};

export const categories: BlogCategory[] = [
  {
    id: "fundamentos",
    title: "Guía completa de conciliación en Colombia",
    description:
      "Aprende cómo funciona la conciliación extrajudicial y cuándo utilizarla.",
    badges: ["Guía práctica", "Inicio rápido"],
    buttonText: "Leer guía →",
    posts: [
      // ===== ARTÍCULOS ORIGINALES =====
      {
        title:
          "¿Qué es la conciliación en Colombia y para qué sirve realmente?",
        slug: "que-es-la-conciliacion",
        excerpt:
          "Conoce cómo funciona la conciliación extrajudicial y cuándo puede ayudarte a evitar procesos judiciales largos.",
      },

      {
        title: "¿Cuándo conviene conciliar? Casos donde sí funciona",
        slug: "cuando-conviene-conciliar",
        excerpt:
          "Descubre en qué situaciones la conciliación puede resolver conflictos familiares, civiles y laborales.",
      },

      {
        title: "¿Qué asuntos se pueden conciliar en Colombia? (Lista completa)",
        slug: "que-asuntos-se-pueden-conciliar",
        excerpt:
          "Consulta qué conflictos pueden resolverse mediante conciliación en Colombia y cuáles requieren demanda.",
      },

      {
        title: "Conciliación paso a paso en Colombia: guía completa",
        slug: "paso-a-paso-del-tramite",
        excerpt:
          "Aprende cómo iniciar una conciliación, qué documentos necesitas y cómo se desarrolla la audiencia.",
      },

      {
        title: "Documentos clave para una conciliación exitosa",
        slug: "documentos-y-evidencia-util",
        excerpt:
          "Conoce qué pruebas y documentos pueden fortalecer tu posición durante la conciliación.",
      },

      {
        title: "¿Cómo es una audiencia de conciliación? Presencial vs virtual",
        slug: "como-es-la-audiencia",
        excerpt:
          "Descubre cómo funcionan las audiencias de conciliación y sus diferencias.",
      },

      {
        title: "Acta de conciliación: efectos legales y cómo hacerla cumplir",
        slug: "acta-de-conciliacion-efectos-y-cumplimiento",
        excerpt:
          "Entiende el valor jurídico del acta y qué hacer en caso de incumplimiento.",
      },

      {
        title: "Errores comunes en conciliación (y cómo evitarlos)",
        slug: "errores-comunes-y-como-evitarlos",
        excerpt:
          "Evita errores frecuentes que pueden afectar el resultado de una conciliación.",
      },

      {
        title: "Preguntas frecuentes sobre conciliación en Colombia",
        slug: "preguntas-frecuentes",
        excerpt:
          "Resolvemos las dudas más comunes sobre conciliación y resolución de conflictos.",
      },

      // ===== NUEVOS =====

      {
        title: "Diferencia entre conciliación y demanda judicial",
        slug: "diferencia-conciliacion-y-demanda",
        excerpt:
          "Conoce cuándo conviene acudir a conciliación y cuándo es necesario iniciar un proceso judicial.",
      },

      {
        title: "Ventajas de la conciliación frente a un proceso judicial",
        slug: "ventajas-de-la-conciliacion",
        excerpt:
          "Ahorro de tiempo, dinero y desgaste emocional al resolver conflictos mediante conciliación.",
      },

      {
        title: "¿Qué pasa si una persona no asiste a la conciliación?",
        slug: "inasistencia-a-conciliacion",
        excerpt:
          "Consecuencias legales y alternativas cuando una de las partes no comparece.",
      },
    ],
  },

  {
    id: "modelos",
    title: "Modelos, actas y fundamentos legales de conciliación",
    description:
      "Encuentra ejemplos prácticos, modelos jurídicos y documentos utilizados en procesos de conciliación extrajudicial en Colombia.",
    badges: ["Modelos legales", "Ejemplos reales"],
    buttonText: "Ver modelo →",
    posts: [
      // ===== ORIGINALES =====

      {
        title: "Modelo de acta de conciliación en Colombia (ejemplo listo)",
        slug: "modelo-acta-conciliacion",
        excerpt:
          "Accede a un ejemplo práctico de acta de conciliación listo para usar.",
      },

      {
        title: "Actas de conciliación: ejemplos reales y recomendaciones",
        slug: "actas-ejemplos",
        excerpt:
          "Conoce ejemplos prácticos de actas utilizadas en conciliaciones reales.",
      },

      {
        title:
          "Acta de conciliación entre compañeros permanentes (modelo y guía)",
        slug: "acta-companeros-permanentes",
        excerpt:
          "Modelo práctico para acuerdos entre compañeros permanentes en Colombia.",
      },

      {
        title:
          "Acta de conciliación de alimentos (ejemplo + Artículo 411 C.C.)",
        slug: "acta-alimentos",
        excerpt:
          "Ejemplo de conciliación de alimentos y explicación legal aplicable.",
      },

      {
        title: "Acta de no conciliación laboral: modelo y cuándo usarla",
        slug: "acta-no-conciliacion-laboral",
        excerpt:
          "Aprende cuándo se utiliza una constancia de no conciliación laboral.",
      },

      {
        title: "Carta de conciliación en Colombia: modelo y cómo redactarla",
        slug: "carta-conciliacion",
        excerpt:
          "Guía práctica para redactar correctamente una solicitud de conciliación.",
      },

      {
        title: "Acta de conciliación civil: ejemplo práctico",
        slug: "acta-civil",
        excerpt:
          "Modelo de conciliación civil para conflictos económicos y contractuales.",
      },

      {
        title:
          "Acta de conciliación familiar: modelo y recomendaciones legales",
        slug: "documento-familia",
        excerpt:
          "Ejemplo práctico de conciliación familiar para alimentos y custodia.",
      },

      {
        title: "Amigable composición en Colombia: qué es y cómo funciona",
        slug: "amigable-composicion",
        excerpt:
          "Conoce cómo funciona este mecanismo alternativo de solución de conflictos.",
      },

      {
        title:
          "Audiencia de conciliación en Colombia: cómo funciona paso a paso",
        slug: "audiencia",
        excerpt: "Todo lo que debes saber sobre una audiencia de conciliación.",
      },

      {
        title: "Poder para audiencia de conciliación: modelo listo para usar",
        slug: "poder",
        excerpt:
          "Modelo práctico de poder para representación en audiencia de conciliación.",
      },

      {
        title: "Citación a audiencia de conciliación: modelo y ejemplo",
        slug: "citacion",
        excerpt:
          "Ejemplo práctico de citación para audiencia de conciliación en Colombia.",
      },
    ],
  },

  {
    id: "familiar",
    title: "Conciliación familiar",
    description: "Alimentos, custodia, visitas y acuerdos familiares.",
    badges: ["Familia", "Alimentos"],
    buttonText: "Leer artículo →",
    posts: [
      {
        title: "Conciliación de cuota alimentaria en Colombia",
        slug: "conciliacion-cuota-alimentaria",
        excerpt: "Cómo fijar una cuota alimentaria.",
      },
      {
        title: "Aumento de cuota alimentaria por conciliación",
        slug: "aumento-cuota-alimentaria",
        excerpt: "Cuándo puede solicitarse.",
      },
      {
        title: "Disminución de cuota alimentaria",
        slug: "disminucion-cuota-alimentaria",
        excerpt: "Requisitos para modificar acuerdos.",
      },
      {
        title: "Custodia y cuidado personal mediante conciliación",
        slug: "custodia-por-conciliacion",
        excerpt: "Acuerdos sobre hijos menores.",
      },
      {
        title: "Régimen de visitas por conciliación",
        slug: "regimen-visitas-conciliacion",
        excerpt: "Cómo establecer visitas legalmente.",
      },
      {
        title: "Conciliación entre padres separados",
        slug: "conciliacion-padres-separados",
        excerpt: "Soluciones para conflictos familiares.",
      },
      {
        title: "Gastos extraordinarios de hijos",
        slug: "gastos-extraordinarios-hijos",
        excerpt: "Cómo conciliarlos adecuadamente.",
      },
      {
        title: "Liquidación de sociedad patrimonial",
        slug: "liquidacion-sociedad-patrimonial",
        excerpt: "Proceso conciliatorio entre compañeros.",
      },
      {
        title: "Separación de bienes mediante conciliación",
        slug: "separacion-bienes-conciliacion",
        excerpt: "Alternativa rápida y legal.",
      },
      {
        title: "Acuerdos familiares extrajudiciales",
        slug: "acuerdos-familiares",
        excerpt: "Beneficios de llegar a acuerdos.",
      },
      {
        title: "Incumplimiento de conciliación de alimentos",
        slug: "incumplimiento-alimentos",
        excerpt: "Qué hacer cuando no se cumple.",
      },
      {
        title: "Conciliación familiar virtual",
        slug: "conciliacion-familiar-virtual",
        excerpt: "Cómo funciona la modalidad online.",
      },
    ],
  },

  {
    id: "civil",
    title: "Conciliación civil",
    description: "Conflictos contractuales, deudas y obligaciones.",
    badges: ["Civil", "Contratos"],
    buttonText: "Leer artículo →",
    posts: [
      {
        title: "Conciliación por incumplimiento de contrato",
        slug: "incumplimiento-contrato",
        excerpt: "Alternativas para resolver disputas contractuales.",
      },
      {
        title: "Conciliación por deudas entre particulares",
        slug: "deudas-entre-particulares",
        excerpt: "Cómo recuperar dinero sin demandar.",
      },
      {
        title: "Cobro de dinero mediante conciliación",
        slug: "cobro-dinero-conciliacion",
        excerpt: "Herramienta efectiva para recuperar pagos.",
      },
      {
        title: "Conciliación por daños y perjuicios",
        slug: "danos-y-perjuicios",
        excerpt: "Acuerdos por afectaciones económicas.",
      },
      {
        title: "Conflictos entre vecinos",
        slug: "conflictos-entre-vecinos",
        excerpt: "Soluciones rápidas mediante conciliación.",
      },
      {
        title: "Conciliación por arrendamiento",
        slug: "conciliacion-arrendamiento",
        excerpt: "Resolver disputas entre arrendador y arrendatario.",
      },
      {
        title: "Entrega de inmueble por conciliación",
        slug: "entrega-inmueble",
        excerpt: "Acuerdos para restitución voluntaria.",
      },
      {
        title: "Restitución de dinero por incumplimiento",
        slug: "restitucion-dinero",
        excerpt: "Recuperación de recursos mediante acuerdos.",
      },
      {
        title: "Acuerdos civiles extrajudiciales",
        slug: "acuerdos-civiles",
        excerpt: "Alternativa al proceso judicial.",
      },
      {
        title: "Conciliación para conflictos comerciales",
        slug: "conflictos-comerciales",
        excerpt: "Resolución de disputas empresariales.",
      },
      {
        title: "Conciliación en compraventa de bienes",
        slug: "compraventa-bienes",
        excerpt: "Problemas frecuentes y soluciones.",
      },
      {
        title: "Prescripción y conciliación en Colombia",
        slug: "prescripcion-y-conciliacion",
        excerpt: "Aspectos legales importantes.",
      },
    ],
  },

  {
    id: "laboral",
    title: "Conciliación laboral",
    description:
      "Acuerdos laborales, liquidaciones y reclamaciones entre empleadores y trabajadores.",
    badges: ["Laboral", "Trabajo"],
    buttonText: "Leer artículo →",
    posts: [
      {
        title: "¿Qué es la conciliación laboral en Colombia?",
        slug: "que-es-la-conciliacion-laboral",
        excerpt:
          "Conoce cómo funciona la conciliación laboral y cuándo utilizarla.",
      },
      {
        title: "Acuerdo laboral ante centro de conciliación",
        slug: "acuerdo-laboral-centro-conciliacion",
        excerpt: "Formaliza acuerdos entre empleador y trabajador.",
      },
      {
        title: "Terminación de contrato por mutuo acuerdo",
        slug: "terminacion-contrato-mutuo-acuerdo",
        excerpt: "Alternativa legal para finalizar una relación laboral.",
      },
      {
        title: "Pago de liquidación mediante conciliación",
        slug: "pago-liquidacion-conciliacion",
        excerpt: "Cómo resolver diferencias sobre liquidaciones laborales.",
      },
      {
        title: "Reclamación salarial mediante conciliación",
        slug: "reclamacion-salarial-conciliacion",
        excerpt: "Recupera salarios pendientes sin necesidad de demanda.",
      },
      {
        title: "Conciliación por despido injustificado",
        slug: "despido-injustificado-conciliacion",
        excerpt: "Opciones para llegar a acuerdos entre las partes.",
      },
      {
        title: "¿Qué pasa si la empresa no asiste a la conciliación?",
        slug: "empresa-no-asiste-conciliacion",
        excerpt: "Consecuencias de la inasistencia del empleador.",
      },
      {
        title: "Acta de no conciliación laboral",
        slug: "acta-no-conciliacion-laboral-guia",
        excerpt: "Cuándo se emite y para qué sirve.",
      },
      {
        title: "Conciliación laboral vs demanda laboral",
        slug: "conciliacion-laboral-vs-demanda",
        excerpt: "Diferencias entre ambas alternativas.",
      },
      {
        title: "Conciliación con empleadas domésticas",
        slug: "conciliacion-empleadas-domesticas",
        excerpt: "Resolución de conflictos laborales en el hogar.",
      },
      {
        title: "Conciliación sobre prestaciones sociales",
        slug: "prestaciones-sociales-conciliacion",
        excerpt: "Cómo reclamar y acordar pagos pendientes.",
      },
      {
        title: "Casos donde la conciliación laboral sí funciona",
        slug: "casos-conciliacion-laboral",
        excerpt: "Ejemplos prácticos de acuerdos exitosos.",
      },
    ],
  },

  {
    id: "inmobiliario",
    title: "Arrendamientos e inmuebles",
    description:
      "Conflictos inmobiliarios y de arrendamiento resueltos mediante conciliación.",
    badges: ["Inmuebles", "Arriendos"],
    buttonText: "Leer artículo →",
    posts: [
      {
        title: "Conciliación por incumplimiento de contrato de arriendo",
        slug: "incumplimiento-contrato-arriendo",
        excerpt: "Soluciones para conflictos de arrendamiento.",
      },
      {
        title: "Desocupación de inmueble mediante conciliación",
        slug: "desocupacion-inmueble-conciliacion",
        excerpt: "Alternativa rápida para recuperar un inmueble.",
      },
      {
        title: "Acuerdos de pago para cánones vencidos",
        slug: "acuerdo-pago-canones-vencidos",
        excerpt: "Cómo negociar deudas de arrendamiento.",
      },
      {
        title: "Conflictos entre arrendador y arrendatario",
        slug: "conflictos-arrendador-arrendatario",
        excerpt: "Problemas frecuentes y soluciones.",
      },
      {
        title: "Entrega anticipada de inmueble arrendado",
        slug: "entrega-anticipada-inmueble",
        excerpt: "Qué hacer cuando el contrato termina antes.",
      },
      {
        title: "Daños en inmueble arrendado",
        slug: "danos-inmueble-arrendado",
        excerpt: "Responsabilidades y conciliación.",
      },
      {
        title: "Arrendamiento comercial y conciliación",
        slug: "arrendamiento-comercial-conciliacion",
        excerpt: "Resolución de conflictos en locales comerciales.",
      },
      {
        title: "Conciliación en propiedad horizontal",
        slug: "propiedad-horizontal-conciliacion",
        excerpt: "Solución de conflictos en conjuntos residenciales.",
      },
      {
        title: "Conflictos entre vecinos en propiedad horizontal",
        slug: "vecinos-propiedad-horizontal",
        excerpt: "Cómo resolver disputas de convivencia.",
      },
      {
        title: "Cobro de administración mediante conciliación",
        slug: "cobro-administracion-conciliacion",
        excerpt: "Alternativa para recuperar cuotas pendientes.",
      },
      {
        title: "Uso de zonas comunes y conciliación",
        slug: "zonas-comunes-conciliacion",
        excerpt: "Acuerdos para resolver conflictos comunitarios.",
      },
      {
        title: "Conciliación inmobiliaria en Colombia",
        slug: "conciliacion-inmobiliaria-colombia",
        excerpt: "Guía completa sobre conflictos inmobiliarios.",
      },
    ],
  },

  {
    id: "normatividad",
    title: "Normatividad y legislación",
    description:
      "Conoce las leyes y requisitos aplicables a la conciliación en Colombia.",
    badges: ["Normativa", "Legal"],
    buttonText: "Leer artículo →",
    posts: [
      {
        title: "Ley de conciliación en Colombia",
        slug: "ley-de-conciliacion-colombia",
        excerpt: "Marco normativo de la conciliación extrajudicial.",
      },
      {
        title: "Ley 2220 de 2022 explicada",
        slug: "ley-2220-de-2022",
        excerpt: "Aspectos más importantes de la nueva regulación.",
      },
      {
        title: "Requisitos legales para conciliar",
        slug: "requisitos-legales-conciliacion",
        excerpt: "Condiciones necesarias para iniciar una conciliación.",
      },
      {
        title: "¿Qué valor jurídico tiene un acta de conciliación?",
        slug: "valor-juridico-acta-conciliacion",
        excerpt: "Conoce la fuerza legal de este documento.",
      },
      {
        title: "Título ejecutivo y conciliación",
        slug: "titulo-ejecutivo-conciliacion",
        excerpt: "Cómo puede ejecutarse un acuerdo conciliatorio.",
      },
      {
        title: "Centros de conciliación autorizados",
        slug: "centros-conciliacion-autorizados",
        excerpt: "Quiénes pueden prestar este servicio legalmente.",
      },
      {
        title: "Funciones de los conciliadores",
        slug: "funciones-de-los-conciliadores",
        excerpt: "Rol y responsabilidades dentro del proceso.",
      },
      {
        title: "Conciliadores en derecho y en equidad",
        slug: "conciliadores-derecho-equidad",
        excerpt: "Principales diferencias entre ambos perfiles.",
      },
      {
        title: "Mecanismos alternativos de solución de conflictos",
        slug: "mecanismos-alternativos-conflictos",
        excerpt: "Conoce las alternativas a los procesos judiciales.",
      },
      {
        title: "Amigable composición en Colombia",
        slug: "amigable-composicion",
        excerpt: "Qué es y cuándo puede utilizarse.",
      },
      {
        title: "Arbitraje vs conciliación",
        slug: "arbitraje-vs-conciliacion",
        excerpt: "Diferencias entre estos mecanismos jurídicos.",
      },
      {
        title: "Marco legal de la conciliación extrajudicial",
        slug: "marco-legal-conciliacion",
        excerpt: "Normas que regulan este mecanismo en Colombia.",
      },
    ],
  },

  {
    id: "local",
    title: "Conciliación en Bogotá y Colombia",
    description:
      "Costos, requisitos y servicios de conciliación en Bogotá y el país.",
    badges: ["Bogotá", "Colombia"],
    buttonText: "Leer artículo →",
    posts: [
      {
        title: "Conciliación en Bogotá: guía completa",
        slug: "conciliacion-en-bogota",
        excerpt: "Todo lo que debes saber para conciliar en Bogotá.",
      },
      {
        title: "Centros de conciliación en Bogotá",
        slug: "centros-de-conciliacion-bogota",
        excerpt: "Dónde acudir para iniciar un proceso conciliatorio.",
      },
      {
        title: "¿Cuánto cuesta una conciliación en Bogotá?",
        slug: "cuanto-cuesta-conciliacion-bogota",
        excerpt: "Tarifas y factores que influyen en el costo.",
      },
      {
        title: "Conciliación virtual en Bogotá",
        slug: "conciliacion-virtual-bogota",
        excerpt: "Cómo funciona la modalidad virtual.",
      },
      {
        title: "Conciliación familiar en Bogotá",
        slug: "conciliacion-familiar-bogota",
        excerpt: "Servicios y casos más frecuentes.",
      },
      {
        title: "Conciliación civil en Bogotá",
        slug: "conciliacion-civil-bogota",
        excerpt: "Resolución de conflictos civiles en la capital.",
      },
      {
        title: "Conciliación laboral en Bogotá",
        slug: "conciliacion-laboral-bogota",
        excerpt: "Alternativas para resolver conflictos laborales.",
      },
      {
        title: "Requisitos para conciliar en Bogotá",
        slug: "requisitos-conciliar-bogota",
        excerpt: "Documentación y pasos necesarios.",
      },
      {
        title: "Conciliación extrajudicial en Colombia",
        slug: "conciliacion-extrajudicial-colombia",
        excerpt: "Panorama general del mecanismo en el país.",
      },
      {
        title: "Cómo solicitar una conciliación en Colombia",
        slug: "como-solicitar-conciliacion-colombia",
        excerpt: "Guía práctica para iniciar el trámite.",
      },
      {
        title: "Conciliación online en Colombia",
        slug: "conciliacion-online-colombia",
        excerpt: "Ventajas y requisitos de la modalidad virtual.",
      },
      {
        title: "Centros de conciliación autorizados en Colombia",
        slug: "centros-conciliacion-colombia",
        excerpt: "Directorio y requisitos legales.",
      },
    ],
  },

  {
    id: "conflictos-cotidianos",
    title: "Conflictos cotidianos y soluciones mediante conciliación",
    description:
      "Guías prácticas para resolver problemas frecuentes entre particulares, vecinos, familiares y otras situaciones de la vida diaria mediante mecanismos de conciliación.",
    badges: ["Casos frecuentes", "Soluciones prácticas"],
    buttonText: "Leer artículo →",
    posts: [
      {
        title:
          "Problemas por ruido entre vecinos: ¿se pueden resolver mediante conciliación?",
        slug: "ruido-entre-vecinos-conciliacion",
        excerpt:
          "Conoce qué alternativas existen para resolver conflictos por ruido entre vecinos mediante acuerdos y conciliación.",
      },
      {
        title:
          "Conflictos por mascotas entre vecinos y propiedad horizontal: cómo llegar a un acuerdo",
        slug: "conflictos-mascotas-vecinos-conciliacion",
        excerpt:
          "Ladridos, daños y problemas de convivencia: descubre cómo buscar una solución mediante conciliación.",
      },
      {
        title:
          "Problemas por parqueaderos entre vecinos: alternativas antes de iniciar un proceso legal",
        slug: "problemas-parqueaderos-vecinos-conciliacion",
        excerpt:
          "Conoce opciones para resolver disputas por parqueaderos, espacios compartidos y convivencia.",
      },
      {
        title:
          "¿Me pueden cobrar un dinero que nunca acordamos? Cómo resolver disputas económicas entre particulares",
        slug: "disputas-economicas-entre-particulares",
        excerpt:
          "Aprende cómo abordar desacuerdos económicos y buscar una solución antes de iniciar un proceso judicial.",
      },
      {
        title:
          "Préstamos de dinero entre familiares o amigos: ¿qué hacer cuando no devuelven el dinero?",
        slug: "prestamo-dinero-familiares-amigos-conciliacion",
        excerpt:
          "Descubre qué opciones existen cuando prestaste dinero a una persona cercana y no cumple con el pago.",
      },
      {
        title:
          "Incumplimiento de acuerdos verbales: ¿se puede intentar una conciliación?",
        slug: "incumplimiento-acuerdo-verbal-conciliacion",
        excerpt:
          "Conoce alternativas para resolver conflictos derivados de acuerdos realizados sin un contrato escrito.",
      },
      {
        title:
          "Daños causados por un vecino: cómo buscar una solución sin llegar inmediatamente a un juicio",
        slug: "danos-causados-por-vecino-conciliacion",
        excerpt:
          "Filtraciones, daños materiales y otros conflictos pueden resolverse mediante acuerdos entre las partes.",
      },
      {
        title:
          "Conflictos entre familiares por dinero, bienes o responsabilidades: ¿cuándo sirve la conciliación?",
        slug: "conflictos-familiares-dinero-bienes-conciliacion",
        excerpt:
          "Explora alternativas para resolver desacuerdos familiares relacionados con bienes, dinero y responsabilidades.",
      },
      {
        title:
          "¿Qué hacer cuando una persona no cumple un acuerdo firmado entre particulares?",
        slug: "incumplimiento-acuerdo-entre-particulares",
        excerpt:
          "Conoce qué alternativas pueden existir cuando una de las partes incumple un compromiso previamente acordado.",
      },
      {
        title:
          "Problemas por servicios mal prestados: ¿se pueden resolver mediante conciliación?",
        slug: "servicio-mal-prestado-conciliacion",
        excerpt:
          "Descubre cómo abordar conflictos relacionados con servicios, reparaciones y trabajos que generaron desacuerdos.",
      },
      {
        title:
          "Conflictos por obras, remodelaciones y daños entre vecinos: opciones para llegar a un acuerdo",
        slug: "obras-remodelaciones-danos-vecinos-conciliacion",
        excerpt:
          "Conoce cómo buscar soluciones frente a daños, molestias y desacuerdos ocasionados por obras o remodelaciones.",
      },
      {
        title:
          "¿Vale la pena intentar una conciliación antes de demandar? Casos y situaciones frecuentes",
        slug: "casos-conciliacion-antes-de-demandar",
        excerpt:
          "Descubre en qué situaciones cotidianas la conciliación puede ser una alternativa antes de acudir a un proceso judicial.",
      },
    ],
  },
];

export const allPosts = categories.flatMap((category) => category.posts);

export const getPostBySlug = (slug: string) =>
  allPosts.find((post) => post.slug === slug);
