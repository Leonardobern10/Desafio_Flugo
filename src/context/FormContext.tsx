import {useState, type ReactElement} from 'react';
import {Box, Container, Typography} from '@mui/material';
import Step1Form from '../components/Step1Form';
import Step2Form from '../components/Step2Form';
import {FormProvider, useForm} from 'react-hook-form';
import type {EmployerFormDataType} from '../types/EmployerFormDataType';
import ProgressForm from '../components/ProgressForm';
import GuideSteps from '../components/GuideSteps';
import ContainerButtons from '../components/ContainerButtons';
import HeaderForm from '@components/HeaderForm';
import {createUser, getEmployees} from '../services/employeeService';

export default function FormContext(): ReactElement {
     // Gerencia o progresso no processo de cadastro
     const [progress, setProgress] = useState<number>(0);
     // Gerencia o titulo a ser exibido no step
     const [titleStep, setTitleStep] = useState<number>(0);
     // Gerencia a etapa atual no cadastro
     const [activeStep, setActiveStep] = useState<number>(0);

     const formData = useForm<EmployerFormDataType>({
          defaultValues: {
               titulo: '',
               email: '',
               departamento: '',
               status: '',
          },
     });

     // Funções para transitar entre os passos
     const handleNext = async () => {
          const isValid = await formData.trigger();
          if (isValid) {
               setActiveStep((prev) => prev + 1);
               setProgress(progress + 50);
               setTitleStep((prev) => prev + 1);
          }
     };

     const handleBack = () => {
          setActiveStep((prev) => prev - 1);
          setProgress(progress - 50);
          setTitleStep((prev) => prev - 1);
     };

     const handleFinish = (data: any) => {
          const dataToSave = {
               ...data,
               status: data.status ? 'ativo' : 'inativo',
          };
          alert('Cadastro concluído!\n' + JSON.stringify(dataToSave, null, 2));
          reset();
          createUser(dataToSave);
          getEmployees();
     };

     // Método que reseta todas as variaveis
     const reset = () => {
          setActiveStep(0);
          setProgress(0);
          setTitleStep(0);
          formData.reset();
     };

     const steps = ['Infos Básicas', 'Infos Profissionais'];

     const renderStep = () => {
          switch (activeStep) {
               case 0:
                    return <Step1Form />;
               case 1:
                    return <Step2Form />;
               default:
                    return null;
          }
     };

     return (
          <Box>
               <HeaderForm />
               <ProgressForm progress={progress} />
               <Container maxWidth="xl" sx={{mt: 4}}>
                    <Box
                         sx={{
                              display: 'flex',
                              gap: 4,
                              minHeight: '280px',
                         }}>
                         {/* Stepper */}
                         <GuideSteps activeStep={activeStep} steps={steps} />
                         {/* Formulário */}
                         <FormProvider {...formData}>
                              <Box
                                   sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'stretch',
                                        rowGap: 4,
                                        width: '100%',
                                   }}>
                                   <Typography
                                        variant="h5"
                                        color="text.secondary">
                                        {steps[titleStep]}
                                   </Typography>
                                   <Box sx={{flex: 1}}>{renderStep()}</Box>
                              </Box>
                         </FormProvider>
                    </Box>
                    <ContainerButtons
                         activeStep={activeStep}
                         steps={steps}
                         onBack={handleBack}
                         onNext={handleNext}
                         onSubmit={formData.handleSubmit(handleFinish)}
                    />
               </Container>
               <button onClick={getEmployees}>Search</button>
          </Box>
     );
}
