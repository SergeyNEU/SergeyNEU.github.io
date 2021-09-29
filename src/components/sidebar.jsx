import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center" >
              <div className="author-img" style={{backgroundImage: 'url(images/upclose.PNG)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Sergey Petrushkevich</a></h1>
              <div className="email-text" > sergeypetrushkevich@gmail.com </div>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">About Me</a></li>
                  <li><a href="#about" data-nav-section="about">Areas of Expertise</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  {/*<li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  <li><a href="#work" data-nav-section="work">Work Experience</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
            <div className="icon-text" >
                <ul>
                  <li><a href="https://www.linkedin.com/in/sergey-petrushkevich/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                  <li><a href="https://github.com/SergeyNEU" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                  <li><a href="https://unlab.tech/team_members/sergey-petrushkevich/" target="_blank" rel="noopener noreferrer"><i className="icon-book2"></i></a></li>
                  <li><a href="mailto:sergeypetrushkevich@gmail.com" target="_blank" rel="noopener noreferrer"><i className="icon-mail5"></i></a></li>
                </ul>
            </div>
              
            </nav>
            <div className="colorlib-footer">
            <div className="email-text" style={{fontWeight: "bold"}}>
            
              <p>
                  Looking for a co-op opportunity<br></br>
                  July 2022 - December 2022 
              </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
