export const module1Data = {
  id: 1,
  tag: "MÓDULO 1",
  title: "Portfólio Técnico e Currículo Digital",
  subtitle: "Transforme suas experiências, cursos e projetos em uma apresentação profissional.",
  heroImage: "../assets/module-hero.png",
  introText: "Ter conhecimentos é importante. Saber apresentar esses conhecimentos também. Um currículo bem estruturado e um portfólio organizado ajudam a transformar experiências acadêmicas, cursos, certificados e projetos pessoais em uma apresentação profissional clara. Neste módulo, você vai aprender a criar um currículo digital, organizar suas competências, apresentar seus projetos e construir uma presença profissional na internet.",
  learnList: [
    "Criar um currículo profissional",
    "Organizar experiências e qualificações",
    "Destacar cursos e certificados",
    "Apresentar projetos acadêmicos e pessoais",
    "Criar um portfólio digital",
    "Melhorar seu perfil no LinkedIn",
    "Utilizar ferramentas gratuitas",
    "Criar uma apresentação profissional mesmo sem experiência",
    "Organizar links, certificados e documentos",
    "Evitar erros comuns em currículos"
  ],
  sections: [
    {
      id: "01",
      title: "O que é um currículo digital?",
      description: "Entenda o conceito e conheça os formatos mais utilizados.",
      content: {
        text: "O currículo digital é uma versão organizada da sua trajetória profissional que pode ser compartilhada pela internet.",
        bulletsTitle: "Além do tradicional PDF, você pode apresentar suas informações por meio de:",
        bullets: [
          "Perfil profissional",
          "Página pessoal",
          "Portfólio",
          "LinkedIn",
          "Notion",
          "Site próprio",
          "Links para projetos",
          "Repositórios no GitHub",
          "Certificados digitais"
        ],
        alert: "O objetivo não é simplesmente colocar o máximo de informações possível. É selecionar e organizar aquilo que melhor representa suas competências para determinada oportunidade.",
        table: {
          title: "Currículo tradicional × currículo digital",
          headers: ["Currículo tradicional", "Currículo digital"],
          rows: [
            ["Normalmente PDF", "Pode ser página, PDF ou perfil"],
            ["Informações profissionais", "Informações + projetos"],
            ["Experiências", "Experiências + evidências"],
            ["Certificados", "Certificados com links"],
            ["Texto", "Texto + imagens + projetos"],
            ["Enviado para empresas", "Pode ser compartilhado por link"]
          ]
        }
      }
    },
    {
      id: "02",
      title: "O que colocar no currículo?",
      description: "Descubra a estrutura ideal e quais informações são realmente importantes.",
      content: {
        text: "Uma estrutura simples e profissional pode conter:",
        blocks: [
          {
            header: "👤 Informações pessoais profissionais",
            bullets: [
              "Nome completo",
              "Cidade/Estado",
              "Telefone",
              "E-mail profissional",
              "LinkedIn",
              "Portfólio",
              "GitHub, quando relevante"
            ],
            alert: "Evite: informações desnecessárias como número de documentos, endereço residencial completo e outros dados pessoais que não sejam necessários para a candidatura."
          },
          {
            header: "🎯 Objetivo profissional",
            text: "O objetivo deve ser curto e direcionado.",
            badExample: "“Estou procurando uma oportunidade para crescer profissionalmente e adquirir experiência.”",
            goodExample: "“Estudante de Análise e Desenvolvimento de Sistemas, com interesse em desenvolvimento web e experiência acadêmica em projetos utilizando HTML, CSS e JavaScript.”",
            note: "A segunda versão apresenta área, contexto e competências."
          }
        ]
      }
    },
    {
      id: "03",
      title: "Como escrever suas experiências",
      description: "Aprenda a destacar suas atividades e mostrar resultados.",
      content: {
        text: "Uma das partes mais importantes do currículo é mostrar o que você fez, e não apenas listar cargos.",
        comparison: {
          bad: "Auxiliar administrativo.",
          good: "Auxiliar Administrativo: Organização de documentos, atendimento ao cliente, elaboração de planilhas e apoio às atividades administrativas.",
          resultExample: "Organização e atualização de aproximadamente 300 registros, contribuindo para facilitar a localização e controle das informações."
        },
        formula: {
          title: "Fórmula simples",
          structure: "Ação + atividade + ferramenta + resultado",
          example: "Desenvolvi uma página institucional utilizando HTML e CSS, estruturando cinco seções responsivas para apresentação de uma empresa."
        }
      }
    },
    {
      id: "04",
      title: "E se eu não tiver experiência profissional?",
      description: "Veja como usar projetos, cursos e outras experiências a seu favor.",
      content: {
        text: "Você não precisa esperar o primeiro emprego para começar a construir seu portfólio. Experiências podem vir de:",
        bullets: [
          "Projetos da faculdade",
          "Trabalhos acadêmicos",
          "Projetos pessoais",
          "Trabalho voluntário",
          "Freelances",
          "Cursos",
          "Hackathons",
          "Iniciação científica",
          "Projetos para amigos ou familiares",
          "Pequenos negócios",
          "Projetos fictícios criados para praticar"
        ],
        exampleBox: {
          title: "Projeto — Landing Page para Loja",
          desc: "Desenvolvimento de uma landing page responsiva para uma loja fictícia, utilizando HTML, CSS e JavaScript. O projeto teve como objetivo praticar estruturação de páginas, responsividade e criação de interfaces.",
          techs: "HTML • CSS • JavaScript",
          links: ["🔗 Projeto online", "💻 Código-fonte"]
        }
      }
    },
    {
      id: "05",
      title: "Como criar um portfólio técnico",
      description: "Organize seus projetos e mostre suas habilidades na prática.",
      content: {
        text: "O portfólio funciona como uma vitrine do seu trabalho.",
        comparison: {
          bad: "“Eu sei HTML, CSS e JavaScript.”",
          good: "Projeto 01 — Landing Page (HTML • CSS • JavaScript)\nLanding page responsiva desenvolvida para praticar construção de interfaces.\n[VER PROJETO] [VER CÓDIGO]"
        },
        structureTitle: "Estrutura recomendada",
        structureSteps: [
          "1. Sobre mim: Uma apresentação curta.",
          "2. Habilidades: Tecnologias e competências.",
          "3. Projetos: Os trabalhos mais relevantes.",
          "4. Formação: Cursos, graduação e especializações.",
          "5. Certificados: Links ou documentos.",
          "6. Contato: E-mail + LinkedIn + outras redes profissionais."
        ]
      }
    },
    {
      id: "06",
      title: "Onde criar seu portfólio?",
      description: "Conheça as melhores ferramentas para criar seu currículo e portfólio.",
      content: {
        toolsList: [
          {
            name: "Canva",
            label: "Canva — criar currículo",
            desc: "Ótimo para quem quer criar um currículo visualmente organizado sem precisar dominar ferramentas de design. O Canva oferece modelos editáveis, recursos de IA e opções para baixar ou compartilhar o currículo.",
            ideal: "Currículo • apresentações • portfólio • materiais profissionais"
          },
          {
            name: "LinkedIn",
            label: "LinkedIn — perfil profissional",
            desc: "O LinkedIn pode funcionar como uma espécie de currículo profissional online, permitindo apresentar experiência, formação, certificados e competências. O próprio LinkedIn permite adicionar competências ao perfil e receber validações dessas competências por conexões.",
            ideal: "Networking • recrutadores • oportunidades • marca profissional"
          },
          {
            name: "Notion",
            label: "Notion — modelos de portfólio",
            desc: "O Notion possui modelos específicos para portfólios e currículos, permitindo criar uma apresentação online organizada e personalizada.",
            ideal: "Portfólio • currículo online • organização de projetos"
          },
          {
            name: "Europass",
            label: "Europass — criar currículo",
            desc: "O Europass permite criar um perfil com formação, experiências, competências e projetos e gerar diferentes currículos a partir dessas informações.",
            ideal: "Currículo • formação • competências • oportunidades internacionais"
          }
        ]
      }
    },
    {
      id: "07",
      title: "Outras ferramentas interessantes",
      description: "Grade comparativa de utilidades para seu ecossistema digital.",
      content: {
        table: {
          headers: ["Ferramenta", "Utilidade"],
          rows: [
            ["Canva", "Currículos e materiais visuais"],
            ["LinkedIn", "Perfil profissional e networking"],
            ["Notion", "Portfólio e organização"],
            ["Europass", "Currículo e perfil profissional"],
            ["GitHub", "Projetos e código"],
            ["Behance", "Portfólio criativo"],
            ["Google Drive", "Organização de documentos"],
            ["Figma", "Projetos de UI/UX"],
            ["GitHub Pages", "Hospedar portfólio"],
            ["Vercel", "Publicar projetos web"]
          ]
        }
      }
    },
    {
      id: "08",
      title: "Como montar um bom LinkedIn",
      description: "Seu LinkedIn também é seu portfólio. Otimize seu perfil.",
      content: {
        flowSteps: [
          { title: "Foto profissional", desc: "Foto clara e neutra." },
          { title: "Título", desc: "Estudante de ADS | Desenvolvimento Web | HTML | CSS | JavaScript" },
          { title: "Sobre", desc: "Um texto de 3–5 linhas contando: Quem você é; O que estuda; O que sabe fazer; Em que área quer atuar; Quais projetos desenvolve." },
          { title: "Experiência", desc: "Mesmo que seja acadêmica ou voluntária." },
          { title: "Formação", desc: "Curso + instituição." },
          { title: "Certificados", desc: "Cursos relevantes." },
          { title: "Competências", desc: "Tecnologias e habilidades." },
          { title: "Projetos", desc: "Inclua links quando possível." }
        ],
        note: "O próprio LinkedIn recomenda manter informações de experiência, formação e competências relevantes e permite adicionar amostras de mídia ao perfil para facilitar o acesso ao portfólio."
      }
    },
    {
      id: "09",
      title: "Como apresentar certificados",
      description: "Saiba como incluir seus certificados de forma profissional.",
      content: {
        comparison: {
          badTitle: "Erro comum:",
          bad: "Curso de Excel\nCurso de HTML\nCurso de Marketing\nCurso de Inglês\nCurso de Photoshop\n(e simplesmente listar dezenas de cursos)",
          goodTitle: "Melhor apresentação:",
          good: "Certificado\nHTML e CSS — Desenvolvimento Web\nInstituição: Escola/Plataforma\nCarga horária: XX horas\nAno: 2026\n🔗 Ver certificado"
        },
        tip: "Priorize os certificados que realmente tenham relação com a área desejada."
      }
    },
    {
      id: "10",
      title: "Como organizar projetos",
      description: "Aprenda a descrever seus projetos de forma clara e atrativa.",
      content: {
        templateBox: {
          header: "PROJETO — Nome do projeto",
          problem: "Breve descrição do problema ou objetivo.",
          developed: "O que foi desenvolvido? Explique em 2–4 linhas.",
          techs: ["HTML", "CSS", "JavaScript"],
          learned: ["Responsividade", "Organização de código", "Componentização", "Git", "Deploy"],
          links: ["🔗 Ver projeto", "💻 Ver código"]
        }
      }
    },
    {
      id: "11",
      title: "Currículo para quem está começando",
      description: "🚀 Ainda não tenho experiência. E agora?",
      content: {
        text: "Comece pelos projetos. Veja como um estudante de tecnologia pode se apresentar:",
        exampleResume: {
          education: "Análise e Desenvolvimento de Sistemas",
          projects: [
            "Sistema de cadastro desenvolvido durante disciplina acadêmica.",
            "Landing page responsiva criada como projeto pessoal.",
            "Aplicação de lista de tarefas desenvolvida para praticar JavaScript."
          ],
          courses: ["HTML e CSS", "JavaScript", "Git e GitHub"],
          skills: "HTML • CSS • JavaScript • Git • GitHub"
        },
        conclusion: "Mesmo sem experiência formal, já existe material para apresentar."
      }
    },
    {
      id: "12",
      title: "Erros que devem ser evitados",
      description: "Conheça os principais erros e como não cometê-los.",
      content: {
        errors: [
          { title: "❌ Currículo muito longo", desc: "Priorize informações relevantes." },
          { title: "❌ Erros de português", desc: "Revise antes de enviar." },
          { title: "❌ E-mail pouco profissional", desc: "Evite endereços como gatinha123@... Prefira: nome.sobrenome@..." },
          { title: "❌ Informações falsas", desc: "Nunca invente experiências ou competências." },
          { title: "❌ Currículo genérico", desc: "Adapte o currículo à oportunidade." },
          { title: "❌ Excesso de elementos visuais", desc: "O design deve facilitar a leitura." },
          { title: "❌ Colocar tudo", desc: "Seu currículo não precisa conter toda sua vida." }
        ]
      }
    },
    {
      id: "13",
      title: "Checklist do currículo",
      description: "Confira se tudo está pronto antes de enviar.",
      content: {
        checklistItems: [
          "Nome e contato estão corretos",
          "E-mail profissional",
          "Objetivo definido",
          "Formação atualizada",
          "Experiências relevantes",
          "Projetos adicionados",
          "Certificados relevantes",
          "Competências atualizadas",
          "LinkedIn informado",
          "Portfólio informado",
          "Links funcionando",
          "Ortografia revisada",
          "Arquivo salvo em PDF",
          "Nome do arquivo profissional"
        ],
        filenameComparison: {
          bad: "curriculo_final_novo2.pdf",
          good: "Felipe_Galdino_Curriculo.pdf"
        }
      }
    },
    {
      id: "14",
      title: "Desafio prático do módulo",
      description: "🎯 DESAFIO: Construa sua identidade profissional",
      content: {
        intro: "Ao terminar este módulo, você deverá criar:",
        challenges: [
          {
            number: "01",
            title: "Seu currículo",
            items: ["Formação", "Competências", "Projetos", "Certificados", "Contatos"]
          },
          {
            number: "02",
            title: "Seu LinkedIn",
            items: ["Foto", "Título", "Sobre", "Formação", "Competências", "Projetos"]
          },
          {
            number: "03",
            title: "Seu portfólio",
            items: ["Sobre você", "Habilidades", "Pelo menos 2 projetos", "Certificados", "Contato"]
          },
          {
            number: "04",
            title: "Organize seus links",
            items: ["Central contendo: Currículo ➔ LinkedIn ➔ Portfólio ➔ GitHub ➔ Projetos"]
          }
        ]
      }
    }
  ]
};