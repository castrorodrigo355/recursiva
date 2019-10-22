import React from 'react'
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/members">Members</Link>
                </li>
                <li>
                    <Link to="/racing_average">Racing</Link>
                </li>
                <li>
                    <Link to="/university_married_age">University Married</Link>
                </li>
                <li>
                    <Link to="/ocurrences_river_name">River</Link>
                </li>
                <li>
                    <Link to="/ocurrences_data_team">Data Team</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
