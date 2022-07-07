const mongoose = require('mongoose') 

const usersSchema = new mongoose.Schema ({ 
    name: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:Array, required:true},
    userPhoto: {type:String, required:true},
    country: {type:String},
    from: {type:Array},
    uniqueString: {type:String, required:true},
    verification: {type:Boolean, required:true},
    

})

const User = mongoose.model('users',usersSchema) 
module.exports = User  

