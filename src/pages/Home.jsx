import Charts from '../components/Charts'
import FeaturedInfo from '../components/FeaturedInfo'
import './Home.css'
import {userData} from '../dummyData'
import WidgetSmall from '../components/WidgetSmall'
import WiLarge from '../components/WiLarge'

const Home = () => {
  return (
    <>
    
    <div className="home">
        
        <FeaturedInfo/>

        <Charts data={userData} title="User Analytics" grid dataKey="Active User" />

        <div className='homeWidget'>
        <WidgetSmall/>
        <WiLarge/>
        </div>
    
    </div>
    
    </>
  )
}

export default Home