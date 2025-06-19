const jsonServer = require('json-server')

const fbServer = jsonServer.create();
const middleware =  jsonServer.defaults()
const PORT = 3006
const route = jsonServer.router('db.json')
fbServer.use(middleware)
fbServer.use(route)

fbServer.listen(PORT,()=>{
    console.log(`Server start running on port ${PORT}`)
})