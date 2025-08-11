import {containerButtonsData} from '@data/containerButtonsData';
import {Box, Button} from '@mui/material';
import type {ContainerButtonsType} from 'types/ContainerButtonsType';
import type {ReactElement} from 'react';

export default function ContainerButtons({
     activeStep,
     steps,
     onBack,
     onNext,
     onSubmit,
}: ContainerButtonsType): ReactElement {
     return (
          <Box
               sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 4,
               }}>
               <Button
                    type="button"
                    disabled={activeStep === 0}
                    onClick={onBack}
                    variant="text"
                    sx={{color: 'text.secondary'}}>
                    {containerButtonsData.backButton}
               </Button>
               {activeStep < steps.length - 1 && (
                    <Button type="button" onClick={onNext} variant="contained">
                         {containerButtonsData.nextButton}
                    </Button>
               )}
               {activeStep === steps.length - 1 && (
                    <Button
                         type="submit"
                         onClick={onSubmit}
                         variant="contained"
                         color="primary">
                         {containerButtonsData.finishButton}
                    </Button>
               )}
          </Box>
     );
}
