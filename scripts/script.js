/* ==========================================================
   Traducciones
   ========================================================== */
const translations = {
  es: {
    nav_about: "Sobre mí",
    nav_experience: "Experiencia",
    nav_cv: "Currículum",
    nav_projects: "Proyectos",
    nav_skills: "Habilidades",
    nav_contact: "Contacto",
    hero_kicker: "Portafolio",
    hero_subtitle: "Desarrollador de software y emprendedor. Construyo productos, automatizaciones y análisis de datos.",
    hero_cta_projects: "Ver proyectos",
    hero_cta_contact: "Contactarme",
    hero_visual_caption: "Trayectoria de Collatz para n = 27",
    about_title: "Sobre mí",
    about_text: "Tengo 23 años y estudio un Bachelor of Science in Software Development en Brigham Young University–Idaho. Combino el desarrollo de software con el emprendimiento: hoy trabajo ayudando a equipos a mejorar sus habilidades de forma remota, y en paralelo administro mi propia tienda de comercio electrónico. Me interesa especialmente la automatización de procesos y el análisis de datos aplicado a problemas reales, desde logística de importación hasta preguntas abiertas de matemáticas.",
    about_fact_education: "Educación",
    about_fact_education_value: "B.S. Software Development, BYU–Idaho (2024–2028)",
    about_fact_languages: "Idiomas",
    about_fact_languages_value: "Español · Inglés (C1-C2) · Portugués (C2)",
    about_fact_certs: "Certificaciones",
    about_fact_certs_value: "Social Media Marketing — HubSpot Academy",
    exp_title: "Experiencia",
    exp1_date: "Ago. 2025 — Presente",
    exp1_role: "Technical Support & Onboarding Specialist",
    exp1_org: "Missionary Training Center USA (MTC) — remoto",
    exp1_b1: "Coordina flujos de onboarding técnico y brinda soporte continuo a usuarios, trabajando directamente con equipos de gestión en Estados Unidos en inglés, portugués y español.",
    exp1_b2: "Lidera tres sesiones grupales semanales multifuncionales, coordinando distintos equipos y adaptando la comunicación a diferentes necesidades de usuario.",
    exp1_b3: "Gestiona el ciclo completo de seguimiento y documentación de las cohortes de onboarding: registros de avance, planes de ejecución, resúmenes de mentoría y datos de CRM.",
    exp1_b4: "Identifica problemas recurrentes de flujo y comunicación, y desarrolla documentación y FAQ proactivas, contribuyendo a una mejora del 20% en la precisión y entrega del onboarding.",
    exp1_b5: "Resuelve problemas de usuarios y de flujo de trabajo, adaptándose rápidamente a cambios en software, procesos y prioridades operativas.",
    exp2_date: "2026 — Presente",
    exp2_role: "Founder & Automation Engineer — International E-commerce & Import Operations",
    exp2_org: "Repuestolandia",
    exp2_b1: "Construye un emprendimiento internacional de importación y e-commerce de repuestos automotrices, diseñado para automatizar de principio a fin el proceso de abastecimiento de productos desde Brasil y su venta en Chile.",
    exp2_b2: "Diseñó e implementó flujos de trabajo automatizados que conectan proveedores, datos de productos, inventario, precios y Shopify usando n8n, REST APIs, Google Sheets, herramientas de IA e infraestructura en la nube.",
    exp2_b3: "Construyó automatizaciones para ingesta, clasificación, traducción, fijación de precios, publicación y verificación de inventario de productos, integrando reglas de negocio con fuentes de datos externas.",
    exp2_b4: "Desarrolló verificación automática de stock activada por nuevos pedidos, para prevenir sobreventa y mejorar la confiabilidad de los pedidos.",
    exp2_b5: "Despliega y mantiene un entorno de automatización autoalojado en Ubuntu/DigitalOcean usando Docker, Caddy, Cloudflare DNS y SSL automatizado.",
    exp2_b6: "Integró la API Admin de Shopify y resolvió problemas de autenticación, permisos, dependencias de datos y ejecución de flujos, aprendiendo e implementando nuevas tecnologías de forma independiente.",
    exp3_date: "Jun. 2024 — Sep. 2024",
    exp3_role: "Premium Guest Service Specialist / Trilingual Guest Relations",
    exp3_org: "Valle Nevado Ski Resort, Chile",
    exp3_b1: "Brindó atención a huéspedes internacionales en inglés y portugués además de español, resolviendo solicitudes de servicio y problemas de comunicación en un entorno de ritmo acelerado.",
    exp3_b2: "Gestionó múltiples prioridades simultáneas manteniendo atención al detalle, profesionalismo y apego a los procedimientos operativos y de seguridad.",
    exp3_b3: "Se adaptó rápidamente a necesidades cambiantes de los huéspedes y a requerimientos operativos sensibles al tiempo.",
    exp4_date: "Feb. 2023 — Abr. 2024",
    exp4_role: "Executive Assistant to Regional Director",
    exp4_org: "International Volunteer Operations, Santos, Brasil",
    exp4_b1: "Fue el enlace operativo y multilingüe principal de un director regional, coordinando comunicaciones, logística, documentación y procesos organizacionales en un entorno internacional.",
    exp4_b2: "Gestionó estructuras de apoyo, recursos y logística operativa para una comunidad multicultural de más de 150 voluntarios internacionales.",
    exp4_b3: "Actuó como punto de contacto principal para resolver cuellos de botella lingüísticos, operativos y de flujo de trabajo, apoyando la adopción de procedimientos organizacionales.",
    exp4_b4: "Realizó auditorías diarias de alto volumen sobre información de desempeño y cumplimiento, manteniendo precisión y alineación con los estándares de la organización.",
    exp4_b5: "Coordinó la comunicación entre stakeholders de múltiples países y trasfondos culturales, lo que exigió fuerte priorización, organización y resolución de problemas.",
    cv_title: "Currículum",
    cv_education_title: "Educación",
    cv_edu1_date: "Nov. 2024 — Jun. 2028",
    cv_edu1_role: "Bachelor of Science in Software Development",
    cv_edu1_org: "Brigham Young University–Idaho",
    cv_edu1_desc: "En curso.",
    cv_certs_title: "Certificaciones",
    cv_cert1: "Social Media Marketing — HubSpot Academy",
    cv_cert2: "Certificate of Language Ability — English Speaking (C2)",
    cv_cert3: "C2 Portuguese Proficiency (Mastery Level)",
    cv_view_certs: "Ver certificados →",
    cv_languages_title: "Idiomas",
    cv_lang1: "Español — nativo",
    cv_lang2: "Inglés — C2",
    cv_lang3: "Portugués — C2",
    cv_skills_title: "Habilidades técnicas",
    cv_skill1: "Desarrollo: HTML, CSS, JavaScript, Python",
    cv_skill2: "Datos y Machine Learning: Pandas, Scikit-learn, Matplotlib, Seaborn, Random Forest",
    cv_skill3: "Automatización: n8n",
    cv_skill4: "E-commerce: Shopify",
    cv_skill5: "Herramientas colaborativas: CRM (entorno Microsoft), Zoom, Google Meet, Microsoft Teams",
    projects_title: "Proyectos",
    proj1_kicker: "Emprendimiento · E-commerce",
    proj1_desc: "Emprendimiento internacional de importación y e-commerce de repuestos automotrices, diseñado para automatizar de principio a fin el abastecimiento de productos desde Brasil y su venta en Chile.",
    proj1_b1: "Diseñé e implementé flujos de trabajo automatizados que conectan proveedores, datos de productos, inventario, precios y Shopify usando n8n, REST APIs, Google Sheets, herramientas de IA e infraestructura en la nube.",
    proj1_b2: "Construí automatizaciones para ingesta, clasificación, traducción, fijación de precios, publicación y verificación de inventario de productos, integrando reglas de negocio con fuentes de datos externas.",
    proj1_b3: "Desarrollé verificación automática de stock activada por nuevos pedidos, para prevenir sobreventa y mejorar la confiabilidad de los pedidos.",
    proj1_b4: "Despliego y mantengo un entorno de automatización autoalojado en Ubuntu/DigitalOcean usando Docker, Caddy, Cloudflare DNS y SSL automatizado.",
    proj1_b5: "Integré la API Admin de Shopify y resolví problemas de autenticación, permisos, dependencias de datos y ejecución de flujos, aprendiendo e implementando nuevas tecnologías de forma independiente.",
    proj1_stack_ai: "Herramientas de IA",
    proj1_cta: "Ver tienda",
    proj1_flow_node1_title: "Proveedores",
    proj1_flow_node1_sub: "Brasil",
    proj1_flow_node2_sub: "Automatización end-to-end",
    proj1_flow_hint: "Pasa el cursor para ver el detalle",
    proj1_flow_detail1: "Scraping de productos desde los proveedores",
    proj1_flow_detail2: "Traducción automática de nombres (portugués → español)",
    proj1_flow_detail3: "Conversión de valores BRL → CLP",
    proj1_flow_detail4: "Cálculo del precio final para el cliente",
    proj1_flow_detail5: "Registro en Google Sheets del margen y cada gasto por separado",
    proj1_flow_detail6: "Verificación de stock en el proveedor al recibir un pedido: si no hay stock, marca el producto como agotado en Shopify y notifica para gestionar el reembolso",
    proj1_flow_node3_sub: "Publicación · Stock",
    proj1_flow_node4_sub: "Envío nacional — origen",
    proj1_flow_node5_sub: "Envío nacional — destino",
    proj1_flow_node6_title: "Cliente",
    proj1_flow_node6_sub: "Chile",
    proj2_kicker: "Tesis · Ciencia de datos",
    proj2_name: "Predicción del tiempo de parada en la Conjetura de Collatz",
    proj2_desc: "Análisis dinámico computacional de la Conjetura de Collatz: generé un dataset de 100.000 secuencias con un algoritmo optimizado por memoización en Python, hice un análisis exploratorio de datos y entrené un modelo Random Forest para predecir el tiempo de parada (stopping time) de cada secuencia a partir de propiedades del número inicial.",
    proj2_stat1: "secuencias analizadas",
    proj2_stat2: "de la variabilidad explicada (R²)",
    proj2_stat3: "pasos de error promedio (MAE)",
    proj2_cta: "Leer tesis completa",
    collatz_title: "Prueba tu propio número",
    collatz_desc: "Escribe cualquier entero positivo y mira su trayectoria de Collatz animarse, igual que la de n = 27 en el inicio.",
    collatz_input_label: "Número entero positivo",
    collatz_run: "Ver trayectoria",
    collatz_error: "Ingresa un número entero positivo.",
    collatz_stats: "n = {n} → convergió a 1 en {steps} pasos · valor máximo alcanzado: {max}",
    collatz_uncapped: "n = {n} → no convergió tras {steps} pasos (la Conjetura de Collatz no tiene demostración formal para todo n)",
    contact_copied: "¡Copiado!",
    skills_title: "Habilidades",
    skills_group1: "Desarrollo",
    skills_group2: "Datos",
    skills_group3: "Automatización",
    skills_group4: "Comunicación",
    contact_title: "Conversemos",
    contact_text: "Si quieres conversar sobre una oportunidad, un proyecto o simplemente saludar, escríbeme.",
    footer_text: "Hecho por Tomás Venegas."
  },
  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_cv: "Resume",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_kicker: "Portfolio",
    hero_subtitle: "Software developer and entrepreneur. I build products, automations, and data analysis.",
    hero_cta_projects: "View projects",
    hero_cta_contact: "Get in touch",
    hero_visual_caption: "Collatz trajectory for n = 27",
    about_title: "About me",
    about_text: "I'm 23 years old and I'm pursuing a Bachelor of Science in Software Development at Brigham Young University–Idaho. I combine software development with entrepreneurship: I currently help teams build skills remotely, while also running my own e-commerce store. I'm especially interested in process automation and data analysis applied to real problems, from import logistics to open questions in mathematics.",
    about_fact_education: "Education",
    about_fact_education_value: "B.S. Software Development, BYU–Idaho (2024–2028)",
    about_fact_languages: "Languages",
    about_fact_languages_value: "Spanish · English (C1-C2) · Portuguese (C2)",
    about_fact_certs: "Certifications",
    about_fact_certs_value: "Social Media Marketing — HubSpot Academy",
    exp_title: "Experience",
    exp1_date: "Aug. 2025 — Present",
    exp1_role: "Technical Support & Onboarding Specialist",
    exp1_org: "Missionary Training Center USA (MTC) — remote",
    exp1_b1: "Coordinates technical onboarding workflows and provides ongoing user support, working directly with management teams in the United States in English, Portuguese, and Spanish.",
    exp1_b2: "Leads three weekly cross-functional group sessions, coordinating different teams and adapting communication to varying user needs.",
    exp1_b3: "Manages the full tracking and documentation cycle for onboarding cohorts: progress logs, execution plans, mentoring summaries, and CRM data.",
    exp1_b4: "Identifies recurring workflow and communication issues, developing proactive documentation and FAQs that contributed to a 20% improvement in onboarding accuracy and delivery.",
    exp1_b5: "Resolves user and workflow issues, quickly adapting to changes in software, processes, and operational priorities.",
    exp2_date: "2026 — Present",
    exp2_role: "Founder & Automation Engineer — International E-commerce & Import Operations",
    exp2_org: "Repuestolandia",
    exp2_b1: "Building an international auto-parts import and e-commerce venture designed to automate, end to end, the process of sourcing products from Brazil and selling them in Chile.",
    exp2_b2: "Designed and implemented automated workflows connecting suppliers, product data, inventory, pricing, and Shopify using n8n, REST APIs, Google Sheets, AI tools, and cloud infrastructure.",
    exp2_b3: "Built automations for product ingestion, classification, translation, pricing, publishing, and inventory verification, integrating business rules with external data sources.",
    exp2_b4: "Developed automatic stock verification triggered by new orders to prevent overselling and improve order reliability.",
    exp2_b5: "Deploys and maintains a self-hosted automation environment on Ubuntu/DigitalOcean using Docker, Caddy, Cloudflare DNS, and automated SSL.",
    exp2_b6: "Integrated the Shopify Admin API and resolved authentication, permissions, data-dependency, and workflow-execution issues, independently learning and implementing new technologies.",
    exp3_date: "Jun. 2024 — Sep. 2024",
    exp3_role: "Premium Guest Service Specialist / Trilingual Guest Relations",
    exp3_org: "Valle Nevado Ski Resort, Chile",
    exp3_b1: "Assisted international guests in English and Portuguese in addition to Spanish, resolving service requests and communication issues in a fast-paced environment.",
    exp3_b2: "Managed multiple simultaneous priorities while maintaining attention to detail, professionalism, and adherence to operational and safety procedures.",
    exp3_b3: "Quickly adapted to changing guest needs and time-sensitive operational requirements.",
    exp4_date: "Feb. 2023 — Apr. 2024",
    exp4_role: "Executive Assistant to Regional Director",
    exp4_org: "International Volunteer Operations, Santos, Brasil",
    exp4_b1: "Served as the primary multilingual operational liaison for a regional director, coordinating communications, logistics, documentation, and organizational processes in an international setting.",
    exp4_b2: "Managed support structures, resources, and operational logistics for a multicultural community of more than 150 international volunteers.",
    exp4_b3: "Acted as the main point of contact for resolving linguistic, operational, and workflow bottlenecks, supporting the adoption of organizational procedures.",
    exp4_b4: "Conducted high-volume daily audits of performance and compliance information, maintaining accuracy and alignment with organizational standards.",
    exp4_b5: "Coordinated communication among stakeholders from multiple countries and cultural backgrounds, requiring strong prioritization, organization, and problem-solving.",
    cv_title: "Resume",
    cv_education_title: "Education",
    cv_edu1_date: "Nov. 2024 — Jun. 2028",
    cv_edu1_role: "Bachelor of Science in Software Development",
    cv_edu1_org: "Brigham Young University–Idaho",
    cv_edu1_desc: "In progress.",
    cv_certs_title: "Certifications",
    cv_cert1: "Social Media Marketing — HubSpot Academy",
    cv_cert2: "Certificate of Language Ability — English Speaking (C2)",
    cv_cert3: "C2 Portuguese Proficiency (Mastery Level)",
    cv_view_certs: "View certificates →",
    cv_languages_title: "Languages",
    cv_lang1: "Spanish — native",
    cv_lang2: "English — C2",
    cv_lang3: "Portuguese — C2",
    cv_skills_title: "Technical skills",
    cv_skill1: "Development: HTML, CSS, JavaScript, Python",
    cv_skill2: "Data & Machine Learning: Pandas, Scikit-learn, Matplotlib, Seaborn, Random Forest",
    cv_skill3: "Automation: n8n",
    cv_skill4: "E-commerce: Shopify",
    cv_skill5: "Collaboration tools: CRM (Microsoft environment), Zoom, Google Meet, Microsoft Teams",
    projects_title: "Projects",
    proj1_kicker: "Entrepreneurship · E-commerce",
    proj1_desc: "An international auto-parts import and e-commerce venture, designed to automate end to end the sourcing of products from Brazil and their sale in Chile.",
    proj1_b1: "Designed and implemented automated workflows connecting suppliers, product data, inventory, pricing, and Shopify using n8n, REST APIs, Google Sheets, AI tools, and cloud infrastructure.",
    proj1_b2: "Built automations for product ingestion, classification, translation, pricing, publishing, and inventory verification, integrating business rules with external data sources.",
    proj1_b3: "Developed automatic stock verification triggered by new orders to prevent overselling and improve order reliability.",
    proj1_b4: "Deploy and maintain a self-hosted automation environment on Ubuntu/DigitalOcean using Docker, Caddy, Cloudflare DNS, and automated SSL.",
    proj1_b5: "Integrated the Shopify Admin API and resolved authentication, permissions, data-dependency, and workflow-execution issues, independently learning and implementing new technologies.",
    proj1_stack_ai: "AI tools",
    proj1_cta: "Visit store",
    proj1_flow_node1_title: "Suppliers",
    proj1_flow_node1_sub: "Brazil",
    proj1_flow_node2_sub: "End-to-end automation",
    proj1_flow_hint: "Hover to see the detail",
    proj1_flow_detail1: "Scrapes product data from suppliers",
    proj1_flow_detail2: "Automatic translation of product names (Portuguese → Spanish)",
    proj1_flow_detail3: "Converts prices from BRL to CLP",
    proj1_flow_detail4: "Calculates the final price for the customer",
    proj1_flow_detail5: "Logs profit margin and every expense separately in Google Sheets",
    proj1_flow_detail6: "Checks supplier stock when an order comes in: if unavailable, marks the product as sold out on Shopify and sends a notification to process a refund",
    proj1_flow_node3_sub: "Listing · Stock",
    proj1_flow_node4_sub: "Domestic shipping — origin",
    proj1_flow_node5_sub: "Domestic shipping — destination",
    proj1_flow_node6_title: "Customer",
    proj1_flow_node6_sub: "Chile",
    proj2_kicker: "Thesis · Data science",
    proj2_name: "Predicting stopping time in the Collatz Conjecture",
    proj2_desc: "A computational dynamic analysis of the Collatz Conjecture: I generated a dataset of 100,000 sequences with a memoization-optimized Python algorithm, ran an exploratory data analysis, and trained a Random Forest model to predict each sequence's stopping time from properties of the starting number.",
    proj2_stat1: "sequences analyzed",
    proj2_stat2: "of variability explained (R²)",
    proj2_stat3: "average error in steps (MAE)",
    proj2_cta: "Read full thesis",
    collatz_title: "Try your own number",
    collatz_desc: "Enter any positive integer and watch its Collatz trajectory animate, just like n = 27 in the hero above.",
    collatz_input_label: "Positive integer",
    collatz_run: "See trajectory",
    collatz_error: "Enter a positive integer.",
    collatz_stats: "n = {n} → converged to 1 in {steps} steps · maximum value reached: {max}",
    collatz_uncapped: "n = {n} → did not converge after {steps} steps (the Collatz Conjecture has no formal proof for every n)",
    contact_copied: "Copied!",
    skills_title: "Skills",
    skills_group1: "Development",
    skills_group2: "Data",
    skills_group3: "Automation",
    skills_group4: "Communication",
    contact_title: "Let's talk",
    contact_text: "If you'd like to discuss an opportunity, a project, or just say hi, reach out.",
    footer_text: "Made by Tomás Venegas."
  },
  pt: {
    nav_about: "Sobre mim",
    nav_experience: "Experiência",
    nav_cv: "Currículo",
    nav_projects: "Projetos",
    nav_skills: "Habilidades",
    nav_contact: "Contato",
    hero_kicker: "Portfólio",
    hero_subtitle: "Desenvolvedor de software e empreendedor. Construo produtos, automações e análises de dados.",
    hero_cta_projects: "Ver projetos",
    hero_cta_contact: "Fale comigo",
    hero_visual_caption: "Trajetória de Collatz para n = 27",
    about_title: "Sobre mim",
    about_text: "Tenho 23 anos e curso um Bachelor of Science in Software Development na Brigham Young University–Idaho. Combino o desenvolvimento de software com o empreendedorismo: atualmente ajudo equipes a desenvolver habilidades remotamente, e ao mesmo tempo administro minha própria loja de e-commerce. Tenho interesse especial em automação de processos e análise de dados aplicada a problemas reais, desde logística de importação até questões em aberto da matemática.",
    about_fact_education: "Formação",
    about_fact_education_value: "B.S. Software Development, BYU–Idaho (2024–2028)",
    about_fact_languages: "Idiomas",
    about_fact_languages_value: "Espanhol · Inglês (C1-C2) · Português (C2)",
    about_fact_certs: "Certificações",
    about_fact_certs_value: "Social Media Marketing — HubSpot Academy",
    exp_title: "Experiência",
    exp1_date: "Ago. 2025 — Atual",
    exp1_role: "Technical Support & Onboarding Specialist",
    exp1_org: "Missionary Training Center USA (MTC) — remoto",
    exp1_b1: "Coordena fluxos de onboarding técnico e oferece suporte contínuo aos usuários, trabalhando diretamente com equipes de gestão nos Estados Unidos em inglês, português e espanhol.",
    exp1_b2: "Lidera três sessões semanais multifuncionais em grupo, coordenando diferentes equipes e adaptando a comunicação a diferentes necessidades dos usuários.",
    exp1_b3: "Gerencia o ciclo completo de acompanhamento e documentação das turmas de onboarding: registros de progresso, planos de execução, resumos de mentoria e dados de CRM.",
    exp1_b4: "Identifica problemas recorrentes de fluxo e comunicação e desenvolve documentação e FAQs proativas, contribuindo para uma melhora de 20% na precisão e entrega do onboarding.",
    exp1_b5: "Resolve problemas de usuários e de fluxo de trabalho, adaptando-se rapidamente a mudanças em software, processos e prioridades operacionais.",
    exp2_date: "2026 — Atual",
    exp2_role: "Founder & Automation Engineer — International E-commerce & Import Operations",
    exp2_org: "Repuestolandia",
    exp2_b1: "Constrói um empreendimento internacional de importação e e-commerce de autopeças, projetado para automatizar de ponta a ponta o abastecimento de produtos vindos do Brasil e sua venda no Chile.",
    exp2_b2: "Desenhou e implementou fluxos de trabalho automatizados que conectam fornecedores, dados de produtos, estoque, preços e Shopify usando n8n, REST APIs, Google Sheets, ferramentas de IA e infraestrutura em nuvem.",
    exp2_b3: "Construiu automações para ingestão, classificação, tradução, precificação, publicação e verificação de estoque de produtos, integrando regras de negócio com fontes de dados externas.",
    exp2_b4: "Desenvolveu verificação automática de estoque acionada por novos pedidos, para evitar overselling e melhorar a confiabilidade dos pedidos.",
    exp2_b5: "Implanta e mantém um ambiente de automação auto-hospedado em Ubuntu/DigitalOcean usando Docker, Caddy, Cloudflare DNS e SSL automatizado.",
    exp2_b6: "Integrou a API Admin da Shopify e resolveu problemas de autenticação, permissões, dependências de dados e execução de fluxos, aprendendo e implementando novas tecnologias de forma independente.",
    exp3_date: "Jun. 2024 — Set. 2024",
    exp3_role: "Premium Guest Service Specialist / Trilingual Guest Relations",
    exp3_org: "Valle Nevado Ski Resort, Chile",
    exp3_b1: "Atendeu hóspedes internacionais em inglês e português, além do espanhol, resolvendo solicitações de serviço e problemas de comunicação em um ambiente de ritmo acelerado.",
    exp3_b2: "Gerenciou múltiplas prioridades simultâneas mantendo atenção aos detalhes, profissionalismo e conformidade com os procedimentos operacionais e de segurança.",
    exp3_b3: "Adaptou-se rapidamente às necessidades variáveis dos hóspedes e a requisitos operacionais sensíveis ao tempo.",
    exp4_date: "Fev. 2023 — Abr. 2024",
    exp4_role: "Executive Assistant to Regional Director",
    exp4_org: "International Volunteer Operations, Santos, Brasil",
    exp4_b1: "Foi o principal elo operacional e multilíngue de um diretor regional, coordenando comunicações, logística, documentação e processos organizacionais em um ambiente internacional.",
    exp4_b2: "Gerenciou estruturas de apoio, recursos e logística operacional para uma comunidade multicultural de mais de 150 voluntários internacionais.",
    exp4_b3: "Atuou como principal ponto de contato para resolver gargalos linguísticos, operacionais e de fluxo de trabalho, apoiando a adoção de procedimentos organizacionais.",
    exp4_b4: "Realizou auditorias diárias de alto volume sobre informações de desempenho e conformidade, mantendo precisão e alinhamento com os padrões da organização.",
    exp4_b5: "Coordenou a comunicação entre stakeholders de múltiplos países e origens culturais, exigindo forte priorização, organização e resolução de problemas.",
    cv_title: "Currículo",
    cv_education_title: "Formação",
    cv_edu1_date: "Nov. 2024 — Jun. 2028",
    cv_edu1_role: "Bachelor of Science in Software Development",
    cv_edu1_org: "Brigham Young University–Idaho",
    cv_edu1_desc: "Em andamento.",
    cv_certs_title: "Certificações",
    cv_cert1: "Social Media Marketing — HubSpot Academy",
    cv_cert2: "Certificate of Language Ability — English Speaking (C2)",
    cv_cert3: "C2 Portuguese Proficiency (Mastery Level)",
    cv_view_certs: "Ver certificados →",
    cv_languages_title: "Idiomas",
    cv_lang1: "Espanhol — nativo",
    cv_lang2: "Inglês — C2",
    cv_lang3: "Português — C2",
    cv_skills_title: "Habilidades técnicas",
    cv_skill1: "Desenvolvimento: HTML, CSS, JavaScript, Python",
    cv_skill2: "Dados e Machine Learning: Pandas, Scikit-learn, Matplotlib, Seaborn, Random Forest",
    cv_skill3: "Automação: n8n",
    cv_skill4: "E-commerce: Shopify",
    cv_skill5: "Ferramentas colaborativas: CRM (ambiente Microsoft), Zoom, Google Meet, Microsoft Teams",
    projects_title: "Projetos",
    proj1_kicker: "Empreendedorismo · E-commerce",
    proj1_desc: "Empreendimento internacional de importação e e-commerce de autopeças, projetado para automatizar de ponta a ponta o abastecimento de produtos vindos do Brasil e sua venda no Chile.",
    proj1_b1: "Desenhei e implementei fluxos de trabalho automatizados que conectam fornecedores, dados de produtos, estoque, preços e Shopify usando n8n, REST APIs, Google Sheets, ferramentas de IA e infraestrutura em nuvem.",
    proj1_b2: "Construí automações para ingestão, classificação, tradução, precificação, publicação e verificação de estoque de produtos, integrando regras de negócio com fontes de dados externas.",
    proj1_b3: "Desenvolvi verificação automática de estoque acionada por novos pedidos, para evitar overselling e melhorar a confiabilidade dos pedidos.",
    proj1_b4: "Implanto e mantenho um ambiente de automação auto-hospedado em Ubuntu/DigitalOcean usando Docker, Caddy, Cloudflare DNS e SSL automatizado.",
    proj1_b5: "Integrei a API Admin da Shopify e resolvi problemas de autenticação, permissões, dependências de dados e execução de fluxos, aprendendo e implementando novas tecnologias de forma independente.",
    proj1_stack_ai: "Ferramentas de IA",
    proj1_cta: "Ver loja",
    proj1_flow_node1_title: "Fornecedores",
    proj1_flow_node1_sub: "Brasil",
    proj1_flow_node2_sub: "Automação ponta a ponta",
    proj1_flow_hint: "Passe o cursor para ver o detalhe",
    proj1_flow_detail1: "Scraping de produtos dos fornecedores",
    proj1_flow_detail2: "Tradução automática dos nomes (português → espanhol)",
    proj1_flow_detail3: "Conversão de valores de BRL para CLP",
    proj1_flow_detail4: "Cálculo do preço final para o cliente",
    proj1_flow_detail5: "Registro no Google Sheets da margem e de cada gasto separadamente",
    proj1_flow_detail6: "Verificação de estoque no fornecedor ao receber um pedido: se não houver estoque, marca o produto como esgotado na Shopify e notifica para providenciar o reembolso",
    proj1_flow_node3_sub: "Publicação · Estoque",
    proj1_flow_node4_sub: "Envio nacional — origem",
    proj1_flow_node5_sub: "Envio nacional — destino",
    proj1_flow_node6_title: "Cliente",
    proj1_flow_node6_sub: "Chile",
    proj2_kicker: "Tese · Ciência de dados",
    proj2_name: "Previsão do tempo de parada na Conjectura de Collatz",
    proj2_desc: "Análise dinâmica computacional da Conjectura de Collatz: gerei um dataset de 100.000 sequências com um algoritmo otimizado por memoização em Python, fiz uma análise exploratória de dados e treinei um modelo Random Forest para prever o tempo de parada (stopping time) de cada sequência a partir de propriedades do número inicial.",
    proj2_stat1: "sequências analisadas",
    proj2_stat2: "da variabilidade explicada (R²)",
    proj2_stat3: "passos de erro médio (MAE)",
    proj2_cta: "Ler tese completa",
    collatz_title: "Teste seu próprio número",
    collatz_desc: "Digite qualquer inteiro positivo e veja sua trajetória de Collatz se animar, igual à de n = 27 no início.",
    collatz_input_label: "Número inteiro positivo",
    collatz_run: "Ver trajetória",
    collatz_error: "Digite um número inteiro positivo.",
    collatz_stats: "n = {n} → convergiu para 1 em {steps} passos · valor máximo alcançado: {max}",
    collatz_uncapped: "n = {n} → não convergiu após {steps} passos (a Conjectura de Collatz não tem demonstração formal para todo n)",
    contact_copied: "Copiado!",
    skills_title: "Habilidades",
    skills_group1: "Desenvolvimento",
    skills_group2: "Dados",
    skills_group3: "Automação",
    skills_group4: "Comunicação",
    contact_title: "Vamos conversar",
    contact_text: "Se quiser falar sobre uma oportunidade, um projeto, ou só dizer olá, me escreva.",
    footer_text: "Feito por Tomás Venegas."
  },
  fr: {
    nav_about: "À propos",
    nav_experience: "Expérience",
    nav_cv: "CV",
    nav_projects: "Projets",
    nav_skills: "Compétences",
    nav_contact: "Contact",
    hero_kicker: "Portfolio",
    hero_subtitle: "Développeur logiciel et entrepreneur. Je construis des produits, des automatisations et des analyses de données.",
    hero_cta_projects: "Voir les projets",
    hero_cta_contact: "Me contacter",
    hero_visual_caption: "Trajectoire de Collatz pour n = 27",
    about_title: "À propos de moi",
    about_text: "J'ai 23 ans et je poursuis un Bachelor of Science in Software Development à Brigham Young University–Idaho. Je combine développement logiciel et entrepreneuriat : j'aide actuellement des équipes à développer leurs compétences à distance, tout en gérant ma propre boutique e-commerce. Je m'intéresse particulièrement à l'automatisation des processus et à l'analyse de données appliquées à des problèmes réels, de la logistique d'importation aux questions ouvertes en mathématiques.",
    about_fact_education: "Formation",
    about_fact_education_value: "B.S. Software Development, BYU–Idaho (2024–2028)",
    about_fact_languages: "Langues",
    about_fact_languages_value: "Espagnol · Anglais (C1-C2) · Portugais (C2)",
    about_fact_certs: "Certifications",
    about_fact_certs_value: "Social Media Marketing — HubSpot Academy",
    exp_title: "Expérience",
    exp1_date: "Août 2025 — Présent",
    exp1_role: "Technical Support & Onboarding Specialist",
    exp1_org: "Missionary Training Center USA (MTC) — télétravail",
    exp1_b1: "Coordonne les flux d'intégration technique et assure un support continu aux utilisateurs, en collaborant directement avec des équipes de direction aux États-Unis en anglais, portugais et espagnol.",
    exp1_b2: "Anime trois sessions de groupe transverses par semaine, en coordonnant différentes équipes et en adaptant la communication aux besoins des utilisateurs.",
    exp1_b3: "Gère l'ensemble du cycle de suivi et de documentation des cohortes d'intégration : journaux de progression, plans d'exécution, résumés de mentorat et données CRM.",
    exp1_b4: "Identifie les problèmes récurrents de flux et de communication, et développe une documentation et des FAQ proactives, contribuant à une amélioration de 20 % de la précision et de la livraison de l'intégration.",
    exp1_b5: "Résout les problèmes des utilisateurs et de flux de travail, en s'adaptant rapidement aux changements de logiciels, de processus et de priorités opérationnelles.",
    exp2_date: "2026 — Présent",
    exp2_role: "Founder & Automation Engineer — International E-commerce & Import Operations",
    exp2_org: "Repuestolandia",
    exp2_b1: "Développe une entreprise internationale d'importation et de e-commerce de pièces automobiles, conçue pour automatiser de bout en bout l'approvisionnement de produits depuis le Brésil et leur vente au Chili.",
    exp2_b2: "A conçu et mis en place des flux de travail automatisés reliant fournisseurs, données produits, inventaire, tarification et Shopify à l'aide de n8n, d'API REST, de Google Sheets, d'outils d'IA et d'une infrastructure cloud.",
    exp2_b3: "A construit des automatisations pour l'ingestion, la classification, la traduction, la tarification, la publication et la vérification des stocks de produits, en intégrant des règles métier à des sources de données externes.",
    exp2_b4: "A développé une vérification automatique des stocks déclenchée par les nouvelles commandes afin d'éviter les surventes et d'améliorer la fiabilité des commandes.",
    exp2_b5: "Déploie et maintient un environnement d'automatisation auto-hébergé sur Ubuntu/DigitalOcean avec Docker, Caddy, Cloudflare DNS et un SSL automatisé.",
    exp2_b6: "A intégré l'API Admin de Shopify et résolu des problèmes d'authentification, de permissions, de dépendances de données et d'exécution des flux, en apprenant et en mettant en œuvre de nouvelles technologies de façon autonome.",
    exp3_date: "Juin 2024 — Sept. 2024",
    exp3_role: "Premium Guest Service Specialist / Trilingual Guest Relations",
    exp3_org: "Valle Nevado Ski Resort, Chile",
    exp3_b1: "A accueilli des clients internationaux en anglais et en portugais en plus de l'espagnol, en résolvant des demandes de service et des problèmes de communication dans un environnement au rythme soutenu.",
    exp3_b2: "A géré plusieurs priorités simultanées tout en maintenant le souci du détail, le professionnalisme et le respect des procédures opérationnelles et de sécurité.",
    exp3_b3: "S'est rapidement adapté aux besoins changeants des clients et à des exigences opérationnelles sensibles au facteur temps.",
    exp4_date: "Févr. 2023 — Avr. 2024",
    exp4_role: "Executive Assistant to Regional Director",
    exp4_org: "International Volunteer Operations, Santos, Brasil",
    exp4_b1: "A été le principal point de liaison opérationnel et multilingue d'un directeur régional, coordonnant les communications, la logistique, la documentation et les processus organisationnels dans un cadre international.",
    exp4_b2: "A géré les structures de soutien, les ressources et la logistique opérationnelle pour une communauté multiculturelle de plus de 150 volontaires internationaux.",
    exp4_b3: "A été le principal point de contact pour résoudre les blocages linguistiques, opérationnels et de flux de travail, en soutenant l'adoption des procédures organisationnelles.",
    exp4_b4: "A réalisé des audits quotidiens à fort volume sur les données de performance et de conformité, en maintenant précision et cohérence avec les standards de l'organisation.",
    exp4_b5: "A coordonné la communication entre des parties prenantes de plusieurs pays et cultures, exigeant une forte capacité de priorisation, d'organisation et de résolution de problèmes.",
    cv_title: "CV",
    cv_education_title: "Formation",
    cv_edu1_date: "Nov. 2024 — Juin 2028",
    cv_edu1_role: "Bachelor of Science in Software Development",
    cv_edu1_org: "Brigham Young University–Idaho",
    cv_edu1_desc: "En cours.",
    cv_certs_title: "Certifications",
    cv_cert1: "Social Media Marketing — HubSpot Academy",
    cv_cert2: "Certificate of Language Ability — English Speaking (C2)",
    cv_cert3: "C2 Portuguese Proficiency (Mastery Level)",
    cv_view_certs: "Voir les certificats →",
    cv_languages_title: "Langues",
    cv_lang1: "Espagnol — langue maternelle",
    cv_lang2: "Anglais — C2",
    cv_lang3: "Portugais — C2",
    cv_skills_title: "Compétences techniques",
    cv_skill1: "Développement : HTML, CSS, JavaScript, Python",
    cv_skill2: "Données et Machine Learning : Pandas, Scikit-learn, Matplotlib, Seaborn, Random Forest",
    cv_skill3: "Automatisation : n8n",
    cv_skill4: "E-commerce : Shopify",
    cv_skill5: "Outils collaboratifs : CRM (environnement Microsoft), Zoom, Google Meet, Microsoft Teams",
    projects_title: "Projets",
    proj1_kicker: "Entrepreneuriat · E-commerce",
    proj1_desc: "Une entreprise internationale d'importation et de e-commerce de pièces automobiles, conçue pour automatiser de bout en bout l'approvisionnement de produits depuis le Brésil et leur vente au Chili.",
    proj1_b1: "J'ai conçu et mis en place des flux de travail automatisés reliant fournisseurs, données produits, inventaire, tarification et Shopify à l'aide de n8n, d'API REST, de Google Sheets, d'outils d'IA et d'une infrastructure cloud.",
    proj1_b2: "J'ai construit des automatisations pour l'ingestion, la classification, la traduction, la tarification, la publication et la vérification des stocks de produits, en intégrant des règles métier à des sources de données externes.",
    proj1_b3: "J'ai développé une vérification automatique des stocks déclenchée par les nouvelles commandes afin d'éviter les surventes et d'améliorer la fiabilité des commandes.",
    proj1_b4: "Je déploie et maintiens un environnement d'automatisation auto-hébergé sur Ubuntu/DigitalOcean avec Docker, Caddy, Cloudflare DNS et un SSL automatisé.",
    proj1_b5: "J'ai intégré l'API Admin de Shopify et résolu des problèmes d'authentification, de permissions, de dépendances de données et d'exécution des flux, en apprenant et en mettant en œuvre de nouvelles technologies de façon autonome.",
    proj1_stack_ai: "Outils d'IA",
    proj1_cta: "Voir la boutique",
    proj1_flow_node1_title: "Fournisseurs",
    proj1_flow_node1_sub: "Brésil",
    proj1_flow_node2_sub: "Automatisation de bout en bout",
    proj1_flow_hint: "Survolez pour voir le détail",
    proj1_flow_detail1: "Scraping des produits chez les fournisseurs",
    proj1_flow_detail2: "Traduction automatique des noms de produits (portugais → espagnol)",
    proj1_flow_detail3: "Conversion des valeurs de BRL en CLP",
    proj1_flow_detail4: "Calcul du prix final pour le client",
    proj1_flow_detail5: "Enregistrement dans Google Sheets de la marge et de chaque dépense séparément",
    proj1_flow_detail6: "Vérification du stock chez le fournisseur à la réception d'une commande : si indisponible, marque le produit comme épuisé sur Shopify et envoie une notification pour effectuer le remboursement",
    proj1_flow_node3_sub: "Publication · Stock",
    proj1_flow_node4_sub: "Envoi national — origine",
    proj1_flow_node5_sub: "Envoi national — destination",
    proj1_flow_node6_title: "Client",
    proj1_flow_node6_sub: "Chili",
    proj2_kicker: "Thèse · Science des données",
    proj2_name: "Prédiction du temps d'arrêt dans la conjecture de Collatz",
    proj2_desc: "Analyse dynamique computationnelle de la conjecture de Collatz : j'ai généré un jeu de données de 100 000 séquences avec un algorithme Python optimisé par mémoïsation, réalisé une analyse exploratoire des données, puis entraîné un modèle Random Forest pour prédire le temps d'arrêt (stopping time) de chaque séquence à partir des propriétés du nombre de départ.",
    proj2_stat1: "séquences analysées",
    proj2_stat2: "de la variabilité expliquée (R²)",
    proj2_stat3: "pas d'erreur moyenne (MAE)",
    proj2_cta: "Lire la thèse complète",
    collatz_title: "Essaie ton propre nombre",
    collatz_desc: "Entre un entier positif et regarde sa trajectoire de Collatz s'animer, comme celle de n = 27 en haut de page.",
    collatz_input_label: "Entier positif",
    collatz_run: "Voir la trajectoire",
    collatz_error: "Entre un entier positif.",
    collatz_stats: "n = {n} → convergé vers 1 en {steps} étapes · valeur maximale atteinte : {max}",
    collatz_uncapped: "n = {n} → n'a pas convergé après {steps} étapes (la conjecture de Collatz n'a pas de preuve formelle pour tout n)",
    contact_copied: "Copié !",
    skills_title: "Compétences",
    skills_group1: "Développement",
    skills_group2: "Données",
    skills_group3: "Automatisation",
    skills_group4: "Communication",
    contact_title: "Discutons",
    contact_text: "Pour échanger sur une opportunité, un projet, ou simplement dire bonjour, écrivez-moi.",
    footer_text: "Réalisé par Tomás Venegas."
  }
};

