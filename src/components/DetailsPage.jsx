import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DetailsPage = () => {
    const {id}=useParams();
    // const [breweries , setBreweries] = useState([])
    const [brewery, setBrewery] = useState({})  //brewery is the object that we are going to use to display the details of the brewery
  
    const navigate= useNavigate();
   

    useEffect(() => {
        fetch(`https://api.openbrewerydb.org/breweries/${id}`)
        .then(response => response.json())
        .then(data => setBrewery(data))
    } ,[id])
    console.log(brewery);

    const handleNavigate = () => {
        navigate(`/`)
    }
  return (
    <Box sx={{height:"80vh",display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
        
        <Card sx={{ width:"500px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Name: {brewery.name}
        </Typography>
     
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Brewery Type: {brewery.brewery_type}
        </Typography>
        <Typography color="text.secondary">
           Street: {brewery.street}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Address: {brewery.city}, {brewery.state}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Country: {brewery.country}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            postal Code: {brewery.postal_code}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Phone: {brewery.phone}
        </Typography>
        <Typography variant="body2">
        longitude: {brewery.longitude}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            latitude: {brewery.latitude}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' onClick={handleNavigate}>Go Back</Button>
      </CardActions>
    </Card>
    </Box>
  )
}

export default DetailsPage