import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';
import TopTable from '@components/Table/TopTable'; // Ajuste o caminho se necessário
import {dataTopTable} from '@data/dataTopTable';

describe('TopTable', () => {
     it('deve renderizar o título e o botão corretamente', () => {
          render(<TopTable onClick={() => {}} />);

          // Verifica se o título da seção está sendo exibido
          const title = screen.getByText(dataTopTable.titleSection);
          expect(title).toBeInTheDocument();

          // Verifica se o botão com o texto correto está sendo exibido
          const button = screen.getByTestId('top-table-button');
          expect(button).toBeInTheDocument();
          expect(button).toHaveTextContent(dataTopTable.buttonTitle);
     });

     it('deve chamar a função onClick com true ao clicar no botão', () => {
          const onClickMock = vi.fn();
          render(<TopTable onClick={onClickMock} />);

          const button = screen.getByTestId('top-table-button');
          fireEvent.click(button);

          expect(onClickMock).toHaveBeenCalledTimes(1);
          expect(onClickMock).toHaveBeenCalledWith(true);
     });
});
