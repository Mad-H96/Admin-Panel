import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState } from 'react';


const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'avatars', headerName: 'Avatar', width: 100, renderCell:(params)=>{

        return(
          <div className='tAvatars'>
              <img className='tAvatar' src={params.row.avatars} alt=""/>
          </div>
        )

  } },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 200 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'action',
    headerName: 'Edit',
    width: 100,
    renderCell:(params) => {

      return(
        <>
          <div className='tBtn'>

            <Link to={"/singleUserEdit/"+params.row.id}>
            <EditIcon className='edit'/>
            </Link>
            
          </div>
        </>

      );
    }
  },
  {
    field: 'action2',
    headerName: 'Delete',
    width: 100,
    renderCell:(params) => {

      return(
        <>
          <div className='tBtn'>
          <Link to={"/singleUserDel/"+params.row.id}>
          <DeleteForeverIcon className='del'/>
            </Link>

          </div>
        </>

      );
    }
  },
  
];

const rows = [
  { id: 1,avatars:"https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2,avatars:"https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3,avatars: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4,avatars:"https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5,avatars: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , lastName: 'Targaryen', firstName: 'Daenerys', age: 60 },
  { id: 6,avatars:"https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , lastName: 'Melisandre', firstName: 'Ameli', age: 50 },
  { id: 7,avatars: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8,avatars: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9,avatars: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const UserList = () => {
  return (
    <>

    <div className="dTable">

      <div className='userWidgets'>
          <div className="widgets">
            <h3 >Active Users</h3>
            <h2 className='widH23'>450+</h2>
            <GroupAddIcon/>
          </div>

          <div className="widgets">
          <h3>This Month New Users</h3>
            <h2 className='widH23'>250+</h2>
            <PersonAddIcon/>
          </div>

          <div className="widgets">
          <h3>Summary</h3>
            <h4 className='widH2'>Profile Creations - 240</h4>
            <h4 className='widH2'>Highly Active Users - 55</h4>
            <h4 className='widH2'>Pending Users Accounts - 43</h4>
            <h4 className='widH2'>Expected Users for Next Month - 350+</h4>
          </div>
    
      </div>
      
      <DataGrid className='dataGrid'
        rows={rows}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 15]}
        checkboxSelection
      />


    </div>

    </>
  )
}

export default UserList