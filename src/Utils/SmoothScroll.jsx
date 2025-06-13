import ReactLenis from '@studio-freight/react-lenis'

const SmoothScroll = ({children}) => {
    const options = {
        duration: 2,
        smooth: true
    }
  return (
    <ReactLenis root options={options}>
        {children}
    </ReactLenis>
  )
}

export default SmoothScroll