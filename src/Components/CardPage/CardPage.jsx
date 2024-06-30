import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './CardPage.module.scss';
import { getSlicePubgThunk } from '../../Store/Reducers/getSlice';
import { FaStar, FaHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const CardPage = () => {
    const dispatch = useDispatch();
    const dataPubg = useSelector((state) => state.pubgReducer.products);
    const [product, setProduct] = useState(null);
    const { note_id } = useParams();
    const { userInfo } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getSlicePubgThunk());
    }, [dispatch]);

    useEffect(() => {
        if (dataPubg.length > 0) {
            const foundProduct = dataPubg.find(item => item.id === note_id);
            setProduct(foundProduct);
        }
    }, [dataPubg, note_id]);

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

    const handleAddToWishlist = (item) => {
        if (!userInfo) {
            toast.warn('Favorilere eklemek için kayıt olmalısınız.');
            setTimeout(() => {
                navigate('/register', { state: { from: window.location.pathname } });
            }, 3000);
            return;
        }

        const storedUserInfo = localStorage.getItem('userInfo');
        let wishlist = [];

        if (storedUserInfo) {
            const userInfoObject = JSON.parse(storedUserInfo);

            const productToAdd = {
                _id: userInfo._id,
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image
            };

            // Retrieve existing wishlist from localStorage
            if (localStorage.getItem('wishlist')) {
                wishlist = JSON.parse(localStorage.getItem('wishlist'));
            }

            // Check if the product is already in the wishlist
            const existingItem = wishlist.find((wishlistItem) => wishlistItem.id === item.id);
            if (existingItem) {
                toast.warn(`${item.title} zaten favorilere eklenmiş.`);
                return;
            }

            // Add the product to wishlist
            wishlist.push(productToAdd);
            toast.success(`${item.title} favorilere eklendi!`);

            // Update localStorage with updated wishlist
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        } else {
            console.log('Kullanıcı bilgisi bulunamadı. Giriş yapmalısınız.');
        }
    };

    return (
        <div className={style.page}>
            <div className={style.container}>
                <div className={style.containerTop}>
                    <h1>Pubg Mobile</h1>
                </div>
                <div className={style.cardBottom}>
                    {dataPubg && dataPubg.length > 0 ? (
                        dataPubg.filter(item => item.category === 'PUBG').map((item) => (
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
                                        <span onClick={() => handleAddToWishlist(item)}>
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

export default CardPage;
