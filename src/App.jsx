import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { useSelector, useDispatch } from 'react-redux'
import { openModal, closeModal } from './store/uiSlice'
import './App.css'


function App() {
  const dispatch = useDispatch(); //Allows to send messages to the user

  const [posts, setPosts] = useState([]); //At the start its empty
  const [searchTerm, setSearchTerm] = useState('') // At the start the seach is empty
  const [selectedCategory, setSelectedCategory] = useState('Home'); //For the star we set the state to Home


  useEffect(() => {
    // Request for free Reddit JSON API
    fetch('/posts.json')
    .then((response) => {
      if(!response.ok){
        throw new Error('Bad Server answer');
      }
      return response.json();
    }) //converting the data we got to a JSON object
    .then((data) => {
      //Reddit data structure is deep, so we just take the post array
      const redditPosts= data.data.children;

      //We jus take the data, that we need for out posts
      const formattedPosts = redditPosts.map((item) => ({
        id: item.data.id,
        title: item.data.title,
        username: item.data.author,
        upvotes: item.data.ups >= 1000 ? `${(item.data.ups / 1000).toFixed(1)}k` : item.data.ups,
        //We check if Reddit sent a real photo(and not text like "self" of "default" )
        hasImage: item.data.thumbnail && item.data.thumbnail.startsWith('http'),
        thumbnail: item.data.thumbnail,
        commentsCount: item.data.num_comments,
        subreddit: item.data.subreddit,
        body: item.data.selftext
      }));

      //We save the real post into React state
      setPosts(formattedPosts);
    })
    .catch((error) => console.error('Error Loading Reddit data:', error));
  }, []); //Empty brackets at the end means, that the REQUEST will be ONLY ONE TIME, when the page is loaded



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
        className='search-input'
        value={searchTerm} // we connect the seach bar with the state
        onChange={(e) => setSearchTerm(e.target.value)} // Everytime we type in we update the seach bar
        />
        {/*Real button*/}
        <button className='login-btn'>Log In</button>
      </div>


    <div className='content-layout'>
      {/* Posts Container */}
      <main className= "posts-container">

        {posts
          .filter((post) =>
          post.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          )
          .filter((post) => {
            //Adding Category filter
            if(selectedCategory === 'Home') return true; //Shows all the posts
            return post.subreddit === selectedCategory; //Shows posts that only were selected on the categories
          })
          .map((post) => (
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
                    <div className='post-media-container'>
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '6px', marginTop: '10px'}}
                      />
                    </div>
                  )}

                  {/** if Post has text we display it */}
                  {post.body && <p className='post-text-body'>{post.body}</p>}
                </div>

                <div className='post-footer'>
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
          <li>
              <button
                className={`category-btn ${selectedCategory === 'Home' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('Home')}>
                🏠 Home
              </button>
          </li>
          <li>
            <button
                className={`category-btn ${selectedCategory === 'Gaming' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('Gaming')}>
                  🎮 Gaming
            </button>
          </li>
          <li>
            <button 
              className={`category-btn ${selectedCategory === 'Sports' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Sports')}>
                ⚽ Sports
            </button>
          </li>
          <li>
            <button 
              className={`category-btn ${selectedCategory === 'Tech' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Tech')}>
                💻 Tech
            </button>
          </li>
          <li>
            <button 
              className={`category-btn ${selectedCategory === 'Art' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Art')}>
                🎨 Art
            </button>
          </li>
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
