import React from 'react'
import {Box,Button,Typography,styled} from '@mui/material'
import { navData } from '../../Constants/data'

const OptionWrapper = styled(Box)`
    margin-left: 200px;
    margin-top: 40px;
    margin-right: 200px;
    display: flex;
    &> button, &> p, &> div{
        margin-right:30px;

    }
`
const Navbar = () => {
  return (
    <OptionWrapper>
        {
            navData.map(data=>(
                <Box>
                  <img src={data.url} alt={data.text} style={{width:'100px',height:'100px'}}/>
                    <Typography style={{marginLeft:'10px'}}>{data.text}</Typography>
                </Box>
            ))
        }
    </OptionWrapper>
  )
}

export default Navbar