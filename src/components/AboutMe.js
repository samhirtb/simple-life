import React from 'react';
import '../CSS/styles.css';

function AboutMe() {
    return (
        <div className="about">
            <img className="aboutme-img" src="/images/about-me.jpg" alt="The simple me"></img>
            <h1 className="about-title">My name is John and living the simple life saved my life</h1>
            <p><strong>I used to be a pack rat.</strong> I had so many things that I thought that I loved, 
                but the truth was I couldn't even appreciate any of it because there was too much.</p>
            <p>Things were terrible. I had a job that I hated, a home that I didn't want to live in, 
                and I couldn't hold a relationship.</p>
            <h2 className="about-subtitle">How I turned things around</h2>
            <p><strong>I was on the verge of a breakdown when I got rid of everything.</strong> I literally put 90% of my 
                possessions in the garbage, sold my place and moved into a smaller apartment, and I quit my job. 
                </p>
            <p>It wasn't easy at all, but everything around me was in such a bad place, I didn't know what else 
                to do. And it worked.</p>

            <h2 className="about-subtitle">Now I live the simple life</h2>
            <p>Now that I'm living a simple life, things are so much better. I'm less stressed, 
                enjoy life and work more, and I have more free time to enjoy.</p>
            <p>With how much it turned my life around, <strong>I felt like I had no choice but to start sharing how I did it</strong>,
                 and how others can benefit from living a simple life as well, which is why I started this site!</p>
        </div>
    )
}

export default AboutMe;