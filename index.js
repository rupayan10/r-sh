const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
	res.json({
		message: 'The URL Shortener',
	});
});

const port = process.env.port || 1947;
app.listen(port, () => console.log(`Listening at port ${port}`));
