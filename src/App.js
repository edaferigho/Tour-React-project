import './App.css';
import Loading from './Loading'
import { useState, useEffect } from 'react'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  function deleteTour(id) {
    setTours((tours) => {
      const newTours = tours.filter((tour) => {
        return tour.id !== id
      })
      return newTours
    })
  }
  
//This function fetches the data from the link
  const fetchData=async function(){
    const response = await fetch(url);
    const data = await response.json()
      setTours(data)
    setIsLoading(false)
    
  }
  // useEffect calls the fetchdata function to fetch the data on first render only
  useEffect(() => {
    fetchData()
  },[])
  if (isLoading) {
    return (<>
      <Loading />
    </>)
  }
  if (tours.length === 0) {
    return (
      <>
        <div className="title">
        <h2>No more Tour</h2>
          <button className="btn" onClick={()=>fetchData}>Refresh</button>
          </div>
      </>
    )
  }
  return (
    <div className="App">
      <Tours tours={tours} deleteTour={deleteTour} />
      {console.log(tours)}
    </div>
  );
}

export default App;
