# 📝 Documentação de Prompts (Req. 8)

Este arquivo registra os prompts principais utilizados durante o desenvolvimento e debug do projeto QuizApp, conforme o requisito 8 da atividade. Os prompts foram adaptados para refletir o fluxo de uma conversa natural de ajuda e resolução de problemas.

## 1. Planejamento e Estrutura Inicial

* "Tenho esse projeto da faculdade [upload dos PDFs]. Pode me dar algumas ideias de tema? Pode ignorar o requisito dos 10.000 dados."
* "Gostei da ideia do quiz. Vamos fazer esse, com os temas: Esporte, História, Geografia, Videogames, Música e Animes."
* "A API da Open Trivia tem essa tela de ajuda [upload do API Helper]. O que eu escolho aqui? Vou ter que gerar uma URL separada pra cada tema?"

## 2. Adaptação e Modularização

* "Meu professor comentou que quer o projeto bem modularizado. Pode me ajudar a refatorar esse código? As telas (`quiz.tsx`, `index.tsx`) estão muito grandes."

## 3. Debugging (Etapa Crítica)

Esta seção documenta o processo de diagnóstico e solução de erros de rede e código.

* **Erro de Rede (Início):** "Rodei o app, mas quando clico no tema, ele dá esse erro: 'Erro: Não foi possível carregar as perguntas.' [upload do erro 'Network request failed']."
* **Diagnóstico de Rede:** "Estranho... O Chrome no emulador tá com internet, sim. [upload do youtube funcionando no emulador]"
* **Erro de Conexão (Expo):** "Depois de mudar o DNS, o app crashou. [upload da tela 'Something went wrong']"
* **Erro de Conexão (Log):** "O log de erro agora é outro: `Failed to download remote update`. [upload do log]"
* **Erro de Código (Base64 - 1):** "Conseguiu conectar! Mas agora deu um erro diferente quando foi decodificar... `TypeError: global.base64ToArrayBuffer is not a function`. [upload do log]"
* **Erro de Código (TypeScript):** "Troquei a biblioteca, mas agora o TypeScript tá reclamando. Ele não acha o 'declaration file' do `base-64`. [upload do erro do VSCode]"
* **Erro de Código (Base64 - 2):** "Instalei os tipos, mas ainda tá quebrando. Agora o erro é `_base.atob is not a function`. [upload do log]"

## 4. Finalização e Documentação

* "Funcionou! Mas as perguntas estão vindo em inglês. Tem como mudar pra português?"
* "Beleza. Agora preciso fazer a parte de documentação."
* "Pronto, movi os cards."
* "O Trello tá pronto.Você teria alguma dica de `README.md` bom pra esse projeto?"
* "Já fiz o readme, o trello e o código. O que falta para concluir as exigências do PDF?"