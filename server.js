require('dotenv').config()
const passport = require('passport')
require('./config/database')

const cors = require('cors')
const express=require('express')

const Router = require ('./routes/routes')
const PORT = 4000


const app = express()

//middlewares
app.use(cors())
app.use(passport.initialize())
app.use(express.json())
app.use('/api', Router)




app.listen(PORT, () => console.log('SERVIDOR CORRIENDO EN PUERTO: ' +PORT))













// app.set('port', PORT)

// app.get('/' , (req, res) => {
//     res.send('SERVIDOR CREADO!')
// })