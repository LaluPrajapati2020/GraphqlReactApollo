import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';

import LaunchItems from './LaunchItems';
import MissionKeys from './MissionKeys';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <Fragment>
        <h3>Launches</h3>
        <MissionKeys />
        {data.launches.map(launch => (
            <LaunchItems key={launch.flight_number} launch={launch} />
        ))}
    </Fragment>
             
}

export default Launches