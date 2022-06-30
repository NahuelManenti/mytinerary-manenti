const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const sendVerification = require('./sendVerification')
const crypto = require('crypto')


const userController = {

   
    signUpUser: async (req, res) => {
        let { name, lastName, email, password, from, userPhoto, country, role} = req.body.userData 

        try { // trata

            const myUser = await User.findOne({ email }) 
            const verification = false 
            const uniqueString = crypto.randomBytes(15).toString('hex') // utilizo los metodos de crypto

        if (myUser) { 
                if (myUser.from.indexOf(from) !== -1) { 
                    
                    res.json({
                        success: false, 
                        from: 'SignUpForm',
                        message: 'This email is already register, please Sign In'
                    })
                } else {

                    const hashedPassword = bcryptjs.hashSync( password, 10) //encryptamos la nueva contraseña creada con el nuevo metodo de registro (fb, google, sign) sin reemplazar la existente
                    myUser.from.push(from) //pusheo al modelo "from" el nuevo metodo de inicio del usuario
                    myUser.password.push(hashedPassword) // pusheo la nueva contra  a el array donde tenia las demas contras del usario
                    myUser.verification = true

                    await myUser.save() //espera la respuesta de push y lo guarda
                    res.json({
                        success: true, 
                        from: 'SignUpForm', 
                        message: "Added " + from + " at your options for sign in"
                    })
                }
            // si el usuario no existe lo registramos de 0
            } else {
                const hashedPassword = bcryptjs.hashSync(password, 10) 
                const newUser = await new User({ 
                    name,
                    lastName,
                    email, 
                    country,
                    userPhoto,
                    password: [hashedPassword], 
                    uniqueString: uniqueString , 
                    verification,
                    from: [ from ] 
                })
                    if (from !== 'SignUpForm') {  
                
                        newUser.verification = true //  No es necesario q valide los datos de metodos de registro diferente a nuestro form
                        
                        await newUser.save() // evalua el metodo del nuevo usuario, cuando se cumpla. guardalo.
                        res.json({
                            success: true,
                            from: 'SignUpForm',
                            message: 'Congratulations! User creation with ' + from + ' is completed'
                        })
                    } else { // si el metodo utilizado es el de nuestro formulario
                                    await newUser.save()
                                    await sendVerification(email, uniqueString)
                                    res.json({
                                        success: true,
                                        from: 'SignUpForm',
                                        message: 'Successfully registered, please check your mailbox to verify' 
                                    })
                }
                }
        } catch (error) { // atrapa el error
            res.json({ success: false, message: 'Something went wrong. Try again after a few minutes.'}) 
        }
    },

    logInUser: async(req, res) => {
        const { email, password, from} = req.body.userLogin
            try{
                const userExists = await User.findOne({ email })
                //const indexpass = userExists.from.indexOf(from)
                if (!userExists) {
                    res.json({ success: false, message: 'The entered user does not exist. Please signUp'})
                } else {
                    if (from !== 'LogInForm') {
                        let samePassword = userExists.password.filter(pass => bcryptjs.compareSync(password, pass))
    
                        if (samePassword.length == 0) {
                            const userData = {
                                id: userExists._id,
                                name: userExists.name,
                                lastName: userExists.lastName,
                                country: userExists.country,
                                userPhoto: userExists.userPhoto,
                                email: userExists.email,
                                from: from,
                            }
                            console.log(userData)
                            await userExists.save()
                            res.json({
                                success: true,
                                from: from,
                                response: { userData },
                                message: 'Welcome back ' + userData.name,
                            })
                        } else {
                            res.json({
                                success: false,
                                from: from,
                                message: 'You have not registered with ' + from + ' if you want to sign in with this method you must sign up with ' + from,
                            })
                        }
                    } else { //si encuentra mail del metodo de nuestro form
    
                        let samePassword = userExists.password.filter(pass => bcryptjs.compareSync(password, pass))
                        
                        if (samePassword.length > 0) {
                            const userData = {
                                id: userExists._id,
                                name: userExists.name,
                                lastName: userExists.lastName,
                                country: userExists.country,
                                userPhoto: userExists.userPhoto,
                                email: userExists.email,
                                from: from,
                            }
                            await userExists.save()
                            res.json({
                                success: true,
                                from: from,
                                response: { userData}, //token eliminado de pdf porque todavia no lo usamos
                                message: 'Welcome back ' + userData.name ,
                            })
                        } else {
                            res.json({
                                success: false,
                                from: from,
                                message: 'User name or password incorrect'
                            })
                        }
                    }
                }
            } catch (error) {
                res.json({ success: false, messaje: 'Something went wrong. Try again after a few minutes.'})
            }
        },
    
        verifyMail: async (req, res) => {
            const { string } = req.params
            const user = await User.findOne({uniqueString: string })
            //console.log(user)
    
            if (user) {
                user.verification = true
                await user.save()
                res.redirect('http://localhost:3000')
            }
            else { res.json({
                success: false,
                message: `email has not been confirmed yet!`
            })
    
            }
        }
    
    }
    
    module.exports = userController