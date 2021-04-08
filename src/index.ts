const axios = require('axios');

const ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';

(async () => {
	const payload = await axios.get(ENDPOINT);
	console.log(payload);
})();
