import {render, screen} from '@testing-library/react';
import isMobile from '@services/isMobile';
import {afterEach, describe, expect, it, vi} from 'vitest';
import GuideSteps from '@components/Form/GuideSteps';

vi.mock('@services/isMobile');

describe('GuideSteps', () => {
     const stepsMock = [
          {step: 'Step 1', title: 'Title 1'},
          {step: 'Step 2', title: 'Title 2'},
          {step: 'Step 3', title: 'Title 3'},
     ];

     afterEach(() => {
          vi.clearAllMocks();
     });

     it('deve renderizar todos os passos fornecidos', () => {
          (isMobile as vi.Mock).mockReturnValue(false);

          render(<GuideSteps activeStep={0} steps={stepsMock} />);

          stepsMock.forEach(({step}) => {
               expect(screen.getByText(step)).toBeInTheDocument();
          });
     });

     it('deve aplicar orientação vertical quando não for mobile', () => {
          (isMobile as vi.Mock).mockReturnValue(false);

          const {container} = render(
               <GuideSteps activeStep={1} steps={stepsMock} />
          );
          const stepper = container.querySelector('.MuiStepper-root');

          expect(stepper).toHaveClass('MuiStepper-vertical');
     });

     it('deve aplicar orientação horizontal quando for mobile', () => {
          (isMobile as vi.Mock).mockReturnValue(true);

          const {container} = render(
               <GuideSteps activeStep={1} steps={stepsMock} />
          );
          const stepper = container.querySelector('.MuiStepper-root');

          expect(stepper).not.toHaveClass('MuiStepper-vertical');
          // opcional: verificar se não tem classe MuiStepper-horizontal, se aplicável
     });

     it('deve ajustar o rowGap conforme activeStep via snapshot', () => {
          (isMobile as vi.Mock).mockReturnValue(false);

          const {container, rerender} = render(
               <GuideSteps activeStep={0} steps={stepsMock} />
          );

          expect(container.firstChild).toMatchSnapshot();

          rerender(<GuideSteps activeStep={1} steps={stepsMock} />);

          expect(container.firstChild).toMatchSnapshot();
     });
});
