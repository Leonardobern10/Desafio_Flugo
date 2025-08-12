import Logo from '@components/Logo/Logo';
import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';

describe('Logo', () => {
     it('deve renderizar a imagem da logo', () => {
          render(<Logo />);
          const img = screen.getByAltText('Logo da empresa');
          expect(img).toBeInTheDocument();
     });

     it('deve ter o src correto da imagem', () => {
          render(<Logo />);
          const img = screen.getByAltText(
               'Logo da empresa'
          ) as HTMLImageElement;
          expect(img.src).toContain('flugo_logo.svg');
     });
});
