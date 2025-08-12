import {render, screen} from '@testing-library/react';
import ContainerAvatar from '@components/ContainerAvatar';
import {describe, it, expect, vi} from 'vitest';

// Se UserAvatar tiver dependências ou lógica complexa, podemos mockar:
vi.mock('@components/UserAvatar', () => ({
     default: () => <div data-testid="user-avatar-mock" />,
}));

describe('ContainerAvatar', () => {
     it('deve renderizar o UserAvatar dentro do Box', () => {
          render(<ContainerAvatar />);

          // Verifica se o UserAvatar mockado está presente no DOM
          const avatar = screen.getByTestId('user-avatar-mock');
          expect(avatar).toBeInTheDocument();
     });
});
