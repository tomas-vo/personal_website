/* ==========================================================
   Traducciones
   ========================================================== */
const rlTranslations = {
  es: {
    back_link: "&larr; Volver al portafolio",
    visit_site_link: "Visitar Repuestolandia.cl &rarr;",
    hero_eyebrow: "Caso · Automatización e-commerce · Brasil → Chile",
    hero_title: "Una tienda de repuestos en piloto automático",
    hero_lede: "Repuestolandia es mi tienda Shopify de repuestos importados desde Brasil. La manejo solo, así que construí un sistema con n8n, la API de Gemini y un servidor Linux de 5 USD al mes que hace el trabajo pesado por mí: catálogo, traducción, filtros, precio con envío incluido, colecciones, metacampos, stock y registro de cada venta. El único paso manual es correr el scraper; desde ahí, todo lo hace n8n.",
    hero_by_role: "Fundador, Repuestolandia SpA",

    stat1_label: "al mes de infraestructura",
    stat2_label: "n8n en Docker sobre Linux",
    stat3_label: "productos scrapeados",
    stat4_label: "workflows en producción",

    nav_problema: "El problema",
    nav_ejemplo: "Antes y después",
    nav_arquitectura: "Arquitectura",
    nav_workflows: "Workflows",
    nav_shopify: "Shopify: etiquetas y metacampos",
    nav_aprendizajes: "Aprendizajes",

    quick_eyebrow: "En 30 segundos",
    quick_subheading: "¿Qué hacen las automatizaciones que construí?",
    quick1_h: "Arma el catálogo solo.",
    quick1_p: "Toma los productos de Brasil, los traduce, calcula cuánto cuesta traerlos y los publica en la tienda con su precio final.",
    quick2_h: "Evita vender lo que no hay.",
    quick2_p: "Cada vez que alguien compra, revisa si el proveedor todavía tiene el producto. Si se agotó, lo saca de la venta.",
    quick3_h: "Lleva la cuenta de cada venta.",
    quick3_p: "Registra automáticamente cada pedido con sus costos y deja una planilla para seguir el paquete hasta que llega al cliente.",

    h2_problema: "El problema",
    p_problema: "En Chile, conseguir ciertos repuestos es difícil: piezas específicas para Jeep o Fiat que no están en las tiendas locales o que cuestan mucho más de lo razonable. En Brasil, en cambio, esas mismas piezas se consiguen con facilidad, porque muchos de estos modelos se fabrican y se venden allá. <strong>Ahí vi la oportunidad de Repuestolandia</strong>: traer directamente desde Brasil los repuestos difíciles de encontrar.",
    p_problema_2: "<strong>El desafío era la operación</strong>. Cada producto viene en portugués, con precio en reales y sin peso ni medidas, y el stock del proveedor cambia sin aviso. Publicar y mantener miles de productos a mano habría requerido un equipo que no tenía. Por eso decidí automatizar todo lo posible desde el primer día, para que un negocio de una sola persona pudiera operar como uno mucho más grande, con costos mínimos.",

    h2_ejemplo: "Antes y después de un producto",
    sub_ejemplo: "Así llega un producto desde la web del proveedor (una fila <button class='gloss' type='button' data-term='scraping' aria-expanded='false' aria-controls='glossPopover'>scrapeada</button> en Google Sheets) y así queda publicado en Shopify después de pasar por <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button> y <button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button>.",
    ba_lbl_before: "Fila scrapeada · Google Sheets",
    ba_lbl_after: "Producto en Shopify",
    dl_titulo: "Título",
    dl_estado_ia: "Estado IA",
    dl_peso: "Peso",
    dl_flete: "Flete int.",
    dl_sku: "<button class='gloss' type='button' data-term='sku' aria-expanded='false' aria-controls='glossPopover'>SKU</button>",
    dl_etiquetas: "Etiquetas",
    dl_metacampos: "<button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>Metacampos</button>",
    dd_peso_val: "2,4 kg real → 4,32 kg cobrable (×1,8)",
    dd_flete_val: "R$133 + R$58,7 × 4,32 = R$386,58",
    dd_size_label: "tamaño",
    dd_size_val: "Media",
    dd_img_val: "de la ficha",
    demo_note: "Ejemplo ilustrativo: los campos y cálculos son los que genera el flujo; el producto y su peso son de muestra.",

    h2_arquitectura: "Arquitectura",
    sub_arquitectura: "Esta es la foto completa antes de entrar en detalle. Todo corre en un solo servidor: Google Sheets funciona como base de datos intermedia (<button class='gloss' type='button' data-term='staging' aria-expanded='false' aria-controls='glossPopover'>staging</button>) y como libro de ventas, <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button> orquesta cada paso, y Shopify guarda los datos estructurados de cada producto.",
    arch_aria: "Flujo: proveedores brasileños a Google Sheets, a n8n con Gemini, a Shopify; cada venta dispara un chequeo de stock contra el proveedor",
    box1_small: "Fuente · manual",
    box1_body: "Webs de proveedores en Brasil<br>(script en Chrome)",
    box2_small: "Staging",
    box2_body: "Google Sheets<br>(catálogo crudo)",
    box3_small: "Orquestación",
    box3_body: "n8n + <button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button> de <button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button>",
    box4_small: "Venta",
    box4_body: "Shopify<br>(etiquetas + metacampos)",
    box5_small: "Contabilidad",
    box5_body: "Sheets de ventas<br>(márgenes + seguimiento)",
    loop_text: "Y cada venta en Shopify dispara dos <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflows</button> al mismo tiempo: uno hace el chequeo de stock en la web del proveedor, y el otro registra la venta con su desglose de costos en Google Sheets.",
    host_text: "Ubuntu en <button class='gloss' type='button' data-term='vps' aria-expanded='false' aria-controls='glossPopover'>VPS</button> · <button class='gloss' type='button' data-term='docker' aria-expanded='false' aria-controls='glossPopover'>Docker</button> Compose · proxy reverso con HTTPS (Let's Encrypt) · subdominio propio vía Cloudflare DNS",

    h2_workflows: "Los tres workflows",
    sub_workflows: "Ahora, paso a paso: qué hace cada <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflow</button>, qué problema resuelve y cómo lo construí.",

    wf1_title: "1 · Catálogo: Google Sheets → IA → Shopify",
    wf1_tag: "~4.000 productos · traducción · filtros · envío · precio",
    wf1_c1: "Inicio manual",
    wf1_c2: "Leer Sheets",
    wf1_c3: "Code: diccionario PT→ES",
    wf1_c4: "Gemini (JSON)",
    wf1_c5: "Code: parser",
    wf1_c6: "If: ¿rechazado?",
    wf1_c7: "Code: costo landed",
    wf1_c8: "Filter",
    wf1_c9: "Sheets \"salida\"",
    wf1_c10: "Wait",
    wf1_c11: "POST producto",
    wf1_caption: "Product Catalog Automation, en <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button>. Los nodos desactivados los uso para pruebas: limitar a pocos productos, probar filtros y pausas.",
    shot_hint: "desliza →",
    wf1_pt1: "Crear miles de productos a mano no era viable, así que el proceso parte con un <strong>script de JavaScript</strong> que corro en la consola de Chrome. Con <code>fetch</code> + <code>DOMParser</code> recorre todas las páginas del buscador del proveedor y extrae <strong>título, precio en BRL, link e imagen</strong>, que pego en Google Sheets. Es el <em>único paso manual</em> de todo el sistema. Lo hice en dos fases (primero el listado, después cada ficha, leyendo la imagen desde <code>og:image</code>) porque en el listado <em>se mezclaban las imágenes de productos vecinos</em>.",
    wf1_pt2: "Pero ese dato crudo todavía no sirve para vender en Chile: el título viene en portugués y no dice cuánto pesa ni para qué auto es. Ahí entra <strong><button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button></strong>, que devuelve un <strong><button class='gloss' type='button' data-term='json' aria-expanded='false' aria-controls='glossPopover'>JSON</button> estructurado</strong> con el título traducido con terminología chilena, una descripción HTML, el número <button class='gloss' type='button' data-term='oem' aria-expanded='false' aria-controls='glossPopover'>OEM</button>, las marcas compatibles, el peso estimado, el tamaño y un estado. Antes de llegar a Gemini, un nodo Code aplica <em>mi propio diccionario</em> de unos 100 términos técnicos PT→ES, para que una misma pieza se llame igual en todo el catálogo.",
    mba_before_label: "Antes · dato <button class='gloss' type='button' data-term='scraping' aria-expanded='false' aria-controls='glossPopover'>scrapeado</button>",
    mba_before_1: "Título en portugués, sin traducir",
    mba_before_2: "Precio en reales (BRL)",
    mba_before_3: "Sin peso, tamaño ni clasificación",
    mba_after_label: "Después · JSON de Gemini",
    mba_after_1: "Título traducido (terminología chilena)",
    mba_after_2: "Descripción HTML + número OEM",
    mba_after_3: "Marcas compatibles detectadas",
    mba_after_4: "Peso y tamaño estimados",
    mba_after_5: "Estado: aprobado, rechazado o cotizar",
    wf1_pt3: "No todo se puede o conviene traer por correo: <em>motores completos, cajas de cambio, piezas usadas o fluidos inflamables</em>. Gemini clasifica cada producto por peso y riesgo, pero <strong>a veces fallaba</strong>: se colaron motores completos con precios de millones. Por eso agregué un <strong>respaldo <button class='gloss' type='button' data-term='deterministic' aria-expanded='false' aria-controls='glossPopover'>determinístico</button></strong>: una lista de palabras prohibidas en portugués que fuerza el rechazo sin depender del criterio de la IA.",
    wf1_pt4: "Con eso, cada producto aprobado recibe su precio. La idea es que cubra <strong>todo lo que cuesta traer la pieza</strong>, así que primero calculo el <em><button class='gloss' type='button' data-term='landedcost' aria-expanded='false' aria-controls='glossPopover'>costo landed</button></em>: (costo BRL + flete interno) × tipo de cambio + flete internacional volumétrico + <button class='gloss' type='button' data-term='customsprovision' aria-expanded='false' aria-controls='glossPopover'>provisión aduanera</button> (IVA + arancel sobre el <button class='gloss' type='button' data-term='cif' aria-expanded='false' aria-controls='glossPopover'>CIF</button>). Sobre ese costo aplico mi margen.",
    tbl1_h1: "Regla", tbl1_h2: "Criterio", tbl1_h3: "Resultado",
    tbl1_r1_regla: "Riesgo",
    tbl1_r1_criterio: "Motores completos, cajas de cambio, piezas usadas, fluidos inflamables",
    tbl1_r2_regla: "Peso / tamaño",
    tbl1_r2_criterio: "&gt; 25 kg o &gt; 120 cm",
    tbl1_r2_resultado: "borrador con etiqueta",
    tbl1_r3_regla: "Resto",
    tbl1_r3_criterio: "Piezas permitidas",
    tbl1_r3_resultado: "con flete por <button class='gloss' type='button' data-term='factork' aria-expanded='false' aria-controls='glossPopover'>Factor K</button>",
    h4_envio: "Estimación del envío por producto",
    p_envio: "El envío es lo más difícil de estimar: los proveedores no publican peso ni medidas, y Correios cobra por peso volumétrico, es decir, también por el espacio que ocupa la caja. Por eso Gemini estima el <strong>peso real</strong> y clasifica el tamaño de la pieza, y con eso calculo el <strong><button class='gloss' type='button' data-term='billableweight' aria-expanded='false' aria-controls='glossPopover'>peso cobrable</button></strong> y el flete internacional:",
    formula1_l1: "peso cobrable = peso real × Factor K",
    formula1_l2: "flete = R$133 fijo por paquete + R$58,7 × kg cobrable",
    factor_k_title: "¿Qué es el Factor K?",
    factor_k_body: "Es un multiplicador según el tamaño de la pieza: las piezas grandes ocupan más espacio en el envío aunque pesen poco, así que se les cobra como si pesaran más. Es la forma de aproximar el peso volumétrico sin medir cada paquete.",
    tbl2_h1: "Tamaño", tbl2_h2: "Ejemplos", tbl2_h3: "Factor K",
    tbl2_r1_tamano: "Grande", tbl2_r1_ejemplos: "Parrillas, parachoques, tableros",
    tbl2_r2_tamano: "Medio", tbl2_r2_ejemplos: "Focos, mangueras, espejos",
    tbl2_r3_tamano: "Pequeño", tbl2_r3_ejemplos: "Depósitos, sensores, pernos",
    tbl2_r1_k: "× 3,5", tbl2_r2_k: "× 1,8", tbl2_r3_k: "× 1,1",
    note_envio: "Calibré la fórmula con boletas reales de envíos por Correios. Además, a propósito, aplico el costo fijo completo a cada producto, aunque en la práctica varios viajan en un mismo paquete. Es un criterio conservador: prefiero sobrestimar el envío, y al consolidar paquetes el margen real sale mejor.",
    calc_title: "Prueba tu propio cálculo",
    calc_sub: "Usa la fórmula real del workflow: cambia el peso y el tamaño y mira cómo se calculan el peso cobrable y el flete.",
    calc_weight_label: "Peso real (kg)",
    calc_size_label: "Tamaño",
    calc_result_weight: "Peso cobrable",
    calc_result_freight: "Flete internacional (Brasil → Chile)",
    calc_footnote: "Esto es solo el flete internacional — no incluye el valor del producto ni impuestos. Conversión a CLP/USD referencial, no en tiempo real.",

    wf2_title: "2 · Chequeo de stock con proveedores",
    wf2_tag: "se dispara con cada venta",
    wf2_c1: "Pedido creado",
    wf2_c2: "Split por producto",
    wf2_c3: "Leer metacampo link_brasil",
    wf2_c4: "GET ficha en Brasil",
    wf2_c5: "¿\"Esgotado\"?",
    wf2_c6: "Token OAuth fresco",
    wf2_c7: "Obtener variante",
    wf2_c8: "Inventario = 0",
    wf2_caption: "Inventory Validation, en n8n",
    wf2_pt1: "Vendo <strong>bajo pedido</strong>: no tengo stock propio, y el proveedor puede quedarse sin una pieza sin avisarme. Sin un control, podría <em>vender algo que no puedo entregar</em>.",
    wf2_pt2: "Para evitarlo, un <strong>Shopify Trigger</strong> activa este workflow con cada pedido creado. El workflow separa el pedido por producto (Split Out), lee el <button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>metacampo</button> <code>link_brasil</code> y hace un GET a la ficha del proveedor buscando la palabra <em>\"Esgotado\"</em> (agotado). Si la encuentra, pide un <button class='gloss' type='button' data-term='oauthtoken' aria-expanded='false' aria-controls='glossPopover'>token OAuth</button> nuevo, obtiene la variante y <strong>deja el inventario en 0</strong> en Shopify. Un detalle que aprendí en el camino: la búsqueda corta el HTML antes de la sección <em>\"Produtos relacionados\"</em>, porque los productos relacionados agotados daban falsas alarmas.",

    wf3_title: "3 · Registro de ventas y seguimiento → Google Sheets",
    wf3_c3: "Leer metacampos de costo",
    wf3_c4: "Code: desglose y márgenes",
    wf3_c5: "Code: formato de fila",
    wf3_c6: "Sheets: fila de venta",
    wf3_caption: "Registro de Ventas Google Sheets, en n8n",
    wf3_pt1: "En cada venta necesito saber <strong>cuánto costó realmente traer el producto</strong>, cuánto gané y en qué parte del viaje va el paquete. Hacerlo a mano en cada pedido es lento y <em>propenso a errores</em>.",
    wf3_pt2: "Por eso, con cada pedido, el workflow separa los productos, lee los metacampos de costo con la <button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button> de Shopify y, con dos nodos Code, arma el desglose y le da formato a la fila. Después la agrega (append) al libro de contabilidad en Google Sheets, con el producto, el link del proveedor, los datos del comprador y el <strong>desglose completo del precio</strong>. Lo clave: <em>no recalcula nada</em>, porque usa los costos que el workflow 1 ya guardó en cada producto.",

    h4_desglose: "Desglose de cada venta",
    tbl3_h1: "Columna", tbl3_h2: "De dónde sale",
    tbl3_r1: "Costo del producto (BRL y CLP) y tipo de cambio", tbl3_r1b: "Metacampos del producto",
    tbl3_r2: "Envío Brasil → casa del socio", tbl3_r2b: "Flete interno del proveedor",
    tbl3_r3: "Envío Brasil → Chile", tbl3_r3b: "Flete volumétrico (Factor K)",
    tbl3_r4: "Provisión aduanera", tbl3_r4b: "IVA + arancel sobre el CIF",
    tbl3_r5: "Precio de venta", tbl3_r5b: "Pedido de Shopify",
    tbl3_r7: "Nombre, correo y teléfono del cliente", tbl3_r7b: "Pedido de Shopify",

    h4_seguimiento: "Seguimiento del pedido",
    p_seguimiento: "La misma fila sirve para <strong>seguir el pedido</strong>. El workflow la crea al momento de la venta, y yo completo la fecha de cada tramo a medida que avanza el paquete:",
    track1_b: "Venta", track1_s: "automático",
    track2_b: "Compra en Brasil", track2_s: "fecha y hora",
    track3_b: "Llega a casa del socio", track3_s: "fecha",
    track4_b: "Socio lo envía a Chile", track4_s: "Correios",
    track5_b: "Llega a mi casa", track5_s: "aduana lista",
    track6_b: "Enviado al cliente", track6_s: "entrega final",

    h2_shopify: "Shopify como base de datos: etiquetas y metacampos",
    sub_shopify: "No solo publico productos. Cada ficha queda con datos estructurados que ordenan la tienda sola y alimentan a los otros <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflows</button>.",
    h4_etiquetas: "Etiquetas → colecciones automáticas",
    p_etiquetas: "Quería que alguien con un Jeep encontrara rápido las piezas para su auto. Por eso <button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button> extrae del título las marcas compatibles como un arreglo (solo las que aparecen, nunca las inventa) y cada marca se guarda como etiqueta. Así, las colecciones inteligentes de Shopify (Jeep, Fiat, RAM…) se llenan solas, y una pieza compatible con varias marcas aparece en todas sus colecciones.",
    note_etiquetas: "La etiqueta <code>COTIZAR</code> marca las piezas grandes o pesadas. En vez de sacarlas del catálogo, se publican como borrador con un aviso para cotizar el envío caso a caso.",
    h4_variante: "Variante lista para operar",
    p_variante: "El producto se crea con un HTTP Request directo a la <button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button> REST de Shopify, no con el nodo nativo de <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button>, porque ese nodo no permitía controlar la variante completa (precio, peso y <button class='gloss' type='button' data-term='sku' aria-expanded='false' aria-controls='glossPopover'>SKU</button>). Así cada producto queda listo para vender:",
    pv1: "<strong>SKU</strong> = número <button class='gloss' type='button' data-term='oem' aria-expanded='false' aria-controls='glossPopover'>OEM</button>, que también va en el título para mejorar la búsqueda, porque muchos clientes buscan la pieza por ese número.",
    pv2: "<strong>Peso</strong> real en kg.",
    pv3: "<strong>Inventario</strong> gestionado por Shopify. Como vendo bajo pedido, cada producto parte disponible, y el workflow 2 lo baja a 0 si el proveedor se queda sin stock.",
    h4_meta: "Metacampos por producto",
    p_meta: "Los <button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>metacampos</button> son campos extra que Shopify guarda en cada producto, como notas pegadas a la ficha. Cada producto se publica con siete: el link del proveedor y todo el desglose de costos. Definí cada uno en Shopify para que se vean en el panel de administración.",
    tbl4_h1: "Metacampo", tbl4_h2: "Tipo", tbl4_h3: "Para qué sirve",
    tbl4_r1: "Link a la ficha del proveedor. Lo usa el workflow 2 para revisar el stock.",
    tbl4_r2: "Precio de compra en reales",
    tbl4_r3: "Tipo de cambio BRL→CLP usado al calcular",
    tbl4_r4: "Costo del producto convertido a pesos",
    tbl4_r5: "Flete Brasil→Chile según <button class='gloss' type='button' data-term='billableweight' aria-expanded='false' aria-controls='glossPopover'>peso cobrable</button>",
    tbl4_r6: "Provisión de IVA + arancel",
    tbl4_r7: "Costo total puesto en Chile. Con él, el workflow 3 calcula los márgenes de cada venta.",
    tipo_texto: "Texto",
    note_meta: "Con esto, cada pedido ya trae su desglose de costos sin volver a calcular nada: el workflow 2 usa el link para revisar el stock, y el workflow 3 pasa los costos directo a la contabilidad.",

    h2_aprendizajes: "Lo que aprendí resolviendo bugs",
    lesson1_h: "Emparejamiento de items en n8n",
    lesson1_p: "Al principio, el <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflow</button> mezclaba datos: un producto quedaba con el precio o la imagen de otro. La causa era que referenciaba los datos entre nodos por índice, y cuando un Filter o un If descartaba items, los índices dejaban de coincidir. Lo resolví usando el rastreo de items de <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button> (<code>.item</code>), que sigue a cada producto a través de toda la cadena.",
    lesson2_h: "La IA no basta sola",
    lesson2_p: "<button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button> clasifica bien casi siempre, pero en e-commerce un solo error cuesta caro, como publicar un motor completo a precio de repuesto. Aprendí a no depender solo de la IA: toda decisión crítica tiene además una regla <button class='gloss' type='button' data-term='deterministic' aria-expanded='false' aria-controls='glossPopover'>determinística</button> de respaldo.",
    lesson3_h: "Permisos, tokens y metacampos",
    lesson3_p: "Conectarme a la <button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button> de Shopify me enseñó cosas que no salen en los tutoriales: la app necesita scopes específicos (como <code>write_inventory</code>) para modificar el inventario, conviene pedir un token nuevo en cada ejecución para que no expire, hay que agregar pausas entre llamadas para no superar el <button class='gloss' type='button' data-term='ratelimit' aria-expanded='false' aria-controls='glossPopover'>rate limit</button>, y los <button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>metacampos</button> solo aparecen en el panel si antes creas su definición.",
    lesson4_h: "Costo mínimo, control máximo",
    lesson4_p: "Elegí n8n <button class='gloss' type='button' data-term='selfhosted' aria-expanded='false' aria-controls='glossPopover'>self-hosted</button> en vez de un SaaS que cobra por ejecución. Con un servidor de 5 USD al mes puedo correr flujos ilimitados, y lo único que pago por uso es la API de Gemini.",
    more_coming_lead: "Planeo seguir haciendo crecer este proyecto — vienen muchas cosas más.",
    more_coming_punch: "Esto es solo el comienzo.",
    contact_title: "Conversemos",
    contact_text: "Si quieres conversar sobre una oportunidad, un proyecto o simplemente saludar, escríbeme.",
    contact_copied: "¡Copiado!",
    gloss_close: "Cerrar",

    footer_stack: "Stack: n8n · Docker · Ubuntu · Google Sheets API · Gemini API · Shopify Admin API · JavaScript · Cloudflare DNS"
  },

  en: {
    back_link: "&larr; Back to portfolio",
    visit_site_link: "Visit Repuestolandia.cl &rarr;",
    hero_eyebrow: "Case study · E-commerce automation · Brazil → Chile",
    hero_title: "An auto-parts store on autopilot",
    hero_lede: "Repuestolandia is my Shopify store for auto parts imported from Brazil. I run it alone, so I built a system with n8n, the Gemini API, and a $5/month Linux server that does the heavy lifting for me: catalog, translation, filters, shipping-inclusive pricing, collections, metafields, stock, and a record of every sale. The only manual step is running the scraper; n8n handles everything from there.",
    hero_by_role: "Founder, Repuestolandia SpA",

    stat1_label: "infrastructure, per month",
    stat2_label: "n8n in Docker on Linux",
    stat3_label: "products scraped",
    stat4_label: "workflows in production",

    nav_problema: "The problem",
    nav_ejemplo: "Before and after",
    nav_arquitectura: "Architecture",
    nav_workflows: "Workflows",
    nav_shopify: "Shopify: tags and metafields",
    nav_aprendizajes: "Lessons learned",

    quick_eyebrow: "In 30 seconds",
    quick_subheading: "What do the automations I built actually do?",
    quick1_h: "Builds the catalog on its own.",
    quick1_p: "Takes the products from Brazil, translates them, works out what it costs to bring them in, and publishes them in the store with a final price.",
    quick2_h: "Never sells what's out of stock.",
    quick2_p: "Every time someone buys, it checks whether the supplier still has the product. If it's sold out, it pulls it from sale.",
    quick3_h: "Tracks every sale.",
    quick3_p: "Automatically logs each order with its costs and keeps a sheet to follow the package until it reaches the customer.",

    h2_problema: "The problem",
    p_problema: "In Chile, finding certain auto parts is hard: specific pieces for Jeep or Fiat that aren't carried by local stores, or that cost far more than they should. In Brazil, on the other hand, those same parts are easy to find, because many of these models are manufactured and sold there. <strong>That's where I saw the opportunity for Repuestolandia</strong>: importing directly from Brazil the parts that are hard to find in Chile.",
    p_problema_2: "<strong>The real challenge was operations</strong>. Every product arrived in Portuguese, priced in reais, with no weight or dimensions, and the supplier's stock could change without notice. Publishing and maintaining thousands of listings by hand would have required a team I didn't have. So I decided to automate as much as possible from day one, so a one-person business could operate like a much bigger one, at minimal cost.",

    h2_ejemplo: "A product, before and after",
    sub_ejemplo: "This is how a product arrives from the supplier's website (a <button class='gloss' type='button' data-term='scraping' aria-expanded='false' aria-controls='glossPopover'>scraped</button> row in Google Sheets), and this is how it ends up published on Shopify after going through <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button> and <button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button>.",
    ba_lbl_before: "Scraped row · Google Sheets",
    ba_lbl_after: "Product on Shopify",
    dl_titulo: "Title",
    dl_estado_ia: "AI status",
    dl_peso: "Weight",
    dl_flete: "Int'l freight",
    dl_sku: "<button class='gloss' type='button' data-term='sku' aria-expanded='false' aria-controls='glossPopover'>SKU</button>",
    dl_etiquetas: "Tags",
    dl_metacampos: "<button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>Metafields</button>",
    dd_peso_val: "2.4 kg actual → 4.32 kg billable (×1.8)",
    dd_flete_val: "R$133 + R$58.7 × 4.32 = R$386.58",
    dd_size_label: "size",
    dd_size_val: "Medium",
    dd_img_val: "from the listing",
    demo_note: "Illustrative example: the fields and calculations are the ones the flow actually generates; the product and its weight are a sample.",

    h2_arquitectura: "Architecture",
    sub_arquitectura: "This is the full picture before getting into detail. Everything runs on a single server: Google Sheets works as the intermediate database (<button class='gloss' type='button' data-term='staging' aria-expanded='false' aria-controls='glossPopover'>staging</button>) and as the sales ledger, <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button> orchestrates every step, and Shopify stores the structured data for each product.",
    arch_aria: "Flow: Brazilian suppliers to Google Sheets, to n8n with Gemini, to Shopify; every sale triggers a stock check against the supplier",
    box1_small: "Source · manual",
    box1_body: "Brazilian supplier websites<br>(Chrome script)",
    box2_small: "Staging",
    box2_body: "Google Sheets<br>(raw catalog)",
    box3_small: "Orchestration",
    box3_body: "n8n + <button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button> <button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button>",
    box4_small: "Sale",
    box4_body: "Shopify<br>(tags + metafields)",
    box5_small: "Accounting",
    box5_body: "Sales sheet<br>(margins + tracking)",
    loop_text: "And every sale on Shopify triggers two <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflows</button> at the same time: one checks stock on the supplier's website, and the other logs the sale with its cost breakdown in Google Sheets.",
    host_text: "Ubuntu on a <button class='gloss' type='button' data-term='vps' aria-expanded='false' aria-controls='glossPopover'>VPS</button> · <button class='gloss' type='button' data-term='docker' aria-expanded='false' aria-controls='glossPopover'>Docker</button> Compose · reverse proxy with HTTPS (Let's Encrypt) · own subdomain via Cloudflare DNS",

    h2_workflows: "The three workflows",
    sub_workflows: "Now, step by step: what each <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflow</button> does, what problem it solves, and how I built it.",

    wf1_title: "1 · Catalog: Google Sheets → AI → Shopify",
    wf1_tag: "~4,000 products · translation · filters · shipping · pricing",
    wf1_c1: "Manual start",
    wf1_c2: "Read Sheets",
    wf1_c3: "Code: PT→ES dictionary",
    wf1_c4: "Gemini (JSON)",
    wf1_c5: "Code: parser",
    wf1_c6: "If: rejected?",
    wf1_c7: "Code: landed cost",
    wf1_c8: "Filter",
    wf1_c9: "Sheets \"output\"",
    wf1_c10: "Wait",
    wf1_c11: "POST product",
    wf1_caption: "Product Catalog Automation, in <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button>. The disabled nodes are ones I use for testing: capping the run to a few products, trying out filters and pauses.",
    shot_hint: "scroll →",
    wf1_pt1: "Creating thousands of products by hand wasn't viable, so the process starts with a <strong>JavaScript script</strong> that I run in the Chrome console. Using <code>fetch</code> + <code>DOMParser</code>, it walks every page of the supplier's search results and extracts <strong>title, price in BRL, link, and image</strong>, which I paste into Google Sheets. It's the <em>only manual step</em> in the whole system. I did it in two passes (first the listing, then each product page, reading the image from <code>og:image</code>) because the listing <em>mixed up neighboring products' images</em>.",
    wf1_pt2: "But that raw data still isn't ready to sell in Chile: the title arrives in Portuguese and doesn't say how much the part weighs or which car it fits. That's where <strong><button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button></strong> comes in, returning a <strong>structured <button class='gloss' type='button' data-term='json' aria-expanded='false' aria-controls='glossPopover'>JSON</button></strong> with the title translated using Chilean terminology, an HTML description, the <button class='gloss' type='button' data-term='oem' aria-expanded='false' aria-controls='glossPopover'>OEM</button> number, compatible brands, estimated weight, size, and a status. Before it reaches Gemini, a Code node applies <em>my own dictionary</em> of about 100 technical PT→ES terms, so the same part is always called the same thing across the whole catalog.",
    mba_before_label: "Before · <button class='gloss' type='button' data-term='scraping' aria-expanded='false' aria-controls='glossPopover'>scraped</button> data",
    mba_before_1: "Title in Portuguese, untranslated",
    mba_before_2: "Price in reais (BRL)",
    mba_before_3: "No weight, size, or classification",
    mba_after_label: "After · Gemini's JSON",
    mba_after_1: "Translated title (Chilean terminology)",
    mba_after_2: "HTML description + OEM number",
    mba_after_3: "Compatible brands detected",
    mba_after_4: "Estimated weight and size",
    mba_after_5: "Status: approved, rejected, or quote-needed",
    wf1_pt3: "Not everything can or should be shipped by mail: <em>whole engines, transmissions, used parts, or flammable fluids</em>. Gemini classifies every product by weight and risk, but <strong>it sometimes got it wrong</strong>: whole engines slipped through priced in the millions. So I added a <strong><button class='gloss' type='button' data-term='deterministic' aria-expanded='false' aria-controls='glossPopover'>deterministic</button> backstop</strong>: a list of banned Portuguese words that forces a rejection without relying on the AI's judgment.",
    wf1_pt4: "With that, every approved product gets its price. The idea is for it to cover <strong>everything it costs to bring the part in</strong>, so I first calculate the <em><button class='gloss' type='button' data-term='landedcost' aria-expanded='false' aria-controls='glossPopover'>landed cost</button></em>: (BRL cost + domestic freight) × exchange rate + volumetric international freight + <button class='gloss' type='button' data-term='customsprovision' aria-expanded='false' aria-controls='glossPopover'>customs provision</button> (VAT + duty on the <button class='gloss' type='button' data-term='cif' aria-expanded='false' aria-controls='glossPopover'>CIF</button> value). I apply my margin on top of that cost.",
    tbl1_h1: "Rule", tbl1_h2: "Criterion", tbl1_h3: "Result",
    tbl1_r1_regla: "Risk",
    tbl1_r1_criterio: "Whole engines, gearboxes, used parts, flammable fluids",
    tbl1_r2_regla: "Weight / size",
    tbl1_r2_criterio: "&gt; 25 kg or &gt; 120 cm",
    tbl1_r2_resultado: "draft with tag",
    tbl1_r3_regla: "Everything else",
    tbl1_r3_criterio: "Allowed parts",
    tbl1_r3_resultado: "with <button class='gloss' type='button' data-term='factork' aria-expanded='false' aria-controls='glossPopover'>Factor K</button> freight",
    h4_envio: "Estimating shipping per product",
    p_envio: "Shipping is the hardest thing to estimate: suppliers don't publish weight or dimensions, and Correios charges by volumetric weight — meaning it also charges for the space the box takes up. So Gemini estimates the <strong>actual weight</strong> and classifies the part's size, and from that I calculate the <strong><button class='gloss' type='button' data-term='billableweight' aria-expanded='false' aria-controls='glossPopover'>billable weight</button></strong> and the international freight:",
    formula1_l1: "billable weight = actual weight × Factor K",
    formula1_l2: "freight = R$133 flat per package + R$58.7 × billable kg",
    factor_k_title: "What's Factor K?",
    factor_k_body: "It's a multiplier based on the part's size: large parts take up more room in the shipment even if they don't weigh much, so they get charged as if they weighed more. It's a way to approximate volumetric (dimensional) weight without measuring every package.",
    tbl2_h1: "Size", tbl2_h2: "Examples", tbl2_h3: "Factor K",
    tbl2_r1_tamano: "Large", tbl2_r1_ejemplos: "Grilles, bumpers, dashboards",
    tbl2_r2_tamano: "Medium", tbl2_r2_ejemplos: "Headlights, hoses, mirrors",
    tbl2_r3_tamano: "Small", tbl2_r3_ejemplos: "Reservoirs, sensors, bolts",
    tbl2_r1_k: "× 3.5", tbl2_r2_k: "× 1.8", tbl2_r3_k: "× 1.1",
    note_envio: "I calibrated the formula against real Correios shipping receipts. Also, on purpose, I apply the full flat cost to every product, even though in practice several travel in the same package. It's a conservative call: I'd rather overestimate the shipping, and once packages get consolidated, the real margin comes out better.",
    calc_title: "Try your own calculation",
    calc_sub: "Use the workflow's real formula: change the weight and size and watch how the billable weight and freight get calculated.",
    calc_weight_label: "Actual weight (kg)",
    calc_size_label: "Size",
    calc_result_weight: "Billable weight",
    calc_result_freight: "International freight (Brazil → Chile)",
    calc_footnote: "This is just the international freight — it doesn't include the product's value or duties. CLP/USD conversion is for reference only, not real-time.",

    wf2_title: "2 · Supplier stock check",
    wf2_tag: "triggered by every sale",
    wf2_c1: "Order created",
    wf2_c2: "Split by product",
    wf2_c3: "Read link_brasil metafield",
    wf2_c4: "GET product page in Brazil",
    wf2_c5: "\"Esgotado\"?",
    wf2_c6: "Fresh OAuth token",
    wf2_c7: "Get variant",
    wf2_c8: "Inventory = 0",
    wf2_caption: "Inventory Validation, in n8n",
    wf2_pt1: "I sell <strong>to order</strong>: I don't hold my own stock, and the supplier can run out of a part without telling me. Without a check, I could <em>sell something I can't deliver</em>.",
    wf2_pt2: "To avoid that, a <strong>Shopify Trigger</strong> fires this workflow on every order created. The workflow splits the order by product (Split Out), reads the <code>link_brasil</code> <button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>metafield</button>, and does a GET on the supplier's listing looking for the word <em>\"Esgotado\"</em> (out of stock). If it finds it, it requests a fresh <button class='gloss' type='button' data-term='oauthtoken' aria-expanded='false' aria-controls='glossPopover'>OAuth token</button>, fetches the variant, and <strong>sets the inventory to 0</strong> on Shopify. A detail I learned along the way: the search cuts off the HTML before the <em>\"Produtos relacionados\"</em> section, because out-of-stock related products were causing false alarms.",

    wf3_title: "3 · Sales logging and tracking → Google Sheets",
    wf3_c3: "Read cost metafields",
    wf3_c4: "Code: breakdown and margins",
    wf3_c5: "Code: row formatting",
    wf3_c6: "Sheets: sale row",
    wf3_caption: "Sales Log to Google Sheets, in n8n",
    wf3_pt1: "For every sale I need to know <strong>what it actually cost to bring the product in</strong>, how much I made, and where the package is on its journey. Doing it by hand for every order is slow and <em>error-prone</em>.",
    wf3_pt2: "So, with every order, the workflow splits the products, reads the cost metafields through the Shopify <button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button>, and, with two Code nodes, builds the breakdown and formats the row. It then appends it to the accounting ledger in Google Sheets, with the product, the supplier's link, the buyer's details, and the <strong>full price breakdown</strong>. The key thing: <em>it recalculates nothing</em>, because it uses the costs workflow 1 already saved on each product.",

    h4_desglose: "Breaking down each sale",
    tbl3_h1: "Column", tbl3_h2: "Where it comes from",
    tbl3_r1: "Product cost (BRL and CLP) and exchange rate", tbl3_r1b: "Product metafields",
    tbl3_r2: "Shipping Brazil → partner's house", tbl3_r2b: "Supplier's domestic freight",
    tbl3_r3: "Shipping Brazil → Chile", tbl3_r3b: "Volumetric freight (Factor K)",
    tbl3_r4: "Customs provision", tbl3_r4b: "VAT + duty on the CIF value",
    tbl3_r5: "Sale price", tbl3_r5b: "Shopify order",
    tbl3_r7: "Customer name, email, and phone", tbl3_r7b: "Shopify order",

    h4_seguimiento: "Order tracking",
    p_seguimiento: "The same row is also used to <strong>track the order</strong>. The workflow creates it at the moment of sale, and I fill in the date for each leg as the package moves along:",
    track1_b: "Sale", track1_s: "automatic",
    track2_b: "Purchased in Brazil", track2_s: "date and time",
    track3_b: "Arrives at partner's house", track3_s: "date",
    track4_b: "Partner ships to Chile", track4_s: "Correios",
    track5_b: "Arrives at my place", track5_s: "customs cleared",
    track6_b: "Shipped to customer", track6_s: "final delivery",

    h2_shopify: "Shopify as a database: tags and metafields",
    sub_shopify: "I don't just publish products. Every listing carries structured data that keeps the store organized on its own and feeds the other <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflows</button>.",
    h4_etiquetas: "Tags → automatic collections",
    p_etiquetas: "I wanted someone with a Jeep to quickly find the parts for their car. So <button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button> extracts the compatible brands from the title as an array (only the ones that appear, never invented), and each brand gets saved as a tag. That way, Shopify's smart collections (Jeep, Fiat, RAM…) fill themselves in, and a part compatible with several brands shows up in all of its collections.",
    note_etiquetas: "The <code>COTIZAR</code> tag marks large or heavy parts. Instead of leaving them out of the catalog, they get published as a draft with a note to quote the shipping case by case.",
    h4_variante: "A variant ready to operate",
    p_variante: "The product is created with an HTTP Request directly to Shopify's REST <button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button>, not with <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button>'s native node, because that node didn't allow full control over the variant (price, weight, and <button class='gloss' type='button' data-term='sku' aria-expanded='false' aria-controls='glossPopover'>SKU</button>). This is what makes each product ready to sell:",
    pv1: "<strong>SKU</strong> = the <button class='gloss' type='button' data-term='oem' aria-expanded='false' aria-controls='glossPopover'>OEM</button> number, which also goes in the title to improve search, because many customers look up the part by that number.",
    pv2: "<strong>Weight</strong> in real kg.",
    pv3: "<strong>Inventory</strong> managed by Shopify. Since I sell to order, every product starts out available, and workflow 2 drops it to 0 if the supplier runs out of stock.",
    h4_meta: "Metafields per product",
    p_meta: "<button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>Metafields</button> are extra fields Shopify stores on each product, like notes attached to the listing. Every product is published with seven: the supplier's link and the full cost breakdown. I defined each one in Shopify so they show up in the admin panel.",
    tbl4_h1: "Metafield", tbl4_h2: "Type", tbl4_h3: "What it's for",
    tbl4_r1: "Link to the supplier's product page. Workflow 2 uses it to check stock.",
    tbl4_r2: "Purchase price in reais",
    tbl4_r3: "BRL→CLP exchange rate used in the calculation",
    tbl4_r4: "Product cost converted to Chilean pesos",
    tbl4_r5: "Brazil→Chile freight based on <button class='gloss' type='button' data-term='billableweight' aria-expanded='false' aria-controls='glossPopover'>billable weight</button>",
    tbl4_r6: "VAT + duty provision",
    tbl4_r7: "Total landed cost in Chile. Workflow 3 uses it to calculate each sale's margins.",
    tipo_texto: "Text",
    note_meta: "With this, every order already carries its cost breakdown without recalculating anything: workflow 2 uses the link to check stock, and workflow 3 sends the costs straight to accounting.",

    h2_aprendizajes: "What I learned fixing bugs",
    lesson1_h: "Matching items across nodes in n8n",
    lesson1_p: "At first, the <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflow</button> mixed up data: a product would end up with another one's price or image. The cause was that it referenced data between nodes by index, and whenever a Filter or an If dropped items, the indexes stopped matching up. I fixed it by using <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button>'s item-linking (<code>.item</code>), which follows each product through the entire chain.",
    lesson2_h: "AI alone isn't enough",
    lesson2_p: "<button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button> classifies well almost all the time, but in e-commerce a single mistake gets expensive, like publishing a whole engine at the price of a spare part. I learned not to rely on the AI alone: every critical decision also has a <button class='gloss' type='button' data-term='deterministic' aria-expanded='false' aria-controls='glossPopover'>deterministic</button> backup rule.",
    lesson3_h: "Permissions, tokens, and metafields",
    lesson3_p: "Connecting to the Shopify <button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button> taught me things that don't show up in tutorials: the app needs specific scopes (like <code>write_inventory</code>) to modify inventory, it's worth requesting a fresh token on every run so it doesn't expire, you have to add pauses between calls to avoid exceeding the <button class='gloss' type='button' data-term='ratelimit' aria-expanded='false' aria-controls='glossPopover'>rate limit</button>, and <button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>metafields</button> only show up in the admin panel once you've created their definition beforehand.",
    lesson4_h: "Minimum cost, maximum control",
    lesson4_p: "I chose <button class='gloss' type='button' data-term='selfhosted' aria-expanded='false' aria-controls='glossPopover'>self-hosted</button> n8n instead of a SaaS that charges per execution. With a $5/month server I can run unlimited flows, and the only thing I pay for by usage is the Gemini API.",
    more_coming_lead: "I plan to keep growing this project — there's a lot more coming.",
    more_coming_punch: "This is just the beginning.",
    contact_title: "Let's talk",
    contact_text: "If you'd like to discuss an opportunity, a project, or just say hi, reach out.",
    contact_copied: "Copied!",
    gloss_close: "Close",

    footer_stack: "Stack: n8n · Docker · Ubuntu · Google Sheets API · Gemini API · Shopify Admin API · JavaScript · Cloudflare DNS"
  },

  pt: {
    back_link: "&larr; Voltar ao portfólio",
    visit_site_link: "Visitar Repuestolandia.cl &rarr;",
    hero_eyebrow: "Caso · Automação de e-commerce · Brasil → Chile",
    hero_title: "Uma loja de autopeças no piloto automático",
    hero_lede: "Repuestolandia é minha loja Shopify de autopeças importadas do Brasil. Eu cuido dela sozinho, então construí um sistema com n8n, a API do Gemini e um servidor Linux de 5 USD por mês que faz o trabalho pesado por mim: catálogo, tradução, filtros, preço com frete incluído, coleções, metacampos, estoque e registro de cada venda. O único passo manual é rodar o scraper; a partir daí, o n8n faz tudo.",
    hero_by_role: "Fundador, Repuestolandia SpA",

    stat1_label: "de infraestrutura por mês",
    stat2_label: "n8n em Docker no Linux",
    stat3_label: "produtos raspados",
    stat4_label: "workflows em produção",

    nav_problema: "O problema",
    nav_ejemplo: "Antes e depois",
    nav_arquitectura: "Arquitetura",
    nav_workflows: "Workflows",
    nav_shopify: "Shopify: tags e metacampos",
    nav_aprendizajes: "Aprendizados",

    quick_eyebrow: "Em 30 segundos",
    quick_subheading: "O que fazem as automações que eu construí?",
    quick1_h: "Monta o catálogo sozinho.",
    quick1_p: "Pega os produtos do Brasil, traduz, calcula quanto custa trazê-los e os publica na loja com o preço final.",
    quick2_h: "Evita vender o que não tem.",
    quick2_p: "Toda vez que alguém compra, verifica se o fornecedor ainda tem o produto. Se acabou, ele sai da venda.",
    quick3_h: "Registra cada venda.",
    quick3_p: "Registra automaticamente cada pedido com seus custos e mantém uma planilha para acompanhar o pacote até chegar ao cliente.",

    h2_problema: "O problema",
    p_problema: "No Chile, é difícil encontrar certas autopeças: peças específicas para Jeep ou Fiat que não estão nas lojas locais ou que custam muito mais do que deveriam. No Brasil, por outro lado, essas mesmas peças são fáceis de encontrar, porque muitos desses modelos são fabricados e vendidos lá. <strong>Foi aí que vi a oportunidade da Repuestolandia</strong>: importar diretamente do Brasil as peças difíceis de encontrar.",
    p_problema_2: "<strong>O desafio era a operação</strong>. Cada produto chega em português, com preço em reais e sem peso nem medidas, e o estoque do fornecedor muda sem aviso. Publicar e manter milhares de produtos manualmente exigiria uma equipe que eu não tinha. Por isso decidi automatizar o máximo possível desde o primeiro dia, para que um negócio de uma só pessoa pudesse operar como um muito maior, com custos mínimos.",

    h2_ejemplo: "Um produto, antes e depois",
    sub_ejemplo: "Assim chega um produto do site do fornecedor (uma linha <button class='gloss' type='button' data-term='scraping' aria-expanded='false' aria-controls='glossPopover'>raspada</button> no Google Sheets), e assim ele fica publicado na Shopify depois de passar pelo <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button> e pelo <button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button>.",
    ba_lbl_before: "Linha raspada · Google Sheets",
    ba_lbl_after: "Produto na Shopify",
    dl_titulo: "Título",
    dl_estado_ia: "Status da IA",
    dl_peso: "Peso",
    dl_flete: "Frete int.",
    dl_sku: "<button class='gloss' type='button' data-term='sku' aria-expanded='false' aria-controls='glossPopover'>SKU</button>",
    dl_etiquetas: "Tags",
    dl_metacampos: "<button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>Metacampos</button>",
    dd_peso_val: "2,4 kg real → 4,32 kg cobrável (×1,8)",
    dd_flete_val: "R$133 + R$58,7 × 4,32 = R$386,58",
    dd_size_label: "tamanho",
    dd_size_val: "Média",
    dd_img_val: "da ficha",
    demo_note: "Exemplo ilustrativo: os campos e cálculos são os que o fluxo realmente gera; o produto e seu peso são de amostra.",

    h2_arquitectura: "Arquitetura",
    sub_arquitectura: "Esta é a foto completa antes de entrar em detalhes. Tudo roda em um único servidor: o Google Sheets funciona como banco de dados intermediário (<button class='gloss' type='button' data-term='staging' aria-expanded='false' aria-controls='glossPopover'>staging</button>) e como livro de vendas, o <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button> orquestra cada etapa, e a Shopify guarda os dados estruturados de cada produto.",
    arch_aria: "Fluxo: fornecedores brasileiros para o Google Sheets, para o n8n com Gemini, para a Shopify; cada venda dispara uma checagem de estoque contra o fornecedor",
    box1_small: "Fonte · manual",
    box1_body: "Sites de fornecedores no Brasil<br>(script no Chrome)",
    box2_small: "Staging",
    box2_body: "Google Sheets<br>(catálogo bruto)",
    box3_small: "Orquestração",
    box3_body: "n8n + <button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button> do <button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button>",
    box4_small: "Venda",
    box4_body: "Shopify<br>(tags + metacampos)",
    box5_small: "Contabilidade",
    box5_body: "Sheets de vendas<br>(margens + acompanhamento)",
    loop_text: "E cada venda na Shopify dispara dois <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflows</button> ao mesmo tempo: um faz a checagem de estoque no site do fornecedor, e o outro registra a venda com seu detalhamento de custos no Google Sheets.",
    host_text: "Ubuntu em <button class='gloss' type='button' data-term='vps' aria-expanded='false' aria-controls='glossPopover'>VPS</button> · <button class='gloss' type='button' data-term='docker' aria-expanded='false' aria-controls='glossPopover'>Docker</button> Compose · proxy reverso com HTTPS (Let's Encrypt) · subdomínio próprio via Cloudflare DNS",

    h2_workflows: "Os três workflows",
    sub_workflows: "Agora, passo a passo: o que cada <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflow</button> faz, que problema resolve e como eu o construí.",

    wf1_title: "1 · Catálogo: Google Sheets → IA → Shopify",
    wf1_tag: "~4.000 produtos · tradução · filtros · frete · preço",
    wf1_c1: "Início manual",
    wf1_c2: "Ler Sheets",
    wf1_c3: "Code: dicionário PT→ES",
    wf1_c4: "Gemini (JSON)",
    wf1_c5: "Code: parser",
    wf1_c6: "If: rejeitado?",
    wf1_c7: "Code: custo landed",
    wf1_c8: "Filter",
    wf1_c9: "Sheets \"saída\"",
    wf1_c10: "Wait",
    wf1_c11: "POST produto",
    wf1_caption: "Product Catalog Automation, no <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button>. Os nós desativados eu uso para testes: limitar a poucos produtos, testar filtros e pausas.",
    shot_hint: "deslize →",
    wf1_pt1: "Criar milhares de produtos manualmente não era viável, então o processo começa com um <strong>script de JavaScript</strong> que rodo no console do Chrome. Com <code>fetch</code> + <code>DOMParser</code>, ele percorre todas as páginas da busca do fornecedor e extrai <strong>título, preço em BRL, link e imagem</strong>, que colo no Google Sheets. É o <em>único passo manual</em> de todo o sistema. Fiz isso em duas fases (primeiro a listagem, depois cada ficha, lendo a imagem a partir de <code>og:image</code>) porque na listagem <em>as imagens de produtos vizinhos se misturavam</em>.",
    wf1_pt2: "Mas esse dado bruto ainda não serve para vender no Chile: o título vem em português e não diz quanto pesa nem para qual carro é. É aí que entra o <strong><button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button></strong>, que devolve um <strong><button class='gloss' type='button' data-term='json' aria-expanded='false' aria-controls='glossPopover'>JSON</button> estruturado</strong> com o título traduzido com terminologia chilena, uma descrição em HTML, o número <button class='gloss' type='button' data-term='oem' aria-expanded='false' aria-controls='glossPopover'>OEM</button>, as marcas compatíveis, o peso estimado, o tamanho e um status. Antes de chegar ao Gemini, um nó Code aplica <em>meu próprio dicionário</em> de cerca de 100 termos técnicos PT→ES, para que uma mesma peça tenha sempre o mesmo nome em todo o catálogo.",
    mba_before_label: "Antes · dado <button class='gloss' type='button' data-term='scraping' aria-expanded='false' aria-controls='glossPopover'>raspado</button>",
    mba_before_1: "Título em português, sem tradução",
    mba_before_2: "Preço em reais (BRL)",
    mba_before_3: "Sem peso, tamanho ou classificação",
    mba_after_label: "Depois · JSON do Gemini",
    mba_after_1: "Título traduzido (terminologia chilena)",
    mba_after_2: "Descrição em HTML + número OEM",
    mba_after_3: "Marcas compatíveis detectadas",
    mba_after_4: "Peso e tamanho estimados",
    mba_after_5: "Status: aprovado, rejeitado ou a cotar",
    wf1_pt3: "Nem tudo pode ou convém trazer pelo correio: <em>motores completos, câmbios, peças usadas ou fluidos inflamáveis</em>. O Gemini classifica cada produto por peso e risco, mas <strong>às vezes errava</strong>: motores completos passaram com preços na casa dos milhões. Por isso adicionei um <strong>reforço <button class='gloss' type='button' data-term='deterministic' aria-expanded='false' aria-controls='glossPopover'>determinístico</button></strong>: uma lista de palavras proibidas em português que força a rejeição sem depender do critério da IA.",
    wf1_pt4: "Com isso, cada produto aprovado recebe seu preço. A ideia é que ele cubra <strong>tudo o que custa trazer a peça</strong>, então primeiro calculo o <em><button class='gloss' type='button' data-term='landedcost' aria-expanded='false' aria-controls='glossPopover'>custo landed</button></em>: (custo em BRL + frete interno) × taxa de câmbio + frete internacional volumétrico + <button class='gloss' type='button' data-term='customsprovision' aria-expanded='false' aria-controls='glossPopover'>provisão aduaneira</button> (IVA + tarifa sobre o <button class='gloss' type='button' data-term='cif' aria-expanded='false' aria-controls='glossPopover'>CIF</button>). Sobre esse custo aplico minha margem.",
    tbl1_h1: "Regra", tbl1_h2: "Critério", tbl1_h3: "Resultado",
    tbl1_r1_regla: "Risco",
    tbl1_r1_criterio: "Motores completos, câmbios, peças usadas, fluidos inflamáveis",
    tbl1_r2_regla: "Peso / tamanho",
    tbl1_r2_criterio: "&gt; 25 kg ou &gt; 120 cm",
    tbl1_r2_resultado: "rascunho com tag",
    tbl1_r3_regla: "Resto",
    tbl1_r3_criterio: "Peças permitidas",
    tbl1_r3_resultado: "com frete pelo <button class='gloss' type='button' data-term='factork' aria-expanded='false' aria-controls='glossPopover'>Factor K</button>",
    h4_envio: "Estimativa de frete por produto",
    p_envio: "O frete é a parte mais difícil de estimar: os fornecedores não publicam peso nem medidas, e os Correios cobram por peso volumétrico, ou seja, também pelo espaço que a caixa ocupa. Por isso o Gemini estima o <strong>peso real</strong> e classifica o tamanho da peça, e com isso calculo o <strong><button class='gloss' type='button' data-term='billableweight' aria-expanded='false' aria-controls='glossPopover'>peso cobrável</button></strong> e o frete internacional:",
    formula1_l1: "peso cobrável = peso real × Factor K",
    formula1_l2: "frete = R$133 fixo por pacote + R$58,7 × kg cobrável",
    factor_k_title: "O que é o Factor K?",
    factor_k_body: "É um multiplicador conforme o tamanho da peça: peças grandes ocupam mais espaço no envio mesmo pesando pouco, então são cobradas como se pesassem mais. É a forma de aproximar o peso volumétrico sem medir cada pacote.",
    tbl2_h1: "Tamanho", tbl2_h2: "Exemplos", tbl2_h3: "Factor K",
    tbl2_r1_tamano: "Alta", tbl2_r1_ejemplos: "Grades, para-choques, painéis",
    tbl2_r2_tamano: "Média", tbl2_r2_ejemplos: "Faróis, mangueiras, espelhos",
    tbl2_r3_tamano: "Baixa", tbl2_r3_ejemplos: "Reservatórios, sensores, parafusos",
    tbl2_r1_k: "× 3,5", tbl2_r2_k: "× 1,8", tbl2_r3_k: "× 1,1",
    note_envio: "Calibrei a fórmula com recibos reais de envios pelos Correios. Além disso, de propósito, aplico o custo fixo completo a cada produto, mesmo que na prática vários viajem no mesmo pacote. É um critério conservador: prefiro superestimar o frete, e ao consolidar pacotes a margem real sai melhor.",
    calc_title: "Teste seu próprio cálculo",
    calc_sub: "Use a fórmula real do workflow: mude o peso e o tamanho e veja como o peso cobrável e o frete são calculados.",
    calc_weight_label: "Peso real (kg)",
    calc_size_label: "Tamanho",
    calc_result_weight: "Peso cobrável",
    calc_result_freight: "Frete internacional (Brasil → Chile)",
    calc_footnote: "Isso é só o frete internacional — não inclui o valor do produto nem impostos. Conversão para CLP/USD é referencial, não em tempo real.",

    wf2_title: "2 · Checagem de estoque com fornecedores",
    wf2_tag: "disparado a cada venda",
    wf2_c1: "Pedido criado",
    wf2_c2: "Split por produto",
    wf2_c3: "Ler metacampo link_brasil",
    wf2_c4: "GET ficha no Brasil",
    wf2_c5: "\"Esgotado\"?",
    wf2_c6: "Token OAuth novo",
    wf2_c7: "Obter variante",
    wf2_c8: "Estoque = 0",
    wf2_caption: "Inventory Validation, no n8n",
    wf2_pt1: "Vendo <strong>sob encomenda</strong>: não tenho estoque próprio, e o fornecedor pode ficar sem uma peça sem me avisar. Sem um controle, eu poderia <em>vender algo que não consigo entregar</em>.",
    wf2_pt2: "Para evitar isso, um <strong>Shopify Trigger</strong> aciona este workflow a cada pedido criado. O workflow separa o pedido por produto (Split Out), lê o <button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>metacampo</button> <code>link_brasil</code> e faz um GET na ficha do fornecedor buscando a palavra <em>\"Esgotado\"</em>. Se encontra, pede um <button class='gloss' type='button' data-term='oauthtoken' aria-expanded='false' aria-controls='glossPopover'>token OAuth</button> novo, obtém a variante e <strong>zera o estoque</strong> na Shopify. Um detalhe que aprendi no caminho: a busca corta o HTML antes da seção <em>\"Produtos relacionados\"</em>, porque produtos relacionados esgotados geravam alarmes falsos.",

    wf3_title: "3 · Registro de vendas e acompanhamento → Google Sheets",
    wf3_c3: "Ler metacampos de custo",
    wf3_c4: "Code: detalhamento e margens",
    wf3_c5: "Code: formatação da linha",
    wf3_c6: "Sheets: linha de venda",
    wf3_caption: "Registro de Vendas Google Sheets, no n8n",
    wf3_pt1: "Em cada venda preciso saber <strong>quanto custou realmente trazer o produto</strong>, quanto lucrei e em que parte do trajeto está o pacote. Fazer isso manualmente em cada pedido é lento e <em>propenso a erros</em>.",
    wf3_pt2: "Por isso, a cada pedido, o workflow separa os produtos, lê os metacampos de custo com a <button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button> da Shopify e, com dois nós Code, monta o detalhamento e formata a linha. Depois a adiciona (append) ao livro de contabilidade no Google Sheets, com o produto, o link do fornecedor, os dados do comprador e o <strong>detalhamento completo do preço</strong>. O ponto-chave: <em>não recalcula nada</em>, porque usa os custos que o workflow 1 já salvou em cada produto.",

    h4_desglose: "Detalhamento de cada venda",
    tbl3_h1: "Coluna", tbl3_h2: "De onde vem",
    tbl3_r1: "Custo do produto (BRL e CLP) e taxa de câmbio", tbl3_r1b: "Metacampos do produto",
    tbl3_r2: "Envio Brasil → casa do sócio", tbl3_r2b: "Frete interno do fornecedor",
    tbl3_r3: "Envio Brasil → Chile", tbl3_r3b: "Frete volumétrico (Factor K)",
    tbl3_r4: "Provisão aduaneira", tbl3_r4b: "IVA + tarifa sobre o CIF",
    tbl3_r5: "Preço de venda", tbl3_r5b: "Pedido da Shopify",
    tbl3_r7: "Nome, e-mail e telefone do cliente", tbl3_r7b: "Pedido da Shopify",

    h4_seguimiento: "Acompanhamento do pedido",
    p_seguimiento: "A mesma linha serve para <strong>acompanhar o pedido</strong>. O workflow a cria no momento da venda, e eu vou preenchendo a data de cada etapa conforme o pacote avança:",
    track1_b: "Venda", track1_s: "automático",
    track2_b: "Compra no Brasil", track2_s: "data e hora",
    track3_b: "Chega na casa do sócio", track3_s: "data",
    track4_b: "Sócio envia ao Chile", track4_s: "Correios",
    track5_b: "Chega na minha casa", track5_s: "alfândega liberada",
    track6_b: "Enviado ao cliente", track6_s: "entrega final",

    h2_shopify: "Shopify como banco de dados: tags e metacampos",
    sub_shopify: "Não só publico produtos. Cada ficha fica com dados estruturados que organizam a loja sozinha e alimentam os outros <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflows</button>.",
    h4_etiquetas: "Tags → coleções automáticas",
    p_etiquetas: "Eu queria que alguém com um Jeep encontrasse rápido as peças para o carro dele. Por isso o <button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button> extrai do título as marcas compatíveis como um array (só as que aparecem, nunca as inventa), e cada marca é salva como tag. Assim, as coleções inteligentes da Shopify (Jeep, Fiat, RAM…) se preenchem sozinhas, e uma peça compatível com várias marcas aparece em todas as suas coleções.",
    note_etiquetas: "A tag <code>COTIZAR</code> marca as peças grandes ou pesadas. Em vez de tirá-las do catálogo, elas são publicadas como rascunho com um aviso para cotar o frete caso a caso.",
    h4_variante: "Variante pronta para operar",
    p_variante: "O produto é criado com um HTTP Request direto para a <button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button> REST da Shopify, não com o nó nativo do <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button>, porque esse nó não permitia controlar a variante por completo (preço, peso e <button class='gloss' type='button' data-term='sku' aria-expanded='false' aria-controls='glossPopover'>SKU</button>). Assim cada produto fica pronto para vender:",
    pv1: "<strong>SKU</strong> = número <button class='gloss' type='button' data-term='oem' aria-expanded='false' aria-controls='glossPopover'>OEM</button>, que também vai no título para melhorar a busca, porque muitos clientes procuram a peça por esse número.",
    pv2: "<strong>Peso</strong> real em kg.",
    pv3: "<strong>Estoque</strong> gerenciado pela Shopify. Como vendo sob encomenda, cada produto começa disponível, e o workflow 2 zera se o fornecedor ficar sem estoque.",
    h4_meta: "Metacampos por produto",
    p_meta: "Os <button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>metacampos</button> são campos extras que a Shopify guarda em cada produto, como notas coladas na ficha. Cada produto é publicado com sete: o link do fornecedor e todo o detalhamento de custos. Defini cada um na Shopify para que apareçam no painel de administração.",
    tbl4_h1: "Metacampo", tbl4_h2: "Tipo", tbl4_h3: "Para que serve",
    tbl4_r1: "Link para a ficha do fornecedor. O workflow 2 usa para checar o estoque.",
    tbl4_r2: "Preço de compra em reais",
    tbl4_r3: "Taxa de câmbio BRL→CLP usada no cálculo",
    tbl4_r4: "Custo do produto convertido para pesos chilenos",
    tbl4_r5: "Frete Brasil→Chile conforme o <button class='gloss' type='button' data-term='billableweight' aria-expanded='false' aria-controls='glossPopover'>peso cobrável</button>",
    tbl4_r6: "Provisão de IVA + tarifa",
    tbl4_r7: "Custo total no Chile. Com ele, o workflow 3 calcula as margens de cada venda.",
    tipo_texto: "Texto",
    note_meta: "Com isso, cada pedido já traz seu detalhamento de custos sem recalcular nada: o workflow 2 usa o link para checar o estoque, e o workflow 3 passa os custos direto para a contabilidade.",

    h2_aprendizajes: "O que aprendi resolvendo bugs",
    lesson1_h: "Pareamento de itens no n8n",
    lesson1_p: "No início, o <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflow</button> misturava dados: um produto ficava com o preço ou a imagem de outro. A causa era que ele referenciava os dados entre nós por índice, e quando um Filter ou um If descartava items, os índices deixavam de coincidir. Resolvi usando o rastreamento de items do <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button> (<code>.item</code>), que segue cada produto por toda a cadeia.",
    lesson2_h: "A IA sozinha não basta",
    lesson2_p: "O <button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button> classifica bem quase sempre, mas em e-commerce um único erro sai caro, como publicar um motor completo a preço de peça avulsa. Aprendi a não depender só da IA: toda decisão crítica também tem uma regra <button class='gloss' type='button' data-term='deterministic' aria-expanded='false' aria-controls='glossPopover'>determinística</button> de reforço.",
    lesson3_h: "Permissões, tokens e metacampos",
    lesson3_p: "Conectar-me à <button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button> da Shopify me ensinou coisas que não aparecem nos tutoriais: o app precisa de scopes específicos (como <code>write_inventory</code>) para modificar o estoque, vale a pena pedir um token novo a cada execução para que não expire, é preciso adicionar pausas entre chamadas para não superar o <button class='gloss' type='button' data-term='ratelimit' aria-expanded='false' aria-controls='glossPopover'>rate limit</button>, e os <button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>metacampos</button> só aparecem no painel se antes você criar sua definição.",
    lesson4_h: "Custo mínimo, controle máximo",
    lesson4_p: "Escolhi n8n <button class='gloss' type='button' data-term='selfhosted' aria-expanded='false' aria-controls='glossPopover'>self-hosted</button> em vez de um SaaS que cobra por execução. Com um servidor de 5 USD por mês posso rodar fluxos ilimitados, e a única coisa que pago por uso é a API do Gemini.",
    more_coming_lead: "Pretendo continuar fazendo esse projeto crescer — vêm muitas coisas mais por aí.",
    more_coming_punch: "Isso é só o começo.",
    contact_title: "Vamos conversar",
    contact_text: "Se quiser falar sobre uma oportunidade, um projeto, ou só dizer olá, me escreva.",
    contact_copied: "Copiado!",
    gloss_close: "Fechar",

    footer_stack: "Stack: n8n · Docker · Ubuntu · Google Sheets API · Gemini API · Shopify Admin API · JavaScript · Cloudflare DNS"
  },

  fr: {
    back_link: "&larr; Retour au portfolio",
    visit_site_link: "Visiter Repuestolandia.cl &rarr;",
    hero_eyebrow: "Étude de cas · Automatisation e-commerce · Brésil → Chili",
    hero_title: "Une boutique de pièces automobiles en pilote automatique",
    hero_lede: "Repuestolandia est ma boutique Shopify de pièces automobiles importées du Brésil. Je la gère seul, alors j'ai construit un système avec n8n, l'API Gemini et un serveur Linux à 5 USD par mois qui fait le gros du travail à ma place : catalogue, traduction, filtres, prix livraison incluse, collections, métachamps, stock et enregistrement de chaque vente. La seule étape manuelle consiste à lancer le scraper ; à partir de là, n8n s'occupe de tout.",
    hero_by_role: "Fondateur, Repuestolandia SpA",

    stat1_label: "d'infrastructure par mois",
    stat2_label: "n8n dans Docker sur Linux",
    stat3_label: "produits scrapés",
    stat4_label: "workflows en production",

    nav_problema: "Le problème",
    nav_ejemplo: "Avant et après",
    nav_arquitectura: "Architecture",
    nav_workflows: "Workflows",
    nav_shopify: "Shopify : tags et métachamps",
    nav_aprendizajes: "Leçons apprises",

    quick_eyebrow: "En 30 secondes",
    quick_subheading: "Que font les automatisations que j'ai construites ?",
    quick1_h: "Construit le catalogue tout seul.",
    quick1_p: "Il récupère les produits du Brésil, les traduit, calcule ce qu'il en coûte de les faire venir, et les publie sur la boutique avec leur prix final.",
    quick2_h: "Ne vend jamais ce qui est épuisé.",
    quick2_p: "À chaque achat, il vérifie si le fournisseur a encore le produit. S'il est épuisé, il le retire de la vente.",
    quick3_h: "Suit chaque vente.",
    quick3_p: "Il enregistre automatiquement chaque commande avec ses coûts et tient une feuille pour suivre le colis jusqu'à sa livraison.",

    h2_problema: "Le problème",
    p_problema: "Au Chili, trouver certaines pièces automobiles est difficile : des pièces spécifiques pour Jeep ou Fiat qui ne sont pas disponibles dans les magasins locaux, ou qui coûtent bien plus cher que de raison. Au Brésil, en revanche, ces mêmes pièces se trouvent facilement, car beaucoup de ces modèles y sont fabriqués et vendus. <strong>C'est là que j'ai vu l'opportunité de Repuestolandia</strong> : importer directement du Brésil les pièces difficiles à trouver.",
    p_problema_2: "<strong>Le vrai défi était l'exploitation</strong>. Chaque produit arrivait en portugais, avec un prix en réaux, sans poids ni dimensions, et le stock du fournisseur pouvait changer sans préavis. Publier et maintenir des milliers de produits à la main aurait demandé une équipe que je n'avais pas. J'ai donc décidé d'automatiser le plus possible dès le premier jour, pour qu'une entreprise d'une seule personne puisse fonctionner comme une bien plus grande, avec des coûts minimes.",

    h2_ejemplo: "Un produit, avant et après",
    sub_ejemplo: "Voici comment un produit arrive depuis le site du fournisseur (une ligne <button class='gloss' type='button' data-term='scraping' aria-expanded='false' aria-controls='glossPopover'>scrapée</button> dans Google Sheets), et comment il finit publié sur Shopify après être passé par <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button> et <button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button>.",
    ba_lbl_before: "Ligne scrapée · Google Sheets",
    ba_lbl_after: "Produit sur Shopify",
    dl_titulo: "Titre",
    dl_estado_ia: "Statut IA",
    dl_peso: "Poids",
    dl_flete: "Fret int.",
    dl_sku: "<button class='gloss' type='button' data-term='sku' aria-expanded='false' aria-controls='glossPopover'>SKU</button>",
    dl_etiquetas: "Tags",
    dl_metacampos: "<button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>Métachamps</button>",
    dd_peso_val: "2,4 kg réel → 4,32 kg facturable (×1,8)",
    dd_flete_val: "R$133 + R$58,7 × 4,32 = R$386,58",
    dd_size_label: "taille",
    dd_size_val: "Moyenne",
    dd_img_val: "de la fiche",
    demo_note: "Exemple illustratif : les champs et calculs sont ceux réellement générés par le flux ; le produit et son poids sont donnés à titre d'exemple.",

    h2_arquitectura: "Architecture",
    sub_arquitectura: "Voici la vue d'ensemble avant d'entrer dans le détail. Tout tourne sur un seul serveur : Google Sheets sert de base de données intermédiaire (<button class='gloss' type='button' data-term='staging' aria-expanded='false' aria-controls='glossPopover'>staging</button>) et de livre de ventes, <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button> orchestre chaque étape, et Shopify stocke les données structurées de chaque produit.",
    arch_aria: "Flux : fournisseurs brésiliens vers Google Sheets, vers n8n avec Gemini, vers Shopify ; chaque vente déclenche une vérification de stock auprès du fournisseur",
    box1_small: "Source · manuel",
    box1_body: "Sites des fournisseurs au Brésil<br>(script Chrome)",
    box2_small: "Staging",
    box2_body: "Google Sheets<br>(catalogue brut)",
    box3_small: "Orchestration",
    box3_body: "n8n + <button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button> <button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button>",
    box4_small: "Vente",
    box4_body: "Shopify<br>(tags + métachamps)",
    box5_small: "Comptabilité",
    box5_body: "Sheets des ventes<br>(marges + suivi)",
    loop_text: "Et chaque vente sur Shopify déclenche deux <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflows</button> en même temps : l'un vérifie le stock sur le site du fournisseur, et l'autre enregistre la vente avec son détail de coûts dans Google Sheets.",
    host_text: "Ubuntu sur un <button class='gloss' type='button' data-term='vps' aria-expanded='false' aria-controls='glossPopover'>VPS</button> · <button class='gloss' type='button' data-term='docker' aria-expanded='false' aria-controls='glossPopover'>Docker</button> Compose · proxy inverse avec HTTPS (Let's Encrypt) · sous-domaine propre via Cloudflare DNS",

    h2_workflows: "Les trois workflows",
    sub_workflows: "Maintenant, étape par étape : ce que fait chaque <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflow</button>, quel problème il résout et comment je l'ai construit.",

    wf1_title: "1 · Catalogue : Google Sheets → IA → Shopify",
    wf1_tag: "~4 000 produits · traduction · filtres · envoi · prix",
    wf1_c1: "Démarrage manuel",
    wf1_c2: "Lire Sheets",
    wf1_c3: "Code : dictionnaire PT→ES",
    wf1_c4: "Gemini (JSON)",
    wf1_c5: "Code : parser",
    wf1_c6: "If : rejeté ?",
    wf1_c7: "Code : coût rendu",
    wf1_c8: "Filter",
    wf1_c9: "Sheets « sortie »",
    wf1_c10: "Wait",
    wf1_c11: "POST produit",
    wf1_caption: "Product Catalog Automation, dans <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button>. Les nœuds désactivés, je les utilise pour les tests : limiter à quelques produits, tester des filtres et des pauses.",
    shot_hint: "faites défiler →",
    wf1_pt1: "Créer des milliers de produits à la main n'était pas viable, alors le processus commence par un <strong>script JavaScript</strong> que je lance dans la console Chrome. Avec <code>fetch</code> + <code>DOMParser</code>, il parcourt toutes les pages du moteur de recherche du fournisseur et extrait <strong>titre, prix en BRL, lien et image</strong>, que je colle dans Google Sheets. C'est la <em>seule étape manuelle</em> de tout le système. Je l'ai fait en deux phases (d'abord la liste, puis chaque fiche, en lisant l'image depuis <code>og:image</code>) car dans la liste, <em>les images des produits voisins se mélangeaient</em>.",
    wf1_pt2: "Mais cette donnée brute ne suffit pas encore à vendre au Chili : le titre arrive en portugais et ne précise ni le poids ni pour quelle voiture c'est. C'est là qu'intervient <strong><button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button></strong>, qui renvoie un <strong><button class='gloss' type='button' data-term='json' aria-expanded='false' aria-controls='glossPopover'>JSON</button> structuré</strong> avec le titre traduit avec une terminologie chilienne, une description HTML, le numéro <button class='gloss' type='button' data-term='oem' aria-expanded='false' aria-controls='glossPopover'>OEM</button>, les marques compatibles, le poids estimé, la taille et un statut. Avant d'arriver à Gemini, un nœud Code applique <em>mon propre dictionnaire</em> d'environ 100 termes techniques PT→ES, pour qu'une même pièce porte toujours le même nom dans tout le catalogue.",
    mba_before_label: "Avant · donnée <button class='gloss' type='button' data-term='scraping' aria-expanded='false' aria-controls='glossPopover'>scrapée</button>",
    mba_before_1: "Titre en portugais, non traduit",
    mba_before_2: "Prix en réaux (BRL)",
    mba_before_3: "Ni poids, ni taille, ni classification",
    mba_after_label: "Après · JSON de Gemini",
    mba_after_1: "Titre traduit (terminologie chilienne)",
    mba_after_2: "Description HTML + référence OEM",
    mba_after_3: "Marques compatibles détectées",
    mba_after_4: "Poids et taille estimés",
    mba_after_5: "Statut : approuvé, rejeté ou à devis",
    wf1_pt3: "Tout ne peut pas ou ne devrait pas être importé par la poste : <em>moteurs complets, boîtes de vitesses, pièces usagées ou fluides inflammables</em>. Gemini classe chaque produit par poids et par risque, mais <strong>il se trompait parfois</strong> : des moteurs complets passaient avec des prix à plusieurs millions. J'ai donc ajouté un <strong>filet de sécurité <button class='gloss' type='button' data-term='deterministic' aria-expanded='false' aria-controls='glossPopover'>déterministe</button></strong> : une liste de mots interdits en portugais qui force le rejet sans dépendre du jugement de l'IA.",
    wf1_pt4: "Avec ça, chaque produit approuvé reçoit son prix. L'idée est qu'il couvre <strong>tout ce que coûte l'importation de la pièce</strong>, donc je calcule d'abord le <em><button class='gloss' type='button' data-term='landedcost' aria-expanded='false' aria-controls='glossPopover'>coût landed</button></em> : (coût en BRL + fret interne) × taux de change + fret international volumétrique + <button class='gloss' type='button' data-term='customsprovision' aria-expanded='false' aria-controls='glossPopover'>provision douanière</button> (TVA + droits sur la valeur <button class='gloss' type='button' data-term='cif' aria-expanded='false' aria-controls='glossPopover'>CIF</button>). J'applique ensuite ma marge sur ce coût.",
    tbl1_h1: "Règle", tbl1_h2: "Critère", tbl1_h3: "Résultat",
    tbl1_r1_regla: "Risque",
    tbl1_r1_criterio: "Moteurs complets, boîtes de vitesses, pièces d'occasion, fluides inflammables",
    tbl1_r2_regla: "Poids / taille",
    tbl1_r2_criterio: "&gt; 25 kg ou &gt; 120 cm",
    tbl1_r2_resultado: "brouillon avec tag",
    tbl1_r3_regla: "Le reste",
    tbl1_r3_criterio: "Pièces autorisées",
    tbl1_r3_resultado: "avec fret selon le <button class='gloss' type='button' data-term='factork' aria-expanded='false' aria-controls='glossPopover'>Factor K</button>",
    h4_envio: "Estimation de l'envoi par produit",
    p_envio: "Le fret est ce qu'il y a de plus difficile à estimer : les fournisseurs ne publient ni le poids ni les dimensions, et Correios facture au poids volumétrique, c'est-à-dire aussi selon l'espace occupé par le colis. C'est pourquoi Gemini estime le <strong>poids réel</strong> et classe la taille de la pièce, et à partir de là, je calcule le <strong><button class='gloss' type='button' data-term='billableweight' aria-expanded='false' aria-controls='glossPopover'>poids facturable</button></strong> et le fret international :",
    formula1_l1: "poids facturable = poids réel × Factor K",
    formula1_l2: "fret = R$133 fixe par colis + R$58,7 × kg facturable",
    factor_k_title: "Qu'est-ce que le Factor K ?",
    factor_k_body: "C'est un multiplicateur basé sur la taille de la pièce : les pièces volumineuses prennent plus de place dans l'envoi même si elles pèsent peu, donc elles sont facturées comme si elles pesaient plus. C'est une façon d'approximer le poids volumétrique sans mesurer chaque colis.",
    tbl2_h1: "Taille", tbl2_h2: "Exemples", tbl2_h3: "Factor K",
    tbl2_r1_tamano: "Grande", tbl2_r1_ejemplos: "Calandres, pare-chocs, tableaux de bord",
    tbl2_r2_tamano: "Moyenne", tbl2_r2_ejemplos: "Phares, durites, rétroviseurs",
    tbl2_r3_tamano: "Petite", tbl2_r3_ejemplos: "Réservoirs, capteurs, boulons",
    tbl2_r1_k: "× 3,5", tbl2_r2_k: "× 1,8", tbl2_r3_k: "× 1,1",
    note_envio: "J'ai calibré la formule à partir de vrais reçus d'envoi Correios. De plus, volontairement, j'applique le coût fixe complet à chaque produit, même si en pratique plusieurs voyagent dans le même colis. C'est un choix prudent : je préfère surestimer le fret, et une fois les colis consolidés, la marge réelle est meilleure.",
    calc_title: "Testez votre propre calcul",
    calc_sub: "Utilisez la formule réelle du workflow : changez le poids et la taille et observez comment le poids facturable et le fret sont calculés.",
    calc_weight_label: "Poids réel (kg)",
    calc_size_label: "Taille",
    calc_result_weight: "Poids facturable",
    calc_result_freight: "Fret international (Brésil → Chili)",
    calc_footnote: "Il s'agit uniquement du fret international — cela n'inclut pas la valeur du produit ni les droits de douane. Conversion en CLP/USD à titre indicatif, pas en temps réel.",

    wf2_title: "2 · Vérification du stock chez les fournisseurs",
    wf2_tag: "déclenché à chaque vente",
    wf2_c1: "Commande créée",
    wf2_c2: "Split par produit",
    wf2_c3: "Lire le métachamp link_brasil",
    wf2_c4: "GET fiche au Brésil",
    wf2_c5: "« Esgotado » ?",
    wf2_c6: "Nouveau token OAuth",
    wf2_c7: "Récupérer la variante",
    wf2_c8: "Stock = 0",
    wf2_caption: "Inventory Validation, dans n8n",
    wf2_pt1: "Je vends <strong>sur commande</strong> : je n'ai pas de stock propre, et le fournisseur peut se retrouver en rupture d'une pièce sans me prévenir. Sans contrôle, je pourrais <em>vendre quelque chose que je ne peux pas livrer</em>.",
    wf2_pt2: "Pour éviter ça, un <strong>Shopify Trigger</strong> déclenche ce workflow à chaque commande créée. Le workflow sépare la commande par produit (Split Out), lit le <button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>métachamp</button> <code>link_brasil</code> et fait un GET sur la fiche du fournisseur en cherchant le mot <em>« Esgotado »</em> (épuisé). S'il le trouve, il demande un nouveau <button class='gloss' type='button' data-term='oauthtoken' aria-expanded='false' aria-controls='glossPopover'>token OAuth</button>, récupère la variante et <strong>met le stock à 0</strong> sur Shopify. Un détail appris en cours de route : la recherche coupe le HTML avant la section <em>« Produtos relacionados »</em>, car les produits associés épuisés déclenchaient de fausses alertes.",

    wf3_title: "3 · Enregistrement des ventes et suivi → Google Sheets",
    wf3_c3: "Lire les métachamps de coût",
    wf3_c4: "Code : détail et marges",
    wf3_c5: "Code : formatage de la ligne",
    wf3_c6: "Sheets : ligne de vente",
    wf3_caption: "Enregistrement des ventes Google Sheets, dans n8n",
    wf3_pt1: "Pour chaque vente, j'ai besoin de savoir <strong>combien a réellement coûté l'importation du produit</strong>, combien j'ai gagné, et où en est le colis dans son trajet. Le faire à la main pour chaque commande est lent et <em>source d'erreurs</em>.",
    wf3_pt2: "C'est pourquoi, à chaque commande, le workflow sépare les produits, lit les métachamps de coût via l'<button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button> Shopify et, avec deux nœuds Code, construit le détail et met la ligne en forme. Il l'ajoute (append) ensuite au livre comptable dans Google Sheets, avec le produit, le lien du fournisseur, les coordonnées de l'acheteur et le <strong>détail complet du prix</strong>. Le point clé : <em>il ne recalcule rien</em>, car il utilise les coûts déjà enregistrés par le workflow 1 sur chaque produit.",

    h4_desglose: "Détail de chaque vente",
    tbl3_h1: "Colonne", tbl3_h2: "D'où ça vient",
    tbl3_r1: "Coût du produit (BRL et CLP) et taux de change", tbl3_r1b: "Métachamps du produit",
    tbl3_r2: "Envoi Brésil → domicile du partenaire", tbl3_r2b: "Fret interne du fournisseur",
    tbl3_r3: "Envoi Brésil → Chili", tbl3_r3b: "Fret volumétrique (Factor K)",
    tbl3_r4: "Provision douanière", tbl3_r4b: "TVA + droits sur la valeur CIF",
    tbl3_r5: "Prix de vente", tbl3_r5b: "Commande Shopify",
    tbl3_r7: "Nom, e-mail et téléphone du client", tbl3_r7b: "Commande Shopify",

    h4_seguimiento: "Suivi de la commande",
    p_seguimiento: "La même ligne sert aussi à <strong>suivre la commande</strong>. Le workflow la crée au moment de la vente, et je remplis la date de chaque étape au fur et à mesure que le colis avance :",
    track1_b: "Vente", track1_s: "automatique",
    track2_b: "Achat au Brésil", track2_s: "date et heure",
    track3_b: "Arrive chez le partenaire", track3_s: "date",
    track4_b: "Le partenaire l'envoie au Chili", track4_s: "Correios",
    track5_b: "Arrive chez moi", track5_s: "douane dédouanée",
    track6_b: "Envoyé au client", track6_s: "livraison finale",

    h2_shopify: "Shopify comme base de données : tags et métachamps",
    sub_shopify: "Je ne fais pas que publier des produits. Chaque fiche conserve des données structurées qui organisent la boutique toute seule et alimentent les autres <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflows</button>.",
    h4_etiquetas: "Tags → collections automatiques",
    p_etiquetas: "Je voulais que quelqu'un avec une Jeep trouve rapidement les pièces pour sa voiture. C'est pourquoi <button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button> extrait du titre les marques compatibles sous forme de tableau (seulement celles qui apparaissent, jamais inventées), et chaque marque est enregistrée comme tag. Ainsi, les collections intelligentes de Shopify (Jeep, Fiat, RAM…) se remplissent toutes seules, et une pièce compatible avec plusieurs marques apparaît dans toutes ses collections.",
    note_etiquetas: "Le tag <code>COTIZAR</code> marque les pièces grandes ou lourdes. Plutôt que de les retirer du catalogue, elles sont publiées en brouillon avec une note pour établir un devis d'envoi au cas par cas.",
    h4_variante: "Une variante prête à fonctionner",
    p_variante: "Le produit est créé avec une HTTP Request directement vers l'<button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button> REST de Shopify, et non avec le nœud natif de <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button>, car ce nœud ne permettait pas de contrôler la variante dans son intégralité (prix, poids et <button class='gloss' type='button' data-term='sku' aria-expanded='false' aria-controls='glossPopover'>SKU</button>). Voici ce qui rend chaque produit prêt à vendre :",
    pv1: "<strong>SKU</strong> = le numéro <button class='gloss' type='button' data-term='oem' aria-expanded='false' aria-controls='glossPopover'>OEM</button>, qui figure aussi dans le titre pour améliorer la recherche, car de nombreux clients recherchent la pièce par ce numéro.",
    pv2: "<strong>Poids</strong> réel en kg.",
    pv3: "<strong>Stock</strong> géré par Shopify. Comme je vends sur commande, chaque produit démarre disponible, et le workflow 2 le passe à 0 si le fournisseur est en rupture de stock.",
    h4_meta: "Métachamps par produit",
    p_meta: "Les <button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>métachamps</button> sont des champs supplémentaires que Shopify enregistre sur chaque produit, comme des notes attachées à la fiche. Chaque produit est publié avec sept : le lien du fournisseur et tout le détail des coûts. J'ai défini chacun d'eux dans Shopify pour qu'ils apparaissent dans le panneau d'administration.",
    tbl4_h1: "Métachamp", tbl4_h2: "Type", tbl4_h3: "À quoi ça sert",
    tbl4_r1: "Lien vers la fiche du fournisseur. Le workflow 2 s'en sert pour vérifier le stock.",
    tbl4_r2: "Prix d'achat en réaux",
    tbl4_r3: "Taux de change BRL→CLP utilisé dans le calcul",
    tbl4_r4: "Coût du produit converti en pesos chiliens",
    tbl4_r5: "Fret Brésil→Chili selon le <button class='gloss' type='button' data-term='billableweight' aria-expanded='false' aria-controls='glossPopover'>poids facturable</button>",
    tbl4_r6: "Provision TVA + droits",
    tbl4_r7: "Coût total rendu au Chili. Le workflow 3 s'en sert pour calculer les marges de chaque vente.",
    tipo_texto: "Texte",
    note_meta: "Ainsi, chaque commande arrive déjà avec son détail de coûts sans rien recalculer : le workflow 2 utilise le lien pour vérifier le stock, et le workflow 3 transmet les coûts directement à la comptabilité.",

    h2_aprendizajes: "Ce que j'ai appris en corrigeant des bugs",
    lesson1_h: "L'appariement des items dans n8n",
    lesson1_p: "Au début, le <button class='gloss' type='button' data-term='workflow' aria-expanded='false' aria-controls='glossPopover'>workflow</button> mélangeait les données : un produit se retrouvait avec le prix ou l'image d'un autre. La cause était qu'il référençait les données entre les nœuds par index, et quand un Filter ou un If écartait des items, les index cessaient de correspondre. J'ai résolu ça en utilisant le suivi d'items de <button class='gloss' type='button' data-term='n8n' aria-expanded='false' aria-controls='glossPopover'>n8n</button> (<code>.item</code>), qui suit chaque produit tout au long de la chaîne.",
    lesson2_h: "L'IA seule ne suffit pas",
    lesson2_p: "<button class='gloss' type='button' data-term='gemini' aria-expanded='false' aria-controls='glossPopover'>Gemini</button> classe bien presque tout le temps, mais dans l'e-commerce, une seule erreur coûte cher, comme publier un moteur complet au prix d'une pièce détachée. J'ai appris à ne pas dépendre uniquement de l'IA : chaque décision critique s'appuie aussi sur une règle <button class='gloss' type='button' data-term='deterministic' aria-expanded='false' aria-controls='glossPopover'>déterministe</button> de secours.",
    lesson3_h: "Permissions, tokens et métachamps",
    lesson3_p: "Me connecter à l'<button class='gloss' type='button' data-term='api' aria-expanded='false' aria-controls='glossPopover'>API</button> Shopify m'a appris des choses qu'on ne trouve pas dans les tutoriels : l'application a besoin de scopes spécifiques (comme <code>write_inventory</code>) pour modifier le stock, il vaut mieux demander un nouveau token à chaque exécution pour qu'il n'expire pas, il faut ajouter des pauses entre les appels pour ne pas dépasser le <button class='gloss' type='button' data-term='ratelimit' aria-expanded='false' aria-controls='glossPopover'>rate limit</button>, et les <button class='gloss' type='button' data-term='metafields' aria-expanded='false' aria-controls='glossPopover'>métachamps</button> n'apparaissent dans le panneau que si vous avez d'abord créé leur définition.",
    lesson4_h: "Coût minimal, contrôle maximal",
    lesson4_p: "J'ai choisi n8n <button class='gloss' type='button' data-term='selfhosted' aria-expanded='false' aria-controls='glossPopover'>auto-hébergé</button> plutôt qu'un SaaS facturé à l'exécution. Avec un serveur à 5 USD par mois, je peux faire tourner des flux illimités, et la seule chose que je paie à l'usage est l'API Gemini.",
    more_coming_lead: "Je compte continuer à faire grandir ce projet — beaucoup de choses arrivent encore.",
    more_coming_punch: "Ce n'est que le début.",
    contact_title: "Discutons",
    contact_text: "Pour échanger sur une opportunité, un projet, ou simplement dire bonjour, écrivez-moi.",
    contact_copied: "Copié !",
    gloss_close: "Fermer",

    footer_stack: "Stack : n8n · Docker · Ubuntu · Google Sheets API · Gemini API · Shopify Admin API · JavaScript · Cloudflare DNS"
  }
};

