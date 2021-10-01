import { Router } from 'express';
import { ExpressRouterAdapter } from "../domain/adapters/express.adapter";

import { getLuckyPhraseController } from '../composers/getPhraseRoute';

const expressRouterAdapter = new ExpressRouterAdapter();
export const route = Router();

route.get('/phrase', expressRouterAdapter.adapter(getLuckyPhraseController))