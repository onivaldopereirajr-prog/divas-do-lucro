import './App.css'

const heroTags = [
  'Startup EdTech',
  'Plataforma gamificada',
  'Apoio com IA',
  'Mulheres cis e trans',
  'Impacto social',
]

const impactPillars = [
  {
    title: 'Educação empreendedora',
    text: 'Conteúdos práticos para apoiar escolhas de gestão, vendas, preço, rotina e formalização.',
  },
  {
    title: 'Gestão simples',
    text: 'Organização em linguagem acessível para transformar conceitos em ações possíveis no dia a dia.',
  },
  {
    title: 'Organização financeira',
    text: 'Apoio educacional para separar contas, registrar movimentos, acompanhar custos e planejar próximos passos.',
  },
  {
    title: 'Jornada gamificada',
    text: 'Missões, níveis e conquistas para incentivar constância, prática e evolução gradual.',
  },
  {
    title: 'IA como apoio educacional',
    text: 'Tecnologia para orientar dúvidas, organizar ideias e apoiar o aprendizado sem substituir especialistas.',
  },
  {
    title: 'Espaço seguro de troca',
    text: 'Comunidade e pertencimento para mulheres cis e trans aprenderem, compartilharem experiências e fortalecerem seus negócios.',
  },
]

const platformFeatures = [
  {
    title: 'Capacitação empreendedora gamificada',
    text: 'Uma plataforma de aprendizagem para mulheres cis e trans, empreendedoras informais, MEIs e mulheres em processo de formalização.',
  },
  {
    title: 'Educação, gestão e tecnologia',
    text: 'O Divas do Lucro combina a trajetória da Escola de MEI com recursos digitais, IA educativa e trilhas práticas de organização.',
  },
  {
    title: 'Nova fase oficial',
    text: 'A marca nasce como evolução institucional conduzida pela mesma fundadora, Erica Mester, ampliando método, alcance e apresentação.',
  },
]

const impactNumbers = [
  { value: '4000+', label: 'Pessoas impactadas' },
  { value: '2100+', label: 'Atendimentos' },
  { value: '5+', label: 'Prêmios e conquistas' },
]

const pitchImages = [
  {
    src: '/assets/escola-mei-referencia/pitch-2.jpg',
    alt: 'Imagem complementar do pitch institucional da trajetória Escola de MEI',
    title: 'Trajetória formativa',
  },
  {
    src: '/assets/escola-mei-referencia/pitch-3.jpg',
    alt: 'Imagem institucional usada como referência para o pitch Divas do Lucro',
    title: 'Nova fase digital',
  },
]

const methodologyCards = [
  {
    title: 'Microaulas testadas e aprovadas',
    text: 'Conteúdos curtos, práticos e organizados para facilitar o aprendizado de quem empreende no dia a dia.',
  },
  {
    title: 'Videoaulas Dinâmicas',
    text: 'Aulas em linguagem simples, pensadas para transformar conceitos de gestão em ações possíveis.',
  },
  {
    title: 'Metodologia Testada e Aprovada',
    text: 'Uma jornada formativa inspirada na trajetória da Escola de MEI, agora ampliada para a nova fase Divas do Lucro.',
  },
]

const testimonials = [
  {
    quote: 'A pandemia chegou. Segui as orientações da Erica, coloquei entrega e meu faturamento aumentou!',
    name: 'Edja da Silva',
    business: 'Lanchonete - Casa da Coxinha - Mossoró/RN',
    image: '/assets/escola-mei-referencia/depoimento-edja.jpg',
  },
  {
    quote: 'Minha loja passou a vender mais depois que passei a colocar em prática as coisas que a Erica ensina.',
    name: 'Viviane Alves',
    business: 'Loja de Festas - Ministério das Artes - Saquarema/RJ',
    image: '/assets/escola-mei-referencia/depoimento-viviane.jpg',
  },
  {
    quote: 'Todo o sucesso do meu negócio foi por causa das aulas da mentoria dessa profissional incrível.',
    name: 'Wilson Oliveira',
    business: 'MotoboyLanches - Petiscos em Casa - RJ',
    image: '/assets/escola-mei-referencia/depoimento-wilson.jpg',
  },
]

