import React, {useState} from 'react'

function Home() {
  const [money, setMoney] = useState(0);

  return (
    <div className='Home'>
      <h1>Deixe a JR mais rica</h1>
      <h2>R$ {money}</h2>
      <button onClick={() => {setMoney(money + 1)}}>DOAR</button><br/>
      <button onClick={() => {setMoney(0)}}>REEMBOLSO</button>
    </div>
  )
}

export default Home