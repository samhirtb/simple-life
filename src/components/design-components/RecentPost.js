import React, {useRef, useEffect} from 'react';
import '../../CSS/styles.css';
import {Link} from 'react-router-dom'

function RecentPost({post}) {
    const postContentRef = useRef()
    useEffect(() => {postContentRef.current.innerHTML = post.postPreviewContent}, [])

    return (
        <div className="container-post">
            <div className="col col-1 regular-post-col-1">
                <img className="regular-post-img" src={post.imgURL} alt="simple-life"></img>
                <p className="post-details regular-post-details-mobile">{post.date} | {`${post.numberOfComments} comment${post.numberOfComments !== 1 ? "s" : ""}`}</p>
            </div>
            <div className="col col-3 regular-post-col-2">
                <h1 className="post-title">{post.title}</h1>
                <p ref={postContentRef} className="post-content"></p>
                <Link to={`/recent-posts/${post.id}`} className="continue-reading">CONTINUE READING</Link>
            </div>
        </div>
    )
}

export default RecentPost;