const founderCredentials = [
  'Empreendedora serial',
  'Advogada pós-graduada',
  'Conquistou 2 prêmios de empreendedorismo da Shell com chancela da UNESCO',
  'Conquistou prêmio da aceleração do Instituto Ekloos',
  'Foi contemplada com aporte do Instituto BAT Brasil',
  'Foi matéria da revista Pequenas Empresas Grandes Negócios',
  'É mãe da Helena e da Amora, sua filha canina',
  'Empreendedora por paixão',
]

const blogPosts = [
  'Como transformar conhecimento em autonomia financeira',
  'O que mulheres MEIs precisam acompanhar no dia a dia',
  'Como a gamificação ajuda na educação empreendedora',
  'IA como aliada na rotina de pequenos negócios',
  'Estratégias simples para organizar vendas, preço e metas',
  'Empreendedorismo feminino nas periferias e favelas',
]

const footerLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#impacto', label: 'Impacto' },
  { href: '#metodologia', label: 'Metodologia' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#fundadora', label: 'Erica Mester' },
  { href: '#contato', label: 'Contato' },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Cabeçalho principal">
        <a className="brand" href="#inicio" aria-label="Divas do Lucro - início">
          <span className="brand-mark">
            <img src="/assets/logo-divas-do-lucro.jpg" alt="Logo Divas do Lucro" />
          </span>
          <span className="brand-name">
            <span>Divas do</span>
            <strong>Lucro</strong>
          </span>
        </a>

        <nav className="main-nav" aria-label="Menu principal">
          <a href="#inicio">Início</a>
          <a href="#impacto">Impacto</a>
          <a href="#plataforma">Plataforma</a>
          <a href="#numeros">Números</a>
          <a href="#metodologia">Metodologia</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#fundadora">Erica</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-action" href="#contato">Fale com a equipe</a>
      </header>

      <main>
        <section className="hero-section section" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Nova fase da Escola de MEI</p>
            <h1 id="hero-title">Conheça o Divas do Lucro</h1>
            <p className="hero-lead">
              Inovação, impacto social e educação empreendedora para mulheres que querem organizar, fortalecer e desenvolver seus negócios.
            </p>
            <p className="hero-subtitle">
              O Divas do Lucro nasce como nova fase da trajetória da Escola de MEI, reunindo educação empreendedora, gestão, gamificação e inteligência artificial para apoiar mulheres cis e trans, MEIs, autônomas e empreendedoras informais.
            </p>
            <div className="tag-list" aria-label="Diferenciais da plataforma">
              {heroTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#plataforma">Conheça a plataforma</a>
              <a className="button button-secondary" href="#contato">Fale com a equipe</a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Resumo institucional do Divas do Lucro">
            <div className="hero-logo-seal">
              <img src="/assets/logo-divas-do-lucro.jpg" alt="Logo oficial Divas do Lucro" />
            </div>
            <p className="eyebrow">Apresentação institucional</p>
            <strong>Educação empreendedora, gestão e tecnologia.</strong>
            <p>Uma plataforma EdTech para organizar uma jornada de aprendizagem, prática e troca entre mulheres empreendedoras.</p>
            <div className="hero-mini-grid" aria-label="Resumo do projeto">
              <span>Base Escola de MEI</span>
              <span>IA educativa</span>
              <span>Gamificação</span>
              <span>Impacto social</span>
            </div>
          </aside>
        </section>

        <section className="section split-section" id="impacto" aria-labelledby="impacto-title">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">Inovação e Impacto Social</p>
            <h2 id="impacto-title">Uma plataforma de capacitação empreendedora gamificada, com inteligência artificial.</h2>
            <p>
              Uma plataforma de capacitação empreendedora gamificada, com inteligência artificial, voltada para mulheres cis e trans, empreendedoras informais, MEIs e mulheres em processo de formalização.
            </p>
          </div>
          <div className="pillar-list">
            {impactPillars.map((pillar) => (
              <article className="compact-card" key={pillar.title}>
                <span className="card-dot" aria-hidden="true"></span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section platform-section" id="plataforma" aria-labelledby="plataforma-title">
          <div className="section-heading center-heading">
            <p className="eyebrow">Apresentação principal da plataforma</p>
            <h2 id="plataforma-title">Educação empreendedora com método, acolhimento e aplicação prática.</h2>
            <p>
              O Divas do Lucro reposiciona a experiência da Escola de MEI em uma plataforma institucional, social, educacional e empreendedora, com foco em organização de negócios e aprendizagem acessível.
            </p>
          </div>
          <div className="platform-grid platform-grid-three">
            {platformFeatures.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <span>{feature.title}</span>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section awards-section" aria-labelledby="premios-title">
          <div className="awards-card">
            <div>
              <p className="eyebrow">Prêmios e Conquistas</p>
              <h2 id="premios-title">Reconhecimento, impacto social e educação empreendedora.</h2>
              <p>
                A trajetória que inspira o Divas do Lucro reúne reconhecimento, impacto social, educação empreendedora e compromisso com mulheres que constroem seus negócios em diferentes realidades.
              </p>
            </div>
            <figure className="awards-image">
              <img src="/assets/escola-mei-referencia/premios.png" alt="Imagem de prêmios e conquistas da trajetória Escola de MEI" />
              <figcaption>Prêmios e conquistas da trajetória que inspira a nova fase.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section mission-section" aria-labelledby="missao-title">
          <div className="mission-card">
            <p className="eyebrow">Missão</p>
            <h2 id="missao-title">Da organização financeira à autonomia de decisão.</h2>
            <p>
              A missão do Divas do Lucro é apoiar mulheres empreendedoras com conteúdo, ferramentas educativas e uma jornada de aprendizagem clara para que cada negócio ganhe mais organização, repertório e capacidade de planejamento.
            </p>
          </div>
        </section>

        <section className="section numbers-section" id="numeros" aria-labelledby="numeros-title">
          <div className="section-heading center-heading">
            <p className="eyebrow">Divas do Lucro em números</p>
            <h2 id="numeros-title">Uma nova marca apoiada por uma trajetória real de impacto.</h2>
            <p>Os indicadores ajudam a apresentar o histórico institucional que sustenta esta nova fase de marca, produto e metodologia.</p>
          </div>
          <div className="numbers-grid">
            {impactNumbers.map((item) => (
              <article className="number-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
          <p className="soft-note">Indicadores herdados da trajetória da Escola de MEI e em atualização para a nova fase Divas do Lucro.</p>
        </section>

        <section className="section transition-section" aria-labelledby="transicao-title">
          <div className="transition-card">
            <div>
              <p className="eyebrow">Conheça o Divas do Lucro</p>
              <h2 id="transicao-title">Da Escola de MEI ao Divas do Lucro</h2>
              <p>
                O Divas do Lucro evolui a trajetória da Escola de MEI para uma nova plataforma gamificada com IA, voltada para mulheres cis e trans, empreendedoras informais, MEIs e mulheres em processo de formalização.
              </p>
            </div>
            <div className="transition-visual" aria-label="Continuidade visual entre Escola de MEI e Divas do Lucro">
              <div className="transition-logo-card">
                <img src="/assets/escola-mei-referencia/logo-escola-mei.png" alt="Logo Escola de MEI" />
                <span>Trajetória oficial</span>
              </div>
              <span className="transition-arrow" aria-hidden="true">→</span>
              <div className="transition-logo-card transition-logo-card-divas">
                <img src="/assets/logo-divas-do-lucro.jpg" alt="Logo oficial Divas do Lucro" />
                <span>Nova fase oficial</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section pitch-section" aria-labelledby="pitch-title">
          <div className="pitch-card pitch-card-main">
            <div>
              <p className="eyebrow">Pitch institucional</p>
              <h2 id="pitch-title">Conheça o Divas do Lucro</h2>
              <p>
                Uma apresentação visual da nova fase: educação empreendedora, gestão simples, gamificação, inteligência artificial e impacto social em uma jornada pensada para negócios reais.
              </p>
              <a className="button button-primary" href="#contato">Assistir pitch institucional</a>
            </div>
            <div className="pitch-feature">
              <img src="/assets/escola-mei-referencia/pitch-principal.png" alt="Imagem principal do pitch institucional usado como referência para o Divas do Lucro" />
            </div>
          </div>
          <div className="pitch-gallery" aria-label="Materiais visuais do pitch institucional">
            {pitchImages.map((image) => (
              <figure key={image.src} className="pitch-image-card">
                <img src={image.src} alt={image.alt} />
                <figcaption>{image.title}</figcaption>
              </figure>
            ))}
            <figure className="pitch-image-card video-card">
              <img src="/assets/escola-mei-referencia/youtube.png" alt="Imagem ilustrativa para chamada do pitch institucional em vídeo" />
              <figcaption>Assistir pitch institucional</figcaption>
            </figure>
          </div>
        </section>

        <section className="section" id="metodologia" aria-labelledby="metodologia-title">
          <div className="section-heading center-heading">
            <p className="eyebrow">Metodologia</p>
            <h2 id="metodologia-title">Microaulas, videoaulas dinâmicas e metodologia testada.</h2>
            <p>Uma sequência formativa inspirada no ritmo educacional da Escola de MEI e adaptada para a nova fase Divas do Lucro.</p>
          </div>
          <div className="method-grid">
            {methodologyCards.map((card) => (
              <article className="feature-card method-card" key={card.title}>
                <span>{card.title}</span>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section testimonials-section" id="depoimentos" aria-labelledby="depoimentos-title">
          <div className="section-heading center-heading">
            <p className="eyebrow">O que dizem sobre nós</p>
            <h2 id="depoimentos-title">Empreendedores que tivemos o prazer de atender</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <img src={testimonial.image} alt={`Foto de ${testimonial.name}`} />
                <blockquote>{testimonial.quote}</blockquote>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <p>{testimonial.business}</p>
                </footer>
              </article>
            ))}
          </div>
          <p className="soft-note">Relatos de empreendedores atendidos pela trajetória formativa que inspira o Divas do Lucro. Resultados variam conforme contexto, execução e realidade de cada negócio.</p>
        </section>

        <section className="section founder-intro" aria-labelledby="fundadora-intro-title">
          <div className="section-heading center-heading">
            <p className="eyebrow">Fundadora</p>
            <h2 id="fundadora-intro-title">Conheça a profissional por trás deste projeto</h2>
            <p>Erica Mester conecta trajetória empreendedora, educação, impacto social e prática de gestão para conduzir a Escola de MEI e a nova fase Divas do Lucro.</p>
          </div>
        </section>

        <section className="section founder-section" id="fundadora" aria-labelledby="fundadora-title">
          <div className="founder-copy">
            <p className="eyebrow">Erica Mester</p>
            <h2 id="fundadora-title">Erica Mester</h2>
            <p>
              Erica Mester nasceu e foi criada na favela do Fallet/Fogueteiro, no Rio de Janeiro. Começou a trabalhar com apenas 9 anos de idade e, aos 17, iniciou sua trajetória empreendedora.
            </p>
            <p>
              Sua atuação reúne vivência empreendedora, formação jurídica, educação acessível e compromisso com mulheres que constroem seus negócios em diferentes contextos. O Divas do Lucro apresenta essa caminhada em uma nova fase institucional, tecnológica e educacional.
            </p>
            <ul className="founder-list" aria-label="Conquistas e credenciais de Erica Mester">
              {founderCredentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>
          </div>
          <figure className="founder-panel">
            <img src="/assets/escola-mei-referencia/erica-mester.png" alt="Erica Mester, fundadora da Escola de MEI e do Divas do Lucro" />
            <figcaption>Fundadora da Escola de MEI e do Divas do Lucro.</figcaption>
          </figure>
        </section>

        <section className="section contact-section" id="contato" aria-labelledby="contato-title">
          <div className="section-heading">
            <p className="eyebrow">Entre em contato</p>
            <h2 id="contato-title">Tem alguma dúvida ou sugestão? Fale com a gente!</h2>
            <p>Durante a transição de marca, alguns canais ainda podem manter referência Escola de MEI.</p>
          </div>
          <div className="contact-grid">
            <aside className="contact-panel" aria-label="Canais de contato">
              <h3>Canais oficiais</h3>
              <dl>
                <div>
                  <dt>E-mail</dt>
                  <dd><a href="mailto:falecom@escolademei.com">falecom@escolademei.com</a></dd>
                </div>
                <div>
                  <dt>WhatsApp</dt>
                  <dd><a href="tel:+5521986962008">(21) 98696-2008</a></dd>
                </div>
                <div>
                  <dt>Instagram</dt>
                  <dd><a href="#instagram">Instagram</a></dd>
                </div>
                <div>
                  <dt>YouTube</dt>
                  <dd><a href="#youtube">YouTube</a></dd>
                </div>
              </dl>
              <p className="transition-note">Durante a transição de marca, alguns canais ainda podem manter referência Escola de MEI.</p>
            </aside>

            <form className="contact-form" aria-label="Formulário visual de contato" onSubmit={(event) => event.preventDefault()}>
              <label>
                Nome
                <input type="text" name="nome" placeholder="Seu nome" autoComplete="name" />
              </label>
              <label>
                WhatsApp
                <input type="tel" name="whatsapp" placeholder="(00) 00000-0000" autoComplete="tel" />
              </label>
              <label>
                E-mail
                <input type="email" name="email" placeholder="seu@email.com" autoComplete="email" />
              </label>
              <label>
                Mensagem
                <textarea name="mensagem" rows="5" placeholder="Conte como podemos ajudar" />
              </label>
              <button className="button button-primary" type="submit">Enviar</button>
              <p>Formulário visual sem envio de dados.</p>
            </form>
          </div>
        </section>

        <section className="section" id="blog" aria-labelledby="blog-title">
          <div className="section-heading center-heading">
            <p className="eyebrow">Erica Mester Blog</p>
            <h2 id="blog-title">Viagem pelo Empreendedorismo Feminino e Inovação</h2>
          </div>
          <div className="blog-grid">
            {blogPosts.map((title) => (
              <article className="content-card" key={title}>
                <span>Conteúdo em breve</span>
                <h3>{title}</h3>
                <div className="card-actions">
                  <a href="#contato" aria-label={`Manifestar interesse no conteúdo: ${title}`}>Ler conteúdo</a>
                  <small>Em breve</small>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-column footer-main">
          <div className="footer-brand">
            <img src="/assets/logo-divas-do-lucro.jpg" alt="Logo Divas do Lucro" />
            <strong>Divas do Lucro</strong>
          </div>
          <p>O Divas do Lucro é a nova fase da trajetória Escola de MEI, uma plataforma EdTech voltada para educação empreendedora, gestão, gamificação e apoio a mulheres empreendedoras.</p>
        </div>
        <div className="footer-column">
          <h2>Links</h2>
          <nav aria-label="Links do rodapé">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>
        <div className="footer-column">
          <h2>Contato</h2>
          <nav aria-label="Contato no rodapé">
            <a href="mailto:falecom@escolademei.com">falecom@escolademei.com</a>
            <a href="tel:+5521986962008">(21) 98696-2008</a>
          </nav>
        </div>
        <div className="footer-column">
          <h2>Redes</h2>
          <nav aria-label="Redes sociais no rodapé">
            <a href="#instagram">Instagram</a>
            <a href="#youtube">YouTube</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>Ferramenta educacional. Não substitui consultoria contábil, financeira ou jurídica.</p>
          <small>© 2026 Divas do Lucro. Nova fase da trajetória Escola de MEI.</small>
        </div>
      </footer>
    </div>
  )
}

export default App
