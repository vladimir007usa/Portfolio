import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Myself from './components/Myself'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills'
// import { FaLocationArrow } from "react-icons/fa"

const App = () => {

  const cursor = useRef(null)

  const [visible, setVisible] = useState(false)

  useEffect(() => {

    window.onmousemove = (e) => {

      if (window.innerWidth >= 600) {

        cursor.current.style.top = `${e.clientY - 5}px`;
        cursor.current.style.left = `${e.clientX - 5}px`;

        if (e.target.getAttribute('data-increase')) {
          cursor.current.classList.add('increased');
        } else {
          cursor.current.classList.remove('increased');
        }

        if (e.target.getAttribute('data-link')) {
          setVisible(true)
        } else {
          setVisible(false)
        }

      }
    };
    return () => {
      // window.removeEventListener('mousemove', handleMove);
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursor}>
        {
          visible && <p>VIEW</p>
        }
      </div>
      <Header />
      <Myself />
      <About />
      <Skills />
      {/* <Project /> */}
      <Contact />
      <footer style={{padding: 20}}>
      {/* &copy; Sayantan Sarkar */}
      </footer>
    </>
  )
}

export default App