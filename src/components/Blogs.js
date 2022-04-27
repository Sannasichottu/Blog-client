import React, { useEffect, useState,  } from 'react';
import axios from "axios";
import Blog from './Blog';
import { API_URL } from '../globalconstant';

const Blogs = () => {
  const [blogs,setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios.get(`${API_URL}/api/blog`).catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    sendRequest().then(data => setBlogs(data.blogs));
  }, []);
  console.log(blogs);
  return (
    <div>
      {blogs && blogs.map((blog,index) => <Blog id={blog._id} isUser={localStorage.getItem("userid")===blog.user._id} title={blog.title} description={blog.description} imageURL={blog.image} userName={blog.userName} />)}
    </div>
  )
}

export default Blogs