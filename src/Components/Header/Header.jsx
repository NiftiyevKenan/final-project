import React from 'react'
import style from './Header.module.scss'
import { FaInstagram } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import TurkishFlag from '../../Assets/Images/tr.webp'
import s2gepin from '../../Assets/Images/docs2gpin_logo_text_site_icin_beyaz optimize_b4ecb75d037cd64d81723a8a6900e9b2.webp'

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.headerTop}>
          <div className={style.icons}>
            <a href="https://www.instagram.com/s2gepin/" target="_blank" className={style.icon}><FaInstagram /></a>
            <a href="https://discord.com/invite/s2gepin" target="_blank" className={style.icon}><IoLogoDiscord /></a>
            <a href="https://twitter.com/s2gepin" target="_blank" className={style.iconTwitter}><FaTwitter /></a>
            <a href="https://www.tiktok.com/@s2gepin" target="_blank" className={style.icon}><FaTiktok /></a>
          </div>
          <div className={style.information}>
            <ul>
              <li>
                <a href="">Bayilik Başvurusu</a>
              </li>
              <li>
                <a href="">Yayıncılar</a>
              </li>
              <li>
                <a href="" className={style.whatchapp}>Whatsapp Destek Hattı</a>
              </li>
              <li>
                <a href="">Çözüm Merkezi</a>
              </li>
              <li>
                <a href="" className={style.money}>+Bakiye Yükle</a>
              </li>
              <li>
                <a href="#" className={style.country}>
                  <img src={TurkishFlag} alt="TurkishFlag" />
                  Türkçe / AZN  <IoIosArrowDown />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.headerMiddle}>
          <div className={style.left}>
            <div className={style.logo}>
              <img src={s2gepin} alt="logo" />
            </div>
            <div className={style.search}>
              <input type="text" placeholder='Ürün, kategori veya marka ara' />
              <button><IoSearch /></button>
            </div>
          </div>
          <div className={style.account}>
            <div className={style.message}>
              <div className={style.icon}>
                <FaRegBell />
                <span>0</span>
              </div>
              <div className={style.icon}>
                <FaRegEnvelope />
                <span>0</span>
              </div>
            </div>
            <div className={style.profil}>
              <div className={style.profilContainer}>
                <div className={style.icon}>
                  <FaRegUser />
                </div>
                <div className={style.profilName}>
                  <div className={style.login}>
                    <h4>Giriş yap</h4>
                    <span>veya üye ol</span>
                  </div>
                  <div className={style.iconArrow}>
                    <IoIosArrowDown />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.cart}>
              <div className={style.icon}>
                <FaShoppingCart />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
