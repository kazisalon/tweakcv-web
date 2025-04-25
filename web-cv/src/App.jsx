import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <div className="main-content">
          <div className="content-box">
            <p className="content-text">Main content area</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
