/* ==========================================================================
   GOOGLE ADS & ANALYTICS CONVERSION TRACKING ENGINE
   ========================================================================== */
function trackConversion(actionName, labelText, value = 0) {
    try {
        if (typeof gtag === 'function') {
            gtag('event', 'conversion', {
                'event_category': 'PaidTraffic_Conversion',
                'event_action': actionName,
                'event_label': labelText,
                'value': value
            });
            gtag('event', 'generate_lead', {
                'event_category': 'Leads',
                'event_label': labelText
            });
        }
        console.log(`[Google Tag Event Dispatched] Action: "${actionName}" | Label: "${labelText}"`);
    } catch (err) {
        console.warn('[Google Tag Error]', err);
    }
}

/* ==========================================================================
   RECIPES DATABASE (THE BSB ELECTRICAL COOKBOOK)
   ========================================================================== */
const RECIPES = [
    {
        id: "iluminacao-cenica",
        category: "automacao",
        categoryLabel: "Automação & Luz",
        title: "Retrofit de Iluminação Cênica & Dimerização LED",
        subtitle: "Eliminação completa de cintilação (flicker) e controle automatizado de cenas luminotécnicas.",
        time: "1 a 3 dias",
        difficulty: "Alta Complexidade",
        tags: ["LED Dimerizável", "Lutron/Tuya", "Filtro Harmônico", "Cênico"],
        problem: "Cintilação em fitas LED de alta potência sob dimerização, aquecimento excessivo de drivers em sancas fechadas de gesso e incapacidade de criar cenas automatizadas integradas.",
        ingredients: [
            "Fitas LED COB IRC > 95 de alta densidade",
            "Drivers DALI / 0-10V ultra-estabilizados Schneider",
            "Módulos de Automação Inteligente (padrão Zigbee/Wi-Fi)",
            "Cabos blindados contra interferência eletromagnética (EMI)",
            "Conectores de pressão Wago Série 221"
        ],
        instructions: [
            "<strong>Análise Harmônica:</strong> Varredura da rede com osciloscópio sob carga para identificar frequências parasitas geradoras de flicker.",
            "<strong>Isolamento Mecânico & Térmico:</strong> Instalação de trilhos dissipadores de alumínio anodizado embutidos no gesso para resfriamento passivo dos LEDs.",
            "<strong>Redimensionamento de Drivers:</strong> Substituição de fontes genéricas por drivers Schneider Electric isolados com modulação PWM de alta frequência.",
            "<strong>Cabeamento de Sinal Dedicado:</strong> Lançamento de fiação blindada dedicada para o sinal de controle (dimerização) separada fisicamente dos condutores de força.",
            "<strong>Calibração Digital:</strong> Parametrização fina das curvas de dimerização (logarítmica/linear) e criação de cenas cênicas ('Cinema', 'Receber', 'Relaxar') no aplicativo de controle."
        ],
        media: [
            "assets/media/WhatsApp Image 2026-05-21 at 08.58.24 (1).jpeg",
            "assets/media/WhatsApp Image 2026-05-21 at 08.58.26.jpeg"
        ]
    },
    {
        id: "paineis-qdc",
        category: "premium",
        categoryLabel: "Instalações Premium",
        title: "Dimensionamento & Montagem de Quadro de Distribuição",
        subtitle: "Reestruturação e montagem técnica de quadros de distribuição (QDC) altamente organizados e seguros.",
        time: "2 a 4 dias",
        difficulty: "Engenharia Crítica",
        tags: ["Quadro de Distribuição", "Schneider Prisma", "Anilhamento", "Trifásico"],
        problem: "Quadros de distribuição legados desorganizados ('ninho de rato'), aquecimento excessivo por conexões frouxas, desbalanceamento crítico de fases e desarmes repentinos sob carga.",
        ingredients: [
            "Quadros Schneider Prisma ou Kaedra com barramento integrado",
            "Disjuntores termomagnéticos Schneider Easy9 de alta capacidade",
            "Terminais tubulares ilhós crimpados em prensa hidráulica",
            "Pentes de conexão trifásicos isolados em cobre estanhado",
            "Anilhas numéricas identificadoras de circuitos HellermannTyton"
        ],
        instructions: [
            "<strong>Mapeamento Tridimensional:</strong> Rastreamento e identificação individual de todos os condutores que chegam ao quadro.",
            "<strong>Balanceamento de Carga:</strong> Cálculo de correntes e redistribuição matemática de circuitos entre as fases R, S e T para equalização térmica.",
            "<strong>Crimpagem Padrão Industrial:</strong> Decapagem precisa e prensa de todos os condutores com terminais de cobre estanhado sob pressão ideal.",
            "<strong>Montagem Mecânica Alinhada:</strong> Fixação de disjuntores nos trilhos DIN organizados por categorias (iluminação, tomadas comuns, tomadas gourmet, ar-condicionado).",
            "<strong>Torqueamento Controlado:</strong> Aperto mecânico de todos os bornes com chave de torque dinamométrica seguindo as especificações exatas em N.m do fabricante."
        ],
        media: [
            "assets/media/WhatsApp Image 2026-05-21 at 08.58.23.jpeg",
            "assets/media/WhatsApp Image 2026-05-21 at 08.58.27 (1).jpeg",
            "assets/media/Vídeo/WhatsApp Video 2026-05-21 at 08.58.26.mp4"
        ]
    },
    {
        id: "instalacao-padrao",
        category: "premium",
        categoryLabel: "Instalações Premium",
        title: "Instalação, Homologação & Remoção de Padrão",
        subtitle: "Montagem, desmembramento e remoção de padrões de entrada de energia homologados pela Neoenergia (CEB).",
        time: "1 a 3 dias",
        difficulty: "Alta Complexidade",
        tags: ["Padrão Neoenergia", "Desmembramento", "Remoção de Padrão", "Instalação Poste"],
        problem: "Padrão de energia antigo reprovado pela concessionária, necessidade de separar contas de energia para casas no mesmo lote (desmembramento de medição) ou remoção de padrões antigos sem segurança.",
        ingredients: [
            "Caixas de medição blindadas de policarbonato homologadas Neoenergia",
            "Poste de concreto armado ou poste metálico normatizado",
            "Cabos de entrada de cobre de seção robusta (16mm² a 35mm²)",
            "Disjuntor geral trifásico de alta capacidade de interrupção (kA)",
            "Conectores de cunha de liga de cobre para conexão na rede da concessionária"
        ],
        instructions: [
            "<strong>Estudo de Carga & Projeto:</strong> Determinação da demanda de energia para cálculo do tipo de padrão (Monofásico, Bifásico ou Trifásico) e projetos de desmembramento.",
            "<strong>Remoção do Padrão Obsoleto:</strong> Desconexão segura e remoção do padrão antigo que não atende mais às normas vigentes.",
            "<strong>Implantação do Novo Poste:</strong> Escavação, fixação e concretagem do poste técnico ou fixação de caixas embutidas em muros.",
            "<strong>Lançamento de Cabos & Aterramento:</strong> Passagem dos novos cabos de alta seção e montagem de eletrodo de aterramento próprio do padrão.",
            "<strong>Homologação e Vistoria:</strong> Preparação da documentação técnica e solicitação de vistoria oficial junto à Neoenergia para ligação e energização técnica do novo padrão."
        ],
        media: [
            "assets/media/WhatsApp Image 2026-05-21 at 08.58.23 (1).jpeg",
            "assets/media/WhatsApp Image 2026-05-21 at 08.58.26 (1).jpeg"
        ]
    },
    {
        id: "troca-disjuntor",
        category: "seguranca",
        categoryLabel: "Segurança & Laudos",
        title: "Retrofit de Proteção Pessoal (Troca de Disjuntores & DR)",
        subtitle: "Troca de disjuntores antigos obsoletos por modernos sistemas de proteção termomagnética e DR.",
        time: "1 dia",
        difficulty: "Segurança Máxima",
        tags: ["Troca de Disjuntor", "Padrão DIN", "Proteção Choque", "Siemens"],
        problem: "Disjuntores antigos NEMA (pretos) desarmando por fadiga térmica (falso desarme) ou que falham em desarmar em curtos-circuitos reais, além da ausência de proteção contra choques letais (DR).",
        ingredients: [
            "Disjuntores termomagnéticos padrão DIN Schneider/Siemens",
            "Dispositivo DR (Diferencial Residual) Siemens 30mA de alta velocidade",
            "Barramentos isolados de distribuição fase e neutro",
            "Trilhos DIN galvanizados",
            "Condutores de interconexão antichama de alta flexibilidade"
        ],
        instructions: [
            "<strong>Mapeamento Operacional:</strong> Teste individual de carga e mapeamento térmico infravermelho de cada disjuntor obsoleto.",
            "<strong>Desenergização Geral:</strong> Desconexão segura da entrada principal para início do retrofit físico.",
            "<strong>Substituição Física:</strong> Remoção dos disjuntores antigos e instalação dos novos disjuntores no padrão DIN de disparo rápido.",
            "<strong>Inserção do Dispositivo DR:</strong> Instalação do interruptor DR de 30mA para monitoramento constante e desligamento em caso de fuga ou choque elétrico.",
            "<strong>Teste de Disparo:</strong> Verificação física do tempo de resposta do DR usando botão de teste integrado e simulação controlada de fuga."
        ],
        media: [
            "assets/media/WhatsApp Image 2026-05-21 at 08.58.24.jpeg",
            "assets/media/WhatsApp Image 2026-05-21 at 08.58.25.jpeg"
        ]
    },
    {
        id: "troca-ramal",
        category: "premium",
        categoryLabel: "Instalações Premium",
        title: "Substituição de Cabos Alimentadores (Troca de Ramal)",
        subtitle: "Troca completa do ramal principal de alimentação da residência ou comércio para sanar quedas de tensão.",
        time: "1 a 2 dias",
        difficulty: "Alta Complexidade",
        tags: ["Troca de Ramal", "Cabos de Entrada", "Queda de Tensão", "Prysmian HEPR"],
        problem: "Flutuação e enfraquecimento das luzes ao ligar chuveiros ou aparelhos de ar-condicionado, fiação principal esquentando muito nas tubulações ou cabos antigos rígidos ressecados.",
        ingredients: [
            "Cabos de cobre virgem flexíveis isolamento HEPR 90°C Prysmian/Sil",
            "Fita autofusão premium 3M e fita isolante antichama",
            "Eletrodutos corrugados reforçados de PEAD para trecho subterrâneo",
            "Conectores de aperto split-bolt ou luvas de compressão",
            "Prensa-cabos metálicos estanques"
        ],
        instructions: [
            "<strong>Cálculo de Queda de Tensão:</strong> Determinação da seção nominal do cabo com base na corrente nominal e na distância física até o QDC (limite de 2% de queda).",
            "<strong>Desobstrução de Eletrodutos:</strong> Limpeza e lubrificação das tubulações existentes para evitar danos na passagem dos cabos novos.",
            "<strong>Lançamento de Novos Condutores:</strong> Substituição integral dos cabos antigos subdimensionados pelo novo ramal de alta seção revestido em HEPR.",
            "<strong>Isolamento com Autofusão:</strong> Conexão das pontas nas caixas de passagem vedando completamente contra umidade externa com fita de autofusão.",
            "<strong>Medição True RMS:</strong> Verificação final da estabilidade de tensão sob carga máxima ativa."
        ],
        media: [
            "assets/media/WhatsApp Image 2026-05-21 at 08.58.28.jpeg",
            "assets/media/Vídeo/WhatsApp Video 2026-05-21 at 08.58.25.mp4"
        ]
    },
    {
        id: "troca-chuveiro",
        category: "seguranca",
        categoryLabel: "Segurança & Laudos",
        title: "Fiação Dedicada para Chuveiro (Troca de Fiação)",
        subtitle: "Troca de fiação sobrecarregada por cabos dimensionados para alta potência e conexões seguras de alta temperatura.",
        time: "Meio dia",
        difficulty: "Média Complexidade",
        tags: ["Fiação de Chuveiro", "Cabo 6mm²/10mm²", "Conector Wago 221", "DR Dedicado"],
        problem: "Fiação de chuveiro derretendo, cheiro de queimado no banheiro, disjuntor do chuveiro desarmando constantemente devido a fiação antiga de bitola fina (ex: 2.5mm² ou 4mm²).",
        ingredients: [
            "Cabos flexíveis antichama Prysmian/Sil de 6mm² ou 10mm²",
            "Conectores Wago Série 221-611 de alta temperatura (até 105°C)",
            "Disjuntor termomagnético dedicado Schneider de capacidade adequada",
            "Disjuntor DR setorial para proteção contra choques em áreas molhadas"
        ],
        instructions: [
            "<strong>Cálculo de Demanda Térmica:</strong> Dimensionamento da bitola do cabo com base na potência total do chuveiro (ex: 6mm² para 220V/7800W, 10mm² para 127V/5500W).",
            "<strong>Extração de Condutores Danificados:</strong> Retirada integral de fios derretidos ou oxidados das tubulações internas do banheiro.",
            "<strong>Lançamento de Fiação Antichama:</strong> Passagem dos novos condutores dedicados e contínuos do QDC até o ponto de instalação do chuveiro.",
            "<strong>Conexão Premium Wago:</strong> Eliminação de emendas de fita isolante comuns, conectando o chuveiro com conectores Wago Série 221 de encaixe rápido e alta temperatura.",
            "<strong>Teste de Aquecimento:</strong> Teste operacional do chuveiro em temperatura máxima monitorando a ausência total de efeito Joule."
        ],
        media: [
            "assets/media/WhatsApp Image 2026-05-21 at 08.58.25 (1).jpeg",
            "assets/media/WhatsApp Image 2026-05-21 at 08.58.24 (2).jpeg"
        ]
    },
    {
        id: "protecao-aterramento",
        category: "seguranca",
        categoryLabel: "Segurança & Laudos",
        title: "Malha de Aterramento dedicada & Proteção contra Surtos",
        subtitle: "Blindagem eletromagnética completa para proteção de eletrodomésticos caros e segurança humana.",
        time: "1 a 2 dias",
        difficulty: "Segurança Máxima",
        tags: ["DPS Clamper", "Disjuntor DR", "Haste de Cobre", "Terrômetro"],
        problem: "Queima frequente de eletrodomésticos premium (como adegas, geladeiras side-by-side e home theaters) durante chuvas e sensação de choque elétrico ao tocar em carcaças metálicas.",
        ingredients: [
            "DPS Classe II Clamper VCL 275V com sinalizador de fim de vida",
            "Disjuntor DR (Diferencial Residual) Siemens de alta sensibilidade (30mA)",
            "Hastes de aterramento com alta camada de cobre puro (250 mícrons)",
            "Caixas de inspeção reforçadas para medição preditiva",
            "Condutor de proteção (terra) verde de cobre virgem normatizado"
        ],
        instructions: [
            "<strong>Medição de Resistividade:</strong> Teste de resistência do solo utilizando terrômetro digital de alta precisão (método dos 4 eletrodos).",
            "<strong>Implantação de Hastes:</strong> Cravamento de malha de aterramento em pontos estratégicos e equipotencialização com solda exotérmica.",
            "<strong>Instalação do Dispositivo DR:</strong> Inserção de DR central ou setorial para detectar fugas de corrente infinitesimais a partir de 30mA (limite de parada cardíaca).",
            "<strong>Acoplamento de DPS Clamper:</strong> Integração de DPS (Dispositivos de Proteção contra Surtos) na entrada de energia conectando Fase-Terra e Neutro-Terra.",
            "<strong>Laudo de Continuidade:</strong> Teste final de baixa impedância garantindo que qualquer surto de raio flua imediatamente para a terra em microssegundos."
        ],
        media: [
            "assets/media/WhatsApp Image 2026-05-21 at 08.58.25.jpeg",
            "assets/media/WhatsApp Image 2026-05-21 at 08.58.28 (1).jpeg"
        ]
    },
    {
        id: "termografia-laudos",
        category: "preditiva",
        categoryLabel: "Laudos & Engenharia",
        title: "Diagnóstico Termográfico Preditivo",
        subtitle: "Varredura infravermelha não invasiva para prevenir incêndios e falhas de energia catastróficas.",
        time: "Meio dia",
        difficulty: "Engenharia Técnica",
        tags: ["Câmera FLIR", "Termografia", "Preditiva", "Relatório Técnico"],
        problem: "Cheiro sutil de aquecimento plástico, quedas intermitentes de energia sem atuação aparente de disjuntores e aumento injustificado na conta de luz.",
        ingredients: [
            "Câmera termográfica infravermelha FLIR profissional",
            "Multímetro alicate True RMS Fluke 376 FC",
            "Software FLIR Tools para renderização de histograma térmico",
            "Dinamômetro mecânico calibrado"
        ],
        instructions: [
            "<strong>Varredura sob Carga Máxima:</strong> Acionamento de todos os equipamentos do imóvel por 30 minutos para forçar a temperatura operacional máxima.",
            "<strong>Mapeamento Infravermelho:</strong> Registro fotográfico térmico detalhado de todos os barramentos, conexões de disjuntores e emendas de alta potência.",
            "<strong>Identificação de Pontos Quentes (Hotspots):</strong> Cálculo do Delta T (diferença de temperatura) entre condutores da mesma fase.",
            "<strong>Reaperto Técnico Dinamométrico:</strong> Correção mecânica imediata de todas as conexões identificadas com anomalia utilizando torque calibrado.",
            "<strong>Emissão de Laudo:</strong> Geração de relatório de engenharia contendo fotos ópticas e térmicas sobrepostas, detalhando gravidade e ações corretivas."
        ],
        media: [
            "assets/media/WhatsApp Image 2026-05-21 at 08.58.27.jpeg",
            "assets/media/Vídeo/WhatsApp Video 2026-05-21 at 08.58.27.mp4"
        ]
    }
];

