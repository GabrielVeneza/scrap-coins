import './App.css'
import { useEffect, useState } from 'react';

async function App() {

  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('http://localhost:3000/scrap')
        const result = await response.json()
        setData(result.dolarhoje)
      } catch (error){
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if(loading){
    return <div>Loading...</div>
  }
  

  return (
    <>
      <div>
            <h1>Moedas Hoje</h1>
            <hr />
            <h2>Dolar hoje: R${data}</h2>
            <h2>Euro hoje: R$</h2>
            <h2>Bitcoin hoje: R$</h2>
        </div>
    </>
  )
}

export default App
