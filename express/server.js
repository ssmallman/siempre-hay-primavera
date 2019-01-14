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
	const path = contentDirectory + '/' + req.params.poemName + '.txt';
	const fileContent = fs.readFileSync(path, 'utf8');
	const content = compiledFunction({ poemContent: fileContent });

	return res.send(content);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));