import type {ReactElement} from 'react';
import {Avatar} from '@mui/material';
import avatar1 from '../../assets/avatar1.png';

export default function UserAvatar(): ReactElement {
     return <Avatar src={avatar1} alt="Ícone de avatar do usuário" />;
}
