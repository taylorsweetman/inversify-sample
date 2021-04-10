export interface Manager {
	readonly _client: Client;
	fetchData(endpoint: string, path: string): Promise<string>;
}

export interface Client {
	get(endpoint: string, path: string): Promise<string>;
}
