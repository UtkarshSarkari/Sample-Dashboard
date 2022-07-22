import React from 'react';
import './TopBar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from '../images/logo.png'
import profilepic from '../images/profile.jpg';
export default function TopBar() {
    return (
        <div className='topbar'>
            <div className="topBarWrapper">
                <div className="topLeft">
                    <img src={logo} alt="" />
                    <span className="branding">Shards Dashboard</span>
                </div>
                <div >
                    <input className="searchbar" type="search" placeholder='Search for something...' />
                </div>
                <div className="topRight">
                    <div className="topBarIconContainer">
                        <NotificationsIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <SettingsIcon />
                    </div>
                    <div className="topBarIconContainer">
                        <img src={profilepic} alt="" />
                        <span className="username">Anil Dubey</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
