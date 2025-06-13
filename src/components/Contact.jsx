import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import '../styles/Contact.scss'

const Contact = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 90"><path fill="#0c0b14" fillOpacity="1" d="M0,32L120,48C240,64,480,96,720,90.7C960,85,1200,43,1320,21.3L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <div className="contact-cotainer">
        <h1>CONTACT</h1>
        <div className="contact-details">
          {/* <div className="mail"> */}
          <p>Let's Connect</p>
          <a data-increase={true} href="mailto:rakeshjames009@gmail.com">rakeshjames009@gmail.com <BsArrowRight data-increase={true} /></a>
          <div className="links">
            {/* <a href="https://twitter.com/imSyntn" target='blank' className="item"><FaXTwitter style={{ fill: 'white' }} /></a> */}
            <a href="https://github.com/vladimir007usa" target='blank' className="item"><BsGithub style={{ fill: 'white' }} /></a>
            {/* <a href="https://www.linkedin.com/in/sayantan-sarkar-5a49062b0/" target='blank' className="item"><BsLinkedin /></a> */}
          </div>
        </div>
        {/* </div> */}
      </div >
    </>
  )
}

export default Contact