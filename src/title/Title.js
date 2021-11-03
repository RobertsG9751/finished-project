import './Title.css'
const Title = props => {
    return(
        <div className="title-div">
            <h1>Hello, {localStorage.getItem("user")}!</h1>
        </div>
    )
}
export default Title