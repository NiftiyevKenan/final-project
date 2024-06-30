import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import styles from './Basket.module.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Basket = () => {
  const [basketItems, setBasketItems] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBasketList = localStorage.getItem('basketList');

    if (storedBasketList) {
      const parsedBasketList = JSON.parse(storedBasketList);
      const updatedBasketItems = parsedBasketList.map(item => ({
        ...item,
        count: parseInt(item.count) || 1,
        price: parseFloat(item.price).toFixed(2)
      }));
      setBasketItems(updatedBasketItems);
    }
  }, []);

  const handleIncreaseQuantity = (itemId) => {
    const updatedBasketItems = basketItems.map(item => {
      if (item.id === itemId) {
        const newCount = item.count + 1;
        const newPrice = (item.price / item.count) * newCount;

        return {
          ...item,
          count: newCount,
          price: newPrice.toFixed(2)
        };
      }
      return item;
    });

    localStorage.setItem('basketList', JSON.stringify(updatedBasketItems));
    setBasketItems(updatedBasketItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedBasketItems = basketItems.map(item => {
      if (item.id === itemId) {
        if (item.count > 1) {
          const newCount = item.count - 1;
          const newPrice = (item.price / item.count) * newCount;

          return {
            ...item,
            count: newCount,
            price: newPrice.toFixed(2)
          };
        }
      }
      return item;
    }).filter(item => item !== null);

    localStorage.setItem('basketList', JSON.stringify(updatedBasketItems));
    setBasketItems(updatedBasketItems);
  };

  const handleRemoveItem = (itemId) => {
    const updatedBasketItems = basketItems.filter(item => item.id !== itemId);

    localStorage.setItem('basketList', JSON.stringify(updatedBasketItems));
    setBasketItems(updatedBasketItems);
  };

  const filteredBasketItems = userInfo ? basketItems.filter(item => item._id === userInfo._id) : [];

  const handlePayment = (item) => {
    navigate('/basket/odenis', { state: { itemPrice: item.price } });
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
      <div className={styles.basketList}>
        <h2>Səbətiniz</h2>
        <ul>
          {filteredBasketItems.map((item, index) => (
            <li key={index}>
              <div className={styles.image}><img src={item.image} alt={item.title} /></div>
              <div>
                <h3>{item.title}</h3>
                <p>Qiymət: {item.price} ₼</p>
                <p>Ədəd: {item.count}</p>
                <div className={styles.btns}>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>Artır</button>
                  <button onClick={() => handleDecreaseQuantity(item.id)}>Azalt</button>
                  <button onClick={() => handleRemoveItem(item.id)}>Sil</button>
                  <button onClick={() => handlePayment(item)}>Buy</button>
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

export default Basket;
