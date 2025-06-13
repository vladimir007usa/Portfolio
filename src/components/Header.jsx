import { useEffect, useRef } from 'react'
import '../styles/Header.scss'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Header = () => {

  // const [clickHandler, setClickHandler] = useState(false)
  const headerDiv = useRef(null);

  useEffect(() => {
    gsap.to(headerDiv.current, {
      backgroundColor: '#020202bd',
      height: '56px',
      scrollTrigger: {
        trigger: '.blank_div',
        start: 'top 100px',
        // markers: true,
        scrub: 0.2,
      }
    })

    const tl = gsap.timeline();
    const links = document.querySelectorAll('.item')
    tl.fromTo(links, { y: -100, }, {
      y: 0,
      duration: 0.5,
      stagger: 0.1
    })

    return () => {
      // gsap.killTweensOf(headerDiv.current)
      gsap.killTweensOf(links)
    }
  }, [])
  return (
    <>
      <header ref={headerDiv}>        
        <div className="logo item">Portfolio.</div>
        <div className="links">
          <a href="https://twitter.com/imSyntn" target='blank' className="item"><FaXTwitter style={{ fill: 'white' }} /></a>
          <a href="https://github.com/imSyntn" target='blank' className="item"><BsGithub style={{ fill: 'white' }} /></a>
          <a href="https://www.linkedin.com/in/sayantan-sarkar-5a49062b0/" target='blank' className="item"><BsLinkedin /></a>
        </div>
      </header>
      <div className="blank_div"></div>
    </>
  )
}

export default Header