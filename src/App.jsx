import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchMovieForm from './SearchMovieForm/SearchMovieForm'
function App() {
 
 
  const [searchTerm, setSearchTerm] = useState('caddyshack');
 const [movie, setMovie] = useState({})
 
 


 function getMovieSearch(movieTitle){
  setSearchTerm(movieTitle)
 }
// we want to make a http request to omdb api when our componet loads and is mounted on the DOM!
useEffect(() => {

 
 const omdbUrl = `http://www.omdbapi.com/?apikey=5e388ef2&t=${searchTerm}`
 
 async function getMovieInfo(){


  try {
   const apiResponse = await fetch(omdbUrl);


   const data = await apiResponse.json();
   console.log(data)
  
setMovie(data)
} catch(err){
    console.log(err, ' error from api call')
  }
 

}


getMovieInfo();


}, []) // an empty dependency array, says run the use effects
//once when the componet loads


  return (
    <>
     <SearchMovieForm getMovieSearch={getMovieSearch}/>
     <p>The user is searching for {searchTerm}</p>
    </>
  )
}

export default App
