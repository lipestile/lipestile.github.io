# 🏛️ Landing Page & Portfolio High-End: TOTVS Full Stack & Data Analytics

Uma landing page profissional, minimalista e luxuosa desenvolvida especialmente para destacar um perfil técnico de alto impacto: **Desenvolvedor Full Stack TOTVS (Protheus & Fluig)** e **Analista / Engenheiro de Dados com Python**.

---

## ✨ Destaques Visuais & Técnicos ("Bafônica")

- **Estética High-End Dark Luxury**: Tons profundos de carbono (`#08080c`), acentos em ouro champanhe e ciano cibernético, tipografia editorial moderna (*Syne* + *Plus Jakarta Sans* + *JetBrains Mono*).
- **Background Dinâmico Interativo**: Canvas com constelação de nós conectando fluxos de dados do ERP em tempo real.
- **Spotlight Cards com Mouse Tracker**: Efeito de iluminação radial sobre os cards que reage ao movimento do cursor.
- **Terminal CLI Interativo**: Terminal estilo Unix onde recrutadores e líderes técnicos podem digitar comandos como `skills`, `totvs`, `fluig`, `python`, `cases`, `stack`, `contact`.
- **Showcase de Casos Reais**: Seção pronta para apresentar integrações REST no Protheus, automação de fluxos BPM no Fluig, pipelines ETL com Pandas e portais modernos com PO-UI.
- **Matriz de Competências**: Barras visuais e métricas de proficiência técnica.
- **Card de Contato & 1-Click Copy**: Botão inteligente que copia o e-mail com feedback via Toast Notification, além de links rápidos para WhatsApp, LinkedIn e GitHub.
- **Zero Dependências Pesadas**: HTML5, CSS3, Tailwind CSS (via CDN) e JavaScript nativo puro. Carrega em milissegundos e funciona perfeitamente no GitHub Pages!

---

## 🚀 Como Publicar no GitHub Pages (2 Minutos)

Existem duas formas fáceis de colocar sua página no ar gratuitamente:

### Opção 1: Seu site principal do GitHub (`lipestile.github.io`) [Recomendado]

1. Crie um novo repositório no seu GitHub com o nome exato:
   ```text
   lipestile.github.io
   ```

2. No terminal da sua máquina, dentro desta pasta (`/Users/aluno1/.gemini/antigravity/scratch/portfolio-totvs-data`), execute:
   ```bash
   ./deploy.sh
   ```
   *(Ou manualmente: `git push -u origin main`)*

3. Pronto! Em instantes seu portfólio estará no ar no endereço oficial:  
   👉 **`https://lipestile.github.io`**

---

## 🛠️ Como Personalizar Seus Dados

Abra o arquivo [`index.html`](file:///Users/aluno1/.gemini/antigravity/scratch/portfolio-totvs-data/index.html) e ajuste os campos:

1. **Seu Nome e Título**:
   - Linha 36: Ajuste a logo/nome no header (`Dev • Analytics`).
   - Linha 67: Ajuste a chamada de apresentação principal.

2. **Seu E-mail e Redes Sociais**:
   - Linha 355: No botão `#copy-email-btn`, troque `data-email="seu.email@exemplo.com"` pelo seu e-mail real.
   - Linha 365: No botão do WhatsApp, troque `href="https://wa.me/"` pelo seu link direto (ex: `https://wa.me/5511999999999`).
   - Linhas 375 e 385: Coloque seus links reais do LinkedIn e GitHub.

---

## 📂 Estrutura de Arquivos

```
portfolio-totvs-data/
├── index.html     # Marcação semântica, seções e componentes da página
├── styles.css     # Design system Dark Luxury, spotlight effect e animações
├── script.js      # Terminal interativo, canvas de dados e feedback de cópia
└── README.md      # Instruções de uso e deploy no GitHub Pages
```
