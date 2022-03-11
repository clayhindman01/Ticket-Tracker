import React from 'react'
import "./Navbar.css"
import { FaHome } from 'react-icons/fa'
import { BsFillChatLeftTextFill } from 'react-icons/bs'

export default function Navbar() {
  return (
    <div className="body">
        <h1 className='ticket-tracker-title'>Ticket Tracker</h1>
        <ul className='navbar-list'>
            <li className='navbar-item'>
                <FaHome className="home-icon icon"/>
                Home
            </li>
            <a href="https://chat-app-five-chi.vercel.app/">
            <li className='navbar-item'>
                <BsFillChatLeftTextFill className="chat-icon icon"/>
                Chat
            </li>
            </a>
        </ul>
    </div>
  )
}
