import {render, screen} from '@testing-library/react';
import SmallTableCell from '@components/Table/SmallTableCell';
import {describe, it, expect} from 'vitest';

describe('SmallTableCell', () => {
     it('deve renderizar o texto passado na prop', () => {
          const sampleText = 'Texto de exemplo';

          render(<SmallTableCell text={sampleText} />);

          // Verifica se o container com data-testid existe
          const tableCell = screen.getByTestId('table-cell');
          expect(tableCell).toBeInTheDocument();

          // Verifica se o texto renderizado está correto
          expect(tableCell).toHaveTextContent(sampleText);
     });
});
