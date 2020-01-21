### POKEAPI v.1.1.0

En esta versión se han corregido errores detectados de la versión anterior y añadida alguna funcionalidad adicional:

**CI:**

-   Se han añadido test unitarios a los distintos componentes (se arreglaron los errores al realizar test con asincronía)
-   Dentro del husky `ng test` en el pre-commit y `ng build --prod` en el push (compilación más escricta que el ng serve utilizado en el desarrollo)
-   Se ha añadido la IC al GitLab (configuración en el archivo `.gitlab-ci.yml`). Se basa en tres jobs (lintado, realización de test y compilación de producción). Será necesario pasar estas pruebas en el repositorio para poder mergear ramas.

**Routing:**

-   Se ha modificado el routing para que funcione mediante el nombre del pokemon en lugar del id.

**Generales de la App**

-   Se ha arreglado el error del overflow.
-   Añadido botón para volver al principio de la página (desaparece cuando ya estamos en el principio).

**Mejora de la arquitectura del proyecto**

-   Carpeta de la app organizada en las siguientes carpetas:

    -   components
    -   models
    -   pipes
    -   shared

-   Creación de carpeta 'styles' basada en la arquitectura 7-1 con los siguientes directorios:
    -   abstracts
    -   base
    -   layout
    -   themes

**Landing**

-   Refatorización del código del componente de Landing. Se ha reducido la cantidad de líneas de HTML un 85% con respecto a la versión anterior.

**Componentes**

-   Se ha optimizado la maquetación mediante la creación de diversos elementos como componentes de Angular.

**Pokedex:**

-   Refactorización de todo el código e implementación de `display:flex`.
-   Para pantallas con scroll, al seleccionar un pokemon de la lista te direcciona a la tarjeta del pokemon (mejora UX para pantallas pequeñas)

**Pokemon-card:**

-   Se ha sustituido el modelo de flip de la tarjeta por un botón para poder disponer de un código más limpio y de cara a trabajar en él en futuras versiones.
-   Se ha sustituido las barras de las gráficas hechas con divs por barras hechas con svg

**Mapa (leaflet):**

-   Se ha añadido buscador el mapa.

---

### POKEAPI v.1.0.0

### GIT FLOW

El presente repo del proyecto **_poke-angular-api_** se compone de una rama principal `develop`, sobre la que sale nuestra rama **master** `feature\develop-group-3` (así como las del resto de grupos). De esta se ha creado la rama `develop-3`, que es sobre la que haremos las `pull request` de nuestros desarrollos en base a la siguiente sintaxis:

`feature-3_name-of-feature`

![image](/uploads/d6e969522b583dfeef8c91358b58e749/image.png)

En caso de dudas de cómo funciona la metodología _git flow_, echar un ojo al siguiente artículo: https://gfourmis.co/gitflow-sin-morir-en-el-intento/

**IMPORTANTE: el proceso de trabajo para cualquier desarrollo será siempre el siguiente:**

