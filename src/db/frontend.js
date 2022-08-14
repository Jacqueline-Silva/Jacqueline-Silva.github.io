import solarSistem from './img/solar-system.gif';
import trybetunes from './img/trybetunes.gif';
import trybewallet from './img/trybewallet.gif';
import starwarsPlanets from './img/starwars-planets-search.gif';
import recipesAPP from './img/recipes-app.gif';

export default [
  {
    id: 1,
    url: 'https://github.com/Jacqueline-Silva/solar-system',
    src: solarSistem,
    title: 'Projeto Solar System',
    'url-app': 'https://jacqueline-silva.github.io/solar-system/',
    language: 'Javascript, CSS',
    tools: 'React, React-Components',
    description: 'Aplicação em React, tendo como modelo o Sistema Solar onde a pessoa será capaz de ver os planetas e as missões espaciais',
  },
  {
    id: 2,
    url: 'https://github.com/Jacqueline-Silva/trybetunes',
    src: trybetunes,
    title: 'Projeto Trybetunes',
    'url-app': 'https://jacqueline-silva.github.io/trybetunes/',
    language: 'Javascript, CSS',
    tools: 'React, API itunes',
    description: 'Aplicação que através da requisição à API do Itunes, permite reproduzir músicas, pesquisar por álbuns e artistas, favoritar e desfavoritar músicas e editar o perfil do usuário',
  },
  {
    id: 3,
    url: 'https://github.com/Jacqueline-Silva/trybe-wallet',
    src: trybewallet,
    title: 'Projeto Trybe Wallet',
    'url-app': 'https://jacqueline-silva.github.io/trybe-wallet/#/',
    language: 'Javascript, CSS',
    tools: 'React, Redux com React, API Awesome',
    description: 'Nesta aplicação, a pessoa será capaz criar e editar despesas e realizar a conversão de moedas através da API Awesome',
  },
  {
    id: 4,
    url: 'https://github.com/Jacqueline-Silva/starwars-planets-search',
    src: starwarsPlanets,
    title: 'Projeto StarWars Planets Search',
    'url-app': 'https://jacqueline-silva.github.io/starwars-planets-search/',
    language: 'Javascript, CSS',
    tools: 'React, React Hooks, React Context',
    description: 'O objetivo desta aplicação é desenvolver uma lista de filtros que podem ser aplicados ao pesquisar pelos planetas do universo de Star Wars, usando Context API e Hooks',
  },
  {
    id: 5,
    url: 'https://github.com/Jacqueline-Silva/recipes-app',
    src: recipesAPP,
    title: 'Projeto Recipes APP',
    'url-app': '',
    language: 'Javascript, CSS',
    tools: 'React, React Hooks, React Context, API MealsDB, API CocktailDB, Trello, Zoom meetings',
    description: 'Aplicativo de receitas completo, onde o usuário poderá visualizar, pesquisar, filtrar, favoritar e desfavoritar, assim como acompanhar seu progresso durante a preparação da receita escolhida. Exclusivo para mobile',
  },
];
