# Desafio Flugo

![Node.js](https://img.shields.io/badge/Node-v16+-green)
![React](https://img.shields.io/badge/React-18-blue)
![Typescript](https://img.shields.io/badge/Typescript-5.8-blue)
![Zod](https://img.shields.io/badge/Zod-4+-blue)
![Material UI](https://img.shields.io/badge/MaterialUI-7+-blue)
![React Hook Form](https://img.shields.io/badge/ReactHookForm-7+-blue)
![react-toastify](https://img.shields.io/badge/react_toastify-11+-blue)
![vitest](https://img.shields.io/badge/vitest-3+-blue)

## Cadastro de Funcionários - Multi-step Form React + TypeScript + Material UI + Firebase

Projeto para desafio frontend que consiste em um formulário de cadastro de funcionários em múltiplas etapas, utilizando React com TypeScript, estilizado com Material UI, e persistência dos dados via Firebase Firestore.

## Tecnologias Utilizadas

- **ReactJS** (v18) com **TypeScript**
- **Material UI** para UI/estilização responsiva e acessível
- **React Hook Form** para gerenciamento de formulários e validação
- **Firebase Firestore** para persistência e backend de dados
- **Vite** como bundler e dev server (configuração rápida e moderna)
- **ESLint + Prettier** para qualidade e padronização de código (recomendado)
- **react-toastify** para notificações push e feedback ao usuário
- **zod** para validação de campos do formulário
- **vitest + react-testing-library** para testes aplicados

## Organização do Projeto

```
src/
├── app/                 # Entry point do app
├── assets/              # Imagens, ícones e logos usados no projeto
├── components/          # Componentes UI reutilizáveis (ex: Botões, Inputs, TableCells)
│   ├── Form/            # Componentes específicos do formulário multi-step (Step1Form, Step2Form, GuideSteps, etc)
│   ├── Table/           # Componentes relacionados à tabela de funcionários (ex: Rows, TopTable, Cells, etc.)
│   └── Logo/          # Componente de renderização da logo
│   └── Sidebar/          # Componente de renderização da barra lateral da página
├── data/                # Dados estáticos ou mocks (ex: departamentos, dados de tabela)
|-- hooks/               # Hooks personalizados para utilização no sistema (ex: useFormSteps, useLoadingEmployee)
├── services/            # Integração com Firebase e APIs externas
|-- tests/               # Arquivos de testes com vitest + RTL
├── types/               # Tipos TypeScript para dados, enums, interfaces
├── validations/         # Schema de validação dos dados que chegam do formulários com Zod (employeeSchema)
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

6. Para rodar os testes

```bash
npm run test
```

## Documentação de Testes

Esta tabela resume os testes implementados por componente/hook, seu objetivo e o que verificam.

| Componente/Hook        | Objetivo do Teste                    | O Que Verifica                                                                           |
| ---------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------- |
| **BasicSelect**        | Seleção de opções                    | Renderização do label, opções do dropdown e interação do usuário (seleção de valor)      |
| **HeaderForm**         | Exibição de textos                   | Textos de `titleSection` e `buttonTitle` e execução de `onClick` no primeiro link        |
| **Step1Form**          | Formulário inicial                   | Inputs Titulo e Email, `ControlledSwitch` e mensagens de erro                            |
| **Step2Form**          | Seleção de departamento              | Renderização do select, opções no dropdown e mensagens de erro                           |
| **Logo**               | Exibição da logo                     | Presença da imagem com `alt` correto e `src` esperado                                    |
| **Sidebar**            | Sidebar funcional                    | Renderização do título, Avatar fallback e ícone `ArrowForwardIosIcon`                    |
| **ContainerAvatar**    | Avatar do usuário                    | Presença do `UserAvatar` renderizado corretamente                                        |
| **ContainerButtons**   | Botões do formulário                 | Exibição do botão correto no último passo e execução de `onSubmit`                       |
| **ControlledSwitch**   | Switch controlado                    | Exibição do texto, estado `checked` e execução de `onChange`                             |
| **Header**             | Cabeçalho                            | Presença do `<header>` e renderização do `Logo` e `UserAvatar`                           |
| **MainContent**        | Conteúdo principal                   | Renderização inicial do TopTable/TableEmployee e troca para FormContext ao clicar        |
| **ProgressForm**       | Barra de progresso                   | Valor percentual correto e LinearProgress refletindo o progresso                         |
| **UserAvatar**         | Avatar do usuário                    | Presença do componente e da `<img>` com `alt` correto                                    |
| **TitleTableCell**     | Célula da tabela                     | Renderização do texto, avatar condicional e container principal (`data-testid`)          |
| **StatusTableCell**    | Célula de status                     | Texto, `data-testid` e estilos para "Ativo" ou outros status                             |
| **SmallTableCell**     | Célula pequena                       | Presença do elemento e do texto passado                                                  |
| **EmployeeRow**        | Linha da tabela                      | Renderização de título, email, departamento, status e avatar (`<img>` com `src` correto) |
| **TopTable**           | Tabela superior                      | Renderização de título e botão, execução de `onClick` com argumento correto              |
| **useFormSteps**       | Hook de passos do formulário         | Estados iniciais, avançar passo, voltar passo e finalizar formulário corretamente        |
| **useLoadingEmployee** | Hook de carregamento de funcionários | Cenário de sucesso e erro: estados `loading`, `employees` e `error`                      |

## Tutorial Completo: Como se cadastrar no sistema de funcionários

Este tutorial irá guiá-lo pelo processo de cadastro de um novo funcionário, explicando cada campo do formulário, como preenchê-lo corretamente e quais são as regras de validação.

### Acessando o formulário de cadastro

- Navegue até a tela principal do sistema.
- Clique no botão de “Adicionar novo funcionário” ou equivalente.
- O formulário multi-etapas (EmployeeForm) será exibido, com:
     - Barra de progresso (ProgressForm) indicando em qual etapa você está.
     - Stepper (GuideSteps) mostrando os passos do formulário.

#### Passo 1 – Dados básicos

No Passo 1 (Step1Form), você preencherá os campos iniciais do funcionário.

Campos e restrições:

- Título: Campo de texto para o nome completo do funcionário.
     - Restrições:
          - Deve ter mínimo 2 caracteres e máximo 50 caracteres.
          - Espaços em branco no início ou fim são removidos automaticamente.
          - Mensagem de erro será exibida caso a validação não seja atendida.
          - **Exemplo válido: João Silva.**

- Email: Campo para inserir o email do funcionário.
     - Restrições:
          - Deve estar em formato de email válido (ex.: joao@email.com).
          - Máximo de 100 caracteres.
          - Mensagem de erro aparecerá se o email for inválido ou muito longo.

- Status (Ativar ao criar) - Switch para definir se o funcionário estará ativo ou não.
     - Restrições:
          - Aceita apenas valores booleanos: true (ativo) ou false (inativo).
     - O switch inicia desligado (false). Clique para ativá-lo.

_Após preencher todos os campos corretamente, clique em Próximo para ir ao passo seguinte._

#### Passo 2 – Departamento

No Passo 2 (Step2Form), você escolherá o departamento do funcionário.

- Campo e restrições:
     - Selecione um departamento: Campo select (dropdown) com todas as opções disponíveis (dataAllDepartaments).
     - Restrições:
          - Não pode ser vazio.
          - O texto selecionado será automaticamente registrado no formulário.
          - Se não for selecionado, aparecerá a mensagem: "Departamento é obrigatório".

_Clique no botão Concluir para finalizar o cadastro._

#### Finalizando o cadastro

- O sistema enviará os dados para o backend via função createUser.
- Um avatar aleatório será gerado para o funcionário automaticamente.
- Notificações:
     - Sucesso: "Cadastro realizado!".
     - Erro: "Erro ao cadastrar colaborador!" caso haja algum problema.

#### Observações importantes

- Todos os campos são validados automaticamente com `Zod` e `react-hook-form`.
- A barra de progresso (`ProgressForm`) mostra visualmente a evolução do formulário.
- O stepper (`GuideSteps`) ajuda a identificar em qual etapa você está.
- É possível voltar para o passo anterior clicando no botão Voltar.
- Garantir o cumprimento das restrições de cada campo evita erros e rejeição no cadastro.

### Após cadastro, o dados são exibidos na tabela

- Aqui, o usuário pode selecionar um novo avatar clicando no avatar
- Escolhendo a imagem que deseja
- E logo ela será exibida.

## Considerações Importantes

- **Escolha de avatar**: O sistema disponibiliza a funcionalidade de escolha de avatar logo após cadastro. Todavia, o avatar definido é renderizado apenas durante a sessão, ou seja, após reiniciar a sessão o avatar some. Isso ocorre porque para a persistência das imagens definidas pelo avatar, seria necessário utilizar um `storage` já que aderimos ao `firebase`, e o `storage` necessita de assinatura paga.
- **State para navegação**: Foi utilizado o hook `useState` para navegação entre páginas pelo fato de termos apenas duas (Tabela -> Formulario, e vice-versa). Para navegação entre mais páginas utilizariamos o `react-router` junto com a definição de `routers` e `endpoints` da api.

## Contato

Para dúvidas, melhorias ou contribuições, abra uma issue ou entre em contato:
Leonardo - \[[leonardo.bernardo2658@gmail.com](mailto:leonardo.bernardo2658@gmail.com)]
