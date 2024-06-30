import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Main.module.css';
const Main = () => {

  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/main');
    }
  }, [navigate, userInfo]);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>GAME WORLD</h1>
        <p className={styles.description}>Welcome To S2GEPIN</p>
        <div className={styles.buttons}>
          <button onClick={() => navigate('/login')} className={styles.button}>
            Login
          </button>
          <button onClick={() => navigate('/register')} className={styles.button}>
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main
