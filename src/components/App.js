import React from  'react';
import { BrowserRouter, Route } from  'react-router-dom';

import Menu from './Menu/Menu'
import Usuarios from './Usuarios/Usuarios'
import Tareas from './Tareas/Tareas'

const App = () => (
  <BrowserRouter>
    <Menu/>
    <div className="container">
      <Route exact path="/" component={Usuarios}/>
      <Route exact path="/tareas" component={Tareas}/>
    </div>
    
  </BrowserRouter>
);

export default App;


