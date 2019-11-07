import React from 'react'

const Fatal = (props) => {
  return (
    <div className="col-6 offset-3 d-flex justify-content-center align-items-center mt-5">
      <h2> {props.mensaje} </h2>
    </div>
  )
}

export default Fatal
