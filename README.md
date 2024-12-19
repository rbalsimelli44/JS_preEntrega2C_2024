1.**titulo**       MERCADITO, web ecomerce presentado como Entrega del Trabajo Final del curso JS FRONT END 2C 2024 de Talento Tech Adultos CABA

2.**autor**        Ricardo Balsimelli - Comisión #24225 - https://www.linkedin.com/in/ricardo-manuel-balsimelli-reyes-18887314/

3.**descripción**  Trabajo desarrollado usando HTML, CSS, GRID, FLEX y BOOTSTRAP

4.**cumplimiento de requisitos**

Estructura Básica de HTML.
	● Estructura semántica
		Los archivos HTML están divididos usando etiquetas semánticas: 
        body, header, div y nav 
        main, section, div, form y table  
        footer, div
	● README.MD 
		es este archivo explicando el propósito y herramientas utilizadas en la página 

Formulario de Contacto.
	● Formulario funcional
		Formulario de contacto con campos para nombre, correo electrónico y mensaje
		Utilizo Formspree para manejar el envío del mail se recibe crrectamente.
        El propósito es obtener información de los visitantes de la página y recibir comentarios, quejas o posibles mejoras en la funcionalidad de la página.

Contenido Multimedia y Navegación.
	● Multimedia: 
		Incluye un archivo multimedia (imagenes, video o iframe) correctamente integrado en la página
        Los íconos son .svg cargados free d https://design-system.w3.org/styles/svg-icons.html y https://fontawesome.com/
        Las imágenes de los productos, la música y el video son propias .png  .mp3 y .mp4
	● Lista de navegación: 
		Implemento enlaces que simulan la navegación interna (Inicio, Productos, Opiniones, Contacto, Carrito).

Subido el Proyecto.
	● El proyecto está subido a GitHub Pages, con una URL funcional para visualizar el sitio, y probado desde un celular

Estilos Básicos Aplicados con CSS.
	● Archivo stylesPreEnt.css 
		Incluye los estilos básicos aplicados a las secciones de header, footer y lista de navegación con Flex
		Fuentes de Google Fonts correctamente implementadas
        Estilos aplicados a la presentación de la tabla de productos con scroll
		Propiedades de background aplicadas a las secciones de encabezado y datos de la tabla
        Los estipos aplicados están agrupados y con comentarios sobre a que parte del HTML aplican

Diseño Responsivo con Flexbox, Grid, Bootstrap y Media Queries
Sección "Galería"
		Organizada en cards de forma responsiva utilizando Flexbox y mostrando los productos en un carrusel
        El propósito es simulandr una presentación de marketing digital en redes y ante un click permite cargar el producto en el carrito de compras 
Sección "Productos"
		Organizada con una tabla dentro de un contenedor y aplicando propiedades css específicas para cada elemento
        El propósito es ofrecer una lista de productos donde se puede filtrar, ordenar, buscar un producto específico y cargar en el carrito de compras
Sección "Opiniones"
		Organizada utilizando Grid, con una distribución lógica y estética de las opiniones y comentarios
        El propósito es ofrecer información de clientes y su experiencia de compra en la página
Sección "Contacto"
		Responsiva mediante el uso de Media Queries para adaptarse a diferentes tamaños de pantalla
        Uso de google maps para indicar un lugar de referencia 
        El propósito es suministrar información y medios para llamar, referenciar o enviar mensajes relacionados con la experiencia de compra
navbar responsivo creado con Bootstrap
        Adaptado la navbar de Bootstrap a la paleta de colores de tu proyecto.
        El proyecto está en un repositorio GitHub, con commits que documenten los cambios.

Funcionalidad JavaScript
        Creado un archivo script.js y linkeado en el documento HTML.
        Revisado el código por medio del inspector que nos ofrece nuestro navegador y el proyecto no nos està dando ningùn error.

Condicionales y Ciclos
        Implementar una función que verifique si todos los campos del formulario de contacto están completos, mostrando un mensaje en la consola.
        Crear un ciclo que genere dinámicamente una lista de productos disponibles y los muestre en la consola 

Manipulación Básica del DOM y Eventos
        Implementar un evento click que muestra la descripción ampliada del producto que clickeamos.
        Crear un listado de productos incluidos en nuestro HTML generado por medio de una función en Js. 
        
Funciones Modulares
        Crear de una función que cree un array de productos y los muestre en la página utilizando una plantilla HTML dinámica

Asincronía y Consumo de API REST
        Utilización de fetch para obtener datos de una API pública y mostrarlos en la sección main del HTML.
        Procesar los datos obtenidos de la API para organizarlos en cards, aplicando Flexbox o Grid para mantener la coherencia en el diseño

Carrito de compras
        Debemos tener implementado un carrito de compras que permita a los usuarios añadir productos desde las cards, utilizando localStorage
        y sessionStorage para almacenar la información del carrito.
        Los productos en el carrito se deben poder visualizar, editar (cambiar la cantidad) y eliminar.
        La información debe mantenerse después de recargar la página.

Proyecto Integrador Final
        ● Las páginas deben estar estructuradas correctamente utilizando etiquetas semánticas.
        ● Implementar al menos una animación CSS para mejorar la experiencia del usuario.
        ● Utilizar fuentes personalizadas de Google Fonts.
        ● El CSS debe estar embebido, aplicando estilos que incluyan el uso de Flexbox o Grid para un diseño responsivo.
        ● Incluir un navbar creado con Flexbox.
        ● Consumir una API REST mediante fetch.
        ● Mostrar elementos dinámicos en el HTML a partir de datos JSON.
        ● Utilizar la manipulación del DOM para integrar los datos obtenidos en la interfaz.
        ● El proyecto debe estar subido a GitHub con un historial de commits que documenten el progreso