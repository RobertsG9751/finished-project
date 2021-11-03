import './App.css';
import Title from './title/Title.js'
import SearchBar from './searchBar/SearchBar.js'
import AddNewTodo from './addNew/AddNewTodo.js'
import TodoList from './todoList/TodoList.js'
import Login from './login/Login.js'
import React, {useState} from 'react'

function App() {
  let searchArray = [] 
  let newArray = []
  const [dataArr, setDataArr] = useState([])
  const [username, setUsername] = useState("no username")
  const [dataState, setDataState] = useState([{todo: "no data", createdAt: "2021-10-15T19:54:16.999Z", completed: "", _id: "6169dc6832e9bb93c88d4007"}])

  const up_func3 = function(t3){
    setDataState(t3.data)
    setDataArr(t3.data)
  }
  const reset = function(data){
    setDataState(data)
  }

  const up_func2 = function(value){
    newArray = []
    searchArray = []
    dataArr.forEach((element,i)=>{
      if(element.todo.includes(value.toLowerCase())){
        newArray[i] = element
        searchArray = newArray.filter(a=>a)
      }
    })
    reset(searchArray)
  }
  
  return (
    <div className="App">
      <Login up_func3={up_func3}/>
      <Title/>
      <SearchBar up_func2={up_func2}/>
      <AddNewTodo up_func={up_func3} />
      <TodoList data={dataState} up_func={up_func3}/>
    </div>
  );
}

export default App;
