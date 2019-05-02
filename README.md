# Aplicação Fullstack em Node.js e React: Fórum temático para Game of Thrones 

Este projeto apresenta um fórum definido por duas aplicações, back-end e front-end, que implementam autenticação via método JWT. No back-end foi usado Node.js com Express.js e um banco de dados MySQL. O front-end é feito em React com Redux.

Confira uma explicação completa desse código e o passo a passo para criar essa aplicação em https://www.devmedia.com.br/react-redux/

### Destaques do projeto
1. React
2. Redux
3. Node.js
4. Express.js

## Clonando o projeto a partir do GitHub

Para clonar o repositório deste projeto a partir do GitHub você precisa ter o GIT instalado em seu computador. 
Caso você esteja em um ambiente Windows, vá até a página https://git-scm.com/download/win, faça o download do instalador do GIT e prossiga com a instalação. 
Após isso, abra o prompt de comandos para executar o seguinte:

git clone https://github.com/BoscarinoAylan/got-community-backend.git

Aguarde até que todos os arquivos sejam baixados para o seu computador e repita o mesmo processo para a aplicação React: 

git clone https://github.com/BoscarinoAylan/got-community-frontend.git

## Fazendo o deploy da aplicação no Heroku

Para enviar o seu projeto para o Heroku e publicar a sua aplicação você deve ter uma conta criada, além de instalar em seu computador o Heroku CLI. Nas URLs abaixo você conseguirá realizar ambos esses passos:

https://devcenter.heroku.com/articles/heroku-cli 
https://id.heroku.com/login 

Acesse o prompt de comandos novamente e vá até o diretório no qual o projeto foi clonado do GitHub: 

cd caixa-de-sugestoes

No diretório do projeto digite os seguintes comandos:

heroku login
heroku create
heroku git push heroku master
heroku create
heroku logs --tail

Agora, no projeto back-end, precisamos configurar o banco de dados da aplicação no arquivo config.js, bem como adicionar suporte a um banco de dados no projeto que criamos com o Heroku CLI nos passos acima. Aqui utilizaremos o ClearDB, um addon que possui uma versão gratuita, para instalar o MySQL. Antes de instalar o ClearDB certifique-se de habilitar a cobrança no Heroku, pois essa é uma exigência para a instalação deste addon. 

https://dashboard.heroku.com/account/billing 

No prompt de comandos execute os seguintes comandos:

heroku addons:create cleardb:ignite
heroku config

O comando heroku config exibirá a URL de conexão com o banco de dados, a partir da qual adicionaremos as variáveis de ambiente necessárias para realizar a conexão com o banco de dados. 

CLEARDB_DATABASE_URL: 
    mysql://bbd1ca985a75ae:b3270a98@us-cdbr-iron-east-03.cleardb.net/heroku_eb3ec026f66e354?reconnect=true

Levando em consideração a URL acima, para conectar essa aplicação com o banco de dados heroku_eb3ec026f66e354, devemos clicar na aba "Settings" da dashboard do Heroku. Nessa página clique no botão "Reveal Config Vars", isso irá revelar dois campos para por a chave e o valor da nova variável de ambiente. Em seguida ponha as seguintes variáveis com os valores: 

| Chave         | Valor                                                                                                     |
_____________________________________________________________________________________________________________________________
| NODE_ENV      | production                                                                                                |
| DB_HOST       | mysql://bbd1ca985a75ae:b3270a98@us-cdbr-iron-east-03.cleardb.net/heroku_eb3ec026f66e354?reconnect=true    | 
| DB_USER       | bbd1ca985a75ae                                                                                            |
| DB_PASSWORD   | b3270a98                                                                                                  |

Uma vez que cada um desses passos tenha sido executado com sucesso, podemos executar a aplicação com o seguinte comando: 

heroku open

## Glossário

### React

O React é uma biblioteca JavaScript de código aberto para criar interfaces de usuário. É mantido pelo Facebook, Instagram e uma comunidade de desenvolvedores individuais e outras empresas. 

### Node.js

o Node.js é um ambiente de execução para JavaScript, assíncrono e orientado a eventos de código aberto. O Node.js permite que os desenvolvedores usem JavaScript para escrever scripts do lado do servidor. 

### Redux 

Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo. É mais comumente usado com bibliotecas como React ou Angular para construir interfaces com o usuário. Semelhante à arquitetura Flux do Facebook, foi criado por Dan Abramov e Andrew Clark. 

### Express.js

Express.js, ou simplesmente Express, é uma estrutura de aplicativo da web para o Node.js, lançada como software livre e de código aberto sob a licença MIT. Ele é projetado para construir aplicativos da Web e APIs. Ele foi chamado de estrutura de servidor padrão de fato para o Node.js. 