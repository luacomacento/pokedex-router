import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class PokemonDetails extends Component {
  render() { 
    const {pokemons} = this.props;
    // A variável "numero" diz respeito ao que foi digitado na URL após o /pokemon/. O componente recebe essa variável através das props (passadas com o ...props) do componente Route.
    const { numero } = this.props.match.params
    // O método goBack também é passado automaticamente pelo Route como uma prop. Vale muito a pena dar uma olhada em todas as props que o seu componente recebe, algumas podem ser bem úteis :)
    const {goBack} = this.props.history
    // A constante thisPokemon tenta encontrar um pokemon na lista cujo ID corresponda ao número passado na URL. Lembrando que como estamos tratando de algo que vem da URL, essa informação chega como String, e precisamos converter para valor numérico.
    const thisPokemon = pokemons.find((poke) => poke.id === Number(numero));

    return (
      <div>
        {thisPokemon
          ? (
            <>
              <p>{thisPokemon.name}</p>
              <p>{thisPokemon.type}</p>
              <p>{`${thisPokemon.averageWeight.value} ${thisPokemon.averageWeight.measurementUnit}`}</p>
              <p>{thisPokemon.summary}</p>
              
              {/* Lembrando que a função goBack abaixo não foi definida por nós, a recebemos automaticamente graças às props */}
              <button onClick={goBack}>Voltar</button>
            </>
          )
          : <Redirect to="/" />}
      </div>
    );
  }
}
 
export default PokemonDetails;