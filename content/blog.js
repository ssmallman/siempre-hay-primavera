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
		error => {
			const contentNode = document.getElementById('content');
			contentNode.innerHTML = "Sorry, we couldn't find what you were looking for!";

			console.error(error);
			if (error.response) {
				console.error("Response", error.response);
			}
		}
	);
}