const STORAGE_KEY = "portfolio-lang";

function detectInitialLang(){
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && translations[saved]) return saved;
  const nav = (navigator.language || "es").slice(0,2);
  return translations[nav] ? nav : "es";
}

let langSwitchTimeout = null;

function setLanguage(lang){
  if (!translations[lang]) return;
  const dict = translations[lang];

  document.body.classList.add("is-switching-lang");
  if (langSwitchTimeout) window.clearTimeout(langSwitchTimeout);
  langSwitchTimeout = window.setTimeout(() => {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-label]").forEach(el => {
      const key = el.getAttribute("data-i18n-label");
      if (dict[key]) el.setAttribute("aria-label", dict[key]);
    });
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    localStorage.setItem(STORAGE_KEY, lang);
    document.body.classList.remove("is-switching-lang");
    langSwitchTimeout = null;
  }, 100);
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
});

setLanguage(detectInitialLang());

/* ==========================================================
   Header scroll state + progress bar
   ========================================================== */
const header = document.getElementById("siteHeader");
const progressLine = document.getElementById("progressLine");

function onScroll(){
  const scrollY = window.scrollY;
  header.classList.toggle("scrolled", scrollY > 40);

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
  progressLine.style.width = progress + "%";
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ==========================================================
   Mobile menu
   ========================================================== */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});