/* ==========================================================================
   PORTFOLIO REAL MEDIA DATA (adao)
   ========================================================================== */
const PORTFOLIO_ITEMS = [
    {
        path: "assets/media/WhatsApp Image 2026-05-21 at 08.58.23.jpeg",
        type: "image",
        title: "Quadro de Distribuição (QDC) Schneider",
        desc: "Montagem impecável de barramentos e disjuntores em trilho DIN, respeitando distâncias de segurança."
    },
    {
        path: "assets/media/WhatsApp Image 2026-05-21 at 08.58.23 (1).jpeg",
        type: "image",
        title: "Cabeamento Estruturado de Alimentação",
        desc: "Passagem limpa de cabos de força com perfeita fixação mecânica e identificação visual."
    },
    {
        path: "assets/media/WhatsApp Image 2026-05-21 at 08.58.24.jpeg",
        type: "image",
        title: "Montagem de Disjuntores e DRs",
        desc: "Dispositivos diferenciais e disjuntores conectados via pente trifásico, eliminando emendas soltas."
    },
    {
        path: "assets/media/WhatsApp Image 2026-05-21 at 08.58.24 (1).jpeg",
        type: "image",
        title: "Iluminação Cênica Instalada",
        desc: "Fita LED cênica integrada em gesso decorativo sem pontos pretos, luz perfeitamente homogênea."
    },
    {
        path: "assets/media/WhatsApp Image 2026-05-21 at 08.58.24 (2).jpeg",
        type: "image",
        title: "Infraestrutura de Passagem e Distribuição",
        desc: "Caixas de passagem com fiação agrupada organizadamente e anilhamento térmico."
    },
    {
        path: "assets/media/WhatsApp Image 2026-05-21 at 08.58.25.jpeg",
        type: "image",
        title: "Quadro de Disjuntores com Barramento de Neutro e Terra",
        desc: "Separação física de barramentos de Neutro e Terra, minimizando ruídos e surtos na rede."
    },
    {
        path: "assets/media/WhatsApp Image 2026-05-21 at 08.58.25 (1).jpeg",
        type: "image",
        title: "Crimpagem de Terminais Tubulares",
        desc: "Acabamento de pontas de cabos elétricos com terminais de cobre estanhado, evitando pontos quentes."
    },
    {
        path: "assets/media/WhatsApp Image 2026-05-21 at 08.58.26 (1).jpeg",
        type: "image",
        title: "Quadros de Comando e Força",
        desc: "Vista geral de quadros de embutir perfeitamente nivelados e integrados à parede cênica."
    },
    {
        path: "assets/media/WhatsApp Image 2026-05-21 at 08.58.26 (2).jpeg",
        type: "image",
        title: "Mapeamento e Identificação Geral",
        desc: "Diagrama unifilar e etiquetas aplicadas na porta interna do QDC para manutenção facilitada."
    },
    {
        path: "assets/media/WhatsApp Image 2026-05-21 at 08.58.27 (1).jpeg",
        type: "image",
        title: "Barramento Blindado de Cobre",
        desc: "Distribuição perfeita de fases em barramento isolado para evitar arcos elétricos."
    },
    {
        path: "assets/media/WhatsApp Image 2026-05-21 at 08.58.28.jpeg",
        type: "image",
        title: "Cabeamento de Carga Pesada",
        desc: "Alimentação de alta potência instalada com raios de curvatura corretos para cabos rígidos."
    },
    
    // VIDEOS FROM adao/Vídeo
    {
        path: "assets/media/Vídeo/WhatsApp Video 2026-05-21 at 08.58.26.mp4",
        type: "video",
        title: "Tour de Qualidade no QDC BSB",
        desc: "Vídeo mostrando a incrível organização interna de um painel sob teste, provando o acabamento."
    },
    {
        path: "assets/media/Vídeo/WhatsApp Video 2026-05-21 at 08.58.25.mp4",
        type: "video",
        title: "Montagem de Quadro de Distribuição",
        desc: "Processo de encaixe e alinhamento de condutores de cobre rígido nos disjuntores centrais."
    },
    {
        path: "assets/media/Vídeo/WhatsApp Video 2026-05-21 at 08.58.27.mp4",
        type: "video",
        title: "Testes de Carga de Iluminação Dimerizada",
        desc: "Calibração física das luzes dimerizadas via driver industrial sem nenhum ruído visual."
    }
];

