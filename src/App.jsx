import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header'
import  Timer from './components/timer/Timer'
import Footer from './components/footer/Footer'
import Presidents from './components/presidentsElc/Presidents'
import VoteModal from './components/modal/VoteModal'


function App() {
  

  return (
    <>
      <div className='App'>
        <Header />
        <Timer />
        <Presidents />
        <VoteModal />
        <Footer />
      </div>
    </>
  )
}

export default App
