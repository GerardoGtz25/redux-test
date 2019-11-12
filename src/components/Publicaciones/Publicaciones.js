import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from '../General/Spinner'
import Fatal from '../General/Fatal'
import Comentarios from './Comentarios'

import * as usuariosActions from '../../actions/usuariosActions'
import * as publicacionesActions from './../../actions/publicacionesActions'

const { traerTodos: usuariosTraerTodos } = usuariosActions
const { 
  traerPorUsuario: publicacionesTraerPorUsuario,
   abriCerrar,
   publicacionesActions,
   traerComentarios
  } = publicacionesActions

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

    if (this.props.usuariosReducer.error) {
      return 
    }

    if(!('publicaciones_key' in this.props.usuariosReducer.usuarios[key])) {
      await publicacionesTraerPorUsuario(this.props.match.params.key)
    }
  }

  ponerUsuarios = () => {
    const { 
      usuariosReducer,
      match: { params: { key } }
    } = this.props

    if (usuariosReducer.error) {
      return <Fatal mensaje={ usuariosReducer.error } />
    }

    if (usuariosReducer.cargando || !usuariosReducer.usuarios.length) {
      return <Spinner />
    }

    const nombre = usuariosReducer.usuarios[key].name;

    return (
      <h1>Publicaciones del { nombre }</h1>
    )
  }

  ponerPublicaciones = () => {
    const { 
      usuariosReducer,
      usuariosReducer: { usuarios },
      publicacionesReducer,
      publicacionesReducer: { publicaciones },
      match: { params: { key } }
    } = this.props

    if (!usuarios.length) return
    
    if (usuariosReducer.error) return

    if (publicacionesReducer.cargando) {
      return <Spinner />
    }

    if (publicacionesReducer.error) {
      return <Fatal mensaje={publicacionesReducer.error} />
    }

    if (!publicaciones.length) return;

    if(!('publicaciones_key' in usuarios[key])) return; 

    const { publicaciones_key } = usuarios[key];

    console.log(publicaciones, publicaciones_key)

    return this.mostrarInfo(
      publicaciones[publicaciones_key],
      publicaciones_key
    )
  }

  mostrarInfo = (publicaciones, pub_key) => (
    publicaciones.map((publicacion, com_key) => (
      <div 
        className="row"
        key={ publicacion.id }
        onClick={ () => this.mostrarComentarios(pub_key, com_key, publicacion.comentarios) }>
        <div className="col-12 border border-info mt-1 contenedor-comentarios">
          <h3>{ publicacion.title }</h3>
          <p>{ publicacion.body }</p>
        </div>
        <div 
          className={ (publicacion.abierto) ? 'comentarios col-12 mostrar'  : 'comentarios col-12 ocultar'  }>
          <Comentarios/>
        </div>
      </div>
    ))
  )

  mostrarComentarios = (pub_key, com_key, comentarios) => {
    this.props.abriCerrar(pub_key, com_key)
    this.props.traerComentarios(pub_key, com_key)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        { this.ponerUsuarios() }
        { this.ponerPublicaciones() }
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
  publicacionesTraerPorUsuario,
  abriCerrar,
  traerComentarios
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones)
