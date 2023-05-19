# react-crud-sequelize
Este é um projeto em React Native (expo) com o objetivo de integrar o framework Express e a biblioteca Sequelize para criar um aplicativo CRUD. O CRUD refere-se às operações básicas de criação (Create), leitura (Read), atualização (Update) e exclusão (Delete) em um banco de dados.

## Funcionalidades
O projeto tem as seguintes funcionalidades:
- Listar registros: exibe uma lista de registros existentes no banco de dados.
- Adicionar registro: permite criar um novo registro no banco de dados.
- Visualizar registro: exibe os detalhes de um registro específico.
- Editar registro: permite modificar os dados de um registro existente.
- Excluir registro: remove um registro do banco de dados.

## Tecnologias utilizadas

O projeto utiliza as seguintes tecnologias:

-  React Native: um framework JavaScript para desenvolvimento de aplicativos móveis.
-  Expo: uma plataforma que facilita o desenvolvimento e a construção de aplicativos React Native.
-  Express: um framework de aplicativo web Node.js rápido, flexível e minimalista.
-  Sequelize: uma biblioteca ORM (Object-Relational Mapping) para interagir com o banco de dados SQL.

## Configuração e Execução do Projeto

Para executar o projeto em sua máquina local, siga as etapas abaixo:

1. Clone este repositório para o seu diretório local:

​```git clone https://github.com/anabmartins/react-crud-sequelize.git```

2. Navegue até o diretório do projeto:

```cd react-crud-sequelize```

3. Instale as dependências do projeto:

```npm install```

4. Configure a conexão com o banco de dados no arquivo server.js fornecendo as informações corretas para o host, nome do banco de dados, usuário e senha.

5. Inicie o servidor Express:

```npm start```

6. Abra um novo terminal e navegue até o diretório do projeto, em seguida, execute o aplicativo React Native:

```expo start```

7. Abra o aplicativo Expo no seu dispositivo móvel ou em um emulador para visualizar e testar o aplicativo CRUD.
