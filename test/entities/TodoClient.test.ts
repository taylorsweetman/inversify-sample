/**
 * unit tests
 *
 * @group unit
 */

import { AxiosInstance } from 'axios';
import { TodoClient } from '../../src/entities/TodoClient';
import { initMockAxios, isJson } from '../api/functions';

var mockedAxios: AxiosInstance;
var clientWithMockedAxios: TodoClient;
var clientGetData: string;

beforeEach(async () => {
	mockedAxios = initMockAxios();
	clientWithMockedAxios = new TodoClient(mockedAxios);
	clientGetData = await clientWithMockedAxios.get('', '');
});

test('test TodoClient construction w/ mocked axios', () => {
	expect(clientWithMockedAxios).toBeTruthy;
	expect(clientWithMockedAxios._axios).toBeTruthy;
});

test('test TodoClient get() shape w/ mocked TodoClient', () => {
	expect(clientGetData).toBeTruthy;
	expect(isJson(clientGetData)).toBe(true);
});

test('test TodoClient get() returns correct first element', () => {
	const managerDataObj = JSON.parse(clientGetData);
	expect(managerDataObj).toBeTruthy;
	expect(managerDataObj[0].id).toBe(1);
});

test('test TodoClient bad construction', async () => {
	const badlyConstructedManager = new TodoClient(null);
	await badlyConstructedManager.get('', '').catch((err) => {
		expect(err).toEqual(new Error('BAD_GET'));
	});
});
