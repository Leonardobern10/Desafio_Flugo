import Header from '@components/Header';
import {render, screen} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';

// Mockando componentes filhos para simplificar o teste
vi.mock('./Logo/Logo', () => ({
     default: () => <div data-testid="logo">Logo</div>,
}));
vi.mock('./UserAvatar', () => ({
     default: () => <div data-testid="user-avatar">User Avatar</div>,
}));

describe('Header component', () => {
     it('deve renderizar o header com Logo e UserAvatar', () => {
          render(<Header />);

          // Garante que o elemento <header> foi renderizado
          const headerElement = screen.getByRole('banner');
          expect(headerElement).toBeInTheDocument();

          // Garante que o Logo foi renderizado
          expect(screen.getByTestId('logo')).toBeInTheDocument();

          // Garante que o UserAvatar foi renderizado
          expect(screen.getByTestId('user-avatar')).toBeInTheDocument();
     });
});
