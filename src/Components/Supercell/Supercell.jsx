import React, { useEffect, useState } from 'react';
import style from './Supercell.module.scss';
import brawlBtn from '../../Assets/Images/bravlBtn.webp';
import royaleBtn from '../../Assets/Images/royaleBtn.webp';
import haydayBtn from '../../Assets/Images/haydayBtn.webp';
import clashBtn from '../../Assets/Images/clashBtn.webp';
import { useDispatch, useSelector } from 'react-redux';
import { getSlicePubgThunk } from '../../Store/Reducers/getSlice';
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Supercell = () => {
    const [selectedCategory, setSelectedCategory] = useState('BrawlStars'); 

    const dispatch = useDispatch();
    const dataPubg = useSelector((state) => state.pubgReducer.products);

    useEffect(() => {
        dispatch(getSlicePubgThunk());
    }, [dispatch]);

    const filteredProducts = dataPubg.filter(item => item.category === selectedCategory);

    return (
        <div className={style.page}>
            <div className={style.container}>
                <div className={style.top}>
                    <button
                        onClick={() => setSelectedCategory('BrawlStars')}
                        className={selectedCategory === 'BrawlStars' ? style.selected : ''}
                    >
                        <img src={brawlBtn} alt="BrawlStar" />
                        <h5>BRAWL STARS</h5>
                    </button>
                    <button
                        onClick={() => setSelectedCategory('ClashRoyale')}
                        className={selectedCategory === 'ClashRoyale' ? style.selected : ''}
                    >
                        <img src={royaleBtn} alt="Royale" />
                        <h5>CLASH ROYALE</h5>
                    </button>
                    <button
                        onClick={() => setSelectedCategory('HayDay')}
                        className={selectedCategory === 'HayDay' ? style.selected : ''}
                    >
                        <img src={haydayBtn} alt="Hayday" />
                        <h5>HAY DAY</h5>
                    </button>
                    <button
                        onClick={() => setSelectedCategory('ClashOfClans')}
                        className={selectedCategory === 'ClashOfClans' ? style.selected : ''}
                    >
                        <img src={clashBtn} alt="Clash" />
                        <h5>CLASH OF CLANS</h5>
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
                                        <span><IoCartOutline /></span>
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
}

export default Supercell;
