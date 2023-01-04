import { Header } from './components/Header'
import './global.css'
import "./App.scss"
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import { posts } from './mocks/PostMock'

function App() {

  const postsPublish = posts

  return (
    <div className="App">
      <Header />

      <div className="wrapper">
          <Sidebar />
        <main>
          {postsPublish.map(post => {
            return (
              <Post post={post} key={post.id} />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
