import { useEffect } from 'react'
import '../styles/ProjectCard.scss'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const ProjectCard = ({ image, link, name, desc, stack }) => {

  useEffect(()=>{
    gsap.fromTo('.ProjectCard', {x:-500},{
      x:0,
      duration:0.5,
      stagger: 0.2,
      scrollTrigger:{
        trigger: '.projects-container',
      }
    })
  },[])

  return (
    <a href={link} target='blank' className='ProjectCard'>
      <div className='imgDiv'>
        <img src={image} alt="Project Image" data-increase={true} data-link={true} />
      </div>
      <h2 data-increase={true}>{name}</h2>
      <p data-increase={true}>{desc}</p>
      <h2 data-increase={true}>Tech Stack</h2>
      <div className="stack" data-increase={true}>
        {
          stack.map((item,index)=> <img key={index} src={item} alt='img' data-increase={true} />)
        }
      </div>
    </a>
  )
}

export default ProjectCard