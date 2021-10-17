import './TodoList.css'
import TodoItem from './todoItems/TodoItem.js'
import React, {useState} from 'react'

const TodoList = props =>{

    const up_func2 = function(x){
        props.up_func(x)
    }

    return(
        <div className="todo-list">
            <div className="todo-inner">
                {props.data.map((items,i)=>{
                    return <TodoItem 
                    id={items._id}
                    key={i}
                    todo={items.todo} 
                    status={items.completed}
                    createdAt={items.createdAt}
                    up_func={up_func2}
                    />
                })}
            </div>
        </div>
    )
}
export default TodoList