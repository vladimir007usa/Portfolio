import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/Skills.scss';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    gsap.fromTo('.skill-image', { y: 150, opacity: 0 }, {
      opacity: 1,
      y: 0,
      stagger: 0.7,
      scrollTrigger: {
        trigger: '.skill-container',
        start: 'top 90%',
        end: 'bottom 70%',
        scrub: 0.2
      }
    });
  }, []);

  return (
    <div className='Skills'>
      <h1>Skills</h1>
      <div className="skill-container">
        <img className='skill-image' src="https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924637/html_ohu8s9.png" alt="HTML" />
        <img className='skill-image' src="https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924638/css_bdwixz.png" alt="CSS" />
        <img className='skill-image' src="https://img.icons8.com/color-glass/480/bootstrap.png" alt="bootstrap"/>
        <img className='skill-image' src="https://img.icons8.com/parakeet/96/php.png" alt="php"/>
        <img className='skill-image' src="https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924629/javascript_ez3oe2.png" alt="JAVASCRIPT" />
        <img className='skill-image' src="https://img.icons8.com/external-those-icons-flat-those-icons/96/external-MySQL-programming-and-development-those-icons-flat-those-icons.png" alt="external-MySQL-programming-and-development-those-icons-flat-those-icons"/>
        <img className='skill-image' src="https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924629/react_hqdzmw.png" alt="REACT JS" />
        <img className='skill-image' src="https://img.icons8.com/plasticine/200/kali-linux.png" alt="kali-linux"/>
        <img className='skill-image' src="https://img.icons8.com/ios/150/burp-suite.png" alt="burp-suite"/>
        
        <img className='skill-image' src="https://img.icons8.com/nolan/256/wireshark--v1.png" alt="wireshark--v1"/>
        <img className='skill-image' src="https://img.icons8.com/color/500/nmap.png" alt="nmap"/>
        <img className='skill-image' src="https://img.icons8.com/color-glass/240/adobe-photoshop.png" alt="adobe-photoshop"/>
        <img className='skill-image' src="https://img.icons8.com/color/500/adobe-illustrator--v1.png" alt="adobe-illustrator--v1"/>
        <img className='skill-image' src="https://img.icons8.com/color/500/adobe-dreamweaver--v1.png" alt="adobe-dreamweaver--v1"/>
        <img className='skill-image' src="https://img.icons8.com/color/500/adobe-xd--v1.png" alt="adobe-xd--v1"/>
        <img className='skill-image' src="https://img.icons8.com/color/500/figma--v1.png" alt="figma--v1"/>
        <img className='skill-image' src="https://img.icons8.com/color/500/wordpress.png" alt="wordpress"/>
        <img className='skill-image' src="https://img.icons8.com/color/500/adobe-indesign.png" alt="adobe-indesign"/>
        <img className='skill-image' src="https://img.icons8.com/?size=200&id=f2VRinH2QPR0&format=png" alt="external-acrobat-adobeesign-4"/>
        <img className='skill-image' src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/96/external-scribd-is-a-digital-library-e-book-and-audiobook-subscription-service-logo-filled-tal-revivo.png" alt="external-scribd-is-a-digital-library-e-book-and-audiobook-subscription-service-logo-filled-tal-revivo"/>
        <img className='skill-image' src="https://img.icons8.com/color/500/ms-word.png" alt="ms-word"/>
      </div>
    </div>
  );
}

export default Skills;
