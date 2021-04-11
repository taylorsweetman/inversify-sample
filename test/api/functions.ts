import axios, { AxiosInstance } from 'axios';
import { TodoClient } from '../../src/entities/TodoClient';
import mockData from './mockdata.json';

export function initMockAxios(): AxiosInstance {
	jest.mock('axios');
	const mockedAxios = axios as jest.Mocked<typeof axios>;
	const resp = { data: mockData };
	mockedAxios.get = jest.fn().mockResolvedValue(resp);
	return mockedAxios;
}

export function initMockClient(): TodoClient {
	const mockClient: TodoClient = jest.createMockFromModule(
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
