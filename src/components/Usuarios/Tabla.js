import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaRegEye } from 'react-icons/fa';

const Tabla = (props) => {
  const ponerFilas = () => props.usuarios.map((usuario, key) => (
    <tr key={ usuario.id }>
      <td>{ usuario.name }</td>
      <td>{ usuario.email }</td>
      <td>{ usuario.website }</td>
      <td>
        <Link to={`/publicaciones/${key}`}>
          <FaRegEye /> 
        </Link>
      </td>
    </tr>
  ));

  return (
    <div className="col-12">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Enlace</th>
          </tr>
        </thead>
        <tbody>
          { ponerFilas() }
        </tbody>
      </table> 
    </div> 
  )
}

const mapStateToProps = (reducers) => {
    return reducers.usuariosReducer
  }


export default connect(mapStateToProps)(Tabla)
