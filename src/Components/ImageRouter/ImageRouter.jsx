import React from 'react'
import style from './ImageRouter.module.scss'
import pubgRouter from '../../Assets/Images/pubgrouter.webp'
import BrawlRouter from '../../Assets/Images/brawlrouter.webp'
import ValorantRouter from '../../Assets/Images/valoroter.webp'
import MobilLegendRouter from '../../Assets/Images/mobilelegendrouter.webp'

const ImageRouter = () => {
    return (
        <div className={style.page}>
            <div className={style.container}>
                <img src={pubgRouter} alt="ImageRouter" />
                <img src={BrawlRouter} alt="ImageRouter" />
                <img src={ValorantRouter} alt="ImageRouter" />
                <img src={MobilLegendRouter} alt="ImageRouter" />
            </div>
        </div>
    )
}

export default ImageRouter
