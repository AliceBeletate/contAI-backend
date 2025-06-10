# ContAI Backend

Este projeto é uma aplicação backend desenvolvida em TypeScript, utilizando Express.js para as rotas e TypeORM para a interação com o banco de dados PostgreSQL. Ele é projetado para gerenciar transações, fornecendo uma API RESTful para operações CRUD.


## Funcionalidades

-   **API RESTful para Transações**: Oferece endpoints para criar, ler, atualizar e deletar transações.
-   **Persistência de Dados**: Utiliza TypeORM para mapeamento objeto-relacional (ORM) e PostgreSQL como banco de dados para armazenar as informações de transações.
-   **Estrutura Modular**: O código é organizado em controladores, serviços, entidades e rotas para facilitar a manutenção e escalabilidade.


## Instruções de Execução

Para configurar e executar este projeto em seu ambiente local, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o Node.js, npm (Node Package Manager) e PostgreSQL instalados em sua máquina.


### Configuração do Banco de Dados

1.  **Crie um banco de dados PostgreSQL** para o projeto (ex: `contai_db`).
2.  **Configure as credenciais do banco de dados** no arquivo `src/database/data-source.ts` ou utilize variáveis de ambiente.


### Instalação

1.  **Navegue até o diretório do projeto onde foi clonado:**

    ./contai-backend

2.  **Instale as dependências:**

    ```bash
    npm install
    ```


### Execução

Para iniciar a aplicação em modo de desenvolvimento:

```bash
npm run dev
```


**Nota**: O comando `npm run dev` assume que você tem `ts-node-dev` configurado para rodar o `server.ts`. Se não, você pode precisar compilar o TypeScript primeiro e depois rodar o JavaScript gerado:

```bash
npm run build
node dist/server.js
```


## Rotas da API

Este projeto expõe as seguintes rotas da API para gerenciamento de transações:

### `POST /transactions`

-   **Descrição**: Cria uma nova transação.
-   **Controller**: `TransactionController.create`

### `GET /transactions`

-   **Descrição**: Retorna todas as transações.
-   **Controller**: `TransactionController.getAll`


