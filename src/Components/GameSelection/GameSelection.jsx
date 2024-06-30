import React from 'react'
import style from './GameSelection.module.scss'
import pubg from '../../Assets/Images/docstory_cc861b929cbbe94c8855245f8b3aca26.webp'
import valorant from '../../Assets/Images/docstory (1)_c3161cc15b39f65b5d730e9427f1035b.webp'
import brawlStar from '../../Assets/Images/docbrawl_b197aa0a175c62e0a719157c4182f97c.webp'
import lol from '../../Assets/Images/docSTORY_b364300e47813d1536ce1485a46c0286.webp'
import mobilLegend from '../../Assets/Images/docstory_6347afc348ee76652c6f8fc6c20425ce.webp'
import steam from '../../Assets/Images/doc3_53bb0446615adc57f0d23fc95192fdb8.webp'
import playStore from '../../Assets/Images/docAdsız tasarım(50)_277e3c9ec9e04fdca870335607b3a593.webp'
import iphone from '../../Assets/Images/doc5_7e8b20afb42aacf228db286e47aca801.webp'
import metin2 from '../../Assets/Images/docstory_ab7258592d554c605ca95d168da7f04c.webp'
import clash from '../../Assets/Images/doccoc_9a93aceb5b85266d7efa6c42874e116c.webp'
import royale from '../../Assets/Images/doccr_4184226c4719b5a02db0d5056dd5c6ce.webp'
import hayDay from '../../Assets/Images/dochayday_1d97782d9fe2da605ad5cfbe9ef8222e.webp'
import { useNavigate } from 'react-router-dom'

const GameSelection = () => {

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
                <div className={style.gameImg}>
                    <img src={pubg} onClick={() => goToPubg()} alt="pubg" />
                </div>
                <div className={style.gameImg}>
                    <img src={valorant} onClick={() => goToValorant()} alt="valorant" />
                </div>
                <div className={style.gameImg}>
                    <img src={brawlStar} onClick={() => goToBrawlStar()} alt="brawlStar" />
                </div>
                <div className={style.gameImg}>
                    <img src={lol}  onClick={() => goToMobilLegend()} alt="lol" />
                </div>
                <div className={style.gameImg}>
                    <img src={mobilLegend} onClick={() => goToMobilLegend()} alt="mobilLegend" />
                </div>
                <div className={style.gameImg}>
                    <img src={steam} alt="steam" />
                </div>
                <div className={style.gameImg}>
                    <img src={playStore} alt="playStore" />
                </div>
                <div className={style.gameImg}>
                    <img src={iphone} alt="iphone" />
                </div>
                <div className={style.gameImg}>
                    <img src={metin2} alt="metin2" />
                </div>
                <div className={style.gameImg}>
                    <img src={clash} alt="clash" />
                </div>
                <div className={style.gameImg}>
                    <img src={royale} alt="royale" />
                </div>
                <div className={style.gameImg}>
                    <img src={hayDay} alt="hayDay" />
                </div>
            </div>
        </div>
    )
}

export default GameSelection
