import React, {useContext} from 'react';
import styles from '../../styles/main.scss';
import SmallCard from '../CardTypes/SmallCard';
import { StayContext } from '../../Context/Context'

const CheapFlights = ({stays}) => {

    const stayState = useContext(StayContext);

    const lala = (stayId) => {
        stayState.handleStayChange(stayId)
    }

    return (
        <section className={styles.cheapFlights}>
            <h2 className={styles.flightTitles} >Los vuelos más baratos para tu estadia en <span className={styles.strongFont}>Miami</span></h2>
            <div className={styles.cardsContainer}>
                {stays.map((stay) => {
                const price = parseInt(stay.bestPrice, 10).toLocaleString('de-DE');
                const text = `desde $${price}`
                return ( 
                    <SmallCard
                        clickHandler={() => lala(stay.customId)}
                        title={stay.label}
                        highlightText={true}
                        text={text}
                        key={stay.id} />
                    )
                })}
            </div>
        </section>
    )
}

export default CheapFlights;