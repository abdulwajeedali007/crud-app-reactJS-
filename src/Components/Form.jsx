import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid'
import {FaTelegramPlane} from 'react-icons/fa'
import Tasks from './Tasks'
class Form extends Component{
    // topic name, description, time, location

    constructor(props) {
        super(props)
    
        this.state = {
            topicname: '',
            location: '',
            description: '',
            task: {},
            
           isEdited : 'false',
            totalTasks: localStorage.getItem("totalTasks") ? JSON.parse(localStorage.getItem("totalTasks")) : []
        }
       
        // this.updateSpecificItem = this.updateSpecificItem.bind(this)
    }
    handleChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
        [name]:value
        })
    }
    handleSubmit = (e) => {
       e.preventDefault();
       const task = {
        id: uuidv4(),
        time: Date(Date.now().toString()),
        topicname: this.state.topicname,
        location: this.state.location,
        description: this.state.description
       }
       this.setState({
           topicname: '',
           location: '',
           description: '',
           isEdited: 'false',
           task,
           totalTasks: [...this.state.totalTasks, task]
       })
     
    // Put the object into storage
    localStorage.setItem('totalTasks', JSON.stringify(this.state.totalTasks));
    }
    // componentDidMount(){
    // // Put the object into storage
    // localStorage.setItem('totalTasks', JSON.stringify(this.state.totalTasks));
    // }
    // when state updates
    componentDidUpdate(){
        // Put the object into storage
        localStorage.setItem('totalTasks', JSON.stringify(this.state.totalTasks));
        }
    
    // removing the element from state

    removeTask = (id)=>{
           this.setState({...this.state, totalTasks: this.state.totalTasks.filter(task => task.id !== id)})
    }
    
    updatingTask = (task1)=>{
        const editedTask = this.state.totalTasks.filter(task => task.id !== task1.id)
        const selectEditItem = this.state.totalTasks.find(task=> task.id === task1.id)

        
        this.setState({
           topicname: selectEditItem.topicname,
           location: selectEditItem.location,
           description: selectEditItem.description,
           totalTasks : editedTask,
           isEdited: 'true'
        })

        
       
 }

     

    render(){
       console.log(this.state.isEdited)
        return (
            <div>
                <div className="form__container">
                    <form onSubmit={(e)=>this.handleSubmit(e)}>
                       <div className="form__group">
                          <label htmlFor="topicname">Task Name</label>
                          <input type="text" className="control__input" id="topicname" name="topicname" value={this.state.topicname} onChange={e=>this.handleChange(e)} placeholder="Enter task name..." required/>
                       </div>
                       <div className="form__group">
                          <label htmlFor="description">Description</label>
                          <input type="text" className="control__input" id="description" name="description" value={this.state.description} onChange={e=>this.handleChange(e)} placeholder="Enter task description..." required/>
                       </div>
                       <div className="form__group">
                          <label htmlFor="location" >Location</label>
                          <input type="text" className="control__input" id="location" name="location" value={this.state.location} onChange={e=>this.handleChange(e)} placeholder="Ex Home, Office..." required/>
                       </div>
                       <div className="form__group">
                          
                          <button className={this.state.isEdited === 'false' ? 'btnSubmit' : 'btnSubmit update'} type="submit"><FaTelegramPlane/>{"  "}{this.state.isEdited === 'false' ? "Submit" : "Update"}</button>
                       </div>
                    </form>
                </div>
                
                <br/><br/>
                <Tasks tasks = {this.state.totalTasks} removeTask={this.removeTask} updatingTask={this.updatingTask}/>
            </div>
        )
    }
}

export default Form
