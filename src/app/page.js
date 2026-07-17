'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Creative Director at Redwood Media",
      text: "Favas transformed our brand campaign concepts into jaw-dropping cinematic visuals using AI. His prompt engineering skills are top-tier!",
      initials: "AR"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Founder of Velo Gear",
      text: "The product commercial produced by Favas exceeded our expectations. The visual storytelling was compelling and drove amazing engagement.",
      initials: "SJ"
    },
    {
      id: 3,
      name: "Vikram Nair",
      role: "Media Coordinator at Atlas Journeys",
      text: "The travelogue video was pure art. Favas combined AI stability tools with professional video scaling seamlessly. Outstanding work!",
      initials: "VN"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      id: 1,
      category: 'commercials',
      title: 'AI Commercial Advertisements',
      desc: 'Cinematic brand campaigns generated with advanced video diffusion models.',
      tag: 'Commercials',
      client: 'Redwood Media',
      duration: '4 weeks',
      tools: 'Higgsfield, ElevenLabs'
    },
    {
      id: 2,
      category: 'commercials',
      title: 'Product Commercials',
      desc: 'Stunning dynamic product showcases blending 3D rendering with AI motion graphics.',
      tag: 'Commercials',
      client: 'Velo Gear',
      duration: '2 weeks',
      tools: 'OpenArt, Seedance'
    },
    {
      id: 3,
      category: 'travel',
      title: 'Travel Videos',
      desc: 'Cinematic travelogues capturing scenic landscape scales and cultural narratives.',
      tag: 'Travel & Docs',
      client: 'Atlas Journeys',
      duration: '6 weeks',
      tools: 'Luma Dream Machine, Claude'
    },
    {
      id: 4,
      category: 'travel',
      title: 'Historical Documentary Videos',
      desc: 'Restoration-focused historical documentaries using deep history visual overlays.',
      tag: 'Travel & Docs',
      client: 'Kerala Heritage Society',
      duration: '8 weeks',
      tools: 'Midjourney, Runway Gen-3'
    },
    {
      id: 5,
      category: 'reels',
      title: 'Social Media Reels',
      desc: 'High-energy vertical short-form reels optimized for engagement and conversion algorithms.',
      tag: 'Reels & Socials',
      client: 'FitLife Brand',
      duration: 'Ongoing',
      tools: 'CapCut, ChatGPT, ElevenLabs'
    },
    {
      id: 6,
      category: 'reels',
      title: 'Brand Promotional Videos',
      desc: 'Engaging corporate storytelling videos and brand intro launches.',
      tag: 'Reels & Socials',
      client: 'Nexis Tech',
      duration: '3 weeks',
      tools: 'Gemini, Higgsfield'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <div className="hero-container">
        {/* Navigation Header */}
        <header className="navbar">
          <div className="logo">MUHAMED FAVAS</div>
          <nav className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#tools" className="nav-link">Tools</a>
            <a href="#certifications" className="nav-link">Certs</a>
            <a href="#portfolio" className="nav-link">Work</a>
            <a href="#testimonials" className="nav-link">Reviews</a>
            <a href="#contact" className="nav-link">Contact</a>
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

      {/* Technical Skills Section */}
      <section id="skills">
        <div className="skills-header">
          <h2 className="skills-section-title">Technical Skills</h2>
          <div className="glow-line"></div>
        </div>

        <div className="skills-list-grid">
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">AI Content Creation</span>
              <span>95%</span>
            </div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" style={{ width: '95%' }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Prompt Engineering</span>
              <span>90%</span>
            </div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" style={{ width: '90%' }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">AI Video Production</span>
              <span>95%</span>
            </div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" style={{ width: '95%' }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Cinematic Storytelling</span>
              <span>88%</span>
            </div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" style={{ width: '88%' }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Commercial Ad Creation</span>
              <span>92%</span>
            </div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" style={{ width: '92%' }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Creative Script Writing</span>
              <span>85%</span>
            </div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section id="tools">
        <div className="tools-header">
          <h2 className="tools-section-title">AI Tools</h2>
          <div className="glow-line"></div>
        </div>

        <div className="tools-section-grid">
          <div className="tool-card">ChatGPT</div>
          <div className="tool-card">Gemini</div>
          <div className="tool-card">Claude</div>
          <div className="tool-card">Seedance</div>
          <div className="tool-card">OpenArt</div>
          <div className="tool-card">Higgsfield</div>
          <div className="tool-card">ElevenLabs</div>
          <div className="tool-card">OmniFlash</div>
          <div className="tool-card">Nano Banana</div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <div className="certifications-header">
          <h2 className="certifications-section-title">Certifications</h2>
          <div className="glow-line"></div>
        </div>

        <div className="cert-card-container">
          <div className="cert-card">
            <svg className="cert-badge-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <h4 className="service-card-title">AI Content Creation & Marketing</h4>
            <p className="service-card-desc">
              Comprehensive training specializing in dynamic media scaling, AI video automation, prompt iteration, and digital brand marketing structures.
            </p>
            <div className="cert-status">
              <span className="cert-pulse-dot"></span>
              In Progress
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <div className="portfolio-header">
          <div className="portfolio-title-wrapper">
            <h2 className="portfolio-title">Featured Work</h2>
            <div className="glow-line"></div>
          </div>
          <div className="portfolio-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'commercials' ? 'active' : ''}`}
              onClick={() => setActiveFilter('commercials')}
            >
              Commercials
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'travel' ? 'active' : ''}`}
              onClick={() => setActiveFilter('travel')}
            >
              Travel & Docs
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'reels' ? 'active' : ''}`}
              onClick={() => setActiveFilter('reels')}
            >
              Reels & Socials
            </button>
          </div>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setActiveProject(project)}
            >
              <div className="project-image-wrapper">
                <span className="project-badge">{project.tag}</span>
                <div className="project-img-placeholder">
                  {/* Abstract tech art background via SVG */}
                  <svg width="100%" height="100%" opacity="0.15" stroke="currentColor">
                    <line x1="0" y1="0" x2="100%" y2="100%" strokeWidth="1" />
                    <line x1="100%" y1="0" x2="0" y2="100%" strokeWidth="1" />
                    <circle cx="50%" cy="50%" r="30%" fill="none" strokeWidth="1" />
                  </svg>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.desc}</p>
                <div className="project-action">
                  View Project
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveProject(null)}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="modal-left">
              <div className="project-img-placeholder">
                {/* Visual mockup styling inside modal */}
                <svg width="100%" height="100%" opacity="0.25" stroke="currentColor">
                  <circle cx="50%" cy="50%" r="25%" fill="none" strokeWidth="1" />
                  <circle cx="50%" cy="50%" r="15%" fill="none" strokeWidth="1" />
                  <line x1="50%" y1="0" x2="50%" y2="100%" strokeWidth="0.5" />
                  <line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="0.5" />
                </svg>
              </div>
            </div>

            <div className="modal-right">
              <span className="modal-tag">{activeProject.tag}</span>
              <h3 className="modal-title">{activeProject.title}</h3>
              <p className="modal-desc">{activeProject.desc}</p>
              
              <div className="modal-details-grid">
                <div className="modal-detail-item">
                  <span className="modal-detail-label">Client</span>
                  <span className="modal-detail-value">{activeProject.client}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-detail-label">Duration</span>
                  <span className="modal-detail-value">{activeProject.duration}</span>
                </div>
                <div className="modal-detail-item" style={{ gridColumn: 'span 2' }}>
                  <span className="modal-detail-label">AI Stack / Tools</span>
                  <span className="modal-detail-value">{activeProject.tools}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section id="testimonials">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Testimonials</h2>
          <div className="glow-line"></div>
        </div>

        <div className="testimonials-slider-container">
          <div className="testimonial-card-wrapper">
            {/* Left navigation arrow */}
            <button className="slider-arrow left" onClick={prevSlide}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Active Slide Card */}
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">
                "{testimonials[currentSlide].text}"
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonials[currentSlide].initials}
                </div>
                <div className="testimonial-author-info">
                  <h4 className="testimonial-name">{testimonials[currentSlide].name}</h4>
                  <span className="testimonial-role">{testimonials[currentSlide].role}</span>
                </div>
              </div>
            </div>

            {/* Right navigation arrow */}
            <button className="slider-arrow right" onClick={nextSlide}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <div 
                key={index} 
                className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* Mobile Controls Row */}
          <div className="slider-controls-mobile">
            <button className="mobile-arrow" onClick={prevSlide}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="mobile-arrow" onClick={nextSlide}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <div className="glow-line"></div>
        </div>

        <div className="contact-content">
          {/* Left Column: Info & Socials */}
          <div className="contact-info-col">
            <p className="contact-desc">
              Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new brand promotions, AI video production, or content strategy.
            </p>

            <div className="contact-details">
              {/* Detail 1: Phone */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Call / WhatsApp</span>
                  <a href="tel:+917593988987" className="contact-detail-value">+91 75939 88987</a>
                </div>
              </div>

              {/* Detail 2: Email */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Email Address</span>
                  <a href="mailto:muhamedfavas02@gmail.com" className="contact-detail-value">muhamedfavas02@gmail.com</a>
                </div>
              </div>

              {/* Detail 3: Location */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-detail-value">Kottakkal, Kerala, India</span>
                </div>
              </div>
            </div>

            {/* Social Media Link Grid */}
            <div className="contact-socials-wrapper">
              <h3 className="contact-socials-title">Follow Me</h3>
              <div className="contact-socials-grid">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-circle">
                  <svg viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-circle">
                  <svg viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.519 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.869.508 9.388.508 9.388.508s7.519 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-circle">
                  <svg viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <form onSubmit={e => e.preventDefault()}>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label" htmlFor="form-name">Name</label>
                <input type="text" id="form-name" className="form-input" placeholder="Your Name" required />
              </div>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label" htmlFor="form-email">Email</label>
                <input type="email" id="form-email" className="form-input" placeholder="Your Email Address" required />
              </div>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label" htmlFor="form-subject">Subject</label>
                <input type="text" id="form-subject" className="form-input" placeholder="Project Subject" required />
              </div>
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label className="form-label" htmlFor="form-message">Message</label>
                <textarea id="form-message" className="form-input" placeholder="Tell me about your project concept..." required></textarea>
              </div>
              <button type="submit" className="form-submit-btn">
                Send Message
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <footer className="site-footer">
        <div className="footer-nav">
          <a href="#about" className="footer-link">About</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#tools" className="footer-link">Tools</a>
          <a href="#certifications" className="footer-link">Certs</a>
          <a href="#portfolio" className="footer-link">Work</a>
          <a href="#testimonials" className="footer-link">Reviews</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Muhamed Favas. All rights reserved.</span>
          <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
}