1.  Crear una rama local `git checkout -b`feature-3_name-of-feature`
2.  Traerse el repo de GitLab a nuestra rama para poder trabajar con la última versión del proyecto: `git pull origin develop-3`
3.  Trabajar en el desarrollo de la _feature_ seleccionada hasta cumplir con las expectativas establecidad. **_No incluir trabajo adicional que no esté relacionado con la "feature" sobre la que estamos trabajando_**.
4.  Commitear cambios de forma periódica para poder ir generando un proceso de trabajo que sea facilmente identificable para futuras revisiones. NOTA: los commits deben ser identificativos en su descripción y usando siempre verbos en presente.
5.  Antes de lanzar la pull request, traerse la última versión de los cambios del proyecto a local `git pull origin develop-3` y solucionar los posibles conflictos existentes entre archivos
6.  Una vez que los conflictos se han resuelto, lanzar la _pull request_: `git push origin feature-3_name-of-feature`
7.  Ir al repo del proyecto y en clicar en "merge request"

![image](/uploads/52234716a1569061ee0baaf7043a1d8e/image.png)

Seleccionar el _branch_ en el que hemos trabajado y solicitar una **_merge request_** sobre `develop-3`

![image](/uploads/32aaaf1e26f8e90dd65300db54d5ea97/image.png)

8.  Mover nuestra tarjeta de Trello de _to do_ a _to review_.
9.  Estar pendiente de la revisión de la tarea por parte de nuestros compañeros. En caso de que haga falta una revisión de la tarea, trabajar sobre ella y darle solución lo antes posible. Iniciar el proceso una vez que hayamos terminado.
10. ¡Trabajo terminado!, ¡bien hecho!, ahora ya puedes seleccionar una nueva tarea para desarrollar.

---

### TRELLO

La gestión del trabajo en curso se llevará a cabo mediante el siguiente tablero de trello: https://trello.com/invite/b/7tyYNYmQ/6995c7fde94bd8ba02c7178feed3c0ac/poke-angular.

Las iteraciones o sprints del proyecto se atrupan en la pestaña **_Iterations_**, donde están asignados todos los miembros del equipo y que muestra los hitos pendientes del sprint semanal:

![image](/uploads/e502bf4adaba76be3a40f4b11d7bd5f0/image.png)

Estos hitos definirán la pila del **_backlog_**, agrupados en la pestaña **_to do_**.

Al asignarse una tarea o "feature", se deberá crear una **etiqueta** con el nombre de esta que coincidirá con el "branch" en el que se llevará a cabo el desarrollo de la misma. El formato será el siguiente:

`feature-3_name-of-feature`

![image](/uploads/d6c9fba33268532d9cfd1345bb21271c/image.png)

Una vez finalizada la tarea y lanzada la `pull-request`, se llevará la tarea a la lista **_to review_** para que el resto de compañeros del equipo sepan que debe ser revisada antes del merge final sobre `develop-3`.

---

### PROCESO TRABAJO

-   _No trabajar en características o desarrollos que no correspondan con la rama sobre la que estamos llevando a cabo nuestra tarea_

---

### GENERAL

El proyecto cuenta con un formateador de código (**Prettier**) y un programa de lintado automático (**TSLint**) instalados.

![image](/uploads/37fb2aa85e9d3d580548c6d6e529fcfa/image.png)

_Prettier_
https://www.npmjs.com/package/prettier

_TSLint_
https://www.npmjs.com/package/tslint

Mediante Husky, se han añadido algunas reglas para que se autoformatee de forma adecuada en los siguientes casos:

`"pre-commit": "pretty-quick --staged"`

`"pre-push": "ng lint"`

La configuración de TSLint se encuentra en `tslint.json` y la de prettier en `prettierrc`, ambos en la raíz de proyecto. Para modificar la forma en la que actúan estos deberá haber un consenso entre los integrantes del proyecto.

---

![image](/uploads/04be5c2f767b5264b876f59b48c5370d/image.png)

Se usará, en la medida de lo posible, HTML5 semántico, evitando la reiteración de etiquetas `<div>` y `<p>` y en su lugar usando aquellas que más describan el elemento sobre el que estamos trabajando.

En caso de ayudar, utilizar la siguiente guía:

https://www.w3schools.com/html/html5_semantic_elements.asp

---

![image](/uploads/7aaa3c9e63f77289bafd1b42f3ac8b4c/image.png)

El proyecto se llevará a cabo mediante SASS y siguiendo la metodología BEM (http://getbem.com/introduction/), prestando especial atención a la forma en la que se declaran BLOQUES, ELEMENTOS y MODIFICADORES.

**Para mejorar la especificidad de los selectores, se tendrán en cuenta las siguientes normas:**

-   No se usarán ID's ni elementos (salvo para estilos generales definidos por proyecto. p.ej: `body {font-size: 16px}` como selectores y siguiendo BEM.

En la raíz del proyecto, además del archivo `style.scss`, se ha creado un `reset.scss` y otro `commonStyles.scss`.

-   Como norma general se usará kebap-case para el nombrado de elementos en SCSS combinado con la metodología BEM.

El archivo _reset_ resetea todo el formato previo que pueda existit en el navegador por defecto, y el de _commonStyles_ se encarga de importar este y de generar unos estilos globales para todo el proyecto, como las variables y aquellos estilos sobre selectores que vamos a utilizar de forma redundante. **_Este estilo siempre se importará en todas las hojas de estilo que se creen `@import '../../commonStyles.scss';`_**

Se maquetará aplicando `display:flex` para un código más limpio y que sea más sencilla la aplicación del responsive. Puede servir como bibliografía de consulta el siguiente enlace : https://css-tricks.com/snippets/css/a-guide-to-flexbox/ donde se explican todos los casos y se exponen **_ejemplos visuales_** de su funcionamiento.

---

![image](/uploads/12cfccd434a68ad279bc639a4ea26b43/image.png)

Se tendrá en cuenta lo ya comentado del formateo en cada commit por parte de _prettier_ y además, durante la escritura de código se deberá llevar a cabo las siguientes prácticas:

-   Dado que el proyecto cuenta con transcriptores de JS, todo el proyecto se realiza con TypeScript y siguiendo los estándares de ES6 en cuanto al uso de nuevas funcionalidad, variables (let y const) ...
-   Se usará `;` al finalizar cada línea de código.
-   En general se usará camelCase como convención en el nombrado de variables en TypeScript.

---

# PokeAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## New features developed!

-   Basic components created: pokedex, pokemon-list, pokemon-detail ...
-   Img folder added in src/ assets
-   Reset.scss and mediaQueries.scss added
-   Husky added in our repo
-   Main service `pokedex.service` added to fetch the list of the pokemon from the poke-api and give it to the pokedex component
-   Installed some new features to develop CI/CD
-   You can lint your project with the command `ng lint`, it will return the main ERRORs found in the project

-   Figma design! https://www.figma.com/file/Pj6OX5iNLfU08yPPDtnhYH/pokedex?node-id=0%3A1

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# poke-angular

#### Autor: Alberto Rivera Mérida

Desarrolla una aplicación en Angular que cumpla con las siguientes especificaciones detalladas más adelante. Podéis organizaros por grupos/equipos.

### ITERACIÓN 1

Crear un proyecto en GitHub / GitLab : Dar acceso al resto de colaboradores.
Definir el reparto de Tareas - Trabajar bajo la metodología Git-flow.

### ITERACIÓN 2

Mostrar el listado de Pokemons - desde la Api. /PokemonsList
Al clickar cada Pokemon debe dirigirte a el detalle del Pokemon. /PokemonName
Conectarse a la API de Google Maps y mostrar Mapa.
Pintar con los marks de Maps/LeaFlet algunos Pokemons en la Aplicación.
Filtrar los Pokemos con diferentes PIPES - Tipo o Nombre.

### ITERACIÓN 3

Crear una función que sustituya en el click la img de los Pokemons de tipo Planta por una img al gusto.
Crear una función que elimine del listado los Pokemons según el tipo que se le pase por parámetro.
Testar estas funcionalidades.

### ITERACIÓN 4

Maquetación con Flexbox (cada integrante debe maquetar al menos una vista).

### ITERACIÓN 5

Añadir un buscador de pokemons en el mapa (Buscador por nombre o tipo).

### BONUS

Dar la opción de añadir un pokemon en algún punto del mapa.
Realizar una Landing Inicial en la que expliquéis el funcionamiento de vuestra app.
Realizar alguna funcionalidad extra al contenido.
Completar un Readme explicativo.
Cualquier otra mejora que implementéis será un plus.
