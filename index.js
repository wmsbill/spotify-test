const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const handlers = require('./src/js/search/handler');

const app = express();
const PORT = 3000;
const viewEngine = '.hbs';

app.engine(viewEngine, handlebars({
    layoutsDir: __dirname + '/src/pages/',
    defaultLayout: 'index',
    extname: '.hbs'
}));

app.set('view engine', viewEngine);
app.set('views', __dirname + '/src/js/');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/src/pages/index.html`);
});

app.get('/search', (req, res) => {
    handlers(req.query).then(result => {
        res.render('search/view', result);
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
