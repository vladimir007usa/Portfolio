import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SmoothScroll from './Utils/SmoothScroll.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <SmoothScroll>
    <App />
  </SmoothScroll>
  // </React.StrictMode>,
)
