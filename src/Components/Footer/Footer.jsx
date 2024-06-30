import React from 'react'
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
          <ul>
            <h1>Kurumsal</h1>
            <li>
              <a href="#">Hakkımızda</a>
              <a href="#">Çözüm Merkezi</a>
            </li>
          </ul>
          <ul>
            <h1>Sözleşmeler</h1>
            <li>
              <a href="#">Gizlilik Politikası</a>
              <a href="#">Kullanıcı Sözleşmesi</a>
              <a href="#">Satış Sözleşmesi</a>
              <a href="#">İptal & İade Koşulları</a>
              <a href="#">KVKK</a>
              <a href="#">Çerez Politikası</a>
            </li>
          </ul>
          <ul>
            <h1>Üyelik</h1>
            <li>
              <a href="#">Şifremi Unuttum</a>
              <a href="#">Hesabım</a>
              <a href="#">Cüzdanım</a>
              <a href="#">Beğendiklerim</a>
              <a href="#">Siparişlerim</a>
              <a href="#">İlan Yönetimi</a>
              <a href="#">Destek Taleplerim</a>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Footer
