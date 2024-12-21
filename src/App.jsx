import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import HomePage from './Pages/HomePage'
import Movies from './Pages/Movies'
import NewReleases from './Pages/NewReleases'
import MyList from './Pages/MyList'

function App() {
  return (

  
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<Movies />} />
      
      <Route path="/newreleases" element={<NewReleases />} />
      <Route path="/mylist" element={<MyList />} />
   
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App