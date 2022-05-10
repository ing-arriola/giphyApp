import axios from 'axios'
import React, { Component } from 'react'
import SearchBar from '../src/components/SearchBar'

export default class App extends Component {
  state={
    resultados:[],
    loading:true
  }
  // Funcion que se ejecuta cuando se hace click en el boton
  handleSearch = async ( busqueda )  => {
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${busqueda}&limit=10&rating=G`)
    console.log(res.data.data)
    this.setState({resultados:res.data.data, loading:false})

  }

/*   componentWillMount(){
    console.log('Componente a montarse')
  }

  componentDidMount(){
    console.log('Componente montado')
  } */


  render() {
    return (
      <>
        <SearchBar 
          manejarBusqueda={this.handleSearch}
          />
        { !this.state.loading && this.state.resultados.map( imagen => (
          <img src={imagen.images.downsized.url} key={imagen.id} alt='imagen' />
        ) )}
        
      </>
    )
  }
}
