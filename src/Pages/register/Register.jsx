import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Register.module.css';
import { useRegisterMutation } from "../../Store/Reducers/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../Store/Reducers/authSlice";
import { toast } from "react-toastify";
import 'react-toastify/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector(state => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigation('/dashboard');
    }
  }, [navigation, userInfo]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Şifreler uyuşmuyor');
      return;
    }
    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success('Kayıt başarılı. Şimdi giriş yapabilirsiniz.');
      setTimeout(() => {
        navigation('/login');
      }, 2000);
    } catch (error) {
      toast.error('Kayıt işlemi başarısız');
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.auth}>
        <h1>S2GEPIN REGISTER</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Kullanıcı oluşturuluyor...' : 'Register'}
          </button>
        </form>
        <p className={styles.loginmessage} onClick={() => navigation('/login')}>
          <span>Giriş yapmak için tıklayın</span>
        </p>
      </div>
    </section>
  );
};

export default Register;
