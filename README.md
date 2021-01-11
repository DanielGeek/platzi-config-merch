# App ecommerce con react hooks, firebase hosting, consumiendo la api de paypal para pagos, google maps y la api de strapi como back-end para consumir la API de products

# URL firebase
https://platzi-store-merch2.web.app/

la parte del pago no funciona en production ya que firebase solo permite agregar funciones para el manejo de variables de entorno con plan pago, pero se puede probar en local agregarndo las key en el archivo .env o pasando el proyecto a un hosting como heroku

# luego de clonar el proyecto levantamos el backend
# se debe intalar la bd en mysql llamda platziconf la ruta donde esta es platzi-config-merch\platziconfig-backend\bd
# luego
`cd platziconfig-backend`
`npm install`
`npm run develop`

# levantar el front-end
`cd ..`
`npm install`
`npm start`