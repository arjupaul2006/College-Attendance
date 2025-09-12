import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectDashboard = ({ children, isLoggedIn }) => {


  if(!isLoggedIn){
    return <Navigate to='/signin' replace />
  }
  return children
}

export default ProtectDashboard
