import './widgetSmall.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Avatar from '@mui/material/Avatar';
const WidgetSmall = () => {
  return (
   <>
   
    <div className="wSmall">
        <span className="wiSmTitle">
            New join members
        </span>
        <ul className="wSList">
            <li className="wSLItem">
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g" />
                <div className="wSUser">
                    <span className="wSUName">
                        Anne Keller
                    </span>
                    <span className="wSUJob">
                        Bussiness Analyst
                    </span>
                </div>
                <button className='wSButton' ><VisibilityIcon/></button>
            </li>
    <hr />
            <li className="wSLItem">
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g" />
                <div className="wSUser">
                    <span className="wSUName">
                        Thomas Frank
                    </span>
                    <span className="wSUJob">
                        Software Engineer
                    </span>
                </div>
                <button className='wSButton' ><VisibilityIcon/></button>
            </li>
            <hr />
            <li className="wSLItem">
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="wSUser">
                    <span className="wSUName">
                        Allan Fedrik
                    </span>
                    <span className="wSUJob">
                        Marketing Manager
                    </span>
                </div>
                <button className='wSButton' ><VisibilityIcon/></button>
            </li>
            <hr />
            <li className="wSLItem">
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="wSUser">
                    <span className="wSUName">
                        Fiona Gale
                    </span>
                    <span className="wSUJob">
                        Office Assistant
                    </span>
                </div>
                <button className='wSButton' ><VisibilityIcon/></button>
            </li>
            <hr />
            <li className="wSLItem">
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="wSUser">
                    <span className="wSUName">
                        Samantha Blake
                    </span>
                    <span className="wSUJob">
                        UI Designer
                    </span>
                </div>
                <button className='wSButton' ><VisibilityIcon/></button>
            </li>

            <hr />
            <li className="wSLItem">
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="wSUser">
                    <span className="wSUName">
                        Anne Hendriks
                    </span>
                    <span className="wSUJob">
                        Fullstack Developer
                    </span>
                </div>
                <button className='wSButton' ><VisibilityIcon/></button>
            </li>


        </ul>
    </div>

   </>
  )
}

export default WidgetSmall