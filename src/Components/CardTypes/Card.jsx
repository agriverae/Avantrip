import React from 'react';
import styles from '../../styles/main.scss'

const Card = ({flight}) => {
    const cardStyle = {
        backgroundImage: `url(${flight.imgUrl})`
    };
    
    return (
        <div className={styles.card}>
            <div style={cardStyle} className={styles.cardImage}></div>
            <div className={styles.cardContent}>
                <div className={`${styles.contentFormat} ${styles.miscellaneous}`}>
                    <p>Directo</p>
                    <p>Precio desde</p>
                </div>
                <div className={`${styles.contentFormat} ${styles.cardDetails}`}>
                    <p>{flight.description}</p>
                    <p className={styles.cardDetailsBig} >${flight.price}</p>
                </div>
                <a className={`${styles.contentFormat} ${styles.cardLink}`} href={flight.link} target="_blank" rel="noopener noreferrer">Ver vuelo</a>
            </div>
        </div>
    )
}

export default Card;