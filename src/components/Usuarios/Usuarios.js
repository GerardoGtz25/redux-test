import React, { Component } from 'react'
import { connect } from 'react-redux'

import Spinner from './../General/Spinner'
import Fatal from './../General/Fatal'
import Tabla from './Tabla'

import * as usuariosActions from '../../actions/usuariosActions'

class Usuarios extends Component {

  componentDidMount() {
    this.props.traerTodos();
  }

  ponerContenido = () => {
    if (this.props.error) {
      return <Fatal mensaje={ this.props.error }/>
    }  

    if (this.props.cargando) {
      return <Spinner/>
    } else {
      return (
        <Tabla/>
      )
    }
  }
  
  render() {
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
