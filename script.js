document.addEventListener('alpine:init', () => {
    Alpine.data('alpine', () => ({

        sidebar: false,
        open: null,
        scrolled: false,
        activeSection: 'inicio',
        planos: [
            {
                nome: 'MENSAL',
                preco: '150',
                vantagens: [
                    '10 PLANILHAS PERSONALIZADAS',
                    '10 PLANILHAS PERSONALIZADAS',
                    '10 PLANILHAS PERSONALIZADAS',
                ],
                link: 'https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=382&page=382',
            },
            {
                nome: 'TRIMESTRAL',
                preco: '120',
                vantagens: [
                    '10 PLANILHAS PERSONALIZADAS',
                    '10 PLANILHAS PERSONALIZADAS',
                    '10 PLANILHAS PERSONALIZADAS',
                    '10 PLANILHAS PERSONALIZADAS',
                ],
                link: 'https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=383&page=382',
            },
            {
                nome: 'SEMESTRAL',
                preco: '108',
                vantagens: [
                    '10 PLANILHAS PERSONALIZADAS',
                    '10 PLANILHAS PERSONALIZADAS',
                    '10 PLANILHAS PERSONALIZADAS',
                    '10 PLANILHAS PERSONALIZADAS',
                ],
                link: 'https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=384&page=382',
            },
            {
                nome: 'ANUAL',
                preco: '83',
                vantagens: [
                    '10 PLANILHAS PERSONALIZADAS',
                    '10 PLANILHAS PERSONALIZADAS',
                    '10 PLANILHAS PERSONALIZADAS',
                    '10 PLANILHAS PERSONALIZADAS',
                ],
                link: 'https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=25525&page=382',
            },
        ],
        depoimentos_antes_depois: [
            {
                nome: 'Maria Clara',
                texto: 'Um treino direcionado faz total diferença quando se fala em resultados sólidos! A partir do momento que parei de bater a cabeça sozinha por achar que sabia treinar e procurei um treino direcionado para meu objetivo, minha estética mudou com excelência!! Obrigada Rafa 💪🏼💪🏼',
                imagem_antes: 'arquivos/imagens/antes-depois/1.jpg',
                imagem_depois: 'arquivos/imagens/antes-depois/2.jpg',
            },
            {
                nome: 'Pedrinho Eliseu',
                texto: 'Quando cheguei para o Rafael estava recomeçando uma longa jornada, que só foi possível graças à clareza com a qual ele enxerga seus alunos e sobremaneira pela forma como conduz os treinos, adaptando-os à realidade. Sempre objetivo e comprometido, afirmo que pelas suas mãos encontrei mais do que buscava. Alto nível e alta performance, com extrema dedicação. Assino embaixo!',
                imagem_antes: 'arquivos/imagens/antes-depois/3.jpg',
                imagem_depois: 'arquivos/imagens/antes-depois/4.jpg',
            },
            {
                nome: 'Ewelyn',
                texto: 'Eu comecei a ver muito mais resultados quando tive um acompanhamento profissional mais próximo, com exercícios específicos para a minha necessidade e objetivo.',
                imagem_antes: 'arquivos/imagens/antes-depois/5.jpg',
                imagem_depois: 'arquivos/imagens/antes-depois/6.jpg',
            },
        ],
        depoimentos_texto: [
            {
                nome: '',
                depoimento: '',
                imagem_perfil: '',
            },
            {
                nome: '',
                depoimento: '',
                imagem_perfil: '',
            },
            {
                nome: '',
                depoimento: '',
                imagem_perfil: '',
            },
            {
                nome: '',
                depoimento: '',
                imagem_perfil: '',
            },
            {
                nome: '',
                depoimento: '',
                imagem_perfil: '',
            },
            {
                nome: '',
                depoimento: '',
                imagem_perfil: '',
            },
        ],
        vantagens_aplicativo: [
            {
                vantagem: 'Fotos e/ ou vídeos demonstrativos'
            },
            {
                vantagem: 'Cronometragem dos descansos'
            },
            {
                vantagem: 'Controle da carga'
            },
            {
                vantagem: 'Registro de frequência'
            },
            {
                vantagem: 'Feedback dentro do app, após o treino'
            },
            {
                vantagem: 'Avaliação Física On-line'
            },
            {
                vantagem: 'Programação semanal da sua rotina de atividade física'
            },
            {
                vantagem: 'Compatível com todos os smartphones'
            },
        ],
        perguntas_frequentes: [
            {
                pergunta: 'PORQUE ADERIR A SUA CONSULTORIA?',
                resposta: 'Uma das maiores dificuldades das pessoas é dar continuidade nos treinamentos. Isso acontece por falta de motivação ou de um bom plano de treino voltado para a sua  realidade (dores, tempo, objetivo, material ou equipamentos disponíveis). O importante não é treinar. O importante é sentir prazer treinando. E é por isso que estou aqui, para reformular a maneira com a qual as pessoas encaram o treinamento em academia, mostrando o quanto ele pode ser objetivo, prazeroso e ainda sim alcançar excelentes resultados.',
            },
            {
                pergunta: 'COMO VOCÊ ACOMPANHA MEU PROGRESSO À DISTÂNCIA?',
                resposta: 'Pelo APP e  WhatsApp, onde é possível  tanto tirar suas dúvidas, quanto analisar seu progresso, acompanhar sua aderência e verificar sua progressão de carga.',
            },
            {
                pergunta: 'COMO FUNCIONA A PERIODIZAÇÃO DOS TREINOS?',
                resposta: 'Além do planejamento do treino, toda a  rotina de atividades físicas semanal é estudada, para que você consiga obter os resultados de forma eficaz e diminuindo o risco de  lesões. É  essencial o planejamento da sequência correta dos exercícios para sua semana. O tempo para troca do  treino vai ser de acordo com a sua evolução e necessidade, pois isso é muito individual. Depende muito do seu objetivo e da sua assiduidade. Caso você siga corretamente o treino proposto, recomendo a troca a partir da sexta semana com base na periodização prescrita e enviada.',
            },
            {
                pergunta: 'CONTINUO COM DÚVIDAS, COMO FAÇO PARA ESCLARECÊ-LAS ANTES DA AQUISIÇÃO?',
                resposta: 'Meu suporte estará à sua disposição para responder todas as suas dúvidas. Só acessar o meu Instagram, e me enviar um direct. ',
            },
        ],
        depoimentos_rodape: [
            {
                nome: 'Débora Malaman',
                depoimento: 'Rafael demonstra um alto nível de profissionalismo e dedicação com seus alunos!',
                imagem_perfil: 'arquivos/imagens/depoimentos/1.jpg',
            },
            {
                nome: 'Débora Malaman',
                depoimento: 'Rafael demonstra um alto nível de profissionalismo e dedicação com seus alunos!',
                imagem_perfil: 'arquivos/imagens/depoimentos/2.jpg',
            },
        ],

        updateScroll() {
            this.scrolled = window.scrollY > 0;
            this.activeSection = this.getActiveSection();
        },

        getActiveSection() {
            const scrollPosition = window.scrollY
            const apresentacao = document.getElementById('apresentacao')
            const planos = document.getElementById('planos')
            const depoimentos = document.getElementById('depoimentos')
            const aplicativo = document.getElementById('aplicativo')
            const duvidas = document.getElementById('duvidas')
        
            if (scrollPosition < apresentacao.offsetTop - 120)
                return 'inicio'
            else if (scrollPosition < planos.offsetTop - 120)
                return 'apresentacao'
            else if (scrollPosition < depoimentos.offsetTop - 120)
                return 'planos'
            else if (scrollPosition < aplicativo.offsetTop - 120)
                return 'depoimentos'
            else if (scrollPosition < duvidas.offsetTop - 120)
                return 'aplicativo'
            else
                return 'duvidas'
        },

    }))
})
