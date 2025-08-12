import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, expect, vi, beforeEach} from 'vitest';
import {useFormContext} from 'react-hook-form';
import Step2Form from '@components/Form/Step2Form';
import {dataAllDepartaments} from '@data/dataAllDepartaments';

vi.mock('react-hook-form');

describe('Step2Form', () => {
     const mockRegister = vi.fn();

     beforeEach(() => {
          (useFormContext as vi.Mock).mockReturnValue({
               register: mockRegister,
               formState: {errors: {}},
          });
     });

     it('deve renderizar o select e mostrar os departamentos ao abrir', () => {
          render(<Step2Form />);

          // Pega o elemento select pelo label
          const select = screen.getByLabelText('Selecione um departamento');

          // Simula clique para abrir o menu
          fireEvent.mouseDown(select);

          // Agora verifica se as opções aparecem
          dataAllDepartaments.forEach(({departament}) => {
               expect(screen.getByText(departament)).toBeInTheDocument();
          });
     });

     it('deve exibir mensagem de erro quando houver erro no campo departamento', () => {
          const errorMessage = 'Departamento é obrigatório';

          (useFormContext as vi.Mock).mockReturnValueOnce({
               register: mockRegister,
               formState: {
                    errors: {
                         departamento: {message: errorMessage},
                    },
               },
          });

          render(<Step2Form />);

          expect(screen.getByText(errorMessage)).toBeInTheDocument();
     });
});
