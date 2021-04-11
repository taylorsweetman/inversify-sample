import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { Client, Manager } from '../interfaces';
import { TYPES } from '../types';

@injectable()
export class ApiManager implements Manager {
	readonly _client: Client;

	constructor(@inject(TYPES.Client) client: Client) {
		this._client = client;
	}

	async fetchData(endpoint: string, path: string): Promise<string> {
		let data: string;
		try {
			data = await this._client.get(endpoint, path);
		} catch (err) {
			throw new Error('BAD_FETCH');
		}
		return data;
	}
}
