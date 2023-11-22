const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const router = require('./routes/task');

mongoose.connect(
	'mongodb://127.0.0.1:27017/ToDo'
);

app.use(
	methodOverride('_method', {
		methods: ['POST', 'GET'],
	})
);
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', router);

//Port
app.listen(3000, () =>
	console.log('Server started')
);
