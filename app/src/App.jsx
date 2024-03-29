import React from 'react'
import Navbar from './Navbar'
import Student from './Student'
import Requirements from './Requirements'
import Footer from './Footer'

function App() {
  return (
    <div className="container mx-auto mt-10">
      <div className="ring-1 ring-slate-900/5 shadow-xl">
        <Navbar />
        <Student />
        <Requirements />
      </div>
      <Footer />
    </div>
  )
}

export default App