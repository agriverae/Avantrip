import React, { Fragment, useState } from 'react';
import { Query } from "react-apollo";
import { STAYS_QUERY } from './Queries';
import Spinner from './Components/Auxiliar/Spinner';
import Header from './Components/Header/Header'
import CheapFlights from './Components/CheapFlights/CheapFlights';
import FlightResults from './Components/FlightResults/FlightResults';
import { StayContext } from './Context/Context'

const App = () => {

    const [count, setCount] = useState(0);

    return (
        <StayContext.Provider value={'1'}>
            <Query query={STAYS_QUERY} pollInterval={1000}>
                
                    {({ loading, error, data }) => {
                        if(loading) return <Spinner />;
                        if(error) return `Error: ${error.message}`;

                        return (
                            <Fragment>
                                <Header />
                                <CheapFlights stays={data.allStayDatas} />
                                <FlightResults />
                            </Fragment>
                        )
                    }}
            </Query>
        </StayContext.Provider>
    )
}

export default App;