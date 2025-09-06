import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error'
import Navbar from './components/student/Navbar'
import Home from './components/student/Home'
import MarkAttend from './components/student/MarkAttend'
import Ebook from './components/student/E-book'
import Quiz from './components/student/Quiz'
import Welcome from './components/Welcome'
import Login from './components/Login'
import SignIn from './components/SignIn'

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
          <Welcome />
        </div>
      },

      {
        path: '/login',
        element:
        <div>
          <Login />
        </div>
      },

      {
        path: '/signin',
        element:
        <div>
          <SignIn />
        </div>
      },

      {
        path: '/student',
        element:
        <div>
          <Navbar />
          <Home />
        </div>
      },

      {
        path: '/student/markAttendence',
        element:
        <div>
          <Navbar />
          <MarkAttend />
        </div>
      },

      {
        path: '/student/e-book',
        element:
        <div>
          <Navbar />
          <Ebook />
        </div>
      },

      {
        path: '/student/quiz',
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
