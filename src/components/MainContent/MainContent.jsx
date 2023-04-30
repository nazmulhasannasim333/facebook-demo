import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EditPost from '../EditPost/EditPost';
import Post from '../Post/Post';

const MainContent = () => {
    const posts = useLoaderData();

    return (
        <div>
            <div className='mx-5 pt-3'>
            <EditPost />
            </div>
            {
                posts.map(post => <Post key={post._id} post={post} />)
            }
        </div>
    );
};

export default MainContent;