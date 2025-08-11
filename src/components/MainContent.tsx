import {Box} from '@mui/material';
import {useState, type ReactElement} from 'react';
import TableEmployee from '../context/TableColaboradores';
import FormContext from '../context/FormContext';
import TopTable from './Table/TopTable';

export default function MainContent(): ReactElement {
     const [showStepper, setShowStepper] = useState(false);

     return (
          <Box
               component={'main'}
               sx={{
                    width: '100%',
                    height: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'stretch',
               }}>
               {showStepper ? (
                    <FormContext onClick={() => setShowStepper(false)} />
               ) : (
                    <Box
                         sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              rowGap: 4,
                              paddingLeft: 4,
                         }}>
                         <TopTable onClick={() => setShowStepper(true)} />
                         <Box
                              sx={{
                                   height: '100%',
                              }}>
                              <TableEmployee />
                         </Box>
                    </Box>
               )}
          </Box>
     );
}
