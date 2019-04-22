import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/main.scss'

const SmallCard = ({title,clickHandler, text, highlightText = false, selected}) => {
    return (
        <div 
            onClick={clickHandler}
            className={`${selected? styles.smallCardSelected : null} ${styles.smallCard}`}>
            <p className={styles.smallCardTitle}>{title}</p>
            <p className={styles.smallCardText + ' ' + (highlightText? styles.highlightText : null)} >
                {text}
            </p>
        </div>
    )
}

SmallCard.propTypes = {
    title: PropTypes.string,
    clickHandler: PropTypes.func,
    text: PropTypes.string,
    highlightText: PropTypes.bool,
    selected: PropTypes.bool
}

export default SmallCard;