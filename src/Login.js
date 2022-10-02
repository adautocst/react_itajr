import React from 'react'
import './Login.css';

function Login() {
  return (
    <div className = "Login">
      <img
        src="http://www.aeitaonline.com.br/wiki/images/thumb/7/76/ITA_J%C3%BAnior.jpg/700px-ITA_J%C3%BAnior.jpg"
        alt="logo ita jr"
      />
      <div class="loginFrame">
        <input type="text" placeholder="Usuário" />
        <input
          type="password"
          placeholder="Senha"
          name="Senha"
          id="loginPassword"
        />
        <button>Log In</button>
      </div>
      <p>Ainda nao tem uma conta? <a href="#">Cadastre-se</a></p>
    </div>
  )
}

export default Login