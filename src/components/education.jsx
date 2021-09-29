import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      
      <div>
        <section className="colorlib-experience" data-section="education">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="urbanist-500">Where I learn.</span>
                <h2 className="urbanist-italics-500 animate-box">Education</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon edu-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label urbanist-500">
                        <h2>Northeastern University <span> Bachelor’s Degree - May 2023</span></h2>
                        <p> I am pursuing a Bachelor’s Degree in Electrical and Computer Engineering.<br /> 
                            Currently enrolled with a 3.82/4.00 GPA.<br />
                            Member of the Wireless Club and IEEE.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon edu-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label urbanist-500">
                        <h2>American College of Thessaloniki <span> September 2019 - December 2019</span></h2>
                        <p>Spent my first semester of university abroad as part of NU.in program. Absorbed the local culture in Greece's second largest city: Thessaloniki.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon edu-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label urbanist-500">
                        <h2>Fort Lee High School <span> 2015 - 2019</span></h2>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
