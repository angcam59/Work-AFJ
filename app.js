const express = require('express')
const app = express()
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('accueil.ejs')
})
app.get('/img', (req, res) => {
    res.render('accueil.ejs')
})
app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})
app.get('/hebergementsClassiques', (req, res) => {
    res.render('hebergementsClassiques.ejs')
})
app.get('/hebergementsInsolites', (req, res) => {
    res.render('hebergementsInsolites.ejs')
})
app.get('/services', (req, res) => {
    res.render('services.ejs')
})

app.post("/", (request, response) => {

    response.send("Tu te nommes : " + request.body.lastName +  " " + request.body.firstName +
    "<br>" + "Ton message : " + request.body.description);
})

    app.listen(3002)