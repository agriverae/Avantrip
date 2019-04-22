import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/main.scss'

const Card = ({flight}) => {
    const cardStyle = {
        backgroundImage: `url(${flight.imgUrl})`
    };
    
    return (
        <div onClick={()=> window.open(`${flight.link}`, "_blank")} className={styles.card}>
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
                <a className={`${styles.contentFormat} ${styles.cardLink}`}>Ver vuelo</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    flight: PropTypes.object
}

export default Card;