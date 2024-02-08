import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = (props) => {
   
  return (
    <>
    
    <div className="charts">
    <h3 className="cTitle">{props.title}</h3>

    <ResponsiveContainer width="100%" aspect={4/1} >

        <LineChart data={props.data}>
        <XAxis dataKey={"name"}/>
        <Line type='monotone' dataKey={props.dataKey}/>
        <Tooltip/>
        </LineChart>
       {props.grid && <CartesianGrid stroke="#e0dfdf"/>}
       
    </ResponsiveContainer>

    </div>

    </>
  )
}

export default Charts