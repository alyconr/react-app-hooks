# Aplicaci贸n React  din谩mica HTTP con React Router  y Hooks 馃敆 馃挕


El objetivo del ejercicio es la construcci贸n de una aplicaci贸n web React.js con diferentes components que 
tenga como resultado la siguiente interfaz de usuario (Mobile first):

![Aplicaci贸n web react](https://i.imgur.com/77Xn2An.jpg)

En esta ocasi贸n, todos los datos (posts, perfil de usuario) deber谩n obtenerse por HTTP desde el API 
expuesto en https://thre-points.herokuapp.com/api . Junto al enunciado del ejercicio puede encontrarse 
una colecci贸n Postman como documentaci贸n sobre los diferentes endpoints.
Todos los componentes React deber谩n ser funcionales, haciendo uso de los hooks useState y useEffect 
para manejar el estado y ciclo de vida del componente.


Adem谩s, las diferentes secciones se mostrar谩n bajo una ruta del navegador, utilizando la biblioteca React 
Router:

![Esquema web react-router](https://i.imgur.com/ES5OdMj.jpg)

La aplicaci贸n contar谩 con autenticaci贸n HTTP basada en Bearer token.
Si cualquier petici贸n HTTP devuelve c贸digo 401, deber谩 borrarse el localStorage del navegador, limpiar el 
estado currentUser y redirigir al usuario a la ruta /login
- Al escribir sobre la barra de b煤squeda se deber谩n mostrar solo los posts que contengan la cadena 
de b煤squeda en su contenido
- Los posts deber谩n mostrarse despu茅s de haber cargado la interfaz. Mostrando el texto 
鈥淟oading鈥︹?? durante el tiempo de carga.
- El bot贸n 鈥淢e Gusta鈥? deber谩 incrementar el contador de likes sobre el post utilizando el API HTTP
- Al pulsar sobre el icono de perfil el usuario ser谩 redirigido a la ruta /profile

## Autenticaci贸n 馃啑

Al pulsar sobre 鈥渓ogin鈥? deber谩n enviarse los datos del formulario con una petici贸n POST a la siguiente url: 
https://three-points.herokuapp.com/api/login
Body: { 鈥渦sername鈥?: 鈥溾?︹??, 鈥減assword鈥?: 鈥溾?︹?? }
Content-Type: application/json
Usuario registrado para pruebas:
{ 鈥渦sername鈥?: 鈥渏ohn鈥?, 鈥減assword鈥?: 鈥淧4ssW0rd!#鈥? }

Si la petici贸n HTTP devuelve un c贸digo 200 (茅xito), se guardar谩 el token del usuario en el localStorage del 
navegador y se mostrar谩 el listado de posts. En caso contrario, se activar谩 el estado de error y se mostrar谩 
el mensaje de error en pantalla.
El resto de peticiones HTTP deber谩n usar la cabecera 鈥淎uthorization: Bearer {token}鈥? para resolver la 
autenticaci贸n.
Cada vez que se inicie la aplicaci贸n web se deber谩 verificar si existe el token del usuario en el localStorage 
del navegador. Si existe, se acceder谩 al listado de posts. En caso contrario, se mostrar谩 la pantalla de login. 

# JERARQUIA DE COMPONENTES

![Jerarquia de Componentes](https://i.imgur.com/MxpPiN8.jpg)

## Built with 鉀?
- [React](https://es.reactjs.org/)
- [Pexels](https://pexels.com/) // Todas las imagenes utilizadas en la aplicaci贸n tiene licencia Creative Commons.
- [Bootstrap5](https://https://getbootstrap.com/)
- [React-Router](https://reactrouter.com/)



