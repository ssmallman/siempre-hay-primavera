const config = require('./config');
const express = require('express');
const fs = require('fs');
const pug = require('pug');

const app = express();

const port = config.port;
const contentDirectory = config.contentDirectory;

const compiledFunction = pug.compileFile(contentDirectory + '/page.pug');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/poems/:poemName', (req, res) => {
	const contentFilePath = contentDirectory + '/' + req.params.poemName + '.txt';
	const contentFileString = fs.readFileSync(contentFilePath, 'utf8');

	const htmlString = compiledFunction({ poemContent: contentFileString });
	return res.send(htmlString);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));