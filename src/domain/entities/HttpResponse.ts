import { TypeHttpResponse } from "../adapters/DTO/IHttpDTO"

export class HttpResponse {
    successRequest(body: {}) {
        const response: TypeHttpResponse = {
            body,
            statusCode: 200
        };

        return response; 
    };

    badRequest(body: {}) {
        const response: TypeHttpResponse = {
            body,
            statusCode: 400
        };

        return response;
    }
};