const Tineraries = require('../models/tinerary')

const tineraryController = { 

    getTineraries: async (req,res) => { 
        let tineraries 
        let error = null 
        try { 
            tineraries = await Tineraries.find() 
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {tineraries}, 
            success: error ? false:true, 
            error: error 
        })
    },

    uploadTinerary: async (req,res) => {
        const {city,managerPhoto,managerName,itinerary,price,time,tags,description,likes} = req.body.data
        new Tineraries ({city,managerPhoto,managerName,itinerary,price,time,tags,description,likes}).save()
        .then(respons => res.json({respons}))
    },

    deleteTin: async (req,res) => {
        const id = req.params.id
        // console.log(id)
        await Tineraries.findOneAndDelete({_id:id}) 
    },

    oneTinerary: async (req,res) => { 
        let tineraryId = req.params.id 
        let tinerary 
        let error = null 
        try { 
            tinerary = await Tineraries.findOne({_id:tineraryId})
            .populate("comments.userId", {name:1,lastName:1,email:1,userPhoto:1})
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {tinerary}, 
            success: error ? false:true, 
            error: error 
        })
    },

    findTinFromCity: async (req,res) => { 
        let cityId = req.params.id
        let tineraries 
        let error = null 
        try { 
            tineraries = await Tineraries.find({city:cityId}).populate("itineraryId" )
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {tineraries}, 
            success: error ? false:true, 
            error: error 
        })
    },
    
    multiplesTineraris: async (req, res) => {
        let tineraries = []
        const data = req.body.data //almaceno en la constante data la informacion que le pedi al body
        let error = null
        try {
            data.map(async (item) => {
                await new Tineraries({
                    city: item.city,
                    managerPhoto: item.managerPhoto,
                    managerName: item.managerName,
                    itinerary: item.itinerary,
                    itineraryId: item.itineraryId,
                    price: item.price,
                    time: item.time,
                    tags: item.tags,
                    description: item.description,
                    likes: item.likes
                }).save()
            })
        } catch (err) { error = err }
        tineraries = await Tineraries.find()
        res.json({
            response: error ? "ERROR" : tineraries,
            success: error ? false : true,
            error: error
        })
    },

    // likeDislike: async (req,res) => {
    //     let tineraryId = req.params.id 
    //     let user = req.user.id
    //     try { 
    //         let tinerary = await Tineraries.findOne({_id:tineraryId}) 
    //        // console.log(tinerary)
    //         if (tinerary.likes.includes(user)) {
    //             Tineraries.findOneAndUpdate({_id:tineraryId}, {$pull:{likes:user}}, {new:true})
    //                 .then(response => res.json({
    //                     response: response.likes, 
    //                     success: false,
    //                     message: "You don't like it now😓"
    //                 }))
    //                 .catch(error => console.log(error))
    //         } else {
    //             Tineraries.findOneAndUpdate({_id:tineraryId}, {$push:{likes:user}}, {new:true})
    //                 .then(response => res.json({
    //                     response: response.likes, 
    //                     success: true,
    //                     message: "Thanks for your like 😁"
    //                 }))
    //                 .catch(error => console.log(error))
    //         }
    //     } catch (error) {
    //         res.json({
    //             response: error,
    //             success: false
    //         })
    //     } 
    // },
    likeDislike: async (req, res) => {
        const id = req.params.id //LLEGA POR PARAMETRO DESDE AXIOS - id de la ciudad 
        const user = req.user.id //LLEGA POR RESPUESTA DE PASSPORT - token de usuario
        await Tineraries.findOne({ _id: id })

            .then((tinerary) => {

                if (tinerary.likes.includes(user)) {
                    Tineraries.findOneAndUpdate({ _id: id }, { $pull: { likes: user } }, { new: true })//PULL QUITA, SACA
                        .then((response) => res.json({ success: false, response: response.likes, message: "You don't like it now😓" }))
                        .catch((error) => console.log(error))
                } else {
                    Tineraries.findOneAndUpdate({ _id: id }, { $push: { likes: user } }, { new: true })//PUSH AGREGA
                        .then((response) => res.json({ success: true, response: response.likes, message: "Thanks for your like 😁" }))
                        .catch((error) => console.log(error))
                }
            })
            .catch((error) => res.json({ success: false, response: error, error: error.message }))
    },

}

module.exports = tineraryController