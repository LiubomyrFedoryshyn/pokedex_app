import React, { Component } from 'react'

export default class PokiSelected extends Component {

      
  render() {
    return (
      <div className="pokedex">
        {this.props.image && <img src={this.props.image} alt='pokemon'/> }
        {this.props.name && this.props.pokiID && <p className='name'>{this.props.name} #{this.props.pokiID}</p> } 
        <div className='specials'>
          <div className='type'>            
            <div className='head'>Type </div>{this.props.type && this.props.typeTwo && <div className='content'> {this.props.type} {this.props.typeTwo}</div> } 
          </div>
          <div className='info'>
            <div className='head'>Defence </div>{this.props.defence && <div className='content'> {this.props.defence}</div>} 
          </div>
          <div className='info'>
            <div className='head'>HP </div>{this.props.hp && <div className='content'> {this.props.hp}</div>} 
          </div>
          <div className='info'>
            <div className='head'>SP Attack </div>{this.props.specialAttack && <div className='content'> {this.props.specialAttack}</div>} 
          </div>
          <div className='info'>
           <div className='head'>SP Defence </div>{this.props.specialDefense && <div className='content'> {this.props.specialDefense}</div>} 
          </div>
          <div className='info'>
           <div className='head'>Speed </div>{this.props.speed && <div className='content'> {this.props.speed}</div>} 
          </div>
           <div className='info'>
            <div className='head'>Weight </div>{this.props.weight && <div className='content'> {this.props.weight}</div>} 
          </div>
          <div className='info'>
           <div className='head'>Total moves </div>{this.props.totalMoves && <div className='content'> {this.props.totalMoves}</div>} 
          </div>
        </div>
      </div>
    )
  }
}