/* ==========================================================================
   DOM ELEMENTS
   ========================================================================== */
const menuBtn = document.getElementById('menu-btn');
const navbarMenu = document.querySelector('.nav-menu');
const header = document.getElementById('main-header');
const recipesContainer = document.getElementById('recipes-container');
const searchInput = document.getElementById('cookbook-search');
const filterTabs = document.querySelectorAll('.filter-tab');
const portfolioContainer = document.getElementById('portfolio-grid-container');

// Modal Elements
const recipeModal = document.getElementById('recipe-modal');
const modalCloseBtn = document.getElementById('btn-modal-close');
const modalCategory = document.getElementById('modal-category');
const modalTime = document.getElementById('modal-time');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalProblem = document.getElementById('modal-problem');
const modalIngredients = document.getElementById('modal-ingredients');
const modalInstructionsList = document.getElementById('modal-instructions-list');
const modalMediaContainer = document.getElementById('modal-media-container');
const modalWaCta = document.getElementById('modal-wa-cta');

// Lightbox Elements
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCloseBtn = document.getElementById('btn-lightbox-close');
const lightboxPrevBtn = document.getElementById('btn-lightbox-prev');
const lightboxNextBtn = document.getElementById('btn-lightbox-next');

// Simulator Elements
const simStep1 = document.getElementById('sim-step-1');
const simStepLoading = document.getElementById('sim-step-loading');
const simStepResult = document.getElementById('sim-step-result');
const symptomBtns = document.querySelectorAll('.sim-option-btn');
const terminalSimLog = document.getElementById('terminal-sim-log');
const btnSimReset = document.getElementById('btn-sim-reset');
const btnViewSimRecipe = document.getElementById('btn-view-sim-recipe');
const btnSimWaCta = document.getElementById('btn-sim-wa-cta');
const resultDangerLevel = document.getElementById('result-danger-level');
const resultProbableCause = document.getElementById('result-probable-cause');
const resultAbntLaw = document.getElementById('result-abnt-law');
const resultRecipeTitle = document.getElementById('result-recipe-title');
const resultRecipeDesc = document.getElementById('result-recipe-desc');

