import { Container } from 'inversify';
import { TYPES } from './types';
import { Client, Manager } from './interfaces';
import { ApiManager } from './entities/ApiManager';
import { TodoClient } from './entities/TodoClient';
import axios, { AxiosStatic } from 'axios';

const myContainer = new Container();
myContainer.bind<Client>(TYPES.Client).to(TodoClient);
myContainer.bind<Manager>(TYPES.Manager).to(ApiManager);
myContainer.bind<AxiosStatic>(TYPES.Axios).toConstantValue(axios);

export { myContainer };
