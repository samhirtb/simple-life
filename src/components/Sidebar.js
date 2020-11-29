import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import '../CSS/styles.css';
import AboutMeHome from './design-components/AboutMeHome'
import RecentPostsHome from './design-components/RecentPostsHome'

import postsData from '../Content/posts'


function Sidebar() {
    const { pathname } = useLocation();
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    console.log(pathname)

    useEffect(() => {
        const [, ...other] = postsData;
        setPosts(other)
        setIsLoading(false)
    }, [])

    return (
        <React.Fragment>
            {
                !isLoading 
                ?
                <React.Fragment>
                    {pathname !== "/about-me" ? <AboutMeHome />  : null}
                    {pathname !== "/recent-posts" ? <RecentPostsHome posts={posts} />  : null}
                </React.Fragment>
                :
                <div className="content-loading">Loading...</div>
            }
        </React.Fragment>
    )
}

export default Sidebar;