mainNav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => mainNav.classList.remove("open"));
});

/* ==========================================================
   Active nav link on scroll (scrollspy)
   ========================================================== */
const navLinks = document.querySelectorAll(".main-nav a");
const navSections = [];
navLinks.forEach(link => {
  const section = document.getElementById(link.getAttribute("href").slice(1));
  if (section) navSections.push({ section, link });
});
const heroSection = document.getElementById("inicio");
if (heroSection) navSections.push({ section: heroSection, link: null });

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const match = navSections.find(s => s.section === entry.target);
    navLinks.forEach(a => a.classList.remove("active"));
    if (match && match.link) match.link.classList.add("active");
  });
}, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

navSections.forEach(({ section }) => navObserver.observe(section));

/* ==========================================================
   Scroll reveal (restrained: whole sections, no per-item stagger)
   ========================================================== */
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

/* ==========================================================
   Stat counters (single orchestrated data reveal)
   ========================================================== */
const statEls = document.querySelectorAll(".stat-number");
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.getAttribute("data-count"), 10);
    const prefix = el.getAttribute("data-prefix") || "";
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1400;
    const start = performance.now();

    function tick(now){
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(target * eased);
      el.textContent = prefix + value.toLocaleString("es-CL") + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    statObserver.unobserve(el);
  });
}, { threshold: 0.5 });
statEls.forEach(el => statObserver.observe(el));

