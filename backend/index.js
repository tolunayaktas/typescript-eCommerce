const express = require('express')
/*const cors = require('cors')
const bodyParser = require('body-parser')*/
//const router = express.Router()
const productRoutes = require('./routes/router')


const app = express()
const port = 4000;
/*
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions))*/
app.use(express.json())
//app.use('/',router)

app.use('/api/v1/products', productRoutes)
app.listen(port, () => console.log('app listening on port ${port}'))


/*
const server = app.listen(port, () => {
    console.log('Server is running on port ${port} ');
})*/
