import {dataContainerButtons} from '@data/dataContainerButtons';
import {Box, Button} from '@mui/material';
import type {ContainerButtonsType} from 'types/ContainerButtonsType';
import type {ReactElement} from 'react';

/**
 * Componente de botões para navegação em formulários multi-step.
 * Renderiza botões "Voltar", "Próximo" e "Finalizar" dependendo
 * do passo ativo.
 *
 * @param {number} activeStep - Passo atual do formulário
 * @param {Array} steps - Lista de passos para controle da navegação
 * @param {() => void} onBack - Função chamada ao clicar no botão "Voltar"
 * @param {() => void} onNext - Função chamada ao clicar no botão "Próximo"
 * @param {() => void} onSubmit - Função chamada ao clicar no botão "Finalizar"
 * @returns {ReactElement} JSX com botões de navegação
 */
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
                    {dataContainerButtons.backButton}
               </Button>
               {activeStep < steps.length - 1 && (
                    <Button type="button" onClick={onNext} variant="contained">
                         {dataContainerButtons.nextButton}
                    </Button>
               )}
               {activeStep === steps.length - 1 && (
                    <Button
                         type="submit"
                         onClick={onSubmit}
                         variant="contained"
                         color="primary">
                         {dataContainerButtons.finishButton}
                    </Button>
               )}
          </Box>
     );
}
