import React from 'react';
import styles from '../../styles/main.scss'

const SmallCard = ({title, text, highlightText = false}) => {
    return (
        <div className={styles.smallCard}>
            <p className={styles.smallCardTitle}>{title}</p>
            <p className={styles.smallCardText + ' ' + (highlightText? styles.highlightText : null)} >
                {text}
            </p>
        </div>
    )
}

export default SmallCard;