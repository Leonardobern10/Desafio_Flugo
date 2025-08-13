import {useMediaQuery} from '@mui/material';
import theme from '../theme';

/**
 * Custom React Hook para detectar se a largura de tela atual
 * pertence à um dispositivo móvel.
 *
 * Utiliza o breakpoint 'md' do tema Material UI para verificar se a tela
 * está em um tamanho igual ou menor que 'md' (geralmente 960px).
 *
 * @returns {boolean} `true` se a tela for considerada mobile (menor ou igual a 'md'), `false` caso contrário.
 *
 *
 * */
export default function useIsMobile(): boolean {
     return useMediaQuery(theme.breakpoints.down('lg'));
}
