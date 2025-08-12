import {render, screen} from '@testing-library/react';
import UserAvatar from '@components/UserAvatar';
import {describe, expect, it} from 'vitest';

describe('UserAvatar', () => {
     it('deve renderizar o avatar e imagem com alt correto', () => {
          render(<UserAvatar />);

          // Busca o container do avatar pelo test id
          const avatar = screen.getByTestId('user-avatar');
          expect(avatar).toBeInTheDocument();

          // Busca o elemento <img> dentro do Avatar
          const img = avatar.querySelector('img');
          expect(img).toBeInTheDocument();

          // Verifica se a imagem tem o alt correto
          expect(img).toHaveAttribute('alt', 'Ícone de avatar do usuário');
     });
});
