## Testes Implementados

### 1. Teste de Disponibilização de Animal

Este teste valida o fluxo completo de cadastro de um novo animal para adoção por um usuário logado.

*   **Arquivo de Teste:** `cypress/e2e/disponibilizar.cy.js`

*   **Cenário de Teste:**
    1.  **Acesso:** O teste inicia na página inicial da aplicação.
    2.  **Login:** Realiza o login com credenciais de um usuário de teste.
    3.  **Navegação:** Acessa a página **"Disponibilizar animal para adoção"**.
    4.  **Preenchimento do Formulário:** Preenche os campos do formulário com dados de exemplo:
        *   **Nome:** `rony`
        *   **Tipo:** `Peixe`
        *   **Gênero:** `Macho`
        *   **Raça:** `BAGRE`
    5.  **Upload de Imagem:** Faz o upload de uma foto para o animal, utilizando um arquivo de fixtures (`cypress/fixtures/rony.jpg`).
    6.  **Submissão:** Clica no botão "Cadastrar" para submeter o formulário.

*   **Objetivo:** Garantir que o formulário de cadastro de animais está funcionando corretamente, incluindo a seleção de opções em dropdowns e o upload de arquivos.

---

### 2. Teste de Adoção de Animal

Este teste simula a ação de um usuário que, após o login, demonstra interesse em adotar um animal.

*   **Arquivo de Teste:** `cypress/e2e/adotar.cy.js`

*   **Cenário de Teste:**
    1.  **Acesso:** O teste inicia na página inicial.
    2.  **Login:** Efetua o login na plataforma com um usuário de teste.
    3.  **Navegação:** Acessa a seção **"Meus Animais"**.
    4.  **Ação de Adotar:** Clica no botão de ação (provavelmente "Adotar" ou um ícone relacionado) do primeiro animal listado na página.

*   **Objetivo:** Verificar se a interação do usuário para iniciar um processo de adoção está funcionando como esperado a partir da listagem de animais.

---

## Observações

*   Ambos os testes foram gerados com o auxílio do **Cypress Studio**, uma ferramenta que grava as interações do usuário e as converte em código de teste.
*   Esses testes são essenciais para a regressão visual e funcional, assegurando que novas alterações no código não quebrem os fluxos principais
