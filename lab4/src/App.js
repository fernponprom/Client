
import React, {Component} from 'react';
import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";
import Info from './Info'

// import Github from "./github";

class App extends Component {

   state = {
       tasks: [{id: 1, task: 'Do homework', Place:'Room'},
               {id: 2, task: 'Read book', Place:'PSU'}],
       id:3
   }

   addTask = (task,Place) => {
       this.setState({
                tasks: [...this.state.tasks, {id: this.state.id,task,Place } ],
                id: this.state.id+1  })
   }

   render() {   


       return (
           <div className="App">

               <Info />
           </div>
       );
   }
}

export default App;
