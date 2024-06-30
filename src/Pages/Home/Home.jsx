import React from 'react';

import Header from '../../Components/Header/Header'
import GameSelection from '../../Components/GameSelection/GameSelection'
import NoticePanel from '../../Components/NoticePanel/NoticePanel'
import CardPage from '../../Components/CardPage/CardPage'
import ImageRouter from '../../Components/ImageRouter/ImageRouter'
import Supercell from '../../Components/Supercell/Supercell'
import RiotGame from '../../Components/RiotGame/RiotGame'
import SiteInf from '../../Components/SiteInf/SiteInf'
import Footer from '../../Components/Footer/Footer'



const Home = () => {


  return (
        <div>
        <Header />
        <GameSelection />
        <NoticePanel />
        <CardPage />
        <ImageRouter />
        <Supercell />
        <RiotGame />
        <SiteInf />
        <Footer />
      </div>
  );
};

export default Home;