/* ==========================================================
   Calculadora interactiva de flete
   (declarada antes de "Aplicar idioma" porque setRlLanguage
   llama a rlRunCalc, y esto debe existir antes de esa llamada)
   ========================================================== */
const rlCalcWeight = document.getElementById("calcWeight");
const rlCalcSizeBtns = document.querySelectorAll(".calc-size-btn");
const rlCalcWeightOut = document.getElementById("calcWeightOut");
const rlCalcFreightOut = document.getElementById("calcFreightOut");
const rlCalcFreightAlt = document.getElementById("calcFreightAlt");
let rlCalcFactor = 1.8;

// Tipos de cambio referenciales (no en tiempo real), solo para dar una
// idea de magnitud en CLP/USD además del BRL real del cálculo.
const RL_BRL_TO_USD = 5.5;
const RL_USD_TO_CLP = 950;

function rlFormatNumber(n, decimals){
  const lang = document.documentElement.getAttribute("lang") || "es";
  const s = n.toFixed(decimals);
  return lang === "en" ? s : s.replace(".", ",");
}

function rlFormatInt(n){
  const lang = document.documentElement.getAttribute("lang") || "es";
  const sep = lang === "en" ? "," : ".";
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

function rlRunCalc(){
  if (!rlCalcWeight || !rlCalcWeightOut || !rlCalcFreightOut) return;
  let weight = parseFloat(rlCalcWeight.value);
  if (isNaN(weight) || weight <= 0) weight = 0;
  weight = Math.min(weight, 200);
  const billable = weight * rlCalcFactor;
  const freight = 133 + 58.7 * billable;
  const usd = freight / RL_BRL_TO_USD;
  const clp = usd * RL_USD_TO_CLP;
  rlCalcWeightOut.textContent = `${rlFormatNumber(billable, 2)} kg`;
  rlCalcFreightOut.textContent = `R$${rlFormatNumber(freight, 2)}`;
  if (rlCalcFreightAlt) rlCalcFreightAlt.textContent = `≈ $${rlFormatInt(clp)} CLP · US$${rlFormatNumber(usd, 2)}`;
}

if (rlCalcWeight){
  rlCalcWeight.addEventListener("input", rlRunCalc);
  rlCalcSizeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      rlCalcSizeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      rlCalcFactor = parseFloat(btn.getAttribute("data-factor"));
      rlRunCalc();
    });
  });
  rlRunCalc();
}

