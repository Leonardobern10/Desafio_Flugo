import {Step, StepLabel, Stepper} from '@mui/material';
import type {ReactElement} from 'react';

export default function GuideSteps(props: {
     activeStep: number;
     steps: Array<string>;
}): ReactElement {
     return (
          <Stepper
               activeStep={props.activeStep}
               orientation="vertical" // ou 'horizontal' se preferir
               sx={{
                    minWidth: 200,
                    height: 'fit-content',
               }}>
               {props.steps.map((label) => (
                    <Step key={label}>
                         <StepLabel>{label}</StepLabel>
                    </Step>
               ))}
          </Stepper>
     );
}
