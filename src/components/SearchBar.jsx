import React, { Component } from 'react'

export default class SearchBar extends Component {

    state={
        busqueda:''
    }

  render() {
    return (
      <div>
          <input 
          value={this.state.busqueda}  
          onChange={ (e) => this.setState({busqueda:e.target.value}) }
          type="text" 
          placeholder='Ingresa tu busqueda' />
        <button onClick={()=>this.props.manejarBusqueda(this.state.busqueda)} >Buscar</button>
      </div>
    )
  }
}
