import type { Localized } from '../i18n'
import { ageOn, parseCalendarDate } from '../utils/age'

export const SITE_URL = 'https://augustonicola.netlify.app'

const BIRTHDATE = '2003-03-20'

/**
 * Age wrapped in a span the About section's script recomputes in the browser,
 * so it stays right between deploys. The build-time value is the no-JS fallback.
 */
function ageHtml(): string {
  return `<span data-birthdate="${BIRTHDATE}">${ageOn(new Date(), parseCalendarDate(BIRTHDATE))}</span>`
}

export interface Social {
  name: string
  href: string
  /** Image in /public, or an icon name from src/icons. */
  img?: string
  icon?: string
}

export const socials: Social[] = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/augusto-nicola', img: '/assets/png/linkedin-ico.png' },
  { name: 'GitHub', href: 'https://github.com/AugustoNicola', img: '/assets/png/github-ico.png' },
  { name: 'Email', href: 'mailto:auguston64@gmail.com', img: '/assets/png/mail-ico.png' },
  { name: 'Hugging Face', href: 'https://huggingface.co/anicola', icon: 'huggingface' },
  { name: 'LessWrong', href: 'https://www.lesswrong.com/users/augusto-nicola', img: '/assets/png/lesswrong-ico.png' },
]

export const heroText: Localized = {
  en: `I'm a <b>Computer Science graduate from the University of Buenos Aires</b> and an aspiring <b>AI Safety researcher</b>, currently doing research with <b>SPAR</b> and <b>AI Safety Argentina</b>. Before that, I spent <b>three years as a software developer</b>.<br />I'm always open to discussing new opportunities!`,
  es: `Soy <b>Licenciado en Ciencias de la Computación por la Universidad de Buenos Aires</b> y aspirante a <b>investigador en AI Safety</b>; actualmente investigo en los programas <b>SPAR</b> y <b>AI Safety Argentina</b>. Antes de eso, trabajé <b>tres años como desarrollador de software</b>.<br />¡Siempre estoy dispuesto a charlar sobre nuevas oportunidades!`,
}

export const bio = (): Localized<string[]> => ({
  en: [
    `My name is <strong>Augusto</strong>, I'm ${ageHtml()} years old and I live in Olivos, Buenos Aires. I'm a <strong>Computer Science graduate</strong> from the <strong>Faculty of Exact and Natural Sciences (UBA)</strong>, and I strongly believe that <strong>AI Safety</strong> is one of the most pressing issues we have to tackle today. That's why I'm building my career towards becoming a <strong>technical AI Safety researcher</strong>.`,
    `My undergraduate thesis studied <strong>how stable the value systems of LLMs are</strong>, and I'm currently working on research projects on <strong>model psychology</strong> and <strong>interpretability of planning horizons</strong>. My main areas of interest are <strong>Mechanistic Interpretability</strong>, <strong>Evaluation Frameworks</strong>, and <strong>Model Development</strong>. I've also taken several technical courses, keep up with practical self-study, and actively engage with the local AI Safety community.`,
    `Before research, I worked for three years as a <strong>software developer</strong>, mainly on <strong>full-stack web development</strong> and <strong>container orchestration</strong>, with technologies like <strong>PHP</strong>, <strong>Laravel</strong>, <strong>Angular</strong>, <strong>Kubernetes</strong>, <strong>Docker</strong>, and <strong>Prometheus</strong>. I enjoy teamwork, learning new things, teaching, and facing complex challenges.`,
    `I'm <strong>always open to discussing new opportunities</strong>!`,
  ],
  es: [
    `Me llamo <strong>Augusto</strong>, tengo ${ageHtml()} años y vivo en Olivos, Gran Buenos Aires. Soy <strong>Licenciado en Ciencias de la Computación</strong> por la <strong>Facultad de Ciencias Exactas y Naturales (UBA)</strong>, y estoy convencido de que la <strong>seguridad de la IA (AI Safety)</strong> es uno de los problemas más urgentes que enfrentamos hoy. Por eso, estoy orientando mi carrera para convertirme en <strong>investigador en Technical AI Safety</strong>.`,
    `Mi tesis de grado estudió <strong>qué tan estables son los sistemas de valores de los LLMs</strong>, y actualmente trabajo en proyectos de investigación sobre <strong>psicología de modelos</strong> e <strong>interpretabilidad de horizontes de planificación</strong>. Mis principales áreas de interés son la <strong>Interpretabilidad Mecanística</strong>, los <strong>Frameworks de Evaluación</strong> y el <strong>Desarrollo de Modelos</strong>. Además, realicé varios cursos técnicos, sigo estudiando de forma independiente, y participo activamente en la comunidad local de AI Safety.`,
    `Antes de dedicarme a la investigación, trabajé tres años como <strong>desarrollador de software</strong>, principalmente en <strong>desarrollo web full-stack</strong> y <strong>orquestación de contenedores</strong>, con tecnologías como <strong>PHP</strong>, <strong>Laravel</strong>, <strong>Angular</strong>, <strong>Kubernetes</strong>, <strong>Docker</strong> y <strong>Prometheus</strong>. Disfruto de trabajar en equipo, aprender cosas nuevas, enseñar, y enfrentarme a problemas complejos.`,
    `¡<strong>Siempre estoy dispuesto a charlar sobre nuevas oportunidades</strong>!`,
  ],
})

export interface SkillGroup {
  title: Localized
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: { en: 'AI & Machine Learning', es: 'IA y Machine Learning' },
    skills: ['Python', 'PyTorch', 'TensorFlow', 'NumPy', 'Hugging Face', 'Matplotlib', 'OpenCV'],
  },
  {
    title: { en: 'Container Orchestration', es: 'Orquestación de Contenedores' },
    skills: ['Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Alertmanager'],
  },
  {
    title: { en: 'Web Backend', es: 'Web Backend' },
    skills: ['Laravel', 'PHP', 'Node.js', 'MongoDB', 'SQL'],
  },
  {
    title: { en: 'Web Frontend', es: 'Web Frontend' },
    skills: ['React.js', 'Angular.js', 'JavaScript', 'HTML', 'CSS', 'SASS', 'TailwindCSS'],
  },
  {
    title: { en: 'General', es: 'General' },
    skills: ['C++', 'Linux', 'Git', 'GitHub', 'Atlassian'],
  },
]

export interface Doc {
  title: 'docs.cvTitle' | 'docs.onepagerTitle'
  desc: 'docs.cvDesc' | 'docs.onepagerDesc'
  href: Localized
}

export const docs: Doc[] = [
  {
    title: 'docs.onepagerTitle',
    desc: 'docs.onepagerDesc',
    href: {
      en: 'https://docs.google.com/document/d/1rHEfQtvoEZXqC5OASG0bSX75zLYerRLJioDPi6qm7KI/edit?tab=t.b86vmh0izr6',
      es: 'https://docs.google.com/document/d/1rHEfQtvoEZXqC5OASG0bSX75zLYerRLJioDPi6qm7KI/edit?tab=t.7v36bc7pmzzo',
    },
  },
  {
    title: 'docs.cvTitle',
    desc: 'docs.cvDesc',
    href: {
      en: 'https://docs.google.com/document/d/1pmTNdMU_nJSniYYUxcG0G8QZxKiAV1vdOvI3wVXD604/edit?tab=t.b86vmh0izr6',
      es: 'https://docs.google.com/document/d/1pmTNdMU_nJSniYYUxcG0G8QZxKiAV1vdOvI3wVXD604/edit?tab=t.0',
    },
  },
]
