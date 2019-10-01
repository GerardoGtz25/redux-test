import React from  'react'
import { Link } from 'react-router-dom'

const Menu = (props) => (
  <nav className="navbar navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      <span className="text-white">Redux</span>
    </Link>
    <Link className="navbar-brand" to="/tareas">
      <span className="text-white">Tareas</span>
    </Link>
  </nav>
);

export default Menu;