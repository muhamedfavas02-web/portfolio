export default function Home() {
  return (
    <>
      <div className="hero-container">
        {/* Navigation Header */}
        <header className="navbar">
          <div className="logo">MUHAMED FAVAS</div>
          <nav className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <button className="nav-link">Work</button>
            <a href="tel:+917593988987" className="nav-link">Contact</a>
          </nav>
        </header>

        {/* Main Hero Content */}
        <main className="hero-content">
          <div className="hero-left">
            <h1 className="headline">
              CRE<span className="subtle-char">A</span>TING CINEMATIC<br />
              VISUALS THAT MAK<span className="subtle-char">E</span><br />
              BRANDS IMP<span className="subtle-char">O</span>SSIBLE<br />
              TO IGN<span className="subtle-char">O</span>RE
            </h1>
            <a href="#about" className="cta-button" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
              View My Work
            </a>
          </div>

          {/* Duotone Portrait Image on the Right */}
          <div className="hero-right">
            <div className="image-wrapper">
              <img 
                src="/favas.jpg" 
                alt="Muhamed Favas" 
                className="user-photo" 
              />
            </div>
          </div>
        </main>

        {/* Footer Info Row */}
        <footer className="bottom-row">
          <div className="bottom-role">
            AI Content Creator
          </div>
          <div className="bottom-intro">
            Hi, I'm Muhamed Favas — an aspiring AI Content Creator crafting high-impact cinematic videos, commercial advertisements, and digital brand experiences.
          </div>
          <div className="bottom-role right-align">
            Marketing Specialist <br />
            <a href="tel:+917593988987" className="bottom-contact-link">+91 75939 88987</a>
          </div>
        </footer>
      </div>

      {/* About Me Section */}
      <section id="about">
        <div className="about-left">
          <h2 className="about-title">About Me</h2>
          <div className="glow-line"></div>
          <div className="about-metrics">
            <div className="metric-card">
              <h3 className="metric-title">Analytical Mindset</h3>
              <p className="metric-desc">
                An accounting background from the University of Calicut driving logical structure, strict attention to details, and analytical problem-solving.
              </p>
            </div>
            <div className="metric-card">
              <h3 className="metric-title">Cinematic Vision</h3>
              <p className="metric-desc">
                Proven experience creating cinematic advertisements, commercial videos, product promotions, and travel documentaries.
              </p>
            </div>
            <div className="metric-card">
              <h3 className="metric-title">AI Technology</h3>
              <p className="metric-desc">
                Specializing in advanced Prompt Engineering, AI Video Production, creative scripting, and AI-powered visual assets creation.
              </p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <p className="bio-text">
            I'm <span className="bio-highlight">Muhamed Favas</span>, an aspiring AI Content Creator and Marketing Specialist from Kottakkal, Kerala, India. After completing my degree, I studied Accounting, which strengthened my problem-solving abilities. Currently, I specialize in combining creativity with artificial intelligence to produce engaging, high-quality digital content.
          </p>
          <p className="bio-text">
            My experience includes transforming creative ideas into professional-quality visuals and compelling stories through AI-powered content creation. I focus on pushing the boundaries of digital creativity, continuously learning emerging AI technologies, and collaborating with brands to deliver meaningful results.
          </p>
          
          <div className="skills-wrapper">
            <h3 className="skills-title">Core Focus</h3>
            <div className="skills-grid">
              <span className="skill-badge">AI Content Creation</span>
              <span className="skill-badge">Prompt Engineering</span>
              <span className="skill-badge">AI Video Production</span>
              <span className="skill-badge">Cinematic Storytelling</span>
              <span className="skill-badge">Commercial Advertisements</span>
              <span className="skill-badge">Creative Script Writing</span>
              <span className="skill-badge">Brand Content Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="services-header">
          <h2 className="services-title">Services</h2>
          <div className="glow-line"></div>
        </div>

        <div className="services-grid">
          {/* Card 1: AI Content Creation */}
          <div className="service-card">
            <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3 15l5.096-.813L9 9l.813 5.096L15 15l-5.187.904zM18 5.25L17.25 9 16.5 5.25 12.75 4.5l3.75-.75L17.25 0l.75 3.75 3.75.75-3.75.75zM20.25 19.5l-.563 2.25-.562-2.25L16.875 19l2.25-.563.563-2.25.562 2.25 2.25.563-2.25.562z" />
            </svg>
            <h3 className="service-card-title">AI Content Creation</h3>
            <p className="service-card-desc">
              Transforming concepts into high-quality digital content and advertisements using cutting-edge generative AI models.
            </p>
          </div>

          {/* Card 2: AI Video Production */}
          <div className="service-card">
            <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l-4.5-3v6l4.5-3z" />
            </svg>
            <h3 className="service-card-title">AI Video Production</h3>
            <p className="service-card-desc">
              Producing high-end cinematic ads, commercial promotions, and video content that stands out visually.
            </p>
          </div>

          {/* Card 3: Prompt Engineering */}
          <div className="service-card">
            <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            <h3 className="service-card-title">Prompt Engineering</h3>
            <p className="service-card-desc">
              Optimizing prompts and model pipelines to generate highly precise, professional, and repeatable visual outputs.
            </p>
          </div>

          {/* Card 4: Social Media Content Creation */}
          <div className="service-card">
            <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186l5.302-3.03a2.25 2.25 0 11.786 1.378L8.003 10.3a2.25 2.25 0 00-.786 1.884l5.302 3.03a2.25 2.25 0 11-.786 1.378l-5.302-3.03a2.25 2.25 0 000-2.186z" />
            </svg>
            <h3 className="service-card-title">Social Media Content Creation</h3>
            <p className="service-card-desc">
              Creating engaging viral reels, product promos, and social shorts to build brand presence and drive engagement.
            </p>
          </div>

          {/* Card 5: Brand Advertisement */}
          <div className="service-card">
            <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
            <h3 className="service-card-title">Brand Advertisement</h3>
            <p className="service-card-desc">
              Developing commercial advertisements and video promotions targeted at converting viewers into customers.
            </p>
          </div>

          {/* Card 6: Documentary & Travel Videos */}
          <div className="service-card">
            <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 5.56c-.16-.3-.39-.56-.67-.77a8.97 8.97 0 00-3.3-1.62m3.97 2.39a9 9 0 11-13.784 10.224m13.784-10.224a9.007 9.007 0 00-6.176-2.529m0 0a8.96 8.96 0 00-3.3 1.62M9 10.5a3 3 0 116 0m-6 0a3 3 0 106 0M3 10.5c0 1.25.25 2.441.71 3.538m-3.14-3.538a8.962 8.962 0 012.43-6.176M3 10.5a8.962 8.962 0 002.43 6.176m0 0A8.962 8.962 0 009 19.5" />
            </svg>
            <h3 className="service-card-title">Documentary & Travel Videos</h3>
            <p className="service-card-desc">
              Crafting cinematic historical documentaries, visual travel storytelling, and engaging geographical promotions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
