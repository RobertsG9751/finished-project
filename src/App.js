import './App.css';
import Title from './title/Title.js'
import SearchBar from './searchBar/SearchBar.js'
import AddNewTodo from './addNew/AddNewTodo.js'
import TodoList from './todoList/TodoList.js'
import React, {useState} from 'react'

function App() {
  let searchArray = []
  let newArray = []
  const [checkNum, setCheckNum] = useState(0)
  const [dataState, setDataState] = useState([{todo: "no data", createdAt: "2021-10-15T19:54:16.999Z", completed: "", _id: "6169dc6832e9bb93c88d4007"}])
  const dataFunc = async function(){
    fetch("https://skolas-api.herokuapp.com/api/todos")
    .then(res => res.json())
    .then(data=> setDataState(data))
    setCheckNum(1)
  } 
  if(checkNum == 0){
    console.log("function running")
    dataFunc()
  }
  const passUpFunc2 = function(t2){
    setCheckNum(0)
  }
  const up_func2 = function(value){
    if(value=="") {dataFunc()}
    fetch("https://skolas-api.herokuapp.com/api/todos")
    .then(res => res.json())
    .then(data=> {
      if(value!=""){
      for(let i=0; i<data.length; i++){
        if(data[i].todo.includes(value)){
          searchArray[i] = data[i]
          newArray = searchArray.filter(a=>a)
        }
      }
      searchArray = []
      setDataState(newArray)
    }})
  }
  

  return (
    <div className="App">
      <Title/>
      <SearchBar up_func2={up_func2}/>
      <AddNewTodo up_func={passUpFunc2} />
      <TodoList data={dataState} up_func={passUpFunc2}/>
    </div>
  );
}

export default App;
