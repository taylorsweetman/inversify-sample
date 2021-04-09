import { myContainer } from './inversify.config';
import { TYPES } from './types';
import { Manager } from './interfaces';
import { ApiManager } from './entities';

const manager: ApiManager = myContainer.get<Manager>(TYPES.Manager);

manager
	.fetchData('https://jsonplaceholder.typicode.com/', 'todos')
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.error(err);
	});
