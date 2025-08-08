import {useState, type ReactElement} from 'react';
import {
     Box,
     Breadcrumbs,
     Button,
     Container,
     LinearProgress,
     Link,
     Step,
     StepLabel,
     Stepper,
     Typography,
} from '@mui/material';
import Step1Form from '../components/Step1Form';
import Step2Form from '../components/Step2Form';
import {useEmployeeFormStore} from '../store/employerFormStore';

export default function FormContext(): ReactElement {
     // Gerencia o progresso no processo de cadastro
     const [progress, setProgress] = useState<number>(0);

     // Gerencia a etapa atual no cadastro
     const [activeStep, setActiveStep] = useState<number>(0);

     // Acesso das informações definidas na store
     const {formData, setFormData, resetForm} = useEmployeeFormStore();

     // Funções para transitar entre os passos
     const handleNext = () => {
          setActiveStep((prev) => prev + 1);
          setProgress(progress + 50);
     };
     const handleBack = () => {
          setActiveStep((prev) => prev - 1);
          setProgress(progress - 50);
     };

     const handleFinish = () => {
          console.log({
               titulo: formData.titulo,
               email: formData.email,
               departamento: formData.departamento,
               status: formData.status,
          });
          alert('Cadastro concluído!\n' + JSON.stringify(formData, null, 2));
          resetForm();
          setActiveStep(0);
          setProgress(0);
     };

     const steps = ['Infos Básicas', 'Infos Profissionais'];

     const renderStep = () => {
          switch (activeStep) {
               case 0:
                    return <Step1Form onSubmit={handleNext} />;
               case 1:
                    return <Step2Form onSubmit={handleFinish} />;
               default:
                    return null;
          }
     };

     return (
          <Box>
               <Breadcrumbs separator=">" aria-label="breadcrumb">
                    <Link underline="none">
                         <Typography color="text.primary">
                              Colaboradores
                         </Typography>
                    </Link>
                    <Link underline="none">
                         <Typography color="text.secondary">
                              Cadastrar coladoradores
                         </Typography>
                    </Link>
               </Breadcrumbs>
               <Box
                    sx={{
                         width: '100%',
                         display: 'flex',
                         flexDirection: 'row',
                         justifyContent: 'space-between',
                         alignItems: 'center',
                    }}>
                    <LinearProgress
                         sx={{width: '95%'}}
                         variant="determinate"
                         value={progress}
                    />
                    <Typography>{progress}%</Typography>
               </Box>
               <Container maxWidth="sm" sx={{mt: 4}}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                         {steps.map((label) => (
                              <Step key={label}>
                                   <StepLabel>{label}</StepLabel>
                              </Step>
                         ))}
                    </Stepper>

                    <Box sx={{mt: 4}}>{renderStep()}</Box>

                    <Box
                         sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              mt: 4,
                         }}>
                         <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              variant="outlined">
                              Voltar
                         </Button>
                         {activeStep < steps.length - 1 && (
                              <Button
                                   onClick={() =>
                                        document
                                             .querySelector('form')!
                                             .requestSubmit()
                                   }
                                   variant="contained">
                                   Próximo
                              </Button>
                         )}
                         {activeStep === steps.length - 1 && (
                              <Button
                                   onClick={handleFinish}
                                   variant="contained"
                                   color="primary">
                                   Finalizar
                              </Button>
                         )}
                    </Box>
               </Container>
          </Box>
     );
}
