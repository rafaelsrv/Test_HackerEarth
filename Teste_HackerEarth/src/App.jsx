
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  
  
  const [clientData, setClientData] = useState([])
  let clientNames = []

  
   
  async function Search (){

    await fetch(url).then(resp => resp.json()).then(data =>
      setClientData(data))
      

  }

  useEffect(()=>{
    Search()

  },[])
  
  
  return (
    <div className="container">
      
        <ul>
          
          {clientData.map(client=><li>{client.name} - Username: {client.username}</li>)}

        </ul>
      
    </div>
  )
}

export default App
