import {ADD_TASK,DELETE_TASK, COMPLETE_TASK, EDIT_TASK} from '../constants/actionTypes'

export const addTask=(task)=>{
    return {
        type:ADD_TASK,
        payload:task
    };
}
export const deleteTask=(taskId)=>{
     return  { type:DELETE_TASK,
        payload:taskId}
    
}
export const completeTask=id=>{
    return {type:COMPLETE_TASK,payload:id}
}
export const editTask=payload=>{
    return {type:EDIT_TASK,payload}
}
