import {ADD_TASK,DELETE_TASK,COMPLETE_TASK, EDIT_TASK} from '../constants/actionTypes'
const initState = [
  { title: 'hello', isComplete: false,id:0 },
  { title: 'hi', isComplete: false,id:1 }
];
const taskReducer = (state = initState, action) => {
  switch(action.type) {
    case ADD_TASK:
    //   return [...state, action.payload];
    return state.concat(action.payload)
    // break;
    case DELETE_TASK:
        return state.filter(el => el.id!==action.payload)
    //     break;
    case COMPLETE_TASK:
        return state.map(el=>
                el.id==action.payload ? {...el,isComplete:!el.isComplete}:el
            )
    case EDIT_TASK:
        return state.map(el=> (el.id===action.payload.id)?{...action.payload.newTask}:el  )        
        

    default:
      return state;
  }
};
export default taskReducer;
