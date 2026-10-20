import type { Localized } from '../i18n'

export interface Link {
  label: Localized
  /** Internal paths (starting with "/") are localized automatically. */
  href: string | Localized
}

export const thesis = {
  eyebrow: {
    en: 'Undergraduate thesis · FCEN-UBA · 2026',
    es: 'Tesis de grado · FCEN-UBA · 2026',
  },
  title: 'Value Systems in LLMs',
  subtitle: 'Effects of Paraphrasing and Profile Elicitation on Decision-Making Consistency and Robustness',
  advisors: 'Sergio Abriola & Tomás Schitter',
  description: {
    en: `Whether language models have real values is contested. My thesis asks a more tractable question: <strong>do they have <em>stable</em> ones?</strong> I crossed ten meaning-preserving prompt perturbations (typos, negation, paraphrase, translation, reversed options...) with fourteen elicited personality profiles, drawn from the Big Five, Schwartz's basic values, and Moral Foundations Theory, and measured how consistent and robust the models' moral choices remained.`,
    es: `Si los modelos de lenguaje tienen valores reales es un tema en discusión. Mi tesis plantea una pregunta más abordable: <strong>¿tienen valores <em>estables</em>?</strong> Crucé diez perturbaciones de prompt que preservan el significado (errores de tipeo, negación, paráfrasis, traducción, opciones invertidas...) con catorce perfiles de personalidad elicitados, basados en los Big Five, los valores básicos de Schwartz y la Teoría de Fundamentos Morales, y medí qué tan consistentes y robustas se mantenían las decisiones morales de los modelos.`,
  },
  quote: {
    en: 'The perturbations barely register. The personas do.',
    es: 'Las perturbaciones apenas se notan. Las personas sí.',
  },
  finding: {
    en: 'Profile elicitation shifted answers far more than paraphrasing did, without reducing consistency: elicited personas behave like coherent alternatives, not degraded versions of the assistant. Model choice mattered more than any perturbation, and capability did not predict stability.',
    es: 'La elicitación de perfiles modificó las respuestas mucho más que las paráfrasis, sin reducir la consistencia: las personas elicitadas se comportan como alternativas coherentes, no como versiones degradadas del asistente. La elección del modelo importó más que cualquier perturbación, y la capacidad del modelo no predijo su estabilidad.',
  },
  stats: [
    { value: '561K', label: { en: 'responses', es: 'respuestas' } },
    { value: '6', label: { en: 'models, 3 labs', es: 'modelos, 3 labs' } },
    { value: '14', label: { en: 'personality profiles', es: 'perfiles de personalidad' } },
    { value: '10', label: { en: 'prompt perturbations', es: 'perturbaciones' } },
  ] satisfies { value: string; label: Localized }[],
  links: [
    { label: { en: 'Write-up', es: 'Write-up' }, href: 'https://augustonicola.github.io/Writeup-Value-Systems-in-LLMs/' },
    { label: { en: 'Code', es: 'Código' }, href: 'https://github.com/AugustoNicola/Value-Systems-in-LLMs-Paraphrasing-and-Profile-Elicitation' },
    { label: { en: 'Dataset', es: 'Datos' }, href: 'https://huggingface.co/datasets/anicola/value-systems-in-llms-paraphrasing-and-profile-elicitation' },
  ] satisfies Link[],
}

export interface Project {
  program: Localized
  title: Localized
  description: Localized
  tags: Localized<string[]>
  link: Link
}

