import React, { useEffect, useState } from 'react';
import style from './RiotGame.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getSlicePubgThunk } from '../../Store/Reducers/getSlice';
import { FaStar, FaHeart } from 'react-icons/fa';
import turkishFlag from '../../Assets/Images/turkishFlag.webp';
import EU from '../../Assets/Images/europeFlag.webp';
import { IoCartOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RiotGame = () => {
    const [selectedCategory, setSelectedCategory] = useState('Valorant');
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
        <div className={style.page}>
            <div className={style.container}>
                <div className={style.top}>
                    <button
                        onClick={() => setSelectedCategory('Valorant')}
                        className={selectedCategory === 'Valorant' ? style.selected : ''}
                    >
                        <img src={turkishFlag} alt="Valorant" />
                        <h5>VALORANT</h5>
                    </button>
                    <button
                        onClick={() => setSelectedCategory('LOL')}
                        className={selectedCategory === 'LOL' ? style.selected : ''}
                    >
                        <img src={turkishFlag} alt="LOL" />
                        <h5>LEAGUE OF LEGENDS</h5>
                    </button>
                    <button
                        onClick={() => setSelectedCategory('EU')}
                        className={selectedCategory === 'EU' ? style.selected : ''}
                    >
                        <img src={EU} alt="EU" />
                        <h5>EU WEST</h5>
                    </button>
                </div>
                <div className={style.bottom}>
                    {filteredProducts && filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <div key={item.id} className={style.card}>
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                                <div className={style.icons}>
                                    <span className={style.star}>
                                        <span className={style.yellowStar}>
                                            <FaStar /><FaStar /><FaStar /><FaStar />
                                        </span>
                                        <span className={style.whiteStar}><FaStar /></span>
                                    </span>
                                    <span>({item.number})</span>
                                </div>
                                <div className={style.cart}>
                                    <span>{item.price}$</span>
                                    <div className={style.cartIcon}>
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

export default RiotGame;
