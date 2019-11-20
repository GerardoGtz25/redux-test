import React from  'react';
import { BrowserRouter, Route } from  'react-router-dom';

import Menu from './Menu/Menu'
import Usuarios from './Usuarios/Usuarios'
import Tareas from './Tareas/Tareas'
import Publicaciones from './Publicaciones/Publicaciones'
import TareasGuardar from './Tareas/Guardar'

const App = () => (
  <BrowserRouter>
    <Menu/>
    <div className="container">
      <Route exact path="/" component={ Usuarios }/>
      <Route exact path="/tareas" component={ Tareas }/>
      <Route exact path="/publicaciones/:key" component={ Publicaciones } />
      <Route exact path="/tareas/guardar" component={ TareasGuardar } />
    </div>
  </BrowserRouter>
);

export default App;


