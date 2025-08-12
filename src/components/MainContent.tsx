import {Box} from '@mui/material';
import {useState, type ReactElement} from 'react';
import TableEmployee from './Table/EmployeeTable';
import EmployeeForm from './Form/EmployeeForm';
import TopTable from './Table/TopTable';

/**
 * Componente principal da área de conteúdo.
 * Controla a exibição entre o formulário de cadastro de
 * funcionário e a tabela de funcionários.
 *
 * O estado `showStepper` define qual componente será exibido:
 * - true: exibe o formulário de cadastro (`EmployeeForm`)
 * - false: exibe a tabela de funcionários com o cabeçalho
 * (`TopTable` + `TableEmployee`)
 *
 * @returns {ReactElement} Componente principal com conteúdo dinâmico.
 */
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
                    <EmployeeForm onClick={() => setShowStepper(false)} />
               ) : (
                    <Box
                         sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              rowGap: 4,
                              paddingLeft: {xs: 0, lg: 4},
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
