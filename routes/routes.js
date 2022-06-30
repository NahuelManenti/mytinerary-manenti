const Router = require('express'). Router();
const validator = require('../config/validator')

const citiesControllers = require('../controllers/citiesControllers');
const {getCities, getOneCity, addCity, modifyCity, removeCity, multiplesCities} = citiesControllers
const tineraryController = require('../controllers/tineraryControllers')
const {getTineraries,uploadTinerary,deleteTin,oneTinerary,findTinFromCity, multiplesTineraris} = tineraryController
const userController = require('../controllers/userControllers')
const {signUpUser,logInUser,verifyMail} = userController



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

Router.route('/verify/:string')
.get(verifyMail)

module.exports= Router