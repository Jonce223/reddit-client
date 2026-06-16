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


    <div className='content-layout'>
      {/* Posts Container */}
      <main className= "posts-container">

            {/* Post 1 */}
          <div className="post-card">
            {/*1. Voting place*/}
            <div className='post-votes'>
              <button className='vote-btn'>▲</button>
              <span className='vote-count'>1.2k</span>
              <button className='vote-btn'>▼</button>
            </div>
          

            {/* Post content (text and place for image) */}
            <div className="post-content">
              <p className='post-meta'>Posted by u/john_doe</p>
              <h2 className='post-title'>Look At this amazing set up I build for my self</h2>
              <div className='post-media-placeholder'>
                <span> [ Image / Media Placeholder ] </span>
              </div>
            </div>

            {/*Place with comments */}
            <div className="post-footer">
              <button className='comment-btn'>💬 42 Comments</button>
            </div>
          </div>

        {/*Post 2 (Simpler just with text) */}
        <div className="post-card">
          <div className='post-votes'>
            <button className='vote-btn'>▲</button>
            <span className='vote-count'>500</span>
            <button className='vote-btn'>▼</button>
          </div>

          <div className="post-content">
            <p className='post-meta'>Posted by u/javascript_fan</p>
            <h2 className='post-title'>Just had the best pizza in town!</h2>
            <p className='post-text-body'>I found this amazing pizza place downtown. The crust was perfect and the toppings were fresh. Highly recommend it to all pizza lovers!</p>
          </div>

          <div className="post-footer">
            <button className='comment-btn'>💬 15 Comments</button>
          </div>
        </div>
      </main>

      {/*Sidebar */}
      <aside className='sidebar'>
        <h2>Subreddits</h2>
        <ul>
          <li><button className="category-btn active">🏠 Home</button></li>
          <li><button className="category-btn">🎮 Gaming</button></li>
          <li><button className="category-btn">⚽ Sports</button></li>
          <li><button className="category-btn">💻 Tech</button></li>
          <li><button className="category-btn">🎨 Art</button></li>
        </ul>

      </aside>

    </div>
  </div>
  </>
  )
}

export default App
