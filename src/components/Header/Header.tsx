import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import ProfilePicture from '@/assets/ProfilePicture.png';
import MenuIcon from '@/assets/MenuIcon.svg'
import Verified from '@/assets/Verified.svg'
import Email from '@/assets/Email.svg'
import Location from '@/assets/Location.svg'

const Header: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    function handleScroll () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsHeaderVisible(scrollTop === 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.headerContainer}>
      <div className={`${styles.header} ${isHeaderVisible ? '' : styles.hideHeader}`}>
        <img src={ProfilePicture} alt="Profile Photo" className="profile-photo" height="40" width="40" />
        <div className={styles.info}>
          <div className={styles.nameContainer}>
            <h1 className={styles.name}>Melanie Tan</h1>
            <img src={Verified} alt="Verified" className="verified" />
          </div>
          <p className={styles.job}>Professional Food Photographer</p>
          <div className={styles.emailContainer}>
            <img src={Location} alt="Location" className="location" />
            <p className={styles.job}>Bangkok</p>
            <img src={Email} alt="Email" className="email" />
            <p className={styles.job}>melanietan99@gmail.com</p>
          </div>
        </div>
        <div>
          <img src={MenuIcon}/>
        </div>
      </div>
    </div>
  );
}

export default Header;