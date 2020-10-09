import React, { Fragment } from 'react'
import { gql, useQuery } from '@apollo/client';

import LaunchDetails from './Details/LaunchDetails';
import RocketDetails from './Details/RocketDetails';
import { Link } from 'react-router-dom';

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_date_local
            launch_year
            launch_success
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`;
function Launch(props){
    let { flight_number } = props.match.params;
    flight_number = parseInt(flight_number);
    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
                variables: { flight_number },
            });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // const {mission_name, launch_date_local, launch_year, launch_success, rocket} = data.launch
    return <Fragment>
        <h4 className="my-3"><span className="test-dark">Mission:</span>{data.launch.mission_name}</h4>
        <LaunchDetails launch={data.launch} />
        <RocketDetails rocket={data.launch.rocket} />
        <hr />
        <Link to="/" className="btn btn-secondary">Back</Link>
    </Fragment>
}

export default Launch
