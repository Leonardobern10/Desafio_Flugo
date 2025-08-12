import {Step, StepLabel, Stepper, Typography} from '@mui/material';
import type {ReactElement} from 'react';
import type {GuideStepsProps} from '../../types/GuideStepsProps';

export default function GuideSteps({
     activeStep,
     steps,
}: GuideStepsProps): ReactElement {
     return (
          <Stepper
               activeStep={activeStep}
               orientation="vertical" // ou 'horizontal' se preferir
               connector={null}
               sx={{
                    minWidth: 170,
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: activeStep === 1 ? 0 : 10,
               }}>
               {steps.map((label) => (
                    <Step key={label.step}>
                         <StepLabel>
                              <Typography fontSize="13px">
                                   {label.step}
                              </Typography>
                         </StepLabel>
                    </Step>
               ))}
          </Stepper>
     );
}
