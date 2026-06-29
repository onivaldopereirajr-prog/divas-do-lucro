import './App.css'

const problemCards = [
  'Não sei se estou tendo lucro.',
  'Misturo dinheiro pessoal com o do negócio.',
  'Tenho dificuldade para precificar.',
  'Não acompanho minhas metas.',
  'Faço tudo sozinha e sem método.',
]

const solutionCards = [
  { title: 'Diagnóstico do negócio', text: 'Mapeie a fase atual do seu negócio e veja prioridades claras para organizar a rotina.' },
  { title: 'Calculadora de preço', text: 'Considere custos, tempo, margem e contexto para chegar a preços mais conscientes.' },
  { title: 'Controle financeiro', text: 'Registre receitas e despesas de forma simples, sem planilhas confusas.' },
  { title: 'Metas semanais', text: 'Transforme objetivos grandes em pequenas ações acompanháveis durante a semana.' },
  { title: 'Relatórios simples', text: 'Entenda sua evolução com indicadores diretos, visuais e fáceis de interpretar.' },
  { title: 'Recomendações com IA', text: 'Receba próximos passos personalizados com linguagem acessível e foco educativo.' },
]

const journeySteps = [
  { level: 'Nível 1', title: 'Organizar', text: 'Separar dinheiro pessoal, listar custos e registrar movimentos.' },
  { level: 'Nível 2', title: 'Precificar', text: 'Montar preços com base em custos, tempo, valor e margem planejada.' },
  { level: 'Nível 3', title: 'Vender', text: 'Criar metas, acompanhar pedidos e entender o que sustenta as vendas.' },
  { level: 'Nível 4', title: 'Crescer', text: 'Ler relatórios, ajustar rotas e fortalecer decisões com dados simples.' },
  { level: 'Nível 5', title: 'Planejar', text: 'Definir próximos ciclos, reservas, melhorias e novas oportunidades.' },
]

const contentCards = [
  'Como saber se estou tendo lucro?',
  'Como separar dinheiro pessoal e do negócio?',
  'Como precificar sem medo?',
  'Como criar metas simples para vender mais?',
]

const planCards = [
  { title: 'Plano gratuito de teste', text: 'Acesso inicial para experimentar diagnóstico, trilhas e controles essenciais.' },
  { title: 'Plano Premium futuro', text: 'Recursos avançados planejados para relatórios, automações e acompanhamento ampliado.' },
  { title: 'Parcerias para impacto social', text: 'Modelos de apoio para comunidades, coletivos e programas de empreendedorismo feminino.' },
]

const metrics = [
  { label: 'Receitas organizadas', value: 'R$ 4.280' },
  { label: 'Meta da semana', value: '72%' },
  { label: 'Preço sugerido', value: 'R$ 68,90' },
  { label: 'Lucro estimado', value: 'Indicativo' },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Cabeçalho principal">
        <a className="brand" href="#inicio" aria-label="Divas do Lucro - início">
          <span className="brand-mark" aria-hidden="true">
            <span>D</span>
            <span>L</span>
          </span>
          <span className="brand-name">
            <span>Divas do</span>
            <strong>Lucro</strong>
          </span>
        </a>

        <nav className="main-nav" aria-label="Menu principal">
          <a href="#inicio">Início</a>
          <a href="#plataforma">Plataforma</a>
          <a href="#jornada">Jornada</a>
          <a href="#conteudos">Conteúdos</a>
          <a href="#planos">Planos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-action" href="#contato">Entrar</a>
      </header>

      <main>
        <section className="hero-section section" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Gestão, educação e rotina empreendedora</p>
            <h1>Transforme seu negócio em uma rotina de lucro.</h1>
            <p className="hero-subtitle">
              O Divas do Lucro ajuda mulheres empreendedoras a organizar finanças,
              precificar melhor, acompanhar metas e tomar decisões com mais segurança.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#jornada">Começar minha jornada</a>
              <a className="button button-secondary" href="#plataforma">Conhecer a plataforma</a>
            </div>
          </div>

          <aside className="metrics-card" aria-label="Resumo visual de métricas fictícias">
            <div className="metrics-card-header">
              <span>Visão da semana</span>
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
              Indicadores educativos para apoiar decisões. Resultados dependem da realidade de cada negócio.
            </p>
          </aside>
        </section>

        <section className="section problem-section" aria-labelledby="problema-title">
          <div className="section-heading">
            <p className="eyebrow">Problema</p>
            <h2 id="problema-title">Empreender não deveria ser um salto no escuro.</h2>
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
            <p className="eyebrow">Solução</p>
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
            <h2 id="jornada-title">Evolua com missões, metas e conquistas.</h2>
            <p>
              Cada nível combina aprendizado prático, tarefas de organização e pequenas vitórias acompanhadas no painel.
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
            <p className="eyebrow">Conteúdos</p>
            <h2 id="conteudos-title">Aprenda o essencial para decidir com clareza.</h2>
          </div>
          <div className="content-grid">
            {contentCards.map((title) => (
              <article className="content-card" key={title}>
                <span>Guia prático</span>
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
            Esta é uma prévia de produto. Pagamentos reais e assinaturas exigirão backend seguro.
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
          <p>Plataforma de educação e gestão para mulheres empreendedoras</p>
        </div>
        <nav aria-label="Links do rodapé">
          <a href="#plataforma">Plataforma</a>
          <a href="#conteudos">Conteúdos</a>
          <a href="#contato">Contato</a>
          <a href="#privacidade">Privacidade</a>
        </nav>
        <p>Ferramenta educacional. Não substitui consultoria contábil, financeira ou jurídica.</p>
        <small>Copyright 2026 Divas do Lucro. Todos os direitos reservados.</small>
      </footer>
    </div>
  )
}

export default App
