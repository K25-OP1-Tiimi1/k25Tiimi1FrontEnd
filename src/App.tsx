
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppBar, Container, CssBaseline, hexToRgb, rgbToHex, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';


function App() {
  
  const queryClient = new QueryClient();


  
      return(
     
        <div className='backGroundImage' style={{backgroundImage: `url("public/FreepikBackgroundImage.jpg")`,
          
         backgroundSize: 2400,
         backgroundPosition:"center",
        
         }}>
        <QueryClientProvider client={queryClient}>
         <Container maxWidth="xl">
          <h1 style = {{ backgroundColor: 'white' , fontFamily: 'serif'}} >Omppu & Rane</h1>
              <CssBaseline />
              <AppBar position="static" style={{opacity:0.9, height:80}} >
                  <Toolbar variant='dense' >
                      <Typography variant="h5">
                        <nav>
                          <Link to={"/"} style={{fontWeight:"bold", fontSize:30}}>Home Page</Link>
                          <Link to={"/products"} style={{fontWeight:"bold", fontSize:30}}>Products</Link>
                          <Link to={"/about-us"} style={{fontWeight:"bold", fontSize:30}}>About Us</Link>
                        </nav>
                      </Typography>
                  </Toolbar>
              </AppBar>
              <Outlet />
              <footer style={{ marginTop: '390px', padding: '20px', backgroundColor: '#f1f1f1', textAlign: 'center', opacity: 0.9 }}>
                <p>Owners: Omppu ja rane</p>
                <p>Founded: 2025</p>
                <p>Y-tunnus: 28hm45</p>
            </footer>
         </Container>
        
      </QueryClientProvider>
      </div>
      )
}
export default App
