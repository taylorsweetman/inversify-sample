/**
 * unit tests
 *
 * @group integration
 */

import { ApiManager } from '../src/entities/ApiManager';
import { Manager } from '../src/interfaces';
import { myContainer } from '../src/inversify.config';
import { TYPES } from '../src/types';
import { isJson } from './api/functions';

const ENDPOINT = 'https://jsonplaceholder.typicode.com';
const PATH = '/todos';

test('integration test', async () => {
	const manager: ApiManager = myContainer.get<Manager>(TYPES.Manager);
	expect(manager).toBeTruthy;
	expect(manager._client).toBeTruthy;
	const data = await manager.fetchData(ENDPOINT, PATH);
	expect(isJson(data));
	const dataObj = JSON.parse(data);
	expect(dataObj.length).toBe(200);
	expect(dataObj[0].id).toBe(1);
});
