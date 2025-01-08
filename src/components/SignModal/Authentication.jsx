import React, { useState } from 'react';
import Modal from 'react-modal';
import GoogleIcon from '../../assets/Image/Authentication/Google.png';
import Banner from '../../assets/Image/Authentication/banner.png';
import styles from './Authentication.module.scss';

export const Authentication = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);

  // const handleOpenModal = () => {
  //   setIsOpenModal(true);
  // };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={handleCloseModal}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <div className={styles.modalContainer}>
        <div className={styles.imageContainer}>
          <img src={Banner} alt="Banner" />
        </div>
        <div className={styles.signContainer}>
          <div className={styles.closeButton} onClick={handleCloseModal} />
          <div className={styles.headerContainer}>
            <h1>Sign up</h1>
            <p className={styles.subTitle}>
              Sign up now and get access to exclusive content!
            </p>
          </div>
          <form action="/signup" method="POST">
            <div className={styles.formGroup}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email@mail.com"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className={styles.forgotPassword}>
              Forgot password? <a href="">Reset password</a>
            </div>
            <button type="submit" className={styles.signUpButton}>
              Sign Up
            </button>
          </form>
          <p className={styles.terms}>
            By clicking on Sign up, you agree to our{' '}
            <a href="/terms">Terms of service</a> and{' '}
            <a href="/privacy">Privacy policy</a>.
          </p>
          <p className={styles.separator}>or</p>
          <button className={styles.googleButton}>
            <img src={GoogleIcon} alt="Google" />
            Sign with Google
          </button>
        </div>
      </div>
    </Modal>
  );
};
