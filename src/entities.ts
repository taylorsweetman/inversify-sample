import { Container, injectable, inject } from 'inversify';
import 'reflect-metadata';
import axios from 'axios';
import { Client, Manager } from './interfaces';
import { TYPES } from './types';

export class ApiManager implements Manager {
	readonly _client: Client;

	constructor(@inject(TYPES.Client) client: Client) {
		this._client = client;
	}

	async fetchData(endpoint: string, query: string): Promise<string> {
		let data: string;
		try {
			data = await this._client.get(endpoint, query);
		} catch (err) {
			throw new Error(err);
		}
		return data;
	}
}

@injectable()
export class TodoClient implements Client {
	async get(endpoint: string, query: string): Promise<string> {
		let payload: string;
		try {
			payload = (await axios.get(endpoint + query)).data;
		} catch (err) {
			throw new Error(err);
		}

		return payload;
	}
}
