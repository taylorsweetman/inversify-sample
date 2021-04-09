import { Container } from 'inversify';
import { TYPES } from './types';
import { Client, Manager } from './interfaces';
import { TodoClient, ApiManager } from './entities';

const myContainer = new Container();
myContainer.bind<Client>(TYPES.Client).to(TodoClient);
myContainer.bind<Manager>(TYPES.Manager).to(ApiManager);

export { myContainer };
