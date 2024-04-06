import { useState } from 'react'
import './App.css'
import {configureWeb3Modal} from './connection/index'
import useDetails from './hooks/useDetails'
import useGetDetails from './hooks/useGetDetails'

configureWeb3Modal()
function App() {
  const [Name,setName] = useState("teejay")
  const [Age, setAge] = useState(0)
  const [Sex, setSex] = useState("")
  
  const handleDetails = useDetails(Name,Age,Sex)

  const details = useGetDetails()

  const handleSubmit =(e)=>{
    e.preventDefault();
    handleDetails()
  }
  return (

    <>
      <div>
       <w3m-button />

       <form onSubmit={handleSubmit} >
          <input type="text"  value={Name} onChange = {(e)=>setName(e.target.value)}/>
          <input type="number" value={Age}onChange = {(e)=>setAge(e.target.value)} />
          <input type="text" value={Sex} onChange = {(e)=>setSex(e.target.value)}/>
          <button >set</button>
       </form>


      <div>
          {details ? (
            details.map((item, index) => (
              <div key={index}>
                <h3>name : {item.name}</h3>
                <h3>age : {Number(item.age)}</h3>
                <h3>sex : {item.sex}</h3>
              </div>
            ))
          ) : (
            <p>no detail found</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App
