import React from 'react';
import '../styles/components/sidenav.scss';
import { Link } from 'react-router-dom';

export const SideNav = () => {
    return (
        <div className="col s12 m4 l3 z-depth-0">
            <ul  id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <i className="large material-icons">account_circle</i>
                        </div>
                    </div>
                </li>
                <li><Link to="/dashboard"  className="waves-effect">Dashboard</Link></li>
                <li><Link to="/TripRequest"  className="waves-effect">Make a trip request</Link></li>
                <li><Link to="/explore"  className="waves-effect">Explore</Link></li>
                <li><Link to="/profile" className="waves-effect">Profile</Link></li>
            </ul>
            <ul  className="sidebar hide-on-med-and-down">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <i className="large material-icons">account_circle</i>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/dashboard"  className="waves-effect">Dashboard</Link>
                    <i className="right material-icons">data_usage</i>
                </li>
                <li>
                    <Link to="/TripRequest"  className="waves-effect">Make a trip request</Link>
                    <i className="right material-icons">airplanemode_active</i>
                </li>
                <li>
                    <Link to="/explore"  className="waves-effect">Explore</Link>
                    <i className="right material-icons">card_travel</i>
                </li>
                <li>
                    <Link to="/profile" className="waves-effect">Profile</Link>
                    <i className="right material-icons">account_circle</i>
                </li>
            </ul>
        </div>
    )
}
