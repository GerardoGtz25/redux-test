import { TRAER_TODAS, CARGANDO, ERROR } from '../types/tareasTypes'

const INITIAL_STATE = {
  tareas: {},
  cargando: false,
  error: ''
}

export default(state = INITIAL_STATE, action) => {
	switch(action.type) {
		case TRAER_TODAS:
      return { 
        ...state, 
        tareas: action.payload,
        cargando: false,
        error: ''
      }
      
    case CARGANDO:
      return { ...state, cargando: true }

    case ERROR:
      return { ...state, cargando: false, error: action.payload }

		default: return state;
	}
}