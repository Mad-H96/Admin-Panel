import './wiLarge.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

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

function createData(Avatar, Customer, Date, Amount, Status) {
  return { Avatar, Customer, Date, Amount, Status };
}

const rows = [
  createData( <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />,'Shofia Turner','2024-1-5' ,'$ 1000','Approved'),
  createData( <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />, 'Alex Norman','2024-1-3' ,'$ 800','Declined'),
  createData( <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />,'Erik Hood', '2024-1-6', '$ 650', 'Pending'),
  createData( <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />,'Emily Stalon', '2024-1-9', '$ 300', 'Approved'),
  createData( <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />,'Robert Clark', '2024-1-4', '$ 500','Pending'),
];

const WiLarge = () => {

  
  return (
   <>
   
    <div className="wLarge">
        <div className="wLTitle">Latest Transactions</div>

        <TableContainer component={Paper} className='wLtable'>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Avatar</StyledTableCell>
            <StyledTableCell>Customer</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.Avatar}
              </StyledTableCell>
              <StyledTableCell align="left">{row.Customer}</StyledTableCell>
              <StyledTableCell align="right">{row.Date}</StyledTableCell>
              <StyledTableCell align="right">{row.Amount}</StyledTableCell>
              <StyledTableCell align="right"> {row.Status === 'Approved' && (
          <button className='tButton tButtonApproved'>{row.Status}</button>
        )}
        {row.Status === 'Declined' && (
          <button className='tButton tButtonDeclined'>{row.Status}</button>
        )}
        {row.Status === 'Pending' && (
          <button className='tButton tButtonPending'>{row.Status}</button>
        )}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


        </div>

   </>
  )
}

export default WiLarge