/* ==========================================================
   Aplicar idioma
   ========================================================== */
const RL_STORAGE_KEY = "repuestolandia-lang";

function rlDetectInitialLang(){
  const saved = localStorage.getItem(RL_STORAGE_KEY);
  if (rlTranslations[saved]) return saved;
  const nav = (navigator.language || "es").slice(0, 2);
  return rlTranslations[nav] ? nav : "es";
}

function setRlLanguage(lang){
  if (!rlTranslations[lang]) return;
  const dict = rlTranslations[lang];
  if (typeof rlGlossClose === "function") rlGlossClose();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-label]").forEach(el => {
    const key = el.getAttribute("data-i18n-label");
    if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
  });
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
  localStorage.setItem(RL_STORAGE_KEY, lang);
  if (typeof rlRunCalc === "function") rlRunCalc();
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setRlLanguage(btn.getAttribute("data-lang")));
});

setRlLanguage(rlDetectInitialLang());

/* ==========================================================
   Progress line
   ========================================================== */
const rlProgressLine = document.getElementById("rlProgress");
function rlOnScroll(){
  if (!rlProgressLine) return;
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
  rlProgressLine.style.width = progress + "%";
}
window.addEventListener("scroll", rlOnScroll, { passive: true });
rlOnScroll();

/* ==========================================================
   Scroll reveal (secciones)
   ========================================================== */
