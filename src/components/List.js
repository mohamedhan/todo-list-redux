import React from 'react'
import {connect} from 'react-redux'
import {deleteTask} from '../actions/actions'
import {completeTask} from '../actions/actions'
  function List(props) {
    return (
        <div>
            {props.itemss.map((el,i)=> 
                  <div><p  style={{ textDecoration:el.isComplete?"line-through":"none"}}>{el.title}</p>  
                  <button onClick={()=>props.completeTask(el.id)} 
                  >Complete</button>        
                  <button onClick={()=>props.deleteTask(el.id)} >DELETE</button>
                  <button>Edit</button>
                  </div>
                )}
            
        </div>
    )
}
const mapStateToProps=state=>({
    itemss:state.items
})
const mapDispatchToProps=dispatch=>({
    deleteTask:id=>dispatch(deleteTask(id)),
    completeTask:id=>dispatch(completeTask(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(List) ;
