import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import style from './NoticePanel.module.scss';
import carne from '../../Assets/Images/karne.webp';
import ronaldo from '../../Assets/Images/ronaldo.webp';
import s2gmerch from '../../Assets/Images/s2g merch.webp';
import mobilLegend from '../../Assets/Images/aemndor.webp';
import elmas from '../../Assets/Images/elmas.webp';

const NoticePanel = () => {
    const [images, setImages] = useState([mobilLegend, elmas, carne, ronaldo]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [currentImageIndex, images.length]);

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={style.page}>
            <div className={style.container}>
                <div className={style.noticeCarousel}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`slide-${index}`}
                            className={
                                index === currentImageIndex
                                    ? style.slideActive
                                    : style.slide
                            }
                        />
                    ))}
                    <button className={style.prevButton} onClick={prevSlide}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className={style.nextButton} onClick={nextSlide}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
                <div className={style.noticeRight}>
                    <div className={style.noticeRightTop}>
                        <img src={ronaldo} alt="ronaldo" />
                    </div>
                    <div className={style.noticeRightBottom}>
                        <img src={s2gmerch} alt="s2g merch" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoticePanel;
