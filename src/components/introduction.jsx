import React, { Component } from 'react'

import TextTransition, { presets } from "react-text-transition"

const TEXTS = [
  "doing what I love",
  "learning",
  "striving for more",
  "curious",
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
    this.intervalId = setInterval(this.timer.bind(this), 1500);
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
              <li style={{backgroundImage: 'url(images/bkg_4.jpg)', backgroundPosition: 'center',}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-10 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <div id="box-1">
                            <h1>
                              <span className="urbanist-500">Nice to meet you! <br /> I'm Sergey.
                              </span>
                            </h1>
                            <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1fGV9oEuVhZS4OeJCbGe4AvS4ejCTKrvS/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume <i className="icon-download4" /></a></p>
                          </div>
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
                    <div className="col-md-10 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h5>
                            <span className="urbanist-500" style={{color: 'white'}} > Always <TextTransition text={ TEXTS[this.state.currentCount  % TEXTS.length] }springConfig={presets.default} inline/>.
                            </span>
                          </h5>
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