const rlRevealEls = document.querySelectorAll(".reveal");
const rlRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("is-visible");
      rlRevealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
rlRevealEls.forEach(el => rlRevealObserver.observe(el));

/* ==========================================================
   Stat counters
   ========================================================== */
const rlStatEls = document.querySelectorAll(".stat b[data-count]");
const rlStatElList = Array.from(rlStatEls);
const rlStatObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    // Delay start so the count kicks in right as the tile's own fade-in
    // settles, instead of racing it — makes the growth easy to catch.
    const delay = 250 + rlStatElList.indexOf(el) * 130;
    window.setTimeout(() => {
      const target = parseInt(el.getAttribute("data-count"), 10);
      const prefix = el.getAttribute("data-prefix") || "";
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 1500;
      const start = performance.now();
      function tick(now){
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const value = Math.round(target * eased);
        el.textContent = prefix + value + suffix;
        if (t < 1){
          requestAnimationFrame(tick);
        } else {
          el.classList.add("counted");
        }
      }
      requestAnimationFrame(tick);
    }, delay);
    rlStatObserver.unobserve(el);
  });
}, { threshold: 0.4 });
rlStatEls.forEach(el => rlStatObserver.observe(el));

/* ==========================================================
   Diagrama de arquitectura: secuencia al entrar en pantalla
   ========================================================== */
