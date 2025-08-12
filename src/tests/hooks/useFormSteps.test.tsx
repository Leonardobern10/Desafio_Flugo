import React from 'react';
import {render, act} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import {useFormSteps} from '@hooks/useFomSteps';

function HookWrapper({hookProps, onRender}: any) {
     const hook = useFormSteps(hookProps);
     React.useEffect(() => {
          onRender(hook);
     }, [hook, onRender]);
     return null;
}

describe('useFormSteps', () => {
     it('deve funcionar corretamente', async () => {
          const createUser = vi.fn();
          const getEmployees = vi.fn();
          const onClick = vi.fn();

          let hookResult: any;

          render(
               <HookWrapper
                    hookProps={{createUser, getEmployees, onClick}}
                    onRender={(hook: any) => {
                         hookResult = hook;
                    }}
               />
          );

          // Testa estado inicial
          expect(hookResult.progress).toBe(0);
          expect(hookResult.activeStep).toBe(0);
          expect(hookResult.titleStep).toBe(0);

          // Simula trigger válido
          const trigger = vi.fn().mockResolvedValue(true);

          await act(async () => {
               await hookResult.handleNext(trigger);
          });
          expect(hookResult.activeStep).toBe(1);
          expect(hookResult.progress).toBe(50);
          expect(hookResult.titleStep).toBe(1);

          // Retroceder
          act(() => {
               hookResult.handleBack();
          });
          expect(hookResult.activeStep).toBe(0);
          expect(hookResult.progress).toBe(0);
          expect(hookResult.titleStep).toBe(0);

          // Finalizar
          act(() => {
               hookResult.handleFinish({
                    titulo: 'Engenheiro',
                    email: 'leo@example.com',
                    status: true,
                    departamento: 'TI',
               });
          });
          expect(createUser).toHaveBeenCalled();
          expect(getEmployees).toHaveBeenCalled();
          expect(onClick).toHaveBeenCalled();
          expect(hookResult.activeStep).toBe(0);
     });
});
