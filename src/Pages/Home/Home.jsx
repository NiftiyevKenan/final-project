import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import GameSelection from '../../Components/GameSelection/GameSelection'
import NoticePanel from '../../Components/NoticePanel/NoticePanel'
import CardPage from '../../Components/CardPage/CardPage'
import ImageRouter from '../../Components/ImageRouter/ImageRouter'
import Supercell from '../../Components/Supercell/Supercell'
import RiotGame from '../../Components/RiotGame/RiotGame'
import SiteInf from '../../Components/SiteInf/SiteInf'
import Footer from '../../Components/Footer/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {

  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

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
    //   <div className={styles.container}>
    //   <div className={styles.content}>
    //     <h1 className={styles.title}>Welcome to TODO App</h1>
    //     <p className={styles.description}>
    //       Manage your tasks with our simple TODO
    //       app.
    //     </p>
    //     <div className={styles.buttons}>
    //       <button onClick={() => navigate("/login")} className={styles.button}>
    //         Login
    //       </button>
    //       <button
    //         onClick={() => navigate("/register")}
    //         className={styles.button}
    //       >
    //         Register
    //       </button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Home
