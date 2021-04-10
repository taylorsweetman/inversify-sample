import { myContainer } from './inversify.config';
import { TYPES } from './types';
import { Manager } from './interfaces';
import { ApiManager } from './entities';

const manager: ApiManager = myContainer.get<Manager>(TYPES.Manager);

const integrationTest = (async () => {
	let data: string;
	try {
		data = await manager.fetchData(
			'https://jsonplaceholder.typicode.com/',
			'todos'
		);
		console.log(data);
	} catch (err) {
		console.error(err);
	}
})();