Proyecto creado con [Create React App](https://github.com/facebook/create-react-app).

## Requerimientos bases

1. Node JS
2. NPM

## Dependencias Instaladas

1. @testing-library/jest-dom
2. @testing-library/react
3. @testing-library/user-event
4. firebase
5. node-sass
6. react
7. react-dom
8. react-firebaseui
9. react-router-dom
10. react-scripts
11. bootstrap
12. jquery
13. popper.js

## Instalación de Dependencias

Para instalar las dependencias ejecutar npm install  

## Scripts Disponibles

Este proyecto se puede operar con los siguientes comandos:

### `npm run start`
Para hacer correr el proyecto en localhost:300x

### `npm run build`
Para compilar el proyecto en un formato de deploy

### `firebase deploy`
Para hacer deploy a la plataforma firebase hosting, se requiere estar autenticado `firebase login`
y `firebase init`, para mas detalles consultar en [Firebase Console](https://console.firebase.google.com)

=================================================================================
### Detalles de la App:

Uso de contexto para creación de variables y funciones globales (Carpeta Store)
Uso de imágenes de uso libre https://www.pexels.com/
Uso de iconos https://ionicons.com/
Uso de https://designer.mocky.io/ para creación de JSONs para métodos Fetch
Uso de firebase para autenticación en google y facebook https://console.firebase.google.com
Uso de firebase para deploy https://console.firebase.google.com
Uso de SASS para la estilización de la app

### Instalación de Firebase Auth
Acceder a [Firebase Console](https://console.firebase.google.com)

1. Crear nuevo proyecto
2. Seleccionar en el panel izquierdo la opción desarrollo/authentication
3. Seleccionar Sign-in method en las opciones de panel central
4. Activar las opciones de google y facebook
5. para la configuración de facebook seguir las siguientes intrucciones [youtube](https://www.youtube.com/watch?v=8teXym2TnAI&t=228s)
6. Para obtener la apikey requerido en el archivo ./store/appContext,
se debe acceder al símbolo de engranaje ubicado en la parte superior izquierda del panel de firebase y
seleccionando la opción "Configuración del Proyecto". Dentro del panel la apiKey se encontrará bajo el título
"Clave de API de la web".
7. Por último para obtener el authDomain requerido en el archivo ./store/appContext, se debe mandar a deploy el proyecto en la plataforma de 
firebase en el mismo proyecto donde se creó la publicación. Para el proceso de deploy en firebase seguir las siguientes intrucciones
[youtube](https://www.youtube.com/watch?v=QNMVURtx86c&t=79s)




