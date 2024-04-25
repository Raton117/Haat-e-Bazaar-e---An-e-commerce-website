import React from 'react'
import {AppBar,Toolbar,styled,Box, StyledEngineProvider} from '@mui/material'
import logo from '../../Images/haat logo.jpg'
import Search from './Search';
import CustomButton from './CustomButton';
const StyledHeader = styled(AppBar)`
  background: #f46607;
  height: 59px;
  
`
const Component = styled('Box')`
   margin-left: 10%;
`

const Header = () => {
  return (
       <StyledHeader>
        <Toolbar>
          <Component>
           <img src={logo} alt="logo" style={{width: 95}} height={57}/>
          </Component>
          <Search/>
          <CustomButton/>
        </Toolbar>
        </StyledHeader>
  )
}

export default Header