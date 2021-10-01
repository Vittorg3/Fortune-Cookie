import axios from 'axios';

const apiTest = axios.create({
    baseURL: 'http://localhost:3333'
}); 

describe.skip('test getLuckyPhrase', () => {
    test('should return an phrase', async () => {
        const res = await apiTest.get('/phrase');
        console.log(res.data);

        expect(res.data).toHaveProperty('phrase');
    })
});