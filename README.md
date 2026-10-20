# **Portfolio**

### *Mi portfolio personal de proyectos y herramientas.*

### **Portfolio en línea: https://augustonicola.netlify.app**

![Screenshot](public/assets/screenshot.png)

<br>

### [English README here :uk: :us:](README-EN.md)

<br>

Este es el código fuente de mi página web personal de portfolio, en la que presento información sobre mis habilidades y experiencias. Hecha con [Astro](https://astro.build) y SCSS, disponible en inglés y español.

El diseño está basado en la plantilla de portfolio ["Dopefolio"](https://github.com/rammcodes/Dopefolio) diseñada por [Ram Maheshwari](https://github.com/rammcodes).

Los íconos visuales utilizados a lo largo del proyecto son propiedad de [Font Awesome](https://fontawesome.com/) y [Simple Icons](https://simpleicons.org/).

<br>

# Instalación y Uso Local
Para poder editar localmente la página, seguir estos pasos:

1. **Clonar el repositorio y moverse a la carpeta de destino**
	
		$ git clone https://github.com/AugustoNicola/Portfolio
		$ cd Portfolio/
	
2. **Crear el entorno con Node.js 22 (Astro requiere Node ≥ 22.22) e instalar las dependencias**

		$ conda create -n portfolio -c conda-forge "nodejs>=22.22,<23"
		$ conda activate portfolio
		$ npm install

¡Listo, el proyecto debería estar configurado correctamente!

<br>

## Comandos

* `npm run dev`: Levanta un servidor de desarrollo en `http://localhost:4321` con recarga automática.
* `npm run build`: Genera el sitio estático en la carpeta `dist/` (es lo que ejecuta Netlify).
* `npm run preview`: Sirve localmente el contenido de `dist/`.

## Estructura

* `src/data/`: Todo el contenido del sitio (bio, investigación, formación, proyectos y enlaces), con sus versiones en inglés y español.
* `src/i18n.ts`: Textos de la interfaz en ambos idiomas. El inglés vive en `/` y el español en `/es/`.
* `src/components/`: Secciones de la página; `src/styles/`: estilos SCSS; `src/icons/`: íconos SVG de herramientas.

<br>

# Contribuciones y Licencia
Este proyecto está bajo la [Licencia GPL v3.0](https://choosealicense.com/licenses/gpl-3.0/). **Podés leer, usar o modificar el código que necesites, ¡pero es necesario que mantengas la licencia y hagas públicas dichas modificaciones!**

Cualquier aporte de código, pull request, notificación de errores o fallas, sugerencias o cualquier otro tipo de contribución será enormemente agradecida.

Nuevamente, agradecimientos a Ram Maheshwari por crear la plantilla de portfolio en la que se basa este trabajo. :raised_hands:

¡Espero que te haya gustado mi trabajo! :+1: