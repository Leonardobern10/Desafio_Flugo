import type {UseFormStepsType} from '../types/UseFormStepsType';
import {useState} from 'react';
import type {EmployeeSchemaType} from 'validations/employeeSchema';

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
          alert('Cadastro concluído!\n' + JSON.stringify(dataToSave, null, 2));
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
