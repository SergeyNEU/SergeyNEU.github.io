(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(21)},17:function(e,a,t){},18:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),i=(t(17),t(1)),s=t(5),m=t(3),o=t(2),d=t(4),u=(t(18),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("nav",{href:"#navbar",className:"js-colorlib-nav-toggle colorlib-nav-toggle","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},l.a.createElement("i",null)),l.a.createElement("aside",{id:"colorlib-aside",className:"border js-fullheight"},l.a.createElement("div",{className:"text-center"},l.a.createElement("div",{className:"author-img",style:{backgroundImage:"url(images/upclose.PNG)"}}),l.a.createElement("h1",{id:"colorlib-logo"},l.a.createElement("a",{href:"index.html"},"Sergey Petrushkevich")),l.a.createElement("div",{className:"email-text"}," sergeypetrushkevich@gmail.com ")),l.a.createElement("nav",{id:"colorlib-main-menu",role:"navigation",className:"navbar"},l.a.createElement("div",{id:"navbar",className:"collapse"},l.a.createElement("ul",null,l.a.createElement("li",{className:"active"},l.a.createElement("a",{href:"#home","data-nav-section":"home"},"About Me")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about","data-nav-section":"about"},"Areas of Expertise")),l.a.createElement("li",null,l.a.createElement("a",{href:"#projects","data-nav-section":"projects"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:"#education","data-nav-section":"education"},"Education")),l.a.createElement("li",null,l.a.createElement("a",{href:"#work","data-nav-section":"work"},"Work Experience"))))),l.a.createElement("nav",{id:"colorlib-main-menu"},l.a.createElement("div",{className:"icon-text"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/sergey-petrushkevich/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-linkedin2"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/SergeyNEU",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-github"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://unlab.tech/team_members/sergey-petrushkevich/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-book2"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:sergeypetrushkevich@gmail.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-mail5"})))))),l.a.createElement("div",{className:"colorlib-footer"},l.a.createElement("div",{className:"email-text",style:{fontWeight:"bold"}},l.a.createElement("p",null,"Looking for a co-op opportunity",l.a.createElement("br",null),"July 2022 - December 2022"))))))}}]),a}(n.Component)),E=t(8),h=["doing what I love","learning","striving for more","curious"],v=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={currentCount:5e4},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"timer",value:function(){this.setState({currentCount:this.state.currentCount-1}),this.state.currentCount<1&&clearInterval(this.intervalId)}},{key:"componentDidMount",value:function(){this.intervalId=setInterval(this.timer.bind(this),1500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{id:"colorlib-hero",className:"js-fullheight","data-section":"home"},l.a.createElement("div",{className:"flexslider js-fullheight"},l.a.createElement("ul",{className:"slides"},l.a.createElement("li",{style:{backgroundImage:"url(images/bkg_4.JPG)",backgroundPosition:"center"}},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text"},l.a.createElement("div",{className:"slider-text-inner js-fullheight"},l.a.createElement("div",{className:"desc"},l.a.createElement("div",{id:"box-1"},l.a.createElement("h1",null,l.a.createElement("span",{className:"urbanist-500"},"Nice to meet you! ",l.a.createElement("br",null)," I'm Sergey.")),l.a.createElement("p",null,l.a.createElement("a",{className:"btn btn-primary btn-learn",href:"https://drive.google.com/file/d/1fGV9oEuVhZS4OeJCbGe4AvS4ejCTKrvS/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"View Resume ",l.a.createElement("i",{className:"icon-download4"})))))))))),l.a.createElement("li",{style:{backgroundImage:"url(images/snow-bkg.jpg)"}},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text"},l.a.createElement("div",{className:"slider-text-inner2"},l.a.createElement("div",{className:"desc"},l.a.createElement("h5",null,l.a.createElement("span",{className:"urbanist-500",style:{color:"white"}}," Always ",l.a.createElement(E.a,{text:h[this.state.currentCount%h.length],springConfig:E.b.default,inline:!0}),"."))))))))))))}}]),a}(n.Component),b=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{className:"colorlib-about","data-section":"about"},l.a.createElement("div",{className:"colorlib-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row row-bottom-padded-sm animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"about-desc"},l.a.createElement("span",{className:"urbanist-500"},"Who Am I?"),l.a.createElement("h2",{className:"urbanist-italics-500"},"About Me"),l.a.createElement("p",null,"I'm a junior undergraduate student currently attending Northeastern University and working towards a Bachelor of Science in Electrical and Computer Engineering. I live and breathe everything-computers: from the interfaces that clients interact with, to high-speed networking, to low-level embedded programming, I love what I do!"),l.a.createElement("p",null,"My unique skill set of both leadership and programming experiences has given me the ability to contribute to meaningful and important projects, such as the development of Terahertz communications at the Ultrabroadband Laboratory in Northeastern University and the maintenance and development of new satellite management software at Kythera Space Solutions."),l.a.createElement("p",null,"I am always searching for projects to contribute to and will strive to use my existing background experiences to bring a unique perspective to any team.")))))))),l.a.createElement("section",{className:"colorlib-about"},l.a.createElement("div",{className:"colorlib-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"urbanist-500"},"The things I love..."),l.a.createElement("h2",{className:"urbanist-italics-500"},"Areas of Expertise"))),l.a.createElement("div",{className:"row row-pt-md"},l.a.createElement("div",{className:"col-md-4 text-center animate-box"},l.a.createElement("div",{className:"services expertise-1"},l.a.createElement("span",{className:"icon"},l.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"}),l.a.createElement("i",{class:"devicon-cplusplus-plain"})),l.a.createElement("div",{className:"desc"},l.a.createElement("h3",null,"Test 1"),l.a.createElement("p",null,"Arcu cursus vitae congue mauris.")))),l.a.createElement("div",{className:"col-md-4 text-center animate-box"},l.a.createElement("div",{className:"services expertise-2"},l.a.createElement("span",{className:"icon"},l.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"}),l.a.createElement("i",{class:"devicon-react-original"})),l.a.createElement("div",{className:"desc"},l.a.createElement("h3",null,"Test 2"),l.a.createElement("p",null,"Volutpat lacus laoreet non curabitur gravida arcu. ")))),l.a.createElement("div",{className:"col-md-4 text-center animate-box"},l.a.createElement("div",{className:"services expertise-3"},l.a.createElement("span",{className:"icon"},l.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),l.a.createElement("i",{class:"material-icons"},"\ue308")),l.a.createElement("div",{className:"desc"},l.a.createElement("h3",null,"Test 3"),l.a.createElement("p",null,"Pretium aeneaan pharetraaa maganaa aac plaacerat. Sem viverra aliquet eget sit.")))),l.a.createElement("div",{className:"col-md-4 text-center animate-box"},l.a.createElement("div",{className:"services expertise-4"},l.a.createElement("span",{className:"icon"},l.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"}),l.a.createElement("i",{class:"devicon-c-plain"})),l.a.createElement("div",{className:"desc"},l.a.createElement("h3",null,"Dev Ops"),l.a.createElement("p",null,"Pretium aeneaan pharetraaa maganaa aac plaacerat. Sem viverra aliquet eget sit.")))),l.a.createElement("div",{className:"col-md-4 text-center animate-box"},l.a.createElement("div",{className:"services expertise-5"},l.a.createElement("span",{className:"icon"},l.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),l.a.createElement("i",{class:"material-icons"},"\ue322")),l.a.createElement("div",{className:"desc"},l.a.createElement("h3",null,"Graphic Design"),l.a.createElement("p",null,"Pretium aeneaan pharetraaa maganaa aac plaacerat. Sem viverra aliquet eget sit.")))),l.a.createElement("div",{className:"col-md-4 text-center animate-box"},l.a.createElement("div",{className:"services expertise-6"},l.a.createElement("span",{className:"icon"},l.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),l.a.createElement("i",{class:"material-icons"},"\ue0b7")),l.a.createElement("div",{className:"desc"},l.a.createElement("h3",null,"Digital Marketing"),l.a.createElement("p",null,"Pretium aeneaan pharetraaa maganaa aac plaacerat. Sem viverra aliquet eget sit."))))))))}}]),a}(n.Component),p=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{className:"colorlib-experience","data-section":"education"},l.a.createElement("div",{className:"colorlib-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"urbanist-500"},"Where I learn."),l.a.createElement("h2",{className:"urbanist-italics-500 animate-box"},"Education"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"timeline-centered"},l.a.createElement("article",{className:"timeline-entry animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon edu-1"},l.a.createElement("i",{className:"icon-pen2"})),l.a.createElement("div",{className:"timeline-label urbanist-500"},l.a.createElement("h2",null,"Northeastern University ",l.a.createElement("span",null," Bachelor\u2019s Degree - May 2023")),l.a.createElement("p",null," I am pursuing a Bachelor\u2019s Degree in Electrical and Computer Engineering.",l.a.createElement("br",null),"Currently enrolled with a 3.82/4.00 GPA.",l.a.createElement("br",null),"Member of the Wireless Club and IEEE.")))),l.a.createElement("article",{className:"timeline-entry animate-box","data-animate-effect":"fadeInTop"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon edu-2"},l.a.createElement("i",{className:"icon-pen2"})),l.a.createElement("div",{className:"timeline-label urbanist-500"},l.a.createElement("h2",null,"American College of Thessaloniki ",l.a.createElement("span",null," September 2019 - December 2019")),l.a.createElement("p",null,"Spent my first semester of university abroad as part of NU.in program. Absorbed the local culture in Greece's second largest city: Thessaloniki.")))),l.a.createElement("article",{className:"timeline-entry animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon edu-3"},l.a.createElement("i",{className:"icon-pen2"})),l.a.createElement("div",{className:"timeline-label urbanist-500"},l.a.createElement("h2",null,"Fort Lee High School ",l.a.createElement("span",null," 2015 - 2019"))))),l.a.createElement("article",{className:"timeline-entry begin animate-box","data-animate-effect":"fadeInBottom"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon color-none"})))))))))}}]),a}(n.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{className:"colorlib-experience","data-section":"work"},l.a.createElement("div",{className:"colorlib-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"urbanist-500"},"Doing what I love most."),l.a.createElement("h2",{className:"urbanist-italics-500 animate-box"},"Work experience"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"timeline-centered"},l.a.createElement("article",{className:"timeline-entry animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon work-1"},l.a.createElement("i",{className:"icon-pen2"})),l.a.createElement("div",{className:"timeline-label urbanist-500"},l.a.createElement("h2",null,"Kythera Space Solutions ",l.a.createElement("span",null," July 2021 - present")),l.a.createElement("p",null,"TEaSaTa aTEXT.")))),l.a.createElement("article",{className:"timeline-entry animate-box","data-animate-effect":"fadeInTop"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon work-2"},l.a.createElement("i",{className:"icon-pen2"})),l.a.createElement("div",{className:"timeline-label urbanist-500"},l.a.createElement("h2",null,"Ultrabroadband Nanonetworking Lab Research Assistant ",l.a.createElement("span",null," February 2021 - present")),l.a.createElement("p",null,"Used state-of-the-art RFSoC boards to work with 100Ghz-1THz signals. Currently implementing Dynamic Memory Allocation, AXI-full,and AXI-stream for real-time data transfer with 100Ghz-1THz signals in an RFSoC board. Implemented driver code and created modules in Vivado to allow data communication between Processing System (PS)and Programmable Logic (PL).")))),l.a.createElement("article",{className:"timeline-entry animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon work-3"},l.a.createElement("i",{className:"icon-pen2"})),l.a.createElement("div",{className:"timeline-label urbanist-500"},l.a.createElement("h2",null,"(Part-Time) IT Support Technician ",l.a.createElement("span",null," June 2016 - November 2015")),l.a.createElement("p",null,"Assembled and maintained over 30 computers and servers based on provided specifications.")))),l.a.createElement("article",{className:"timeline-entry animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon work-4"},l.a.createElement("i",{className:"icon-pen2"})),l.a.createElement("div",{className:"timeline-label urbanist-500"},l.a.createElement("h2",null,"(Volunteering) Class Coordinator and Library Assistant ",l.a.createElement("span",null," June 2018 - December 2019")),l.a.createElement("p",null,"Founded, and taught 2 weekly technology-focused classes aimed to familiarize elderly citizens with technology. Coordinated with librarians to expand future class offerings due to reaching maximum capacity (15).")))),l.a.createElement("article",{className:"timeline-entry begin animate-box","data-animate-effect":"fadeInBottom"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon color-none"}))))))),l.a.createElement("span",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))))}}]),a}(n.Component),g=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{className:"colorlib-work","data-section":"projects"},l.a.createElement("div",{className:"colorlib-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 col-md-offset-3 col-md-pull-3 animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"urbanist-500"},"What I can do..."),l.a.createElement("h2",{className:"urbanist-italics-500 animate-box"},"Recent Projects"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"project",style:{backgroundImage:"url(images/pcie.JPG)",backgroundPosition:"top"}},l.a.createElement("div",{className:"desc"},l.a.createElement("div",{className:"con"},l.a.createElement("h3",null,l.a.createElement("a",{href:"work.html"},"[CURRENT] 48Gbps PCIE RTL/Driver Code/User Application Development")),l.a.createElement("span",null,"Leading a small group of researchers to build a PCIE interface for Terahertz communication research.",l.a.createElement("br",null),l.a.createElement("br",null),"  Processing 8GHz of bandwidth in real-time that are transmitted and received with 140GHz front-end antennas. Using AXI-Stream with DMA to allow for efficient PL to PS mapping. Writing driver code for both FPGA and Computer to utilize 32 PCIE lanes. Once sent to the driver code on Computer-side, end goal is to display real-time video that is sent wirelessly from one FPGA to another. "))))),l.a.createElement("div",{className:"col-md-6 animate-box","data-animate-effect":"fadeInRight"},l.a.createElement("div",{className:"project",style:{backgroundImage:"url(images/proj1.PNG)",backgroundPosition:"top"}},l.a.createElement("div",{className:"desc"},l.a.createElement("div",{className:"con"},l.a.createElement("h3",null,l.a.createElement("a",{href:"work.html"},"Therahertz High-Speed Networking Tool")),l.a.createElement("span",null,"A Windows-based C++ application made in conjuction with QT to handle big data packets and efficiently graph them. Processes data coming in from DMA and AXI-Stream modules in the physical layer. Designed to save down-time for internal THz platform testing as well as to show wireless results in demo-reels. ",l.a.createElement("br",null),l.a.createElement("br",null),"Features a custom designed GUI, multi-channel I and Q stream support, and multi-carrier constellation support. "),l.a.createElement("p",{className:"icon"},l.a.createElement("span",null,l.a.createElement("a",{href:"https://raw.githubusercontent.com/SergeyNEU/SergeyNEU.github.io/master/images/proj1.PNG",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-link2"})," Project Image"))))))),l.a.createElement("div",{className:"col-md-6 animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"project",style:{backgroundImage:"url(images/rotaryLib.JPG)",backgroundPosition:"top"}},l.a.createElement("div",{className:"desc"},l.a.createElement("div",{className:"con"},l.a.createElement("h3",null,l.a.createElement("a",{href:"work.html"},"Rotary Library")),l.a.createElement("span",null,"A USB-RS232 C++ Rotary Function library actively used in Terahertz communications research (such as channel sounding applications). Made to specifically control StepNet amplifiers to rotate front-ends on two axes (altitude/azimuth). ",l.a.createElement("br",null),l.a.createElement("br",null),"Features a well-documented command library, real-time adjustable axis limitations, and fail-safe command sequencing to prevent users from damaging expensive equipment."))))),l.a.createElement("div",{className:"col-md-6 animate-box","data-animate-effect":"fadeInRight"},l.a.createElement("div",{className:"project",style:{backgroundImage:"url(images/protractor.jpg)",backgroundPosition:"top"}},l.a.createElement("div",{className:"desc"},l.a.createElement("div",{className:"con"},l.a.createElement("h3",null,l.a.createElement("a",{href:"work.html"},"Digital Protractor")),l.a.createElement("span",null,"Angle of a DE1SoC board shown via 7-segment display and displayed in system terminal. Utilized C+ to obtain position measurements and Quartus Prime to create a hardware circuit that converted measurements to show inclination angle of the board")))))))))}}]),a}(n.Component),N=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"colorlib-page"},l.a.createElement("div",{id:"container-wrap"},l.a.createElement(u,null),l.a.createElement("div",{id:"colorlib-main"},l.a.createElement(v,null),l.a.createElement(b,null),l.a.createElement(g,null),l.a.createElement(p,null),l.a.createElement(f,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.ccd94d46.chunk.js.map