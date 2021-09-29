import React, { Component } from 'react'

export default class Work extends Component {
  render() {
    return (
      
      <div>
        <section className="colorlib-experience" data-section="work">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="urbanist-500">Doing what I love most.</span>
                <h2 className="urbanist-italics-500 animate-box">Work experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon work-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label urbanist-500">
                        <h2>Kythera Space Solutions <span> July 2021 - present</span></h2>
                        <p>TEaSaTa aTEXT.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon work-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label urbanist-500">
                        <h2>Ultrabroadband Nanonetworking Lab Research Assistant <span> February 2021 - present</span></h2>
                        <p>Used state-of-the-art RFSoC boards to work with 100Ghz-1THz signals. Currently implementing Dynamic Memory Allocation, AXI-full,and AXI-stream for real-time data transfer with 100Ghz-1THz signals in an RFSoC board. Implemented driver code and created modules in Vivado to allow data communication between Processing System (PS)and Programmable Logic (PL).</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon work-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label urbanist-500">
                        <h2>(Part-Time) IT Support Technician <span> June 2016 - November 2015</span></h2>
                        <p>Assembled and maintained over 30 computers and servers based on provided specifications.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon work-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label urbanist-500">
                        <h2>(Volunteering) Class Coordinator and Library Assistant <span> June 2018 - December 2019</span></h2>
                        <p>Founded, and taught 2 weekly technology-focused classes aimed to familiarize elderly citizens with technology. Coordinated with librarians to expand future class offerings due to reaching maximum capacity (15).
                        </p> 
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
          <span><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></span>
        </section>
      </div>
    )
  }
}
