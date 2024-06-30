import React from 'react'
import style from './ImageRouter.module.scss'
import pubgRouter from '../../Assets/Images/pubgrouter.webp'
import BrawlRouter from '../../Assets/Images/brawlrouter.webp'
import ValorantRouter from '../../Assets/Images/valoroter.webp'
import MobilLegendRouter from '../../Assets/Images/mobilelegendrouter.webp'
import { useNavigate } from 'react-router-dom'

const ImageRouter = () => {

    const navigation = useNavigate()

    const goToPubg = () => {
        navigation('/pubg')
    }

    const goToValorant = () => {
        navigation('/valorant')
    }

    const goToMobilLegend = () => {
        navigation('/mobilLegend')
    }

    const goToBrawlStar = () => {
        navigation('/brawlstar')
    }

    return (
        <div className={style.page}>
            <div className={style.container}>
                <img src={pubgRouter} onClick={() => goToPubg()} alt="ImageRouter" />
                <img src={BrawlRouter} onClick={() => goToBrawlStar()} alt="ImageRouter" />
                <img src={ValorantRouter} onClick={() => goToValorant()} alt="ImageRouter" />
                <img src={MobilLegendRouter}  onClick={() => goToMobilLegend()} alt="ImageRouter" />
            </div>
        </div>
    )
}

export default ImageRouter
