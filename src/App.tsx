import { Routes, Route, useLocation } from 'react-router-dom'


export default function App() {
  const location = useLocation()
  const state = location.state as { backgroundLocation?: Location } | undefined
  const background = state?.backgroundLocation

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes location={background ?? location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Modal route overlay - solo quando c'è background */}
        {background && (
          <Routes>
            <Route path="/projects/:slug" element={<ProjectModal />} />
          </Routes>
        )}
      </main>
      <Footer />
    </div>
  )
}