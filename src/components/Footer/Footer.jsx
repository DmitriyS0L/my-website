import React from 'react';
import { ReactComponent as Facebook } from '../../assets/Image/SocialMedia/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/Image/SocialMedia/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/Image/SocialMedia/twitter.svg';
import { ReactComponent as YouTube } from '../../assets/Image/SocialMedia/youtube.svg';
import { ReactComponent as Viber } from '../../assets/Image/SocialMedia/viber.svg';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSocialContainer}>
        <p className={styles.footerSocialContainerText}>
          Find us in social media
        </p>
        <ul className={styles.socialMedia}>
          <li className={styles.socialMediaItem}>
            <a href="https://www.facebook.com">
              <Facebook className={styles.socialMediaIcon} />
            </a>
          </li>
          <li className={styles.socialMediaItem}>
            <a href="https://www.instagram.com">
              <Instagram className={styles.socialMediaIcon} />
            </a>
          </li>
          <li className={styles.socialMediaItem}>
            <a href="https://www.twitter.com">
              <Twitter className={styles.socialMediaIcon} />
            </a>
          </li>
          <li className={styles.socialMediaItem}>
            <a href="youtube.com">
              <YouTube className={styles.socialMediaIcon} />
            </a>
          </li>
          <li className={styles.socialMediaItem}>
            <a href="viber">
              <Viber className={styles.socialMediaIcon} />
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.footerText}>&copy; 2024 | All rights reserved.</p>
    </footer>
  );
};
