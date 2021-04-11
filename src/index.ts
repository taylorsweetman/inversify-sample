import { ApiManager } from './entities/ApiManager';
import { Manager } from './interfaces';
import { myContainer } from './inversify.config';
import { TYPES } from './types';

const manager: ApiManager = myContainer.get<Manager>(TYPES.Manager);

const integrationTest = (async () => {
	let data: string;
	try {
		data = await manager.fetchData(
			'https://jsonplaceholder.typicode.com',
			'/todos'
		);
		console.log(data);
	} catch (err) {
		console.error(err);
	}
})();
