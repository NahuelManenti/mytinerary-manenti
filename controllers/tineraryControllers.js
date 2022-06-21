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
        const {city,userPhoto,userName,itinerary,price,time,tags,description,likes} = req.body
        new Tineraries ({city,userPhoto,userName,itinerary,price,time,tags,description,likes}).save()
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
            tineraries = await Tineraries.find({city:cityId}) 
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

    likeDislike: async (req,res) => {
        let tineraryId = req.params.id 
        let user = req.user.id
        try { 
            let tinerary = await Tineraries.findOne({_id:tineraryId}) 
            if (tinerary.likes.includes(user)) {
                Tineraries.findOneAndUpdate({_id:tineraryId}, {$pull:{likes:user}}, {new:true})
                    .then(response => res.json({
                        response: response.likes, 
                        success: true
                    }))
                    .catch(error => console.log(error))
            } else {
                Tineraries.findOneAndUpdate({_id:tineraryId}, {$push:{likes:user}}, {new:true})
                    .then(response => res.json({
                        response: response.likes, 
                        success: true
                    }))
                    .catch(error => console.log(error))
            }
        } catch (error) {
            res.json({
                response: error,
                success: false
            })
        } 
    }
}

module.exports = tineraryController