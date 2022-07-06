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
        await Tineraries.findOneAndDelete({_id:id}) 
    },

    oneTinerary: async (req,res) => { 
        let tineraryId = req.params.id 
        let tinerary 
        let error = null 
        try { 
            tinerary = await Tineraries.findOne({_id:tineraryId})
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

}

module.exports = tineraryController