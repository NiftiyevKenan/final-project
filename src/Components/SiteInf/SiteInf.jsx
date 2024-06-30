import React from 'react'
import style from './SiteInf.module.scss'
import truck from '../../Assets/Images/truck.webp'
import protect from '../../Assets/Images/protect.webp'
import people from '../../Assets/Images/people.webp'
import pay from '../../Assets/Images/pay.webp'

const SiteInf = () => {
    return (
        <div className={style.page}>
            <div className={style.container}>
                <div className={style.card}>
                    <h5>Hızlı Teslimat</h5>
                    <img src={truck} alt="Truck" />
                    <p>Sipariş verin, dakikalar içinde e-pin kodlarınızı hesabınıza teslim edelim</p>
                </div>
                <div className={style.card}>
                    <h5>Güvenli Alışveriş</h5>
                    <img src={protect} alt="Protect" />
                    <p>Kartla ödeme işlemlerinde 3D ve SSL ile güvenli alışveriş.</p>
                </div>
                <div className={style.card}>
                    <h5>Müşteri Memnuniyeti</h5>
                    <img src={people} alt="People" />
                    <p>Siz değerli müşterilerimizin mutluluğu ve memnuniyeti, işimizin temelidir.</p>
                </div>
                <div className={style.card}>
                    <h5>Uygun Fiyat</h5>
                    <img src={pay} alt="Pay" />
                    <p>S2GEPIN uygun fiyatları, ürünleri ve kampanyaları ile size sunuyoruz.</p>
                </div>
            </div>
        </div>
    )
}

export default SiteInf
