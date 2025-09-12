import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error'
import Navbar from './components/student/Navbar'
import Home from './components/student/Home'
import MarkAttend from './components/student/MarkAttend'
import Ebook from './components/student/E-book'
import Quiz from './components/student/Quiz'
import Welcome from './components/Welcome'
import Login from './components/Login/Login'
import SignIn from './components/SignIn/SignIn'
import LoginStudent from './components/Login/LoginStudent'
import LoginTeacher from './components/Login/LoginTeacher'
import LoginAdmin from './components/Login/LoginAdmin'
import SignInStudent from './components/SignIn/SignInStudent'
import SignInTeacher from './components/SignIn/SignInTeacher'
import SignInAdmin from './components/SignIn/SignInAdmin'
import { useState } from 'react'
import Studentdashboard from './components/student/Student-dashboard'
import ProtectDashboard from './components/SignIn/ProtectDashboard'
import CameraCapture from './components/Selfie'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
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
        path: '/selfie',
        element:
        <div>
          <CameraCapture />
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
        path: '/login/loginAsStudent',
        element:
        <div>
          <LoginStudent/>
        </div>
      },

      {
        path: '/login/loginAsTeacher',
        element:
        <div>
          <LoginTeacher />
        </div>
      },

      {
        path: '/login/loginAsAdministrator',
        element:
        <div>
          <LoginAdmin />
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
        path: '/signin/signinAsStudent',
        element:
        <div>
          <SignInStudent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </div>
      },
      {
        path: '/signin/signinAsTeacher',
        element:
        <div>
          <SignInTeacher />
        </div>
      },
      {
        path: '/signin/signinAsAdmintrator',
        element:
        <div>
          <SignInAdmin />
        </div>
      },

      {
        path: '/student-dashboard',
        element:
        <ProtectDashboard isLoggedIn={isLoggedIn}>
          <Studentdashboard />
        </ProtectDashboard>
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
