import { useEffect } from 'react'
import '../styles/About.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const story = "Versatile and self-motivated professional with experience in web development, cybersecurity, graphic & web design, and document publishing. Proficient in Adobe Creative Suite (Photoshop, XD, Illustrator, InDesign), web technologies (HTML, CSS, JavaScript), and security tools (Kali Linux, Burp Suite, Wireshark).".split('');

const About = () => {

  useEffect(() => {
    const textAnimation = gsap.fromTo('.About span', { color: 'white', opacity: 0.1 }, {
      color: 'white',
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.About',
        start: 'top 89%',
        end: 'bottom 70%',
        scrub: 0.3,
      }
    })

    return () => {
      textAnimation.kill()
    }
  }, [])

  return (
    <div className='About-h1'>
      <h1>ABOUT ME</h1>
      <svg style={{ display: 'block' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 1300 320"><path fill="#0c0b14" fillOpacity="1" d="M0,288L120,288C240,288,480,288,720,266.7C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>


      <div className='About'>
        <h1>Story<em>!</em></h1>
        {
          story.map((word, index) => (<span key={index}>{word}</span>))
        }
        <h1>Education<em>!</em></h1>
        <h3 className='studies'>
          {
            "B.Tech in CSE".split('').map((item, index) => <span key={index}>{item}</span>)
          }
        </h3>
        <p className='paddHigh'>
          {
            'Greater Kolkata College of Engineering and Management'.split('').map((item, index) => <span key={index}>{item}</span>)
          }
        </p>
        <p className='paddHigh'>
          {
            '2022 - Present'.split('').map((item, index) => <span key={index}>{item}</span>)
          }
        </p>
        <h3 className='studies'>
          {
            'Higher Secondary'.split('').map((item, index) => <span key={index}>{item}</span>)
          }
        </h3>
        <p className='paddHigh'>
          {
            "Canning David sassoon high school".split('').map((item, index) => <span key={index}>{item}</span>)
          }
        </p>
        <p className='paddHigh'>
          {
            "401/500 in 2021".split('').map((item, index) => <span key={index}>{item}</span>)
          }
        </p>
        <h3 className='studies'>
          {
            "Secondary".split('').map((item, index) => <span key={index}>{item}</span>)
          }
        </h3>
        <p className='paddHigh'>
          {
            "Canning David sassoon high school".split('').map((item, index) => <span key={index}>{item}</span>)
          }
        </p>
        <p className='paddHigh'>
          {
            "588/700 in 2019".split('').map((item, index) => <span key={index}>{item}</span>)
          }
        </p>
      </div>


      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160"><path fill="#0c0b14" fillOpacity="1" d="M0,160L120,133.3C240,107,480,53,720,42.7C960,32,1200,64,1320,80L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    </div>
  )
}

export default About