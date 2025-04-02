
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

function App() {
  
  const queryClient = new QueryClient();
  
      return(
        <QueryClientProvider client={queryClient}>
         <Container maxWidth="xl">
          <h1></h1>
              <CssBaseline />
              <AppBar position="static" >
                  <Toolbar>
                      <Typography variant="h6">
                        <nav>
                          <Link to={"/"}>Home Page</Link>
                          <Link to={"/products"}>Products</Link>
                        </nav>
                      </Typography>
                  </Toolbar>
              </AppBar>
              <Outlet />
         </Container>
      </QueryClientProvider>
      )
}

export default App
