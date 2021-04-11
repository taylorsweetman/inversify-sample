import axios, { AxiosStatic } from 'axios';
import { Container } from 'inversify';
import { ApiManager } from './entities/ApiManager';
import { TodoClient } from './entities/TodoClient';
import { Client, Manager } from './interfaces';
import { TYPES } from './types';

const myContainer = new Container();
myContainer.bind<Client>(TYPES.Client).to(TodoClient);
myContainer.bind<Manager>(TYPES.Manager).to(ApiManager);
myContainer.bind<AxiosStatic>(TYPES.Axios).toConstantValue(axios);

export { myContainer };
