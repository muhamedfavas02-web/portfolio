export default function Home() {
  return (
    <div className="hero-container">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="logo">MUHAMED FAVAS</div>
        <nav className="nav-links">
          <button className="nav-link">About</button>
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
          <button className="cta-button">
            View My Work
          </button>
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
  );
}
