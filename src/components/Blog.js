import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography ,Box , IconButton} from '@mui/material'
//import { red } from '@mui/material/colors'
import React from 'react'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { API_URL } from '../globalconstant';

const Blog = ({title, description,imageURL,userName, isUser,id}) => {
  const navigate = useNavigate();
  const handleEdit = (e) => {
    navigate(`/myBlogs/${id}`)
  };

  const deleteRequest = async () => {
    const res = await axios.delete(`${API_URL}/api/blog/${id}`).catch(err=>console.log(err));
    const data = await res.data;
    return data
  }
  const handleDelete = () => {
    deleteRequest().then(() => navigate("/")).then(()=>navigate("/blogs"));
  };

  return (
    <div> 
    <Card sx={{ width: "40%", margin:'auto', mt:2 ,padding:2, boxShadow:"5px 5px 10px #ccc", ":hover:":{boxShadow :"10px 10px 10px #ccc"} }}>

      {isUser && (
        <Box display='flex'>
          <IconButton onClick={handleEdit} sx={{ marginLeft:"auto"}} ><ModeEditOutlineIcon color="warning" /></IconButton>
          <IconButton onClick={handleDelete} ><DeleteForeverIcon color="error" /></IconButton>
        </Box>
      )}

    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe"> 
          {userName ? userName.charAt(0) : ""}   
        </Avatar>
      }                               //{userName.charAt(0)} --> line12
      
      title={title}
    />
    <CardMedia
      component="img"
      height="194"
      image={imageURL}
      alt="Paella dish"
    />
    <CardContent>
    <hr/>
    <br />
      <Typography variant="body2" color="text.secondary">
        <b>{userName}</b> {": "} {description}
      </Typography>
    </CardContent>
    
  </Card></div>
  )
}

export default Blog