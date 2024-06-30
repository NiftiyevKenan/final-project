import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSlicePubgThunk } from '../../Store/Reducers/getSlice';
import { FaStar, FaHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import styles from './Supercell.module.scss';

const Supercell = () => {
  const [selectedCategory, setSelectedCategory] = useState('BrawlStars');
  const dispatch = useDispatch();
  const dataPubg = useSelector((state) => state.pubgReducer.products);
  const { userInfo } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSlicePubgThunk());
  }, [dispatch]);

  const filteredProducts = dataPubg.filter(item => item.category === selectedCategory);

  const handleAddToBag = (item) => {
    if (!userInfo) {
      toast.warn('Sepete eklemek için kayıt olmalısınız.');
      setTimeout(() => {
        navigate('/register', { state: { from: window.location.pathname } });
      }, 3000);
      return;
    }

    const storedUserInfo = localStorage.getItem('userInfo');
    let basketList = [];

    if (storedUserInfo) {
      const userInfoObject = JSON.parse(storedUserInfo);

      const productToAdd = {
        _id: userInfo._id,
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image
      };

      // Retrieve existing basketList from localStorage
      if (localStorage.getItem('basketList')) {
        basketList = JSON.parse(localStorage.getItem('basketList'));
      }

      // Add the product to basketList
      basketList.push(productToAdd);
      toast.success(`${item.title} sepete eklendi!`);

      // Update localStorage with updated basketList
      localStorage.setItem('basketList', JSON.stringify(basketList));

      // Update the basket count
      const basketCount = basketList.length;
      window.dispatchEvent(new Event('storage')); // Trigger a storage event
    } else {
      console.log('Kullanıcı bilgisi bulunamadı. Giriş yapmalısınız.');
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.top}>
          <button
            onClick={() => setSelectedCategory('BrawlStars')}
            className={selectedCategory === 'BrawlStars' ? styles.selected : ''}
          >
            BRAWL STARS
          </button>
          <button
            onClick={() => setSelectedCategory('ClashRoyale')}
            className={selectedCategory === 'ClashRoyale' ? styles.selected : ''}
          >
            CLASH ROYALE
          </button>
          <button
            onClick={() => setSelectedCategory('HayDay')}
            className={selectedCategory === 'HayDay' ? styles.selected : ''}
          >
            HAY DAY
          </button>
          <button
            onClick={() => setSelectedCategory('ClashOfClans')}
            className={selectedCategory === 'ClashOfClans' ? styles.selected : ''}
          >
            CLASH OF CLANS
          </button>
        </div>
        <div className={styles.bottom}>
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div key={item.id} className={styles.card}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <div className={styles.icons}>
                  <span className={styles.star}>
                    <span className={styles.yellowStar}>
                      <FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                    <span className={styles.whiteStar}><FaStar /></span>
                  </span>
                  <span>({item.number})</span>
                </div>
                <div className={styles.cart}>
                  <span>{item.price}$</span>
                  <div className={styles.cartIcon}>
                    <span onClick={() => handleAddToBag(item)}>
                      <IoCartOutline />
                    </span>
                    <span>
                      <FaHeart />
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Supercell;
