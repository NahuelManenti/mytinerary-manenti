const Users = require('../models/user')
const bcryptjs = require('bcryptjs')
// const crypto = require('crypto')
// const nodemailer = require('nodemailer')
// const jwt = require('jsonwebtoken')

const userControllers = {

    signUpUser: async (req,res) => {
        //console.log('REQ BODY')
        //console.log(req.body)
        let {name, lastName, email, password, from, userPhoto, country} = req.body.userData 
        try { 
            const myUser = await Users.findOne({email})
            //console.log(myUser)
            if (myUser) { 
                //console.log('this number is:'+myUser.from.indexOf(from))
                if (myUser.from.indexOf(from) === 0) {
                    res.json({
                        success: false,
                        from: "SignUpForm",
                        message: `user ${email} successful register, please LOG IN!`}) 
                } else { 
                    const hashWord = bcryptjs.hashSync(password, 10) 
                    myUser.from.push(from)  
                    myUser.password.push(hashWord) 
                    if (from === "SignUpForm") { 
                        // myUser.uniqueString = crypto.randomBytes(15).toString('hex')                    POR EL MOMENTO
                        await myUser.save() 
                        await sendEmail(email, myUser.uniqueString) 
                        res.json({
                            success: true, 
                            from: "SignUpForm", 
                            message: `check ${email}! we send you a mail to confirm your SIGN UP!`}) 
                    } else { 
                        myUser.save() 
                        res.json({
                            success: true,
                            from:"externalSignUp", 
                            message: `user exist! LOG IN please!`})
                    }
                }
            } else {
                const hashWord = bcryptjs.hashSync(password, 10) //
                const myNewTUser = await new Users({ 
                    name,
                    lastName,
                    email,
                    password: [hashWord],
                    from: [from],
                    // uniqueString: crypto.randomBytes(15).toString('hex'),                               POR EL MOMENTO
                    userPhoto,
                    country,
                    verification: false})
                if (from === "SignUpForm") { 
                    await myNewTUser.save() 
                    await sendEmail(email, myNewTUser.uniqueString) 
                    res.json({
                        success: true, 
                        from:"SignUpForm",
                        message: `check ${email} and finish your SIGN UP!`}) 
                    } else { 
                    await myNewTUser.save()
                    res.json({
                        success: true, 
                        from:"externalSignUp",
                        message: `you SIGN UP by ${from}! now LOG IN!`}) 
                }
            }
        } catch (error) {
            console.log(error)
            res.json({success: false, message: "sorry! Please try again!"})
        }
    },

    logInUser: async (req, res) => {
        const {email, password, from} = req.body.userLogin
        try {
            const myUser = await Users.findOne({email}) 
            if (!myUser) { 
                res.json({success: false, message: `${email} has no account in MyTinerary, please SIGN UP!`})
            } else { 
                if (from === "LogInForm") { 
                    if (myUser.verification ) { 
                        let checkedWord =  myUser.password.filter(pass => bcryptjs.compareSync(password, pass)) 
                        //console.log("resultado de busqueda de contraseña: " +(checkedWord.length >0))
                        if (checkedWord.length > 0) {
                            const userData = {
                                id: myUser._id,
                                name: myUser.name,
                                email: myUser.email,
                                userPhoto: myUser.userPhoto,
                                from: myUser.from}
                            //console.log(userData)
                            // const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 1000*60*60*24 })       POR EL MOMENTO
                            res.json({
                                success: true, 
                                from: from, 
                                response: {token, userData}, 
                                message: `welcome back ${userData.name}!`})
                        } else {
                            res.json({ success: false, 
                                from: from,  
                                message: `verify your password!`})
                        }
                    } else {
                        res.json({
                            success: false, 
                            from: from, 
                            message:`check ${email}! confirm your SIGN UP and LOG IN!`}) 
                    }
                } else {
                    let checkedWord =  myUser.password.filter(pass => bcryptjs.compareSync(password, pass))
                    //console.log(checkedWord)
                    if (checkedWord.length > 0) {
                        const userData = {
                            id: myUser._id,
                            name: myUser.name, 
                            email: myUser.email,
                            userPhoto: myUser.userPhoto,
                            from: myUser.from}
                        //console.log(userData)
                        await myUser.save()
                        // const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 1000*60*60*24 })         POR EL MOMENTO
                        res.json({ success: true, 
                            from: from, 
                            response: {token, userData}, 
                            message: `welcome back ${userData.name}!`})
                    } else {
                        res.json({ success: false, 
                            from: from,  
                            message: `there is no register from ${from}, please SIGN UP`})
                    }
                }
            }
        } catch (error) {
            console.log(error)
            res.json({success: false, message: "sorry! try in a few minutes!"})
        }
    },
}

module.exports = userControllers
