import type {UseFormStepsType} from '../types/UseFormStepsType';
import {useState} from 'react';
import type {EmployeeSchemaType} from '../validations/employeeSchema';

/**
 * Hook para controlar o estado e a navegação de um formulário multi-etapas.
 * Gerencia o progresso, passo ativo e ações de avançar, voltar e finalizar o
 * formulário.
 *
 * @param {UseFormStepsType} params - Objetos e funções para criar usuário,
 * atualizar lista e callback.
 * @param {(data: EmployeeSchemaType) => void} params.createUser - Função para
 * criar usuário com os dados do formulário.
 * @param {() => void} params.getEmployees - Função para atualizar a lista de
 * funcionários após criação.
 * @param {() => void} params.onClick - Callback para executar após finalizar
 * o formulário (ex: fechar formulário).
 *
 * @returns {{
 *   progress: number;
 *   titleStep: number;
 *   activeStep: number;
 *   handleNext: (trigger: (fields?: (keyof EmployeeSchemaType)[]) => Promise<boolean>) => Promise<void>;
 *   handleBack: () => void;
 *   handleFinish: (data: EmployeeSchemaType) => void;
 *   reset: () => void;
 * }}
 */
export function useFormSteps({
     createUser,
     getEmployees,
     onClick,
}: UseFormStepsType) {
     const [progress, setProgress] = useState<number>(0);
     const [titleStep, setTitleStep] = useState<number>(0);
     const [activeStep, setActiveStep] = useState<number>(0);

     const handleNext = async (
          trigger: (fields?: (keyof EmployeeSchemaType)[]) => Promise<boolean>
     ) => {
          let isValid = false;

          if (activeStep === 0) {
               isValid = await trigger(['titulo', 'email', 'status']);
          } else if (activeStep === 1) {
               isValid = await trigger(['departamento']);
          }

          if (isValid) {
               setActiveStep((prev) => prev + 1);
               setProgress((prev) => prev + 50);
               setTitleStep((prev) => prev + 1);
          }
     };

     const handleBack = () => {
          setActiveStep((prev) => prev - 1);
          setProgress((prev) => prev - 50);
          setTitleStep((prev) => prev - 1);
     };

     const handleFinish = (data: EmployeeSchemaType) => {
          const dataToSave = {
               ...data,
               status: data.status ? 'Ativo' : 'Inativo',
          };
          createUser(dataToSave);
          getEmployees();
          onClick();
          reset();
     };

     const reset = () => {
          setActiveStep(0);
          setProgress(0);
          setTitleStep(0);
     };

     return {
          progress,
          titleStep,
          activeStep,
          handleNext,
          handleBack,
          handleFinish,
          reset,
     };
}
