import {render, screen} from '@testing-library/react';
import EmployeeRow from '@components/Table/EmployeeRow';
import {describe, it, expect} from 'vitest';

describe('EmployeeRow', () => {
     const mockEmployee = {
          titulo: 'Desenvolvedor',
          email: 'dev@example.com',
          departamento: 'TI',
          status: 'Ativo',
          avatar: 'avatar.png',
     };

     it('deve renderizar a linha da tabela com os dados do funcionário', () => {
          render(<EmployeeRow employee={mockEmployee} />);

          // Verifica se o TableRow está presente
          const tableRow = screen.getByTestId('table-row');
          expect(tableRow).toBeInTheDocument();

          // Verifica se o título está renderizado
          expect(screen.getByText(mockEmployee.titulo)).toBeInTheDocument();

          // Verifica se o email está renderizado
          expect(screen.getByText(mockEmployee.email)).toBeInTheDocument();

          // Verifica se o departamento está renderizado
          expect(
               screen.getByText(mockEmployee.departamento)
          ).toBeInTheDocument();

          // Verifica se o status está renderizado
          expect(screen.getByText(mockEmployee.status)).toBeInTheDocument();

          // Opcional: verificar se o avatar está presente no DOM (imagem dentro do Avatar)
          const avatarImg = (tableRow as HTMLElement).querySelector('img');
          expect(avatarImg).toHaveAttribute('src', mockEmployee.avatar);
     });
});
