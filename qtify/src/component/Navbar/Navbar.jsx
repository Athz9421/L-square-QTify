import React from 'react'
import Button from '../button/Button'
import Logo from '../Logo/Logo'
import style from './navbar.module.css'
import SearchBar from '../SearchBar/SearchBar'


const Navbar = () => {
  return (
<nav className={style.navbar}> 
  <Logo/>
<SearchBar placeholder="Search a album of your choice"/>
<Button childern="Give Feedback"/>
</nav>
  )
}

export default Navbar
