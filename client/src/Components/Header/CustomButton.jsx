import React,{useState} from 'react'
import {Box,Button,Typography,styled} from '@mui/material'
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../Login/LoginDialog';

const OptionWrapper = styled(Box)`
    display: flex;
    &> button, &> p, &> div{
        margin-right:30px;

    }
`
const Container = styled(Box)`
    display: flex;
    
`
const LoginButton = styled(Button)`
    background: white;
    color: black;
    height: 30px;
    text-transform: none;
    border-radius: 2px;
` 
const CustomButton = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

  return (
    <OptionWrapper>
        <LoginButton variant='contained' style={{ marginLeft: '30px' }} onClick={handleOpen}> Login </LoginButton>
        <Typography style={{ marginTop:'3px', marginLeft: '10px', color: 'white' }}> Become a Seller </Typography>
        <Typography style={{ marginTop:'3px',marginLeft: '10px', color: 'white' }}> More </Typography>

        <Container>
            <ShoppingCart style={{ marginTop:'3px',color: 'white' }}/>
            <Typography style={{ marginTop:'3px', color: 'white' }}> Cart </Typography>
         </Container>  
         <LoginDialog open={open} setOpen={setOpen}/>
    </OptionWrapper>
  )
}

export default CustomButton