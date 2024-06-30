import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import styles from './Wishlist.module.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');

    if (storedWishlist) {
      const parsedWishlist = JSON.parse(storedWishlist);
      setWishlistItems(parsedWishlist);
    }
  }, []);

  const handleAddToBasket = (item) => {
    const storedBasketList = localStorage.getItem('basketList');
    let basketList = [];

    if (storedBasketList) {
      basketList = JSON.parse(storedBasketList);
    }

    const existingItem = basketList.find((basketItem) => basketItem.id === item.id);

    if (existingItem) {
      const updatedBasketItems = basketList.map((basketItem) =>
        basketItem.id === item.id ? { ...basketItem, count: basketItem.count + 1 } : basketItem
      );
      localStorage.setItem('basketList', JSON.stringify(updatedBasketItems));
      toast.success(`${item.title} sepete eklendi!`);
    } else {
      const updatedBasketItems = [...basketList, { ...item, count: 1 }];
      localStorage.setItem('basketList', JSON.stringify(updatedBasketItems));
      toast.success(`${item.title} sepete eklendi!`);
    }
  };

  const handleRemoveFromWishlist = (itemId) => {
    const updatedWishlistItems = wishlistItems.filter((item) => item.id !== itemId);
    setWishlistItems(updatedWishlistItems);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlistItems));
  };

  const handleBasketView = () => {
    if (!userInfo) {
      toast.warn('Sepete eklemek için kayıt olmalısınız.');
      setTimeout(() => {
        navigate('/register', { state: { from: window.location.pathname } });
      }, 3000);
      return;
    }
  };

  useEffect(() => {
    handleBasketView();
  }, [userInfo]);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.wishlist}>
        <h2>Favorileriniz</h2>
        <ul>
          {wishlistItems.map((item, index) => (
            <li key={index}>
              <div className={styles.image}><img src={item.image} alt={item.title} /></div>
              <div>
                <h3>{item.title}</h3>
                <p>Qiymət: {item.price} ₼</p>
                <div className={styles.btns}>
                  <button onClick={() => handleRemoveFromWishlist(item.id)}>Sil</button>
                  <button onClick={() => handleAddToBasket(item)}>Sepete Ekle</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
