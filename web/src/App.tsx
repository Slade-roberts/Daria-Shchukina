import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Publications from './pages/Publications'
import PublicationDetail from './pages/PublicationDetail'
import SurpriseGate from './components/SurpriseGate'

function App() {
  return (
    <SurpriseGate>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/publications/:slug" element={<PublicationDetail />} />
      </Routes>
    </SurpriseGate>
  )
}

export default App