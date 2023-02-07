import React, {useState} from 'react'
import './Login.css';

function Login() {
  
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className = "Login">
      <div className = "loginFrame">
        <input type="text" value={user} onChange = {e => setUser(e.target.value)}/>
        <input type="password" value={pass} onChange = {e => setPass(e.target.value)}/>
        <button onClick={() => {setUser(""); setPass("");}}>Log In</button>
      </div>
      <p>Ainda nao tem uma conta? <a href="#">Cadastre-se</a></p>
    </div>
  )
}

export default Login