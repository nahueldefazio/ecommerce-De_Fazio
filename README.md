# ReactJS - Proyecto e-commerce

[Sitio Web](https://nahueldefazio.github.io/ecommerce-De_Fazio/)

# Presentación

Soy Nahuel De Fazio, programador Front-End. Este es mi proyecto final del curso de ReactJS. El objetivo fue crear un
ecommerce con React, con bibliotecas de carácter obligatorias como React-router-dom para la navegación (SPA) del sitio y
Firebase como base de datos. He intentado ir un poco más de lo pedido en el curso, por lo que use otras bibliotecas como
Formik y Yup para la validación de formularios. Para la parte de UI utilicé Sweetalert para las alertas y
react-bootstrap para los distintos estilos de las páginas. Dicha app fue hecha a base de componentes reutilizables,
hooks (useState, useEffect, useParams, useContext) y mucha lógica.

# App

### Instalación

Para la instalación de las dependencias requeridas, ejecutar `npm install`

### Uso de la aplicación

Para iniciar la aplicacion, ejecutar `npm start` y abrir http://localhost:3000 en cualquier navegador.

### Bibliotecas usadas (dependencias):

- Firebase : Version 8.9.1. Para su instalación utilicé el comando `npm i firebase@8.9.1` . Esta biblioteca fue usada
  para realizar peticiones GET y POST. GET para obtener los datos de los productos que se encuentran en la base de datos
  de Firebase y POST para enviar los datos del formulario de compra desde de aplicación hacia Firebase.

- ---

- Formik : Version 2.2.9, la más actual hasta la fecha (22/10/2021), con `npm i formik` se instala dicha biblioteca. Fue
  utilizada para la validación del formulario de compra al finalizar la misma.

- ---

- React-bootstrap: Version 2.0.0. Esta biblioteca contiene componentes realizados por bootstrap con el fin de ahorrarnos
  codigo y por ende tiempo. Fue utilizado principalmente al momento de realizar el componente PopUp (modal que verífica
  tu compra si fue exitosa).

- ---

- Bootstrap : Version 5.1.1. Esta biblioteca funciona de manera simultánea con React-bootstrap, ya que trae por
  defecto (en su instalación) los archivos CSS (bootstrap) y JS (popper y bootstrap).
  `npm install react-bootstrap bootstrap@5.1.1` es el comando para instalar el paquete completo.

- ---

- React-router-dom : Version 5.3.0, con el comando `npm install react-router-dom` se realiza la instalación. El uso de
  esta biblioteca se ve reflejado al momento de navegar por el sitio, en donde vemos que el sitio nunca se recarga para
  ir otra página interna, sino que funciona de manera SPA. Utilizado principalmente con el componente Nav (barra de
  navegacion). Pero también se ve en algunos botones con el fin de realizar un redirection a la página requerida.

- ---

- Sweetalert : Version 2.1.2, comando de instalación `npm install sweetalert --save`.Fue usado solamente con el fin de
  notificarle al usuario que estaba agregando la cantidad de cero (0) productos al carrito, lo cual es inválido.

- ---

- Yup : Version 0.32.11, comando de instalación `npm i yup`. Fue utilizado al momento de mostrar los mensajes de errores
  personalizados en los formularios. Funciona en simultaneidad con Formik.

- ---

- Gh-pages: Version 3.2.3. Lo utilicé para poder subir mi código, el cual se encuentra alojado en el repositorio de
  GitHub, ya compilado a un sitio web gratis. No hay necesidad de instalar dicha biblioteca para el correcto funcionamiento
  de la aplicación.

# Gracias por visitar mi proyecto 

## Si queres ver mas proyectos mios, te dejo mi Portfolio 
[PORTFOLIO](https://nahueldefazio.github.io/Portfolio/)





