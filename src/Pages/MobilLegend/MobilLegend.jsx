import React, { useEffect } from 'react'
import style from './MobilLegend.module.scss'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getSlicePubgThunk } from '../../Store/Reducers/getSlice'
import { FaStar, FaHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

const MobilLegend = () => {

    const dispatch = useDispatch();
    const dataPubg = useSelector((state) => state.pubgReducer.products);

    useEffect(() => {
        dispatch(getSlicePubgThunk());
    }, [dispatch]);

    const pubgProducts = dataPubg.filter(item => item.category === 'LOL');

    return (
        <div className={style.page}>
            <Header />
            <div className={style.cardPubg}>a
                <div className={style.container}>
                    {pubgProducts && pubgProducts.length > 0 ? (
                        pubgProducts.map((item) => (
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
                                        <span >
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
            <Footer />
        </div>
    )
}

export default MobilLegend
