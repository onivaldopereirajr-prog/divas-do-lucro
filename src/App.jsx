import './App.css'

const problemCards = [
  'Nao sei se estou tendo lucro.',
  'Misturo dinheiro pessoal com o do negocio.',
  'Tenho dificuldade para precificar.',
  'Nao acompanho minhas metas.',
  'Faco tudo sozinha e sem metodo.',
]

const solutionCards = [
  { title: 'Diagnostico do negocio', text: 'Mapeie a fase atual do seu negocio e veja prioridades claras para organizar a rotina.' },
  { title: 'Calculadora de preco', text: 'Considere custos, tempo, margem e contexto para chegar a precos mais conscientes.' },
  { title: 'Controle financeiro', text: 'Registre receitas e despesas de forma simples, sem planilhas confusas.' },
  { title: 'Metas semanais', text: 'Transforme objetivos grandes em pequenas acoes acompanhaveis durante a semana.' },
  { title: 'Relatorios simples', text: 'Entenda sua evolucao com indicadores diretos, visuais e faceis de interpretar.' },
  { title: 'Recomendacoes com IA', text: 'Receba proximos passos personalizados com linguagem acessivel e foco educativo.' },
]

const journeySteps = [
  { level: 'Nivel 1', title: 'Organizar', text: 'Separar dinheiro pessoal, listar custos e registrar movimentos.' },
  { level: 'Nivel 2', title: 'Precificar', text: 'Montar precos com base em custos, tempo, valor e margem planejada.' },
  { level: 'Nivel 3', title: 'Vender', text: 'Criar metas, acompanhar pedidos e entender o que sustenta as vendas.' },
  { level: 'Nivel 4', title: 'Crescer', text: 'Ler relatorios, ajustar rotas e fortalecer decisoes com dados simples.' },
  { level: 'Nivel 5', title: 'Planejar', text: 'Definir proximos ciclos, reservas, melhorias e novas oportunidades.' },
]

const contentCards = [
  'Como saber se estou tendo lucro?',
  'Como separar dinheiro pessoal e do negocio?',
  'Como precificar sem medo?',
  'Como criar metas simples para vender mais?',
]

const planCards = [
  { title: 'Plano gratuito de teste', text: 'Acesso inicial para experimentar diagnostico, trilhas e controles essenciais.' },
  { title: 'Plano Premium futuro', text: 'Recursos avancados planejados para relatorios, automacoes e acompanhamento ampliado.' },
  { title: 'Parcerias para impacto social', text: 'Modelos de apoio para comunidades, coletivos e programas de empreendedorismo feminino.' },
]

