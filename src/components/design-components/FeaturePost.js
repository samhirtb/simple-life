import React, {useRef, useEffect} from 'react';
import '../../CSS/styles.css';
import {Link} from 'react-router-dom'

function FeaturePost({post}) {
    const postContentRef = useRef()
    useEffect(() => {postContentRef.current.innerHTML = post.postPreviewContent}, [])

    return (
        <div className="post">
            <img className="feature-post-img" src={post.imgURL} alt="simple-life"></img>
            <p className="post-details">{post.date} | {`${post.numberOfComments} comment${post.numberOfComments !== 0 && "s"}`}</p>
            <h1 className="post-title">{post.title}</h1>
            <p ref={postContentRef} className="post-content"></p>
            <Link to={`/recent-posts/${post.id}`} className="continue-reading">CONTINUE READING</Link>
        </div>
    )
}

export default FeaturePost;

// The render props way of doing post
{/* 
    <Post post={post}>
        {(post, postContentRef) => {
            return (
                <div className="post">
                    <img className="feature-post-img" src={post.imgURL} alt="simple-life"></img>
                    <p className="post-details">{post.date} | {`${post.numberOfComments} comment${post.numberOfComments !== 0 && "s"}`}</p>
                    <h1 className="post-title">{post.title}</h1>
                    <p ref={postContentRef} className="post-content"></p>
                    <Link to="/" className="continue-reading">CONTINUE READING</Link>
                </div>
            )
        }}
<   /Post> 
*/}