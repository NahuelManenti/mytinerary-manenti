const mongoose = require('mongoose') //llamamos al constructor que crea un modelo de pedido de datos

const tinerariesSchema = new mongoose.Schema ({ 
    city: {type: mongoose.Types.ObjectId , ref:'cities'}, //relaciono la colección con un elemento de otra coleccion
    itinerary: {type:String, required:true},
    managerPhoto: {type:String, required:true},
    managerName: {type:String, required:true},
    price: {type:String, required:true},
    time: {type:String, required:true},
    tags: {type:Array, required:true},
    description: {type:String, required:true},
    likes: {type:Array},
})

const Tineraries = mongoose.model('tineraries',tinerariesSchema) 
module.exports = Tineraries 

