const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const handlers = require('./src/js/handlers/search');

const app = express();
const PORT = 3000;
const viewEngine = '.hbs';

app.engine(viewEngine, handlebars({
    layoutsDir: __dirname + '/src/views/layouts/',
    extname: '.hbs'
}));

app.set('view engine', viewEngine);
app.set('views', __dirname + '/src/views/');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`);
});

app.get('/search-result', (req, res) => {
    handlers(req.query).then(result => {
        res.render('search-result', result);
    });
});

app.listen(PORT, error => {
    if (error) {
        console.error(error);
        return process.exit(1);
    } else {
        console.log('Listening on port: ' + PORT + '.');
    }
});
