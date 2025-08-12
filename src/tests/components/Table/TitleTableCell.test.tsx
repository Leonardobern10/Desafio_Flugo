import {render, screen} from '@testing-library/react';
import TitleTableCell from '@components/Table/TitleTableCell';
import {describe, expect, it} from 'vitest';

describe('TitleTableCell', () => {
     it('deve renderizar o componente com texto e avatar', () => {
          const textMock = 'Nome do Usuário';
          const avatarMock = 'https://example.com/avatar.png';

          render(
               <table>
                    <tbody>
                         <tr>
                              <TitleTableCell
                                   text={textMock}
                                   avatar={avatarMock}
                              />
                         </tr>
                    </tbody>
               </table>
          );

          // Verifica se o container com data-testId está no documento
          const container = screen.getByTestId('title-table-cell');
          expect(container).toBeInTheDocument();

          // Verifica se o texto está sendo exibido
          expect(screen.getByText(textMock)).toBeInTheDocument();

          // Verifica se a imagem do Avatar está com o src correto
          const avatarImg = container.querySelector('img');
          expect(avatarImg).toHaveAttribute('src', avatarMock);
     });

     it('deve renderizar o componente mesmo sem avatar', () => {
          const textMock = 'Sem avatar';

          render(
               <table>
                    <tbody>
                         <tr>
                              <TitleTableCell
                                   text={textMock}
                                   avatar={undefined}
                              />
                         </tr>
                    </tbody>
               </table>
          );

          expect(screen.getByText(textMock)).toBeInTheDocument();

          const container = screen.getByTestId('title-table-cell');
          const avatarImg = container.querySelector('img');

          // Aqui esperamos que NÃO tenha <img> quando avatar é undefined
          expect(avatarImg).toBeNull();
     });
});
