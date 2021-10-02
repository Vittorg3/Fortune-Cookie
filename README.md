# Fortune Cookie 🥠

## 🚧 Status: Concluído.

__Essa API têm como finalidade retornar uma frase motivacional ou inspiradora aleatoriamente, assim como quando
se quebra um biscoito da sorte, por isso foi nomeada com esse nome.__

## 🔧 Tecnologias
### foram usados neste projeto:
✔️ **Node Js** | **version: 14.16.0**\
✔️ **Dotenv** | **version: 10.0.0**\
✔️ **Express** | **version: 4.17.1**\
✔️ **swagger-ui-express** | **4.1.6**

### foram usados para ambiente de desenvolvimento:
✔️ **Axios** | **version: 0.22.0**\
✔️ **Jest** | **version: 27.2.4**\
✔️ **Nodemon** | **version: 2.0.13**\
✔️ **Ts-jest** | **27.0.5**\
✔️ **Ts-node** | **10.2.1**\
✔️ **Typescript** | **4.4.3**

__É recomendado usar as versões utilizadas no projeto ou versões posteriores as mesmas, para evitar possíveis bugs__.

## Instruções para instalação:
__Para instalar todas as dependências do projeto use o seguinte comando__:
<pre>
   npm install ou yarn install
</pre>

__Após a instalação das depedências, é a hora de criar a build do projeto com o seguinte comando__:
<pre>
   npm run projectInstall
</pre>

__Com a build da api criada, execute o seguinte comando para iniciar a API:__
<pre>
   npm start
</pre>

__Todas as rotas estão documentadas utilizando o Swagger. Visite a seguinte rota para visualizar a documentação da API:__
<pre>
   /docs
</pre>

# Observações ✏️

__Caso você queira colocar suas próprias frases, não precisa se preocupar. Ao instanciar a classe phrase, você têm
a opção de passar um array de frases no construtor dela__. 

![phrase](./src/static-ui/public/images/phrase2.png?raw=true "instanciando")

__Caso você não passe, ele irá iniciar com o array de frases
padrão da classe__.

![phrase](./src/static-ui/public/images/phrase.png?raw=true "construtor da classe")
