import React ,{useState} from 'react';
import {AppBar, Box, Toolbar, Typography,Button , Tabs, Tab} from '@mui/material'
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import authActions from "./Auth"

const Header = () => {
    const dispath = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn)
    const [value, setValue] = useState();
  return (
      <AppBar position='sticky'
      sx={{background:'linear-gradient(90deg, rgba(46,103,162,1) 2%, rgba(182,84,173,0.9976365546218487) 36%, rgba(0,58,161,1) 73%, rgba(77,139,173,1) 100%)'}}>
          <Toolbar>
              <Typography variant='h4'>BlogsApp</Typography>
              {isLoggedIn && 
              <Box display="flex" marginLeft={"auto"} marginRight="auto" >
                  <Tabs textColor="inherit" value={value} onChange={(e,val) => setValue(val)}>
                    <Tab LinkComponent={Link} to='/blogs' label='All Blogs' />
                    <Tab LinkComponent={Link} to='/myBlogs' label='My Blogs' />
                    <Tab LinkComponent={Link} to='/blogs/add' label='Add Blogs' />
                  </Tabs>
              </Box>}
              
              <Box display='flex' marginLeft='auto'>
                  {!isLoggedIn && <> <Button LinkComponent={Link} to='/auth'  variant='contained' sx={{margin:1, borderRadius:10}} color='warning'>Login</Button>
                  <Button LinkComponent={Link} to='/auth'  variant='contained' sx={{margin:1, borderRadius:10}} color='warning'>Signup</Button> </>}
                  {isLoggedIn && <Button onClick={()=>dispath(authActions.logout())} LinkComponent={Link} to='/auth' variant='contained' sx={{margin:1, borderRadius:10}} color='warning'>Logout</Button>}
              </Box>
          </Toolbar>
      </AppBar>
  )
}

export default Header
