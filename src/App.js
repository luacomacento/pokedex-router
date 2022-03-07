import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>

      {/* Aqui chamei o BrowserRouter no App, mas o recomendado é que ele envolva todo o seu código React, então idealmente coloque ele sempre no index.js */}
      <BrowserRouter>
        <Switch>

          {/* Preste bastante atenção na forma como criamos uma rota dinâmica, definindo o caminho após o /pokemon como uma variável "numero", que será enviado para o componente PokemonDetails.js como uma prop. Dentro do componente a gente vê com mais detalhes como recuperamos e usamos essa informação */}
          <Route path="/pokemon/:numero" render={
            (props) => <PokemonDetails {...props} pokemons={pokemons} />
          } />
          <Route path="/">
            <Pokedex pokemons={pokemons} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;