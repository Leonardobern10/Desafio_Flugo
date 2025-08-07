import type {ReactElement} from 'react';
import logo from '../../assets/flugo_logo.svg';

export default function Logo(): ReactElement {
     return (
          <div>
               <img src={logo} alt="Logo da empresa" />
          </div>
     );
}
