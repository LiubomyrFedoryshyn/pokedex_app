import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import IosRefresh from 'react-ionicons/lib/IosRefresh'
import PokiCard from './Components/PokiCard'
import PokiSelected from './Components/PokiSelected'


class App extends Component {

state = {
  pokemons : [],
  pokiID : [],
  name : [],
  type: [],
  typeTwo : [],
  image: [],
  speed : [],
  specialDefense : [],
  specialAttack : [],
  defense : [],
  attack :  [],
  hp :  [],
  weight: [],
  totalMoves :[],
  limit : 12,
  status : 'hidden'
}

loadMore = () => {
  let limits = this.state.limit;
  this.setState({
    limit:  limits + 12 
  })
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  targetUrl = `http://pokeapi.co/api/v1/pokemon/?limit=${limits}&offset=12.`
    axios.get(proxyUrl + targetUrl)
      .then(res => {
      this.setState({
          pokemons : res.data.results
      })
    })
}

  componentWillMount(){
    let limit = this.state.limit;
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = `http://pokeapi.co/api/v1/pokemon/?limit=${limit}&offset=12.`
    axios.get(proxyUrl + targetUrl)
    .then(res => {
      this.setState({
          pokemons : res.data.results
      })
    })
  }

  handlePock = (url) => {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = url
    axios.get(proxyUrl + targetUrl)
    .then(res => {
      this.setState({
        pokiID : res.data.id,
        name : res.data.name,
        type: res.data.types[0].type.name,
        image: res.data.sprites.front_default,
        speed : res.data.stats[0].base_stat,
        specialDefense : res.data.stats[1].base_stat,
        specialAttack : res.data.stats[2].base_stat,
        defense : res.data.stats[3].base_stat,
        attack :  res.data.stats[4].base_stat,
        hp :  res.data.stats[5].base_stat,
        weight: res.data.weight,
        totalMoves : res.data.moves.length,
        status: 'visible'
      })
      if (res.data.types[1]) {
       this.setState ({
         typeTwo : res.data.types[1].type.name
       })
      }
    })
  }


    render() {

      const {pokemons} = this.state;
      const pokemonList = pokemons.length ? (pokemons.map(pokemon => {
       
        return (
          <div className='poki-wrapper' key={pokemon.name}>
              <div className='poki-info' onClick={() => {this.handlePock(pokemon.url)}}>
                < PokiCard name={pokemon.name}
                            url={pokemon.url}
                            key={pokemon.name}
                />
              </div>
          </div>
        )
      })) : (
        <div className="falseRequest">
        <IosRefresh fontSize="30px" color="rgb(255, 2, 2)" rotate={true} /> Loading pokemons ...
        </div>
      )

        return (
          <div className="App">
            <h1>Pokedex</h1>
            <div className='main-wrapper'>
                <div className="pokemonList">
                  {pokemonList}
                  <div onClick={this.loadMore} className='load-more' href="#">Load More</div>
                </div>
                <div className="pokemonSelected" className={this.state.status}>
                  <PokiSelected
                                 pokiID={this.state.pokiID}
                                 image={this.state.image}
                                 name={this.state.name}
                                 type={this.state.type}
                                 typeTwo={this.state.typeTwo}
                                 speed={this.state.speed}
                                 specialDefense={this.state.specialDefense} 
                                 specialAttack={this.state.specialAttack}
                                 defence={this.state.defense}
                                 attack={this.state.attack}
                                 hp={this.state.hp}
                                 weight={this.state.weight}
                                 totalMoves={this.state.totalMoves}
                  />
                </div>
            </div>
          </div> 
        );
  }
}

export default App;
