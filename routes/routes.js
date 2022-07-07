const Router = require('express'). Router();
const validator = require('../config/validator')
const passport = require('../config/passport')

const citiesControllers = require('../controllers/citiesControllers');
const {getCities, getOneCity, addCity, modifyCity, removeCity, multiplesCities} = citiesControllers
const tineraryController = require('../controllers/tineraryControllers')
const {getTineraries,uploadTinerary,deleteTin,oneTinerary,findTinFromCity,multiplesTineraris,likeDislike} = tineraryController
const userController = require('../controllers/userControllers')
const {signUpUser,logInUser,verifyMail,verifyToken,signOutUser} = userController
const activityController = require('../controllers/activityControllers')
const {getActivities,uploadActivity,deleteAct,modifyAct,oneActivity,findActFromTin,multiplesActivities} = activityController
const commentControllers = require('../controllers/commentControllers')
const {addComment,modifyComment,deleteComment}= commentControllers



Router.route('/cities')
.get(getCities)
.post(addCity)

Router.route('/cities/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)

Router.route("/multiplesCities")
.post(multiplesCities)
Router.route("/multiplesTineraris")
.post(multiplesTineraris)
Router.route("/multiplesActivities")
.post(multiplesActivities)


Router.route('/tineraries')
.get(getTineraries)
.post(uploadTinerary) 

Router.route('/tineraries/:id')
.delete(deleteTin)
//.put(modifyTin)
.get(oneTinerary)

Router.route('/tineraries/cities/:id')
.get(findTinFromCity)

Router.route('/auth/signUp')
.post(validator, signUpUser)

Router.route('/auth/logIn')
.post(logInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:string')
.get(verifyMail)

Router.route('/auth/loginToken')
.get(passport.authenticate('jwt', {session:false}),verifyToken)

Router.route('/activities')
.get(getActivities)
.post(uploadActivity)

Router.route('/activities/:id')
.delete(deleteAct)
.put(modifyAct)
.get(oneActivity)

Router.route('/activities/tineraries/:id')
.get(findActFromTin)

Router.route('/tineraries/likeDislike/:id')
.put(passport.authenticate('jwt', {session:false}), likeDislike)


Router.route('/tineraries/comment/:id')
.post(passport.authenticate('jwt', {session: false}), deleteComment)

Router.route('/tineraries/comment')
.put(passport.authenticate('jwt', {session: false}), modifyComment)
.post(passport.authenticate('jwt', {session: false}), addComment)






module.exports= Router