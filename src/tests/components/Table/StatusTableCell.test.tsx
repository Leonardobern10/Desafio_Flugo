import {render, screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import StatusTableCell from '@components/Table/StatusTableCell';

describe('StatusTableCell', () => {
     it('deve renderizar o texto passado', () => {
          render(
               <table>
                    <tbody>
                         <tr>
                              <StatusTableCell text="Ativo" />
                         </tr>
                    </tbody>
               </table>
          );
          const cell = screen.getByTestId('status-table-cell');
          expect(cell).toBeInTheDocument();
          expect(cell).toHaveTextContent('Ativo');
     });

     it('deve aplicar estilo correto para texto "Ativo"', () => {
          render(
               <table>
                    <tbody>
                         <tr>
                              <StatusTableCell text="Ativo" />
                         </tr>
                    </tbody>
               </table>
          );
          const typography = screen.getByText('Ativo');
          expect(typography).toHaveStyle({
               backgroundColor: 'rgba(34, 197, 94, 0.16)',
               color: 'rgba(17, 141, 87, 1)',
          });
     });

     it('deve aplicar estilo correto para texto diferente de "Ativo"', () => {
          render(
               <table>
                    <tbody>
                         <tr>
                              <StatusTableCell text="Inativo" />
                         </tr>
                    </tbody>
               </table>
          );
          const typography = screen.getByText('Inativo');
          expect(typography).toHaveStyle({
               backgroundColor: 'rgba(255, 86, 48, 0.16)',
               color: 'rgba(183, 29, 24, 1)',
          });
     });
});
