# 🚀 QuizApp - Projeto Final de React Native

Este é um aplicativo de Quiz interativo desenvolvido como projeto final da disciplina de Des. Disp. Móveis II do curso de Sistema de Informação da UNIARA.

O objetivo do projeto é demonstrar o ciclo de vida completo do desenvolvimento de software, incluindo planejamento, documentação (UML, Trello) e implementação de um aplicativo móvel funcional consumindo uma API REST.

## ✨ Funcionalidades

* **Seleção de Categoria:** O usuário pode escolher entre 6 categorias de quiz na tela inicial (Esportes, História, Geografia, etc.).
* **Quiz Interativo:** O app busca 10 perguntas aleatórias da API Open Trivia DB com base na categoria escolhida.
* **Feedback Instantâneo:** O usuário recebe feedback visual imediato (verde para correto, vermelho para incorreto) ao selecionar uma resposta.
* **Pontuação Final:** Ao final das 10 perguntas, o app exibe uma tela de resultado com a pontuação total e o percentual de acertos.
* **Jogar Novamente:** Da tela de resultado, o usuário pode reiniciar o ciclo e jogar um novo quiz.

## 🛠️ Tecnologias Utilizadas

* **React Native (Expo):** Framework principal para o desenvolvimento mobile.
* **TypeScript:** Linguagem de programação para garantir a tipagem e robustez do código.
* **Expo Router:** Sistema de navegação e roteamento baseado em arquivos (file-based routing).
* **API (Fetch):** Consumo da API pública [Open Trivia DB](https://opentdb.com/) para buscar as perguntas.
* **base-64:** Biblioteca para decodificar as perguntas recebidas da API.

## ⚙️ Estrutura do Projeto

O projeto foi estruturado de forma modularizada para facilitar a manutenção e escalabilidade:

* `app/`: Contém as três telas principais da aplicação (`index.tsx`, `quiz.tsx`, `resultado.tsx`), seguindo o padrão do Expo Router.
* `components/`: Contém todos os componentes reutilizáveis, divididos em:
    * `ui/`: Componentes genéricos (Ex: `PrimaryButton.tsx`).
    * `quiz/`: Componentes específicos da tela de Quiz (Ex: `QuestionCard.tsx`, `AnswerButton.tsx`).
* `services/`: Responsável pela lógica de negócios e comunicação com a API (Ex: `ApiService.ts`).

## 🏁 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em seu ambiente local.

### Pré-requisitos

* [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
* [Git](https://git-scm.com/)
* Dispositivo móvel com o app [Expo Go](https://expo.dev/go) instalado (Android ou iOS) ou um Emulador Android/Simulador iOS.

### Instalação

1.  Clone o repositório para a sua máquina local:
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd QuizApp
    ```

3.  Instale todas as dependências do projeto:
    ```bash
    npm install
    ```

### Rodando o App

1.  Inicie o servidor de desenvolvimento do Expo:
    ```bash
    npx expo start
    ```

2.  Seu terminal exibirá um QR Code.
3.  Abra o aplicativo **Expo Go** em seu celular e escaneie o QR Code.
4.  O aplicativo será carregado automaticamente em seu dispositivo.

## 👨‍💻 Integrantes do Grupo

* [Nome Completo do Aluno 1]
* [Nome Completo do Aluno 2]
* [Nome Completo do Aluno 3]
