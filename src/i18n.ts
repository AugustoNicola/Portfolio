export const languages = ['en', 'es'] as const
export type Lang = (typeof languages)[number]
export const defaultLang: Lang = 'en'

/** A piece of text available in every language. */
export type Localized<T = string> = Record<Lang, T>

/** Prefix an absolute path with the language segment (English lives at the root). */
export function localizePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path
  return path === '/' ? `/${lang}/` : `/${lang}${path}`
}

/** Strip the language segment from a path, returning the language-neutral path. */
export function unlocalizePath(path: string): string {
  // Build output uses "preserve" format, so pathnames may end in ".html" or "index.html".
  const stripped = path.replace(/(index)?\.html$/, '').replace(/^\/es(\/|$)/, '/')
  return stripped || '/'
}

export const ui = {
  en: {
    'meta.title': 'Augusto Nicola | AI Safety & Software',
    'meta.description':
      'Portfolio of Augusto Nicola: aspiring AI Safety researcher and software developer from Buenos Aires.',
    'nav.about': 'About',
    'nav.research': 'Research',
    'nav.projects': 'Projects',
    'nav.cv': 'CV',
    'nav.switchLang': 'Ver en español',
    'nav.themeDark': 'Switch to dark theme',
    'nav.themeLight': 'Switch to light theme',
    'nav.menuOpen': 'Open menu',
    'nav.menuClose': 'Close menu',
    'hero.title': "Hi, I'm Augusto Nicola",
    'hero.tagline': 'AI Safety Researcher · Software Developer',
    'hero.cta': 'My Research',
    'hero.ctaSecondary': 'CV & One-pager',
    'about.title': 'About Me',
    'about.whoTitle': 'Who I am',
    'about.skillsTitle': 'My toolkit',
    'about.showAll': 'Show all tools',
    'about.showLess': 'Show less',
    'research.title': 'Research',
    'research.sub':
      'My work focuses on understanding what language models value, how stable those values are, and what their internals reveal about how they plan.',
    'research.featured': 'Featured',
    'research.ongoing': 'Ongoing',
    'research.current': 'Current projects',
    'research.finding': 'Key finding',
    'research.advisors': 'Advisors',
    'training.title': 'Education & Training',
    'training.sub': 'The path that brought me into AI Safety.',
    'training.present': 'Present',
    'projects.title': 'Software Projects',
    'projects.sub':
      'Before focusing on AI Safety, I spent three years building for the web. These projects shaped my engineering skills.',
    'projects.more': 'Read more',
    'docs.title': 'CV & One-pager',
    'docs.sub':
      'My one-pager is a quick overview of my AI Safety journey; my CV has the full picture. Both are kept up to date on Google Docs.',
    'docs.cvTitle': 'Curriculum Vitae',
    'docs.cvDesc': 'Education, work experience, skills, and everything in between.',
    'docs.onepagerTitle': 'One-pager',
    'docs.onepagerDesc': 'A single page on my research, training, and interests in AI Safety.',
    'docs.open': 'Open',
    'docs.otherLang': 'Versión en español',
    'cs.about': 'About the project',
    'cs.tools': 'Tools used',
    'cs.online': 'See it online',
    'cs.website': 'Website',
    'cs.repo': 'Repository',
    'cs.back': 'Back to projects',
    'footer.tagline': 'Aspiring AI Safety researcher & software developer',
    'footer.credit': 'Based on a template by',
    'footer.edited': 'adapted by',
    'footer.using': 'using',
    '404.text': "The page you're looking for doesn't exist. It may have been removed, or the address may contain a typo.",
    '404.cta': 'Back home',
  },
  es: {
    'meta.title': 'Augusto Nicola | AI Safety y Software',
    'meta.description':
      'Portfolio de Augusto Nicola: aspirante a investigador en AI Safety y desarrollador de software de Buenos Aires.',
    'nav.about': 'Sobre Mí',
    'nav.research': 'Investigación',
    'nav.projects': 'Proyectos',
    'nav.cv': 'CV',
    'nav.switchLang': 'View in English',
    'nav.themeDark': 'Cambiar a tema oscuro',
    'nav.themeLight': 'Cambiar a tema claro',
    'nav.menuOpen': 'Abrir menú',
    'nav.menuClose': 'Cerrar menú',
    'hero.title': 'Hola, soy Augusto Nicola',
    'hero.tagline': 'Investigador en AI Safety · Desarrollador de Software',
    'hero.cta': 'Mi Investigación',
    'hero.ctaSecondary': 'CV y One-pager',
    'about.title': 'Sobre Mí',
    'about.whoTitle': 'Quién soy',
    'about.skillsTitle': 'Mis herramientas',
    'about.showAll': 'Ver todas',
    'about.showLess': 'Ver menos',
    'research.title': 'Investigación',
    'research.sub':
      'Mi trabajo busca entender qué valoran los modelos de lenguaje, qué tan estables son esos valores, y qué revelan sus representaciones internas sobre cómo planifican.',
    'research.featured': 'Destacado',
    'research.ongoing': 'En curso',
    'research.current': 'Proyectos actuales',
    'research.finding': 'Resultado principal',
    'research.advisors': 'Directores',
    'training.title': 'Formación',
    'training.sub': 'El camino que me trajo a AI Safety.',
    'training.present': 'Presente',
    'projects.title': 'Proyectos de Software',
    'projects.sub':
      'Antes de enfocarme en AI Safety, pasé tres años desarrollando para la web. Estos proyectos formaron mis habilidades como desarrollador.',
    'projects.more': 'Ver más',
    'docs.title': 'CV y One-pager',
    'docs.sub':
      'Mi one-pager es un resumen rápido de mi camino en AI Safety; mi CV tiene el panorama completo. Ambos están siempre actualizados en Google Docs.',
    'docs.cvTitle': 'Curriculum Vitae',
    'docs.cvDesc': 'Formación académica, experiencia laboral, aptitudes y más.',
    'docs.onepagerTitle': 'One-pager',
    'docs.onepagerDesc': 'Una sola página sobre mi investigación, formación e intereses en AI Safety.',
    'docs.open': 'Abrir',
    'docs.otherLang': 'English version',
    'cs.about': 'Sobre el proyecto',
    'cs.tools': 'Herramientas usadas',
    'cs.online': 'Ver en línea',
    'cs.website': 'Link Web',
    'cs.repo': 'Repositorio',
    'cs.back': 'Volver a proyectos',
    'footer.tagline': 'Aspirante a investigador en AI Safety y desarrollador de software',
    'footer.credit': 'Basado en una plantilla de',
    'footer.edited': 'adaptada por',
    'footer.using': 'usando',
    '404.text': 'La página solicitada no existe... Es posible que haya sido eliminada, o que la dirección tenga algún error.',
    '404.cta': 'Volver al inicio',
  },
} as const satisfies Record<Lang, Record<string, string>>

export type UIKey = keyof (typeof ui)['en']

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key]
}

/** Resolve a link that may differ per language; internal paths get the language prefix. */
export function resolveHref(href: string | Localized, lang: Lang): string {
  const value = typeof href === 'string' ? href : href[lang]
  return value.startsWith('/') ? localizePath(value, lang) : value
}
