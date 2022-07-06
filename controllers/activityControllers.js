const Activities = require('../models/activity')

const activityController = { 

    getActivities: async (req,res) => { 
        let activities 
        let error = null 
        try { 
            activities = await Activities.find() 
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {activities}, 
            success: error ? false:true, 
            error: error 
        })
    },

    uploadActivity: async (req,res) => {
        const {itineraryId,activity,name} = req.body
        new Activities ({itinerary,activity,name}).save()
        .then(response => res.json({response}))
    },

    deleteAct: async (req,res) => {
        const id = req.params.id
        await Activities.findOneAndDelete({_id:id})
    },

    modifyAct: async (req,res) => {
        const id = req.params.id
        const acts = req.body
        await Activities.findOneAndUpdate({_id:id},acts)
    },

    oneActivity: async (req,res) => { 
        let activityId = req.params.id 
        let activity 
        let error = null 
        try { 
            activity = await Activities.findOne({_id:activityId}) 
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {activity}, 
            success: error ? false:true, 
            error: error 
        })
    },

    findActFromTin: async (req,res) => { 
        let itineraryId = req.params.id
        //console.log(itineraryId)
        let activities 
        let error = null 
        try { 
            activities = await Activities.find({itinerary:itineraryId}) 
            //console.log(activities)
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {activities}, 
            success: error ? false:true, 
            error: error 
        })
    },
    multiplesActivities: async (req, res) => {
        let activities = []
        const data = req.body //almaceno en la constante data la informacion que le pedi al body
        let error = null
        try {
            data.map(async (item) => {
                await new Activities ({
                    itineraryId: item.itineraryId,
                    activity: item.activity,
                    name:item.name
                }).save()
            })
        } catch (err) { error = err }
        activities = await Activities.find()
        res.json({
            response: error ? "ERROR" : activities,
            success: error ? false : true,
            error: error
        })
    },

}

module.exports = activityController