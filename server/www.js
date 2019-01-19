// import * as http from 'http';
const http = require('http');
const app = require('./app');

function start() {
    console.log('Starting http server');
    const port = normalizePort(process.env.PORT || '3002');
    app.set('port', port);

    const server = http.createServer(app);
    server.listen(port, () => {
        // use server side logger such as winston here
        console.log(`Server running on port: ${port}`);
    });

    server.on('error', error => {
        switch (error.code) {
            case 'EACCES':
                console.log('Elevated priviledges required');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.log(`Port ${port} already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }

        console.log(` Error: ${error}`);
    });
}

//server start
start();

// Normalize a port into a number, string, or false.
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}
