import { TodoClient } from '../../src/entities/TodoClient';
import mockData from './mockdata.json';

export function initMockClient(): TodoClient {
	var mockClient: TodoClient = jest.createMockFromModule(
		'../../src/entities/TodoClient'
	);
	mockClient.get = jest.fn(() => {
		return Promise.resolve(JSON.stringify(mockData));
	});
	return mockClient;
}

export function isJson(input: string): boolean {
	try {
		const parsedJson = JSON.parse(input);
		return typeof parsedJson === 'object';
	} catch (error) {
		return false;
	}
}
