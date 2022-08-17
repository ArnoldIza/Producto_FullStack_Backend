// config -- model --- controllers --- routes --- server.js

//Llamada de express y el puerto
const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors'); //Solicitud de origen cruzado

//Llamada a la configuración de MongoDB
require('./server/config/mongoose.config');

//Llamada a los middlewares (funciones intermedias)
app.use(cors());
app.use(express.json()); //Utiliza métodos HTTP y obtiene los datos en JSON
app.use(express.urlencoded({ extended: true }));  //Obtiene los datos de la URL

//Llamada a las rutas
const productRoutes = require('./server/routes/product.routes');
productRoutes(app); //Envía los datos a product.routes

//Establecimiento del puerto
app.listen(port, () => {console.log("Server listening at port", port);})