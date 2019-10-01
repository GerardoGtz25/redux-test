import React, { Component } from 'react';
import axios from 'axios';

export default class Usuarios extends Component {

  constructor(){
    super();
    this.state = {
      usuarios: []
    }
  }

  async componentDidMount() {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({
      usuarios: respuesta.data
    })
  }
  
  ponerFilas = () => (
    this.state.usuarios.map(usuario => (
      <tr key={ usuario.id }>
        <td>{ usuario.name }</td>
        <td>{ usuario.email }</td>
        <td>{ usuario.website }</td>
      </tr>
    ))
  );
  
  render() {
    return (
      <div className="container">
        <tabel className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            { this.ponerFilas() }
          </tbody>
        </tabel>
      </div>
    );
  }
}
