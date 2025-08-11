# Desafio Flugo

### Cadastro de Funcionários - Multi-step Form React + TypeScript + Material UI + Firebase

Projeto para desafio frontend que consiste em um formulário de cadastro de funcionários em múltiplas etapas, utilizando React com TypeScript, estilizado com Material UI, e persistência dos dados via Firebase Firestore.

## Tecnologias Utilizadas

- **ReactJS** (v18) com **TypeScript**
- **Material UI** para UI/estilização responsiva e acessível
- **React Hook Form** para gerenciamento de formulários e validação
- **Firebase Firestore** para persistência e backend de dados
- **Vite** como bundler e dev server (configuração rápida e moderna)
- **ESLint + Prettier** para qualidade e padronização de código (recomendado)

## Organização do Projeto

```
src/
├── assets/              # Imagens, ícones e logos usados no projeto
├── components/          # Componentes UI reutilizáveis (ex: Botões, Inputs, TableCells)
│   ├── Form/            # Componentes específicos do formulário multi-step (Step1Form, Step2Form, GuideSteps, etc)
│   ├── Table/           # Componentes relacionados à tabela de funcionários
│   └── Layout/          # SideBar, Header, MainContent, etc
├── context/             # Contextos React para estado global (ex: FormContext)
├── data/                # Dados estáticos ou mocks (ex: departamentos, dados de tabela)
├── services/            # Integração com Firebase e APIs externas
├── types/               # Tipos TypeScript para dados, enums, interfaces
├── app/                 # Entry point do app e configuração de rotas (se houver)
├── theme.ts             # Configuração customizada do Material UI Theme
└── main.tsx / index.tsx # Ponto de entrada do React

```

## Como Rodar Localmente

### Pré-requisitos

- Node.js v16+ instalado
- Firebase CLI (opcional para deploy)
- Conta no Firebase com projeto configurado e dados do arquivo `.env`

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/Leonardobern10/Desafio_Flugo.git
cd Desafio_Flugo
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz com as credenciais do Firebase (você deve obter no console Firebase):

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
```

4. Rode o projeto em modo desenvolvimento:

```bash
npm run dev
```

5. Abra o navegador e acesse:

```
http://localhost:5173
```

---

## Considerações Importantes

- **Validações:** Todos os campos do formulário são obrigatórios e possuem validação em cada etapa.
- **Navegação multi-step:** A navegação entre etapas é controlada via React Hook Form e validação, garantindo que o usuário não avance sem preencher corretamente.
- **Persistência:** Os dados são salvos no Firestore do Firebase, e listados na tabela logo após a criação.
- **Tema customizado:** O Material UI foi customizado para manter identidade visual da empresa, com cores e tipografia específicas.
- **Componentização:** O código é modular, o que facilita manutenção, testes e escalabilidade futura.
- **Responsividade:** O projeto utiliza Material UI que facilita adaptação para diferentes tamanhos de tela, mas recomenda-se testar e ajustar para mobile.
- **Acessibilidade:** Usar aria-labels e componentes semânticos pode ser melhorado para garantir acessibilidade total.

## Contato

Para dúvidas, melhorias ou contribuições, abra uma issue ou entre em contato:
Leonardo - \[[leonardo.bernardo2658@gmail.com](mailto:leonardo.bernardo2658@gmail.com)]
