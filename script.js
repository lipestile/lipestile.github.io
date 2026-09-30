/**
 * PORTFOLIO INTERATIVO - TOTVS FULL STACK & DATA ANALYTICS
 * Scripts de interatividade, Terminal Dev, Efeitos Spotlight e Canvas
 */

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundCanvas();
  initSpotlightCards();
  initTerminal();
  initCopyEmail();
  initScrollHeader();
});

/* ==========================================================================
   1. CANVAS DE REDE DE DADOS & ERP NODES (FLUIDO E ULTRA-LEVE)
   ========================================================================== */
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Gerador de nós simulando tráfego de dados e conexões de APIs
  const numNodes = Math.min(Math.floor(width / 35), 45);
  const nodes = [];

  for (let i = 0; i < numNodes; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.6 + 0.8,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Desenhar conexões entre nós próximos
    for (let i = 0; i < nodes.length; i++) {
      const nodeA = nodes[i];

      // Mover nós
      nodeA.x += nodeA.vx;
      nodeA.y += nodeA.vy;

      if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
      if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

      // Desenhar nó
      ctx.beginPath();
      ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(212, 175, 55, 0.25)';
      ctx.fill();

      for (let j = i + 1; j < nodes.length; j++) {
        const nodeB = nodes[j];
        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(nodeB.x, nodeB.y);
          ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. SPOTLIGHT EFFECT NOS CARDS (ILUMINAÇÃO BASEADA NA POSIÇÃO DO MOUSE)
   ========================================================================== */
function initSpotlightCards() {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   3. TERMINAL DEV INTERATIVO (EXPERIÊNCIA TÉCNICA)
   ========================================================================== */
function initTerminal() {
  const form = document.getElementById('terminal-form');
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');

  if (!form || !input || !output) return;

  const COMMANDS = {
    help: `
<div class="text-gold-300 font-semibold mb-1">Comandos Disponíveis:</div>
  <span class="text-emerald-400">skills</span>     - Lista detalhada de habilidades técnicas
  <span class="text-emerald-400">totvs</span>      - Competências em TOTVS Protheus, ADVPL e TL++
  <span class="text-emerald-400">fluig</span>      - Soluções de BPM, ECM, WCM e Workflows
  <span class="text-emerald-400">python</span>     - Arquitetura de Dados, ETL e Pandas
  <span class="text-emerald-400">stack</span>      - Resumo completo da stack Full Stack & Data
  <span class="text-emerald-400">cases</span>      - Projetos e soluções corporativas entregues
  <span class="text-emerald-400">whoami</span>     - Resumo do perfil profissional
  <span class="text-emerald-400">contact</span>    - Formas diretas de contato
  <span class="text-emerald-400">clear</span>      - Limpa o console
`,
    skills: `
<div class="text-gold-300 font-semibold mb-1">Matriz de Habilidades:</div>
  &bull; <span class="text-gold-200">TOTVS & ERP:</span> ADVPL, TL++, Protheus (Compras, Faturamento, Estoque, Financeiro), APIs REST, PO-UI
  &bull; <span class="text-cyan-300">Fluig:</span> Workflows BPMN, Formulários responsivos, Scripts de Eventos, Datasets, WCM
  &bull; <span class="text-indigo-300">Data Analytics:</span> Python 3, Pandas, NumPy, ETL Pipelines, Dashboards, Automações
  &bull; <span class="text-emerald-300">Bancos de Dados:</span> SQL Server, Oracle, PostgreSQL, Queries complexas e otimização
  &bull; <span class="text-purple-300">Full Stack Web:</span> JavaScript (ES6+), TypeScript, Node.js, RESTful APIs, Git, Docker
`,
    totvs: `
<div class="text-gold-300 font-semibold mb-1">TOTVS Protheus Expertise:</div>
  - Desenvolvimento robusto em <span class="text-gold-200">ADVPL e TL++ (Orientado a Objetos)</span>
  - Construção de endpoints REST nativos para consumo de e-commerce e portais externos
  - Customizações de pontos de entrada (PEs), rotinas automáticas (ExecAuto), telas MVC
  - Conhecimento em regras de negócio nos módulos chave do ERP
  - Diagnóstico, manutenção de base de dados e tunning de performance no Protheus
`,
    fluig: `
<div class="text-cyan-300 font-semibold mb-1">Fluig Plataforma & Workflows:</div>
  - Modelagem e automação de processos complexos de negócio em <span class="text-cyan-200">BPM</span>
  - Criação de formulários avançados com validações personalizadas e layout dinâmico
  - Desenvolvimento de scripts de eventos (beforeStateEntry, calculateAgreement, afterProcessFinish)
  - Integração bidirecional Fluig &harr; TOTVS Protheus via Datasets e Web Services
  - Personalização de páginas e widgets corporativos no WCM
`,
    python: `
<div class="text-indigo-300 font-semibold mb-1">Python & Engenharia / Análise de Dados:</div>
  - Extração de grandes volumes de dados (ETL) direto das tabelas do Protheus / Bancos SQL
  - Limpeza, tratamento e agregação estatística com <span class="text-indigo-200">Pandas & NumPy</span>
  - Automação de tarefas operacionais, conciliações financeiras e disparo de relatórios
  - Construção de pipelines de dados confiáveis e rotinas agendadas (Cron / Task Scheduler)
`,
    stack: `
<div class="text-zinc-200 font-semibold mb-1">Resumo da Stack:</div>
  [ERP]    TOTVS Protheus | Fluig | ADVPL | TL++ | PO-UI
  [DATA]   Python | Pandas | SQL Server | Oracle | ETL Pipelines
  [WEB]    JavaScript | TypeScript | Node.js | REST APIs | TailwindCSS
  [TOOLS]  Git | GitHub | Postman | VS Code (TDS) | Docker
`,
    cases: `
<div class="text-gold-300 font-semibold mb-1">Casos de Sucesso em Destaque:</div>
  1. <span class="text-gold-200">Integração REST ERP Protheus:</span> Sincronização automatizada de faturamento com e-commerce externo.
  2. <span class="text-cyan-200">Esteira Fluig de Compras:</span> Redução de 70% no tempo de aprovação de alçadas com regras dinâmicas.
  3. <span class="text-indigo-200">Pipeline Python de Auditoria:</span> Detecção automática de inconsistências de estoque e impostos via Pandas.
  4. <span class="text-emerald-200">Portal Operacional PO-UI:</span> Interface web ágil para operadores com backend integrado via API REST.
`,
    whoami: `
<div class="text-gold-300 font-semibold">Perfil Profissional:</div>
  Desenvolvedor Full Stack TOTVS e Analista de Dados.
  Focado em transformar processos manuais lentos em sistemas automatizados, eficientes e escaláveis.
`,
    contact: `
<div class="text-gold-300 font-semibold mb-1">Contatos Oficiais:</div>
  &bull; <span class="text-zinc-400">E-mail:</span> Clique no botão "Copiar E-mail" na seção de contato
  &bull; <span class="text-zinc-400">WhatsApp:</span> Disponível no link direto abaixo
  &bull; <span class="text-zinc-400">GitHub & LinkedIn:</span> Perfis profissionais disponíveis no rodapé
`
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const rawValue = input.value.trim();
    if (!rawValue) return;

    handleCommand(rawValue);
    input.value = '';
  });

  window.runQuickCommand = function (cmd) {
    handleCommand(cmd);
    input.focus();
  };

  function handleCommand(cmd) {
    const cleanCmd = cmd.toLowerCase().trim();

    if (cleanCmd === 'clear') {
      output.innerHTML = `
        <div class="text-zinc-500">
          Terminal limpo. Digite <span class="text-gold-300">help</span> para comandos disponíveis.
        </div>
      `;
      return;
    }

    // Criar linha de entrada digitada
    const inputLine = document.createElement('div');
    inputLine.innerHTML = `<span class="text-emerald-400">➜</span> <span class="text-cyan-400">~</span> <span class="text-white">${escapeHtml(cmd)}</span>`;
    output.appendChild(inputLine);

    // Criar resposta
    const responseLine = document.createElement('div');
    if (COMMANDS[cleanCmd]) {
      responseLine.innerHTML = COMMANDS[cleanCmd];
    } else {
      responseLine.innerHTML = `
        <span class="text-red-400">zsh: command not found: ${escapeHtml(cmd)}</span><br/>
        <span class="text-zinc-500">Digite <span class="text-gold-300">help</span> para ver os comandos suportados.</span>
      `;
    }
    output.appendChild(responseLine);

    // Scroll automático
    output.scrollTop = output.scrollHeight;

    // Recriar ícones se existirem novos elementos
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function escapeHtml(text) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }
}

/* ==========================================================================
   4. CÓPIA RÁPIDA DE E-MAIL COM TOAST NOTIFICATION
   ========================================================================== */
function initCopyEmail() {
  const btn = document.getElementById('copy-email-btn');
  const btnText = document.getElementById('copy-email-text');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  if (!btn) return;

  btn.addEventListener('click', async () => {
    const emailToCopy = btn.getAttribute('data-email') || 'seu.email@exemplo.com';

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = emailToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      showToast(`E-mail copiado: ${emailToCopy}`);
      if (btnText) {
        btnText.textContent = 'Copiado com Sucesso!';
        setTimeout(() => {
          btnText.textContent = 'Copiar E-mail';
        }, 3000);
      }
    } catch (err) {
      showToast('Não foi possível copiar automaticamente.');
    }
  });

  function showToast(msg) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = msg;

    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 3200);
  }
}

/* ==========================================================================
   5. HEADER BLUR E SOMBRA AO ROLAR A PÁGINA
   ========================================================================== */
function initScrollHeader() {
  const header = document.querySelector('header > div');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-black/60', 'border-gold-500/20');
    } else {
      header.classList.remove('shadow-black/60', 'border-gold-500/20');
    }
  });
}
