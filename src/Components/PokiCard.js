import React, { Component } from 'react'
import axios from 'axios'

export default class PokiCard extends Component {

    state = {
        name: '',
        img : '',
        index : '',
        type: '',
        typeTwo: ''
    }

    componentDidMount(){
        const {name, url} = this.props;
        const index = url.split('/')[url.split('/').length - 2];
        const img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`;
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = url
        axios.get(proxyUrl + targetUrl)
        .then(res => {
       
            this.setState({
                type: res.data.types[0].type.name,
                name,
                img
            })
            if (res.data.types[1]) {
                this.setState ({
                typeTwo : res.data.types[1].type.name
                })
            }
        })
    }

  render() {
    return (
      <div className={this.state.type}>
        <img src={this.state.img} alt={this.state.name}/>
        <h3>{this.state.name}</h3>
        <div className='types'><span className={this.state.type}>{this.state.type}</span> <span className={this.state.typeTwo}>{this.state.typeTwo}</span></div>
      </div>
    )
  }
}
