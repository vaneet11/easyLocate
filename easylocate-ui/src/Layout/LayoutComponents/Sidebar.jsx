import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import menuJson from './sidebarMenu.json'
export default function Sidebar() {
  let activeItem = "home"

  const handleActiveItem = (key, route) => {
    activeItem = key
  }
  return (
    <div className='sidebar'>
      <div className='sidebarHeading'>
        <h3>Easy Locate</h3>
      </div>
      <div className='sidebarLinks-container'>
        <div className='sidebarLinks'>
          {menuJson && menuJson.map((item, index) => (
            <h5 className={`sidebarItems  ${item.key == activeItem ? 'linkActive' : ""}`} key={`sidebar_${item.id}_${index}`} onClick={() => handleActiveItem(item.key, item.route)}>
              <span>{item.displayName}</span>
            </h5>
          ))}
        </div>
      </div>
      <div className='sidebarLinks-container content-bottom'>
        <div className='mt-3 sidebarLinks'>
          <p className='sidebarItems logout' onClick={() => localStorage.removeItem('token')}>
            <span>
              Logout
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
