import React, { useContext } from 'react';
import Spinner from '../Auxiliar/Spinner'
import Card from '../CardTypes/Card';
import styles from '../../styles/main.scss';
import { CARDS_QUERY } from '../../Queries';
import { Query } from "react-apollo";
import { StayContext } from '../../Context/Context'

const FlightResults = () => {

    const stayState = useContext(StayContext);

    return (
        <main className={styles.flightResults}>
            <h3 className={styles.resultsTitle}>Vuelos destacados en 
                <span className={styles.resultsTitleHighlight}> todas las estadías</span>
            </h3>

            <Query 
                    query={CARDS_QUERY}
                    variables={{ stayId: stayState.stayId }}
                >
                    {({loading, error, data}) => {
                        if(loading) return <Spinner />;
                        if(error) return `Error: ${error.message}`;

                        return (
                            <div className={styles.cardsContainer}>
                                {data.allCards.map((flight) => {
                                    return (
                                        <Card flight={flight} key={flight.id} />
                                    )
                                })}
                            </div>
                        ) 
                    }}
            </Query>

        </main>
    )
}

export default FlightResults;