import ControlledSwitch from '@components/ControlledSwitch';
import {render, screen, fireEvent} from '@testing-library/react';
import {beforeEach, describe, expect, it, vi} from 'vitest';

describe('ControlledSwitch', () => {
     const mockOnChange = vi.fn();

     const defaultProps = {
          text: 'Ativar notificações',
          checked: false,
          onChange: mockOnChange,
     };

     beforeEach(() => {
          mockOnChange.mockClear();
     });

     it('deve renderizar o texto corretamente', () => {
          render(<ControlledSwitch {...defaultProps} />);
          expect(screen.getByText('Ativar notificações')).toBeInTheDocument();
     });

     it('deve refletir o estado checked como false', () => {
          render(<ControlledSwitch {...defaultProps} />);
          const switchElement = screen.getByRole('checkbox', {
               name: 'controlled',
          });
          expect(switchElement).not.toBeChecked();
     });

     it('deve refletir o estado checked como true', () => {
          render(<ControlledSwitch {...defaultProps} checked={true} />);
          const switchElement = screen.getByRole('checkbox', {
               name: 'controlled',
          });
          expect(switchElement).toBeChecked();
     });

     it('deve chamar onChange quando o switch for clicado', () => {
          render(<ControlledSwitch {...defaultProps} />);
          const switchElement = screen.getByRole('checkbox', {
               name: 'controlled',
          });
          fireEvent.click(switchElement);
          expect(mockOnChange).toHaveBeenCalledTimes(1);
     });
});
