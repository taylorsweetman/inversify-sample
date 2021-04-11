/**
 * unit tests
 *
 * @group unit
 */

import { TodoClient } from '../../src/entities/TodoClient';
import { ApiManager } from '../../src/entities/ApiManager';
import { isJson, initMockClient } from '../api/functions';

var mockedClient: TodoClient;
var managerWithMockedClient: ApiManager;
var managerDataJson: string;

beforeEach(async () => {
	mockedClient = initMockClient();
	managerWithMockedClient = new ApiManager(mockedClient);
	managerDataJson = await managerWithMockedClient.fetchData('', '');
});

test('test ApiManager construction w/ mocked TodoClient', async () => {
	expect(managerWithMockedClient).toBeTruthy;
	expect(mockedClient.get).toBeCalledTimes(1);
});

test('test ApiManager fetchData() shape w/ mocked TodoClient', async () => {
	expect(managerDataJson).toBeTruthy;
	expect(isJson(managerDataJson)).toBe(true);
});

test('test ApiManager fetchData() returns correct first element', async () => {
	const managerDataObj = JSON.parse(managerDataJson);
	expect(managerDataObj).toBeTruthy;
	expect(managerDataObj[0].id).toBe(1);
});

test('test ApiManager bad construction', async () => {
	const badlyConstructedManager = new ApiManager(null);
	await badlyConstructedManager.fetchData('', '').catch((err) => {
		expect(err).toEqual(new Error('BAD_FETCH'));
	});
});
