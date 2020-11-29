import React, { useState, useEffect } from 'react';
import RecentPost from './design-components/RecentPost'
import postsData from '../Content/posts'
import '../CSS/styles.css';

function RecentPosts() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setPosts(postsData)
        setIsLoading(false)
    }, [])

    return (
        <React.Fragment>
        {
            !isLoading 
            ?
            <React.Fragment>
                {posts.map(post => <RecentPost key={post.id} post={post} />)}
            </React.Fragment>  
            :
            <div className="content-loading">Loading...</div>
        }
        </React.Fragment>  
    )
}

export default RecentPosts;