const rlArch = document.querySelector(".arch");
if (rlArch){
  const rlArchObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        rlArch.classList.add("is-visible");
        rlArchObserver.unobserve(rlArch);
      }
    });
  }, { threshold: 0.2 });
  rlArchObserver.observe(rlArch);
}

/* ==========================================================
   TOC: sección activa al hacer scroll
   ========================================================== */
const rlTocLinks = document.querySelectorAll("nav.toc a");
const rlTocSections = [];
rlTocLinks.forEach(link => {
  const section = document.getElementById(link.getAttribute("href").slice(1));
  if (section) rlTocSections.push({ section, link });
});
const rlTocObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const match = rlTocSections.find(s => s.section === entry.target);
    rlTocLinks.forEach(a => a.classList.remove("active"));
    if (match) match.link.classList.add("active");
  });
}, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
rlTocSections.forEach(({ section }) => rlTocObserver.observe(section));

/* ==========================================================
   Gráfico de crecimiento animado (sección de cierre)
   ========================================================== */
const rlGrowthPath = document.getElementById("rlGrowthPath");
if (rlGrowthPath){
  const rlGrowthLen = rlGrowthPath.getTotalLength();
  rlGrowthPath.style.strokeDasharray = String(rlGrowthLen);
  rlGrowthPath.style.strokeDashoffset = String(rlGrowthLen);
  const rlGrowthDots = document.querySelectorAll(".growth-dot");

  const rlGrowthObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      rlGrowthPath.style.transition = "stroke-dashoffset 1.5s cubic-bezier(.22,1,.36,1)";
      rlGrowthPath.style.strokeDashoffset = "0";
      rlGrowthDots.forEach((dot, i) => {
        window.setTimeout(() => dot.classList.add("show"), 700 + i * 320);
      });
      rlGrowthObserver.unobserve(rlGrowthPath);
    });
  }, { threshold: 0.5 });
  rlGrowthObserver.observe(rlGrowthPath);
}

