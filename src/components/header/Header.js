import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
const logo = (
  <div className='styles.logo'>
    <Link to='/'>
   <h2 >lizdev<span>mall</span> </h2>
  </Link>
  </div>
  
)

  return (
    <div>
      <header>
       {logo}
       <nav>
        <ul>

        </ul>
        <div>
          
        </div>
       </nav>

      </header>
    </div>
  )
}

export default Header