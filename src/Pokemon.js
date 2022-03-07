import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image, id} = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>

          {/* Aqui como o componente tem um objeto pokemon, pegamos a ID desse pokemon e usamos ela para criar um link para a rota dinâmica. */}
          <Link to={`/pokemon/${id}`}>Ver detalhes</Link>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;