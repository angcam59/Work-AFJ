const express = require('express')
const app = express()
app.use(express.static("public"))

app.set('view engine', 'ejs');

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


    app.listen(3002)