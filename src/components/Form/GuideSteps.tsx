import {Step, StepLabel, Stepper, Typography} from '@mui/material';
import type {ReactElement} from 'react';
import type {GuideStepsProps} from 'types/GuideStepsProps';
import useIsMobile from '@services/isMobile';

/**
 * Componente visual que renderiza um stepper para guiar o usuário
 * através dos passos de um formulário ou processo.
 *
 * A orientação do stepper (horizontal ou vertical) é definida
 * dinamicamente com base no dispositivo (mobile ou desktop).
 *
 * @param activeStep Índice do passo ativo (começa em 0)
 * @param steps Array de objetos representando cada passo,
 * contendo a propriedade `step` (rótulo)
 * @returns JSX.Element com o stepper renderizado
 */
export default function GuideSteps({
     activeStep,
     steps,
}: GuideStepsProps): ReactElement {
     const mobile = useIsMobile();
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
