import React from 'react';
import { Link } from 'react-router-dom';

export default function LaunchItems({launch: {flight_number, mission_name, launch_date_local, launch_success}}) {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h5>Mission: <span className={launch_success ? 'text-success' : 'text-danger'}>{mission_name}</span></h5>
                    <p>Date: {dateFormat(launch_date_local)}</p>
                </div>
                <div className="col-md-3">
                    {/* <button className="btn btn-secondary">Launch Details</button> */}
                    <Link to={`/launch/${flight_number}`} className="btn btn-secondary">Launch Details</Link>
                </div>
            </div>
        </div>
    )
}

function dateFormat(date) {
    const newDate = new Date(date);
    const d = newDate.getUTCDate() < 10 ? `0${newDate.getUTCDate()}` : newDate.getUTCDate();
    const m = (newDate.getUTCMonth() + 1) < 10 ? `0${newDate.getUTCMonth() + 1}` : newDate.getUTCMonth() + 1;
    const y = newDate.getUTCFullYear();
    const hrs = newDate.getUTCHours() < 10 ? `0${newDate.getUTCHours()}` : newDate.getUTCHours();
    const min = newDate.getUTCMinutes() < 10 ? `0${newDate.getUTCMinutes()}` : newDate.getUTCMinutes();
    return `${y}-${m}-${d} ${hrs}:${min}`
}