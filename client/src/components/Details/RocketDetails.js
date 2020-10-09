import React, {Fragment} from 'react'

export default function RocketDetails(props) {
    const {rocket_id, rocket_name, rocket_type} = props.rocket
    return (
        <Fragment>
            <h5 className="mb-3 mt-4">Rocket Details</h5>
            <ul className="list-group">
                <li className="list-group-item">
                   Rocket ID : {rocket_id}
                </li>
                <li className="list-group-item">
                   Rocket Name : {rocket_name}
                </li>
                <li className="list-group-item">
                   Rocket Type: {rocket_type}
                </li>
            </ul>
        </Fragment>
    )
}
