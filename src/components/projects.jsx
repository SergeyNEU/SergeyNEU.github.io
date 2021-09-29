import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-4 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="urbanist-500">What I can do...</span>
								<h2 className="urbanist-italics-500 animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/proj1.PNG)', backgroundPosition: 'top'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Therahertz High-Speed Networking App</a></h3>
											<span>A Windows-based C++ application made in conjuction with QT to handle big data packets and efficiently graph them. Processes data coming in from DMA and AXI-Stream modules in the physical layer. Designed to save down-time for internal THz platform testing as well as to show wireless results in demo-reels. <br /><br />
											Features a custom designed GUI, multi-channel I and Q stream support, and multi-carrier constellation support. </span>
											<p className="icon">
												<span><a href="https://raw.githubusercontent.com/SergeyNEU/SergeyNEU.github.io/master/images/proj1.PNG" target="_blank" rel="noopener noreferrer"><i className="icon-link2" /> Project Image</a></span>	
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Rotary Library</a></h3>
											<span>A USB-RS232 C++ Rotary Function library actively used in Terahertz communications research (such as channel sounding applications). Made to specifically control StepNet amplifiers to rotate front-ends on two axes (altitude/azimuth). <br /><br />
											Features a well-documented command library, real-time adjustable axis limitations, and fail-safe command sequencing to prevent users from damaging expensive equipment.
											</span>
											{/*<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>*/}
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Digital Protractor</a></h3>
											<span>Angle of a DE1SoC board shown via 7-segment display and displayed in system terminal. Utilized C+ to obtain position measurements and Quartus Prime to create a hardware circuit that converted measurements to show inclination angle of the board</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Digital Protractor</a></h3>
											<span>Angle of a DE1SoC board shown via 7-segment display and displayed in system terminal. Utilized C+ to obtain position measurements and Quartus Prime to create a hardware circuit that converted measurements to show inclination angle of the board</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
