import trybersAndDragons from './img/app-t&d.gif';
import dockerTodoList from './img/docker-todo-list.gif';
import mysqlAllForOne from './img/mysql-all-for-one.gif';
import talkerManager from './img/talker-manager.gif';

export default [
  {
    id: 1,
    title: 'Projeto Docker Todo List',
    src: dockerTodoList,
    url: 'https://github.com/Jacqueline-Silva/docker-todo-list',
    'url-app': '',
    language: '',
    tools: 'NodeJS, Comandos Docker, Dockerfile, Docker-compose',
    description: 'O Projeto Docker Todo List, contém arquivos de configuração afim de "conteinerizar" a aplicação para que ela funcione corretamente nas frentes apresentadas',
  },
  {
    id: 2,
    title: 'Projeto MySQL All for One',
    src: mysqlAllForOne,
    url: 'https://github.com/Jacqueline-Silva/mysql-all-for-one',
    'url-app': '',
    language: '',
    tools: 'NodeJS, MySQL, Banco de dados de Northwind, docker-compose',
    description: 'Projeto com o objetivo de praticar comandos do SQL com o banco de dados de exemplo Northwind',
  },
  {
    id: 3,
    title: 'Projeto Talker Manager',
    src: talkerManager,
    url: 'https://github.com/Jacqueline-Silva/talker-manager',
    'url-app': '',
    language: 'Javascript',
    tools: 'NodeJS, Express, Express-rescue, Nodemon, Body Parser, CryptoJS',
    description: 'Aplicação para cadastros de palestrantes, sendo uma API de um CRUD completo juntamente com seus respectivos endpoints que utilizam o módulo fs para leitura e alteração de arquivos',
  },
  {
    id: 4,
    title: 'Projeto Trybers and Dragons',
    src: trybersAndDragons,
    url: 'https://github.com/Jacqueline-Silva/trybers-and-dragons',
    'url-app': '',
    language: 'Typescript',
    tools: 'NodeJS, POO, SOLID',
    description: 'Projeto que visa desenvolver minhas habilidades com Typescript e POO, assim como aplicar os princípios da arquitetura SOLID',
  },
];
