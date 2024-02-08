import Topbar from "./components/Topbar"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Sidebar from "./components/Sidebar";
import './App.css';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import UserList from "./pages/UserList";
import Analytics from "./components/Analytics";
import Sales from "./components/Sales";
import Products from "./components/Products";


function App() {


  return (
    <>



  <Topbar/>

  
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
    
        <Grid item xs={2}>

         <Sidebar/>
         
        </Grid>

        <Grid item xs={10}>
        

        <Routes>
          <Route>
            
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<UserList/>}/>
          <Route path='/analytics' element={<Analytics/>}/>
          <Route path='/sales' element={<Sales/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/Reports' element={<Analytics/>}/>

          </Route>
        </Routes>


     



        </Grid>

      </Grid>
    </Box>





    </>
  )
}

export default App
