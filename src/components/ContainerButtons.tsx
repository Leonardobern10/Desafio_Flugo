import {Box, Button} from '@mui/material';
import type {ReactElement} from 'react';

export default function ContainerButtons(props: {
     activeStep: number;
     steps: Array<string>;
     onBack: () => void;
     onNext: () => void;
     onSubmit: () => void;
}): ReactElement {
     return (
          <Box
               sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 4,
               }}>
               <Button
                    type="button"
                    disabled={props.activeStep === 0}
                    onClick={props.onBack}
                    variant="text">
                    Voltar
               </Button>
               {props.activeStep < props.steps.length - 1 && (
                    <Button
                         type="button"
                         onClick={props.onNext}
                         variant="contained">
                         Próximo
                    </Button>
               )}
               {props.activeStep === props.steps.length - 1 && (
                    <Button
                         type="submit"
                         onClick={props.onSubmit}
                         variant="contained"
                         color="primary">
                         Finalizar
                    </Button>
               )}
          </Box>
     );
}
