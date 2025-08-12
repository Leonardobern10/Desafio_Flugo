import {render, screen} from '@testing-library/react';
import {dataSidebar} from '@data/dataSidebar';
import {describe, expect, it} from 'vitest';
import SideBar from '@components/SideBar/SideBar';

describe('SideBar', () => {
     it('deve renderizar o título vindo do dataSidebar', () => {
          render(<SideBar />);
          expect(screen.getByText(dataSidebar.titleOption)).toBeInTheDocument();
     });

     it('deve renderizar o Avatar com as propriedades corretas', () => {
          render(<SideBar />);
          const fallbackIcon = screen.getByTestId('PersonIcon'); // pega o ícone SVG interno do Avatar fallback
          expect(fallbackIcon).toBeInTheDocument();
     });

     it('deve renderizar o ícone ArrowForwardIosIcon', () => {
          render(<SideBar />);
          // A melhor forma é buscar pelo elemento SVG do ícone
          const svgIcon =
               screen.getByTestId('ArrowForwardIosIcon') ||
               screen.getByRole('img', {hidden: true});
          expect(svgIcon).toBeInTheDocument();
     });
});
