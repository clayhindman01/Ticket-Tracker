import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <div className="body-home">
        <div className="body-line"> 
            <ul className='home-list'>
                <li className="home-item">
                    Dashboard
                </li>
                <li className="home-item">
                    Bugs    
                </li>
            </ul>
        </div>
    </div>
  )
}
