import React, { Component } from 'react'
import {addTask} from '../actions/actions'
import {connect} from 'react-redux'
 class TaskBar extends Component {
    state={
        input:''
    }
    handleChange=(e)=>{
        this.setState({
            input:e.target.value
        })
    }
    render() {
        return (
            <div>
                <input
                type="text" 
                value={this.state.input}
                onChange={this.handleChange}
                />
                <button onClick={()=>(this.props.addTask({title:this.state.input,isComplete:false,id:Date.now()}),this.setState({input:""}))} >Add</button>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    addTask:task => dispatch(addTask(task))
})
export default connect(null,mapDispatchToProps) (TaskBar) ;
