import React, { useState, useEffect, useRef } from 'react';
import { useParams, Redirect } from 'react-router-dom'
import '../CSS/styles.css';
import postsData from '../Content/posts'

function Post() {
    const [post, setPost] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const postContentRef = useRef()
    const { id } = useParams();

    useEffect(() => {
        const selectPost = postsData.find(post => post.id == id);
        setPost(selectPost)
        setIsLoading(false)
    }, [])

    useEffect(() => {
        setIsLoading(true)
        const selectPost = postsData.find(post => post.id == id);
        setPost(selectPost)
        setIsLoading(false)
    }, [id])

    useEffect(() => {
        if(post !== undefined)
            postContentRef.current.innerHTML = post.postContent
    }, [post])

    return (
        <React.Fragment>
        {
            !isLoading 
            ?
                post !== undefined
                ?
                <div className="post">
                    <h1 className="post-title post-detail-title">{post.title}</h1>
                    <img className="post-img" src={post.imgURL} alt="simple-life"></img>
                    <p className="post-details">{post.date} | {`${post.numberOfComments} comment${post.numberOfComments !== 1 && "s"}`}</p>
                    <p ref={postContentRef} className="post-content"></p>
                </div>
                :
                <Redirect to="/content-not-found" />
            :
            <div className="content-loading">Loading...</div>
        }
        </React.Fragment>  
    )
}

export default Post;