import React from 'react'
import { InputBase,Box ,styled} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
const StyledInputBase = styled(Box)`
  background: white;
  border-radius: 2px;
  width: 45%;
  height: 30px;
  margin-left: 20px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  font-size:unset;

  `
const Search = () => {
  return (
    <StyledInputBase>
     <InputBase placeholder="Search for products, brands and more" style={{width: '100%'}}/>
     <Box>
      <SearchIcon style={{color: 'grey',padding:'5px'}}/>
     </Box>
    </StyledInputBase>
  
  )
}

export default Search