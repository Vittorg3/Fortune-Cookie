import { Request, Response } from 'express';
import { TypeHttpRequest, TypeHttpResponse, Route } from './DTO/IHttpDTO';

export class ExpressRouterAdapter {
    adapter(router: any) {
        return async (req: Request, res: Response) => {
            const httpRequest: TypeHttpRequest = {
                body: req.body,
                params: req.params,
                query: req.query
            };

            const httpResponse: TypeHttpResponse = await router.handle(httpRequest);
            res.status(httpResponse.statusCode).json(httpResponse.body);
        };
    }
};