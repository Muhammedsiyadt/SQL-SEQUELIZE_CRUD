const express = require('express')
const cors = require('cors')

const app = express()

var corsOption = {
    origin: 'http://localhost:8001' 
}
 

// Middlewares
app.use(cors(corsOption)) 
app.use(express.json()) 
app.use(express.urlencoded({extended: true}))


// Router
const router = require('./routes/productRoutes.js')
app.use('/api/products', router)

const reviewRouter = require('./routes/reviewRoutes.js')
app.use('/api/reviews', reviewRouter)
 

// Testing API
app.get('/', (req, res) => {
    res.json({message : 'Hello server initial API'}) 
})


// Listen 
app.listen(7000, () => { 
    console.log('Server is running...')
})  
