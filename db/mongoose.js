const mongoose = require('mongoose')

const connectionURL = 'mongodb+srv://Rodrigo0103:olvidar100@lab7-ksnzq.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
})