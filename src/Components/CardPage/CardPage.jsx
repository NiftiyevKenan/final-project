import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './CardPage.module.scss';
import { getSliceMobilLegendThunk, getSlicePubgThunk } from '../../Store/Reducers/getSlice';
import { FaStar } from "react-icons/fa";

const CardPage = () => {
    const dispatch = useDispatch();

    const dataPubg = useSelector((state) => state.pubgReducer.products);
    const dataMobilLegend = useSelector((state) => state.mobilLegendReducer.products)

    useEffect(() => {
        dispatch(getSlicePubgThunk());
        dispatch(getSliceMobilLegendThunk());
    }, [dispatch]);

    return (
        <div className={style.page}>
            <div className={style.container}>
                <div className={style.cardTop}>
                    {dataPubg && dataPubg.length > 0 ? (
                        dataPubg.map((item) => (
                            <div key={item.id} className={style.card}>
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                                <div className={style.icons}>
                                    <span className={style.star}> <span className={style.yellowStar}><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                        <span className={style.whiteStar}><FaStar /></span></span>
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
                    {dataMobilLegend && dataMobilLegend.length > 0 ? (
                        dataPubg.map((item) => (
                            <div key={item.id} className={style.card}>
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                                <div className={style.icons}>
                                    <span className={style.star}> <span className={style.yellowStar}><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                        <span className={style.whiteStar}><FaStar /></span></span>
                                    <span>({item.number})</span>
                                </div>
                                <span>{item.price}$</span>
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
