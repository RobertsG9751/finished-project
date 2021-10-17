import './SearchBar.css'
import React, {useState} from 'react'
const SearchBar = props => {

   // const [searchState, setSearchState] = useState("")
    const searchChange = function(event){
        const value = event.target.value
        props.up_func2(value)
        //setSearchState(value)
    }
    return(
        <div className="search-bar-div">
            <input onChange={searchChange} type="text" className="search-inpt" placeholder="Search for a Todo"></input>
        </div>
    )
}
export default SearchBar