import React from 'react';
import './Person.css';
function Person(props) {
  return (
    <div className="Person">
      <p onClick={props.click}> I am a {props.name} & i am a {props.age} years old</p>
      <input onChange={props.changed}></input>
    </div>
  );
}

export default Person;
