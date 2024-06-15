import React from 'react'
import Header from '../../Components/Header/Header'
import GameSelection from '../../Components/GameSelection/GameSelection'
import NoticePanel from '../../Components/NoticePanel/NoticePanel'

const Home = () => {
  return (
    <div>
      <Header />
      <GameSelection/>
      <NoticePanel/>
    </div>
  )
}

export default Home
