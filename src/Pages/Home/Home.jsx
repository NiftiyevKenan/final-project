import React from 'react'
import Header from '../../Components/Header/Header'
import GameSelection from '../../Components/GameSelection/GameSelection'
import NoticePanel from '../../Components/NoticePanel/NoticePanel'
import CardPage from '../../Components/CardPage/CardPage'

const Home = () => {
  return (
    <div>
      <Header />
      <GameSelection/>
      <NoticePanel/>
      <CardPage/>
    </div>
  )
}

export default Home
