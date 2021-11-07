import './Login.css'
const Login = (props) => {
    const checkForAccount = async () => {
        const emailInpt = document.querySelector("#email").value
        const passInpt = document.querySelector("#pass").value
        if(emailInpt=="" || passInpt=="") return alert("Please enter email and/or password")
        const rawResponse = await fetch('https://school-project-v2-jt.herokuapp.com/users/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({"email": emailInpt, "password": passInpt})
        })
        const errorMessage = document.querySelector(".error")
        if(rawResponse.status == 404) {
            errorMessage.style.display = 'inline'
            return new Error
        }else{
            const data = await rawResponse.json()
            errorMessage.style.display = 'none'
            reqData(data.token)
            localStorage.setItem("user", data.data.user.name);
            localStorage.setItem("token", data.token);
        }
    }
    const reqData = async (token) => {
        const rawResponse2 = await fetch('https://school-project-v2-jt.herokuapp.com/todos',{
            method: 'GET',
            headers: new Headers({
                'Authorization': `Bearer ${token}`
              })
        })
        const data2 = await rawResponse2.json()
        document.querySelector('.login-screen').style.display = "none"
        props.up_func3(data2)
    }

    return(
        <div className="login-screen">
            <h1>Log in</h1>
            <input id="email" className="login-inpt" type="text" placeholder="email@domain.com"></input>
            <input id="pass" className="login-inpt" type="password" placeholder="password"></input>
            <input className="login-btn" type="submit" value="Log in" onClick={checkForAccount}></input>
            <h1 className="error">There was an error! Try again!</h1>
        </div>
    )
}
export default Login