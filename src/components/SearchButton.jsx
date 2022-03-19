import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const SearchButton = ({handleText,handleSearch}) => {

  return (
   <Box sx={{my:2,display:"flex",justifyContent: 'center'}}>
        <TextField sx={{width:"70%"}}  id="standard-basic" onChange={handleText} label="search" variant="standard" />
        <Button  onClick={handleSearch} variant="contained">Search</Button>
   </Box>
  )
}

export default SearchButton