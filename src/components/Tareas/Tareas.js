import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as tareasActions from '../../actions/tareasActions'

class Tareas extends Component {

  componentDidMount() {
    this.props.traerTodas();
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <h1>Tareas</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer

export default connect(mapStateToProps, tareasActions)(Tareas)
