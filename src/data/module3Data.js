export const module3Data = {
  id: "3",
  tag: "MÓDULO 3",
  title: "Segurança Digital e Dicas Antigolpe",
  subtitle: "Checklists para identificar fraudes, proteger suas contas e cuidar da sua privacidade durante cadastros e atividades online.",
  
  sections: [
    {
      id: "01",
      title: "O que é segurança digital?",
      description: "Entenda por que proteger suas informações é importante.",
      quizzes: [
        {
          statement: "O que define o conceito e o objetivo principal da segurança digital?",
          options: [
            { id: "a", label: "Deixar de usar a internet totalmente para evitar qualquer risco de invasão." },
            { id: "b", label: "Conjunto de práticas para proteger contas, senhas, documentos e dados, permitindo navegar com mais consciência." },
            { id: "c", label: "Instalar um único antivírus gratuito e não se preocupar mais com senhas ou links." },
            { id: "d", label: "Guardar todas as senhas de banco anotadas em um papel dentro do celular." }
          ],
          correctAnswer: "b",
          feedback: "Segurança digital envolve criar hábitos e camadas de proteção para navegar na internet de forma consciente e segura."
        },
        {
          statement: "Quais são as camadas de proteção fundamentais recomendadas para a segurança digital?",
          options: [
            { id: "a", label: "Senha forte, autenticação em dois fatores (2FA), verificação de links, privacidade e backup regular." },
            { id: "b", label: "Apenas trocar a foto de perfil das redes sociais uma vez por mês." },
            { id: "c", label: "Usar Wi-Fi aberto em locais públicos sem utilizar senhas nas contas." },
            { id: "d", label: "Deixar a localização do aparelho ativada em todos os aplicativos." }
          ],
          correctAnswer: "a",
          feedback: "Pensar em segurança como camadas (senha + 2FA + verificação + backup) reduz drasticamente as chances de ter contas ou arquivos comprometidos."
        }
      ]
    },
    {
      id: "02",
      title: "O que é phishing?",
      description: "Aprenda a reconhecer uma das formas mais comuns de fraude digital.",
      quizzes: [
        {
          statement: "Como funciona a técnica de fraude digital conhecida como Phishing?",
          options: [
            { id: "a", label: "É uma atualização automática enviada pela loja oficial de aplicativos do celular." },
            { id: "b", label: "É o envio legítimo de faturas e comprovantes pelos bancos." },
            { id: "c", label: "Uma tentativa de enganar a pessoa por mensagens ou sites falsos para obter dados sensíveis como senhas e códigos." },
            { id: "d", label: "É um vírus que estraga o hardware do computador imediatamente ao ser baixado." }
          ],
          correctAnswer: "c",
          feedback: "O phishing usa engenharia social (mensagens convincentes ou alarmantes) para induzir a vítima a entregar dados ou clicar em links maliciosos."
        },
        {
          statement: "Ao receber uma mensagem dizendo 'Sua conta será bloqueada em 1 hora, clique aqui para atualizar seus dados', qual deve ser sua atitude?",
          options: [
            { id: "a", label: "Clicar imediatamente no link para evitar que a conta seja encerrada." },
            { id: "b", label: "Encaminhar a mensagem para todos os contatos da sua agenda." },
            { id: "c", label: "Responder à mensagem enviando sua senha para liberar o acesso." },
            { id: "d", label: "Parar, não clicar no link e acessar o canal ou aplicativo oficial do serviço para verificar a situação." }
          ],
          correctAnswer: "d",
          feedback: "Diante do senso de urgência, nunca clique no link fornecido. Sempre confirme acessando diretamente o aplicativo ou site oficial."
        }
      ]
    },
    {
      id: "03",
      title: "Como identificar uma mensagem suspeita?",
      description: "Conheça os sinais de alerta antes de clicar.",
      quizzes: [
        {
          statement: "Qual dos itens abaixo representa um SINAL CLARO DE ALERTA em mensagens recebidas por e-mail ou SMS?",
          options: [
            { id: "a", label: "Criar urgência exagerada, promessas de prêmios inesperados e links com domínios estranhos." },
            { id: "b", label: "Mensagem personalizada vinda de um canal verificado da empresa." },
            { id: "c", label: "Informativo mensal de fatura que você já esperava receber." },
            { id: "d", label: "Notificação de atualização do sistema operacional enviada pelo próprio aparelho." }
          ],
          correctAnswer: "a",
          feedback: "Gatilhos de urgência, ofertas irrealistas e links com endereços estranhos são as marcas registradas de mensagens golpistas."
        }
      ]
    },
    {
      id: "04",
      title: "Como verificar um link antes de acessar?",
      description: "Aprenda a conferir o endereço de um site.",
      quizzes: [
        {
          statement: "Por que não se deve confiar apenas no visual bonito ou nos logotipos de um site ao abrir um link?",
          options: [
            { id: "a", label: "Porque os sites oficiais não utilizam logotipos nem cores institucionais." },
            { id: "b", label: "Porque golpistas conseguem copiar facilmente a identidade visual, cores e logos de empresas legítimas em páginas falsas." },
            { id: "c", label: "Porque sites bonitos navegam mais devagar na internet móvel." },
            { id: "d", label: "Porque navegadores bloqueiam imagens de sites que possuem links seguros." }
          ],
          correctAnswer: "b",
          feedback: "A aparência visual é fácil de replicar. O que realmente valida a autenticidade é o endereço de domínio (URL) correto no navegador."
        },
        {
          statement: "Qual é a melhor conduta ao receber um link de pagamento ou login enviado por mensagem inesperada?",
          options: [
            { id: "a", label: "Clicar no link e preencher os dados o mais rápido possível." },
            { id: "b", label: "Compartilhar o link em grupos do WhatsApp para checar se é confiável." },
            { id: "c", label: "Evitar clicar no link e digitar você mesmo o endereço oficial da empresa no navegador." },
            { id: "d", label: "Desligar o Wi-Fi e clicar usando os dados móveis." }
          ],
          correctAnswer: "c",
          feedback: "Digitar manualmente a URL oficial garante que você vá para o portal autêntico da instituição."
        }
      ]
    },
    {
      id: "05",
      title: "Como criar uma senha segura?",
      description: "Aprenda a proteger suas principais contas.",
      quizzes: [
        {
          statement: "Segundo boas práticas de segurança digital, qual das opções abaixo é um exemplo de SENHA SEGURA?",
          options: [
            { id: "a", label: "12345678" },
            { id: "b", label: "NomeDoCachorro2024" },
            { id: "c", label: "senha123" },
            { id: "d", label: "Uma combinação longa, sem dados pessoais e exclusiva para aquela conta, gerenciada com apoio de um gerenciador de senhas." }
          ],
          correctAnswer: "d",
          feedback: "Senhas longas, complexas, sem informações pessoais óbvias e exclusivas são significativamente mais difíceis de serem quebradas por ataques automatizados."
        }
      ]
    },
    {
      id: "06",
      title: "Por que não devo usar a mesma senha?",
      description: "Entenda o efeito dominó de uma senha vazada.",
      quizzes: [
        {
          statement: "O que é o chamado 'Efeito Dominó' relacionado ao reuso de senhas?",
          options: [
            { id: "a", label: "Quando a senha é tão forte que o sistema bloqueia o usuário automaticamente." },
            { id: "b", label: "Quando o vazamento de uma única senha permite que invasores acessem todas as suas outras contas que usam essa mesma senha." },
            { id: "c", label: "Quando o celular desliga sozinho por falta de memória de armazenamento." },
            { id: "d", label: "Quando o provedor de internet muda o IP da sua residência." }
          ],
          correctAnswer: "b",
          feedback: "Se você usa a mesma senha no e-mail, banco e redes sociais, o vazamento de um serviço compromete a segurança de toda a sua vida digital."
        }
      ]
    },
    {
      id: "07",
      title: "O que é autenticação em dois fatores?",
      description: "Adicione uma segunda camada de proteção às suas contas.",
      quizzes: [
        {
          statement: "Como funciona a Autenticação em Dois Fatores (2FA)?",
          options: [
            { id: "a", label: "Ela combina a sua senha com um segundo elemento de verificação (ex: código gerado em app autenticador) para liberar o acesso." },
            { id: "b", label: "Ela exige duas senhas de texto iguais digitadas em campos diferentes." },
            { id: "c", label: "É um antivírus que roda em segundo plano verificando downloads." },
            { id: "d", label: "É a obrigação de mudar a senha do e-mail todos os dias." }
          ],
          correctAnswer: "a",
          feedback: "Com o 2FA ativo, mesmo que um invasor descubra sua senha, ele não conseguirá logar sem o código temporário do seu dispositivo."
        },
        {
          statement: "Em quais destas contas a ativação da verificação em dois fatores (2FA) é considerada PRIORITÁRIA?",
          options: [
            { id: "a", label: "Apenas em jogos online offline." },
            { id: "b", label: "Em aplicativos de calculadora e lanterna do celular." },
            { id: "c", label: "E-mail principal, WhatsApp, redes sociais, aplicativos bancários e Conta Gov.br." },
            { id: "d", label: "Não é necessário ativar em nenhuma conta importante." }
          ],
          correctAnswer: "c",
          feedback: "Contas essenciais e que contêm dados sensíveis ou dão acesso a outros serviços (como e-mail e Gov.br) devem ser protegidas com 2FA imediatamente."
        }
      ]
    },
    {
      id: "08",
      title: "O que nunca devo compartilhar?",
      description: "Saiba quais informações precisam de atenção especial.",
      quizzes: [
        {
          statement: "Quais dados você NUNCA deve compartilhar com terceiros, mesmo que a pessoa afirme ser do suporte técnico ou do seu banco?",
          options: [
            { id: "a", label: "Seu nome completo para cadastro público de currículos." },
            { id: "b", label: "O endereço de e-mail comercial para receber propostas de trabalho." },
            { id: "c", label: "O link para seu perfil profissional do LinkedIn." },
            { id: "d", label: "Senhas, PINs de segurança e códigos de validação recebidos por SMS ou e-mail." }
          ],
          correctAnswer: "d",
          feedback: "Códigos SMS, PINs e senhas são dados de acesso estritamente pessoais. Bancos e empresas legítimas jamais solicitam esses códigos por telefone ou mensagem."
        }
      ]
    },
    {
      id: "09",
      title: "Como proteger seus dados em cadastros?",
      description: "Pense antes de entregar informações pessoais.",
      quizzes: [
        {
          statement: "O que deve ser analisado antes de preencher formulários com dados pessoais em um site?",
          options: [
            { id: "a", label: "Verificar se a conexão é segura (HTTPS), se o site é oficial e por que as informações estão sendo solicitadas." },
            { id: "b", label: "Preencher tudo sem ler, desde que o site tenha cores bonitas." },
            { id: "c", label: "Enviar fotos dos documentos pessoais para qualquer aba de comentários." },
            { id: "d", label: "Fornecer dados bancários mesmo quando o cadastro for para um serviço gratuito." }
          ],
          correctAnswer: "a",
          feedback: "Sempre avalie a legitimidade da página e forneça apenas as informações estritamente necessárias para o cadastro."
        }
      ]
    },
    {
      id: "10",
      title: "Como proteger sua conta de e-mail?",
      description: "Seu e-mail merece atenção especial.",
      quizzes: [
        {
          statement: "Por que a conta de e-mail é considerada o ponto mais crítico da segurança digital de um usuário?",
          options: [
            { id: "a", label: "Porque ocupa mais espaço de armazenamento do celular que outros apps." },
            { id: "b", label: "Porque o e-mail é a chave central usada para redefinir senhas de quase todas as outras contas online." },
            { id: "c", label: "Porque e-mails não aceitam o uso de senhas fortes." },
            { id: "d", label: "Porque os e-mails só funcionam se estiverem conectados a um Wi-Fi público." }
          ],
          correctAnswer: "b",
          feedback: "Se um invasor acessar seu e-mail, ele pode utilizar a opção 'Esqueci minha senha' para invadir suas redes sociais, e-commerces e serviços financeiros."
        }
      ]
    },
    {
      id: "11",
      title: "Como se proteger no WhatsApp?",
      description: "Reduza o risco de clonagem e engenharia social.",
      quizzes: [
        {
          statement: "O que fazer ao receber uma mensagem de um número desconhecido usando a foto de um familiar solicitando um PIX urgente?",
          options: [
            { id: "a", label: "Fazer o PIX imediatamente para ajudar, afinal a foto do perfil é do seu familiar." },
            { id: "b", label: "Enviar um código de confirmação do seu WhatsApp para o número." },
            { id: "c", label: "Ligar para o número antigo/oficial do seu familiar ou usar outro canal para confirmar a identidade antes de qualquer transferência." },
            { id: "d", label: "Pedir os dados do cartão de crédito do familiar antes de enviar o dinheiro." }
          ],
          correctAnswer: "c",
          feedback: "Golpistas frequentemente baixam fotos públicas e criam contas de WhatsApp informando que 'trocaram de número'. Nunca transfira valores por impulso!"
        }
      ]
    },
    {
      id: "12",
      title: "Como identificar golpes em vagas de emprego?",
      description: "Aprenda a detectar fraudes em oportunidades profissionais.",
      quizzes: [
        {
          statement: "Qual das situações abaixo aponta uma FRAUDE ou GOLPE em um anúncio de vaga de trabalho?",
          options: [
            { id: "a", label: "A empresa solicita o envio de um currículo atualizado em formato PDF." },
            { id: "b", label: "Agendamento de entrevista remota via Google Meet ou Microsoft Teams." },
            { id: "c", label: "Exigência de pagamento de taxa para fazer a inscrição ou comprar um curso obrigatório antes de ser contratado." },
            { id: "d", label: "Solicitação para realizar um teste prático de conhecimentos alinhado ao cargo." }
          ],
          correctAnswer: "c",
          feedback: "Processos seletivos legítimos nunca cobram taxas para inscrição, treinamento ou compra de materiais/exames do candidato."
        }
      ]
    },
    {
      id: "13",
      title: "Golpes em compras e ofertas",
      description: "Nem toda promoção é uma oportunidade.",
      quizzes: [
        {
          statement: "Ao se deparar com uma oferta na internet com desconto de 90% e opção de pagamento EXCLUSIVAMENTE por PIX, o que você deve fazer?",
          options: [
            { id: "a", label: "Comprar imediatamente antes que o estoque acabe." },
            { id: "b", label: "Desconfiar do valor irreal, pesquisar a reputação da loja (ex: Reclame Aqui) e conferir a URL do site." },
            { id: "c", label: "Transferir o valor usando a chave PIX do vendedor sem verificar o CNPJ da loja." },
            { id: "d", label: "Passar seus dados do cartão de crédito por mensagem direta no Instagram." }
          ],
          correctAnswer: "b",
          feedback: "Preços excessivamente abaixo do mercado combinados com pagamento exclusivo via PIX são indicativos clássicos de e-commerce falso."
        }
      ]
    },
    {
      id: "14",
      title: "Como proteger seu celular e computador?",
      description: "Segurança também depende da manutenção do seu dispositivo.",
      quizzes: [
        {
          statement: "Por que manter o Sistema Operacional e os Aplicativos do dispositivo sempre ATUALIZADOS melhora a segurança?",
          options: [
            { id: "a", label: "Because as atualizações corrigem falhas e vulnerabilidades de segurança que poderiam ser exploradas por hackers." },
            { id: "b", label: "Porque as atualizações corrigem falhas e vulnerabilidades de segurança que poderiam ser exploradas por hackers." },
            { id: "c", label: "Para mudar a cor dos ícones da tela inicial do celular." },
            { id: "d", label: "Apenas para deixar o aparelho ocupando mais espaço de memória." }
          ],
          correctAnswer: "b",
          feedback: "As atualizações de software frequentemente contêm correções de bugs de segurança que impedem a ação de softwares maliciosos."
        }
      ]
    },
    {
      id: "15",
      title: "Como usar Wi-Fi público com segurança?",
      description: "Tenha cuidado ao acessar serviços importantes em redes desconhecidas.",
      quizzes: [
        {
          statement: "Qual ação DEVE SER EVITADA ao estar conectado a uma rede Wi-Fi pública ou aberta em praças e aeroportos?",
          options: [
            { id: "a", label: "Realizar transações financeiras e acessar o aplicativo do seu banco." },
            { id: "b", label: "Ler notícias em portais abertos de comunicação." },
            { id: "c", label: "Consultar a previsão do tempo no celular." },
            { id: "d", label: "Buscar a rota do transporte público em aplicativos de mapa." }
          ],
          correctAnswer: "a",
          feedback: "Redes Wi-Fi públicas podem ter o tráfego interceptado. Evite acessar bancos ou digitar senhas importantes nessas conexões."
        }
      ]
    },
    {
      id: "16",
      title: "O que fazer se eu cair em um golpe?",
      description: "Agir rapidamente pode ajudar a reduzir os impactos.",
      quizzes: [
        {
          statement: "Qual é o PRIMEIRO PASSO imediato a ser tomado caso perceba ter sido vítima de um golpe financeiro ou vazamento de dados?",
          options: [
            { id: "a", label: "Esperar alguns dias para ver se o valor da transferência é devolvido." },
            { id: "b", label: "Deletar todos os prints e mensagens para não lembrar do ocorrido." },
            { id: "c", label: "Interromper contato com o golpista, alterar as senhas afetadas e contatar urgentemente seu banco." },
            { id: "d", label: "Desinstalar os aplicativos sem avisar a instituição financeira." }
          ],
          correctAnswer: "c",
          feedback: "A agilidade em bloquear acessos, contatar o banco e guardar os comprovantes/prints é essencial para tentar conter os danos e registrar o Boletim de Ocorrência."
        }
      ]
    },
    {
      id: "17",
      title: "Checklist: estou diante de um possível golpe?",
      description: "Responda a estas perguntas antes de realizar qualquer ação online.",
      quizzes: [
        {
          statement: "Se uma mensagem atender a estes critérios: 'Desconhecido + Tom de urgência exagerada + Solicitação de PIX/Código SMS', o que fazer?",
          options: [
            { id: "a", label: "Não clicar, não enviar dados e bloquear o remetente." },
            { id: "b", label: "Clicar e responder para tirar dúvida com o remetente." },
            { id: "c", label: "Enviar um valor pequeno de PIX para testar se é verdade." },
            { id: "d", label: "Preencher apenas o seu CPF para liberar o atendimento." }
          ],
          correctAnswer: "a",
          feedback: "Se os critérios de alerta foram ativados, recuse a interação e proteja suas informações."
        }
      ]
    },
    {
      id: "18",
      title: "Sites e recursos para aprender mais",
      description: "Fontes oficiais para aprofundar seus conhecimentos em segurança.",
      quizzes: [
        {
          statement: "Qual destas instituições disponibiliza a 'Cartilha de Segurança para Internet' com orientações gratuitas sobre proteção digital?",
          options: [
            { id: "a", label: "Netflix" },
            { id: "b", label: "Spotify" },
            { id: "c", label: "CERT.br" },
            { id: "d", label: "Steam" }
          ],
          correctAnswer: "c",
          feedback: "O CERT.br mantém cartilhas excelentes e atualizadas para ensinar cidadãos a se protegerem na internet."
        }
      ]
    },
    {
      id: "19",
      title: "🎯 Desafio prático do módulo",
      description: "Faça um check-up completo na sua segurança digital.",
      quizzes: [
        {
          statement: "Qual é o objetivo prático principal do desafio do Módulo 3?",
          options: [
            { id: "a", label: "Realizar uma auditoria de contas, ativar o 2FA nas suas principais aplicações e fazer o backup dos seus arquivos essenciais." },
            { id: "b", label: "Comprar um celular novo com sistema operacional fechado." },
            { id: "c", label: "Apagar todas as suas redes sociais e contas de e-mail." },
            { id: "d", label: "Anotar todas as suas senhas em um bloco de notas público." }
          ],
          correctAnswer: "a",
          feedback: "O desafio incentiva a colocar em prática todas as etapas ativas de proteção para manter sua identidade digital e seus dados seguros."
        }
      ]
    }
  ]
};