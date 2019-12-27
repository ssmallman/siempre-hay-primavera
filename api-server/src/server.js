import config from './config';
import express from 'express';
import fs from 'fs';
import marked from 'marked';
import pug from 'pug';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const app = express();

const port = config.port;
const contentDirectory = config.contentDirectory;

const compiledFunction = pug.compileFile(contentDirectory + '/page.pug');

// Set options for Marked based on this documentation:
// https://marked.js.org/#/USING_ADVANCED.md#options
marked.setOptions({
  gfm: true,
  breaks: true,
});

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/poems/:poemName', (req, res) => {
	const contentFilePath = contentDirectory + '/' + req.params.poemName + '.md';
	const contentFileString = fs.readFileSync(contentFilePath, 'utf8');

	const contentMetadata = contentDirectory + '/' + req.params.poemName + '.json';
	const contentMetadataString = fs.readFileSync(contentMetadata, 'utf8');

	const metadata = JSON.parse(contentMetadataString);

	const element = <h1>Hello from React!</h1>;

	const htmlString = compiledFunction({ 
		poemContent: marked(contentFileString),
		title: metadata.title,
		createdDate: metadata.createdDate,
		htmlContent: ReactDOMServer.renderToStaticMarkup(element),
	});
	
	return res.send(htmlString);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));