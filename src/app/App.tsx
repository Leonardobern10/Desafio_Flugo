import 'react-toastify/dist/ReactToastify.css';
import {Box, Grid} from '@mui/material';
import SideBar from '../components/SideBar/SideBar';
import MainContent from '../components/MainContent';
import Header from '@components/Header';
import {ToastContainer} from 'react-toastify';

function App() {
     return (
          <Box
               sx={{
                    padding: {xs: 2, lg: 4},
                    bgcolor: '#FFF',
                    width: '100%',
                    height: '100dvh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
               }}>
               <Header />
               <Grid
                    sx={{
                         height: '100%',
                         width: '100%',
                         display: 'flex',
                         flexDirection: {sx: 'column', lg: 'row'},
                         justifyContent: 'center',
                         alignItems: 'end',
                    }}>
                    <SideBar />
                    <MainContent />
               </Grid>
               <ToastContainer
                    position="bottom-right"
                    autoClose={3000} // 3 segundos
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
               />
          </Box>
     );
}

export default App;
