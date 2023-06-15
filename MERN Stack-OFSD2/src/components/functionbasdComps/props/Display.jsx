import React from 'react'

const Display = (props) => {
  return (
    <div>
        <h2>Display</h2>
        <hr />
        <p>Count : {props.score}</p>
    </div>
  )
}

export default Display