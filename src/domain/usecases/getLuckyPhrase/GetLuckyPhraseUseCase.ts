import { IPhrasesRepository } from "../../repositories/IPhraseRepository";

export class GetLuckyPhraseUseCase {
    constructor (
        private phraseRepository: IPhrasesRepository
    ) {}

    execute() {
        return this.phraseRepository.getLuckyPhrase();
    }
};