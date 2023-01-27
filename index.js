const express = require('express')
const mongoose = require('mongoose');
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
require('dotenv').config();

const PORT = process.env.PORT || 3000

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine);
app.set('view  engine', 'hbs')
app.set('views', 'views');
app.use(todoRoutes);

const start = async () => {
    try {
        mongoose.set("strictQuery", false);

        await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
        app.listen(PORT, () => {
            console.log('server has been started')
        })
    } catch (e) {
        console.log(e)
    }
}

start()