/* ==========================================================
   Copiar email al portapapeles (sección de contacto)
   ========================================================== */
const rlContactEmailBtn = document.getElementById("rlContactEmailBtn");
const rlContactCopiedTip = document.getElementById("rlContactCopiedTip");
if (rlContactEmailBtn && rlContactCopiedTip){
  let rlCopyTipTimeout = null;
  rlContactEmailBtn.addEventListener("click", () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText("venegas.osses.tomas@gmail.com").then(() => {
      rlContactCopiedTip.classList.add("show");
      if (rlCopyTipTimeout) window.clearTimeout(rlCopyTipTimeout);
      rlCopyTipTimeout = window.setTimeout(() => {
        rlContactCopiedTip.classList.remove("show");
      }, 1600);
    }).catch(() => {});
  });
}

/* ==========================================================
   Mini antes/después: secuencia al entrar en pantalla
   ========================================================== */
const rlMiniBaEls = document.querySelectorAll(".mini-ba");
const rlMiniBaObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    rlMiniBaObserver.unobserve(entry.target);
  });
}, { threshold: 0.35 });
rlMiniBaEls.forEach(el => rlMiniBaObserver.observe(el));

/* ==========================================================
   Pista "desliza ->" sobre las capturas de n8n, solo si no caben
   ========================================================== */
