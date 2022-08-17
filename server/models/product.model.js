//Importación de MongoDB
const mongoose = require('mongoose');

//Creación de un esquema
const ProductScheme = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Productname is mandatory"],
        
    },
    price: {
        type: Number,
        required: [true, "Price is mandatory"],
        
    },
    description: {
        type: String,
        required: [true, "descroption is required"],
        
    }
});

//Definición del modelo
const Product = mongoose.model('Product', ProductScheme);
module.exports = Product;