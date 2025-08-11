import {useState, type ReactElement} from 'react';
import {Box, Container, Typography} from '@mui/material';
import {FormProvider, useForm} from 'react-hook-form';
import ProgressForm from '../components/ProgressForm';
import GuideSteps from '../components/Form/GuideSteps';
import ContainerButtons from '../components/ContainerButtons';
import HeaderForm from '@components/Form/HeaderForm';
import {createUser, getEmployees} from '../services/employeeService';
import Step1Form from '@components/Form/Step1Form';
import Step2Form from '@components/Form/Step2Form';
import {dataGuideSteps} from '@data/dataGuideSteps';
import {zodResolver} from '@hookform/resolvers/zod';
import {
     employeeSchema,
     type EmployeeSchemaType,
} from '../validations/employeeSchema';

export default function FormContext(props: {
     onClick: () => void;
}): ReactElement {
     // Gerencia o progresso no processo de cadastro
     const [progress, setProgress] = useState<number>(0);
     // Gerencia o titulo a ser exibido no step
     const [titleStep, setTitleStep] = useState<number>(0);
     // Gerencia a etapa atual no cadastro
     const [activeStep, setActiveStep] = useState<number>(0);
     const formData = useForm<EmployeeSchemaType>({
          resolver: zodResolver(employeeSchema),
          defaultValues: {
               titulo: '',
               email: '',
               departamento: '',
               status: false,
          },
     });

     // Funções para transitar entre os passos
     const handleNext = async () => {
          let isValid = false;

          if (activeStep === 0) {
               isValid = await formData.trigger(['titulo', 'email', 'status']);
          } else if (activeStep === 1) {
               isValid = await formData.trigger(['departamento']);
          }

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
               status: data.status ? 'Ativo' : 'Inativo',
          };
          alert('Cadastro concluído!\n' + JSON.stringify(dataToSave, null, 2));
          reset();
          createUser(dataToSave);
          getEmployees();
          props.onClick();
     };

     // Método que reseta todas as variaveis
     const reset = () => {
          setActiveStep(0);
          setProgress(0);
          setTitleStep(0);
          formData.reset();
     };

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
               <HeaderForm onClick={props.onClick} />
               <ProgressForm progress={progress} />
               <Container maxWidth="xl" sx={{mt: 4}}>
                    <Box
                         sx={{
                              display: 'flex',
                              gap: 4,
                              minHeight: '280px',
                         }}>
                         {/* Stepper */}
                         <GuideSteps
                              activeStep={activeStep}
                              steps={dataGuideSteps}
                         />
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
                                        {dataGuideSteps[titleStep].title}
                                   </Typography>
                                   <Box sx={{flex: 1}}>{renderStep()}</Box>
                              </Box>
                         </FormProvider>
                    </Box>
                    <ContainerButtons
                         activeStep={activeStep}
                         steps={dataGuideSteps}
                         onBack={handleBack}
                         onNext={handleNext}
                         onSubmit={formData.handleSubmit(handleFinish)}
                    />
               </Container>
          </Box>
     );
}
