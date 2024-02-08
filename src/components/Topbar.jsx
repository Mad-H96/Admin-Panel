import './Topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';


const Topbar = () => {
  return (
   <>
   <div className="topbar">
    <div className="topwrapper">
        <div className="left">
            <span className="TestAdmin">
                Admin <span className='Ispan'>Panel</span>
            </span>
        </div>

        <div className="right">
            
            <div className="topbarIconContainer">
            <NotificationsIcon/>
            <span className='iconBadge'>2</span>
            </div>

            <div className="topbarIconContainer">
            <LanguageIcon/>
            </div>

            <div className="topbarIconContainer">
            <SettingsIcon/> 
            </div>

            <div className="topAvatar">
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>

        </div>         
    </div>
   </div>
   </>
  )
}

export default Topbar