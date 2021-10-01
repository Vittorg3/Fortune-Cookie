export const phrasesContent: string[] = [
    'Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.',
    'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
    'No meio da dificuldade encontra-se a oportunidade.',
    'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',
    'Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.',
    'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
    'Vida trará coisas boas se tiveres paciência.',
    'Não compense na ira o que lhe falta na razão.',
    'Siga os bons e aprenda com eles.',
    'Aquele que se importa com o sentimento dos outros, não é um tolo.',
    'O riso é a menor distância entre duas pessoas.',
    'Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.',
    'Sua visão se tornará clara apenas quando você puder olhar dentro de seu coração.',
    'Todas as coisas são difíceis antes de se tornarem fáceis.'
];

export class Phrase {
    private phrases: string[];

    constructor (phrasesContentInjection?: string[]) {
        this.phrases = phrasesContentInjection || phrasesContent;
    }

    execute() {
        const numberDrawn = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[numberDrawn];
    }
};