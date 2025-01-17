import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';

class App extends Component {
    state = {
        persons: [
            { id: '1', name: 'Max', age: 28 },
            { id: '2', name: 'Anna', age: 33 },
            { id: '3', name: 'Daniel', age: 8 }
        ]
    }

    deletePersonHandler = ( personIndex ) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice( personIndex, 1 );
        this.setState( { persons: persons } );
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex] //ES6
        };

        // const person = Object.assign({}, this.state.persons{personIndex}); // ES5

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;


        this.setState({ persons: persons });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {
        let persons = null;
        let btnClass = '';
        
        if (this.state.showPersons) {
            persons=( 
                <div> {
                    this.state.persons.map((person, index) => {
                        return <Person
                        key={person.id}
                        click={() => this.deletePersonHandler( index )}
                        name={person.name}
                        age={person.age}
                        changed={(event) => this.nameChangeHandler(event, person.id)}/>
                    })
                } </div>
            );

            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I 'm a React App</h1> 
                <p className={assignedClasses.join(' ')}>This is really working!</p> 
                <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons} 
            </div>
        );
    }
}

export default App;