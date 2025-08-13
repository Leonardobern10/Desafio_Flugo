import 'react-toastify/dist/ReactToastify.css';
import {Box, Grid} from '@mui/material';
import SideBar from '../components/SideBar/SideBar';
import MainContent from '../components/MainContent';
import Header from '@components/Header';
import {ToastContainer} from 'react-toastify';

/**
 * Componente principal da aplicação que organiza a estrutura geral da interface.
 *
 * Renderiza:
 * - Header: barra superior da aplicação
 * - SideBar: menu lateral de navegação
 * - MainContent: conteúdo principal
 * - ToastContainer: container para exibir notificações (React-Toastify)
 *
 * Usa o MUI Box e Grid para layout responsivo e estilização.
 *
 * @returns JSX.Element com a estrutura principal do app
 */
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
                         flexDirection: {xs: 'column', lg: 'row'},
                         justifyContent: 'center',
                         alignItems: {xs: 'flex-start', lg: 'end'},
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
