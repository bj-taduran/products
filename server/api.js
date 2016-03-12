const express = require('express')
const fs = require('fs')
const api = express.Router()
var products;

fs.readFile( __dirname + '/models/products.json', 'utf8', function (err, data) {
    products = JSON.parse( data )
})

api.get('/products', function (req, res) {
    res.send( products )
    //res.sendFile(__dirname + 'src/static/views/products.html')
})

api.post('/products', function (req, res) {
    var product = {}

    product = {
    	name : req.body.name,
    	thumbnail : req.body.thumbnail,
    	type : req.body.type	
    }

    products[Object.keys(products).length + 1] = product

    console.log(products)
    res.send(JSON.stringify({ success: true }))
})

module.exports = api

// api.get('/products/:id', function (req, res) {
//    var product = products[req.params.id] 

//    console.log( product )
//    res.send( JSON.stringify( product ))
// })

// api.put('/products/:id', function (req, res) {
//    var product = {}

//     product = {
//     	name : req.body.name,
//     	thumbnail : req.body.thumbnail,
//     	type : req.body.type	
//     }

//     products[req.params.id] = product

// 	console.log( products )
// 	res.send( JSON.stringify( products ))
// })

// api.delete('/products/:id', function (req, res) {
//     delete products[req.params.id]

// 	console.log( products )
// 	res.send( JSON.stringify( products ))
// })
