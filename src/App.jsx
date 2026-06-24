import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { useSelector, useDispatch } from 'react-redux'
import { openModal, closeModal } from './store/uiSlice'
import './App.css'


function App() {
  const dispatch = useDispatch(); //Allows to send messages to the user

  const posts = [
    {
      id: '1',
      title: 'Look At this amazing set up I build for myself',
      username: 'john_doe',
      upvotes: '1.2k',
      commentsCount: 42,
      hasImage: true
    },
    {
      id: '2',
      title: 'Had the best Pizza in town!',
      username: 'javascript is fun',
      upvotes: '500',
      commentsCount: 14,
      hasImage: false,
      body: 'I found this amazing pizza place downtown. The crust was perfect and the topics amazing!'
    },
    {
      id: '3',
      title: 'React Hooks vs Redux Toolkit - what are your thoughts?',
      username: 'redux_master',
      upvotes: '300',
      commentsCount: 8,
      hasImage: false,
      body: 'I a building a Reddit clients and love how Redux Toolkit is hard'
    }
  ];

  //Reading from redux and the window must be open
  const isModalOpen= useSelector((state) => state.ui.isModalOpen);

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

        {posts.map((post) => (
          <div className='post-card' key={post.id}>

            {/** 1. Voting part */}
            <div className='post-votes'>
              <button className='vote-btn'>▲</button>
              <span className='vote-count'>{post.upvotes}</span>
              <button className='vote-btn'>▼</button>
            </div>

            {/** 2. Content Part */}
            <div className='post-content'>
              <p className='post-meta'>Posted by /u{post.username}</p>
              <h2 className='post-title'>{post.title}</h2>

              {/** If the text has image, we display it */}
              {post.hasImage && (
                <div className='post-media-placeholder'>
                  <span> [ Image / Media Placejolder </span>
                </div>
              )}

              {/** if Post has text we display it */}
              {post.body && <p className='post-text-body'>{post.body}</p>}
            </div>

            <div className='poster-footer'>
              <button className='comment-btn' onClick={() => dispatch(openModal())}>
                💬 {post.commentsCount} Comments
              </button>
            </div>

          </div>
        ))}

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

    {/* Modal Container */}
    {isModalOpen&& (
    <div className='modal-overlay'>
        <div className='modal-box'>
          <button className='modal-close-btn' onClick={() => dispatch(closeModal())}>X</button>
          <div className='modal-post-header'>
            <span className='vote-badge'>▲ 1.2k</span>
            <p className='post-meta'>Posted by u/john_doe</p>
          </div>
          <h2 className='modal-post-title'>Look At this amazing set up I build for my self</h2>
          <div className='modal-comments-section'>
            <h3>Comments</h3>
            <div className="comment-card">
              <p className="comment-meta">u/alex_dev • 2h ago</p>
              <p className="comment-text">This is absolutely clean! Love the cable management here. What monitor is that?</p>
            </div>
            <div className="comment-card">
              <p className="comment-meta">u/setup_king • 1h ago</p>
              <p className="comment-text">Insane setup! The RGB lights under the desk give it a really nice vibe.</p>
            </div>
          </div>
        </div>
    </div>
   )} 
  </div>
  </>
  )
}

export default App
