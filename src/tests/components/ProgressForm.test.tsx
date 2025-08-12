import {render, screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import ProgressForm from '@components/ProgressForm';

describe('ProgressForm', () => {
     it('deve renderizar a barra de progresso com o valor correto', () => {
          render(<ProgressForm progress={50} />);

          // Verifica se o texto com o valor percentual aparece
          expect(screen.getByText('50%')).toBeInTheDocument();

          // Verifica se o LinearProgress tem o valor correto na prop "value"
          const progressBar = screen.getByRole('progressbar');
          expect(progressBar).toHaveAttribute('aria-valuenow', '50');
     });

     it('deve mostrar 0% quando o progresso for 0', () => {
          render(<ProgressForm progress={0} />);
          expect(screen.getByText('0%')).toBeInTheDocument();
     });

     it('deve mostrar 100% quando o progresso for 100', () => {
          render(<ProgressForm progress={100} />);
          expect(screen.getByText('100%')).toBeInTheDocument();
     });
});
