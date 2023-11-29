// import json-server library in index.js file
const jsonServer = require('json-server')

// create json-server
const mediaplayerServer = jsonServer.create()

// Create path to json file
const router = jsonServer.router('db.json')

// middleware to convert json to js
const middleware = jsonServer.defaults()

// use middleware and router in server - connection
mediaplayerServer.use(middleware)
mediaplayerServer.use(router)

// setup port for running server 
const port = 5000 || process.env.PORT

// to listen server for resolving requests from clients
mediaplayerServer.listen(port,()=>{
    console.log(`mediaplayer started at ${port} and waiting for the request`);
})