import axios from 'axios'
import { 
  TRAER_TODAS,
  CARGANDO,
  ERROR,
  CAMBIO_USUARIO_ID,
  CAMBIO_TITULO,
  AGREGADA
} from '../types/tareasTypes'

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
    type: CAMBIO_USUARIO_ID,
    payload: usuario_id
  })
}

export const cambioTitulo = (usuario_id) => (dispatch) => {
  dispatch({
    type: CAMBIO_TITULO,
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
      type: AGREGADA
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Intente mas tarde'
    })
  }
}