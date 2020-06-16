import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      { id: "01", name: "Linkon", age: 23 },
      { id: "02", name: "Sunny", age: 22 },
      { id: "03", name: "Mahir", age: 24 }
    ],
    showPerson: false
  }
  // switchButtonHandler = (newInfo) => {
  //   this.setState({
  //     person: [
  //       { name: newInfo, age: 23 },
  //       { name: "Sunny Gardern", age: 22 },
  //       { name: "Mahir TF", age: 42 }
  //     ]
  //   })
  // }
  nameChangeHandeler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.person[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    this.setState(
      {
        person: persons
      }
    )


  }

  toggleHandler = () => {
    const temp = this.state.showPerson;
    this.setState({
      showPerson: !temp
    });

  }

  deletePersonHandeler(indexPerson) {
    let person = [...this.state.person];
    person.splice(indexPerson, 1);
    this.setState({
      person: person
    });
  }

  render() {

    const style = {
      backgroundColor: "pink",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.person.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandeler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandeler(event, person.id)} />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <button style={style}
          onClick={this.toggleHandler}>Switch</button>
        {persons}
      </div>
    );
  }
}

export default App;
