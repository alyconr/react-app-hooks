# Aplicación React  dinámica HTTP con React Router  y Hooks


El objetivo del ejercicio es la construcción de una aplicación web React.js con diferentes components que 
tenga como resultado la siguiente interfaz de usuario (Mobile first):

![Aplicación web react](https://i.imgur.com/77Xn2An.jpg)

En esta ocasión, todos los datos (posts, perfil de usuario) deberán obtenerse por HTTP desde el API 
expuesto en https://thre-points.herokuapp.com/api . Junto al enunciado del ejercicio puede encontrarse 
una colección Postman como documentación sobre los diferentes endpoints.
Todos los componentes React deberán ser funcionales, haciendo uso de los hooks useState y useEffect 
para manejar el estado y ciclo de vida del componente.


Además, las diferentes secciones se mostrarán bajo una ruta del navegador, utilizando la biblioteca React 
Router:

![Esquema web react-router](https://i.imgur.com/ES5OdMj.jpg)

La aplicación contará con autenticación HTTP basada en Bearer token.
Si cualquier petición HTTP devuelve código 401, deberá borrarse el localStorage del navegador, limpiar el 
estado currentUser y redirigir al usuario a la ruta /login
- Al escribir sobre la barra de búsqueda se deberán mostrar solo los posts que contengan la cadena 
de búsqueda en su contenido
- Los posts deberán mostrarse después de haber cargado la interfaz. Mostrando el texto 
“Loading…” durante el tiempo de carga.
- El botón “Me Gusta” deberá incrementar el contador de likes sobre el post utilizando el API HTTP
- Al pulsar sobre el icono de perfil el usuario será redirigido a la ruta /profile

## Autenticación

Al pulsar sobre “login” deberán enviarse los datos del formulario con una petición POST a la siguiente url: 
https://three-points.herokuapp.com/api/login
Body: { “username”: “…”, “password”: “…” }
Content-Type: application/json
Usuario registrado para pruebas:
{ “username”: “john”, “password”: “P4ssW0rd!#” }

Si la petición HTTP devuelve un código 200 (éxito), se guardará el token del usuario en el localStorage del 
navegador y se mostrará el listado de posts. En caso contrario, se activará el estado de error y se mostrará 
el mensaje de error en pantalla.
El resto de peticiones HTTP deberán usar la cabecera “Authorization: Bearer {token}” para resolver la 
autenticación.
Cada vez que se inicie la aplicación web se deberá verificar si existe el token del usuario en el localStorage 
del navegador. Si existe, se accederá al listado de posts. En caso contrario, se mostrará la pantalla de login. 

# JERARQUIA DE COMPONENTES

![Jerarquia de Componentes](https://i.imgur.com/MxpPiN8.jpg)



