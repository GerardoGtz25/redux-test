import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import * as usuariosActions from '../../actions/usuariosActions'

class Usuarios extends Component {


  async componentDidMount() {
    // const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
    // this.setState({
    //   usuarios: respuesta.data
    // })
    this.props.traerTodos();
  }
  
  ponerFilas = () => (
    this.props.usuarios.map(usuario => (
      <tr key={ usuario.id }>
        <td>{ usuario.name }</td>
        <td>{ usuario.email }</td>
        <td>{ usuario.website }</td>
      </tr>
    ))
  );
  
  render() {
    console.log(this.props)
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

const mapStateToProps = (state) => {
  return state.usuariosReducer
}

export default connect(mapStateToProps, usuariosActions)(Usuarios);
