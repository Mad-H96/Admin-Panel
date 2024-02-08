import './products.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled } from '@mui/joy';
import Button from '@mui/joy/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ProductTable from './ProductTable';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;


const Products = () => {
  
  const [cat, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
    <div className="products">

    <div className="box1">

    <form action="#" method="post" className='formbox'>
    <h4>Add New Product</h4>
    <br />
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Product Name" variant="outlined" />
     
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Catogory</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cat}
          label="Catogory"
          onChange={handleChange}
        >
          <MenuItem value={10}>Laptops</MenuItem>
          <MenuItem value={20}>Desktops</MenuItem>
          <MenuItem value={30}>Mobile Devicecs</MenuItem>
          <MenuItem value={30}>Pen Drivers</MenuItem>
          <MenuItem value={30}>Monitors</MenuItem>
        </Select>
        </FormControl>
     

      <TextField id="outlined-basic" label="Price" variant="outlined" />
      <TextField id="outlined-basic" label="Description" variant="outlined" />
      <TextField id="outlined-basic" label="Special Instructions" variant="outlined" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="This is Featured Product" />

      <Button
      component="label"
      role={undefined}
      tabIndex={-1}
      variant="outlined"
      color="neutral"
      startDecorator={
        <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </SvgIcon>
      }
    >
      Upload a file
      <VisuallyHiddenInput type="file" />
    </Button>

    <Button>Add Product</Button>

    </Box>
    </form>
    </div>
    
    <div className="box2">
      <h4>Products</h4>
      <br />
      <ProductTable/>

    </div>

    </div>

    </>
  )
}

export default Products