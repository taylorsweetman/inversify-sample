import { AxiosInstance } from 'axios';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { Client } from '../interfaces';
import { TYPES } from '../types';

@injectable()
export class TodoClient implements Client {
	readonly _axios: AxiosInstance;

	constructor(@inject(TYPES.Axios) axios: AxiosInstance) {
		this._axios = axios;
	}

	async get(endpoint: string, path: string): Promise<string> {
		let payload: string;
		try {
			const resp = await this._axios.get(endpoint + path);
			payload = JSON.stringify(resp.data);
		} catch (err) {
			throw new Error('BAD_GET');
		}
		return payload;
	}
}
