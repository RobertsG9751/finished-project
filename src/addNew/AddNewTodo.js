import './AddNewTodo.css'
import React, {useState} from 'react'
const AddNewTodo = props => {

    const [newTodoState, setNewTodoState] = useState("")
    const newTodo = async function(){
        fetch(`https://skolas-api.herokuapp.com/api/todos`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',                                                              
            body: JSON.stringify( { todo: newTodoState } )                                        
        })
        setNewTodoState("")
        props.up_func(1)
    }
    const textChange = function(event){
        setNewTodoState(event.target.value)
    }

    return(
        <div className="add-div">
            <input type="text" value={newTodoState} onChange={textChange} placeholder="New todo name" className="create-inpt"></input>
            <input type="button" value="Create" className="create-btn" onClick={newTodo}></input>
        </div>
    )
}
export default AddNewTodo