import { Box, Container, Typography,Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardComponents from './CardComponents'
import SearchButton from './SearchButton'

const Home = () => {
    const [breweries,setBreweries]=useState([])
    const [search,setSearch]=useState("")
     useEffect( () => {
        fetch('https://api.openbrewerydb.org/breweries')
        .then(response => response.json())
        .then(data => setBreweries(data))
    }, [])
     console.log(breweries);
     const handleText=e=>{
            setSearch(e.target.value)
     }
     const handleSearch=event=>{
            event.preventDefault();
        const matched = breweries.filter(brewery=>brewery.name.toLowerCase().includes(search.toLowerCase()))
        setBreweries(matched)
        console.log(matched.length)
    }
    console.log(search);
  return (
    <Box>
       <Container>
           <SearchButton handleSearch={handleSearch} handleText={handleText}/>

           <Box sx={{flexGrow:1}}>
                    <Grid container spacing={2}>
                            {
                                breweries.map(brewery => 
                                    <CardComponents
                                    
                                     key={brewery.id}
                                     brewery={brewery}
                                    ></CardComponents>
                                )
                            }
                    </Grid>
           </Box>

       </Container>
    </Box>
  )
}

export default Home