/* ==========================================================
   Collatz canvas renderer — shared by the hero (n = 27, the
   one memorable, orchestrated hero moment) and the interactive
   explorer in the thesis project card.
   ========================================================== */
function collatzSequence(n){
  const seq = [n];
  while (n !== 1){
    n = (n % 2 === 0) ? n / 2 : 3 * n + 1;
    seq.push(n);
  }
  return seq;
}

function collatzSequenceCapped(n, maxSteps){
  // Uses BigInt: plain JS numbers lose precision past Number.MAX_SAFE_INTEGER,
  // which would silently corrupt the math for large inputs.
  let current = BigInt(n);
  const seq = [current];
  let steps = 0;
  while (current !== 1n && steps < maxSteps){
    current = (current % 2n === 0n) ? current / 2n : current * 3n + 1n;
    seq.push(current);
    steps++;
  }
  return { seq, converged: current === 1n };
}

function createCollatzRenderer(canvas){
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;

  let sequence = [1];
  let logMax = 1;
  let progressRatio = 0;
  let animId = null;

  function resize(){
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw(progressRatio);
  }

  function pointFor(i, w, h){
    const x = (i / Math.max(1, sequence.length - 1)) * w;
    const v = sequence[i];
    const norm = v <= 1 ? 0 : Math.log(v) / logMax;
    const y = h - norm * (h * 0.86) - h * 0.06;
    return [x, y];
  }

  function draw(ratio){
    const w = canvas.getBoundingClientRect().width;
    const h = canvas.getBoundingClientRect().height;
    ctx.clearRect(0, 0, w, h);

    const visibleCount = Math.max(2, Math.floor(sequence.length * ratio));

    // subtle grid
    ctx.strokeStyle = "rgba(242,241,237,0.06)";
    ctx.lineWidth = 1;
    for (let gy = 0; gy <= 4; gy++){
      const y = (h / 4) * gy;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // path
    ctx.beginPath();
    for (let i = 0; i < visibleCount; i++){
      const [x, y] = pointFor(i, w, h);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    const gradient = ctx.createLinearGradient(0, 0, w, 0);
    gradient.addColorStop(0, "#4d4494");
    gradient.addColorStop(1, "#7c6ff2");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.stroke();

    // leading point
    if (visibleCount > 0){
      const [lx, ly] = pointFor(visibleCount - 1, w, h);
      ctx.beginPath();
      ctx.arc(lx, ly, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#7c6ff2";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(lx, ly, 9, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(124,111,242,0.35)";
      ctx.stroke();
    }
  }

  function animate(duration){
    if (animId) cancelAnimationFrame(animId);
    const startTime = performance.now();
    function step(now){
      const t = Math.min((now - startTime) / duration, 1);
      progressRatio = 1 - Math.pow(1 - t, 2);
      draw(progressRatio);
      if (t < 1) animId = requestAnimationFrame(step);
      else animId = null;
    }
    animId = requestAnimationFrame(step);
  }

  window.addEventListener("resize", resize);

  return {
    load(seq){
      sequence = seq;
      const maxVal = Math.max(...seq, 2);
      logMax = Math.log(maxVal) || 1;
      progressRatio = 0;
      resize();
    },
    play(duration){
      animate(duration || 2200);
    },
    showFull(){
      progressRatio = 1;
      resize();
    }
  };
}

function initHeroCollatzCanvas(){
  const canvas = document.getElementById("collatzCanvas");
  if (!canvas) return;
  const renderer = createCollatzRenderer(canvas);
  renderer.load(collatzSequence(27));

  const canvasObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        renderer.play(2200);
        canvasObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  canvasObserver.observe(canvas);
}

initHeroCollatzCanvas();

/* ==========================================================
   Interactive Collatz explorer (thesis project card)
   ========================================================== */
function initCollatzExplorer(){
  const canvas = document.getElementById("collatzExplorerCanvas");
  const input = document.getElementById("collatzInput");
  const button = document.getElementById("collatzRun");
  const statsEl = document.getElementById("collatzStats");
  if (!canvas || !input || !button || !statsEl) return;

  const MAX_STEPS = 100000;
  const renderer = createCollatzRenderer(canvas);

  function currentDict(){
    const lang = document.documentElement.getAttribute("lang");
    return translations[lang] || translations.es;
  }

  function run(){
    const dict = currentDict();
    const raw = input.value.trim();

    // Cap at 15 digits: generous for a real demonstration, small enough that
    // BigInt arithmetic stays instant and the input can't hang the tab.
    if (!/^\d{1,15}$/.test(raw) || /^0+$/.test(raw)){
      statsEl.textContent = dict.collatz_error;
      statsEl.classList.add("collatz-explorer-error");
      return;
    }
    const n = BigInt(raw);

    statsEl.classList.remove("collatz-explorer-error");
    const { seq, converged } = collatzSequenceCapped(n, MAX_STEPS);
    renderer.load(seq.map(v => Number(v)));
    renderer.play(1400);

    const steps = seq.length - 1;
    let maxVal = seq[0];
    for (const v of seq) if (v > maxVal) maxVal = v;
    const template = converged ? dict.collatz_stats : dict.collatz_uncapped;
    statsEl.textContent = template
      .replace("{n}", n.toLocaleString("es-CL"))
      .replace("{steps}", steps.toLocaleString("es-CL"))
      .replace("{max}", maxVal.toLocaleString("es-CL"));
  }

  button.addEventListener("click", run);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") run();
  });

  renderer.load(collatzSequence(27));
  renderer.showFull();
}

initCollatzExplorer();

/* ==========================================================
   Copy email to clipboard (Contact)
   ========================================================== */
const contactEmailBtn = document.getElementById("contactEmailBtn");
const contactCopiedTip = document.getElementById("contactCopiedTip");
if (contactEmailBtn && contactCopiedTip){
  let copyTipTimeout = null;
  contactEmailBtn.addEventListener("click", () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText("venegas.osses.tomas@gmail.com").then(() => {
      contactCopiedTip.classList.add("show");
      if (copyTipTimeout) window.clearTimeout(copyTipTimeout);
      copyTipTimeout = window.setTimeout(() => {
        contactCopiedTip.classList.remove("show");
      }, 1600);
    }).catch(() => {});
  });
}

/* ==========================================================
   Spotlight on project cards (cursor-following glow,
   fine-pointer only — rAF-throttled, cheap: two custom
   properties on one element per frame)
   ========================================================== */
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches){
  document.querySelectorAll(".project").forEach(card => {
    let frame = null;
    card.addEventListener("mousemove", (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
        frame = null;
      });
    });
  });
}

/* ==========================================================
   Magnetic hero CTA (subtle pull toward the cursor, capped
   displacement, fine-pointer only, respects reduced motion)
   ========================================================== */
const magneticWrap = document.getElementById("magneticWrap");
if (
  magneticWrap &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
){
  const MAX_OFFSET = 10;
  const magneticBtn = magneticWrap.querySelector(".btn");
  magneticWrap.addEventListener("mousemove", (e) => {
    const rect = magneticBtn.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const x = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dx * 0.3));
    const y = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dy * 0.3));
    magneticWrap.style.transform = `translate(${x}px, ${y}px)`;
  });
  magneticWrap.addEventListener("mouseleave", () => {
    magneticWrap.style.transform = "";
  });
}
