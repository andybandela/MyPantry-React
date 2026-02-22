import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Feed from './Pages/Feed/Feed'
import Explore from './Pages/Explore/Explore'
import Inventory from './Pages/Inventory/Inventory'
import Recipe from './Pages/Recipe/Recipe'
import AddRecipe from './Pages/Add_Recipe/AddRecipe'
import Profile from './Pages/Profile/Profile'

const router = createBrowserRouter([
  {path: '/',
    //Rootlayout for all pages
    element: <Home/>,
    children:[
      {index:true, element:<Feed/>},
      {path:'explore', element:<Explore/>},
      {path:'inventory',element:<Inventory/>},
      {path:'recipe',element:<Recipe/>},
      {path:'recipe/add', element:<AddRecipe/>},
      {path:'profile', element:<Profile/>}
    ]
  }
])

const App = () => {
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App