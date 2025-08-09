import {Box} from '@mui/material';
import {useState, type ReactElement} from 'react';
import TableEmployee from '../context/TableColaboradores';
import FormContext from '../context/FormContext';
import TopTable from './TopTable';

export default function MainContent(): ReactElement {
     const [showStepper, setShowStepper] = useState(false);

     return (
          <Box
               component={'main'}
               sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'stretch',
               }}>
               {showStepper ? (
                    <FormContext />
               ) : (
                    <Box>
                         <TopTable onClick={setShowStepper} />
                         <Box
                              sx={{
                                   height: '80%',
                              }}>
                              <TableEmployee />
                         </Box>
                    </Box>
               )}
          </Box>
     );
}
