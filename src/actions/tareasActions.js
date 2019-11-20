import axios from 'axios'
import { TRAER_TODAS, CARGANDO, ERROR } from '../types/tareasTypes'

export const traerTodas = () => async (dispatch) => {
  dispatch({
    type: CARGANDO
  })
  try {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/todos');

    const tareas = {}

    respuesta.data.map((tar) => (
      tareas[tar.userId] = { 
        ...tareas[tar.userId],
        [tar.id]: {
          ...tar
        }
      }
    ))

    dispatch({
      type: TRAER_TODAS,
      payload: tareas
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Informacion de tareas no disponible'
    })
  }
}

export const cambioUsuarioId = (usuario_id) => (dispatch) => {
  dispatch({
    type: 'cambio_usuario_id',
    payload: usuario_id
  })
}

export const cambioTitulo = (usuario_id) => (dispatch) => {
  dispatch({
    type: 'cambio_titulo',
    payload: usuario_id
  })
}

export const agregar = (nueva_tarea) => async (dispatch) => {
  dispatch({
    type: CARGANDO
  })

  try {
    const respuesta = await axios.post('https://jsonplaceholder.typicode.com/todos', nueva_tarea);
    console.log(respuesta)
    dispatch({
      type: 'agregada'
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Intente mas tarde'
    })
  }
}