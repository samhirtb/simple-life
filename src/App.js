import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom'
import './CSS/styles.css';

import Sidebar from './components/Sidebar'
import Home from './components/Home.js'
import AboutMe from './components/AboutMe.js'
import RecentPosts from './components/RecentPosts.js'
import Navbar from './components/design-components/Navbar.js'

import ScrollToTop from './components/control-components/ScrollToTop.js'
import NotFound from './components/control-components/NotFound.js'

import {switchTheme} from './switchTheme.js'

import Post from './components/Post.js'

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    switchTheme(theme)
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <div className="App">
      <header>
        <div className="container container-nav">
            <div className="site-title">
                <h1>Living the simple life</h1>
                <p className="subtitle">A BLOG EXPLORING MINIMALISM IN LIFE</p>
            </div>
            <Navbar toggleTheme={toggleTheme} />
        </div> {/* .container --*/}
      </header>
        
      <main role="main" className="container container-content">
        <div className="col col-3">
          <ScrollToTop />
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route exact path="/about-me"> <AboutMe /> </Route>
            <Route exact path="/recent-posts"> <RecentPosts /> </Route>
            <Route path="/recent-posts/:id"> <Post /> </Route>
            <Route path="/content-not-found"> <NotFound /> </Route>
          </Switch>
        </div> {/* /col-3 */}
        <div className="col col-1">
          <Sidebar />
        </div>  
      </main> {/* /continer */}
      {/* <div> <main> <article></article> </main> <aside></aside>  </div> */}
      
      <footer>
        <div className="container-footer">
          <p className="footer-title">Living the Simple Life</p>
          <p className="footer-subtitle">Copyright 2020</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
