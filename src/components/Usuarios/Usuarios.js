import React, { Component } from 'react'
import { connect } from 'react-redux'

import Spinner from './../General/Spinner'
import Fatal from './../General/Fatal'
import Tabla from './Tabla'

import * as usuariosActions from '../../actions/usuariosActions'

class Usuarios extends Component {

  componentDidMount() {
    if(!this.props.usuarios.length) {
      this.props.traerTodos();
    }
  }

  ponerContenido = () => {
    return this.props.error ? 
      <Fatal mensaje={ this.props.error }/>
      : this.props.cargando ? <Spinner/> : <Tabla/>
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Usuarios</h1>
          </div>
        </div>
        <div className="row">
          { this.ponerContenido() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.usuariosReducer
}

export default connect(mapStateToProps, usuariosActions)(Usuarios);
