import React, { Component } from 'react'

export default class Guardar extends Component {
  render() {
    return (
      <div>
        <h1>
          Guardar Tarea
        </h1>
        Usuarios id:
        <input type="number"/>
        <br/><br/>
        Titulo:
        <input type="text"/>
        <br/><br/>
        <button>GUardar</button>
        
      </div>
    )
  }
}
