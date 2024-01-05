
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  
  
  const [clientData, setClientData] = useState([])
  const [searchData, setSearchData] = useState('')

 

  
   
  async function Search (){

    await fetch(url).then(resp => resp.json()).then(data =>
      setClientData(data))
      

  }

  useEffect(()=>{
    Search()

  },[])
  console.log(searchData)
 


  
  
  return (
    <div className="container">
      
        <div className='tables'>    
          <div >
            <h1 style={{textAlign: 'center'}}>Name</h1>
            <table className="name">{clientData.map(client=><tr key ={client.id}>{(client.name.toLowerCase()).includes(searchData)? (client.name) : <tr></tr>}</tr>)}</table>
          </div>

          <div>
            <h1 style={{textAlign: 'center'}}>Username</h1>
            <table className="username">{clientData.map(client=><tr key = {client.id}> {(client.username.toLowerCase()).includes(searchData)? (client.username) : <tr></tr>} </tr>)}</table>
          </div>
          
          <div>
            <h1 style={{textAlign: 'center'}}>Email</h1>
            <table className="email">{clientData.map(client=><tr key ={client.id}>{(client.email.toLowerCase()).includes(searchData)? (client.email): <tr></tr>}</tr>)}</table>
          </div>
        </div> 
        <input type="text" className='searchInput' placeholder='Buscar...'  onChange={((e)=>setSearchData((e.target.value).toLowerCase()))} />
    </div>


  )
}

export default App
//<div className="username">{clientData.map(client=><li>{client.username}</li>)}</div>
//<div className="email">{clientData.map(client=><li>{client.email}</li>)}</div>
