import React, { useState, useEffect } from 'react';
import '../CSS/styles.css';
import FeaturePost from './design-components/FeaturePost'
import RecentPost from './design-components/RecentPost'
import postsData from '../Content/posts'

function Home() {
    const [featurePost, setFeaturePost] = useState()
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const [featured, ...other] = postsData;
        setFeaturePost(featured)
        setPosts(other)
        setIsLoading(false)
    }, [])

    return (
        <React.Fragment>
        {
            !isLoading 
            ?
            <React.Fragment>
                <FeaturePost post={featurePost} />
                <hr className="post-hr"/>
                {posts.map(post => <RecentPost key={post.id} post={post} />)}
            </React.Fragment>  
            :
            <div className="content-loading">Loading...</div>
        }
        </React.Fragment>  
    )
}

export default Home;