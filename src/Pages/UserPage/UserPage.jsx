import React from 'react'
import './UserPage.css'
import Navbar from './Navbar/Navbar'
import LoginForm from './LoginForm/LoginForm'
import InfoSection from './InfoSection/InfoSection'
export default function UserPage() {
  return (
    <div>
        <Navbar/>
        <div className="flex">
            <LoginForm/>
            <InfoSection/>
        </div>
    </div>
  )
}
