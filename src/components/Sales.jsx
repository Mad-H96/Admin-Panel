import './sales.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(product, stock, inhand, sales, pending) {
    return { product, stock, inhand, sales, pending };
  }
  
  const rows = [
    createData('Laptop', 20, 5, 24, 4),
    createData('Desktop', 25, 9, 37, 4),
    createData('Mobile devices', 12, 16, 24, 6),
    createData('Pen dives', 23, 3, 67, 4),
    createData('Monitors', 15, 16, 49, 3),
  ];
  


  const chartSetting = {
    yAxis: [
      {
        label: 'rainfall ($)',
      },
    ],
    width: 1300,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };
  const dataset = [
    {
        Computer: 59,
        Desktop: 57,
        MobileDevice: 86,
        PenDrives: 21,
        Monitors: 45,
      month: 'Jan',
    },
    {
        Computer: 59,
        Desktop: 47,
        MobileDevice: 85,
        PenDrives: 71,
        Monitors: 45,
      month: 'Fev',
    },
    {
        Computer: 51,
        Desktop: 52,
        MobileDevice: 26,
        PenDrives: 27,
        Monitors: 35,
      month: 'Mar',
    },
    {
        Computer: 54,
        Desktop: 42,
        MobileDevice: 76,
        PenDrives: 27,
        Monitors: 85,
      month: 'Apr',
    },
    {
        Computer: 81,
        Desktop: 22,
        MobileDevice: 76,
        PenDrives: 67,
        Monitors: 65,
      month: 'May',
    },
    {
        Computer: 21,
        Desktop: 82,
        MobileDevice: 36,
        PenDrives: 67,
        Monitors: 35,
      month: 'June',
    },
    {
        Computer: 71,
        Desktop: 22,
        MobileDevice: 66,
        PenDrives: 57,
        Monitors: 45,
      month: 'July',
    },
    {
        Computer: 41,
        Desktop: 62,
        MobileDevice: 26,
        PenDrives: 67,
        Monitors: 35,
      month: 'Aug',
    },
    {
        Computer: 61,
        Desktop: 67,
        MobileDevice: 36,
        PenDrives: 67,
        Monitors: 25,
      month: 'Sept',
    },
    {
        Computer: 45,
        Desktop: 72,
        MobileDevice: 66,
        PenDrives: 87,
        Monitors: 25,
      month: 'Oct',
    },
    {
        Computer: 91,
        Desktop: 42,
        MobileDevice: 76,
        PenDrives: 57,
        Monitors: 15,
      month: 'Nov',
    },
    {
        Computer: 52,
        Desktop: 82,
        MobileDevice: 36,
        PenDrives: 17,
        Monitors: 35,
      month: 'Dec',
    },
  ];
  
  const valueFormatter = (value) => `${value}Qty`;
  

const Sales = () => {
  return (
    <>
    
    <div className='sales'>

        <div className="table">
            <h4 className="tablehead">Most selling products</h4>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="center">RD Stock</StyledTableCell>
            <StyledTableCell align="center">In Hand</StyledTableCell>
            <StyledTableCell align="center">Sales QTY</StyledTableCell>
            <StyledTableCell align="center">Pending Oder QTY</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.product}>
              <StyledTableCell component="th" scope="row">
                {row.product}
              </StyledTableCell>
              <StyledTableCell align="center">{row.stock}</StyledTableCell>
              <StyledTableCell align="center">{row.inhand}</StyledTableCell>
              <StyledTableCell align="center">{row.sales}</StyledTableCell>
              <StyledTableCell align="center">{row.pending}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>

        <div className='piChart'>
        <h4 className="tablehead">Chart</h4>
        <PieChart
        series={[
        {
          data: [
            { id: 0, value: 24, label: 'Laptop' },
            { id: 1, value: 34, label: 'Desktop' },
            { id: 2, value: 24, label: 'Mobile Devices' },
            { id: 3, value: 67, label: 'Pen Drives' },
            { id: 4, value: 49, label: 'Monitors' },
          ],
        },
      ]}
        width={500}
        height={200}
    />
        </div>
        <br />
     

    </div>


    <div className="bar">
        <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'Computer', label: 'Computer', valueFormatter },
        { dataKey: 'Desktop', label: 'Desktop', valueFormatter },
        { dataKey: 'MobileDevice', label: 'Mobile Device', valueFormatter },
        { dataKey: 'PenDrives', label: 'Pen Drives', valueFormatter },
        { dataKey: 'Monitors', label: 'Monitors', valueFormatter },
      ]}
      {...chartSetting}
    />
        </div>
    </>
  )
}

export default Sales