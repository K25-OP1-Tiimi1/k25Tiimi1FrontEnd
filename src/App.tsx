
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppBar, Container, CssBaseline, hexToRgb, rgbToHex, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';


function App() {
  
  const queryClient = new QueryClient();


  
      return(
     
        <div className='image' style={{backgroundImage: `url("public/FreepikBackgroundImage.jpg")`,
          
         backgroundSize: 2400,
         backgroundPosition:"center",
        
         }}>
        <QueryClientProvider client={queryClient}>
         <Container maxWidth="xl">
          <h1>Omppu & Rane</h1>
              <CssBaseline />
              <AppBar position="static" style={{opacity:0.7}} >
                  <Toolbar variant='dense' >
                      <Typography variant="h5" border="thick">
                        <nav>
                          <Link to={"/"} style={{fontWeight:"bold", fontSize:20}}>Home Page</Link>
                          <Link to={"/products"} style={{fontWeight:"bold", fontSize:20}}>Products</Link>
                          <Link to={"/about-us"} style={{fontWeight:"bold", fontSize:20}}>About Us</Link>
                        </nav>
                      </Typography>
                  </Toolbar>
              </AppBar>
              <Outlet />
         </Container>
        
      </QueryClientProvider>
      </div>
      )
}
export default App