const rlShotWraps = document.querySelectorAll(".shot-wrap");
function rlUpdateShotHints(){
  rlShotWraps.forEach(wrap => {
    const scrollEl = wrap.querySelector(".shot-scroll");
    if (!scrollEl) return;
    wrap.classList.toggle("scrollable", scrollEl.scrollWidth > scrollEl.clientWidth + 1);
  });
}
if (rlShotWraps.length){
  window.addEventListener("load", rlUpdateShotHints);
  window.addEventListener("resize", rlUpdateShotHints);
  rlUpdateShotHints();
}

/* ==========================================================
   Glosario interactivo: términos técnicos con clic
   ========================================================== */
const rlGlossaryDefs = {
  es: {
    n8n: "Herramienta para crear automatizaciones conectando aplicaciones y pasos, sin programar todo desde cero.",
    workflow: "Secuencia de pasos automáticos que se ejecuta sola cuando pasa algo, por ejemplo, una venta.",
    scraping: "Extraer información de una página web de forma automática, como títulos y precios.",
    api: "Una \"puerta\" que permite que dos programas se comuniquen y se pidan datos entre sí.",
    gemini: "Modelo de inteligencia artificial de Google que uso para traducir y clasificar productos.",
    json: "Formato de texto ordenado en campos (por ejemplo, \"título\", \"peso\", \"estado\"), fácil de leer para un programa.",
    deterministic: "Una regla fija que siempre da el mismo resultado; a diferencia de la IA, no \"opina\" ni se equivoca de forma distinta cada vez.",
    docker: "Herramienta que empaqueta un programa con todo lo que necesita para que funcione igual en cualquier servidor.",
    vps: "Un servidor virtual arrendado en la nube, encendido las 24 horas.",
    selfhosted: "Instalado en mi propio servidor, en vez de pagar un servicio externo por usarlo.",
    staging: "Lugar intermedio donde se guardan los datos antes de procesarlos.",
    landedcost: "Lo que cuesta el producto ya puesto en Chile, sumando compra, envíos e impuestos.",
    factork: "Multiplicador según el tamaño de la pieza, para cobrar el espacio que ocupa en el envío.",
    billableweight: "El peso que usa el correo para cobrar; considera el tamaño de la pieza, no solo lo que pesa.",
    customsprovision: "Dinero que se reserva para pagar el IVA y el arancel cuando el producto entra a Chile.",
    cif: "Valor del producto más el flete y el seguro; es la base para calcular los impuestos de importación.",
    metafields: "Campos extra que Shopify permite guardar en cada producto, como su costo o el link del proveedor.",
    sku: "Código interno que identifica cada producto en la tienda.",
    oem: "Número original de la pieza, asignado por el fabricante del vehículo.",
    oauthtoken: "Una llave temporal que da permiso para modificar datos en Shopify.",
    ratelimit: "Límite de cuántas solicitudes por segundo acepta una API; si lo superas, te bloquea por un momento.",
  },
  en: {
    n8n: "A tool for building automations by connecting apps and steps, without coding everything from scratch.",
    workflow: "A sequence of automatic steps that runs on its own when something happens, like a sale.",
    scraping: "Automatically pulling information off a web page, like titles and prices.",
    api: "A \"door\" that lets two programs talk to each other and request data from one another.",
    gemini: "Google's AI model that I use to translate and classify products.",
    json: "A text format organized into fields (for example, \"title\", \"weight\", \"status\"), easy for a program to read.",
    deterministic: "A fixed rule that always gives the same result; unlike AI, it doesn't \"have an opinion\" or make mistakes differently each time.",
    docker: "A tool that packages a program with everything it needs so it runs the same way on any server.",
    vps: "A virtual server rented in the cloud, running 24 hours a day.",
    selfhosted: "Installed on my own server, instead of paying an outside service to use it.",
    staging: "An intermediate spot where data gets stored before it's processed.",
    landedcost: "What the product costs once it's actually in Chile, adding up purchase, shipping, and taxes.",
    factork: "A multiplier based on the part's size, to charge for the space it takes up in the shipment.",
    billableweight: "The weight the postal service uses to charge; it accounts for the part's size, not just what it weighs.",
    customsprovision: "Money set aside to pay VAT and duty when the product enters Chile.",
    cif: "The product's value plus freight and insurance; it's the basis for calculating import taxes.",
    metafields: "Extra fields Shopify lets you save on each product, like its cost or the supplier's link.",
    sku: "An internal code that identifies each product in the store.",
    oem: "The part's original number, assigned by the vehicle's manufacturer.",
    oauthtoken: "A temporary key that grants permission to modify data on Shopify.",
    ratelimit: "The limit on how many requests per second an API accepts; go over it and it blocks you for a moment.",
  },
  pt: {
    n8n: "Ferramenta para criar automações conectando aplicativos e etapas, sem programar tudo do zero.",
    workflow: "Sequência de etapas automáticas que roda sozinha quando algo acontece, por exemplo, uma venda.",
    scraping: "Extrair informações de uma página da web automaticamente, como títulos e preços.",
    api: "Uma \"porta\" que permite que dois programas se comuniquem e peçam dados um ao outro.",
    gemini: "Modelo de inteligência artificial do Google que uso para traduzir e classificar produtos.",
    json: "Formato de texto organizado em campos (por exemplo, \"título\", \"peso\", \"status\"), fácil de ler para um programa.",
    deterministic: "Uma regra fixa que sempre dá o mesmo resultado; diferente da IA, não \"opina\" nem erra de forma diferente a cada vez.",
    docker: "Ferramenta que empacota um programa com tudo o que ele precisa para funcionar igual em qualquer servidor.",
    vps: "Um servidor virtual alugado na nuvem, ligado 24 horas por dia.",
    selfhosted: "Instalado no meu próprio servidor, em vez de pagar um serviço externo para usá-lo.",
    staging: "Lugar intermediário onde os dados ficam guardados antes de serem processados.",
    landedcost: "O que custa o produto já posto no Chile, somando compra, fretes e impostos.",
    factork: "Multiplicador conforme o tamanho da peça, para cobrar o espaço que ela ocupa no envio.",
    billableweight: "O peso que o correio usa para cobrar; considera o tamanho da peça, não só quanto ela pesa.",
    customsprovision: "Dinheiro reservado para pagar o IVA e a tarifa quando o produto entra no Chile.",
    cif: "Valor do produto mais o frete e o seguro; é a base para calcular os impostos de importação.",
    metafields: "Campos extras que a Shopify permite salvar em cada produto, como seu custo ou o link do fornecedor.",
    sku: "Código interno que identifica cada produto na loja.",
    oem: "Número original da peça, atribuído pelo fabricante do veículo.",
    oauthtoken: "Uma chave temporária que dá permissão para modificar dados na Shopify.",
    ratelimit: "Limite de quantas solicitações por segundo uma API aceita; se você ultrapassa, ela te bloqueia por um momento.",
  },
  fr: {
    n8n: "Un outil pour créer des automatisations en connectant des applications et des étapes, sans tout coder depuis zéro.",
    workflow: "Une séquence d'étapes automatiques qui s'exécute seule quand quelque chose se produit, comme une vente.",
    scraping: "Extraire automatiquement des informations d'une page web, comme des titres et des prix.",
    api: "Une « porte » qui permet à deux programmes de communiquer et de s'échanger des données.",
    gemini: "Le modèle d'intelligence artificielle de Google que j'utilise pour traduire et classer les produits.",
    json: "Un format de texte organisé en champs (par exemple, « titre », « poids », « statut »), facile à lire pour un programme.",
    deterministic: "Une règle fixe qui donne toujours le même résultat ; contrairement à l'IA, elle n'a pas d'avis et ne se trompe pas différemment à chaque fois.",
    docker: "Un outil qui empaquette un programme avec tout ce dont il a besoin pour fonctionner de la même façon sur n'importe quel serveur.",
    vps: "Un serveur virtuel loué dans le cloud, allumé 24 heures sur 24.",
    selfhosted: "Installé sur mon propre serveur, plutôt que de payer un service externe pour l'utiliser.",
    staging: "Un endroit intermédiaire où les données sont stockées avant d'être traitées.",
    landedcost: "Ce que coûte le produit une fois arrivé au Chili, en additionnant l'achat, les envois et les taxes.",
    factork: "Un multiplicateur basé sur la taille de la pièce, pour facturer l'espace qu'elle occupe dans l'envoi.",
    billableweight: "Le poids que la poste utilise pour facturer ; il tient compte de la taille de la pièce, pas seulement de son poids.",
    customsprovision: "Argent mis de côté pour payer la TVA et les droits quand le produit entre au Chili.",
    cif: "La valeur du produit plus le fret et l'assurance ; c'est la base pour calculer les taxes d'importation.",
    metafields: "Des champs supplémentaires que Shopify permet d'enregistrer sur chaque produit, comme son coût ou le lien du fournisseur.",
    sku: "Un code interne qui identifie chaque produit dans la boutique.",
    oem: "Le numéro d'origine de la pièce, attribué par le fabricant du véhicule.",
    oauthtoken: "Une clé temporaire qui autorise à modifier des données sur Shopify.",
    ratelimit: "La limite du nombre de requêtes par seconde qu'accepte une API ; la dépasser vous bloque pendant un moment.",
  },
};

