// Returns a Promise<String>
function getContent(filename) {
	return fetch("/" + filename)
		.then(response => response.text())
}