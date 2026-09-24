/* ==========================================================
   Traducciones
   ========================================================== */
const rlTranslations = {
  es: {
    back_link: "&larr; Volver al portafolio",
    hero_eyebrow: "Caso · Automatización e-commerce · Brasil → Chile",
    hero_title: "Una tienda de repuestos en piloto automático",
    hero_lede: "Cómo automaticé Repuestolandia, mi tienda Shopify de repuestos importados desde Brasil, con n8n, Gemini y un servidor Linux de 5 USD al mes. Catálogo, traducción, filtros, precio con envío incluido, colecciones, metacampos, stock y registro de cada venta. El único paso manual es correr el scraper; desde ahí, todo lo hace n8n.",
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

    h2_problema: "El problema",
    p_problema: "En Chile, conseguir ciertos repuestos es difícil: piezas específicas para Jeep o Fiat que no están en las tiendas locales o que cuestan mucho más de lo razonable. En Brasil, en cambio, esas mismas piezas se consiguen con facilidad, porque muchos de estos modelos se fabrican y se venden allá. Ahí vi la oportunidad de Repuestolandia: traer directamente desde Brasil los repuestos difíciles de encontrar.",
    p_problema_2: "El desafío era la operación. Cada producto viene en portugués, con precio en reales y sin peso ni medidas, y el stock del proveedor cambia sin aviso. Publicar y mantener miles de productos a mano habría requerido un equipo que no tenía. Por eso decidí automatizar todo lo posible desde el primer día, para que un negocio de una sola persona pudiera operar como uno mucho más grande, con costos mínimos.",

    h2_ejemplo: "Antes y después de un producto",
    sub_ejemplo: "Qué entra desde el proveedor y qué termina publicado en Shopify.",
    ba_lbl_before: "Fila scrapeada · Google Sheets",
    ba_lbl_after: "Producto en Shopify",
    dl_titulo: "Título",
    dl_estado_ia: "Estado IA",
    dl_peso: "Peso",
    dl_flete: "Flete int.",
    dl_sku: "SKU",
    dl_etiquetas: "Etiquetas",
    dl_metacampos: "Metacampos",
    dd_peso_val: "2,4 kg real → 4,32 kg cobrable (×1,8)",
    dd_flete_val: "R$133 + R$58,7 × 4,32 = R$386,58",
    dd_size_label: "tamaño",
    demo_note: "Ejemplo ilustrativo: los campos y cálculos son los que genera el flujo; el producto y su peso son de muestra.",

    h2_arquitectura: "Arquitectura",
    sub_arquitectura: "Todo corre en un solo servidor. Google Sheets funciona como base de datos intermedia y como libro de ventas, y Shopify guarda los datos estructurados de cada producto.",
    arch_aria: "Flujo: proveedores brasileños a Google Sheets, a n8n con Gemini, a Shopify; cada venta dispara un chequeo de stock contra el proveedor",
    box1_small: "Fuente · manual",
    box1_body: "Webs de proveedores en Brasil<br>(script en Chrome)",
    box2_small: "Staging",
    box2_body: "Google Sheets<br>(catálogo crudo)",
    box3_small: "Orquestación",
    box3_body: "n8n + API de Gemini",
    box4_small: "Venta",
    box4_body: "Shopify<br>(etiquetas + metacampos)",
    box5_small: "Contabilidad",
    box5_body: "Sheets de ventas<br>(márgenes + seguimiento)",
    loop_text: "Cada venta en Shopify dispara dos flujos: el chequeo de stock en la web del proveedor y el registro de la venta con su desglose en Google Sheets.",
    host_text: "Ubuntu en VPS · Docker Compose · proxy reverso con HTTPS (Let's Encrypt) · subdominio propio vía Cloudflare DNS",

    h2_workflows: "Los tres workflows",

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
    wf1_caption: "Product Catalog Automation, en n8n. Los nodos desactivados los uso para pruebas: limitar a pocos productos, probar filtros y pausas.",
    wf1_pt1: "<strong>Paso previo manual: scraping.</strong> Corro un script de JavaScript en la consola de Chrome que recorre todas las páginas del buscador del proveedor (con <code>fetch</code> + <code>DOMParser</code>) y saca título, precio en BRL, link e imagen. Pego el resultado en Google Sheets, y desde ahí el workflow hace todo lo demás. Lo hice en dos fases (listado y después cada ficha) para leer la imagen real desde <code>og:image</code>, porque en el listado se mezclaban las imágenes de productos vecinos. Adapté selectores para proveedores con distinto HTML.",
    wf1_pt2: "<strong>Gemini</strong> devuelve JSON estructurado: título traducido con terminología chilena, descripción HTML, OEM, marcas compatibles, peso estimado, tamaño y estado. Antes, un diccionario de unos 100 términos técnicos PT→ES asegura que la traducción sea consistente.",
    wf1_pt3: "<strong>Filtro doble.</strong> La IA clasifica por peso y riesgo, y una lista determinística de palabras prohibidas en portugués actúa como respaldo. Sin ella, algunos motores completos se colaban con precios de millones.",
    wf1_pt4: "<strong>Precio:</strong> (costo BRL + flete interno) × tipo de cambio + flete internacional volumétrico + provisión aduanera (IVA + arancel), dividido por 0,60.",
    tbl1_h1: "Regla", tbl1_h2: "Criterio", tbl1_h3: "Resultado",
    tbl1_r1_regla: "Riesgo",
    tbl1_r1_criterio: "Motores completos, cajas de cambio, piezas usadas, fluidos inflamables",
    tbl1_r2_regla: "Peso / tamaño",
    tbl1_r2_criterio: "&gt; 25 kg o &gt; 120 cm",
    tbl1_r2_resultado: "borrador con etiqueta",
    tbl1_r3_regla: "Resto",
    tbl1_r3_criterio: "Piezas permitidas",
    tbl1_r3_resultado: "con flete por Factor K",
    h4_envio: "Estimación del envío por producto",
    p_envio: "Los proveedores no publican peso ni medidas. Gemini estima el <strong>peso real</strong> y clasifica el tamaño de la pieza. Con eso calculo el <strong>peso cobrable</strong> y el flete internacional:",
    formula1_l1: "peso cobrable = peso real × Factor K",
    formula1_l2: "flete = R$133 fijo por paquete + R$58,7 × kg cobrable",
    factor_k_note: "¿Qué es el Factor K? Es un multiplicador según el tamaño de la pieza: las piezas grandes ocupan más espacio en el envío aunque pesen poco, así que se les cobra como si pesaran más. Es la forma de aproximar el peso volumétrico sin medir cada paquete.",
    tbl2_h1: "Tamaño", tbl2_h2: "Ejemplos", tbl2_h3: "Factor K",
    tbl2_r1_tamano: "Alta", tbl2_r1_ejemplos: "Parrillas, parachoques, tableros",
    tbl2_r2_tamano: "Media", tbl2_r2_ejemplos: "Focos, mangueras, espejos",
    tbl2_r3_tamano: "Baja", tbl2_r3_ejemplos: "Depósitos, sensores, pernos",
    tbl2_r1_k: "× 3,5", tbl2_r2_k: "× 1,8", tbl2_r3_k: "× 1,1",
    note_envio: "Calibré la fórmula con boletas reales de envíos por Correios. A propósito, aplico el costo fijo completo a cada producto, aunque en la práctica varios viajan en un mismo paquete. Es un criterio conservador: el margen real sale mejor al consolidar.",
    calc_title: "Prueba tu propio cálculo",
    calc_sub: "Usa la fórmula real del workflow con tus propios números.",
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
    wf2_pt1: "Al entrar un pedido, revisa en vivo cada producto en la web del proveedor. Si está agotado, deja el inventario en 0 en Shopify para que no se vuelva a vender.",
    wf2_pt2: "La detección ignora la sección \"Produtos relacionados\", porque los productos relacionados agotados daban falsos negativos.",

    wf3_title: "3 · Registro de ventas y seguimiento → Google Sheets",
    wf3_c3: "Leer metacampos de costo",
    wf3_c4: "Code: desglose y márgenes",
    wf3_c5: "Code: formato de fila",
    wf3_c6: "Sheets: fila de venta",
    wf3_caption: "Registro de Ventas Google Sheets, en n8n",
    wf3_pt1: "Por cada producto vendido registra una fila en el libro de contabilidad con el producto, el link del proveedor, los datos del comprador y el <strong>desglose completo del precio</strong>. Los costos vienen de los metacampos que guardó el workflow 1, así que no se recalcula nada.",
    wf3_pt2: "La planilla también sirve para <strong>seguir el pedido</strong>, con columnas de fecha y estado para cada tramo del viaje.",

    h4_desglose: "Desglose de cada venta",
    tbl3_h1: "Columna", tbl3_h2: "De dónde sale",
    tbl3_r1: "Costo del producto (BRL y CLP) y tipo de cambio", tbl3_r1b: "Metacampos del producto",
    tbl3_r2: "Envío Brasil → casa del socio", tbl3_r2b: "Flete interno del proveedor",
    tbl3_r3: "Envío Brasil → Chile", tbl3_r3b: "Flete volumétrico (Factor K)",
    tbl3_r4: "Provisión aduanera", tbl3_r4b: "IVA + arancel sobre el CIF",
    tbl3_r5: "Precio de venta", tbl3_r5b: "Pedido de Shopify",
    tbl3_r7: "Nombre, correo y teléfono del cliente", tbl3_r7b: "Pedido de Shopify",

    h4_seguimiento: "Seguimiento del pedido",
    p_seguimiento: "La fila de la venta la crea el workflow. Las fechas de cada tramo las voy completando a medida que avanza el paquete:",
    track1_b: "Venta", track1_s: "automático",
    track2_b: "Compra en Brasil", track2_s: "fecha y hora",
    track3_b: "Llega a casa del socio", track3_s: "fecha",
    track4_b: "Socio lo envía a Chile", track4_s: "Correios",
    track5_b: "Llega a mi casa", track5_s: "aduana lista",
    track6_b: "Enviado al cliente", track6_s: "entrega final",

    h2_shopify: "Shopify como base de datos: etiquetas y metacampos",
    sub_shopify: "No solo publico productos. Cada ficha queda con datos estructurados que ordenan la tienda y alimentan los otros workflows.",
    h4_etiquetas: "Etiquetas → colecciones automáticas",
    p_etiquetas: "Gemini extrae del título las marcas compatibles, sin inventarlas, como un arreglo. Cada marca se guarda como etiqueta, y las colecciones inteligentes de Shopify (Jeep, Fiat, RAM…) se llenan solas. Una pieza compatible con varias marcas aparece en todas sus colecciones.",
    note_etiquetas: "La etiqueta <code>COTIZAR</code> marca las piezas grandes o pesadas. Se publican como borrador con aviso de cotizar el envío, en vez de sacarlas del catálogo.",
    h4_variante: "Variante lista para operar",
    p_variante: "El producto se crea con la API REST de Shopify, no con el nodo nativo de n8n, para controlar la variante completa:",
    pv1: "<strong>SKU</strong> = número OEM, que también va en el título para mejorar la búsqueda.",
    pv2: "<strong>Peso</strong> real en kg.",
    pv3: "<strong>Inventario</strong> gestionado por Shopify. Como vendo bajo pedido, parte disponible, y el workflow 2 lo baja a 0 si el proveedor se queda sin stock.",
    h4_meta: "Metacampos por producto",
    p_meta: "Cada producto se publica con siete metacampos. Definí cada uno en Shopify para que se vean en el panel de administración.",
    tbl4_h1: "Metacampo", tbl4_h2: "Tipo", tbl4_h3: "Para qué sirve",
    tbl4_r1: "Link a la ficha del proveedor. Lo usa el workflow 2 para revisar el stock.",
    tbl4_r2: "Precio de compra en reales",
    tbl4_r3: "Tipo de cambio BRL→CLP usado al calcular",
    tbl4_r4: "Costo del producto convertido a pesos",
    tbl4_r5: "Flete Brasil→Chile según peso cobrable",
    tbl4_r6: "Provisión de IVA + arancel",
    tbl4_r7: "Costo total puesto en Chile. Con él, el workflow 3 calcula los márgenes de cada venta.",
    tipo_texto: "Texto",
    note_meta: "Con esto, cada pedido trae su desglose de costos sin volver a calcular nada, y el workflow 3 lo pasa directo a la contabilidad.",

    h2_aprendizajes: "Lo que aprendí resolviendo bugs",
    lesson1_h: "Emparejamiento de items en n8n",
    lesson1_p: "Con nodos Filter e If en la cadena, referenciar por índice mezclaba títulos, precios e imágenes de productos distintos. Lo resolví usando el rastreo de items de n8n (<code>.item</code>) en vez de índices.",
    lesson2_h: "La IA no basta sola",
    lesson2_p: "Gemini clasifica bien casi siempre, pero en e-commerce un error cuesta caro. Por eso toda decisión crítica tiene además una regla determinística.",
    lesson3_h: "Permisos, tokens y metacampos",
    lesson3_p: "Configuré los scopes de la app (write_inventory), pido un token nuevo en cada ejecución y agregué pausas entre llamadas para no chocar con el límite de la API de Shopify. Además, los metacampos solo aparecen en el panel si antes creas su definición.",
    lesson4_h: "Costo mínimo, control máximo",
    lesson4_p: "Uso n8n self-hosted en lugar de SaaS por ejecución. Con 5 USD al mes corren flujos ilimitados, y solo pago por uso la API de Gemini.",
    more_coming_lead: "Planeo seguir haciendo crecer este proyecto — vienen muchas cosas más.",
    more_coming_punch: "Esto es solo el comienzo.",
    contact_title: "Conversemos",
    contact_text: "Si quieres conversar sobre una oportunidad, un proyecto o simplemente saludar, escríbeme.",
    contact_copied: "¡Copiado!",

    footer_stack: "Stack: n8n · Docker · Ubuntu · Google Sheets API · Gemini API · Shopify Admin API · JavaScript · Cloudflare DNS"
  },

  en: {
    back_link: "&larr; Back to portfolio",
    hero_eyebrow: "Case study · E-commerce automation · Brazil → Chile",
    hero_title: "An auto-parts store on autopilot",
    hero_lede: "How I automated Repuestolandia, my Shopify store for auto parts imported from Brazil, using n8n, Gemini, and a $5/month Linux server. Catalog, translation, filters, shipping-inclusive pricing, collections, metafields, stock, and a record of every sale. The only manual step is running the scraper; n8n handles everything from there.",
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

    h2_problema: "The problem",
    p_problema: "I sell auto parts in Chile that I buy from Brazilian auto-parts stores. Every product arrives in Portuguese, priced in reais, with no clear weight, dimensions, or brand. On top of that, the supplier can run out of stock at any moment. Doing it by hand meant translating, estimating shipping, calculating the landed cost in Chile, and sorting thousands of listings by brand — plus checking daily whether they were still available.",
    p_problema_2: "The real challenge was operations. Every product arrived in Portuguese, priced in reais, with no weight or dimensions, and the supplier's stock could change without notice. Publishing and maintaining thousands of listings by hand would have required a team I didn't have. So I decided to automate as much as possible from day one, so a one-person business could operate like a much bigger one, at minimal cost.",

    h2_ejemplo: "A product, before and after",
    sub_ejemplo: "What comes in from the supplier and what ends up published on Shopify.",
    ba_lbl_before: "Scraped row · Google Sheets",
    ba_lbl_after: "Product on Shopify",
    dl_titulo: "Title",
    dl_estado_ia: "AI status",
    dl_peso: "Weight",
    dl_flete: "Int'l freight",
    dl_sku: "SKU",
    dl_etiquetas: "Tags",
    dl_metacampos: "Metafields",
    dd_peso_val: "2.4 kg actual → 4.32 kg billable (×1.8)",
    dd_flete_val: "R$133 + R$58.7 × 4.32 = R$386.58",
    dd_size_label: "size",
    demo_note: "Illustrative example: the fields and calculations are the ones the flow actually generates; the product and its weight are a sample.",

    h2_arquitectura: "Architecture",
    sub_arquitectura: "Everything runs on a single server. Google Sheets works as an intermediate database and as the sales ledger, and Shopify stores the structured data for each product.",
    arch_aria: "Flow: Brazilian suppliers to Google Sheets, to n8n with Gemini, to Shopify; every sale triggers a stock check against the supplier",
    box1_small: "Source · manual",
    box1_body: "Brazilian supplier websites<br>(Chrome script)",
    box2_small: "Staging",
    box2_body: "Google Sheets<br>(raw catalog)",
    box3_small: "Orchestration",
    box3_body: "n8n + Gemini API",
    box4_small: "Sale",
    box4_body: "Shopify<br>(tags + metafields)",
    box5_small: "Accounting",
    box5_body: "Sales sheet<br>(margins + tracking)",
    loop_text: "Every sale on Shopify triggers two flows: the stock check on the supplier's website, and logging the sale with its full breakdown in Google Sheets.",
    host_text: "Ubuntu on a VPS · Docker Compose · reverse proxy with HTTPS (Let's Encrypt) · own subdomain via Cloudflare DNS",

    h2_workflows: "The three workflows",

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
    wf1_caption: "Product Catalog Automation, in n8n. The disabled nodes are ones I use for testing: capping the run to a few products, trying out filters and pauses.",
    wf1_pt1: "<strong>Manual step upfront: scraping.</strong> I run a JavaScript script in the Chrome console that walks every page of the supplier's search results (using <code>fetch</code> + <code>DOMParser</code>) and pulls the title, price in BRL, link, and image. I paste the result into Google Sheets, and from there the workflow does everything else. I split it into two passes (listing, then each product page) to read the real image from <code>og:image</code>, because on the listing page neighboring products' images got mixed up. I adapted the selectors for suppliers with different HTML.",
    wf1_pt2: "<strong>Gemini</strong> returns structured JSON: a title translated with Chilean terminology, an HTML description, the OEM number, compatible brands, estimated weight, size, and status. Before that, a dictionary of about 100 technical PT→ES terms keeps the translation consistent.",
    wf1_pt3: "<strong>Double filter.</strong> The AI classifies by weight and risk, and a deterministic list of banned Portuguese words acts as a backstop. Without it, a few whole engines slipped through priced in the millions.",
    wf1_pt4: "<strong>Price:</strong> (BRL cost + domestic freight) × exchange rate + volumetric international freight + customs provision (VAT + duty), divided by 0.60.",
    tbl1_h1: "Rule", tbl1_h2: "Criterion", tbl1_h3: "Result",
    tbl1_r1_regla: "Risk",
    tbl1_r1_criterio: "Whole engines, gearboxes, used parts, flammable fluids",
    tbl1_r2_regla: "Weight / size",
    tbl1_r2_criterio: "&gt; 25 kg or &gt; 120 cm",
    tbl1_r2_resultado: "draft with tag",
    tbl1_r3_regla: "Everything else",
    tbl1_r3_criterio: "Allowed parts",
    tbl1_r3_resultado: "with Factor K freight",
    h4_envio: "Estimating shipping per product",
    p_envio: "Suppliers don't publish weight or dimensions. Gemini estimates the <strong>actual weight</strong> and classifies the part's size. From that I calculate the <strong>billable weight</strong> and the international freight:",
    formula1_l1: "billable weight = actual weight × Factor K",
    formula1_l2: "freight = R$133 flat per package + R$58.7 × billable kg",
    factor_k_note: "What's Factor K? It's a multiplier based on the part's size: large parts take up more room in the shipment even if they don't weigh much, so they get charged as if they weighed more. It's a way to approximate volumetric (dimensional) weight without measuring every package.",
    tbl2_h1: "Size", tbl2_h2: "Examples", tbl2_h3: "Factor K",
    tbl2_r1_tamano: "Large", tbl2_r1_ejemplos: "Grilles, bumpers, dashboards",
    tbl2_r2_tamano: "Medium", tbl2_r2_ejemplos: "Headlights, hoses, mirrors",
    tbl2_r3_tamano: "Small", tbl2_r3_ejemplos: "Reservoirs, sensors, bolts",
    tbl2_r1_k: "× 3.5", tbl2_r2_k: "× 1.8", tbl2_r3_k: "× 1.1",
    note_envio: "I calibrated the formula against real Correios shipping receipts. On purpose, I apply the full flat cost to every product, even though in practice several travel in the same package. It's a conservative assumption — the real margin comes out better once you consolidate.",
    calc_title: "Try your own calculation",
    calc_sub: "Use the workflow's real formula with your own numbers.",
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
    wf2_pt1: "When an order comes in, it checks each product live on the supplier's website. If it's out of stock, it sets the inventory to 0 on Shopify so it can't be sold again.",
    wf2_pt2: "The detection ignores the \"Produtos relacionados\" (related products) section, because out-of-stock related products were causing false negatives.",

    wf3_title: "3 · Sales logging and tracking → Google Sheets",
    wf3_c3: "Read cost metafields",
    wf3_c4: "Code: breakdown and margins",
    wf3_c5: "Code: row formatting",
    wf3_c6: "Sheets: sale row",
    wf3_caption: "Sales Log to Google Sheets, in n8n",
    wf3_pt1: "For every product sold, it logs a row in the accounting ledger with the product, the supplier's link, the buyer's details, and the <strong>full price breakdown</strong>. The costs come from the metafields workflow 1 saved, so nothing gets recalculated.",
    wf3_pt2: "The spreadsheet also works for <strong>tracking the order</strong>, with date and status columns for each leg of the journey.",

    h4_desglose: "Breaking down each sale",
    tbl3_h1: "Column", tbl3_h2: "Where it comes from",
    tbl3_r1: "Product cost (BRL and CLP) and exchange rate", tbl3_r1b: "Product metafields",
    tbl3_r2: "Shipping Brazil → partner's house", tbl3_r2b: "Supplier's domestic freight",
    tbl3_r3: "Shipping Brazil → Chile", tbl3_r3b: "Volumetric freight (Factor K)",
    tbl3_r4: "Customs provision", tbl3_r4b: "VAT + duty on the CIF value",
    tbl3_r5: "Sale price", tbl3_r5b: "Shopify order",
    tbl3_r7: "Customer name, email, and phone", tbl3_r7b: "Shopify order",

    h4_seguimiento: "Order tracking",
    p_seguimiento: "The workflow creates the sale row. I fill in the date for each leg as the package moves along:",
    track1_b: "Sale", track1_s: "automatic",
    track2_b: "Purchased in Brazil", track2_s: "date and time",
    track3_b: "Arrives at partner's house", track3_s: "date",
    track4_b: "Partner ships to Chile", track4_s: "Correios",
    track5_b: "Arrives at my place", track5_s: "customs cleared",
    track6_b: "Shipped to customer", track6_s: "final delivery",

    h2_shopify: "Shopify as a database: tags and metafields",
    sub_shopify: "I don't just publish products. Every listing carries structured data that keeps the store organized and feeds the other workflows.",
    h4_etiquetas: "Tags → automatic collections",
    p_etiquetas: "Gemini extracts the compatible brands from the title, without inventing any, as an array. Each brand is saved as a tag, and Shopify's smart collections (Jeep, Fiat, RAM…) fill themselves in. A part compatible with several brands shows up in all of its collections.",
    note_etiquetas: "The <code>COTIZAR</code> tag marks large or heavy parts. They get published as a draft with a note to quote the shipping, instead of being left out of the catalog.",
    h4_variante: "A variant ready to operate",
    p_variante: "The product is created with Shopify's REST API, not n8n's native node, so I can control the full variant:",
    pv1: "<strong>SKU</strong> = the OEM number, which also goes in the title to improve search.",
    pv2: "<strong>Weight</strong> in real kg.",
    pv3: "<strong>Inventory</strong> managed by Shopify. Since I sell to order, it starts as available, and workflow 2 drops it to 0 if the supplier runs out of stock.",
    h4_meta: "Metafields per product",
    p_meta: "Every product is published with seven metafields. I defined each one in Shopify so they show up in the admin panel.",
    tbl4_h1: "Metafield", tbl4_h2: "Type", tbl4_h3: "What it's for",
    tbl4_r1: "Link to the supplier's product page. Workflow 2 uses it to check stock.",
    tbl4_r2: "Purchase price in reais",
    tbl4_r3: "BRL→CLP exchange rate used in the calculation",
    tbl4_r4: "Product cost converted to Chilean pesos",
    tbl4_r5: "Brazil→Chile freight based on billable weight",
    tbl4_r6: "VAT + duty provision",
    tbl4_r7: "Total landed cost in Chile. Workflow 3 uses it to calculate each sale's margins.",
    tipo_texto: "Text",
    note_meta: "With this, every order comes with its cost breakdown without recalculating anything, and workflow 3 sends it straight to accounting.",

    h2_aprendizajes: "What I learned fixing bugs",
    lesson1_h: "Matching items across nodes in n8n",
    lesson1_p: "With Filter and If nodes in the chain, referencing by index mixed up titles, prices, and images across different products. I fixed it by using n8n's item-linking (<code>.item</code>) instead of indexes.",
    lesson2_h: "AI alone isn't enough",
    lesson2_p: "Gemini classifies well almost all the time, but in e-commerce a single mistake gets expensive. That's why every critical decision also has a deterministic rule behind it.",
    lesson3_h: "Permissions, tokens, and metafields",
    lesson3_p: "I configured the app's scopes (write_inventory), request a fresh token on every run, and added pauses between calls to avoid hitting Shopify's API rate limit. Also, metafields only show up in the admin panel once you've created their definition beforehand.",
    lesson4_h: "Minimum cost, maximum control",
    lesson4_p: "I use self-hosted n8n instead of paying per execution on a SaaS plan. For $5 a month I run unlimited flows, and the only thing I pay for by usage is the Gemini API.",
    more_coming_lead: "I plan to keep growing this project — there's a lot more coming.",
    more_coming_punch: "This is just the beginning.",
    contact_title: "Let's talk",
    contact_text: "If you'd like to discuss an opportunity, a project, or just say hi, reach out.",
    contact_copied: "Copied!",

    footer_stack: "Stack: n8n · Docker · Ubuntu · Google Sheets API · Gemini API · Shopify Admin API · JavaScript · Cloudflare DNS"
  },

  pt: {
    back_link: "&larr; Voltar ao portfólio",
    hero_eyebrow: "Caso · Automação de e-commerce · Brasil → Chile",
    hero_title: "Uma loja de autopeças no piloto automático",
    hero_lede: "Como automatizei a Repuestolandia, minha loja Shopify de autopeças importadas do Brasil, usando n8n, Gemini e um servidor Linux de 5 USD por mês. Catálogo, tradução, filtros, preço com frete incluído, coleções, metacampos, estoque e registro de cada venda. O único passo manual é rodar o scraper; a partir daí, o n8n faz tudo.",
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

    h2_problema: "O problema",
    p_problema: "Vendo no Chile autopeças que compro em lojas de autopeças brasileiras. Cada produto chega em português, com preço em reais e sem peso, medidas ou marca clara. Além disso, o fornecedor pode ficar sem estoque a qualquer momento. Fazer isso manualmente significava traduzir, estimar o frete, calcular o custo total no Chile e organizar milhares de fichas por marca, além de checar diariamente se ainda estavam disponíveis.",
    p_problema_2: "O desafio era a operação. Cada produto chega em português, com preço em reais e sem peso nem medidas, e o estoque do fornecedor muda sem aviso. Publicar e manter milhares de produtos manualmente exigiria uma equipe que eu não tinha. Por isso decidi automatizar o máximo possível desde o primeiro dia, para que um negócio de uma só pessoa pudesse operar como um muito maior, com custos mínimos.",

    h2_ejemplo: "Um produto, antes e depois",
    sub_ejemplo: "O que entra do fornecedor e o que termina publicado na Shopify.",
    ba_lbl_before: "Linha raspada · Google Sheets",
    ba_lbl_after: "Produto na Shopify",
    dl_titulo: "Título",
    dl_estado_ia: "Status da IA",
    dl_peso: "Peso",
    dl_flete: "Frete int.",
    dl_sku: "SKU",
    dl_etiquetas: "Tags",
    dl_metacampos: "Metacampos",
    dd_peso_val: "2,4 kg real → 4,32 kg cobrável (×1,8)",
    dd_flete_val: "R$133 + R$58,7 × 4,32 = R$386,58",
    dd_size_label: "tamanho",
    demo_note: "Exemplo ilustrativo: os campos e cálculos são os que o fluxo realmente gera; o produto e seu peso são de amostra.",

    h2_arquitectura: "Arquitetura",
    sub_arquitectura: "Tudo roda em um único servidor. O Google Sheets funciona como banco de dados intermediário e como livro de vendas, e a Shopify guarda os dados estruturados de cada produto.",
    arch_aria: "Fluxo: fornecedores brasileiros para o Google Sheets, para o n8n com Gemini, para a Shopify; cada venda dispara uma checagem de estoque contra o fornecedor",
    box1_small: "Fonte · manual",
    box1_body: "Sites de fornecedores no Brasil<br>(script no Chrome)",
    box2_small: "Staging",
    box2_body: "Google Sheets<br>(catálogo bruto)",
    box3_small: "Orquestração",
    box3_body: "n8n + API do Gemini",
    box4_small: "Venda",
    box4_body: "Shopify<br>(tags + metacampos)",
    box5_small: "Contabilidade",
    box5_body: "Sheets de vendas<br>(margens + acompanhamento)",
    loop_text: "Cada venda na Shopify dispara dois fluxos: a checagem de estoque no site do fornecedor e o registro da venda com seu detalhamento no Google Sheets.",
    host_text: "Ubuntu em VPS · Docker Compose · proxy reverso com HTTPS (Let's Encrypt) · subdomínio próprio via Cloudflare DNS",

    h2_workflows: "Os três workflows",

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
    wf1_caption: "Product Catalog Automation, no n8n. Os nós desativados eu uso para testes: limitar a poucos produtos, testar filtros e pausas.",
    wf1_pt1: "<strong>Passo manual prévio: scraping.</strong> Rodo um script JavaScript no console do Chrome que percorre todas as páginas do buscador do fornecedor (com <code>fetch</code> + <code>DOMParser</code>) e extrai título, preço em BRL, link e imagem. Colo o resultado no Google Sheets, e a partir daí o workflow faz todo o resto. Fiz em duas fases (listagem e depois cada ficha) para ler a imagem real a partir de <code>og:image</code>, porque na listagem as imagens de produtos vizinhos se misturavam. Adaptei os seletores para fornecedores com HTML diferente.",
    wf1_pt2: "O <strong>Gemini</strong> devolve um JSON estruturado: título traduzido com terminologia chilena, descrição em HTML, OEM, marcas compatíveis, peso estimado, tamanho e status. Antes disso, um dicionário de cerca de 100 termos técnicos PT→ES garante que a tradução seja consistente.",
    wf1_pt3: "<strong>Filtro duplo.</strong> A IA classifica por peso e risco, e uma lista determinística de palavras proibidas em português age como reforço. Sem ela, alguns motores completos passavam com preços na casa dos milhões.",
    wf1_pt4: "<strong>Preço:</strong> (custo em BRL + frete interno) × taxa de câmbio + frete internacional volumétrico + provisão aduaneira (IVA + tarifa), dividido por 0,60.",
    tbl1_h1: "Regra", tbl1_h2: "Critério", tbl1_h3: "Resultado",
    tbl1_r1_regla: "Risco",
    tbl1_r1_criterio: "Motores completos, câmbios, peças usadas, fluidos inflamáveis",
    tbl1_r2_regla: "Peso / tamanho",
    tbl1_r2_criterio: "&gt; 25 kg ou &gt; 120 cm",
    tbl1_r2_resultado: "rascunho com tag",
    tbl1_r3_regla: "Resto",
    tbl1_r3_criterio: "Peças permitidas",
    tbl1_r3_resultado: "com frete pelo Factor K",
    h4_envio: "Estimativa de frete por produto",
    p_envio: "Os fornecedores não publicam peso nem medidas. O Gemini estima o <strong>peso real</strong> e classifica o tamanho da peça. Com isso calculo o <strong>peso cobrável</strong> e o frete internacional:",
    formula1_l1: "peso cobrável = peso real × Factor K",
    formula1_l2: "frete = R$133 fixo por pacote + R$58,7 × kg cobrável",
    factor_k_note: "O que é o Factor K? É um multiplicador conforme o tamanho da peça: peças grandes ocupam mais espaço no envio mesmo pesando pouco, então são cobradas como se pesassem mais. É a forma de aproximar o peso volumétrico sem medir cada pacote.",
    tbl2_h1: "Tamanho", tbl2_h2: "Exemplos", tbl2_h3: "Factor K",
    tbl2_r1_tamano: "Alta", tbl2_r1_ejemplos: "Grades, para-choques, painéis",
    tbl2_r2_tamano: "Média", tbl2_r2_ejemplos: "Faróis, mangueiras, espelhos",
    tbl2_r3_tamano: "Baixa", tbl2_r3_ejemplos: "Reservatórios, sensores, parafusos",
    tbl2_r1_k: "× 3,5", tbl2_r2_k: "× 1,8", tbl2_r3_k: "× 1,1",
    note_envio: "Calibrei a fórmula com recibos reais de envios pelos Correios. De propósito, aplico o custo fixo completo a cada produto, mesmo que na prática vários viajem no mesmo pacote. É um critério conservador: a margem real sai melhor ao consolidar.",
    calc_title: "Teste seu próprio cálculo",
    calc_sub: "Use a fórmula real do workflow com seus próprios números.",
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
    wf2_pt1: "Quando um pedido entra, ele checa ao vivo cada produto no site do fornecedor. Se estiver esgotado, zera o estoque na Shopify para não ser vendido de novo.",
    wf2_pt2: "A detecção ignora a seção \"Produtos relacionados\", porque produtos relacionados esgotados geravam falsos negativos.",

    wf3_title: "3 · Registro de vendas e acompanhamento → Google Sheets",
    wf3_c3: "Ler metacampos de custo",
    wf3_c4: "Code: detalhamento e margens",
    wf3_c5: "Code: formatação da linha",
    wf3_c6: "Sheets: linha de venda",
    wf3_caption: "Registro de Vendas Google Sheets, no n8n",
    wf3_pt1: "Para cada produto vendido, registra uma linha no livro de contabilidade com o produto, o link do fornecedor, os dados do comprador e o <strong>detalhamento completo do preço</strong>. Os custos vêm dos metacampos salvos pelo workflow 1, então nada é recalculado.",
    wf3_pt2: "A planilha também serve para <strong>acompanhar o pedido</strong>, com colunas de data e status para cada etapa do trajeto.",

    h4_desglose: "Detalhamento de cada venda",
    tbl3_h1: "Coluna", tbl3_h2: "De onde vem",
    tbl3_r1: "Custo do produto (BRL e CLP) e taxa de câmbio", tbl3_r1b: "Metacampos do produto",
    tbl3_r2: "Envio Brasil → casa do sócio", tbl3_r2b: "Frete interno do fornecedor",
    tbl3_r3: "Envio Brasil → Chile", tbl3_r3b: "Frete volumétrico (Factor K)",
    tbl3_r4: "Provisão aduaneira", tbl3_r4b: "IVA + tarifa sobre o CIF",
    tbl3_r5: "Preço de venda", tbl3_r5b: "Pedido da Shopify",
    tbl3_r7: "Nome, e-mail e telefone do cliente", tbl3_r7b: "Pedido da Shopify",

    h4_seguimiento: "Acompanhamento do pedido",
    p_seguimiento: "A linha da venda é criada pelo workflow. As datas de cada etapa eu vou preenchendo conforme o pacote avança:",
    track1_b: "Venda", track1_s: "automático",
    track2_b: "Compra no Brasil", track2_s: "data e hora",
    track3_b: "Chega na casa do sócio", track3_s: "data",
    track4_b: "Sócio envia ao Chile", track4_s: "Correios",
    track5_b: "Chega na minha casa", track5_s: "alfândega liberada",
    track6_b: "Enviado ao cliente", track6_s: "entrega final",

    h2_shopify: "Shopify como banco de dados: tags e metacampos",
    sub_shopify: "Não só publico produtos. Cada ficha fica com dados estruturados que organizam a loja e alimentam os outros workflows.",
    h4_etiquetas: "Tags → coleções automáticas",
    p_etiquetas: "O Gemini extrai do título as marcas compatíveis, sem inventá-las, como um array. Cada marca é salva como tag, e as coleções inteligentes da Shopify (Jeep, Fiat, RAM…) se preenchem sozinhas. Uma peça compatível com várias marcas aparece em todas as suas coleções.",
    note_etiquetas: "A tag <code>COTIZAR</code> marca as peças grandes ou pesadas. Elas são publicadas como rascunho com aviso para cotar o frete, em vez de saírem do catálogo.",
    h4_variante: "Variante pronta para operar",
    p_variante: "O produto é criado com a API REST da Shopify, não com o nó nativo do n8n, para controlar a variante por completo:",
    pv1: "<strong>SKU</strong> = número OEM, que também vai no título para melhorar a busca.",
    pv2: "<strong>Peso</strong> real em kg.",
    pv3: "<strong>Estoque</strong> gerenciado pela Shopify. Como vendo sob encomenda, parte disponível, e o workflow 2 zera se o fornecedor ficar sem estoque.",
    h4_meta: "Metacampos por produto",
    p_meta: "Cada produto é publicado com sete metacampos. Defini cada um na Shopify para que apareçam no painel de administração.",
    tbl4_h1: "Metacampo", tbl4_h2: "Tipo", tbl4_h3: "Para que serve",
    tbl4_r1: "Link para a ficha do fornecedor. O workflow 2 usa para checar o estoque.",
    tbl4_r2: "Preço de compra em reais",
    tbl4_r3: "Taxa de câmbio BRL→CLP usada no cálculo",
    tbl4_r4: "Custo do produto convertido para pesos chilenos",
    tbl4_r5: "Frete Brasil→Chile conforme o peso cobrável",
    tbl4_r6: "Provisão de IVA + tarifa",
    tbl4_r7: "Custo total no Chile. Com ele, o workflow 3 calcula as margens de cada venda.",
    tipo_texto: "Texto",
    note_meta: "Com isso, cada pedido traz seu detalhamento de custos sem recalcular nada, e o workflow 3 passa direto para a contabilidade.",

    h2_aprendizajes: "O que aprendi resolvendo bugs",
    lesson1_h: "Pareamento de itens no n8n",
    lesson1_p: "Com nós Filter e If na cadeia, referenciar por índice misturava títulos, preços e imagens de produtos diferentes. Resolvi usando o rastreamento de itens do n8n (<code>.item</code>) em vez de índices.",
    lesson2_h: "A IA sozinha não basta",
    lesson2_p: "O Gemini classifica bem quase sempre, mas em e-commerce um erro sai caro. Por isso toda decisão crítica também tem uma regra determinística por trás.",
    lesson3_h: "Permissões, tokens e metacampos",
    lesson3_p: "Configurei os scopes do app (write_inventory), peço um token novo a cada execução e adicionei pausas entre chamadas para não esbarrar no limite da API da Shopify. Além disso, os metacampos só aparecem no painel se antes você criar sua definição.",
    lesson4_h: "Custo mínimo, controle máximo",
    lesson4_p: "Uso n8n self-hosted em vez de SaaS por execução. Com 5 USD por mês rodam fluxos ilimitados, e só pago por uso a API do Gemini.",
    more_coming_lead: "Pretendo continuar fazendo esse projeto crescer — vêm muitas coisas mais por aí.",
    more_coming_punch: "Isso é só o começo.",
    contact_title: "Vamos conversar",
    contact_text: "Se quiser falar sobre uma oportunidade, um projeto, ou só dizer olá, me escreva.",
    contact_copied: "Copiado!",

    footer_stack: "Stack: n8n · Docker · Ubuntu · Google Sheets API · Gemini API · Shopify Admin API · JavaScript · Cloudflare DNS"
  },

  fr: {
    back_link: "&larr; Retour au portfolio",
    hero_eyebrow: "Étude de cas · Automatisation e-commerce · Brésil → Chili",
    hero_title: "Une boutique de pièces automobiles en pilote automatique",
    hero_lede: "Comment j'ai automatisé Repuestolandia, ma boutique Shopify de pièces automobiles importées du Brésil, avec n8n, Gemini et un serveur Linux à 5 USD par mois. Catalogue, traduction, filtres, prix livraison incluse, collections, métachamps, stock et enregistrement de chaque vente. La seule étape manuelle consiste à lancer le scraper ; à partir de là, n8n s'occupe de tout.",
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

    h2_problema: "Le problème",
    p_problema: "Je vends au Chili des pièces automobiles que j'achète dans des magasins de pièces détachées brésiliens. Chaque produit arrive en portugais, avec un prix en réaux, sans poids, dimensions ni marque clairs. De plus, le fournisseur peut se retrouver en rupture de stock à tout moment. Le faire à la main signifiait traduire, estimer l'envoi, calculer le coût total au Chili et trier des milliers de fiches par marque, tout en vérifiant chaque jour si elles étaient toujours disponibles.",
    p_problema_2: "Le vrai défi était l'exploitation. Chaque produit arrivait en portugais, avec un prix en réaux, sans poids ni dimensions, et le stock du fournisseur pouvait changer sans préavis. Publier et maintenir des milliers de produits à la main aurait demandé une équipe que je n'avais pas. J'ai donc décidé d'automatiser le plus possible dès le premier jour, pour qu'une entreprise d'une seule personne puisse fonctionner comme une bien plus grande, avec des coûts minimes.",

    h2_ejemplo: "Un produit, avant et après",
    sub_ejemplo: "Ce qui arrive du fournisseur et ce qui finit publié sur Shopify.",
    ba_lbl_before: "Ligne scrapée · Google Sheets",
    ba_lbl_after: "Produit sur Shopify",
    dl_titulo: "Titre",
    dl_estado_ia: "Statut IA",
    dl_peso: "Poids",
    dl_flete: "Fret int.",
    dl_sku: "SKU",
    dl_etiquetas: "Tags",
    dl_metacampos: "Métachamps",
    dd_peso_val: "2,4 kg réel → 4,32 kg facturable (×1,8)",
    dd_flete_val: "R$133 + R$58,7 × 4,32 = R$386,58",
    dd_size_label: "taille",
    demo_note: "Exemple illustratif : les champs et calculs sont ceux réellement générés par le flux ; le produit et son poids sont donnés à titre d'exemple.",

    h2_arquitectura: "Architecture",
    sub_arquitectura: "Tout tourne sur un seul serveur. Google Sheets sert de base de données intermédiaire et de livre de ventes, et Shopify stocke les données structurées de chaque produit.",
    arch_aria: "Flux : fournisseurs brésiliens vers Google Sheets, vers n8n avec Gemini, vers Shopify ; chaque vente déclenche une vérification de stock auprès du fournisseur",
    box1_small: "Source · manuel",
    box1_body: "Sites des fournisseurs au Brésil<br>(script Chrome)",
    box2_small: "Staging",
    box2_body: "Google Sheets<br>(catalogue brut)",
    box3_small: "Orchestration",
    box3_body: "n8n + API Gemini",
    box4_small: "Vente",
    box4_body: "Shopify<br>(tags + métachamps)",
    box5_small: "Comptabilité",
    box5_body: "Sheets des ventes<br>(marges + suivi)",
    loop_text: "Chaque vente sur Shopify déclenche deux flux : la vérification du stock sur le site du fournisseur, et l'enregistrement de la vente avec son détail dans Google Sheets.",
    host_text: "Ubuntu sur un VPS · Docker Compose · proxy inverse avec HTTPS (Let's Encrypt) · sous-domaine propre via Cloudflare DNS",

    h2_workflows: "Les trois workflows",

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
    wf1_caption: "Product Catalog Automation, dans n8n. Les nœuds désactivés, je les utilise pour les tests : limiter à quelques produits, tester des filtres et des pauses.",
    wf1_pt1: "<strong>Étape manuelle préalable : le scraping.</strong> Je lance un script JavaScript dans la console Chrome qui parcourt toutes les pages du moteur de recherche du fournisseur (avec <code>fetch</code> + <code>DOMParser</code>) et récupère le titre, le prix en BRL, le lien et l'image. Je colle le résultat dans Google Sheets, et à partir de là, le workflow fait tout le reste. Je l'ai fait en deux passes (le listing, puis chaque fiche) pour lire la vraie image depuis <code>og:image</code>, car sur le listing les images des produits voisins se mélangeaient. J'ai adapté les sélecteurs pour les fournisseurs avec un HTML différent.",
    wf1_pt2: "<strong>Gemini</strong> renvoie un JSON structuré : titre traduit avec une terminologie chilienne, description HTML, référence OEM, marques compatibles, poids estimé, taille et statut. En amont, un dictionnaire d'environ 100 termes techniques PT→ES garantit une traduction cohérente.",
    wf1_pt3: "<strong>Double filtre.</strong> L'IA classe par poids et par risque, et une liste déterministe de mots interdits en portugais sert de filet de sécurité. Sans elle, quelques moteurs complets passaient avec des prix à plusieurs millions.",
    wf1_pt4: "<strong>Prix :</strong> (coût en BRL + fret interne) × taux de change + fret international volumétrique + provision douanière (TVA + droits), divisé par 0,60.",
    tbl1_h1: "Règle", tbl1_h2: "Critère", tbl1_h3: "Résultat",
    tbl1_r1_regla: "Risque",
    tbl1_r1_criterio: "Moteurs complets, boîtes de vitesses, pièces d'occasion, fluides inflammables",
    tbl1_r2_regla: "Poids / taille",
    tbl1_r2_criterio: "&gt; 25 kg ou &gt; 120 cm",
    tbl1_r2_resultado: "brouillon avec tag",
    tbl1_r3_regla: "Le reste",
    tbl1_r3_criterio: "Pièces autorisées",
    tbl1_r3_resultado: "avec fret selon le Factor K",
    h4_envio: "Estimation de l'envoi par produit",
    p_envio: "Les fournisseurs ne publient ni le poids ni les dimensions. Gemini estime le <strong>poids réel</strong> et classe la taille de la pièce. À partir de là, je calcule le <strong>poids facturable</strong> et le fret international :",
    formula1_l1: "poids facturable = poids réel × Factor K",
    formula1_l2: "fret = R$133 fixe par colis + R$58,7 × kg facturable",
    factor_k_note: "Qu'est-ce que le Factor K ? C'est un multiplicateur basé sur la taille de la pièce : les pièces volumineuses prennent plus de place dans l'envoi même si elles pèsent peu, donc elles sont facturées comme si elles pesaient plus. C'est une façon d'approximer le poids volumétrique sans mesurer chaque colis.",
    tbl2_h1: "Taille", tbl2_h2: "Exemples", tbl2_h3: "Factor K",
    tbl2_r1_tamano: "Grande", tbl2_r1_ejemplos: "Calandres, pare-chocs, tableaux de bord",
    tbl2_r2_tamano: "Moyenne", tbl2_r2_ejemplos: "Phares, durites, rétroviseurs",
    tbl2_r3_tamano: "Petite", tbl2_r3_ejemplos: "Réservoirs, capteurs, boulons",
    tbl2_r1_k: "× 3,5", tbl2_r2_k: "× 1,8", tbl2_r3_k: "× 1,1",
    note_envio: "J'ai calibré la formule à partir de vrais reçus d'envoi Correios. Volontairement, j'applique le coût fixe complet à chaque produit, même si en pratique plusieurs voyagent dans le même colis. C'est un choix prudent : la marge réelle est meilleure une fois les envois consolidés.",
    calc_title: "Testez votre propre calcul",
    calc_sub: "Utilisez la formule réelle du workflow avec vos propres chiffres.",
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
    wf2_pt1: "Dès qu'une commande arrive, il vérifie en direct chaque produit sur le site du fournisseur. S'il est épuisé, il met le stock à 0 sur Shopify pour qu'il ne soit plus vendu.",
    wf2_pt2: "La détection ignore la section « Produtos relacionados » (produits associés), car les produits associés épuisés généraient des faux négatifs.",

    wf3_title: "3 · Enregistrement des ventes et suivi → Google Sheets",
    wf3_c3: "Lire les métachamps de coût",
    wf3_c4: "Code : détail et marges",
    wf3_c5: "Code : formatage de la ligne",
    wf3_c6: "Sheets : ligne de vente",
    wf3_caption: "Enregistrement des ventes Google Sheets, dans n8n",
    wf3_pt1: "Pour chaque produit vendu, il enregistre une ligne dans le livre comptable avec le produit, le lien du fournisseur, les coordonnées de l'acheteur et le <strong>détail complet du prix</strong>. Les coûts proviennent des métachamps enregistrés par le workflow 1, donc rien n'est recalculé.",
    wf3_pt2: "Le tableau sert aussi à <strong>suivre la commande</strong>, avec des colonnes de date et de statut pour chaque étape du trajet.",

    h4_desglose: "Détail de chaque vente",
    tbl3_h1: "Colonne", tbl3_h2: "D'où ça vient",
    tbl3_r1: "Coût du produit (BRL et CLP) et taux de change", tbl3_r1b: "Métachamps du produit",
    tbl3_r2: "Envoi Brésil → domicile du partenaire", tbl3_r2b: "Fret interne du fournisseur",
    tbl3_r3: "Envoi Brésil → Chili", tbl3_r3b: "Fret volumétrique (Factor K)",
    tbl3_r4: "Provision douanière", tbl3_r4b: "TVA + droits sur la valeur CIF",
    tbl3_r5: "Prix de vente", tbl3_r5b: "Commande Shopify",
    tbl3_r7: "Nom, e-mail et téléphone du client", tbl3_r7b: "Commande Shopify",

    h4_seguimiento: "Suivi de la commande",
    p_seguimiento: "Le workflow crée la ligne de la vente. Je remplis les dates de chaque étape au fur et à mesure que le colis avance :",
    track1_b: "Vente", track1_s: "automatique",
    track2_b: "Achat au Brésil", track2_s: "date et heure",
    track3_b: "Arrive chez le partenaire", track3_s: "date",
    track4_b: "Le partenaire l'envoie au Chili", track4_s: "Correios",
    track5_b: "Arrive chez moi", track5_s: "douane dédouanée",
    track6_b: "Envoyé au client", track6_s: "livraison finale",

    h2_shopify: "Shopify comme base de données : tags et métachamps",
    sub_shopify: "Je ne fais pas que publier des produits. Chaque fiche conserve des données structurées qui organisent la boutique et alimentent les autres workflows.",
    h4_etiquetas: "Tags → collections automatiques",
    p_etiquetas: "Gemini extrait du titre les marques compatibles, sans les inventer, sous forme de tableau. Chaque marque est enregistrée comme tag, et les collections intelligentes de Shopify (Jeep, Fiat, RAM…) se remplissent toutes seules. Une pièce compatible avec plusieurs marques apparaît dans toutes ses collections.",
    note_etiquetas: "Le tag <code>COTIZAR</code> marque les pièces grandes ou lourdes. Elles sont publiées en brouillon avec une note pour établir un devis d'envoi, plutôt que d'être retirées du catalogue.",
    h4_variante: "Une variante prête à fonctionner",
    p_variante: "Le produit est créé avec l'API REST de Shopify, et non avec le nœud natif de n8n, pour contrôler la variante dans son intégralité :",
    pv1: "<strong>SKU</strong> = le numéro OEM, qui figure aussi dans le titre pour améliorer la recherche.",
    pv2: "<strong>Poids</strong> réel en kg.",
    pv3: "<strong>Stock</strong> géré par Shopify. Comme je vends sur commande, il démarre disponible, et le workflow 2 le passe à 0 si le fournisseur est en rupture de stock.",
    h4_meta: "Métachamps par produit",
    p_meta: "Chaque produit est publié avec sept métachamps. J'ai défini chacun d'eux dans Shopify pour qu'ils apparaissent dans le panneau d'administration.",
    tbl4_h1: "Métachamp", tbl4_h2: "Type", tbl4_h3: "À quoi ça sert",
    tbl4_r1: "Lien vers la fiche du fournisseur. Le workflow 2 s'en sert pour vérifier le stock.",
    tbl4_r2: "Prix d'achat en réaux",
    tbl4_r3: "Taux de change BRL→CLP utilisé dans le calcul",
    tbl4_r4: "Coût du produit converti en pesos chiliens",
    tbl4_r5: "Fret Brésil→Chili selon le poids facturable",
    tbl4_r6: "Provision TVA + droits",
    tbl4_r7: "Coût total rendu au Chili. Le workflow 3 s'en sert pour calculer les marges de chaque vente.",
    tipo_texto: "Texte",
    note_meta: "Ainsi, chaque commande arrive avec son détail de coûts sans rien recalculer, et le workflow 3 le transmet directement à la comptabilité.",

    h2_aprendizajes: "Ce que j'ai appris en corrigeant des bugs",
    lesson1_h: "L'appariement des items dans n8n",
    lesson1_p: "Avec des nœuds Filter et If dans la chaîne, référencer par index mélangeait titres, prix et images de produits différents. J'ai résolu ça en utilisant le suivi d'items de n8n (<code>.item</code>) plutôt que des index.",
    lesson2_h: "L'IA seule ne suffit pas",
    lesson2_p: "Gemini classe bien presque tout le temps, mais dans l'e-commerce, une erreur coûte cher. C'est pourquoi chaque décision critique s'appuie aussi sur une règle déterministe.",
    lesson3_h: "Permissions, tokens et métachamps",
    lesson3_p: "J'ai configuré les scopes de l'application (write_inventory), je demande un token neuf à chaque exécution, et j'ai ajouté des pauses entre les appels pour ne pas dépasser la limite de l'API Shopify. De plus, les métachamps n'apparaissent dans le panneau que si vous avez d'abord créé leur définition.",
    lesson4_h: "Coût minimal, contrôle maximal",
    lesson4_p: "J'utilise n8n auto-hébergé plutôt qu'un SaaS facturé à l'exécution. Pour 5 USD par mois, je fais tourner des flux illimités, et je ne paie à l'usage que l'API Gemini.",
    more_coming_lead: "Je compte continuer à faire grandir ce projet — beaucoup de choses arrivent encore.",
    more_coming_punch: "Ce n'est que le début.",
    contact_title: "Discutons",
    contact_text: "Pour échanger sur une opportunité, un projet, ou simplement dire bonjour, écrivez-moi.",
    contact_copied: "Copié !",

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
