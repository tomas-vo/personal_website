/* ==========================================================
   Traducciones del shell de la página (el contenido de cada
   credencial queda en su idioma/formato original, como pide
   CLAUDE.md para textos de certificación oficial)
   ========================================================== */
const certsTranslations = {
  es: {
    back_link: "&larr; Volver al portafolio",
    kicker: "Certificados y credenciales",
    page_title: "Certificaciones",
    intro: "Formación complementaria en marketing digital, idiomas y capacitación, verificada por cada institución emisora.",
    expand_hint: "Ver certificado completo →",
    view_credential: "Ver credencial",
    close_label: "Cerrar",
    cat_education: "Educación",
    cat_languages: "Idiomas",
    cat_badges: "Insignias",

    cert1_title: "Certificado en Marketing en Redes Sociales",
    cert1_meta: "Válido desde el 13 de agosto de 2026 hasta el 11 de septiembre de 2028.",
    cert1_valid_from_label: "Válido desde",
    cert1_valid_from_value: "13 de agosto de 2026",
    cert1_valid_to_label: "Válido hasta",
    cert1_valid_to_value: "11 de septiembre de 2028",
    cert1_curriculum_heading: "Plan de estudio completado",
    cert1_module1: "Introducción a la publicidad en redes sociales",
    cert1_module2: "Siguientes pasos en la certificación de marketing para redes sociales",
    cert1_module3: "Aspectos básicos para triunfar siempre en las redes",
    cert1_module4: "Cómo medir el retorno de la inversión de las redes sociales",
    cert1_module5: "Cómo usar las redes sociales para construir relaciones personales",
    cert1_module6: "Cómo ampliar tu alcance en las redes sociales",
    cert1_module7: "Cómo crear una estrategia de contenido para las redes sociales",
    cert1_module8: "Escucha y monitorización en las redes sociales",
    cert1_module9: "Desarrollar una estrategia de redes sociales",
    cert1_module10: "Cómo usar la plantilla de calendario de contenido para las redes sociales",

    cert2_title: "Certificado de Habilidad Lingüística — Expresión Oral en Inglés",
    cert3_title: "Certificado de Habilidad Lingüística — Expresión Oral en Portugués",
    lang_score_label: "Puntaje",
    lang_level_label: "Nivel CEFR",

    cert4_title: "Visión y Alineación",
    cert5_title: "Profesionalismo I",
    badge_org_line: "Insignia de Capacitador — Missionary Training Centers · Verificado por Parchment",
    modal_org_line: "Insignia de Capacitador — Missionary Training Centers",
    status_label: "Estado",
    issued_label: "Emitido el",
    achievement_label: "Tipo de logro",
    achievement_value: "Insignia",
    criteria_heading: "Criterios de obtención",
    narrative_heading: "Narrativa",

    comp_business_alignment: "Alineación de Negocio",
    comp_strategic_agility: "Agilidad Estratégica",
    comp_outcome_based: "Instrucción Basada en Resultados",
    comp_empowerment: "Empoderamiento",

    va_status_value: "Verificado",
    va_issued_value: "20 de febrero de 2026",
    va_desc: "El destinatario de esta insignia se destaca guiando a las personas hacia sus objetivos al alinear su instrucción con los resultados organizacionales. Estos capacitadores demuestran una comprensión profunda de su propósito docente e integran eficazmente los principios fundamentales en sus sesiones de formación. Inspiran y empoderan a los alumnos conectando toda la instrucción con la misión y visión general de la organización.",
    va_crit1: "<strong>Alineación de Liderazgo:</strong> capacidad para alinear los programas de formación con la dirección estratégica y los objetivos establecidos por el liderazgo.",
    va_crit2: "<strong>Instrucción Basada en Resultados:</strong> conocimiento integral de los principios y valores fundamentales, y capacidad para transmitir su importancia en un contexto docente.",
    va_crit3: "<strong>Enseñanza Contextual:</strong> habilidad para incorporar aplicaciones prácticas que refuercen los principios clave en las sesiones de formación.",
    va_crit4: "<strong>Instrucción con Propósito:</strong> experiencia en conectar todo el contenido de formación con la misión y el propósito más amplios de la organización.",
    va_crit5: "<strong>Empoderamiento:</strong> capacidad para inspirar y empoderar a los aprendices a alcanzar sus objetivos mediante una instrucción práctica e impactante.",
    va_narrative_text: "Otorgada por completar los requisitos del grupo In-Field Badging: Vision &amp; Alignment.",

    prof_issued_value: "15 de enero de 2026",
    prof_desc: "El destinatario de esta insignia ha demostrado de forma constante puntualidad, comunicación efectiva y decoro en el lugar de trabajo. Busca oportunidades de crecimiento a través de la retroalimentación, la observación y la reflexión. Establece relaciones positivas con compañeros de trabajo y estudiantes.",
    prof_crit1: "<strong>Puntualidad y Preparación:</strong> llega puntualmente a los turnos y citas, garantizando estar preparado para cada interacción.",
    prof_crit2: "<strong>Gestión del Tiempo:</strong> comienza y termina las interacciones laborales puntualmente, utilizando el tiempo de forma eficiente.",
    prof_crit3: "<strong>Apariencia Profesional:</strong> cumple con los estándares del lugar de trabajo en cuanto a vestimenta y apariencia.",
    prof_crit4: "<strong>Entorno de Aprendizaje Óptimo:</strong> mantiene entornos libres de distracciones, incluyendo fondos apropiados en Zoom y conexiones de internet estables para las reuniones en línea.",
    prof_crit5: "<strong>Comunicación Profesional:</strong> utiliza un lenguaje digno, evitando jergas o expresiones demasiado informales.",
    prof_crit6: "<strong>Planificación Colaborativa:</strong> trabaja con los supervisores para aprovechar eficazmente el tiempo no dedicado a las tareas principales.",
    prof_crit7: "<strong>Participación Activa:</strong> asiste y participa activamente en todas las reuniones requeridas.",
    prof_crit8: "<strong>Receptividad a la Retroalimentación:</strong> muestra disposición para recibir y aplicar retroalimentación constructiva.",
    prof_crit9: "<strong>Interacciones Positivas:</strong> mantiene interacciones profesionales y positivas con colegas y otras personas.",
    prof_crit10: "<strong>Comunicación Regular:</strong> se comunica regularmente con el equipo, los supervisores y otras partes interesadas según se le indique.",
    prof_crit11: "<strong>Cumplimiento de Políticas:</strong> cumple con todas las políticas laborales y las expectativas específicas del rol.",
    prof_crit12: "<strong>Alineación de Liderazgo:</strong> alinea sus acciones e instrucciones con la dirección aprobada por el liderazgo.",
    prof_crit13: "<strong>Uso de Recursos:</strong> asegura que todo el trabajo se centre en los recursos aprobados.",
    prof_crit14: "<strong>Enfoque en el Equipo:</strong> prioriza el crecimiento y desarrollo de los miembros del equipo por sobre el reconocimiento personal.",
    prof_crit15: "<strong>Confianza y Respeto:</strong> establece relaciones de confianza y respeto con colegas y otras partes interesadas.",
    prof_narrative_text: "Otorgada por completar los requisitos del grupo In-Field Badging: Professionalism."
  },
  en: {
    back_link: "&larr; Back to portfolio",
    kicker: "Certificates & credentials",
    page_title: "Certifications",
    intro: "Complementary training in digital marketing, languages, and coaching, verified by each issuing institution.",
    expand_hint: "View full certificate →",
    view_credential: "View credential",
    close_label: "Close",
    cat_education: "Education",
    cat_languages: "Languages",
    cat_badges: "Badges",

    cert1_title: "Social Media Marketing Certification",
    cert1_meta: "Valid from August 13, 2026 to September 11, 2028.",
    cert1_valid_from_label: "Valid from",
    cert1_valid_from_value: "August 13, 2026",
    cert1_valid_to_label: "Valid until",
    cert1_valid_to_value: "September 11, 2028",
    cert1_curriculum_heading: "Completed curriculum",
    cert1_module1: "Introduction to social media advertising",
    cert1_module2: "Next steps in social media marketing certification",
    cert1_module3: "Fundamentals for always succeeding on social media",
    cert1_module4: "How to measure social media return on investment",
    cert1_module5: "How to use social media to build personal relationships",
    cert1_module6: "How to expand your social media reach",
    cert1_module7: "How to create a social media content strategy",
    cert1_module8: "Social media listening and monitoring",
    cert1_module9: "Developing a social media strategy",
    cert1_module10: "How to use the social media content calendar template",

    cert2_title: "Certificate of Language Ability — English Speaking",
    cert3_title: "Certificate of Language Ability — Portuguese Speaking",
    lang_score_label: "Score",
    lang_level_label: "CEFR level",

    cert4_title: "Vision & Alignment",
    cert5_title: "Professionalism I",
    badge_org_line: "Trainer Badge — Missionary Training Centers · Verified by Parchment",
    modal_org_line: "Trainer Badge — Missionary Training Centers",
    status_label: "Status",
    issued_label: "Issued on",
    achievement_label: "Achievement type",
    achievement_value: "Badge",
    criteria_heading: "Earning criteria",
    narrative_heading: "Narrative",

    comp_business_alignment: "Business Alignment",
    comp_strategic_agility: "Strategic Agility",
    comp_outcome_based: "Outcome-Based Instruction",
    comp_empowerment: "Empowerment",

    va_status_value: "Verified",
    va_issued_value: "Feb 20, 2026",
    va_desc: "The recipient of this badge excels in guiding individuals towards their goals by aligning their instruction with organizational outcomes. These trainers demonstrate a deep understanding of their teaching purpose and effectively integrate core principles into their training sessions. They inspire and empower learners by connecting all instruction to the overarching mission and vision of the organization.",
    va_crit1: "<strong>Leadership Alignment:</strong> ability to align training programs with the strategic direction and goals set by leadership.",
    va_crit2: "<strong>Outcome-Based Instruction:</strong> comprehensive knowledge of core principles and values and the ability to convey their significance in a teaching context.",
    va_crit3: "<strong>Contextual Teaching:</strong> skill in infusing training sessions with practical applications that support key principles.",
    va_crit4: "<strong>Purposeful Instruction:</strong> expertise in connecting all training content to the broader mission and purpose of the organization.",
    va_crit5: "<strong>Empowerment:</strong> capability to inspire and empower trainees to achieve their goals through practical and impactful instruction.",
    va_narrative_text: "Awarded for completing requirements in group In-Field Badging: Vision &amp; Alignment.",

    prof_issued_value: "Jan 15, 2026",
    prof_desc: "The recipient of this badge has consistently demonstrated punctuality, effective communication, and workplace decorum. They seek opportunities for growth through feedback, observations, and reflection. They establish positive relationships with coworkers and students.",
    prof_crit1: "<strong>Punctuality and Preparation:</strong> consistently arrives on time for shifts and appointments, ensuring readiness for each interaction.",
    prof_crit2: "<strong>Time Management:</strong> begins and ends work interactions punctually, utilizing time efficiently.",
    prof_crit3: "<strong>Professional Appearance:</strong> adheres to workplace standards of dress and appearance.",
    prof_crit4: "<strong>Optimal Learning Environment:</strong> maintains distraction-free environments, including appropriate Zoom backgrounds and stable internet connections for online meetings.",
    prof_crit5: "<strong>Professional Communication:</strong> uses dignified language, avoiding slang or overly casual expressions.",
    prof_crit6: "<strong>Collaborative Planning:</strong> works with supervisors to effectively utilize time not spent on primary tasks.",
    prof_crit7: "<strong>Active Participation:</strong> attends and engages in all required meetings.",
    prof_crit8: "<strong>Feedback Receptiveness:</strong> demonstrates a willingness to receive and apply constructive feedback.",
    prof_crit9: "<strong>Positive Interactions:</strong> maintains professional and positive interactions with colleagues and others.",
    prof_crit10: "<strong>Regular Communication:</strong> communicates regularly with team members, supervisors, and other stakeholders as directed.",
    prof_crit11: "<strong>Policy Adherence:</strong> follows all employment policies and role-specific expectations.",
    prof_crit12: "<strong>Leadership Alignment:</strong> aligns actions and instructions with approved direction from leadership.",
    prof_crit13: "<strong>Resource Utilization:</strong> ensures all work is centered around approved resources.",
    prof_crit14: "<strong>Team Focus:</strong> prioritizes the growth and development of team members over personal recognition.",
    prof_crit15: "<strong>Trust and Respect:</strong> establishes relationships of trust and respect with colleagues and stakeholders.",
    prof_narrative_text: "Awarded for completing requirements in group In-Field Badging: Professionalism."
  },
  pt: {
    back_link: "&larr; Voltar ao portfólio",
    kicker: "Certificados e credenciais",
    page_title: "Certificações",
    intro: "Formação complementar em marketing digital, idiomas e capacitação, verificada por cada instituição emissora.",
    expand_hint: "Ver certificado completo →",
    view_credential: "Ver credencial",
    close_label: "Fechar",
    cat_education: "Formação",
    cat_languages: "Idiomas",
    cat_badges: "Insígnias",

    cert1_title: "Certificação em Marketing de Redes Sociais",
    cert1_meta: "Válido de 13 de agosto de 2026 até 11 de setembro de 2028.",
    cert1_valid_from_label: "Válido de",
    cert1_valid_from_value: "13 de agosto de 2026",
    cert1_valid_to_label: "Válido até",
    cert1_valid_to_value: "11 de setembro de 2028",
    cert1_curriculum_heading: "Grade curricular concluída",
    cert1_module1: "Introdução à publicidade em redes sociais",
    cert1_module2: "Próximos passos na certificação de marketing para redes sociais",
    cert1_module3: "Fundamentos para sempre ter sucesso nas redes sociais",
    cert1_module4: "Como medir o retorno sobre o investimento em redes sociais",
    cert1_module5: "Como usar as redes sociais para construir relacionamentos pessoais",
    cert1_module6: "Como ampliar seu alcance nas redes sociais",
    cert1_module7: "Como criar uma estratégia de conteúdo para redes sociais",
    cert1_module8: "Escuta e monitoramento em redes sociais",
    cert1_module9: "Desenvolver uma estratégia de redes sociais",
    cert1_module10: "Como usar o modelo de calendário de conteúdo para redes sociais",

    cert2_title: "Certificado de Habilidade Linguística — Expressão Oral em Inglês",
    cert3_title: "Certificado de Habilidade Linguística — Expressão Oral em Português",
    lang_score_label: "Pontuação",
    lang_level_label: "Nível CEFR",

    cert4_title: "Visão e Alinhamento",
    cert5_title: "Profissionalismo I",
    badge_org_line: "Insígnia de Capacitador — Missionary Training Centers · Verificado por Parchment",
    modal_org_line: "Insígnia de Capacitador — Missionary Training Centers",
    status_label: "Status",
    issued_label: "Emitido em",
    achievement_label: "Tipo de conquista",
    achievement_value: "Insígnia",
    criteria_heading: "Critérios de obtenção",
    narrative_heading: "Narrativa",

    comp_business_alignment: "Alinhamento de Negócios",
    comp_strategic_agility: "Agilidade Estratégica",
    comp_outcome_based: "Instrução Baseada em Resultados",
    comp_empowerment: "Capacitação",

    va_status_value: "Verificado",
    va_issued_value: "20 de fevereiro de 2026",
    va_desc: "O destinatário desta insígnia se destaca ao guiar pessoas em direção aos seus objetivos, alinhando sua instrução aos resultados organizacionais. Esses capacitadores demonstram uma compreensão profunda do seu propósito de ensino e integram efetivamente os princípios fundamentais em suas sessões de treinamento. Eles inspiram e capacitam os aprendizes conectando toda a instrução à missão e visão gerais da organização.",
    va_crit1: "<strong>Alinhamento de Liderança:</strong> capacidade de alinhar os programas de treinamento com a direção estratégica e os objetivos definidos pela liderança.",
    va_crit2: "<strong>Instrução Baseada em Resultados:</strong> conhecimento abrangente dos princípios e valores fundamentais e a capacidade de transmitir sua importância em um contexto de ensino.",
    va_crit3: "<strong>Ensino Contextual:</strong> habilidade de incorporar aplicações práticas que reforcem os princípios-chave nas sessões de treinamento.",
    va_crit4: "<strong>Instrução com Propósito:</strong> expertise em conectar todo o conteúdo de treinamento à missão e ao propósito mais amplos da organização.",
    va_crit5: "<strong>Capacitação:</strong> capacidade de inspirar e capacitar os aprendizes a alcançar seus objetivos por meio de uma instrução prática e impactante.",
    va_narrative_text: "Concedida por concluir os requisitos do grupo In-Field Badging: Vision &amp; Alignment.",

    prof_issued_value: "15 de janeiro de 2026",
    prof_desc: "O destinatário desta insígnia demonstrou consistentemente pontualidade, comunicação eficaz e decoro no local de trabalho. Busca oportunidades de crescimento por meio de feedback, observações e reflexão. Estabelece relacionamentos positivos com colegas de trabalho e alunos.",
    prof_crit1: "<strong>Pontualidade e Preparação:</strong> chega pontualmente aos turnos e compromissos, garantindo estar preparado para cada interação.",
    prof_crit2: "<strong>Gestão do Tempo:</strong> inicia e encerra as interações de trabalho pontualmente, utilizando o tempo de forma eficiente.",
    prof_crit3: "<strong>Aparência Profissional:</strong> segue os padrões do local de trabalho quanto a vestimenta e aparência.",
    prof_crit4: "<strong>Ambiente de Aprendizagem Ideal:</strong> mantém ambientes livres de distrações, incluindo fundos apropriados no Zoom e conexões de internet estáveis para reuniões on-line.",
    prof_crit5: "<strong>Comunicação Profissional:</strong> utiliza uma linguagem digna, evitando gírias ou expressões excessivamente informais.",
    prof_crit6: "<strong>Planejamento Colaborativo:</strong> trabalha com os supervisores para utilizar de forma eficaz o tempo não dedicado às tarefas principais.",
    prof_crit7: "<strong>Participação Ativa:</strong> participa ativamente de todas as reuniões exigidas.",
    prof_crit8: "<strong>Receptividade ao Feedback:</strong> demonstra disposição para receber e aplicar feedback construtivo.",
    prof_crit9: "<strong>Interações Positivas:</strong> mantém interações profissionais e positivas com colegas e outras pessoas.",
    prof_crit10: "<strong>Comunicação Regular:</strong> comunica-se regularmente com a equipe, supervisores e outras partes interessadas conforme orientado.",
    prof_crit11: "<strong>Cumprimento de Políticas:</strong> segue todas as políticas de trabalho e as expectativas específicas da função.",
    prof_crit12: "<strong>Alinhamento de Liderança:</strong> alinha suas ações e instruções com a direção aprovada pela liderança.",
    prof_crit13: "<strong>Utilização de Recursos:</strong> garante que todo o trabalho esteja centrado em recursos aprovados.",
    prof_crit14: "<strong>Foco na Equipe:</strong> prioriza o crescimento e o desenvolvimento dos membros da equipe em vez do reconhecimento pessoal.",
    prof_crit15: "<strong>Confiança e Respeito:</strong> estabelece relações de confiança e respeito com colegas e partes interessadas.",
    prof_narrative_text: "Concedida por concluir os requisitos do grupo In-Field Badging: Professionalism."
  },
  fr: {
    back_link: "&larr; Retour au portfolio",
    kicker: "Certificats et diplômes",
    page_title: "Certifications",
    intro: "Formation complémentaire en marketing digital, langues et formation de formateurs, vérifiée par chaque établissement émetteur.",
    expand_hint: "Voir le certificat complet →",
    view_credential: "Voir le justificatif",
    close_label: "Fermer",
    cat_education: "Formation",
    cat_languages: "Langues",
    cat_badges: "Badges",

    cert1_title: "Certification en Marketing des Réseaux Sociaux",
    cert1_meta: "Valide du 13 août 2026 au 11 septembre 2028.",
    cert1_valid_from_label: "Valide à partir du",
    cert1_valid_from_value: "13 août 2026",
    cert1_valid_to_label: "Valide jusqu'au",
    cert1_valid_to_value: "11 septembre 2028",
    cert1_curriculum_heading: "Cursus complété",
    cert1_module1: "Introduction à la publicité sur les réseaux sociaux",
    cert1_module2: "Prochaines étapes de la certification en marketing des réseaux sociaux",
    cert1_module3: "Les fondamentaux pour toujours réussir sur les réseaux sociaux",
    cert1_module4: "Comment mesurer le retour sur investissement des réseaux sociaux",
    cert1_module5: "Comment utiliser les réseaux sociaux pour construire des relations personnelles",
    cert1_module6: "Comment élargir votre portée sur les réseaux sociaux",
    cert1_module7: "Comment créer une stratégie de contenu pour les réseaux sociaux",
    cert1_module8: "Écoute et surveillance des réseaux sociaux",
    cert1_module9: "Développer une stratégie de réseaux sociaux",
    cert1_module10: "Comment utiliser le modèle de calendrier de contenu pour les réseaux sociaux",

    cert2_title: "Certificat de Compétence Linguistique — Expression Orale en Anglais",
    cert3_title: "Certificat de Compétence Linguistique — Expression Orale en Portugais",
    lang_score_label: "Score",
    lang_level_label: "Niveau CECR",

    cert4_title: "Vision et Alignement",
    cert5_title: "Professionnalisme I",
    badge_org_line: "Badge de Formateur — Missionary Training Centers · Vérifié par Parchment",
    modal_org_line: "Badge de Formateur — Missionary Training Centers",
    status_label: "Statut",
    issued_label: "Délivré le",
    achievement_label: "Type de réussite",
    achievement_value: "Badge",
    criteria_heading: "Critères d'obtention",
    narrative_heading: "Récit",

    comp_business_alignment: "Alignement Commercial",
    comp_strategic_agility: "Agilité Stratégique",
    comp_outcome_based: "Enseignement Axé sur les Résultats",
    comp_empowerment: "Autonomisation",

    va_status_value: "Vérifié",
    va_issued_value: "20 février 2026",
    va_desc: "Le titulaire de ce badge excelle à guider les individus vers leurs objectifs en alignant son enseignement sur les résultats organisationnels. Ces formateurs démontrent une compréhension approfondie de leur mission pédagogique et intègrent efficacement les principes fondamentaux dans leurs sessions de formation. Ils inspirent et responsabilisent les apprenants en reliant tout l'enseignement à la mission et à la vision globales de l'organisation.",
    va_crit1: "<strong>Alignement du Leadership :</strong> capacité à aligner les programmes de formation sur l'orientation stratégique et les objectifs fixés par la direction.",
    va_crit2: "<strong>Enseignement Axé sur les Résultats :</strong> connaissance approfondie des principes et valeurs fondamentaux et capacité à en transmettre l'importance dans un contexte pédagogique.",
    va_crit3: "<strong>Enseignement Contextuel :</strong> capacité à intégrer des applications pratiques qui appuient les principes clés dans les sessions de formation.",
    va_crit4: "<strong>Enseignement Intentionnel :</strong> expertise dans la mise en relation de tout le contenu de formation avec la mission et l'objectif plus larges de l'organisation.",
    va_crit5: "<strong>Autonomisation :</strong> capacité à inspirer et à responsabiliser les stagiaires pour qu'ils atteignent leurs objectifs grâce à un enseignement pratique et percutant.",
    va_narrative_text: "Décerné pour avoir rempli les conditions du groupe In-Field Badging : Vision &amp; Alignment.",

    prof_issued_value: "15 janvier 2026",
    prof_desc: "Le titulaire de ce badge a constamment fait preuve de ponctualité, d'une communication efficace et de bienséance sur le lieu de travail. Il recherche des occasions de progresser grâce aux retours, aux observations et à la réflexion. Il établit des relations positives avec ses collègues et les élèves.",
    prof_crit1: "<strong>Ponctualité et Préparation :</strong> arrive systématiquement à l'heure pour les créneaux et rendez-vous, garantissant sa disponibilité pour chaque interaction.",
    prof_crit2: "<strong>Gestion du Temps :</strong> commence et termine les interactions professionnelles ponctuellement, en utilisant le temps efficacement.",
    prof_crit3: "<strong>Apparence Professionnelle :</strong> respecte les normes du lieu de travail en matière de tenue et d'apparence.",
    prof_crit4: "<strong>Environnement d'Apprentissage Optimal :</strong> maintient des environnements sans distraction, y compris des arrière-plans Zoom appropriés et des connexions Internet stables pour les réunions en ligne.",
    prof_crit5: "<strong>Communication Professionnelle :</strong> utilise un langage digne, en évitant l'argot ou les expressions trop familières.",
    prof_crit6: "<strong>Planification Collaborative :</strong> travaille avec les superviseurs pour utiliser efficacement le temps non consacré aux tâches principales.",
    prof_crit7: "<strong>Participation Active :</strong> assiste et participe activement à toutes les réunions requises.",
    prof_crit8: "<strong>Réceptivité aux Retours :</strong> fait preuve d'ouverture pour recevoir et appliquer des retours constructifs.",
    prof_crit9: "<strong>Interactions Positives :</strong> maintient des interactions professionnelles et positives avec ses collègues et les autres.",
    prof_crit10: "<strong>Communication Régulière :</strong> communique régulièrement avec les membres de l'équipe, les superviseurs et les autres parties prenantes, selon les instructions.",
    prof_crit11: "<strong>Respect des Politiques :</strong> respecte toutes les politiques d'emploi et les attentes propres au poste.",
    prof_crit12: "<strong>Alignement du Leadership :</strong> aligne ses actions et instructions sur les orientations approuvées par la direction.",
    prof_crit13: "<strong>Utilisation des Ressources :</strong> veille à ce que tout le travail soit centré sur les ressources approuvées.",
    prof_crit14: "<strong>Focalisation sur l'Équipe :</strong> privilégie la croissance et le développement des membres de l'équipe plutôt que la reconnaissance personnelle.",
    prof_crit15: "<strong>Confiance et Respect :</strong> établit des relations de confiance et de respect avec ses collègues et les parties prenantes.",
    prof_narrative_text: "Décerné pour avoir rempli les conditions du groupe In-Field Badging : Professionalism."
  }
};

