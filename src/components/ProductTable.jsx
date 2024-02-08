import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product', headerName: 'Product name', width: 100 },
    { field: 'catogory', headerName: 'Catogory', width: 100 },
    {
      field: 'price',
      headerName: 'Price',
      width: 100,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 150,
      },
    {
        field: 'edit',
        headerName: 'Edit',
        width: 100,
        renderCell:(params) => {

            return(
              <>
                <div className='tBtn'>
      
                  <Link to={"/productEdit/"+params.row.id}>
                  <EditIcon className='edit'/>
                  </Link>
                  
                </div>
              </>
      
            );
          }
      },
      {
        field: 'delete',
        headerName: 'Delete',
        width: 100,
        renderCell:(params) => {

            return(
              <>
                <div className='tBtn'>
      
                  <Link to={"/productDelete/"+params.row.id}>
                  <DeleteIcon className='del'/>
                  </Link>
                  
                </div>
              </>
      
            );
          }
      },
  ];
  
  const rows = [
    { id: 1, product: 'I7 Laptop', catogory: 'Laptops', price:'Rs 245,00/=',description:'Electronic device'},
    { id: 2, product: 'I7 Laptop', catogory: 'Laptops', price:'Rs 245,00/=',description:'Electronic device'},
    { id: 3, product: 'I7 Laptop', catogory: 'Laptops', price:'Rs 245,00/=',description:'Electronic device'},
    { id: 4, product: 'I7 Laptop', catogory: 'Laptops', price:'Rs 245,00/=',description:'Electronic device'},
    { id: 5, product: 'I7 Laptop', catogory: 'Laptops', price:'Rs 245,00/=',description:'Electronic device'},
    { id: 6, product: 'I7 Laptop', catogory: 'Laptops', price:'Rs 245,00/=',description:'Electronic device'},
    { id: 7, product: 'I7 Laptop', catogory: 'Laptops', price:'Rs 245,00/=',description:'Electronic device'},
    { id: 8, product: 'I7 Laptop', catogory: 'Laptops', price:'Rs 245,00/=',description:'Electronic device'},
    { id: 9, product: 'I7 Laptop', catogory: 'Laptops', price:'Rs 245,00/=',description:'Electronic device'},
    { id: 10, product: 'I7 Laptop', catogory: 'Laptops', price:'Rs 245,00/=',description:'Electronic device'},
    { id: 11, product: 'I7 Laptop', catogory: 'Laptops', price:'Rs 245,00/=',description:'Electronic device'},
    { id: 12, product: 'I7 Laptop', catogory: 'Laptops', price:'Rs 245,00/=',description:'Electronic device'},
    { id: 13, product: 'I7 Laptop', catogory: 'Laptops', price:'Rs 245,00/=',description:'Electronic device'},

  ];

const ProductTable = () => {
  return (
    <>
      <div style={{ height: 620, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
      />
    </div>
    
    
    </>
  )
}

export default ProductTable