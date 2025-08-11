import {Step, StepLabel, Stepper, Typography} from '@mui/material';
import type {GuideStepsType} from 'types/GuideStepsType';
import type {ReactElement} from 'react';

export default function GuideSteps(props: {
     activeStep: number;
     steps: Array<GuideStepsType>;
}): ReactElement {
     return (
          <Stepper
               activeStep={props.activeStep}
               orientation="vertical" // ou 'horizontal' se preferir
               connector={null}
               sx={{
                    minWidth: 170,
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: props.activeStep === 1 ? 0 : 10,
               }}>
               {props.steps.map((label) => (
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
