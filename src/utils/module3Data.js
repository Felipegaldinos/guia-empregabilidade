export const module3Data = {
  tag: "MÓDULO 3",
  title: "Segurança Digital e Dicas Antigolpe",
  subtitle: "Checklists para identificar fraudes, proteger suas contas e cuidar da sua privacidade durante cadastros e atividades online.",
  
  sections: [
    {
      id: "01",
      title: "O que é segurança digital?",
      description: "Entenda por que proteger suas informações é importante.",
      content: {
        text: "Segurança digital é o conjunto de práticas utilizadas para proteger suas contas, senhas, documentos, dados pessoais, fotografias, informações financeiras, dispositivos, arquivos e identidade digital. Não significa deixar de utilizar a internet, mas sim utilizá-la com mais atenção e consciência.",
        bulletsTitle: "Pense na segurança digital como camadas:",
        bullets: [
          "🔑 Senha → Protege sua conta",
          "📱 2FA → Adiciona uma camada de proteção",
          "🔎 Verificação → Ajuda a identificar golpes",
          "🔒 Privacidade → Reduz a exposição de dados",
          "💾 Backup → Ajuda a recuperar arquivos"
        ]
      }
    },
    {
      id: "02",
      title: "O que é phishing?",
      description: "Aprenda a reconhecer uma das formas mais comuns de fraude digital.",
      content: {
        text: "Phishing é uma tentativa de enganar a pessoa para que ela forneça informações ou realize alguma ação, normalmente por meio de uma mensagem ou página falsa (via e-mail, SMS, WhatsApp, redes sociais, ligações, QR Codes ou sites falsos).",
        alert: "🚨 Exemplo de mensagem suspeita: “Sua conta será bloqueada hoje. Clique aqui para atualizar seus dados.”\n\nAntes de clicar: Pare → Confira → Acesse o canal oficial diretamente.",
        note: "O Ministério das Comunicações alerta que mensagens de phishing tentam obter senhas, códigos de autenticação, dados bancários e informações pessoais."
      }
    },
    {
      id: "03",
      title: "Como identificar uma mensagem suspeita?",
      description: "Conheça os sinais de alerta antes de clicar.",
      content: {
        text: "Desconfie imediatamente se uma mensagem apresentar os seguintes sinais de alerta:",
        errors: [
          { title: "🚨 Cria urgência", desc: "“Você tem apenas 10 minutos para responder!”" },
          { title: "🚨 Promete algo inesperado", desc: "“Você foi selecionado para ganhar um prêmio!”" },
          { title: "🚨 Solicita dados e códigos", desc: "“Envie sua senha” ou “Informe o código recebido por SMS”." },
          { title: "🚨 Links e domínios estranhos", desc: "Endereços suspeitos como empresa-seguranca-login.xyz." },
          { title: "🚨 Tenta assustar", desc: "“Sua conta será encerrada imediatamente se não clicar.”" }
        ]
      }
    },
    {
      id: "04",
      title: "Como verificar um link antes de acessar?",
      description: "Aprenda a conferir o endereço de um site.",
      content: {
        flowSteps: [
          { title: "1. Observe o domínio", desc: "Confira o endereço completo da URL no navegador." },
          { title: "2. Procure por erros", desc: "Golpistas utilizam endereços muito parecidos com os legítimos mudando poucas letras." },
          { title: "3. Não confie apenas no visual", desc: "Páginas falsas conseguem copiar perfeitamente cores, logotipos e a aparência da empresa." },
          { title: "4. Evite links inesperados", desc: "Digite você mesmo o endereço oficial no navegador ou utilize o aplicativo oficial da instituição." }
        ]
      }
    },
    {
      id: "05",
      title: "Como criar uma senha segura?",
      description: "Aprenda a proteger suas principais contas.",
      content: {
        text: "A Polícia Federal recomenda o uso de senhas fortes e longas, orientando evitar informações pessoais fáceis de identificar.",
        comparison: {
          badTitle: "❌ Evite usar senhas como:",
          bad: "• 123456\n• senha123\n• felipe2026\n• Datas de nascimento\n• Nome + ano atual",
          goodTitle: "💡 O que faz uma senha ser boa?",
          good: "• Deve ser longa\n• Dificil de adivinhar\n• Exclusiva para aquela conta\n• Sem informações pessoais óbvias\n• Armazenada com auxílio de um Gerenciador de Senhas"
        }
      }
    },
    {
      id: "06",
      title: "Por que não devo usar a mesma senha?",
      description: "Entenda o efeito dominó de uma senha vazada.",
      content: {
        text: "Se a mesma senha for utilizada em vários serviços, um incidente em uma única conta compromete todas as outras.",
        alert: "Efeito Dominó: Senha vazada → E-mail comprometido → Redefinição de outras contas → Redes sociais e serviços financeiros invadidos.",
        bulletsTitle: "Regra simples: Uma conta importante = uma senha exclusiva. Priorize:",
        bullets: ["🔐 E-mail", "🔐 Banco", "🔐 Gov.br", "🔐 Redes sociais", "🔐 Armazenamento em nuvem"]
      }
    },
    {
      id: "07",
      title: "O que é autenticação em dois fatores?",
      description: "Adicione uma segunda camada de proteção às suas contas.",
      content: {
        formula: {
          title: "Como funciona a verificação em duas etapas (2FA)",
          structure: "Senha + Código de Autenticação = Acesso Liberado",
          example: "Mesmo que descubram sua senha, o invasor precisará do código enviado ao seu aplicativo autenticador ou dispositivo."
        },
        bulletsTitle: "Ative a autenticação em dois fatores imediatamente em:",
        bullets: ["E-mail (Google/Microsoft)", "Instagram e LinkedIn", "WhatsApp", "Aplicativos de Bancos", "Conta Gov.br"]
      }
    },
    {
      id: "08",
      title: "O que nunca devo compartilhar?",
      description: "Saiba quais informações precisam de atenção especial.",
      content: {
        text: "Uma pessoa mal-intencionada pode se passar por banco, empresa, recrutador, amigo, familiar ou suporte técnico. O fato de saberem seu nome não significa que sejam legítimos.",
        bulletsTitle: "🔴 NUNCA compartilhe com terceiros:",
        bullets: [
          "Senhas de acesso",
          "Códigos de autenticação recebidos por SMS/E-mail",
          "PIN de segurança",
          "Códigos e chaves de recuperação",
          "Dados bancários completos",
          "Fotos de documentos sem real necessidade",
          "Informações pessoais excessivas"
        ]
      }
    },
    {
      id: "09",
      title: "Como proteger seus dados em cadastros?",
      description: "Pense antes de entregar informações pessoais.",
      content: {
        text: "Quanto mais informações pessoais você disponibiliza na rede, maior deve ser a atenção sobre onde e para quem esses dados estão sendo fornecidos.",
        checklistItems: [
          "Quem está coletando meus dados?",
          "Por que esses dados são realmente necessários?",
          "O site em questão é oficial?",
          "Existe uma conexão segura na página (HTTPS)?",
          "O site possui uma política de privacidade clara?",
          "Preciso realmente fornecer essa informação opcional?"
        ]
      }
    },
    {
      id: "10",
      title: "Como proteger sua conta de e-mail?",
      description: "Seu e-mail merece atenção especial.",
      content: {
        text: "A Anatel destaca que o e-mail costuma ser o ponto central de recuperação e entrada para todas as outras contas online.",
        bulletsTitle: "Práticas fundamentais para a proteção do e-mail:",
        bullets: [
          "Utilize uma senha exclusiva e forte",
          "Ative obrigatoriamente o 2FA (dois fatores)",
          "Revise periodicamente os dispositivos conectados",
          "Verifique o histórico de atividades suspeitas",
          "Mantenha as opções de recuperação (telefone e e-mail secundário) atualizadas",
          "Nunca compartilhe códigos e tome cuidado com anexos"
        ]
      }
    },
    {
      id: "11",
      title: "Como se proteger no WhatsApp?",
      description: "Reduza o risco de clonagem e engenharia social.",
      content: {
        bulletsTitle: "Recomendações fundamentais:",
        bullets: [
          "🔒 Ative a verificação em duas etapas nas configurações",
          "👤 Controle nas opções de privacidade quem pode adicionar você a grupos",
          "📵 Desconfie de mensagens urgentes solicitando dinheiro ou PIX",
          "🔑 Nunca envie códigos de confirmação recebidos por SMS para ninguém",
          "📞 Se um conhecido pedir dinheiro por número novo, ligue e confirme a identidade por outro canal"
        ],
        alert: "Exemplo: “Oi, troquei de número. Preciso que você faça um PIX urgente.” Não tome atitudes por impulso só porque a foto e o nome parecem familiares!"
      }
    },
    {
      id: "12",
      title: "Como identificar golpes em vagas de emprego?",
      description: "Aprenda a detectar fraudes em oportunidades profissionais.",
      content: {
        alert: "🚨 Fique atento! Desconfie de vagas que prometem salários incompatíveis, garantem contratação imediata, cobram taxas de participação ou exigem pagamentos por treinamentos obrigatórios.",
        bulletsTitle: "Antes de prosseguir com uma candidatura, pesquise:",
        bullets: [
          "Nome da Empresa + Vaga",
          "Nome da Empresa + Site Oficial",
          "Nome da Empresa + Perfil Oficial no LinkedIn",
          "Nome da Empresa + Reclamações no Reclame Aqui"
        ]
      }
    },
    {
      id: "13",
      title: "Golpes em compras e ofertas",
      description: "Nem toda promoção é uma oportunidade.",
      content: {
        text: "A Polícia Federal recomenda atenção redobrada a ofertas com valores excessivamente abaixo do preço de mercado e a links de promoções recebidos por mensagens.",
        errors: [
          { title: "Sinais de ofertas falsas", desc: "“90% de desconto somente hoje!”, “Últimas unidades!”, “Você foi selecionado!”, “Pagamento exclusivo via PIX”." },
          { title: "O que verificar antes de comprar", desc: "Endereço do site, CNPJ, reputação da loja, política de troca, formas de pagamento e canais oficiais de contato." }
        ]
      }
    },
    {
      id: "14",
      title: "Como proteger seu celular e computador?",
      description: "Segurança também depende da manutenção do seu dispositivo.",
      content: {
        text: "A Polícia Federal recomenda manter sistemas, aplicativos e mecanismos de proteção devidamente atualizados, além de realizar backups periódicos.",
        checklistItems: [
          "Sistema operacional atualizado na última versão",
          "Aplicativos mantidos atualizados",
          "Bloqueio de tela ativado (Biometria/PIN)",
          "Aplicativos instalados apenas de lojas oficiais",
          "Backup periódico dos arquivos importantes feito",
          "Antivírus ativo quando apropriado"
        ]
      }
    },
    {
      id: "15",
      title: "Como usar Wi-Fi público com segurança?",
      description: "Tenha cuidado ao acessar serviços importantes em redes desconhecidas.",
      content: {
        text: "Em redes Wi-Fi abertas e públicas, evite realizar atividades sensíveis como:",
        bullets: [
          "Acesso ao Internet Banking",
          "Alteração ou redefinição de senhas",
          "Acesso a documentos pessoais e confidenciais",
          "Qualquer tipo de operação financeira"
        ],
        alert: "A Polícia Federal recomenda utilizar apenas redes Wi-Fi confiáveis para o acesso a serviços importantes."
      }
    },
    {
      id: "16",
      title: "O que fazer se eu cair em um golpe?",
      description: "Agir rapidamente pode ajudar a reduzir os impactos.",
      content: {
        flowSteps: [
          { title: "PASSO 1", desc: "Cesse e interrompa imediatamente todo e qualquer contato com o golpista." },
          { title: "PASSO 2", desc: "Altere de imediato as senhas de todas as contas que possam ter sido afetadas." },
          { title: "PASSO 3", desc: "Ative ou revise a autenticação em dois fatores (2FA)." },
          { title: "PASSO 4", desc: "Em caso de prejuízo financeiro, entre em contato urgente com sua instituição bancária." },
          { title: "PASSO 5", desc: "Guarde provas do ocorrido: prints de conversas, e-mails, comprovantes, links e números de telefone." },
          { title: "PASSO 6", desc: "Registre o Boletim de Ocorrência (BO) e busque os órgãos e canais oficiais adequados." }
        ]
      }
    },
    {
      id: "17",
      title: "Checklist: estou diante de um possível golpe?",
      description: "Responda a estas perguntas antes de realizar qualquer ação online.",
      content: {
        text: "Se várias respostas para as perguntas abaixo forem suspeitas: NÃO CLIQUE e NÃO COMPARTILHE DADOS.",
        checklistItems: [
          "Eu realmente conheço quem enviou a mensagem?",
          "Eu estava esperando por essa mensagem ou contato?",
          "O endereço/link enviado parece oficial?",
          "Estão solicitando minha senha?",
          "Estão solicitando um código recebido no meu celular?",
          "Estão pedindo transferência ou dinheiro?",
          "Existe um tom de urgência exagerada?",
          "Existe uma promessa boa demais para ser verdade?",
          "Posso confirmar essa informação por outro canal de atendimento?",
          "Posso acessar o serviço digitando o site oficial diretamente no navegador?"
        ]
      }
    },
    {
      id: "18",
      title: "Sites e recursos para aprender mais",
      description: "Fontes oficiais para aprofundar seus conhecimentos em segurança.",
      content: {
        toolsList: [
          { label: "🛡️ CERT.br", desc: "Cartilha de Segurança para Internet com conteúdos detalhados sobre fraudes, privacidade e dispositivos.", ideal: "Estudo e conscientização digital" },
          { label: "🏛️ Polícia Federal", desc: "Sessão de combate a crimes cibernéticos com orientações e dicas de prevenção de golpes.", ideal: "Orientações oficiais de segurança" },
          { label: "🇧🇷 Gov.br", desc: "Instruções e guias para proteção da conta gov.br e configuração do 2FA.", ideal: "Proteção da identidade cidadã" },
          { label: "📡 Anatel", desc: "Dicas de segurança digital, proteção de contas, privacidade e redes móveis.", ideal: "Segurança em telecomunicações" }
        ]
      }
    },
    {
      id: "19",
      title: "🎯 Desafio prático do módulo",
      description: "Faça um check-up completo na sua segurança digital.",
      content: {
        challenges: [
          {
            number: "01",
            title: "Auditoria de Contas",
            items: [
              "MISSÃO 01: Verifique suas principais contas online.",
              "MISSÃO 02: Ative o 2FA (dois fatores) onde estiver disponível.",
              "MISSÃO 03: Identifique e troque senhas reutilizadas em contas importantes."
            ]
          },
          {
            number: "02",
            title: "Recuperação e Dispositivos",
            items: [
              "MISSÃO 04: Atualize suas opções e e-mail de recuperação.",
              "MISSÃO 05: Revise o histórico de dispositivos conectados às suas contas.",
              "MISSÃO 06: Analise e revogue permissões desnecessárias de aplicativos."
            ]
          },
          {
            number: "03",
            title: "Prevenção Prática",
            items: [
              "MISSÃO 07: Faça o backup dos seus arquivos mais importantes.",
              "MISSÃO 08: Analise três mensagens suspeitas e identifique os sinais de golpe.",
              "MISSÃO 09: Salve nos seus favoritos os canais oficiais das instituições que você utiliza."
            ]
          }
        ]
      }
    }
  ]
};