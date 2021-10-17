import './TodoItem.css'
import React, {useState} from 'react'

const TodoItem = props => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const patchFun = function(status){
        fetch(`https://skolas-api.herokuapp.com/api/todos/id/${props.id}`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'PATCH',    
            body: JSON.stringify({completed: status})                                                                                              
        })
    }
    const finishTodo = async function(e){
        if(e.target.classList.contains('finished-todo')){
            e.target.classList.remove('finished-todo')   
            patchFun(false)         
        }
        else{
            e.target.classList.add("finished-todo")
            patchFun(true)   
        }
    }
    const deleteTodo = async function(){
        fetch(`https://skolas-api.herokuapp.com/api/todos/id/${props.id}`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'DELETE',                                                                                                  
        })
        props.up_func(1)
    }

    return (
        <div className="TodoItem">
            <div className="todo-date">
                <div>{props.createdAt.slice(0,4)}</div>
                <div>{months[+props.createdAt.slice(5,7)-1]}{props.createdAt.slice(8,10)}</div>
                <div>{props.createdAt.slice(11,16)}</div>
            </div>
            <h2 className={props.status==true ? "finished-todo" : ""} onClick={finishTodo}>{props.todo}</h2>
            <input onClick={deleteTodo} type="button" value="Delete" className="todo-finished"></input>
        </div>
    )
}
export default TodoItem