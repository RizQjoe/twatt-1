const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const twatt = require('./routers/twatt')


app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/*+json'}))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

app.use('/twatt', twatt)

// console.log('hahhahahha')

app.get('/', function(req, res){
    res.send('haii its for test Twitter app')
})

app.listen(3000, ()=>{
    console.log('listen Port 3000 Running')
})

