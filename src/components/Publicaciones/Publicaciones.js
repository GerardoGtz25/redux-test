import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as usuariosActions from '../../actions/usuariosActions'
import * as publicacionesActions from './../../actions/publicacionesActions'

const { traerTodos: usuariosTraerTodos } = usuariosActions
const { traerTodos: publicacionesTraerTodos } = publicacionesActions

class Publicaciones extends Component {
  
  componentDidMount() {
    if (!this.props.usuariosReducer.usuarios.length) {
      this.props.usuariosTraerTodos()
      this.props.publicacionesTraerTodos()
    }
  }

  renderPublicaciones() {
    return this.props.publicacionesReducer.publicaciones.map(publicacion => {
      return (
        <div className="row" key={ publicacion.id }>
          <div className="col-1">
           { publicacion.id }
          </div>
          <div className="col-11">
            { publicacion.title }
          </div>
        </div>
      )
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="col-12">
          <h1>Publicaciones de { this.props.match.params.key }</h1>
        </div>
        {
         this.renderPublicaciones()
        }
      </div>
      
    )
  }
}

const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => {
  return {
    usuariosReducer,
    publicacionesReducer
  }
}

const mapDispatchToProps = {
  usuariosTraerTodos,
  publicacionesTraerTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones)
