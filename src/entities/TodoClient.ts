import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { AxiosStatic } from 'axios';
import { Client } from '../interfaces';
import { TYPES } from '../types';

@injectable()
export class TodoClient implements Client {
	readonly _axios: AxiosStatic;

	constructor(@inject(TYPES.Axios) axios: AxiosStatic) {
		this._axios = axios;
	}

	async get(endpoint: string, path: string): Promise<string> {
		let payload: string;
		try {
			payload = (await this._axios.get(endpoint + path)).data;
		} catch (err) {
			throw new Error(err);
		}
		return payload;
	}
}
