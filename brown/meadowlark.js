const express = require('express')
const handlebars = require('express-handlebars')
const handlers = require('./lib/handlers')

const app = express()

app.engine('handlebars', handlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', handlers.home)

app.get('/about', handlers.about)

app.use(handlers.notFound)

app.use(handlers.serverError)

if(require.main == module) {
    app.listen(port, () => {
        console.log( `Express started on http://127.0.0.1:${port}; ` +
        `press Ctrl-C to terminate.` )
    })
} else {
    module.exports = app
}