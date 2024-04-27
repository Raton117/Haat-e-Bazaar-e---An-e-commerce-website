import React from 'react'
import {Dialog,Box,TextField,Typography, Button,styled} from '@mui/material' 
import haat from '../../Images/haat logo.jpg'
const Container = styled(Box)`
    height:70vh;
    width: 90vh;
`
const Image = styled(Box)`
      background:rgb(0, 0, 255, 0.6) url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') center 85% no-repeat;
      
      height: 100%;
      width: 38%;
`
const Wrapper = styled(Box)`
     display: flex;
     flex-direction: column;
     padding: 25px 35px;
     flex:1
  `
  
  const LoginButton = styled(Button)`
  text-transform: none;
  background: #FB641B;
  color: #fff;
  height: 48px;
  border-radius: 2px;
   
`

const RequestButton = styled(Button)`
text-transform: none;
background: #ffff;
color: rgb(0,0,255,0.7);
height: 48px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/20%)
 
`
const CreateAcc= styled(Typography)`
     color:rgb(0,0,255,0.7);
     cursor:pointer;
     text-align:center
`

const LoginDialog = ({open,setOpen}) => {
    const handleClose = () => {
        setOpen(false)
    }
  return (
    <Dialog open={open} onClose={handleClose}>
        <Container style={{display:'flex'}}>
            <Image>
              <Typography style={{color:'white',fontSize:'30px',marginLeft:'20px',marginTop:'20px'}}> Login </Typography>
                <Typography style={{color:'white',fontSize:'20px',marginLeft:'20px',marginTop:'20px'}}> Get access to your Orders, Wishlist and Recommendations </Typography>
            </Image>

            <Wrapper>
                <TextField variant='standard' label='Enter Email/Mobile number' style={{marginTop:'20px'}}/>
                <TextField variant='standard' label='Enter Password'/>
                
                <LoginButton  style={{ marginTop: '20px' }}> LOGIN </LoginButton>
                <Typography style={{ marginTop: '20px' }}> Forgot Password? </Typography>
                <RequestButton  style={{ marginTop: '10px' }}> Request OTP </RequestButton>
                <CreateAcc style={{ marginTop: '20px' }}> Don't have an account? Create Account</CreateAcc>
               

               
            </Wrapper>
        </Container>
    </Dialog>
  )
}

export default LoginDialog