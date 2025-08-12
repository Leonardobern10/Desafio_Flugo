import ContainerButtons from '@components/ContainerButtons';
import {render, screen, fireEvent} from '@testing-library/react';
import type {GuideStepsType} from 'types/GuideStepsType';
import {describe, expect, it, vi} from 'vitest';

describe('ContainerButtons', () => {
     const stepsMock: GuideStepsType[] = [
          {step: 'Step 1', title: ''},
          {step: 'Step 2', title: ''},
          {step: 'Step 3', title: ''},
     ];

     it('deve renderizar botão Próximo quando não for o último passo', () => {
          const onNext = vi.fn();

          render(
               <ContainerButtons
                    activeStep={0}
                    steps={stepsMock}
                    onBack={() => {}}
                    onNext={onNext}
                    onSubmit={() => {}}
               />
          );

          const nextButton = screen.getByRole('button', {name: /próximo/i});
          expect(nextButton).toBeInTheDocument();

          fireEvent.click(nextButton);
          expect(onNext).toHaveBeenCalled();
     });

     it('deve renderizar botão Finalizar quando for o último passo', () => {
          const onSubmit = vi.fn();

          render(
               <ContainerButtons
                    activeStep={stepsMock.length - 1}
                    steps={stepsMock}
                    onBack={() => {}}
                    onNext={() => {}}
                    onSubmit={onSubmit}
               />
          );

          const finishButton = screen.getByRole('button', {name: /concluir/i});
          expect(finishButton).toBeInTheDocument();

          fireEvent.click(finishButton);
          expect(onSubmit).toHaveBeenCalled();
     });
});
