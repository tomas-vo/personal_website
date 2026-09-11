/* ==========================================================
   Traducciones
   ========================================================== */
const translations = {
  es: {
    nav_about: "Sobre mí",
    nav_experience: "Experiencia",
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
    about_fact_languages_value: "Español · Inglés (C2) · Portugués (C2)",
    about_fact_certs: "Certificaciones",
    about_fact_certs_value: "Social Media Marketing — HubSpot Academy",
    exp_title: "Experiencia",
    exp1_date: "Ago. 2025 — Presente",
    exp1_role: "Mentor / Onboarding Specialist",
    exp1_org: "MTC Utah, Estados Unidos (remoto)",
    exp1_desc: "Ayudo a trabajadores a desarrollar habilidades de idioma y trato con prospectos, y gestiono reuniones grupales con equipos de México, Estados Unidos, Brasil, Argentina, Perú, Colombia y Chile.",
    exp2_date: "May. 2025 — Ago. 2025",
    exp2_role: "Ropería",
    exp2_org: "Clínica Universidad de Los Andes",
    exp2_desc: "Retiro de carros de ropa sucia y reposición de carros vacíos en los distintos pasillos y áreas de la clínica.",
    exp3_date: "May. 2023 — Abr. 2024",
    exp3_role: "Asistente Regional",
    exp3_org: "The Church of Jesus Christ of Latter-day Saints",
    exp3_desc: "Apoyo administrativo y de coordinación a nivel regional.",
    projects_title: "Proyectos",
    proj1_kicker: "Emprendimiento · E-commerce",
    proj1_desc: "Tienda de comercio electrónico de repuestos automotrices importados desde Brasil a Chile. Diseñé un flujo de automatización 100% en n8n que conecta la tienda Shopify con el proceso de importación y despacho vía Correios, reduciendo el trabajo manual de principio a fin.",
    proj2_kicker: "Tesis · Ciencia de datos",
    proj2_name: "Predicción del tiempo de parada en la Conjetura de Collatz",
    proj2_desc: "Análisis dinámico computacional de la Conjetura de Collatz: generé un dataset de 100.000 secuencias con un algoritmo optimizado por memoización en Python, hice un análisis exploratorio de datos y entrené un modelo Random Forest para predecir el tiempo de parada (stopping time) de cada secuencia a partir de propiedades del número inicial.",
    proj2_stat1: "secuencias analizadas",
    proj2_stat2: "de la variabilidad explicada (R²)",
    proj2_stat3: "pasos de error promedio (MAE)",
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
    about_fact_languages_value: "Spanish · English (C2) · Portuguese (C2)",
    about_fact_certs: "Certifications",
    about_fact_certs_value: "Social Media Marketing — HubSpot Academy",
    exp_title: "Experience",
    exp1_date: "Aug. 2025 — Present",
    exp1_role: "Mentor / Onboarding Specialist",
    exp1_org: "MTC Utah, United States (remote)",
    exp1_desc: "I help workers develop language and prospect-handling skills, and run group meetings with teams across Mexico, the United States, Brazil, Argentina, Peru, Colombia, and Chile.",
    exp2_date: "May 2025 — Aug. 2025",
    exp2_role: "Linen Room Assistant",
    exp2_org: "Clínica Universidad de Los Andes",
    exp2_desc: "Collected dirty-linen carts and restocked empty ones across the clinic's different wards and hallways.",
    exp3_date: "May 2023 — Apr. 2024",
    exp3_role: "Regional Assistant",
    exp3_org: "The Church of Jesus Christ of Latter-day Saints",
    exp3_desc: "Administrative and coordination support at a regional level.",
    projects_title: "Projects",
    proj1_kicker: "Entrepreneurship · E-commerce",
    proj1_desc: "An e-commerce store for auto parts imported from Brazil to Chile. I designed a fully automated n8n workflow connecting the Shopify store with the import and Correios shipping process, cutting manual work from end to end.",
    proj2_kicker: "Thesis · Data science",
    proj2_name: "Predicting stopping time in the Collatz Conjecture",
    proj2_desc: "A computational dynamic analysis of the Collatz Conjecture: I generated a dataset of 100,000 sequences with a memoization-optimized Python algorithm, ran an exploratory data analysis, and trained a Random Forest model to predict each sequence's stopping time from properties of the starting number.",
    proj2_stat1: "sequences analyzed",
    proj2_stat2: "of variability explained (R²)",
    proj2_stat3: "average error in steps (MAE)",
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
    about_fact_languages_value: "Espanhol · Inglês (C2) · Português (C2)",
    about_fact_certs: "Certificações",
    about_fact_certs_value: "Social Media Marketing — HubSpot Academy",
    exp_title: "Experiência",
    exp1_date: "Ago. 2025 — Atual",
    exp1_role: "Mentor / Onboarding Specialist",
    exp1_org: "MTC Utah, Estados Unidos (remoto)",
    exp1_desc: "Ajudo trabalhadores a desenvolver habilidades de idioma e trato com clientes potenciais, e coordeno reuniões em grupo com equipes do México, Estados Unidos, Brasil, Argentina, Peru, Colômbia e Chile.",
    exp2_date: "Mai. 2025 — Ago. 2025",
    exp2_role: "Rouparia",
    exp2_org: "Clínica Universidad de Los Andes",
    exp2_desc: "Recolhimento de carrinhos de roupa suja e reposição de carrinhos vazios nos diferentes corredores e áreas da clínica.",
    exp3_date: "Mai. 2023 — Abr. 2024",
    exp3_role: "Assistente Regional",
    exp3_org: "The Church of Jesus Christ of Latter-day Saints",
    exp3_desc: "Apoio administrativo e de coordenação em nível regional.",
    projects_title: "Projetos",
    proj1_kicker: "Empreendedorismo · E-commerce",
    proj1_desc: "Loja de e-commerce de autopeças importadas do Brasil para o Chile. Desenhei um fluxo de automação 100% em n8n que conecta a loja Shopify ao processo de importação e envio via Correios, reduzindo o trabalho manual do início ao fim.",
    proj2_kicker: "Tese · Ciência de dados",
    proj2_name: "Previsão do tempo de parada na Conjectura de Collatz",
    proj2_desc: "Análise dinâmica computacional da Conjectura de Collatz: gerei um dataset de 100.000 sequências com um algoritmo otimizado por memoização em Python, fiz uma análise exploratória de dados e treinei um modelo Random Forest para prever o tempo de parada (stopping time) de cada sequência a partir de propriedades do número inicial.",
    proj2_stat1: "sequências analisadas",
    proj2_stat2: "da variabilidade explicada (R²)",
    proj2_stat3: "passos de erro médio (MAE)",
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
    about_fact_languages_value: "Espagnol · Anglais (C2) · Portugais (C2)",
    about_fact_certs: "Certifications",
    about_fact_certs_value: "Social Media Marketing — HubSpot Academy",
    exp_title: "Expérience",
    exp1_date: "Août 2025 — Présent",
    exp1_role: "Mentor / Onboarding Specialist",
    exp1_org: "MTC Utah, États-Unis (télétravail)",
    exp1_desc: "J'aide des collaborateurs à développer leurs compétences linguistiques et de relation client, et j'anime des réunions de groupe avec des équipes au Mexique, aux États-Unis, au Brésil, en Argentine, au Pérou, en Colombie et au Chili.",
    exp2_date: "Mai 2025 — Août 2025",
    exp2_role: "Lingerie",
    exp2_org: "Clínica Universidad de Los Andes",
    exp2_desc: "Collecte des chariots de linge sale et réapprovisionnement des chariots vides dans les différents couloirs et services de la clinique.",
    exp3_date: "Mai 2023 — Avr. 2024",
    exp3_role: "Assistant régional",
    exp3_org: "The Church of Jesus Christ of Latter-day Saints",
    exp3_desc: "Soutien administratif et de coordination au niveau régional.",
    projects_title: "Projets",
    proj1_kicker: "Entrepreneuriat · E-commerce",
    proj1_desc: "Boutique e-commerce de pièces automobiles importées du Brésil vers le Chili. J'ai conçu un flux d'automatisation entièrement réalisé avec n8n reliant la boutique Shopify au processus d'importation et d'expédition via Correios, réduisant le travail manuel de bout en bout.",
    proj2_kicker: "Thèse · Science des données",
    proj2_name: "Prédiction du temps d'arrêt dans la conjecture de Collatz",
    proj2_desc: "Analyse dynamique computationnelle de la conjecture de Collatz : j'ai généré un jeu de données de 100 000 séquences avec un algorithme Python optimisé par mémoïsation, réalisé une analyse exploratoire des données, puis entraîné un modèle Random Forest pour prédire le temps d'arrêt (stopping time) de chaque séquence à partir des propriétés du nombre de départ.",
    proj2_stat1: "séquences analysées",
    proj2_stat2: "de la variabilité expliquée (R²)",
    proj2_stat3: "pas d'erreur moyenne (MAE)",
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

function setLanguage(lang){
  if (!translations[lang]) return;
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  localStorage.setItem(STORAGE_KEY, lang);
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
   Hero canvas — Collatz trajectory for n = 27
   (the one memorable, orchestrated hero moment)
   ========================================================== */
function collatzSequence(n){
  const seq = [n];
  while (n !== 1){
    n = (n % 2 === 0) ? n / 2 : 3 * n + 1;
    seq.push(n);
  }
  return seq;
}

function initCollatzCanvas(){
  const canvas = document.getElementById("collatzCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;

  function resize(){
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw(progressRatio);
  }

  const sequence = collatzSequence(27);
  const maxVal = Math.max(...sequence);
  const logMax = Math.log(maxVal);

  let progressRatio = 0;
  let animId = null;

  function pointFor(i, w, h){
    const x = (i / (sequence.length - 1)) * w;
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

  function animate(startTime){
    const duration = 2200;
    function step(now){
      const t = Math.min((now - startTime) / duration, 1);
      progressRatio = 1 - Math.pow(1 - t, 2);
      draw(progressRatio);
      if (t < 1) animId = requestAnimationFrame(step);
    }
    animId = requestAnimationFrame(step);
  }

  window.addEventListener("resize", resize);
  resize();

  const canvasObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animId){
        animate(performance.now());
        canvasObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  canvasObserver.observe(canvas);
}

initCollatzCanvas();