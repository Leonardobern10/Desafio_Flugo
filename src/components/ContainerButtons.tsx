import {containerButtonsData} from '@data/containerButtonsData';
import {Box, Button} from '@mui/material';
import type {ReactElement} from 'react';

export default function ContainerButtons(props: {
     activeStep: number;
     steps: Array<{step: string; title: string}>;
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
                    variant="text"
                    sx={{color: 'text.secondary'}}>
                    {containerButtonsData.backButton}
               </Button>
               {props.activeStep < props.steps.length - 1 && (
                    <Button
                         type="button"
                         onClick={props.onNext}
                         variant="contained">
                         {containerButtonsData.nextButton}
                    </Button>
               )}
               {props.activeStep === props.steps.length - 1 && (
                    <Button
                         type="submit"
                         onClick={props.onSubmit}
                         variant="contained"
                         color="primary">
                         {containerButtonsData.finishButton}
                    </Button>
               )}
          </Box>
     );
}
