import React, { Component } from 'react'

import TextTransition, { presets } from "react-text-transition"

const TEXTS = [
  "doing what I love",
  "learning",
  "striving for more",
];

export default class Introduction extends Component {
  constructor(props){
    super(props);
    this.state = {currentCount: 50000}
  }
  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    if(this.state.currentCount < 1) { 
      clearInterval(this.intervalId);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 3000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }


  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                              <h1>
                                <span className="urbanist-500">Nice to meet ydou! <br /> I'm Sergey
                                </span>
                              </h1>
                            <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/15coSa2rnZcdywihM-pWTvoGqE65JAkxQAh6JDBNrF2Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/snow-bkg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            <span className="urbanist-500" style={{color: 'white', textShadowColor: 'green', textShadowOffset: { width: 1, height: 1 },textShadowRadius: 10}} > Always <TextTransition text={ TEXTS[this.state.currentCount  % TEXTS.length] }springConfig={presets.gentle} inline/>.
                            </span>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
