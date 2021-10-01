export type TypeHttpRequest = {
    body: {},
    query: {},
    params: {}
};

export type TypeHttpResponse = {
    statusCode: number;
    body: {}
};

export interface Route {
    route(httpRequest: TypeHttpRequest): TypeHttpResponse;
};