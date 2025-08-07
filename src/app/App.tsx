import {Box, Grid} from '@mui/material';
import SideBar from '../components/SideBar';
import ContainerAvatar from '../components/ContainerAvatar';
import MainContent from '../components/MainContent';

function App() {
     return (
          <Box
               sx={{
                    p: 2,
                    bgcolor: '#FFF',
                    width: '100dvw',
                    height: '100dvh',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
               }}>
               <SideBar />
               <Grid
                    sx={{
                         height: '100%',
                         width: '100%',
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'center',
                         alignItems: 'end',
                         rowGap: 5,
                    }}>
                    <ContainerAvatar />
                    <MainContent />
               </Grid>
          </Box>
     );
}

export default App;
