import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, expect, vi, beforeEach} from 'vitest';
import Step1Form from '@components/Form/Step1Form';
import {useFormContext} from 'react-hook-form';

// Mock do ControlledSwitch para facilitar o teste
vi.mock('@components/ControlledSwitch', () => ({
     default: ({checked, onChange, text}: any) => (
          <label>
               <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e, e.target.checked)}
                    data-testid="controlled-switch"
               />
               {text}
          </label>
     ),
}));

// Mock do useFormContext para fornecer dados controlados
vi.mock('react-hook-form', () => ({
     useFormContext: vi.fn(),
     Controller: ({render, name}: any) => {
          // Simula o Controller chamando o render com um field
          return render({
               field: {
                    value: false,
                    onChange: vi.fn(),
                    name,
               },
          });
     },
}));

describe('Step1Form', () => {
     const mockRegister = vi.fn((name) => ({
          name,
          onChange: vi.fn(),
          onBlur: vi.fn(),
          ref: vi.fn(),
     }));

     const mockControl = {};

     const mockErrors = {};

     beforeEach(() => {
          (useFormContext as vi.Mock).mockReturnValue({
               register: mockRegister,
               control: mockControl,
               formState: {errors: mockErrors},
          });
     });

     it('deve renderizar campos de texto com labels e placeholders corretos', () => {
          render(<Step1Form />);

          expect(screen.getByLabelText('Titulo')).toBeInTheDocument();
          expect(
               screen.getByPlaceholderText('e.g. João Silva')
          ).toBeInTheDocument();

          expect(screen.getByLabelText('Email')).toBeInTheDocument();
          expect(
               screen.getByPlaceholderText('e.g. john@gmail.com')
          ).toBeInTheDocument();
     });

     it('deve renderizar ControlledSwitch com texto correto', () => {
          render(<Step1Form />);
          expect(screen.getByText('Ativar ao criar')).toBeInTheDocument();

          const switchInput = screen.getByTestId('controlled-switch');
          expect(switchInput).toBeInTheDocument();
          expect(switchInput).not.toBeChecked();

          // Simula clicar para mudar o switch
          fireEvent.click(switchInput);
     });

     it('deve exibir mensagens de erro quando presentes', () => {
          (useFormContext as vi.Mock).mockReturnValueOnce({
               register: mockRegister,
               control: mockControl,
               formState: {
                    errors: {
                         titulo: {message: 'Erro no título'},
                         email: {message: 'Erro no email'},
                    },
               },
          });

          render(<Step1Form />);

          expect(screen.getByText('Erro no título')).toBeInTheDocument();
          expect(screen.getByText('Erro no email')).toBeInTheDocument();
     });
});
