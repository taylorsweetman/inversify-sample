export interface Manager {
	readonly _client: Client;
	fetchData(endpoint: string, query: string): Promise<string>;
}

export interface Client {
	get(endpoint: string, query: string): Promise<string>;
}
