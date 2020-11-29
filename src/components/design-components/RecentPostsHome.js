import React from 'react';
import '../../CSS/styles.css';
import {Link} from 'react-router-dom'

function RecentPostsHome({posts}) {
    return (
        <div className = "home-sidebar-container">
            <div className="home-sidebar-inner-container">
                <h2 className="home-sidebar-title">Recent posts</h2>
                {posts.map(post => <RecentPostSideBar key={post.id} post={post} />)}
            </div>
        </div>
    )
}

function RecentPostSideBar({post}) {
    return (
        <Link to={`/recent-posts/${post.id}`} className="recentpost-home-sidebar-link">
            <div className="recentpost-home-sidebar-container">
                <img className="recentpost-home-sidebar-img" src={post.imgURL} alt="simple-life" />
                <h1 className="recentpost-home-sidebar-title">{post.title}</h1>
            </div>
        </Link>
    )
}

export default RecentPostsHome;