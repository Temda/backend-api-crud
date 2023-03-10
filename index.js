const path = require('path')
const express = require('express') // var
const exphbs = require('express-handlebars');

const router = require('./routes/restaurants')
const indexRouter = require('./routes')
const logger = require('./middleware/logger')

const app = express()

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// middleware
app.use(express.static(path.join(__dirname, 'public'))) // folder static
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

// Custom Middleware
app.use(logger)

app.use('/apis/restaurants', router) // ! CRUD routes restaurants.js
app.use('/', indexRouter)



app.listen(3000, () => {
    console.log('server runing to port 3000')
})