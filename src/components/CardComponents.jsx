import * as React from 'react';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const CardComponents = ({brewery}) => {
  return (
    <Grid item xs={6} md={4}>
          <Item>

              <Box sx={{p:4,textAlign:"left"}}>
              <Typography sx={{my:1}}>Name : {brewery.name}</Typography>
              <Typography sx={{my:1}}>Brewery Type:  {brewery.brewery_type}</Typography>
              <Typography>City :   {brewery.city}</Typography>
              </Box>
              <Link to={`${brewery.id}`} style={{textDecoration:"none"}}>   <Button sx={{width:"100%"}} variant="contained" >View Details</Button></Link>
          </Item>
 </Grid>
  )
}

export default CardComponents