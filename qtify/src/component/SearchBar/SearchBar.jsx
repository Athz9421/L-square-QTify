import React from 'react'
import { ReactComponent as SearchIcon}  from '../../Assets/SearchIcon.svg'
import styles from './search.module.css'
const SearchBar = ({placeholder}) => {
  return (
    <div>
      <form className={styles.wrapper}>
  <input className={styles.search} type="text" placeholder={placeholder} />
<button className={styles.searchButton} type='submit'><SearchIcon/></button>
      </form>
    </div>
  )
}

export default SearchBar
