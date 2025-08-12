import {Step, StepLabel, Stepper, Typography} from '@mui/material';
import type {ReactElement} from 'react';
import type {GuideStepsProps} from 'types/GuideStepsProps';
import isMobile from '@services/isMobile';

export default function GuideSteps({
     activeStep,
     steps,
}: GuideStepsProps): ReactElement {
     const mobile = isMobile();
     return (
          <Stepper
               activeStep={activeStep}
               orientation={mobile ? 'horizontal' : 'vertical'} // ou 'horizontal' se preferir
               connector={null}
               sx={{
                    minWidth: 170,
                    rowGap: activeStep === 1 ? 0 : '5rem',
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