const metrics = [
  { label: 'Receitas organizadas', value: 'R$ 4.280' },
  { label: 'Meta da semana', value: '72%' },
  { label: 'Preco sugerido', value: 'R$ 68,90' },
  { label: 'Lucro estimado', value: 'Indicativo' },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Cabecalho principal">
        <a className="brand" href="#inicio" aria-label="Divas do Lucro - inicio">
          <span className="brand-mark" aria-hidden="true">DL</span>
          <span className="brand-name">Divas do Lucro</span>
        </a>

        <nav className="main-nav" aria-label="Menu principal">
          <a href="#inicio">Inicio</a>
          <a href="#plataforma">Plataforma</a>
          <a href="#jornada">Jornada</a>
          <a href="#conteudos">Conteudos</a>
          <a href="#planos">Planos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-action" href="#contato">Entrar</a>
      </header>

      <main>
        <section className="hero-section section" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Gestao, educacao e rotina empreendedora</p>
            <h1>Transforme seu negocio em uma rotina de lucro.</h1>
            <p className="hero-subtitle">
              O Divas do Lucro ajuda mulheres empreendedoras a organizar financas,
              precificar melhor, acompanhar metas e tomar decisoes com mais seguranca.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#jornada">Comecar minha jornada</a>
              <a className="button button-secondary" href="#plataforma">Conhecer a plataforma</a>
            </div>
          </div>

          <aside className="metrics-card" aria-label="Resumo visual de metricas ficticias">
            <div className="metrics-card-header">
              <span>Visao da semana</span>
              <strong>Dados exemplo</strong>
            </div>
            <div className="metrics-grid">
              {metrics.map((metric) => (
                <div className="metric-item" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
            <p className="metric-note">
              Indicadores educativos para apoiar decisoes. Resultados dependem da realidade de cada negocio.
            </p>
          </aside>
        </section>

        <section className="section problem-section" aria-labelledby="problema-title">
          <div className="section-heading">
            <p className="eyebrow">Problema</p>
            <h2 id="problema-title">Empreender nao deveria ser um salto no escuro.</h2>
          </div>
          <div className="problem-grid">
            {problemCards.map((item) => (
              <article className="compact-card" key={item}>
                <span className="card-dot" aria-hidden="true"></span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="plataforma" aria-labelledby="plataforma-title">
          <div className="section-heading">
            <p className="eyebrow">Solucao</p>
            <h2 id="plataforma-title">Uma plataforma para organizar, aprender e crescer.</h2>
          </div>
          <div className="feature-grid">
            {solutionCards.map((card) => (
              <article className="feature-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section journey-section" id="jornada" aria-labelledby="jornada-title">
          <div className="section-heading">
            <p className="eyebrow">Jornada gamificada</p>
            <h2 id="jornada-title">Evolua com missoes, metas e conquistas.</h2>
            <p>
              Cada nivel combina aprendizado pratico, tarefas de organizacao e pequenas vitorias acompanhadas no painel.
            </p>
          </div>
          <div className="journey-track">
            {journeySteps.map((step, index) => (
              <article className="journey-step" key={step.title}>
                <span className="step-number" aria-hidden="true">{index + 1}</span>
                <p>{step.level}</p>
                <h3>{step.title}</h3>
                <span>{step.text}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="conteudos" aria-labelledby="conteudos-title">
          <div className="section-heading">
            <p className="eyebrow">Conteudos</p>
            <h2 id="conteudos-title">Aprenda o essencial para decidir com clareza.</h2>
          </div>
          <div className="content-grid">
            {contentCards.map((title) => (
              <article className="content-card" key={title}>
                <span>Guia pratico</span>
                <h3>{title}</h3>
                <a href="#contato" aria-label={`Manifestar interesse em: ${title}`}>Quero ler</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section plans-section" id="planos" aria-labelledby="planos-title">
          <div className="section-heading">
            <p className="eyebrow">Planos</p>
            <h2 id="planos-title">Modelos pensados para testar, evoluir e ampliar impacto.</h2>
          </div>
          <div className="plans-grid">
            {planCards.map((plan) => (
              <article className="plan-card" key={plan.title}>
                <h3>{plan.title}</h3>
                <p>{plan.text}</p>
              </article>
            ))}
          </div>
          <p className="product-preview-note">
            Esta e uma previa de produto. Pagamentos reais e assinaturas exigirao backend seguro.
          </p>
        </section>

        <section className="final-cta section" id="contato" aria-labelledby="cta-title">
          <div>
            <p className="eyebrow">Contato</p>
            <h2 id="cta-title">Sua jornada empreendedora pode ser mais leve, organizada e lucrativa.</h2>
          </div>
          <a className="button button-primary" href="mailto:contato@divasdolucro.com">
            Quero conhecer o Divas do Lucro
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Divas do Lucro</strong>
          <p>Plataforma de educacao e gestao para mulheres empreendedoras</p>
        </div>
        <nav aria-label="Links do rodape">
          <a href="#plataforma">Plataforma</a>
          <a href="#conteudos">Conteudos</a>
          <a href="#contato">Contato</a>
          <a href="#privacidade">Privacidade</a>
        </nav>
        <p>Ferramenta educacional. Nao substitui consultoria contabil, financeira ou juridica.</p>
        <small>Copyright 2026 Divas do Lucro. Todos os direitos reservados.</small>
      </footer>
    </div>
  )
}

export default App