let currentActiveRecipeId = null;
let currentLightboxIndex = 0;

/* ==========================================================================
   INITIALIZATION & RENDERING
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    renderRecipes(RECIPES);
    renderPortfolio(PORTFOLIO_ITEMS);
    setupEventListeners();
});

// Sticky Header transition
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '8px 0';
        header.style.background = 'rgba(10, 10, 12, 0.9)';
    } else {
        header.style.padding = '12px 0';
        header.style.background = 'rgba(10, 10, 12, 0.75)';
    }
});

// Render Recipes Cards Grid
function renderRecipes(recipesList) {
    recipesContainer.innerHTML = '';
    
    if (recipesList.length === 0) {
        recipesContainer.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <p>Nenhuma receita encontrada para os critérios selecionados.</p>
            </div>
        `;
        return;
    }
    
    recipesList.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.setAttribute('data-id', recipe.id);
        card.setAttribute('data-category', recipe.category);
        
        card.innerHTML = `
            <div class="card-header-row">
                <span class="card-category">${recipe.categoryLabel}</span>
                <span class="card-time">${recipe.time}</span>
            </div>
            <h3 class="card-title">${recipe.title}</h3>
            <p class="card-desc">${recipe.subtitle}</p>
            <div class="card-tags">
                ${recipe.tags.map(tag => `<span class="card-tag-pill">#${tag}</span>`).join('')}
            </div>
            <div class="card-footer">
                <span style="color: var(--text-muted);">${recipe.difficulty}</span>
                <span class="card-footer-cta">
                    Ver Receita
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" style="transform: translateY(1.5px);">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </span>
            </div>
        `;
        
        card.addEventListener('click', () => openRecipeModal(recipe.id));
        recipesContainer.appendChild(card);
    });
}

// Render Portfolio Grid
function renderPortfolio(items) {
    portfolioContainer.innerHTML = '';
    
    items.forEach((item, index) => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('portfolio-item');
        
        // Add random double height/width for cool masonry layout
        if (index === 0 || index === 5) {
            gridItem.classList.add('double-height');
        } else if (index === 2 || index === 8) {
            gridItem.classList.add('double-width');
        }
        
        let mediaHtml = '';
        if (item.type === 'video') {
            mediaHtml = `
                <video src="${item.path}" class="portfolio-media" muted loop preload="none" playsinline></video>
                <div class="portfolio-video-badge">
                    <span class="video-badge-dot"></span>
                    Vídeo
                </div>
            `;
        } else {
            mediaHtml = `<img src="${item.path}" alt="${item.title}" class="portfolio-media" loading="lazy" decoding="async">`;
        }
        
        gridItem.innerHTML = `
            ${mediaHtml}
            <div class="portfolio-overlay">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            </div>
        `;
        
        // Auto play videos on hover
        if (item.type === 'video') {
            gridItem.addEventListener('mouseenter', () => {
                const video = gridItem.querySelector('video');
                if (video) video.play().catch(() => {});
            });
            gridItem.addEventListener('mouseleave', () => {
                const video = gridItem.querySelector('video');
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            });
        }
        
        gridItem.addEventListener('click', () => openLightbox(index));
        portfolioContainer.appendChild(gridItem);
    });
}

/* ==========================================================================
   FILTERING & SEARCH
   ========================================================================== */
