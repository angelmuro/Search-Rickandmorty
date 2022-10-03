import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResidents from './components/CardResidents'
import ErrorScreen from './components/ErrorScreen'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from "./utils/getRandonNumber"

function App() {

  // para guaradar una locacion
  const [location, setLocation] = useState()
  // para guardar la informacion del input y hacer
  const [searchImput, setSearchImput] = useState()

  const [suggestedList, setSuggestedList] = useState()

  const [hasError, setHasError] = useState(false)

  console.log(searchImput)
 
  useEffect(() => {
    let id = getRandomNumber() 
    if(searchImput) {
      id = searchImput 
    }

    const URL =`https://rickandmortyapi.com/api/location/${id}`
  
    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)
        })
      .catch(err => setHasError(true))  
  }, [searchImput])
  
  const handleSubmit = event => {
    event.preventDefault()
    setSearchImput(event.target.idLocation.value)
  }

  const handleChange = event => {

    if(event.target.value == "") {
      suggestedList()
    }else {
    const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

    axios.get(URL)
      .then(res => setSuggestedList(res.data.results))
      .catch(err => console.log(err))
  }
  }

  return (
    <div className="App">     
       <img className='app_img' src="./image/rick-morty.jpg" alt="" />
       <form className='app_search' onSubmit={handleSubmit}>
         <input className='app_input'
           id='idLocation'
           placeholder="Enter another number from 1 to 126" 
           type="text"
           onChange={handleChange}
           />                 
         <FilterList 
            suggestedList = {suggestedList}
            setSearchImput = {setSearchImput}
         />
        
       </form>
       <br />
       {
         hasError ?
         <ErrorScreen />
         :
          <>
           <LocationInfo location={location} />
            <div className='card-container'>
            {
             location?.residents.map(url => (
              <CardResidents 
                key={url}
                url={url}
              />
              ) )
            }
            </div>
          </>
       }
       
       
    </div>
  )
}

export default App
