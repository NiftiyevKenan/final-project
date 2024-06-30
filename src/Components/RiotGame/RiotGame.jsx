import React, { useEffect, useState } from 'react'
import style from './RiotGame.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getSlicePubgThunk } from '../../Store/Reducers/getSlice';
import { FaStar } from "react-icons/fa";
import turkishFlag from '../../Assets/Images/turkishFlag.webp'
import EU from '../../Assets/Images/europeFlag.webp'
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const RiotGame = () => {

    const [selectedCategory, setSelectedCategory] = useState('Valorant'); 

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
  )
}

export default RiotGame
