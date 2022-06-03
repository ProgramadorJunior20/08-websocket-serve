const express = require('express')
const cors = require('cors');

const { socketController } = require('../sockets/controller');
/* const morgan = require("morgan"); */


class Server {

    constructor() {
        this.app       = express();
        this.port      = process.env.PORT;
        this.server    = require('http').createServer( this.app );
        this.io        = require('socket.io')( this.server );
        this.paths = {};
        

        // Middlewares
        this.middlewares()

        // Rutas de mi aplicación
        this.routes()

        // Sockets Config
        this.sockets();

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

    sockets() {

        this.io.on("connection", socketController);
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto: ', this.port );
        })
    }

}

module.exports = Server