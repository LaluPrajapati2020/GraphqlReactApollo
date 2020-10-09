import React, {Fragment} from 'react'

export default function LaunchDetails(props) {
    const { flight_number, mission_name, launch_date_local, launch_year, launch_success } = props.launch
    debugger
    return (
        <Fragment>
            <h5 className="mb-3">Launch Details</h5>
            <ul className="list-group">
                <li className="list-group-item">
                    Flight Number: {flight_number}
                </li>
                <li className="list-group-item">
                    Launch Year: {launch_year}
                </li>
                <li className="list-group-item">
                    Launch Successful: {launch_success ? <span className="text-success">Yes</span> : <span className="test-danger">No</span>}
                </li>
                <li className="list-group-item">
                    Flight Number: {flight_number}
                </li>
            </ul>
        </Fragment>
    )
}
