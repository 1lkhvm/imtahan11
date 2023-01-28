const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express()
const port = 3030

app.use(express.json())
app.use(cors())


const CardSchema = new mongoose.Schema({
    title: String,
    description: String,
    iconimage: String,

});

const Card = mongoose.model("imtahan", CardSchema)


app.get('/', (req, res) => {

    Card.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.send('Get sorgusu getmir')
        }
    })


})



app.get('/:id', (req, res) => {

    const { id } = req.params

    Card.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.send('GetId sorgusu getmir')
        }
    })


})




app.post('/', (req, res) => {


    const newcard = Card({
        title: req.body.title,
        description: req.body.description,
        iconimage: req.body.iconimage,

    });
    newcard.save()
    res.send(newcard)
})




app.delete('/:id', (req, res) => {


    const { id } = req.params
    Card.findByIdAndRemove(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.send('GetIdDelete  sorgusu getmir')
        }
    })


})



mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://imtahan:imtahan101@cluster0.1hqdf0d.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Emeliyyat ugurla tamamlandi!'));



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})