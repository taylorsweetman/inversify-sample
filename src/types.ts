export interface Manager {
	client: Client;
	fetchData(endpoint: string, query: string): Promise<string>;
}

export interface Client {
	get(endpoint: string, query: string): Promise<string>;
}

export class ApiManager implements Manager {
	client: Client;

	constructor(client: Client) {
		this.client = client;
	}

	async fetchData(endpoint: string, query: string): Promise<string> {
		let data: string;
		try {
			data = await this.client.get(endpoint, query);
		} catch (err) {
			throw new Error(err);
		}
		return data;
	}
}

export class TodoClient implements Client {
	async get(): Promise<string> {
		throw new Error('Method not implemented.');
	}
}
