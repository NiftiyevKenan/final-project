import React, { useState, useEffect } from 'react';
import style from './Header.module.scss';
import { FaInstagram, FaTwitter, FaTiktok, FaRegBell, FaRegEnvelope, FaRegUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoLogoDiscord, IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { HiGift } from "react-icons/hi";
import TurkishFlag from '../../Assets/Images/tr.webp';
import s2gepin from '../../Assets/Images/s2gepinlogo.webp';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  const navigate = useNavigate();

  const goToBasket = () => {
    navigate('/basket');
  };

  const goToHome = () => {
    navigate('/');
  };

  const goToPubg = () => {
    navigate('/pubg');
  };

  const goToValorant = () => {
    navigate('/valorant');
  };

  const goToAll = () => {
    navigate('/all');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/Pubg`);
      const data = await response.json();
      const filteredResults = data.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
      setSearchResults(filteredResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

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
          <div className={style.bars} onClick={toggleSidebar}>
            <FaBars />
          </div>
          <div className={style.left}>
            <div className={style.logo} onClick={() => goToHome()}>
              <img src={s2gepin} alt="logo" />
            </div>
            <div className={style.search}>
              <input 
                type="text" 
                placeholder='Ürün, kategori veya marka ara' 
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button><IoSearch /></button>
              {searchResults.length > 0 && (
                <div className={style.searchResults}>
                  <ul>
                    {searchResults.map(result => (
                      <li key={result.id}>{result.title}</li>
                    ))}
                  </ul>
                </div>
              )}
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
            <div className={style.profil} onMouseEnter={toggleProfile} onMouseLeave={toggleProfile}>
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
              {/* {isProfileOpen && (
                <div className={style.dropdownMenu}>
                  <a href="">Profilim</a>
                  <a href="">Siparişlerim</a>
                  <a href="">Satışlarım</a>
                  <a href="">Cüzdanım</a>
                  <a href="">Bakiye Yükle</a>
                  <a href="">İlan Yönetimi</a>
                  <a href="">İlan Mesajlarım</a>
                  <a href="">Beğendiklerim</a>
                  <a href="">Listelerim</a>
                  <a href="">Kuponlarım</a>
                  <a href="">Yayıncı Bilgilerim</a>
                  <a href="">Kullanıcı Bilgilerim</a>
                  <a href="">Destek Taleplerim</a>
                </div>
              )} */}
            </div>
            <div className={style.cart}>
              <div className={style.icon} onClick={() => goToBasket()}>
                <FaShoppingCart />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.headerBottom}>
          <div className={style.headerBottomBox}>
            <a href="" onClick={() => goToAll()}>Tüm Ürünler</a>
          </div>
          <div className={style.headerBottomBox}>
            <a href="" onClick={() => goToPubg()}>PUBG MOBILE</a>
          </div>
          <div className={style.headerBottomBox}>
            <a href="" onClick={() => goToValorant()}>VALORANT</a>
          </div>
          <div className={style.headerBottomBox}>
            <a href="">KAMPANYALAR</a>
          </div>
          <div className={style.headerBottomBox}>
            <a href="">Platformlar</a>
          </div>
          <div className={style.headerBottomBox}>
            <a href=""><HiGift /> Hediye & Cüzdan</a>
          </div>
          <div className={style.headerBottomBox}>
            <a href="">Çekilişler</a>
          </div>
          <div className={style.headerBottomBox}>
            <a href="">S2G MERCH</a>
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <div className={style.sidebar}>
          <div className={style.sidebarClose} onClick={toggleSidebar}>
            <FaTimes />
          </div>
          <div className={style.sidebarContent}>
            <a href="">Tüm Ürünler</a>
            <a href="">PUBG Mobile UC</a>
            <a href="">Valorant VP</a>
            <a href="">Brawl Stars</a>
            <a href="">Mobile Legends</a>
            <a href="">KAMPANYALAR</a>
            <a href="">S2G MERCH</a>
            <a href="">Çekilişler</a>
            <a href="">Yayıncı Destekle</a>
            <a href="">Bakiye Yükle</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
