# Sobre

Aplicação para busca de usuários do github.

## O desafio

- informar o nome de um usuário do GitHub e, clicando em um botão ou pressionando Enter, a aplicação faça uma busca e me envie para uma página com o resultado dessa pesquisa, listando os repositórios do usuário localizado. Se o usuário não existir, preciso receber um alerta da aplicação;
- Receber um feedback de carregamento enquanto a aplicação busca os dados do usuário digitado;
- Feedback da aplicação quando o usuário inserido no campo de busca não for válido, de acordo com as regras de validação do GitHub;
- Notificação caso perca a conexão com a internet durante a busca dos dados pela aplicação;
- Acessar os dados de usuários que já pesquisei de modo offline.

## Como rodar o projeto

```bash

#Clonar repositório
$ git clone https://github.com/marcelafreire/github-user-repositories.git

#Entrar no diretório
$ cd github-user-repositories.git

#Instalar dependências
$ npm install

#Iniciar aplicação 
$ ng serve

````

## Testes

```bash

#Teste unitário
$ ng test

#Teste end-to-end
$ npx cypress open

````
