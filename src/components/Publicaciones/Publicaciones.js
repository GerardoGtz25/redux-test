import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as usuariosActions from '../../actions/usuariosActions'

class Publicaciones extends Component {
  
  componentDidMount() {
    console.log(this.props)
    if (!this.props.usuarios.length) {
      this.props.traerTodos()
    }
  }

  render() {
    return (
      <div className="col-12">
        <h1>Publicaciones de { this.props.match.params.key }</h1>
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer
}

export default connect(mapStateToProps, usuariosActions)(Publicaciones)
