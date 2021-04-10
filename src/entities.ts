import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import axios from 'axios';
import { Client, Manager } from './interfaces';
import { TYPES } from './types';

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
			throw new Error(err);
		}
		return data;
	}
}

@injectable()
export class TodoClient implements Client {
	async get(endpoint: string, path: string): Promise<string> {
		let payload: string;
		try {
			payload = (await axios.get(endpoint + path)).data;
		} catch (err) {
			throw new Error(err);
		}
		return payload;
	}
}
