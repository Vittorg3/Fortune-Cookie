import { Phrase } from "../../domain/entities/phrase.entitie";
import { IPhrasesRepository } from "../../domain/repositories/IPhraseRepository";

export class PhraseRepository implements IPhrasesRepository {
    getLuckyPhrase(): string {
        const builderLuckyPhrase = new Phrase();
        return builderLuckyPhrase.execute();
    };
};  