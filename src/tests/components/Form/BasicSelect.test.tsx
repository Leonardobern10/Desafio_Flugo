import {describe, it, expect} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';

// mock dos dados usados pelo componente
import {dataBasicSelect} from '@data/dataBasicSelect';
import BasicSelect from '@components/Form/BasicSelect';

describe('BasicSelect Component', () => {
     it('deve renderizar o label corretamente', () => {
          render(<BasicSelect />);
          const label = screen.getByText(dataBasicSelect.selectLabel);
          expect(label).toBeInTheDocument();
     });

     it('deve renderizar todas as opções do select', () => {
          render(<BasicSelect />);

          // Abrir o dropdown simulando o clique no select
          const selectInput = screen.getByRole('combobox', {
               name: /selecione um departamento/i,
          });

          fireEvent.mouseDown(selectInput);

          // Verificar se todas as opções aparecem no dropdown
          dataBasicSelect.allDepartaments.forEach(({departament}) => {
               const option = screen.getByText(departament);
               expect(option).toBeInTheDocument();
          });
     });

     it('deve permitir selecionar um departamento', () => {
          render(<BasicSelect />);
          const selectInput = screen.getByRole('combobox', {
               name: /selecione um departamento/i,
          });
          fireEvent.mouseDown(selectInput);

          const firstOptionText =
               dataBasicSelect.allDepartaments[0].departament;
          const firstOption = screen.getByText(firstOptionText);

          // Clicar na primeira opção
          fireEvent.click(firstOption);

          // Agora o valor selecionado deve aparecer no botão do select
          expect(screen.getByRole('combobox')).toHaveTextContent(
               firstOptionText
          );
     });
});
