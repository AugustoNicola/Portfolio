import type { Localized } from '../i18n'

export interface SoftwareProject {
  slug: string
  title: Localized
  kind: Localized
  image: string
  /** Short description for the homepage card and the case-study hero. */
  summary: Localized
  /** Case-study body; paragraphs may contain inline HTML. */
  body: Localized<string[]>
  tools: string[]
  website?: string
  repo?: string
}

export const softwareProjects: SoftwareProject[] = [
  {
    slug: 'wave-willdom',
    title: { en: 'WAVE @ WillDom', es: 'WAVE @ WillDom' },
    kind: { en: 'Work experience · 2022–2025', es: 'Experiencia laboral · 2022–2025' },
    image: '/assets/jpeg/proyecto-willdom.jpeg',
    summary: {
      en: 'My first long-term work experience: full-stack development and systems administration for an internal recruiting and business-logic platform at an international IT consultancy.',
      es: 'Mi primera experiencia laboral a largo plazo: desarrollo full-stack y administración de sistemas para una plataforma de reclutamiento y lógica de negocio integral en una consultora de TI internacional.',
    },
    body: {
      en: [
        `<b>In mid-2022, at 19 years old</b>, I started my journey at WillDom as an intern in the Product team. One of the team's main responsibilities is the active development of WAVE, a business management web platform used extensively by every team and <em>partner</em> in the company.`,
        `Joining this project meant a <b>huge amount of learning</b>, both personal and technical. The application uses many technologies and tools I had previous experience with, such as <b>Laravel, Angular.js, PHP, and MySQL</b>. Getting to use this tech stack in a professional setting was a big challenge and a great learning experience.`,
        `Being part of WillDom for several years allowed me to grow professionally within the team. Particularly during 2024–2025, <b>my responsibilities shifted towards administering the application's systems</b>. During this time I was trained for the first time in advanced container orchestration, gaining hands-on knowledge of technologies like <b>Kubernetes, Docker, Grafana, and Alertmanager</b>.`,
        `This training culminated in being responsible for building, from scratch, a new environment to host the Product team's applications and services. <b>I had the chance to take on many new responsibilities</b>, and the team was very satisfied with the final result.`,
      ],
      es: [
        `<b>A mediados de 2022 y con 19 años</b>, comencé mi trayectoria en WillDom como pasante en el equipo de Producto. Una de las principales responsabilidades del equipo es el desarrollo activo de WAVE, una plataforma web de administración empresarial. Este producto es ampliamente utilizado por todos los equipos y <em>partners</em> de la compañía.`,
        `Sumarme a este proyecto implicó una <b>gran incorporación de conocimiento</b>, tanto a nivel personal como técnico. La aplicación utiliza diversas tecnologías y herramientas con las cuales tenía experiencia previa, tales como <b>Laravel, Angular.js, PHP, y MySQL</b>. Poder utilizar este <em>tech stack</em> en un ámbito profesional significó un gran desafío y muchísimo aprendizaje.`,
        `Mi participación en WillDom a lo largo de múltiples años me permitió desarrollarme profesionalmente dentro del equipo. En particular durante el período 2024-2025, <b>mis responsabilidades en el proyecto fueron inclinándose hacia el aspecto de administración de los sistemas de la aplicación</b>. Durante este plazo pude formarme por primera vez en temas avanzados de orquestación de contenedores, con conocimientos prácticos de tecnologías como <b>Kubernetes, Docker, Grafana, y Alertmanager</b>.`,
        `Esta formación culminó en la responsabilidad de confeccionar desde cero un nuevo ambiente en el cual alojar las aplicaciones y servicios del equipo de Producto. <b>Tuve la posibilidad de adquirir muchas responsabilidades nuevas</b>, y el equipo quedó ampliamente satisfecho con el resultado final.`,
      ],
    },
    tools: ['Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Alertmanager', 'Laravel', 'PHP', 'MongoDB', 'Angular.js', 'JavaScript', 'HTML', 'CSS', 'Linux', 'Atlassian', 'Git', 'GitHub', 'SQL'],
    website: 'https://willdom.com/wave/',
  },
  {
    slug: 'insight-noticias',
    title: { en: '"Insight" News Blog', es: 'Blog de Noticias "Insight"' },
    kind: { en: 'Personal project', es: 'Proyecto personal' },
    image: '/assets/jpeg/proyecto-insight.jpeg',
    summary: {
      en: 'A full-stack news blog with users, posts, categories, and comments. Built with the Laravel framework and a MySQL database.',
      es: 'Una aplicación full-stack de un blog de noticias, con sistema de usuaries, publicaciones, categorías y comentarios. Hecha con el framework Laravel y base de datos MySQL.',
    },
    body: {
      en: [
        `"Insight" is a community news site that lets its users write posts in different categories, react to other articles, comment on them, and even save them. It's one of my most ambitious projects to date, and it was very useful for putting my Laravel and MySQL knowledge into practice for the first time.`,
        `To build this project I followed TDD (Test-Driven Development), which means first writing test cases for the functionality the site should offer, and then making those tests pass by writing the actual code. It was my first time using this practice, and I found it very effective in guiding my decisions on how to structure the code.`,
        `The project took me a little over a month, and I really learned how to use the different components of the Laravel framework along with PHP syntax. I also used TailwindCSS to style the pages, so this project let me try out a whole range of new tools, with a result I'm very happy with.`,
      ],
      es: [
        `"Insight" es un sitio de noticias comunitario que permite a sus usuaries escribir publicaciones según distintas categorías, reaccionar a otras noticias, comentar en ellas e incluso guardarlas. Es uno de mis proyectos más ambiciosos hasta la fecha, y creo que fue muy útil para poder poner en práctica por primera vez mis conocimientos de Laravel y MySQL.`,
        `Para llevar a cabo este proyecto utilicé la metodología de TDD (Test-Driven Development), que implica escribir primero casos de prueba relacionados a la funcionalidad que el sitio debe ofrecer, para luego cumplir dichas pruebas escribiendo el código en sí. Fue la primera vez que usé esta práctica, y considero que fue muy efectiva a la hora de guiar mis decisiones sobre cómo estructurar el código.`,
        `Emprender en este proyecto me tomó algo más de un mes, y pude realmente aprender a aplicar los diferentes componentes del framework Laravel junto con la sintaxis de PHP. También utilicé TailwindCSS para los estilos CSS de las páginas, por lo que en este proyecto pude utilizar un abanico de herramientas nuevas, con un resultado que considero muy satisfactorio.`,
      ],
    },
    tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'SQL', 'TailwindCSS', 'Git', 'GitHub'],
    website: 'https://insight-noticias.herokuapp.com/',
    repo: 'https://github.com/AugustoNicola/Insight',
  },
  {
    slug: 'panaderia-la-esquina',
    title: { en: '"La Esquina" Bakery', es: 'Panadería "La Esquina"' },
    kind: { en: 'Personal project', es: 'Proyecto personal' },
    image: '/assets/jpeg/proyecto-la-esquina.jpeg',
    summary: {
      en: 'A full-stack online store for a neighborhood bakery, built from scratch with an editable database, user accounts, and a shopping cart. Made with the MERN stack.',
      es: 'Una tienda virtual full-stack desde cero de una panadería de barrio, con base de datos modificable, sistema de usuaries y carrito. Hecha con el stack de tecnologías MERN.',
    },
    body: {
      en: [
        `"La Esquina" is the online store of a fictional neighborhood bakery, and I consider it one of my biggest projects so far. It's a full-stack web application that I built end to end, from the visuals to the database.`,
        `Some of its most notable features are a fully implemented database connection, a user system with a shopping cart, cookie-based authentication, advanced product filtering, and PayPal integration.`,
        `I took on this project because it seemed ideal to put the MERN stack knowledge I had recently acquired to the test. Although it took me months to complete, I'm very satisfied with the final result.`,
      ],
      es: [
        `"La Esquina" es la tienda virtual de una panadería de barrio ficticia, y considero que es uno de mis proyectos más grandes hasta el momento. Consiste en una aplicación web full-stack, que creé desde lo visual hasta la base de datos.`,
        `Algunas de sus funcionalidades más destacables son una conexión completamente implementada a base de datos, sistema de usuarios con carrito, autorización de ingreso basada en cookies, filtrado avanzado de productos, e integración con PayPal.`,
        `Decidí encarar este proyecto ya que consideré que era ideal para poner a prueba los conocimientos sobre el stack MERN que había aprendido recientemente. Aunque su realización me llevó meses, estoy muy satisfecho con el resultado final.`,
      ],
    },
    tools: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Git', 'GitHub'],
    website: 'https://panaderia-la-esquina.herokuapp.com',
    repo: 'https://github.com/AugustoNicola/Panaderia-La-Esquina',
  },
  {
    slug: 'harmonium',
    title: { en: 'Harmonium', es: 'Harmonium' },
    kind: { en: 'Personal project', es: 'Proyecto personal' },
    image: '/assets/jpeg/proyecto-harmonium.jpeg',
    summary: {
      en: 'An educational web app for learning about musical chords and scales, with an interactive piano that shows how they are played. Made with React.js.',
      es: 'Aplicación web didáctica para aprender acerca de acordes y escalas musicales. Cuenta con un piano interactivo y una vista de escalas y acordes que muestra cómo se tocan. Hecha con React.js.',
    },
    body: {
      en: [
        `Harmonium is a virtual piano simulator that can visually represent and play the most popular musical scales and chords. This web app makes it possible to learn about the structure and sound of these musical concepts in a more interactive way.`,
        `It currently implements the major, natural minor, harmonic minor, and melodic minor scales for all twelve notes of the chromatic scale, as well as the main triads and seventh chords.`,
        `This project came about as a way to connect one of my favorite hobbies, playing the piano, with programming. It let me build an app with React.js (a technology I wanted to get better at) while reinforcing the music theory I was learning at the time.`,
      ],
      es: [
        `Harmonium es un simulador virtual de piano capaz de representar visualmente y tocar las escalas musicales y acordes más populares. A través de esta aplicación web es posible aprender sobre la estructura y sonoridad de estos conceptos musicales de una forma más interactiva.`,
        `Actualmente están implementadas las escalas mayor, menor, menor armónica y menor bachiana de las doce notas del sistema cromático, así como las principales tríadas y tétradas.`,
        `Este proyecto surgió como una manera de poder conectar uno de mis hobbies favoritos, tocar el piano, con la programación. De esta manera, logré desarrollar una aplicación con React.js (una tecnología en la que quería mejorar) a la vez que pude reforzar los conceptos musicales que estaba aprendiendo.`,
      ],
    },
    tools: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Git', 'GitHub'],
    website: 'https://harmonium.netlify.app',
    repo: 'https://github.com/AugustoNicola/Harmonium',
  },
  {
    slug: 'bogado',
    title: { en: 'Bogado Cleaning Services', es: 'Bogado Servicios de Limpieza' },
    kind: { en: 'Client project', es: 'Proyecto para cliente' },
    image: '/assets/jpeg/proyecto-bogado.jpeg',
    summary: {
      en: 'A static presence website for a national company specialized in professional cleaning services.',
      es: 'Sitio web estático de presencia, desarrollado para una empresa nacional especializada en servicios profesionales de limpieza.',
    },
    body: {
      en: [
        `The site is a simple static web page, built to increase the company's digital presence. With sections presenting the company, its goals, responsibilities, and specialties, the site establishes the business's presence on the web.`,
        `This was my first project commissioned by a real client. Although it's considerably less complex than other web apps I've built, it helped me get familiar with client requirements and the communication needed to get the job done.`,
      ],
      es: [
        `El sitio consiste en una simple página web estática, desarrollada con el objetivo de aumentar la presencia digital de la empresa. Con secciones de presentación de la empresa, sus objetivos, responsabilidades y especialidades, el sitio busca marcar la presencia en la web del emprendimiento.`,
        `Este fue mi primer proyecto encargado por parte de un cliente real. Aunque la complejidad del desarrollo es considerablemente menor que la de otras aplicaciones web realizadas, me ayudó a familiarizarme con los requisitos de clientes y la dinámica de comunicación necesaria para llevar a cabo el trabajo.`,
      ],
    },
    tools: ['HTML', 'CSS', 'TailwindCSS', 'Git', 'GitHub'],
    website: 'https://bogadoservicios.com.ar',
  },
  {
    slug: 'dotfiles',
    title: { en: 'My Dotfiles', es: 'Mis Dotfiles' },
    kind: { en: 'Personal project', es: 'Proyecto personal' },
    image: '/assets/jpeg/proyecto-dotfiles.jpeg',
    summary: {
      en: 'The configuration files I gradually tailored to my liking on my GNU/Linux system.',
      es: 'Mis dotfiles son los archivos de configuración del sistema operativo GNU/Linux que fui adaptando a mi preferencia.',
    },
    body: {
      en: [
        `"Dotfiles" is the name commonly given to the set of configuration files of many programs, which together let you deeply customize how an operating system behaves. In my case, that was Ubuntu, a distribution of the GNU/Linux operating system.`,
        `Ever since I installed the base version of the OS, I progressively changed the behavior of various programs by editing their internal files to match my personal preferences. This is possible because much of the software developed for these platforms is open source and has great resources for learning how to configure it.`,
        `Although this project may seem to have little to do with web development, I don't think that's the case: the time I spent on it taught me a lot about searching for information efficiently when solving a software problem, a skill I've been able to apply in web development too.`,
      ],
      es: [
        `"Dotfiles" es el nombre con el que comúnmente se denomina al conjunto de archivos de configuración de gran variedad de programas con los cual se adapta ampliamente el funcionamiento de un sistema operativo en general. Este fue mi caso con Ubuntu, una distribución del sistema operativo GNU/Linux.`,
        `Desde que instalé la versión base del sistema operativo, fui progresivamente editando la funcionalidad de diversos programas, alterando sus archivos internos para acercarlos a mi preferencia personal; esto es posible ya que gran parte del software que se desarrolla para estas plataformas es open source y cuenta con muy buenos recursos para aprender a configurar los programas.`,
        `Aunque pueda parecer que este proyecto poco tiene que ver con el desarrollo web, no creo que ese sea el caso: haber dedicado tiempo a esta tarea me enseñó mucho acerca de cómo buscar información eficientemente en la web a la hora de resolver un problema de software. Esta habilidad sí la he podido aplicar en el ámbito de desarrollo web.`,
      ],
    },
    tools: ['Linux', 'Git', 'GitHub'],
    repo: 'https://github.com/AugustoNicola/dotfiles',
  },
]
