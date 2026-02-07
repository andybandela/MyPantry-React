import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'

const App = () => {
  const [sidebar,setSidebar] = useState(true)
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Home sidebar={sidebar}/>
    </div>
  )
}

export default App