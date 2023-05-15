import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EditPost from '../EditPost/EditPost';
import Post from '../Post/Post';
import StorySlider from '../StorySlider/StorySlider';

const MainContent = () => {
    const posts = useLoaderData();
    const [sortPosts, setssortPosts] =useState(posts)

    
    // const sortData = [...sortPosts].sort((a, b) => new Date(a.author.published_date) - new Date(b.author.published_date));

    // let sortData = sortPosts.sort((a, b) => new Date(...a.author.published_date.split('/').reverse()) - new Date(...b.author.published_date.split('/').reverse()));


    // let sortData = posts.sort((a, b) => Date.parse(new Date(a.author.published_date.split("/").reverse().join("-"))) - Date.parse(new Date(b.author.published_date.split("/").reverse().join("-"))));
    
    
    // console.log(sortData);
    console.log(sortPosts);
 

    return (
        <div>
            <div className='mx-5 pt-3'>
            <StorySlider />
            </div>
            <div className='mx-5 pt-3'>
            <EditPost />
            </div>
            {
                sortPosts.map(post => <Post key={post._id} post={post} />)
            }
        </div>
    );
};

export default MainContent;