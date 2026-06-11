import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App-container">
      {/*Title */}
      <div className="title-section">
        <h1>Reddit Clone</h1>
      </div>

      {/*Header*/}
      <div className="header">
        <p className = 'logo'>Logo</p>

        {/*Functional search bar */}
        <input 
        type='text' 
        placeholder="Search Reddit" 
        className='search-input'/>
        {/*Real button*/}
        <button className='login-btn'>Log In</button>
      </div>

      {/* Posts Container */}
      <div clasName= "posts-container">
        <div className="post-card">Post 1</div>
        <div className="post-card">Post 2</div>
        <div className="post-card">Post 3</div>
      </div>
     </div>
    </>
  )
}

export default App
