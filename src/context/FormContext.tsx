import type {ReactElement} from 'react';
import './FormContext.css';

export default function FormContext(): ReactElement {
     return (
          <div className="form-context">
               <div>
                    <div>div1</div>
                    <div>div2</div>
               </div>
               <div>
                    <aside>Colaboradores</aside>
                    <main>
                         conteudo principal
                         {/* Renderização ocorre aqui */}
                    </main>
               </div>
          </div>
     );
}
