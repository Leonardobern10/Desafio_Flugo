import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';
import {dataHeader} from '@data/dataHeader';
import HeaderForm from '@components/Form/HeaderForm';

describe('HeaderForm', () => {
     it('deve renderizar os textos corretos do breadcrumb', () => {
          render(<HeaderForm onClick={() => {}} />);

          expect(screen.getByText(dataHeader.titleSection)).toBeInTheDocument();
          expect(screen.getByText(dataHeader.buttonTitle)).toBeInTheDocument();
     });

     it('deve chamar onClick ao clicar no primeiro link', () => {
          const onClickMock = vi.fn();
          render(<HeaderForm onClick={onClickMock} />);

          const firstLink = screen.getByText(dataHeader.titleSection);
          fireEvent.click(firstLink);

          expect(onClickMock).toHaveBeenCalledTimes(1);
     });
});
