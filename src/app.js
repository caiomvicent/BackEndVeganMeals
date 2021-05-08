
//const morgan = require('morgan')
const express = require('express')
const cors = require("cors");



class AppController {
    constructor() {
        this.express = express();

        //this.morgan()
        this.middlewares();
        this.routes();

    }
    /*morgan() {
        this.express.use(morgan('dev'))
    }*/

    middlewares() {

        this.express.use(cors());

        this.express.use(express.json())
    }

    routes() {
        this.express.use(require("./routes"))
    }

}

module.exports = new AppController().express;
