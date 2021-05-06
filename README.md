#Shop It

El proyecto fue diseñado pura y exclusivamente para el curso de ReactJs de Coderhouse. Le he agregado ciertas funcionalidades extra, ya que mi idea es poder implementarlo en un portfolio.

##Funcionalidad

El proyecto es un E-commerce. En este se pueden agregar y eliminar productos del carrito, generar ordenes de compra, registrarse e iniciar sesión, (si se esta logueado se pueden modificar el nombre y foto de perfil).  
###Rutas
Las rutas que presenta el proyecto son:
- Home (' / '): Es la página principal del sitio. En esta ruta se carga un carrusel con tres items y otros tres productos debajo.
- Shop (' /shop ') : Esta página carga todos los productos de la base de datos, mostrando imagen, título y precio del producto. Desde esta página es posible acceder al detalle individual de cada producto.
- Category (' /shop/category/:category ') : En esta ruta se cargan los productos de una categoría específica.
- ProductView (' /product/:id ') : En esta ruta se observa el detalle del producto, mostrando imagen, título, descripción, precio, un contador y un botón para agregar el producto al carrito.
- Cart (' /cart '):  Se muestra una vista previa al carrito, antes de pasar a la sección de Checkout.
- Checkout (' /cart/checkout '): En esta ruta, se ingresan los datos del usuario para poder finalizar la compra.

###Autenticación
El sistema de autenticación esta hecho con Firebase. 
Hay tres maneras de autenticarse:
- Email
- Google
- Github


##Aclaraciones

El contador se mostrara siempre a la hora de agregar un producto y no desapareceran junto con el botón de 'Add to cart', en vez de ser reemplazado por uno que diga 'Finish shoppping' y que redireccione a la view del Cart. Decidí hacerlo así, porque me gustaba más el resultado final. 

