import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './CardPage.module.scss';
import { getSlicePubgThunk } from '../../Store/Reducers/getSlice';
import { FaStar } from "react-icons/fa";

const CardPage = () => {
    const dispatch = useDispatch();

    const dataPubg = useSelector((state) => state.pubgReducer.products);

    useEffect(() => {
        dispatch(getSlicePubgThunk());
    }, [dispatch]);

    const pubgProducts = dataPubg.filter(item => item.category === 'PUBG');

    return (
        <div className={style.page}>
            <div className={style.container}>
                <div className={style.containerTop}>
                    <h1>Pubg Mobile</h1>
                </div>
                <div className={style.cardBottom}>
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
                                <span>{item.price}$</span>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className={style.cardBottom}>

                </div>
            </div>
        </div>
    );
};

export default CardPage;
