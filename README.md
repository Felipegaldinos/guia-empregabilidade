# Guia de Empregabilidade

Plataforma educacional com quatro módulos, quizzes e acompanhamento de progresso. O projeto reúne conteúdo sobre preparação profissional com cadastro, pontuação e selos.

## Funcionalidades

- Cadastro com Firebase Authentication e perfil no Firestore.
- Quatro módulos com perguntas, respostas salvas e retomada de progresso.
- Pontuação, selos por módulo e ranking de participantes.
- Painel com dados de perfil, progresso e ranking atualizado por escutas do Firestore.

## Tecnologias

React 19, Vite 8, React Router, Firebase Authentication, Cloud Firestore, Analytics e CSS.

## Como executar

Requisitos: Node.js e npm compatíveis com as versões de Vite e dos plugins declaradas em `package.json`.

```sh
git clone https://github.com/Felipegaldinos/guia-empregabilidade.git
cd guia-empregabilidade
npm install
```

Antes de iniciar, crie `.env.local` na raiz e preencha com a configuração Web de um projeto Firebase de teste:

```dotenv
VITE_FIREBASE_API_KEY=seu_valor
VITE_FIREBASE_AUTH_DOMAIN=seu_valor
VITE_FIREBASE_PROJECT_ID=seu_valor
VITE_FIREBASE_STORAGE_BUCKET=seu_valor
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_valor
VITE_FIREBASE_APP_ID=seu_valor
VITE_FIREBASE_MEASUREMENT_ID=seu_valor
```

Habilite Authentication com e-mail/senha e crie o Cloud Firestore. A configuração também é usada pelo Analytics. Defina as regras de acesso e os domínios autorizados para o ambiente. Essas variáveis são configuração do cliente e não substituem regras de autorização. Não inclua senhas ou credenciais administrativas nelas. Reinicie o Vite depois de alterar o arquivo.

```sh
npm run dev
```

Abra o endereço exibido no terminal.

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gerar a versão de produção |
| `npm run preview` | Visualizar o build localmente |
| `npm run lint` | Executar a análise do ESLint |

Na hospedagem, configure o fallback das rotas da aplicação para `index.html`, permitindo acesso direto às páginas internas.

## Organização do código

- `src/components/Rotas/AppRoutes.jsx` — rotas e verificação de sessão.
- `src/components/ModulePage.jsx` — apresentação dos módulos e persistência das respostas.
- `src/data/` — conteúdo dos quatro módulos.
- `src/hooks/useDashboardData.js` — perfil, ranking e progresso.
- `src/services/firebase.js` — configuração dos serviços Firebase.

## Roteiro de demonstração

Crie uma conta de teste, abra /modulo/1, responda perguntas e recarregue a página. Confira a retomada das respostas e o perfil em /admin. Teste com um projeto Firebase separado.

## Limitações atuais

O painel em /admin verifica se existe usuário autenticado; o código dessa rota não diferencia um administrador de um participante. As regras de acesso do Firestore precisam definir as permissões reais. O ranking lê documentos de usuários; revise quais dados de perfil podem ser consultados. O cálculo de pontuação ocorre no cliente e precisa de validação confiável antes de uso competitivo.

## Competências demonstradas

Aplicação com estado persistente, autenticação, conteúdo estruturado e sincronização de dados.

## Autoria

Projeto disponível no perfil de [Felipe Galdino](https://github.com/Felipegaldinos). Consulte os arquivos do repositório para verificar os termos de licença aplicáveis.
