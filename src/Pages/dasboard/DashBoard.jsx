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
      navigate('/login');
    }
   
  }, [navigate, userInfo, dispatch]);

  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={() => navigate('/profile')} className={styles.profileButton}>Go to Profile</button>
        <button onClick={() => navigate('/add-new-todo')} className={styles.addButton}>Add new TODO task</button>
      </div>
      <div className={styles.todoList}>
        
      </div>
    </div>
  );
};

export default Dashboard;