export const currentProjects: Project[] = [
  {
    program: {
      en: 'SPAR · Fall 2026',
      es: 'SPAR · Cohorte de Otoño 2026',
    },
    title: { en: 'Planning Temporal Manifolds', es: 'Planning Temporal Manifolds' },
    description: {
      en: `Can we read <strong>how far ahead a language model is planning</strong> directly from its activations? Prior work found that time horizons, from seconds to centuries, form an ordinal manifold in the residual stream during single decisions. This project tests whether that geometry persists through multi-step planning: a first step toward <strong>monitoring and steering the planning horizon of AI agents</strong>, relevant to both myopic and scheming failures.`,
      es: `¿Es posible leer <strong>qué tan a futuro está planificando un modelo de lenguaje</strong> directamente desde sus activaciones? Trabajos previos encontraron que los horizontes temporales, de segundos a siglos, forman una variedad ordinal en el residual stream durante decisiones individuales. Este proyecto pone a prueba si esa geometría persiste durante la planificación en varios pasos: un primer paso hacia <strong>monitorear y dirigir el horizonte de planificación de agentes de IA</strong>, relevante tanto para fallas miopes como para el <em>scheming</em>.`,
    },
    tags: {
      en: ['Mechanistic interpretability', 'Activation geometry', 'Planning'],
      es: ['Interpretabilidad mecanística', 'Geometría de activaciones', 'Planificación'],
    },
    link: {
      label: { en: 'Project proposal', es: 'Propuesta del proyecto' },
      href: 'https://sparai.org/attachments/proposals/recr3hocwOyWhN0z1/planning-temporal-manifolds.pdf',
    },
  },
  {
    program: {
      en: 'AI Safety Argentina (AISAR) Scholarship · 2026',
      es: 'Beca AI Safety Argentina (AISAR) · 2026',
    },
    title: {
      en: 'Model Psychology & Preference Coherence',
      es: 'Psicología y Coherencia de Modelos',
    },
    description: {
      en: `Experiments to better model <strong>LLM psychology</strong>: is a model a single persona acting under different roles, a persona-selection mechanism, or a shoggoth with masks? I study <strong>how coherent and variable model preferences are</strong> at different levels: profile elicitation in pretrained vs. helpful-only models, whether the persona writing the chain of thought differs from the one writing the answer, and the gap between <strong>stated preferences and actual behavior</strong> when choices have real consequences.`,
      es: `Experimentos para modelar mejor la <strong>psicología de los LLMs</strong>: ¿un modelo es una única persona que actúa bajo distintos roles, un mecanismo de selección de personas, o un shoggoth con máscaras? Estudio <strong>la coherencia y variabilidad de las preferencias de los modelos</strong> a distintos niveles: elicitación de perfiles en modelos pretrained frente a modelos helpful-only, si la persona que escribe el chain of thought es distinta a la que escribe la respuesta, y la brecha entre <strong>preferencias declaradas y comportamiento real</strong> cuando las decisiones tienen consecuencias concretas.`,
    },
    tags: {
      en: ['Model psychology', 'Evals', 'Chain of thought'],
      es: ['Psicología de modelos', 'Evals', 'Chain of thought'],
    },
    link: {
      label: { en: 'About AISAR', es: 'Sobre AISAR' },
      href: { en: 'https://scholarship.aisafety.ar/en/', es: 'https://scholarship.aisafety.ar/' },
    },
  },
]

export interface TrainingItem {
  from: number
  to?: number | 'present'
  title: Localized
  place: Localized
  description: Localized
  href?: string | Localized
}

export const training: TrainingItem[] = [
  {
    from: 2026,
    to: 'present',
    title: { en: 'ARENA curriculum self-study', es: 'Estudio individual del material de ARENA' },
    place: { en: 'Self-paced', es: 'Autodidacta' },
    description: {
      en: 'Developing research engineering skills and technical knowledge through the ARENA alignment curriculum.',
      es: 'Desarrollo de habilidades de investigación y conocimiento técnico a través del material de alineamiento de ARENA.',
    },
    href: 'https://www.arena.education/',
  },
  {
    from: 2026,
    title: { en: '"Technical AI Safety" course', es: 'Curso "Technical AI Safety"' },
    place: { en: 'BlueDot Impact · Remote cohort', es: 'BlueDot Impact · Cohorte remota' },
    description: {
      en: 'Studied technical approaches to reducing risks from advanced AI systems, including alignment techniques, evals, and AI control. Honed my research taste, intuitions, and goals alongside motivated people from all around the world.',
      es: 'Estudié enfoques técnicos para reducir el riesgo de sistemas de IA avanzados, incluyendo técnicas de alineamiento, evals y AI control. Afiné mi criterio de investigación, intuiciones y objetivos junto a personas motivadas de todo el mundo.',
    },
    href: 'https://bluedot.org/',
  },
  {
    from: 2021,
    to: 2026,
    title: { en: 'BSc. in Computer Science', es: 'Licenciatura en Ciencias de la Computación' },
    place: { en: 'FCEN, University of Buenos Aires · GPA 9.35/10', es: 'FCEN, Universidad de Buenos Aires · Promedio 9,35/10' },
    description: {
      en: 'AI-oriented curriculum. My undergraduate thesis on LLM evals and value systems was my first step into AI Safety research.',
      es: 'Orientación en Inteligencia Artificial. Mi tesis de grado sobre evals y sistemas de valores en LLMs fue mi primer paso en la investigación en AI Safety.',
    },
  },
  {
    from: 2025,
    title: { en: '"AI Alignment" course', es: 'Curso "AI Alignment"' },
    place: { en: 'BlueDot Impact · Facilitated by BAISH at FCEN-UBA', es: 'BlueDot Impact · Facilitado por BAISH en FCEN-UBA' },
    description: {
      en: 'My first deep dive into AI Safety, and my first contact with the local AI Safety community.',
      es: 'Mi primer acercamiento profundo a AI Safety, y a su comunidad local.',
    },
    href: 'https://bluedot.org/',
  },
  {
    from: 2023,
    to: 2025,
    title: { en: 'Jr. Full-stack Developer & Sysadmin', es: 'Jr. Full-stack Developer y Sysadmin' },
    place: { en: 'WillDom · Part-time', es: 'WillDom · Tiempo medio' },
    description: {
      en: 'Real-world experience working in a team and running a production web platform, from full-stack features to Kubernetes infrastructure.',
      es: 'Experiencia real trabajando en equipo y administrando una plataforma web en producción, desde funcionalidades full-stack hasta infraestructura en Kubernetes.',
    },
    href: '/wave-willdom',
  },
]
