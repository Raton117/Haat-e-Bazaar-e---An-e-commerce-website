import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import {Box,styled} from '@mui/material'
const PaddingBox= styled(Box)`
background:#cbddfb;
padding: 10px 10px;`
const Home = () => {
  return (
    <div>
        <Navbar/>
        <PaddingBox >
        <Banner/>
        </PaddingBox>
        
    </div>
  )
}

export default Home