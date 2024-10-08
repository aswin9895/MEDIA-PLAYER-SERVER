// import json-server 
const JsonServer = require('json-server')
// create server
const mpServer = JsonServer.create()

// set up path for db.json file
const router = JsonServer.router("db.json")

    // create middleware"
    const middleware = JsonServer.defaults()

    // define a port for running json server
    const PORT =3000 || ProcessingInstruction.env.PORT

    // use middleware,router
    mpServer.use(middleware)
    mpServer.use(router)

    // run server in given port to resolve client request
    mpServer.listen(PORT,()=>{
        console.log(`Mp server is started at port${PORT} and waiting for client request`);
        
    })
    