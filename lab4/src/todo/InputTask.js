
import React, {Component}  from 'react';

class InputTask extends Component {

   state = {task:'',Place:''}

   handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value });
   }

   render() {
       return (
           <div>
               <input type="hidden" name="id" value={this.props.id} /><br/>
               <input type="text" name="task" onChange={this.handleChange} /> <br/>
               <input type="text" name="Place" onChange={this.handleChange} /> <br/>
               <button onClick={() => this.props.addTask(this.state.task,this.state.Place)}>Add</button>
           </div>
       )
   }
}

export default InputTask
