import NavPanel from './components/NavPanel.jsx';

export default function AboutPage() {
  return (
    <>
      <div>
        <NavPanel selected="ABOUT"/>
      </div>
      <div className='right-panel'>
        <div className='title-card'>
          <h1>Linh Doan</h1>
          <p>Front-end Developer</p>
        </div>
        <div className='documentation-card'>
          <h1 className='first-header'>About</h1>
          <p>
              An experienced individual that specializes in creating designs that are modern and clean in order to create a smooth user experience. 
              Well versed in creating layouts that follow a logical UX/UI flow with little complications on where things should be located while using color in a way to appeal to the audience. 
              With a proficient knowledge in programming, websites can be created from their initial wireframing into working sites.
          </p>
          <h1>Skills</h1>
          <p>
              <span style={{color: "#AD85B4", fontWeight: 400}}>Web Development</span> - HTML, CSS, JavaScript, Figma, React, Vite, Next.js, Node.js<br/>
              <span style={{color: "#AD85B4", fontWeight: 400}}>Programming</span> - C++, C#, Java, Python, Lua<br/>
              <span style={{color: "#AD85B4", fontWeight: 400}}>Visual Design</span> - Adobe Photoshop, Adobe InDesign, Adobe Illustrator, Adobe Premiere Pro, Adobe Lightroom, Affinity Publisher
          </p>
          <h1>Education and Certifications</h1>
          <ul>
              <li style={{fontWeight: 400}}>Bachelor of Science in Digital Communications and Media/Multimedia</li>
              <ul style={{marginLeft: "20px"}}>
                  <li>Minor in Computer Science & Technology Leadership and Innovation Management</li>
              </ul>
              <li>FEMA IS-37.23: Managerial Safety and Health 2023</li>
              <li>FEMA IS-233.C: Emergency Planning</li>
              <li>FEMA IS-45.C: Continuous Improvement (CI) Overview</li>
              <li>Adobe Certified Professional in Digital Video using Premiere Pro CC 2018</li>
              <li>Adobe Certified Professional in Video Design</li>
              <li>Adobe Certified Professional in Visual Design using Adobe Photoshop CC 2018</li>
              <li>10-Hour Occupational Safety and Health Training Course in General Industry Safety and Health</li>
          </ul>
          <h1>Contact Information</h1>
          <p>
              Email: <a className='inline-link' href="mailto:linhdoan.k@proton.me">linhdoan.k@proton.me</a><br/>
              Phone: 346.400.8896<br/>
              LinkedIn: <a className='inline-link' href="www.linkedin.com/in/doan-kenneth">www.linkedin.com/in/doan-kenneth</a>
          </p>
        </div>
      </div>
    </>
  )
}
