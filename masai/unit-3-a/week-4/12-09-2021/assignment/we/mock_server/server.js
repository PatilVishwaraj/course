// const port = 5000

// const path = require('path')

// const jsonServer = require('json-server')

// const server = jsonServer.create()

// const router = jsonServer.router(path.join(__dirname, 'db.json'))

// const middleware = jsonServer.defaults()

// server.use(middleware)
// server.use(jsonServer.bodyParser)
// server.use('/api', router)

// server.listen(port, () => console.log(`JSON SERVER IS RUNNING ON PORT ${port}`))





// const port = 5000
// const port = 5000
// const path = require('path')
// const path = require('path')

// const jsonServer = require('json-server')
// const jsonServer = require('json-server')

// const server = jsonServer.create()
// const server = jsonServer.create()

// const router = jsonServer.router(path.join(__dirname), 'db.json') //wrong
// const router = jsonServer.router(path.join(__dirname, 'db.json'))

// const middlewares = jsonServer.defaults()
// const middlewares = jsonServer.defaults()

// server.use(middlewares)
// server.use(middlewares)

// server.use(jsonServer.bodyParser)
// server.use(jsonServer.bodyParser)

// server.use('/api', router)
// server.use('/api', router)

// server.listen(PORT, () => console.log(`JSON SERVER IS RUNNING ON PORT ${port}`))
// server.listen(port, () => console.log(`JSON SERVER IS RUNNING ON PORT ${port}`))














//setting up a backend

const port = 5000

const path = require('path')


const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router(path.join(__dirname, 'db.json'))

const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.use('/api', router)

server.listen(port, () => console.log(`JSON SERVER IS RUNNING ON PORT ${port}`))
// {


//     "products":[

        
//     ]


// }









