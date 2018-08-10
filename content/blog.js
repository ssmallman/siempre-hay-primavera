// Returns a Promise<String>
function getContent(filename) {
	return fetch("/" + filename)
		.then(response => response.text())
}

function showContent(filename) {
	getContent(filename).then(
		content => {
			const contentNode = document.getElementById('content');
			contentNode.innerHTML = content;
		},
		error => {
			console.error(error);
		}
	);
}