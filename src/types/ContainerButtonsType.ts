import type {GuideStepsType} from './GuideStepsType';

export type ContainerButtonsType = {
     activeStep: number;
     steps: Array<GuideStepsType>;
     onBack: () => void;
     onNext: () => void;
     onSubmit: () => void;
};
