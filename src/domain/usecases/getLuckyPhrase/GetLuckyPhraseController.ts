import { TypeHttpRequest, TypeHttpResponse } from "../../adapters/DTO/IHttpDTO";
import { GetLuckyPhraseUseCase } from "./GetLuckyPhraseUseCase";

import { HttpResponse } from '../../entities/HttpResponse';

export class GetLuckyPhraseController {
    constructor (
        private getLuckyPhraseUseCase: GetLuckyPhraseUseCase
    ) {}

    async handle(httpRequest: TypeHttpRequest): Promise<TypeHttpResponse> {
        const response = new HttpResponse();

        try {
            const phrase = await this.getLuckyPhraseUseCase.execute();
            return response.successRequest({phrase});

        } catch (error) {
            let err = (error as Error).message;
            return response.badRequest({err});
        }
       
    }
};