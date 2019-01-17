const express = require('express');
const http = require('http');
const path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || '8080';
app.set('port', port);

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('/dist'));

    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '/dist', 'index.html'));
    });
}

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
