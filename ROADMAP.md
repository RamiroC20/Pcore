# PCore - Roadmap de desarrollo

## Enlaces del proyecto

- Repositorio: [github.com/RamiroC20/Pcore](https://github.com/RamiroC20/Pcore)
- Sitio publicado: [ramiroc20.github.io/Pcore](https://ramiroc20.github.io/Pcore/)
- Video explicativo: [youtu.be/op9Rc1v-dzI](https://youtu.be/op9Rc1v-dzI)

## Descripción

PCore es un ecommerce de componentes de computadoras. Permite iniciar sesión, recorrer categorías, consultar productos, elegir cantidades, agregar artículos al carrito y conservar la compra en el navegador.

## Roadmap

### Etapa 1 - Estructura HTML

- Creación del repositorio público.
- Desarrollo de la página principal.
- Creación de las páginas de login y registro.
- Creación de cuatro categorías: procesadores, placas de video, memorias RAM y almacenamiento.
- Navegación inicial mediante rutas relativas.

### Etapa 2 - Identidad visual y CSS

- Definición de la identidad de PCore.
- Aplicación de la paleta `#0D0D0D`, `#39FF14` y `#FFFFFF`.
- Estilización del navbar, formularios y cards.
- Uso de Flexbox y CSS Grid para organizar el contenido.
- Incorporación de imágenes WebP, logo propio e iconos SVG.

### Etapa 3 - JavaScript y DOM

- Creación del navbar como componente reutilizable.
- Uso de un array de objetos para los enlaces de navegación.
- Creación dinámica de cards mediante JavaScript.
- Redirección desde el login hacia el home.
- Redirección del logout hacia el login.
- Incorporación de controles para aumentar o disminuir cantidades.

### Etapa 4 - JSON, Fetch y carrito

- Creación de `data/productos.json` con 24 productos.
- Obtención asíncrona de productos mediante `fetch`.
- Filtrado de productos por categoría.
- Presentación de tres productos por categoría en el home.
- Creación de la página del carrito.
- Cálculo de subtotales y total general.

### Etapa 5 - Persistencia de datos

- Almacenamiento del usuario en `sessionStorage`.
- Protección de las páginas destinadas a usuarios logueados.
- Almacenamiento del carrito en `localStorage`.
- Persistencia de productos y cantidades al recargar la página.
- Eliminación individual de productos del carrito.

### Entrega final - Mejora significativa y publicación

- Edición de cantidades directamente desde el carrito.
- Actualización automática de subtotales y total.
- Contador de unidades del carrito visible en el navbar.
- Botón para vaciar el carrito completo.
- Mejora de accesibilidad mediante textos alternativos y etiquetas `aria-label`.
- Publicación del proyecto mediante GitHub Pages.
- Preparación de la documentación y del recorrido en video.

## Tecnologías utilizadas

### HTML5

Se utilizó para crear la estructura semántica del sitio, los formularios, las secciones de categorías y la página del carrito.

### CSS3

Se utilizó para definir la identidad visual, la paleta de colores y la distribución mediante Flexbox y Grid. No se incorporaron frameworks de estilos.

### JavaScript

Se utilizó para manipular el DOM, construir componentes, manejar eventos, controlar cantidades, realizar redirecciones y actualizar el carrito.

### JSON y Fetch API

Los productos se almacenan en un archivo JSON. La Fetch API obtiene esa información de manera asíncrona y las cards se generan según la categoría correspondiente.

### Web Storage API

- `sessionStorage` conserva la información del usuario durante la sesión.
- `localStorage` mantiene los productos y cantidades del carrito incluso después de recargar el sitio.

### Git y GitHub

Se utilizaron para el control de versiones, la organización por etapas y la publicación del código fuente.

### GitHub Pages

Se eligió como tecnología adicional para publicar el proyecto como un sitio estático accesible públicamente. Se integra directamente con el repositorio y permite servir HTML, CSS, JavaScript, JSON e imágenes sin incorporar un servidor propio.

## Mejora significativa

La mejora final se concentra en la experiencia de compra. En las entregas anteriores, las cantidades solo podían elegirse antes de agregar un producto. En la versión final también pueden modificarse desde el carrito.

Cada cambio actualiza inmediatamente la información de `localStorage`, el subtotal del producto, el total general y el contador del navbar. Además, el usuario puede eliminar un artículo o vaciar el carrito completo. Esto reduce pasos innecesarios y ofrece una experiencia más clara y consistente.

Como mejora adicional de accesibilidad, los controles de cantidad incluyen descripciones mediante `aria-label` y las imágenes tienen textos alternativos.

## Instrucciones de uso

1. Ingresar al sitio publicado.
2. Iniciar sesión con un email y una contraseña de prueba.
3. Recorrer el home o las páginas de categorías.
4. Seleccionar una cantidad y agregar el producto al carrito.
5. Abrir el carrito desde el navbar.
6. Modificar cantidades, eliminar productos o vaciar el carrito.
7. Cerrar sesión desde el navbar.

## Video explicativo

El video mostrará el login, el home, las categorías, la selección de cantidades, la persistencia del carrito, la edición desde el carrito, la eliminación de productos y el cierre de sesión. También incluirá una reflexión sobre el proceso de aprendizaje.

**Enlace del video:** [https://youtu.be/op9Rc1v-dzI](https://youtu.be/op9Rc1v-dzI)