const CERTS_STORAGE_KEY = "portfolio-lang";

function detectCertsLang(){
  const saved = localStorage.getItem(CERTS_STORAGE_KEY);
  if (saved && certsTranslations[saved]) return saved;
  const nav = (navigator.language || "es").slice(0, 2);
  return certsTranslations[nav] ? nav : "es";
}

function setCertsLanguage(lang){
  if (!certsTranslations[lang]) return;
  const dict = certsTranslations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-label]").forEach(el => {
    const key = el.getAttribute("data-i18n-label");
    if (dict[key]) el.setAttribute("aria-label", dict[key]);
  });
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  localStorage.setItem(CERTS_STORAGE_KEY, lang);
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setCertsLanguage(btn.getAttribute("data-lang")));
});

setCertsLanguage(detectCertsLang());

/* ==========================================================
   Credential modal — click a card to see the full certificate/
   badge image plus its complete details.
   ========================================================== */
const certModal = document.getElementById("certModal");
const certModalClose = document.getElementById("certModalClose");
const certModalImageWell = document.getElementById("certModalImageWell");
const certModalBody = document.getElementById("certModalBody");

if (certModal && certModalClose && certModalImageWell && certModalBody){
  function openCertModal(card){
    const template = card.nextElementSibling;
    if (!template || template.tagName !== "TEMPLATE") return;

    const content = template.content.cloneNode(true);
    const img = content.querySelector("img");

    certModalImageWell.innerHTML = "";
    if (img){
      certModalImageWell.appendChild(img);
    }
    certModalBody.innerHTML = "";
    certModalBody.appendChild(content);

    const lang = document.documentElement.getAttribute("lang") || "es";
    const dict = certsTranslations[lang] || certsTranslations.es;
    certModalBody.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.innerHTML = dict[key];
    });

    certModal.classList.add("open");
  }

  function closeCertModal(){
    certModal.classList.remove("open");
  }

  document.querySelectorAll(".cert-card").forEach(card => {
    card.addEventListener("click", () => openCertModal(card));
  });
  certModalClose.addEventListener("click", closeCertModal);
  certModal.addEventListener("click", (e) => {
    if (e.target === certModal) closeCertModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCertModal();
  });
}
