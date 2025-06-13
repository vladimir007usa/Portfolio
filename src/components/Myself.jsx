import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { HiMiniCloudArrowDown } from "react-icons/hi2";
import "../styles/Myself.scss";

const Myself = () => {
  // const [loaded, setLoaded] = useState(false)
  // const [text, setText] = useState('Rakesh Naskar')

  const textBox = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textBox.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.3,
      }
    );
  }, []);

  // useEffect(() => {
  //   let timer1;
  //   window.addEventListener('load', () => {
  //     timer1 = setTimeout(() => setLoaded(true), 1000)
  //   })

  //   let timer2 = setInterval(() => {
  //     setText((prev) => (prev === 'Rakesh Naskar') ? 'a Web, Adobe, Design, and Security Professional.' : 'Rakesh Naskar')
  //   }, 3500)

  //   return () => {
  //     window.removeEventListener('load', () => {
  //       timer1 = setTimeout(() => setLoaded(true), 1000)
  //     })
  //     clearTimeout(timer1)
  //     clearInterval(timer2)
  //   }
  // }, [])

  return (
    <>
      <div className="img-text">
        <div
          className="SVG-BG"
          style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.2 }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#e0e0e0"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* <img rel='preload' src="https://i.ibb.co/xjphWvZ/thumbnail-id-1u-Xb-Nr-QKG1-Wwsh-K7k-Q4-B9-KK1-O327x-ECl-sz-w1000.png" className="image" /> */}
        <img
          rel="preload"
          src="https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735937937/profilePic_gilpkv.png"
          className="image"
        />
        <div className="text" ref={textBox}>
          <p id="hello">
            Hello<em>.</em> I'm<em>_</em>
            <br />
            <span className={"name"}>Rakesh Naskar</span>
            <p className="OneLiner">
              A Web, Adobe, Design, and Security Professional.
            </p>
          </p>

          {/* <div className="cvBtnContainer">
            <h3>Resume:</h3>
            <a href="https://d8it4huxumps7.cloudfront.net/uploads/attachements/user-resumes/6794fe77da7a3_Sayantan_Sarkar.pdf" target="_blank" rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/dqn1hcl8c/image/upload/v1737818665/view_qfva14.jpg" data-increase={true} className='img' alt="" />
              <img src="https://res.cloudinary.com/dqn1hcl8c/image/upload/v1737818669/view_nedtq0.gif" data-increase={true} alt="" />
            </a>
            <a href="https://github.com/imSyntn/Static-Files/raw/main/Sayantan%20Sarkar.pdf" target="_blank" rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/dqn1hcl8c/image/upload/v1737818665/Download_zhbpfu.jpg" data-increase={true} className='img' alt="" />
              <img src="https://res.cloudinary.com/dqn1hcl8c/image/upload/v1737818666/download_oqiypl.gif" data-increase={true} alt="" />
            </a>
          </div> */}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
        <path
          fill="#0c0b14"
          fillOpacity="1"
          d="M0,128L120,106.7C240,85,480,43,720,21.3C960,0,1200,0,1320,0L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Myself;
