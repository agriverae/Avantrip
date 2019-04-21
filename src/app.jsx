import React, { Fragment, useState } from 'react';
import { Query } from "react-apollo";
import { STAYS_QUERY } from './Queries';
import Spinner from './Components/Auxiliar/Spinner';
import Header from './Components/Header/Header'
import CheapFlights from './Components/CheapFlights/CheapFlights';
import FlightResults from './Components/FlightResults/FlightResults';
import { StayContext } from './Context/Context'

const App = () => {

    const [stayId, setStayId] = useState('1')

    const handleStayChange = (id) => {
        setStayId(id);
    }

    const provider = {stayId, handleStayChange}

    return (
        <StayContext.Provider value={provider}>
            <Query query={STAYS_QUERY}>
                
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