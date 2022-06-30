const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const sendVerification = require('./sendVerification')
// const jwt = require('jsonwebtoken')

const userControllers = {

    signUpUser: async (req,res) => {
        //console.log('REQ BODY')
        //console.log(req.body)
        let {name, lastName, email, password, from, userPhoto, country, role} = req.body.userData 
        try { 
            const myUser = await User.findOne({email})
            const uniqueString = crypto.randomBytes(15).toString('hex')
            //console.log(myUser)
            if (myUser) { 
                if (myUser.from.indexOf(from) === 0) {
                    res.json({
                        success: false,
                        from: "SignUpForm",
                        message: `user ${email} already register, please LOG IN!`}) 
                } else { 
                    const hashWord = bcryptjs.hashSync(password, 10) 
                    myUser.from.push(from)  
                    myUser.password.push(hashWord) 
                    if (from === "SignUpForm") { 
                         myUser.uniqueString = crypto.randomBytes(15).toString('hex')
                        await myUser.save() 
                        await sendVerification(email, uniqueString)  
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
                const myNewTUser = await new User({ 
                    name,
                    lastName,
                    email,
                    password: [hashWord],
                    from: [from],
                    uniqueString: crypto.randomBytes(15).toString('hex'),                               
                    userPhoto,
                    country,
                    role,
                    verification: false})
                if (from === "SignUpForm") { 
                    await myNewTUser.save() 
                    await sendVerification(email, uniqueString) 
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
            const myUser = await User.findOne({email}) 
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
                             const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 1000*60*60*24 })       
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

    verifyMail: async (req, res) => {
        const {string} = req.params
        const user = await User.findOne({uniqueString: string})
        //console.log(user)
        if (user) {
            user.verification = true
            await user.save()
            res.redirect("http://localhost:3000/login")
        }
        else {res.json({
            success: false,
            message: `email has not been confirmed yet!`})
        }
    }
}

module.exports = userControllers
