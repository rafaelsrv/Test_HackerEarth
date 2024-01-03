
import './App.css'

function App() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  
  let ids = []

  async function Search (){
   
   await fetch(url).then(resp => resp.json()).then(
    names => names.map((data)=> {ids.push(data.name)}))
    console.log(ids)
  
  }  
  
  Search()
  
  return (
    <div className="container"><p>Hello World</p></div>
  )
}

export default App
