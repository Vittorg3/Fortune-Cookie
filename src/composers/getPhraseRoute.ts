import { PhraseRepository } from "../infra/repositories/PhraseRepository";
import { GetLuckyPhraseController } from "../domain/usecases/getLuckyPhrase/GetLuckyPhraseController";
import { GetLuckyPhraseUseCase } from "../domain/usecases/getLuckyPhrase/GetLuckyPhraseUseCase";

const phraseRepository = new PhraseRepository();

const getLuckyPhraseUseCase = new GetLuckyPhraseUseCase(phraseRepository);
export const getLuckyPhraseController = new GetLuckyPhraseController(getLuckyPhraseUseCase);