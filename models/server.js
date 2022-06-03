const express = require('express')
const cors = require('cors')
/* const morgan = require("morgan"); */


class Server {

    constructor() {
        this.app       = express()
        this.port      = process.env.PORT

        this.paths = {};
        

        // Middlewares
        this.middlewares()

        // Rutas de mi aplicación
        this.routes()
    }


    middlewares() {

        // Cors
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );


        // Utilizando Morgan
        /* this.app.use(morgan("dev")); */

    }

    routes() {
        /* this.app.use(this.paths.auth,       require('../routes/auth.routes')) */
    };

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto: ', this.port );
        })
    }

}

module.exports = Server