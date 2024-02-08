import  './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MessageIcon from '@mui/icons-material/Message';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    
    const [activeTab, setActiveTab] = useState('Home');
   

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };

  return (
    <>
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <hr />
                <ul className="sidebarList">

              <li className={`listItem ${activeTab === 'Home' ? 'active' : ''}`} onClick={() => handleTabClick('Home')} >

              <HomeIcon className='sidebarIcon' />
              <Link className='link' to={`/`}>Home</Link>

              </li>

                    <li className={`listItem ${activeTab === 'Analytics' ? 'active' : ''}`} onClick={() => handleTabClick('Analytics')} >
                    <AutoGraphIcon className='sidebarIcon'/>
                    <Link className='link' to={`/analytics`}>Analytics</Link> 
                    </li>

                    <li  className={`listItem ${activeTab === 'Sales' ? 'active' : ''}`} onClick={() => handleTabClick('Sales')} >
                    <MonetizationOnIcon className='sidebarIcon'/>
                    <Link className='link' to={`/sales`}>Sales</Link>
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <hr />
                <ul className="sidebarList">

                <li className={`listItem ${activeTab === 'Users' ? 'active' : ''}`} onClick={() => handleTabClick('Users')} >
                    
                <AccountCircleIcon className='sidebarIcon' />
                <Link className='link' to={`/user`}>Users</Link>
               

                </li>

                    <li className={`listItem ${activeTab === 'Products' ? 'active' : ''}`} onClick={() => handleTabClick('Products')} >
                    <Inventory2Icon className='sidebarIcon'/> 
                    <Link className='link' to={`/products`}>Products</Link>
                    </li>

                    <li className={`listItem ${activeTab === 'Reports' ? 'active' : ''}`} onClick={() => handleTabClick('Reports')} >
                    <TrendingUpIcon className='sidebarIcon'/>
                    <Link className='link' to={`/Reports`}> Reports</Link>
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <hr />
                <ul className="sidebarList">
                    <li className="listItem">
                    <NotificationsActiveIcon className='sidebarIcon'/> Mail
                    </li>

                    <li className="listItem">
                    <DynamicFeedIcon className='sidebarIcon'/> Feedbacks
                    </li>

                    <li className="listItem">
                    <MessageIcon className='sidebarIcon'/> Messages
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <hr />
                <ul className="sidebarList">
                    <li className="listItem">
                    <ManageAccountsIcon className='sidebarIcon'/> Manage
                    </li>

                    <li className="listItem">
                    <SignalCellularAltIcon className='sidebarIcon'/> Analytics
                    </li>

                    <li className="listItem">
                    <QueryStatsIcon className='sidebarIcon'/> Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Sidebar