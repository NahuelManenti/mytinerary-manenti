const Tineraries = require('../models/tinerary')

const commentControllers = {

    addComment: async (req, res) => {
        const {itineraryIds,comments} = req.body
        const user = req.user._id
        try {
            const newComment = await Tineraries
                .findOneAndUpdate({_id: itineraryIds}, {$push: {comments: {comment: comments.comment, userId: user}}}, {new: true})
                .populate("comments.userId", {name:1,lastName:1,email:1,userPhoto:1})
            res.json({
                success: true,
                response: {newComment},
                message: "thanks for comment!"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "try again please!"})
        }
    },

    modifyComment: async (req, res) => {
        const {commentId,comments} = req.body
        const user = req.user._id
        try {
            const modifyComment = await Tineraries
            .findOneAndUpdate({"comments._id": commentId}, {$set: {"comments.$.comment": comments.comment}}, {new: true})
            res.json({success: true,
                      response: {modifyComment},
                      message: "the comment has been modified"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: false,
                message: "sorry! try again!" })
        }
    },

    deleteComment: async (req, res) => {
        const commentId = req.params.id
        const user = req.user._id
        try {
            const deleteComment = await Tineraries
            .findOneAndUpdate({"comments._id": commentId}, {$pull: {comments: {_id: commentId}}}, {new: true})
            res.json({success: true,
                     response: {deleteComment},
                     message: "the comment has been deleted"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "try again!"})
        }
    }
}

module.exports = commentControllers