searchInput.addEventListener('input', () => {
    filterAndSearchRecipes();
});

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        filterAndSearchRecipes();
    });
});

function filterAndSearchRecipes() {
    const searchText = searchInput.value.toLowerCase();
    const activeTab = document.querySelector('.filter-tab.active');
    const selectedCategory = activeTab ? activeTab.getAttribute('data-category') : 'all';
    
    const filtered = RECIPES.filter(recipe => {
        const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
        const matchesSearch = recipe.title.toLowerCase().includes(searchText) || 
                              recipe.subtitle.toLowerCase().includes(searchText) ||
                              recipe.problem.toLowerCase().includes(searchText) ||
                              recipe.ingredients.some(i => i.toLowerCase().includes(searchText)) ||
                              recipe.tags.some(t => t.toLowerCase().includes(searchText));
        
        return matchesCategory && matchesSearch;
    });
    
    renderRecipes(filtered);
}

/* ==========================================================================
   MODAL ACTIONS
   ========================================================================== */
function openRecipeModal(id) {
    const recipe = RECIPES.find(r => r.id === id);
    if (!recipe) return;
    
    currentActiveRecipeId = id;
    
    // Populate simple texts
    modalCategory.textContent = recipe.categoryLabel;
    modalTime.textContent = `${recipe.time} | ${recipe.difficulty}`;
    modalTitle.textContent = recipe.title;
    modalSubtitle.textContent = recipe.subtitle;
    modalProblem.textContent = recipe.problem;
    
    // Populate ingredients badges
    modalIngredients.innerHTML = '';
    recipe.ingredients.forEach(ing => {
        const ingPill = document.createElement('span');
        ingPill.classList.add('card-tag-pill');
        ingPill.style.padding = '6px 12px';
        ingPill.style.fontSize = '12px';
        ingPill.textContent = ing;
        modalIngredients.appendChild(ingPill);
    });
    
    // Populate mode steps
    modalInstructionsList.innerHTML = '';
    recipe.instructions.forEach(step => {
        const li = document.createElement('li');
        li.innerHTML = step;
        modalInstructionsList.appendChild(li);
    });
    
    // Populate media showcase (carrossel de fotos/videos)
    modalMediaContainer.innerHTML = '';
    if (recipe.media && recipe.media.length > 0) {
        recipe.media.forEach(filePath => {
            const isVideo = filePath.endsWith('.mp4');
            const elementWrapper = document.createElement('div');
            elementWrapper.style.width = '100%';
            elementWrapper.style.height = '100%';
            elementWrapper.style.position = 'absolute';
            elementWrapper.style.top = '0';
            elementWrapper.style.left = '0';
            elementWrapper.style.display = 'none'; // Will handle slide visibility
            elementWrapper.classList.add('modal-slide-element');
            
            if (isVideo) {
                elementWrapper.innerHTML = `
                    <video src="${filePath}" class="modal-media-element" controls muted preload="none" playsinline style="cursor: pointer;"></video>
                `;
            } else {
                elementWrapper.innerHTML = `
                    <img src="${filePath}" alt="${recipe.title}" class="modal-media-element" loading="lazy" decoding="async">
                `;
            }
            
            // Open in Lightbox on click
            elementWrapper.querySelector('.modal-media-element').addEventListener('click', () => {
                const globalIndex = PORTFOLIO_ITEMS.findIndex(item => item.path === filePath);
                if (globalIndex !== -1) {
                    openLightbox(globalIndex);
                } else {
                    // Fallback to absolute index 0
                    openLightbox(0);
                }
            });
            
            modalMediaContainer.appendChild(elementWrapper);
        });
        
        // Show first slide
        const slides = modalMediaContainer.querySelectorAll('.modal-slide-element');
        if (slides.length > 0) {
            slides[0].style.display = 'block';
            
            // Set simple automatic slider if multiple slides
            if (slides.length > 1) {
                let currentSlide = 0;
                const slideInterval = setInterval(() => {
                    if (!recipeModal.classList.contains('active')) {
                        clearInterval(slideInterval);
                        return;
                    }
                    slides[currentSlide].style.display = 'none';
                    currentSlide = (currentSlide + 1) % slides.length;
                    slides[currentSlide].style.display = 'block';
                }, 4000);
            }
        }
    } else {
        modalMediaContainer.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--text-muted); font-size: 13px;">
                Mídias sendo carregadas...
            </div>
        `;
    }
    
    // Dynamic WhatsApp CTA Link
    const waBase = "https://wa.me/5561996976564?text=";
    const customMessage = `Olá BSB Soluções Elétricas! Vi a sua receita técnica de "${recipe.title}" no site e gostaria de solicitar um orçamento para um serviço similar no meu imóvel.`;
    modalWaCta.href = waBase + encodeURIComponent(customMessage);
    
    // Open Modal
    recipeModal.classList.add('active');
    recipeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevents background scrolling
}

function closeRecipeModal() {
    recipeModal.classList.remove('active');
    recipeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

/* ==========================================================================
   LIGHTBOXACTIONS
   ========================================================================== */
function openLightbox(index) {
    currentLightboxIndex = index;
    const item = PORTFOLIO_ITEMS[index];
    if (!item) return;
    
    lightboxContent.innerHTML = '';
    
    if (item.type === 'video') {
        lightboxContent.innerHTML = `
            <video src="${item.path}" controls autoplay playsinline style="width: 100%; max-height: 75vh;"></video>
        `;
    } else {
        lightboxContent.innerHTML = `
            <img src="${item.path}" alt="${item.title}" decoding="async">
        `;
    }
    
    lightboxCaption.textContent = `${item.title} - ${item.desc}`;
    
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    
    // If modal recipe is active, keep overflow hidden, else restore
    if (!recipeModal.classList.contains('active')) {
        document.body.style.overflow = '';
    }
    
    // Stop playing video inside lightbox on close
    const video = lightboxContent.querySelector('video');
    if (video) video.pause();
}

function navigateLightbox(direction) {
    currentLightboxIndex = (currentLightboxIndex + direction + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    openLightbox(currentLightboxIndex);
}

/* ==========================================================================
   INTERACTIVE SIMULATOR DIAGNOSIS MACHINE
   ========================================================================== */
symptomBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const symptom = btn.getAttribute('data-symptom');
        runElectricalDiagnosis(symptom);
    });
});

function runElectricalDiagnosis(symptom) {
    // Hide Step 1, Show Loading Step
    simStep1.classList.remove('active');
    simStepLoading.classList.add('active');
    
    // Simulator terminal sequence logic (Aesthetics)
    const logs = [
        "Iniciando varredura e triagem da rede...",
        "Calculando impedância do circuito de distribuição...",
        "Analisando isolamento físico de cabos alimentadores...",
        "Correlacionando anomalias térmicas com normas técnicas...",
        "Análise concluída com base na NBR 5410 da ABNT!"
    ];
    
    let logIndex = 0;
    terminalSimLog.textContent = logs[0];
    
    const interval = setInterval(() => {
        logIndex++;
        if (logIndex < logs.length) {
            terminalSimLog.textContent += `\n> ${logs[logIndex]}`;
            terminalSimLog.scrollTop = terminalSimLog.scrollHeight;
        } else {
            clearInterval(interval);
            showDiagnosisReport(symptom);
        }
    }, 800);
}

function showDiagnosisReport(symptom) {
    let danger = "Risco Moderado";
    let cause = "";
    let abnt = "";
    let recipeId = "";
    let recipeTitle = "";
    let recipeDesc = "";
    
    if (symptom === 'luz-piscando') {
        danger = "Alerta Térmico (Baixo Risco)";
        cause = "Incompatibilidade eletrônica de modulação de fase nos drivers de LED com a rede elétrica, gerando ruído indutivo residual ou distorção harmônica.";
        abnt = "NBR 5410 - Item 6.2.2 (Compatibilidade eletromagnética e harmônicos geradores de flicker).";
        recipeId = "iluminacao-cenica";
        recipeTitle = RECIPES[0].title;
        recipeDesc = RECIPES[0].subtitle;
    } else if (symptom === 'disjuntor-caindo') {
        danger = "Perigo Crítico (Alto Risco)";
        cause = "Fuga de corrente de fase para terra ou aquecimento excessivo por conexões frouxas nos bornes dos disjuntores antigos (efeito Joule), superando o limite térmico mecânico.";
        abnt = "NBR 5410 - Item 6.2.5 (Segurança contra sobrecorrentes e proteção de condutores contra fadiga de isolamento).";
        recipeId = "paineis-qdc";
        recipeTitle = RECIPES[1].title;
        recipeDesc = RECIPES[1].subtitle;
    } else if (symptom === 'queima-chuva') {
        danger = "Perigo de Curto (Risco Elevado)";
        cause = "Falta de equipotencialização de terra (malha ineficiente) e ausência de dispositivos de atenuação de transientes na entrada de energia, deixando a fiação exposta a raios.";
        abnt = "NBR 5410 - Item 5.4.2 (Instalação e dimensionamento de Dispositivos de Proteção contra Surtos - DPS).";
        recipeId = "protecao-aterramento";
        recipeTitle = RECIPES[2].title;
        recipeDesc = RECIPES[2].subtitle;
    } else if (symptom === 'modernizar-qdc') {
        danger = "Risco Moderado";
        cause = "Desgaste mecânico por fadiga natural da cobertura plástica protetora dos cabos e fiação, além de desbalanço estrutural de disjuntores não balanceados nas fases.";
        abnt = "NBR 5410 - Item 6.5.3 (Processo de retrofit e manutenção geral preventiva de instalações elétricas antigas).";
        recipeId = "termografia-laudos";
        recipeTitle = RECIPES[3].title;
        recipeDesc = RECIPES[3].subtitle;
    }
    
    // Populate elements
    resultDangerLevel.textContent = danger;
    
    // Style danger badge
    resultDangerLevel.className = "badge";
    if (danger.includes("Crítico") || danger.includes("Elevado")) {
        resultDangerLevel.classList.add("badge-gold");
        resultDangerLevel.style.background = "#FF5F56";
        resultDangerLevel.style.color = "#FFFFFF";
    } else {
        resultDangerLevel.classList.add("badge-gold");
    }
    
    resultProbableCause.textContent = cause;
    resultAbntLaw.textContent = abnt;
    resultRecipeTitle.textContent = recipeTitle;
    resultRecipeDesc.textContent = recipeDesc;
    
    // Hook details view btn
    btnViewSimRecipe.onclick = () => {
        closeLightbox();
        openRecipeModal(recipeId);
    };
    
    // Dynamic WhatsApp Link
    const waBase = "https://wa.me/5561996976564?text=";
    const customMessage = `Olá Adão! Usei o Simulador de Diagnóstico BSB e foi detectado um sintoma de "${symptom === 'luz-piscando' ? 'Instabilidade de Luz / Flicker' : symptom === 'disjuntor-caindo' ? 'Disjuntores desarmando / Sobrecarga' : symptom === 'queima-chuva' ? 'Queima por Surtos / Raios' : 'Modernização Geral (Retrofit)'}". Gostaria de agendar uma visita técnica técnica urgente para emitir um diagnóstico completo.`;
    btnSimWaCta.href = waBase + encodeURIComponent(customMessage);
    
    // Hide Loading, Show Result
    simStepLoading.classList.remove('active');
    simStepResult.classList.add('active');
    
    // Google Tag Conversion: Simulator completed
    trackConversion('diagnosis_completed', `Simulador: ${symptom}`);
}

btnSimReset.addEventListener('click', () => {
    simStepResult.classList.remove('active');
    simStep1.classList.add('active');
    terminalSimLog.textContent = "Iniciando varredura...";
});

/* ==========================================================================
   EVENT LISTENERS SETUP & CONVERSION TRACKING
   ========================================================================== */
function setupEventListeners() {
    // Menu mobile toggle
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        navbarMenu.classList.toggle('mobile-active');
    });
    
    // Close mobile menu on click link
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            menuBtn.classList.remove('open');
            navbarMenu.classList.remove('mobile-active');
            
            // Set active class
            document.querySelectorAll('.nav-item').forEach(t => t.classList.remove('active'));
            item.classList.add('active');
        });
    });
    
    // Quick Quote Express Form Handler
    const quickQuoteForm = document.getElementById('quick-quote-form');
    if (quickQuoteForm) {
        quickQuoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('lead-name').value.trim();
            const phone = document.getElementById('lead-phone').value.trim();
            const service = document.getElementById('lead-service').value;
            const bairro = document.getElementById('lead-bairro').value.trim();
            
            // Trigger Google Tag conversion
            trackConversion('lead_form_submitted', `Form Lead: ${service}`);
            
            const message = `Olá Engenheiro Adão! Solicito orçamento técnico pelo site da BSB Elétrica:\n\n👤 *Nome:* ${name}\n📱 *WhatsApp:* ${phone}\n⚡ *Serviço:* ${service}\n📍 *Região/Bairro:* ${bairro}`;
            const targetUrl = `https://wa.me/5561996976564?text=${encodeURIComponent(message)}`;
            
            // Open WhatsApp in new tab
            window.open(targetUrl, '_blank');
        });
    }

    // Attach tracking to conversion buttons
    const conversionButtons = [
        { id: 'top-bar-phone', action: 'phone_call_click', label: 'Top Bar Phone' },
        { id: 'btn-header-call', action: 'phone_call_click', label: 'Header Call Button' },
        { id: 'btn-header-wa', action: 'whatsapp_click', label: 'Header WhatsApp' },
        { id: 'btn-hero-wa', action: 'whatsapp_click', label: 'Hero WhatsApp' },
        { id: 'btn-sim-wa-cta', action: 'whatsapp_click', label: 'Simulator Result WhatsApp' },
        { id: 'modal-wa-cta', action: 'whatsapp_click', label: 'Recipe Modal WhatsApp' },
        { id: 'btn-portfolio-wa', action: 'whatsapp_click', label: 'Portfolio Section WhatsApp' },
        { id: 'btn-sobre-wa', action: 'whatsapp_click', label: 'About Section WhatsApp' },
        { id: 'btn-faq-wa', action: 'whatsapp_click', label: 'FAQ Section WhatsApp' },
        { id: 'floating-whatsapp', action: 'whatsapp_click', label: 'Floating WhatsApp' },
        { id: 'sticky-btn-call', action: 'phone_call_click', label: 'Mobile Sticky Call' },
        { id: 'sticky-btn-wa', action: 'whatsapp_click', label: 'Mobile Sticky WhatsApp' }
    ];

    conversionButtons.forEach(btnConfig => {
        const el = document.getElementById(btnConfig.id);
        if (el) {
            el.addEventListener('click', () => {
                trackConversion(btnConfig.action, btnConfig.label);
            });
        }
    });

    // Modal close hooks
    modalCloseBtn.addEventListener('click', closeRecipeModal);
    recipeModal.addEventListener('click', (e) => {
        if (e.target === recipeModal) closeRecipeModal();
    });
    
    // Lightbox close hooks
    lightboxCloseBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    lightboxPrevBtn.addEventListener('click', () => navigateLightbox(-1));
    lightboxNextBtn.addEventListener('click', () => navigateLightbox(1));
    
    // Key listeners (Esc to close, arrows for lightbox)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
            closeRecipeModal();
        }
        if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
        }
    });
}
