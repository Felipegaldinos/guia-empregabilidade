export const module1Data = {
  id: 1,
  tag: "MÓDULO 1",
  title: "Portfólio Técnico e Currículo Digital",
  subtitle: "Transforme suas experiências, cursos e projetos em uma apresentação profissional.",
  heroImage: "../assets/module-hero.png",
  introText: "Ter conhecimentos é importante. Saber apresentar esses conhecimentos também. Neste módulo, responda às questões para testar seus conhecimentos sobre currículo digital, portfólio e presença profissional.",
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
      quizzes: [
        {
          statement: "Qual é a principal diferença entre um currículo tradicional em PDF e um currículo digital?",
          options: [
            { id: "a", label: "O currículo digital não precisa conter dados pessoais nem contatos." },
            { id: "b", label: "O currículo digital permite incluir evidências práticas, como links para projetos, repositórios e certificados interativos." },
            { id: "c", label: "O currículo tradicional deve ter obrigatoriamente mais de 3 páginas de extensão." },
            { id: "d", label: "O currículo digital serve apenas para profissionais seniores com vasta experiência." }
          ],
          correctAnswer: "b",
          feedback: "A principal vantagem do currículo digital é permitir o anexo de evidências práticas do trabalho (como links, imagens, repositórios no GitHub e projetos interativos), indo além do texto estático do PDF tradicional."
        },
        {
          statement: "Além do PDF, quais plataformas podem ser utilizadas como um currículo digital?",
          options: [
            { id: "a", label: "Apenas arquivos compactados (.ZIP) com planilhas." },
            { id: "b", label: "Perfis em redes profissionais (LinkedIn), páginas no Notion, sites próprios e repositórios no GitHub." },
            { id: "c", label: "Apenas mensagens enviadas por aplicativos de conversa." },
            { id: "d", label: "Arquivos de áudio descrevendo sua trajetória." }
          ],
          correctAnswer: "b",
          feedback: "Um currículo digital pode assumir diversos formatos interativos, incluindo LinkedIn, Notion, GitHub e sites pessoais, facilitando o compartilhamento por link."
        }
      ]
    },
    {
      id: "02",
      title: "O que colocar no currículo?",
      description: "Descubra a estrutura ideal e quais informações são realmente importantes.",
      quizzes: [
        {
          statement: "Qual dos seguintes itens deve ser EVITADO na seção de dados pessoais do seu currículo?",
          options: [
            { id: "a", label: "E-mail profissional e telefone de contato." },
            { id: "b", label: "Cidade e Estado de residência." },
            { id: "c", label: "Número do CPF, RG e endereço residencial completo." },
            { id: "d", label: "Link do perfil do LinkedIn e do Portfólio." }
          ],
          correctAnswer: "c",
          feedback: "Documentos pessoais (CPF, RG) e endereço completo são desnecessários na etapa inicial de seleção e expõem sua privacidade sem necessidade."
        },
        {
          statement: "Como deve ser escrito um objetivo profissional eficiente no currículo?",
          options: [
            { id: "a", label: "Genérico, como 'Busco uma oportunidade para crescer profissionalmente e aprender'." },
            { id: "b", label: "Curto e direcionado, indicando área, contexto atual e principais tecnologias/competências." },
            { id: "c", label: "Longo, contando toda a sua história desde o ensino fundamental." },
            { id: "d", label: "Com o valor exato da pretensão salarial desejada." }
          ],
          correctAnswer: "b",
          feedback: "Um bom objetivo é direto e claro. Exemplo: 'Estudante de Análise e Desenvolvimento de Sistemas com foco em desenvolvimento web utilizando HTML, CSS e JavaScript'."
        }
      ]
    },
    {
      id: "03",
      title: "Como escrever suas experiências",
      description: "Aprenda a destacar suas atividades e mostrar resultados.",
      quizzes: [
        {
          statement: "De acordo com a fórmula recomendada (Ação + Atividade + Ferramenta + Resultado), qual descrição está mais bem estruturada?",
          options: [
            { id: "a", label: "Trabalhei criando páginas no meu antigo trabalho." },
            { id: "b", label: "Desenvolvi uma página institucional utilizando HTML e CSS, estruturando cinco seções responsivas para a empresa." },
            { id: "c", label: "Fui responsável pela parte de TI e ajudava o pessoal do setor." },
            { id: "d", label: "Tenho amplo conhecimento e grande facilidade com tecnologia em geral." }
          ],
          correctAnswer: "b",
          feedback: "A opção 'b' segue a fórmula perfeitamente: Ação (Desenvolvi) + Atividade (página institucional) + Ferramenta (HTML/CSS) + Resultado/Entregável (cinco seções responsivas)."
        },
        {
          statement: "Por que devemos incluir resultados numéricos ou dados práticos ao descrever experiências?",
          options: [
            { id: "a", label: "Para aumentar o tamanho do currículo para mais de 3 páginas." },
            { id: "b", label: "Porque demonstra o impacto real das suas tarefas e dá credibilidade às suas realizações." },
            { id: "c", label: "É uma exigência legal para todos os currículos." },
            { id: "d", label: "Para substituir a necessidade de colocar seus dados de contato." }
          ],
          correctAnswer: "b",
          feedback: "Mencionar dados quantitativos (ex: 'Organização de 300 registros') valida a capacidade técnica e mostra o valor gerado nas atividades anteriores."
        }
      ]
    },
    {
      id: "04",
      title: "E se eu não tiver experiência profissional?",
      description: "Veja como usar projetos, cursos e outras experiências a seu favor.",
      quizzes: [
        {
          statement: "Se você ainda não possui experiência em carteira assinada (CLT), qual estratégia é recomendada para demonstrar suas capacidades?",
          options: [
            { id: "a", label: "Deixar o espaço de experiências totalmente em branco." },
            { id: "b", label: "Apresentar projetos acadêmicos, pessoais, trabalhos voluntários ou desafios práticos realizados em cursos." },
            { id: "c", label: "Criar experiências fictícias em empresas reais." },
            { id: "d", label: "Listar apenas os nomes de canais do YouTube aos quais você assiste." }
          ],
          correctAnswer: "b",
          feedback: "Projetos práticos (acadêmicos, voluntários ou pessoais) comprovam sua capacidade de execução, compensando a falta de experiência no mercado formal."
        },
        {
          statement: "Qual é a melhor forma de descrever um projeto pessoal no currículo para quem está começando?",
          options: [
            { id: "a", label: "Colocar apenas o nome do projeto sem explicar nada." },
            { id: "b", label: "Detalhar o objetivo do projeto, tecnologias utilizadas e disponibilizar links do projeto online e do código-fonte." },
            { id: "c", label: "Colocar todo o código escrito em texto dentro do próprio arquivo do currículo." },
            { id: "d", label: "Informar apenas o tempo que você levou para concluir o projeto." }
          ],
          correctAnswer: "b",
          feedback: "Descrever o objetivo, as tecnologias e anexar os links permite que o avaliador valide suas competências técnicas de maneira prática."
        }
      ]
    },
    {
      id: "05",
      title: "Como criar um portfólio técnico",
      description: "Organize seus projetos e mostre suas habilidades na prática.",
      quizzes: [
        {
          statement: "Qual é a ordem estrutural recomendada para organizar as informações no seu portfólio técnico?",
          options: [
            { id: "a", label: "1. Contato / 2. Certificados / 3. Habilidades / 4. Sobre mim / 5. Projetos." },
            { id: "b", label: "1. Sobre mim / 2. Habilidades / 3. Projetos / 4. Formação / 5. Certificados / 6. Contato." },
            { id: "c", label: "1. Projetos / 2. Fotos pessoais / 3. Redes sociais pessoais / 4. Hobby." },
            { id: "d", label: "1. Apenas links para baixar arquivos PDF." }
          ],
          correctAnswer: "b",
          feedback: "Uma estrutura lógica começa apresentando quem você é, destaca suas habilidades e projetos principais, e finaliza com formação, certificados e contatos."
        },
        {
          statement: "Qual é o principal erro ao apresentar habilidades no portfólio?",
          options: [
            { id: "a", label: "Apenas dizer 'Eu sei HTML/CSS/JS' sem demonstrar projetos onde essas tecnologias foram aplicadas." },
            { id: "b", label: "Linkar o repositório do GitHub." },
            { id: "c", label: "Inserir o nome da instituição onde estudou." },
            { id: "d", label: "Indicar as tecnologias em formato de tags ou badges." }
          ],
          correctAnswer: "a",
          feedback: "Listar linguagens ou ferramentas isoladamente sem associá-las a projetos práticos reduz a credibilidade do seu portfólio."
        }
      ]
    },
    {
      id: "06",
      title: "Onde criar seu portfólio?",
      description: "Conheça as melhores ferramentas para criar seu currículo e portfólio.",
      quizzes: [
        {
          statement: "Qual das seguintes ferramentas é amplamente utilizada para criar documentos visuais, como currículos em PDF e apresentações?",
          options: [
            { id: "a", label: "Canva." },
            { id: "b", label: "GitHub Pages." },
            { id: "c", label: "Vercel." },
            { id: "d", label: "Visual Studio Code." }
          ],
          correctAnswer: "a",
          feedback: "O Canva é uma ferramenta de design com diversos modelos prontos de currículos e apresentações."
        },
        {
          statement: "Qual ferramenta é ideal para estruturar um portfólio online flexível com páginas interativas sem precisar programar do zero?",
          options: [
            { id: "a", label: "Notion." },
            { id: "b", label: "Excel." },
            { id: "c", label: "Paint." },
            { id: "d", label: "Bloco de Notas." }
          ],
          correctAnswer: "a",
          feedback: "O Notion oferece blocos de construção flexíveis e modelos organizados perfeitos para publicar portfólios e páginas pessoais."
        }
      ]
    },
    {
      id: "07",
      title: "Outras ferramentas interessantes",
      description: "Grade comparativa de utilidades para seu ecossistema digital.",
      quizzes: [
        {
          statement: "Para publicar e hospedar gratuitamente uma aplicação web ou portfólio feito em HTML/CSS/JS, qual opção é recomendada?",
          options: [
            { id: "a", label: "Behance." },
            { id: "b", label: "GitHub Pages / Vercel." },
            { id: "c", label: "Google Drive." },
            { id: "d", label: "Europass." }
          ],
          correctAnswer: "b",
          feedback: "GitHub Pages e Vercel são plataformas gratuitas projetadas para realizar o deploy (hospedagem) de aplicações web e sites diretamente do repositório."
        },
        {
          statement: "Se o seu foco for a área de Design de Interfaces ou UX/UI, qual ferramenta é essencial no seu portfólio?",
          options: [
            { id: "a", label: "Figma." },
            { id: "b", label: "Europass." },
            { id: "c", label: "Excel." },
            { id: "d", label: "Word." }
          ],
          correctAnswer: "a",
          feedback: "O Figma é o padrão de mercado para prototipação e design de interfaces de usuário (UI/UX)."
        }
      ]
    },
    {
      id: "08",
      title: "Como montar um bom LinkedIn",
      description: "Seu LinkedIn também é seu portfólio. Otimize seu perfil.",
      quizzes: [
        {
          statement: "O que deve ser colocado no campo 'Título' do seu perfil do LinkedIn?",
          options: [
            { id: "a", label: "Frases motivacionais como 'Em busca de um sonho'." },
            { id: "b", label: "Sua área de atuação, formação e principais tecnologias (ex: Estudante de ADS | Desenvolvimento Web | HTML | CSS)." },
            { id: "c", label: "Apenas o status 'Em busca de recolocação'." },
            { id: "d", label: "Sua Pretensão Salarial." }
          ],
          correctAnswer: "b",
          feedback: "O título é indexado pelos algoritmos de busca dos recrutadores. Incluir palavras-chave e sua área facilita que seu perfil seja encontrado."
        },
        {
          statement: "Qual é a função da seção 'Sobre' do LinkedIn?",
          options: [
            { id: "a", label: "Resumir em 3 a 5 linhas quem você é, o que estuda, o que sabe fazer e em qual área deseja atuar." },
            { id: "b", label: "Copiar na íntegra a lista de todas as matérias da faculdade." },
            { id: "c", label: "Postar desabafos sobre o mercado de trabalho." },
            { id: "d", label: "Colocar links de compra e vendas." }
          ],
          correctAnswer: "a",
          feedback: "A seção 'Sobre' serve como um resumo executivo da sua história profissional, direcionamento de carreira e habilidades técnicas."
        }
      ]
    },
    {
      id: "09",
      title: "Como apresentar certificados",
      description: "Saiba como incluir seus certificados de forma profissional.",
      quizzes: [
        {
          statement: "Ao listar cursos e certificados no currículo, qual é a postura correta?",
          options: [
            { id: "a", label: "Listar absolutamente todos os cursos já feitos na vida, mesmo os que não têm relação com a vaga." },
            { id: "b", label: "Priorizar cursos relevantes para a área desejada, informando nome, instituição, carga horária, ano e link de verificação." },
            { id: "c", label: "Anexar os arquivos dos certificados no arquivo PDF do currículo." },
            { id: "d", label: "Omitir o nome da instituição onde fez o curso." }
          ],
          correctAnswer: "b",
          feedback: "Apenas cursos relevantes para o objetivo profissional devem ser destacados. Incluir carga horária, ano e link traz transparência e valor."
        },
        {
          statement: "O que deve ser evitado ao incluir certificados digitais?",
          options: [
            { id: "a", label: "Inserir o link de validação do certificado." },
            { id: "b", label: "Listar dezenas de cursos curtos desconexos gerando poluição visual." },
            { id: "c", label: "Organizar em ordem cronológica inversa." },
            { id: "d", label: "Destacar a carga horária do curso." }
          ],
          correctAnswer: "b",
          feedback: "Listar excessos de cursos irrelevantes gera poluição visual e dificulta para o selecionador identificar suas reais qualificações."
        }
      ]
    },
    {
      id: "10",
      title: "Como organizar projetos",
      description: "Aprenda a descrever seus projetos de forma clara e atrativa.",
      quizzes: [
        {
          statement: "Ao estruturar a apresentação de um projeto, quais elementos essenciais devem ser abordados?",
          options: [
            { id: "a", label: "Nome do projeto, problema/objetivo, tecnologias utilizadas, aprendizados e links (projeto e código)." },
            { id: "b", label: "Apenas o nome do arquivo no seu computador." },
            { id: "c", label: "O preço cobrado ou custo do computador usado na execução." },
            { id: "d", label: "Lista das pessoas que não ajudaram na execução." }
          ],
          correctAnswer: "a",
          feedback: "Contextualizar o problema resolvido, o que foi aprendido e disponibilizar os links do código e demonstração são passos essenciais para validação técnica."
        },
        {
          statement: "Por que explicitar os 'aprendizados obtidos' em um projeto é bem visto por avaliadores?",
          options: [
            { id: "a", label: "Mostra capacidade de reflexão, evolução técnica e facilidade de aprendizado." },
            { id: "b", label: "Serve para preencher espaço em branco na folha." },
            { id: "c", label: "É uma regra obrigatória exigida pelo LinkedIn." },
            { id: "d", label: "Substitui a necessidade de enviar o currículo." }
          ],
          correctAnswer: "a",
          feedback: "Avaliadores buscam profissionais com mentalidade de aprendizado contínuo (growth mindset) e capacidade de autoavaliação."
        }
      ]
    },
    {
      id: "11",
      title: "Currículo para quem está começando",
      description: "🚀 Ainda não tenho experiência. E agora?",
      quizzes: [
        {
          statement: "Qual deve ser a seção em destaque de um candidato sem experiência formal no mercado de TI?",
          options: [
            { id: "a", label: "Histórico escolar do ensino fundamental." },
            { id: "b", label: "Projetos acadêmicos/pessoais desenvolvidos e competências técnicas dominadas." },
            { id: "c", label: "Endereço residencial completo com ponto de referência." },
            { id: "d", label: "Uma declaração prometendo aprender tudo do zero após a contratação." }
          ],
          correctAnswer: "b",
          feedback: "Para quem está começando, demonstrar o que é capaz de construir através de projetos práticos e competências adquiridas é o principal diferencial."
        },
        {
          statement: "O que substitui a 'Experiência Profissional' formal em um currículo de iniciante?",
          options: [
            { id: "a", label: "Projetos práticos, exercícios de cursos, trabalhos acadêmicos e projetos voluntários." },
            { id: "b", label: "Informações sobre hobbies e vida pessoal." },
            { id: "c", label: "Redação sobre planos de viagem para o futuro." },
            { id: "d", label: "Nada, o espaço deve ser deixado em branco." }
          ],
          correctAnswer: "a",
          feedback: "Projetos acadêmicos, de cursos e voluntários atestam a vivência prática com as tecnologias, suprindo a ausência de registro formal de trabalho."
        }
      ]
    },
    {
      id: "12",
      title: "Erros que devem ser evitados",
      description: "Conheça os principais erros e como não cometê-los.",
      quizzes: [
        {
          statement: "Qual das seguintes condutas é considerada um erro GRAVE na elaboração do currículo?",
          options: [
            { id: "a", label: "Salvar e enviar o arquivo no formato PDF." },
            { id: "b", label: "Inserir informações falsas ou inventar conhecimentos técnicos que não possui." },
            { id: "c", label: "Revisar o texto para corrigir erros de digitação." },
            { id: "d", label: "Usar um e-mail com estrutura 'nome.sobrenome@email.com'." }
          ],
          correctAnswer: "b",
          feedback: "Inventar habilidades ou dados falsos destrói a reputação profissional do candidato e é facilmente descoberto em testes ou entrevistas técnicas."
        },
        {
          statement: "Por que deve ser evitado o envio de currículos em formato editável (.DOCX)?",
          options: [
            { id: "a", label: "O formato PDF garante que a formatação do documento não desfigure em diferentes dispositivos e leitores." },
            { id: "b", label: "PDFs são mais pesados e ocupam mais espaço no e-mail." },
            { id: "c", label: "Arquivos .DOCX são proibidos por lei nas contratações." },
            { id: "d", label: "Recrutadores não conseguem abrir arquivos em computadores." }
          ],
          correctAnswer: "a",
          feedback: "O PDF preserva o layout e o design originais exatamente como você configurou, independentemente do sistema operacional do recrutador."
        }
      ]
    },
    {
      id: "13",
      title: "Checklist do currículo",
      description: "Confira se tudo está pronto antes de enviar.",
      quizzes: [
        {
          statement: "Qual é o nome de arquivo mais adequado para salvar o seu currículo em PDF antes do envio?",
          options: [
            { id: "a", label: "curriculo_novo_final_v2.pdf" },
            { id: "b", label: "SeuNome_SeuSobrenome_Curriculo.pdf" },
            { id: "c", label: "documento_12345.pdf" },
            { id: "d", label: "sem_titulo.pdf" }
          ],
          correctAnswer: "b",
          feedback: "Salvar com seu nome completo e a identificação do documento (ex: 'Felipe_Galdino_Curriculo.pdf') facilita o arquivamento e busca por parte do recrutador."
        },
        {
          statement: "Antes de enviar seu currículo digital, qual verificação final é indispensável?",
          options: [
            { id: "a", label: "Testar se todos os links (LinkedIn, GitHub, Portfólio) estão funcionando corretamente." },
            { id: "b", label: "Imprimir 10 cópias em papel." },
            { id: "c", label: "Mudar a cor de todo o texto para verde." },
            { id: "d", label: "Apagar os dados de telefone para contato." }
          ],
          correctAnswer: "a",
          feedback: "Links quebrados inviabilizam o acesso aos seus projetos e certificados, prejudicando a avaliação da sua candidatura."
        }
      ]
    },
    {
      id: "14",
      title: "Desafio prático do módulo",
      description: "🎯 DESAFIO: Construa sua identidade profissional",
      quizzes: [
        {
          statement: "O que compõe o ecossistema completo de identidade profissional digital proposto neste módulo?",
          options: [
            { id: "a", label: "Apenas um currículo impresso entregue pessoalmente." },
            { id: "b", label: "Currículo otimizado + LinkedIn estruturado + Portfólio técnico + Central unificada de links." },
            { id: "c", label: "Apenas uma página de cadastro em sites de emprego." },
            { id: "d", label: "Perfil pessoal em redes sociais de entretenimento." }
          ],
          correctAnswer: "b",
          feedback: "Construir uma presença digital consistente exige alinhar seu Currículo, LinkedIn, Portfólio e unificar seus links para fácil acesso."
        },
        {
          statement: "Qual é o objetivo final de organizar uma central de links (ex: via Notion, GitHub ou Linktree)?",
          options: [
            { id: "a", label: "Facilitar o acesso do recrutador a todas as suas evidências profissionais (Currículo, LinkedIn, Portfólio e Projetos) em um só lugar." },
            { id: "b", label: "Esconder seu histórico de estudos." },
            { id: "c", label: "Substituir totalmente a necessidade do LinkedIn." },
            { id: "d", label: "Obrigá-los a criar uma conta para ver seu trabalho." }
          ],
          correctAnswer: "a",
          feedback: "Uma central de links reduz o atrito e permite que o avaliador navegue de forma rápida entre suas qualificações e projetos."
        }
      ]
    }
  ]
};