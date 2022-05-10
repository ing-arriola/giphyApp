import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {
  state={
    busqueda:"",
    resultados:[],
    loading:true
  }
  // Funcion que se ejecuta cuando se hace click en el boton
  handleSearch = async () => {
    
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${this.state.busqueda}&limit=10&rating=G`)
    console.log(res.data.data)
    this.setState({resultados:res.data.data, loading:false})

  }


  render() {
    return (
      <>
        <input 
          value={this.state.busqueda}  
          onChange={ (e) => this.setState({busqueda:e.target.value}) }
          type="text" 
          placeholder='Ingresa tu busqueda' />
        <button onClick={()=>this.handleSearch()} >Buscar</button>
        { !this.state.loading && this.state.resultados.map( imagen => (
          <img src={imagen.images.downsized.url} key={imagen.id} alt='imagen' />
        ) )}
        
      </>
    )
  }
}
