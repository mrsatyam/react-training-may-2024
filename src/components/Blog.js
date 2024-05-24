import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../css/Blog.css';




const Blog = () => {
   const {postId} = useParams();
    const blogPosts = [
         'The Best Burgers in Town.. Here are some amazing burger recipes...',
         'Healthy Wraps for Lunch... Wraps are a great option for a healthy lunch...'
     ];
   return (
      <div>
          <div className="inline-container">
             <h1> Blog  </h1>
             <p> by Satyam </p>
          </div>
          <ul>
                 <li>
                   <Link to="/blog/1">Why should you choose our Burgers (Click here to find out)</Link>
                 </li>
                 <li>
                   <Link to="/blog/2">Did you know this about wraps? (Click here to find out)</Link>
                 </li>
          </ul>
          {  postId && (
                <div>
                  <h2>Blog Post</h2>
                  <p>{blogPosts[postId - 1]}</p>
                </div>)
          }

      </div>
   )

}


export default Blog;