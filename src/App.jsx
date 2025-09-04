import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import MarkAttend from './components/MarkAttend'
import Ebook from './components/E-book'
import Quiz from './components/Quiz'
import Error from './components/Error'

function App() {
  
  const router = createBrowserRouter( 
    [
      {
        path: '*',
        element:
        <div>
          <Navbar />
          <Error />
        </div>
      },

      {
        path: '/',
        element:
        <div>
          <Navbar />
          <Home />
        </div>
      },

      {
        path: '/markAttendence',
        element:
        <div>
          <Navbar />
          <MarkAttend />
        </div>
      },

      {
        path: '/e-book',
        element:
        <div>
          <Navbar />
          <Ebook />
        </div>
      },

      {
        path: '/quiz',
        element:
        <div>
          <Navbar />
          <Quiz />
        </div>
      }
    ]
)

  return (
    <>
      <div >
        <RouterProvider router = {router}/>
      </div>
    </>
  )
}

export default App
