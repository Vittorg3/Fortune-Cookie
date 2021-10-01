import { Phrase } from "../phrase.entitie";

describe.skip('test functionalities phrase', () => {
    test('should return an luck phrase', () => {
        const builderPhrase = new Phrase();
        expect(typeof builderPhrase.execute()).toBe("string");
    });
});