
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import FooterSection from './Footer.tsx'



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
                          <Link to={"/users"} style={{fontWeight:"bold", fontSize:30}}>Users</Link>
                          <Link to={"/account"} style={{fontWeight:"bold", fontSize:30}}>account</Link>
                        </nav>
                      </Typography>
                  </Toolbar>
              </AppBar>
              <Outlet />
          <FooterSection />
         </Container>
      </QueryClientProvider>
      </div>
      )
}
export default App
