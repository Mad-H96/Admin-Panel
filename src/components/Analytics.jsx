import './Analytics.css'
import Charts from './Charts'
import { userData2 } from '../dummyData'
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [350, 320, 256, 650, 157, 800, 1700,320, 256, 650, 157, 800];
const pData = [250, 175, 150, 500, 621, 1000, 1200,175, 150, 500, 621, 1000];
const xLabels = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
];


const uData2 = [4000, 3000, 2000, 2780, 1890, 2390, 3490,3000, 2000, 2780, 1890, 2390];
const pData2 = [2400, 1398, 9800, 3908, 4800, 3800, 4300,9800, 3908, 4800, 3800, 4300];
const xLabels2 = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
];

const Analytics = () => {
  return (
    <>
    <div className='analytics'>

        <div className="sale">
        <Charts data={userData2} title="User Analytics" grid dataKey="Active User"/>
        </div>
    

    <div className="b2Widgets">
      <div className='widget'>
      <h4>User Logins</h4>
      <BarChart
      width={550}
      height={300}
      series={[
        { data: pData, label: 'This Year', id: 'pvId', stack: 'total' },
        { data: uData, label: 'Last Year', id: 'uvId', stack: 'total' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />

      </div>

    <div className='widget'>
    <h4>Active Users</h4>
    <LineChart
      width={550}
      height={300}
      series={[
        { data: pData2, label: 'This Year' },
        { data: uData2, label: 'Last Year' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels2 }]}
    />
        
    </div>
    </div>
    </div>
    </>
  )
}


export default Analytics