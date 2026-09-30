// Dados dos editais (somente Mestrado). Para adicionar um programa, copie um bloco e edite.
// Datas no formato AAAA-MM-DD. Deixe "inicio"/"fim" como null se não souber.
const PROGRAMAS = [
{
  id:"ufs", sigla:"UFS", nome:"Universidade Federal de Sergipe", programa:"PPGEO – Geografia",
  edital:"PPGEO/POSGRAP/UFS nº 03/2026", cidade:"São Cristóvão/Aracaju", uf:"SE",
  modalidade:"Presencial; defesa do projeto por videoconferência", url:"", atualizado:"2026-09-30",
  vagas:{total:26, detalhe:"6 PPI e 3 adicionais para PcD. Sem número fixo de bolsas."},
  inscricao:{inicio:null, fim:null, taxa:"R$ 30,00", obs:"Período conforme edital. Taxa via GRU (SIGAA, Banco do Brasil) até 13/10/2026."},
  cronograma:[["Pagamento da taxa","até 13/10/2026"],["Homologação","20/10/2026"],["Avaliação dos projetos","26/10 a 06/11/2026"],["Defesa dos projetos","12/11 a 19/11/2026"],["Avaliação do Lattes","30/11 a 02/12/2026"],["Resultado final","11/12/2026"]],
  selecao:[["Projeto de pesquisa","Eliminatória","mín. 7,0"],["Defesa do projeto","Eliminatória","mín. 7,0"],["Lattes e histórico","Classificatória","—"]],
  projeto:{limite:"10 a 15 laudas", formato:"PDF único enviado pelo SIGAA",
    estrutura:["Introdução/Justificativa e Problema","Hipóteses, pressupostos ou questões norteadoras","Objetivos","Fundamentação teórica","Metodologia","Cronograma","Referências"],
    criterios:[["Pertinência à linha",2],["Síntese e clareza",2],["Domínio teórico",3],["Exposição metodológica",2],["Exequibilidade no prazo",1]], regras:""},
  linhas:[
   {nome:"Produção do Espaço Agrário", vagas:10, escopo:"Espaço agrário, trabalho no campo, movimentos sociais, reforma agrária e agronegócio.",
    docentes:["Christiane S. S. Campos (1)","Diana de M. de Carvalho (1)","Eraldo da S. Ramos Filho (2)","José Natan G. da Silva (1)","Josefa de Lisboa Santos (1)","Lucas Gama Lima (2)","Sônia de S. M. Menezes (2)"]},
   {nome:"Dinâmica Territorial e Desenvolvimento", vagas:8, escopo:"Dinâmicas territoriais, planejamento urbano e regional, redes e desenvolvimento.",
    docentes:["Ana Rocha dos Santos (1)","André Luiz André (1)","Christiane S. S. Campos (2)","José Eloízio da Costa (2)","Leônidas de S. Marques (1)","Lucas Gama Lima (1)"]},
   {nome:"Análise Geoambiental e Ordenamento do Território", vagas:8, escopo:"Estudos geoambientais, gestão ambiental, paisagem e ordenamento territorial.",
    docentes:["Alberlene R. de Oliveira (1)","Carlos de O. Bispo (1)","Francisco J. Castelhano (2)","Hélio Mário de Araújo (2)","Márcia Eliane S. Carvalho (2)"]}
  ],
  documentos:["Formulário de inscrição","Linha e docente pretendido","Projeto de pesquisa","RG e CPF","Histórico e diploma","Lattes comprovado","Documentos de ações afirmativas (se aplicável)"],
  proficiencia:"Conforme regulamento do programa e normas da pós-graduação da UFS."
},
{
  id:"unicamp", sigla:"UNICAMP", nome:"Universidade Estadual de Campinas", programa:"Pós-Graduação em Geografia (IG)",
  edital:"Ingresso 2027/1", cidade:"Campinas", uf:"SP", modalidade:"Presencial", url:"", atualizado:"2026-09-30",
  vagas:{total:50, detalhe:"Total de Mestrado e Doutorado, conforme disponibilidade de orientação. Há reserva para PPI. Bolsas CAPES/CNPq distribuídas depois."},
  inscricao:{inicio:"2026-07-15", fim:"2026-10-08", taxa:"Sem cobrança indicada", obs:"Até 17h do último dia. Formulário próprio e envio à secretaria."},
  cronograma:[["Inscrições","15/07 a 08/10/2026"],["Inscrições habilitadas","14/10/2026"],["Avaliação de projetos e Lattes","30/10 a 12/11/2026"],["Entrevistas","23/11 a 04/12/2026"],["Resultado final","11/12/2026"]],
  selecao:[["Pré-seleção (projeto e Lattes, pelo orientador)","Eliminatória","—"],["Entrevista","Seleção final","—"]],
  projeto:{limite:"Máximo de 15 páginas", formato:"PDF, espaçamento 1,5",
    estrutura:["Resumo","Introdução","Justificativa","Objetivos","Síntese da bibliografia fundamental","Metodologia","Cronograma","Referências"],
    criterios:[["Pertinência com o orientador",1],["Revisão bibliográfica",1],["Estado da arte",1],["Clareza da problemática",1],["Coerência das hipóteses",1],["Objetivos",2],["Metodologia",2],["Redação e forma",1]],
    regras:"Indicar 1 orientador é obrigatório. O projeto deve ter relação clara com os temas dele, senão pode ser desclassificado."},
  linhas:[
   {nome:"A – Dinâmica Territorial", vagas:null, escopo:"Vagas por orientador (M/D = Mestrado ou Doutorado).",
    docentes:["Adriana M. B. da Silva (3 M/D)","Claudete de C. S. Vitte (2 M/D)","Eduardo Marandola Jr. (3 M/D)","Jamille S. Lima-Payayá (3 M/D)","Kauê Lopes dos Santos (3 M/D)","Maria Tereza D. Paes (2 M/D)","Marcio A. Cataia (4 M/D)","Rafael Straforini (1 M + 1 M/D)"]},
   {nome:"B – Análise Ambiental", vagas:null, escopo:"Vagas por orientador (M/D = Mestrado ou Doutorado).",
    docentes:["Aline Pascoalino (3 M/D)","Antônio Carlos Vitte (4 M + 1 M/D)","Archimedes Perez Filho (1 M/D)","Edson Luís Bolfe (4 M/D)","Francisco S. Ladeira (3 M/D)","Lindon F. Matias (2 M)","Marcos César Ferreira (2 M)","Raul Reis Amorim (3 M/D)","Regina Célia de Oliveira (2 M + 1 D)"]}
  ],
  documentos:["Formulário de inscrição","Orientador indicado","Projeto de pesquisa","Foto 3x4","Lattes","Diploma e histórico","Documentos pessoais","Documentos de cotas (se aplicável)"],
  proficiencia:"Exigências específicas detalhadas para o Doutorado; consulte o edital para o Mestrado."
},
{
  id:"ufu", sigla:"UFU", nome:"Universidade Federal de Uberlândia", programa:"PPGGEO/IGESC – Geografia",
  edital:"PPGGEO/IGESC/UFU nº 07/2026", cidade:"Uberlândia (Campus Santa Mônica)", uf:"MG", modalidade:"Presencial, com arguição remota", url:"", atualizado:"2026-09-30",
  vagas:{total:34, detalhe:"24 ampla concorrência, 7 PPI, 2 PcD e 1 refugiados/políticas humanitárias."},
  inscricao:{inicio:"2026-10-09", fim:"2026-10-20", taxa:"Gratuita", obs:"Até 23h59 do último dia."},
  cronograma:[["Inscrições","09 a 20/10/2026"],["Análise documental","23/10/2026"],["Homologação final","29/10/2026"],["Arguição","Agendamento individual"],["Currículo Lattes","Conforme cronograma do edital"]],
  selecao:[["Pré-projeto","Eliminatória e classificatória","mín. 60/100"],["Arguição (remota, gravada, até 30 min)","Eliminatória e classificatória","mín. 60/100"],["Currículo (últimos 5 anos)","Classificatória","—"]],
  projeto:{limite:"Máximo de 10 páginas", formato:"A4, Times New Roman ou Arial 12, espaçamento 1,5, margens 3 cm (sup./esq.) e 2 cm (dir./inf.)",
    estrutura:["Título","Resumo","Palavras-chave","Introdução","Objetivos","Hipótese(s)","Justificativa e resultados esperados","Proposição metodológica","Cronograma","Referências"],
    criterios:[["Pertinência à linha e nível",20],["Formato, ortografia e clareza",25],["Resumo",5],["Fundamentação, mérito, justificativa e objetivos",35],["Métodos e cronograma",15]],
    regras:"Proibida qualquer identificação do candidato no pré-projeto; pode desclassificar."},
  linhas:[
   {nome:"Dinâmicas Territoriais", vagas:10, escopo:"Geografia urbana, agrária, econômica e planejamento territorial.",
    docentes:["Beatriz Ribeiro Soares (2)","Geisa D. G. Cleps (1)","João Cleps Junior (1)","Mirlei F. V. Pereira (2)","Vitor Ribeiro Filho (1)","Rivaldo Mauro de Faria (1)","William R. Ferreira (2)"]},
   {nome:"Estudos Ambientais e Geotecnologias", vagas:13, escopo:"Geomorfologia, solos, sensoriamento remoto, cartografia, biogeografia e planejamento ambiental.",
    docentes:["Alan Silveira (1)","Claudionor R. da Silva (1)","Gabriel do N. Guimarães (1)","Gelze S. de S. C. Rodrigues (2)","Guilherme R. Corrêa (2)","João Vítor M. Bravo (1)","Silvio Carlos Rodrigues (3)","Vinícius de L. Dantas (2)"]},
   {nome:"Educação Geográfica e Representações Sociais", vagas:11, escopo:"Ensino de Geografia, formação docente, cartografia escolar, epistemologia e riscos.",
    docentes:["Amanda Regina Gonçalves (1)","Adriany de A. M. Sampaio (2)","Angela Fagna G. de Souza (2)","Antonio Carlos F. Sampaio (1)","Rita de C. M. de Souza (1)","Tulio Barbosa (1)","Vicente de Paulo da Silva (3)"]}
  ],
  documentos:["Requerimento de inscrição","Até 3 orientadores por preferência","Pré-projeto sem identificação","Lattes e planilha de pontuação","Comprovantes em PDF único","Documentos pessoais, diplomas e históricos","Documentos de ações afirmativas (se aplicável)"],
  proficiencia:"Obrigatória para ingresso: 1 língua no Mestrado."
},
{
  id:"uft", sigla:"UFT", nome:"Universidade Federal do Tocantins", programa:"PPGG – Geografia",
  edital:"Edital nº 126/2026", cidade:"Porto Nacional", uf:"TO", modalidade:"Presencial; etapas seletivas online", url:"", atualizado:"2026-09-30",
  vagas:{total:19, detalhe:"18 regulares (5 Geo-Ambiental, 10 Geo-Territoriais, 3 Ensino) + 1 vaga Quali+Técnico Administrativo UFT. Cotas: 6 vagas (2 negros, 1 quilombola, 2 indígenas, 1 PcD)."},
  inscricao:{inicio:"2026-09-19", fim:"2026-11-02", taxa:"R$ 100,00", obs:"Pelo ProSeletivo UFT, até 23h59. Pagamento até 30/10. Isenção de 19/09 a 13/10 (CadÚnico ou doador de medula)."},
  cronograma:[["Inscrições","19/09 a 02/11/2026"],["Pedido de isenção","19/09 a 13/10/2026"],["Resultado da isenção","20/10/2026"],["Homologação","até 06/11/2026"],["Arguição online","17 a 19/11/2026"],["Avaliação curricular","23 a 30/11/2026"],["Resultado final","até 15/12/2026"]],
  selecao:[["Projeto","Eliminatória","—"],["Arguição (Google Meet)","Eliminatória","—"],["Currículo","Classificatória","até 10,0"]],
  projeto:{limite:"Máximo de 12 páginas (acima disso, não é avaliado)", formato:"A4 retrato, Times New Roman 12, espaçamento 1,5, margens 3 cm",
    estrutura:["Título","Linha de pesquisa","Tema/problema","Fundamentação teórica","Justificativas","Objetivos","Metodologia","Cronograma","Referências"],
    criterios:[], regras:"O tema/problema deve ser de natureza geográfica. Critérios: aderência à linha, clareza e relevância, teoria atual, objetivos, metodologia e redação."},
  linhas:[
   {nome:"Análise e Gestão Geo-Ambiental", vagas:5, escopo:"Geologia, geomorfologia, pedologia, geoecologia, paisagem, ecossistemas e biomas.", docentes:[]},
   {nome:"Estudos Geo-Territoriais", vagas:10, escopo:"Dinâmicas agrárias e urbanas, regionalização, dimensão cultural do espaço e processos territoriais.", docentes:[]},
   {nome:"Ensino de Geografia", vagas:3, escopo:"Formação de professores, ensino-aprendizagem, educação ambiental e práticas pedagógicas.", docentes:[]}
  ],
  documentos:["Cadastro no ProSeletivo","Projeto de pesquisa","Comprovante de pagamento ou isenção","Identidade e CPF","Diploma ou declaração de provável formando","Histórico escolar","Lattes e tabela do Anexo I","Documentos de ações afirmativas (se aplicável)"],
  proficiencia:"Leitura em inglês, francês, espanhol, alemão ou italiano, comprovada até a matrícula do 2º semestre. Lista de docentes: consulte o portal do programa."
}
];
