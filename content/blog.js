// Returns a Promise<String>
function getContent(filename) {
	return fetch("/" + filename).then(
		response => {
			if (response.ok) {
				return response.text();
			} else {
				const error = new Error("Got a non-successful response.");
				error.response = response;
				throw error;
			}
		}
	);
}

function showContent(filename) {
	getContent(filename).then(
		content => {
			const contentNode = document.getElementById('content');
			contentNode.innerHTML = content;
		},
		showErrorState,
	);
}

function loadContent() {
	const url = new URL(location.href);
	const path = url.pathname;

	const regex = /^\/poems\/(\w+)$/;

	// The match call returns an array, where the 1st index is the first parenthetical match.
	const matches = path.match(regex);

	if (!matches) {
		showErrorState(new Error(`Unable to parse path: ${path}`));
		return;
	}

	const content = matches[1];
	showContent(content + ".html");
}

function showErrorState(error) {
	const contentNode = document.getElementById('content');
	contentNode.innerHTML = "Sorry, we couldn't find what you were looking for!";

	console.error(error);

	if (error.response) {
		console.error("Response", error.response);
	}
}