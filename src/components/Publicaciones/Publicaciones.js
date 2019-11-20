import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from './../General/Spinner'
import Fatal from './../General/Fatal'

import * as usuariosActions from '../../actions/usuariosActions'
import * as publicacionesActions from './../../actions/publicacionesActions'

const { traerTodos: usuariosTraerTodos } = usuariosActions
const { traerPorUsuario: publicacionesTraerPorUsuario } = publicacionesActions

class Publicaciones extends Component {
  
  async componentDidMount() {
    const { 
      usuariosTraerTodos,
      publicacionesTraerPorUsuario,
      match: { params: { key } }
    } = this.props

    if (!this.props.usuariosReducer.usuarios.length) {
      await usuariosTraerTodos()
    }

    if (!this.props.usuariosReducer.error) {
      return null;
    }

    if(!('publicaciones_key' in this.props.usuariosReducer.usuarios[key])) {
      publicacionesTraerPorUsuario(this.props.match.params.key)
    }
  }

  renderPublicaciones() {
    const { 
      usuariosReducer,
      publicacionesReducer,
      match: { params: { key } }
    } = this.props

    if (usuariosReducer.error) {
      return <Fatal mensaje={usuariosReducer.error} />
    }

    if (usuariosReducer.cargando) {
      return <Spinner />
    }
    
    return publicacionesReducer.publicaciones.map(publicacion => {
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

  // ponerUsuario =  () => {
    

  //   if (usuariosReducer.cargando) {
  //     return <Spinner/>
  //   }
  // }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="col-12">
          <h1>Publicaciones de { this.props.match.params.key }</h1>
        </div>
        { this.renderPublicaciones() }
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
  publicacionesTraerPorUsuario
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones)
