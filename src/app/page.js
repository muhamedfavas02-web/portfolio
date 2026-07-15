export default function Home() {
  return (
    <>
      <div className="hero-container">
        {/* Navigation Header */}
        <header className="navbar">
          <div className="logo">MUHAMED FAVAS</div>
          <nav className="nav-links">
            <a href="#about" className="nav-link">About</a>
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
    </>
  );
}
