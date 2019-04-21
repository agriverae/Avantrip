import React from 'react';
import styles from '../../styles/main.scss'
import logo from '../../images/avanTripLogo.png'

const Header = () => (
    <header className={styles.header}>
        <div className={styles.imageContainer}>
            <img className={styles.img} src={logo} alt="AvanTrip Logo"/>
        </div>
        <h1 className={styles.title}>Viajar es la guita mejor invertida</h1>
    </header>
)

export default Header;