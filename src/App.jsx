import { Header } from './components/Header'
import './global.css'
import "./App.scss"
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

function App() {

  return (
    <div className="App">
      <Header />

      <div className="wrapper">
          <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
