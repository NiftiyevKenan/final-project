import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './DashBoard.module.css';

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!userInfo) {
      navigate('/main');
    }
   
  }, [navigate, userInfo, dispatch]);

  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={() => navigate('/profile')} className={styles.profileButton}>Go to Profile</button>
        <button onClick={() => navigate('/main')} className={styles.addButton}>Main</button>
      </div>
      <div className={styles.todoList}>
        
      </div>
    </div>
  );
};

export default Dashboard;