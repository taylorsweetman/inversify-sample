import { TodoClient } from '../../src/entities/TodoClient';
import axios from 'axios';

test('test TodoClient after construction', () => {
	const client = new TodoClient(axios);
	expect(client._axios).toBeDefined;
});

test('test TodoClient bad construction', async () => {
	const badlyConstructedClient = new TodoClient(null);
	await badlyConstructedClient.get('', '').catch((err) => {
		expect(err).toEqual(new Error('BAD_GET'));
	});
});
