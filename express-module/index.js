const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const members = require('./data/Members');

const app = express();

// middleware
// const logger = require('./middleware/logger');

// init middleware
// app.use(logger);

//body parses middleware
app.use(express.json());
// handle url encoded data
app.use(express.urlencoded({ extended: false }));

// handlebars
app.engine('handlebars', engine({ defaulLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index', { title: 'members', members });
});

// set static folder
// serves regular html files
// app.use(express.static(path.join(__dirname, 'public')));

// Members api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
