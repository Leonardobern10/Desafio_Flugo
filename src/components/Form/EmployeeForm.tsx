import {type ReactElement} from 'react';
import {Box, Container, Typography} from '@mui/material';
import {FormProvider, useForm} from 'react-hook-form';
import ProgressForm from '@components/ProgressForm';
import GuideSteps from './GuideSteps';
import ContainerButtons from '../ContainerButtons';
import HeaderForm from '@components/Form/HeaderForm';
import {createUser, getEmployees} from '../../services/employeeService';
import Step1Form from '@components/Form/Step1Form';
import Step2Form from '@components/Form/Step2Form';
import {dataGuideSteps} from '@data/dataGuideSteps';
import {zodResolver} from '@hookform/resolvers/zod';
import {
     employeeSchema,
     type EmployeeSchemaType,
} from '@validations/employeeSchema';
import {useFormSteps} from '@hooks/useFomSteps'; // corrigir nome do arquivo aqui!

export default function FormContext(props: {
     onClick: () => void;
}): ReactElement {
     const formData = useForm<EmployeeSchemaType>({
          resolver: zodResolver(employeeSchema),
          defaultValues: {
               titulo: '',
               email: '',
               departamento: '',
               status: false,
          },
     });

     const {
          progress,
          titleStep,
          activeStep,
          handleNext,
          handleBack,
          handleFinish,
     } = useFormSteps({
          createUser,
          getEmployees,
          onClick: props.onClick,
     });

     const onNextClick = () => {
          handleNext(formData.trigger);
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
          <Box sx={{paddingRight: 4}}>
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
                         onNext={onNextClick} // <-- Aqui passa a função intermediária
                         onSubmit={formData.handleSubmit(handleFinish)}
                    />
               </Container>
          </Box>
     );
}
