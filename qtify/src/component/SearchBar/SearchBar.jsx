import React from 'react'
import { ReactComponent as SearchIcon}  from '../../Assets/SearchIcon.svg'
import styles from './search.module.css'
import { Autocomplete,TextField } from '@mui/material'

const SearchBar = ({placeholder,data}) => {
  return (
    <div>
      <form className={styles.wrapper}>
  {/* <input className={styles.search} type="text" placeholder={placeholder} /> */}
  <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable


        options={data.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={placeholder}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />


<button className={styles.searchButton} type='submit'><SearchIcon/></button>
      </form>
    </div>
  )
}

export default SearchBar