const rlGlossPopover = document.getElementById("glossPopover");
const rlGlossPopoverTerm = document.getElementById("glossPopoverTerm");
const rlGlossPopoverDef = document.getElementById("glossPopoverDef");
var rlGlossActiveBtn = null;
var rlGlossCloseTimer = null;

function rlGlossCancelCloseTimer(){
  if (rlGlossCloseTimer){ clearTimeout(rlGlossCloseTimer); rlGlossCloseTimer = null; }
}

function rlGlossClose(){
  rlGlossCancelCloseTimer();
  if (!rlGlossActiveBtn) return;
  rlGlossPopover.classList.remove("show");
  rlGlossPopover.setAttribute("aria-hidden", "true");
  rlGlossActiveBtn.setAttribute("aria-expanded", "false");
  rlGlossActiveBtn = null;
}

function rlGlossScheduleClose(){
  rlGlossCancelCloseTimer();
  rlGlossCloseTimer = setTimeout(rlGlossClose, 250);
}

function rlGlossPosition(btn){
  const margin = 16;
  const rect = btn.getBoundingClientRect();
  const popW = Math.min(320, window.innerWidth - margin * 2);
  rlGlossPopover.style.width = popW + "px";
  const popH = rlGlossPopover.offsetHeight;
  let left = rect.left;
  if (left + popW > window.innerWidth - margin) left = window.innerWidth - margin - popW;
  if (left < margin) left = margin;
  let top = rect.bottom + 8;
  if (top + popH > window.innerHeight - margin){
    const above = rect.top - 8 - popH;
    top = above > margin ? above : Math.max(margin, window.innerHeight - margin - popH);
  }
  rlGlossPopover.style.left = left + "px";
  rlGlossPopover.style.top = top + "px";
}

function rlGlossOpen(btn){
  rlGlossCancelCloseTimer();
  if (rlGlossActiveBtn === btn) return;
  if (rlGlossActiveBtn) rlGlossClose();
  const term = btn.getAttribute("data-term");
  const lang = document.documentElement.getAttribute("lang") || "es";
  const dict = rlGlossaryDefs[lang] || rlGlossaryDefs.es;
  const def = dict[term] || (rlGlossaryDefs.es[term] || "");
  rlGlossPopoverTerm.textContent = btn.textContent;
  rlGlossPopoverDef.textContent = def;
  rlGlossActiveBtn = btn;
  btn.setAttribute("aria-expanded", "true");
  rlGlossPopover.setAttribute("aria-hidden", "false");
  rlGlossPopover.classList.add("show");
  rlGlossPosition(btn);
}

if (rlGlossPopover){
  // Clic / toque: abre (útil en celular, donde no hay hover)
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".gloss");
    if (btn){
      e.preventDefault();
      rlGlossOpen(btn);
      return;
    }
    if (e.target.closest("#glossPopover")){
      if (e.target.closest(".gloss-popover-close")) rlGlossClose();
      return;
    }
    if (rlGlossActiveBtn) rlGlossClose();
  });

  // Pasar el mouse: abre: al salir del término o de la ventana, se cierra con una pequeña demora
  document.addEventListener("mouseover", (e) => {
    const btn = e.target.closest(".gloss");
    if (btn){ rlGlossOpen(btn); return; }
    if (e.target.closest("#glossPopover")) rlGlossCancelCloseTimer();
  });
  document.addEventListener("mouseout", (e) => {
    const leavingGloss = e.target.closest(".gloss");
    const leavingPopover = e.target.closest("#glossPopover");
    if (!leavingGloss && !leavingPopover) return;
    const to = e.relatedTarget;
    if (to && to.closest && (to.closest(".gloss") || to.closest("#glossPopover"))) return;
    rlGlossScheduleClose();
  });

  // Teclado: foco abre (accesible sin mouse), perder el foco cierra
  document.addEventListener("focusin", (e) => {
    const btn = e.target.closest(".gloss");
    if (btn) rlGlossOpen(btn);
  });
  document.addEventListener("focusout", (e) => {
    if (e.target.closest(".gloss")) rlGlossScheduleClose();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && rlGlossActiveBtn){
      const btn = rlGlossActiveBtn;
      rlGlossClose();
      btn.focus();
    }
  });

  document.addEventListener("scroll", () => { if (rlGlossActiveBtn) rlGlossClose(); }, { passive: true, capture: true });
  window.addEventListener("resize", () => { if (rlGlossActiveBtn) rlGlossClose(); });
}

/* ==========================================================
   Video de fondo del hero: solo se carga en pantallas anchas
   y si el usuario no pide reducir movimiento
   ========================================================== */
const rlHeroVideo = document.getElementById("rlHeroVideo");
if (rlHeroVideo){
  const rlWantsVideo = window.matchMedia("(min-width: 721px)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (rlWantsVideo){
    const source = document.createElement("source");
    source.src = "img/hero-loop.mp4";
    source.type = "video/mp4";
    rlHeroVideo.appendChild(source);
    rlHeroVideo.load();
    rlHeroVideo.play().catch(() => {});
  }
}
