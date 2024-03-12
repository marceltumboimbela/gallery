import './normalize.css'
import './App.css'
import { PhotoAlbum } from './components/PhotoAlbum'
import { Header } from './components/Header'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app} id="app">
      <Header/>
      <PhotoAlbum/>
    </div>
  )
}

export default App
