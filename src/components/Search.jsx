import React, { Component } from 'react'

export default class Search extends Component {

    constructor(props){
      super(props);
        this.state = {
            name: '',
            img: '',
            url: ''
        }
    }

    getData = async () =>{
      let answer = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
      let data = await answer.json();
      console.log(data);

      this.setState({
        img: data.sprites.other["official-artwork"].front_default
      })
    }

    handleName = (event) => {
      let aux =  event.target.value.toLowerCase();
      this.setState({
        name: aux
      })
    }

    handleSubmit = (event) => {
      let name = this.state.name;
      console.log(name)
      event.preventDefault();
      this.getData();
    }

  
    render() {
      if (this.state.img === ''){
        return (
          <div className="card">
            <div className="card-header text-dark">
              Busca tu Pokemon</div>
            <div className="card-body">
              <form>    
                <label className="text-dark">Ingresa el nombre de tu Pokemon</label><br />
                <input type="text" 
                placeholder="Nombre Pokemon"
                onChange={this.handleName}
                />  <br />
                <button type="submit" 
                className="btn btn-success" 
                onClick={this.handleSubmit}
                >Buscar</button>
              </form>
            </div>
          </div>
        )
      } else {
    
        return(
          <div className="pbusqueda">
          <div className='col-4 mx-auto'>
            <div className='card'>
              <div className="card-header">
                <h1 className='text-dark'>{this.state.name}</h1>  
              </div>
              <div className="card-body">
                <div className="card-image"><img className='w-25' src={this.state.img} alt={this.state.name}/></div>
              </div>  
            </div>
            <button className="btn btn-success " onClick={() => {this.setState({name: '', img: ''})}}>Regresar</button>
          </div>
          </div>
                  
        )
    
      }
    }
}
