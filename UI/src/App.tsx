import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Button, IconButton, InputField, TextareaField, useTheme } from "@figma/astraui";

const assetPath = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`;

type IconName =
  | "arrow"
  | "code"
  | "download"
  | "github"
  | "linkedin"
  | "mail"
  | "map"
  | "menu"
  | "x"
  | "external"
  | "calendar"
  | "terminal"
  | "layers"
  | "database";

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  code: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
  download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
  github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.2.5S18.1.1 15 1.9a13.4 13.4 0 0 0-7 0C4.9.1 3.8.5 3.8.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" /><path d="M8 19c-3 .9-3-1.5-4.2-2" /></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><path d="M2 9h4v12H2z" /><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  map: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  x: <><path d="m6 6 12 12M18 6 6 18" /></>,
  external: <><path d="M15 4h5v5" /><path d="m10 14 10-10" /><path d="M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
  terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3M13 15h4" /></>,
  layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></>,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

const skills = [
  { name: "C Programming", level: 98 },
  { name: "C++", level: 90 },
  { name: "HTML & CSS", level: 92 },
  { name: "JavaScript", level: 90 },
  { name: "OOP Concepts", level: 82 },
  { name: "Git & GitHub", level: 95 },
];

const projects = [
  {
    number: "01",
    type: "C · Console Application",
    title: "Railway Reservation & Tourism",
    description: "Railway Reservation and Tourism Management System developed using C language.",
    tags: ["C", "File Handling", "Console"],
    features: ["Train Booking", "Tourism", "Ticket Cancellation", "Passenger Records"],
    status: "Completed",
    year: "C",
    github: "https://github.com/vishalbhinde73-sys/C-Programing-Project-",
    live: "",
    media: assetPath("images/railway_reservation.png"),
    icon: "terminal" as IconName,
    tone: "cyan",
  },
  {
    number: "02",
    type: "C++ · Management System",
    title: "Hospital Management System",
    description: "A C++ console application for structured hospital records and efficient data management.",
    tags: ["C++", "OOP", "File Handling"],
    features: ["Patient Records", "Data Management", "Console Interface", "File Storage"],
    status: "Completed",
    year: "C++",
    github: "https://github.com/vishalbhinde73-sys/CPP-project",
    live: "",
    media: assetPath("images/hospital_management_system.png"),
    icon: "database" as IconName,
    tone: "violet",
  },
  {
    number: "03",
    type: "Web Development",
    title: "Personal Portfolio Website",
    description: "A responsive developer portfolio built with modern layouts, smooth interactions, dark mode and focused storytelling.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    features: ["Responsive Design", "Dark Theme", "Smooth Animation", "Modern Layout"],
    status: "Live",
    year: "2026",
    github: "https://github.com/vishalbhinde73-sys/portfoliyo",
    live: "https://vishalbhinde73-sys.github.io/portfoliyo/",
    media: assetPath("images/portfoliyo.png"),
    icon: "layers" as IconName,
    tone: "blue",
  },
  {
    number: "04",
    type: "Web Development",
    title: "Zomato Clone Website",
    description: "A responsive Zomato clone website built with HTML, CSS and JavaScript.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    features: ["Restaurant Cards", "Search Interface", "Food Categories", "Mobile Friendly"],
    status: "In Progress",
    year: "2026",
    github: "",
    live: "",
    media: assetPath("video/2627bbed9d6c068e50d2aadcca11ddbb1743095810.mp4"),
    icon: "code" as IconName,
    tone: "cyan",
  },
];

const education = [
  { year: "2024 — 2028", title: "Bachelor of Technology", detail: "Computer Science & Engineering", place: "Government Holkar Model Autonomous Science College, Indore" },
  { year: "2023 — 2024", title: "Higher Secondary", detail: "Science · MP Board", place: "Built a foundation in mathematics, computing and analytical thinking." },
  { year: "2020 — 2021", title: "High School", detail: "MP Board", place: "Completed secondary education with a strong academic foundation." },
];

const certificates = [
  { issuer: "Internshala", title: "Web Development with AI", date: "Dec 2025", topics: "HTML · CSS · Bootstrap · JavaScript · React · PHP · DBMS · AI", file: "web-development-ai.pdf" },
  { issuer: "Skill India", title: "Web Development with AI", date: "Dec 2025", topics: "Web Development · AI · Modern Technologies", file: "CAN_39058357_5203444.pdf" },
  { issuer: "Google × Coursera", title: "AI for Data Analysis", date: "Jun 2026", topics: "Artificial Intelligence · Data Analysis", file: "Coursera Certificate AI For Data Analysis.pdf" },
  { issuer: "Google × Coursera", title: "AI for Writing & Communication", date: "Jun 2026", topics: "AI · Communication · Productivity", file: "Coursera Certificate AI for Writing and Communication.pdf" },
  { issuer: "Google × Coursera", title: "AI for Brainstorming & Planning", date: "Jun 2026", topics: "Planning · Creativity · AI Tools", file: "Coursera Certificate AI For Brainstorming Planning.pdf" },
  { issuer: "Google × Coursera", title: "AI for Research & Insights", date: "Jun 2026", topics: "AI Research · Information Analysis", file: "Coursera Certificate AI for Research and Insights.pdf" },
  { issuer: "Google × Coursera", title: "AI for Content Creation", date: "Jun 2026", topics: "AI · Content Creation · Productivity", file: "Coursera Certificate AI For Content Creation.pdf" },
  { issuer: "Google × Coursera", title: "7 Courses in AI", date: "Jun 2026", topics: "Artificial Intelligence · 7 Courses · Productivity", file: "Coursera Certificate 7courses AI.pdf" },
  { issuer: "Professional Learning", title: "AI Bootcamp", date: "2026", topics: "Artificial Intelligence · Applied AI", file: "AI Bootcamp.pdf" },
  { issuer: "Deloitte", title: "Technology Virtual Experience", date: "2026", topics: "Technology · Industry Experience · Problem Solving", file: "deloit virtual internship certificate.pdf" },
  { issuer: "HPE × Forage", title: "Software Engineering Job Simulation", date: "Oct 2026", topics: "Software Engineering · Development · Productivity", file: "HPE Software Engineering Job Simulation.pdf" },
];

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

export default function App() {
  const { setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formValues, setFormValues] = useState({ user_name: "", user_email: "", subject: "", message: "" });
  const navItems = ["About", "Skills", "Projects", "Education", "Certifications", "Contact"];

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
        method: "POST",
        body: (() => {
          const payload = new FormData();
          payload.append("service_id", "service_dynw9un");
          payload.append("template_id", "template_0vjaplg");
          payload.append("user_id", "3m0qi39dtPVI2kydi");
          for (const [key, value] of formData.entries()) payload.append(key, value);
          return payload;
        })(),
      });
      if (!response.ok) throw new Error("Unable to send");
      setFormStatus("sent");
      form.reset();
      setFormValues({ user_name: "", user_email: "", subject: "", message: "" });
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="noise" />

      <header className="nav glass">
        <a className="brand" href="#home" aria-label="Vishal Bhinde, home">VB<span>.</span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </nav>
        <a className="nav-cta" href="mailto:vishalbhinde73@gmail.com">Let&apos;s talk <Icon name="arrow" size={16} /></a>
        <IconButton className="menu-button" variant="neutral" size="small" icon={<Icon name={menuOpen ? "x" : "menu"} size={21} />} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen} />
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="availability glass"><span className="status-dot" /> Available for new opportunities</div>
            <p className="hero-kicker">Hello, I&apos;m Vishal Bhinde</p>
            <h1>Software developer crafting <span>useful digital things.</span></h1>
            <p className="hero-body">I build real-world software applications using C, C++, Java and modern web technologies—turning ideas into clean, thoughtful experiences.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <Icon name="arrow" /></a>
              <a className="button secondary glass" href={assetPath("resume/Vishal Bhinde (1).pdf")} download>Download résumé <Icon name="download" /></a>
            </div>
            <div className="social-row">
              <span>Find me online</span>
              <div className="line" />
              <a href="https://github.com/vishalbhinde73-sys" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
              <a href="https://www.linkedin.com/in/vishal-bhinde-41793232a" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame glass">
              <img src={assetPath("images/profile.png")} alt="Vishal Bhinde, software developer" />
              <div className="image-wash" />
              <div className="portrait-caption glass">
                <div className="code-icon"><Icon name="code" size={24} /></div>
                <div><strong>Building with purpose</strong><span>Code · Create · Improve</span></div>
              </div>
            </div>
            <div className="floating-chip chip-one glass">&lt;code /&gt;</div>
            <div className="floating-chip chip-two glass">Based in India</div>
          </div>

          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><i /></a>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading eyebrow="About me" title="Curious by nature. Driven by code." />
          <div className="about-grid">
            <div className="about-story glass">
              <span className="large-index">01</span>
              <p className="lead">I&apos;m a software developer who enjoys solving real problems through well-structured, reliable code.</p>
              <p>My foundation spans C, C++, object-oriented programming, file handling and frontend development. I am always learning, experimenting and finding better ways to turn complex requirements into simple software.</p>
              <div className="principles">
                <div><strong>Clean logic</strong><span>Readable code that lasts</span></div>
                <div><strong>Always learning</strong><span>Curiosity in every project</span></div>
              </div>
            </div>
            <div className="about-stack">
              <div className="about-photo glass"><img src={assetPath("images/profile.png")} alt="Portrait of Vishal Bhinde" /></div>
              <div className="mini-card glass"><Icon name="terminal" size={25} /><span>Core development</span><strong>C, C++ & Java</strong></div>
              <div className="mini-card glass"><Icon name="layers" size={25} /><span>Web experiences</span><strong>HTML, CSS & JS</strong></div>
              <div className="mini-card glass"><Icon name="database" size={25} /><span>Engineering concepts</span><strong>OOP & File Handling</strong></div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeading eyebrow="Capabilities" title="My technical toolkit." body="Technologies and programming languages I use to build software applications." />
          <div className="skills-panel glass">
            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill" key={skill.name}>
                  <div className="skill-label"><span>{skill.name}</span><strong>{skill.level}%</strong></div>
                  <div className="skill-track"><span style={{ width: `${skill.level}%` }} /></div>
                </div>
              ))}
            </div>
            <div className="tech-cloud">
              {["C", "C++", "JavaScript", "OOP", "HTML5", "CSS3", "Git", "GitHub", "VS Code"].map((tech) => <span key={tech}>{tech}</span>)}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading eyebrow="Selected work" title="Projects built to solve." body="A selection of applications where ideas become working, useful software." />
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card glass ${project.tone}`} key={project.title}>
                <div className="project-media">
                  {project.media.endsWith(".mp4")
                    ? <video src={project.media} muted loop autoPlay playsInline controls aria-label={`${project.title} demonstration`} />
                    : <img src={project.media} alt={`${project.title} preview`} />}
                  <span className="project-number">{project.number}</span>
                  <div className="project-icon"><Icon name={project.icon} size={24} /></div>
                </div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <ul className="feature-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <div className="project-meta"><span><small>Status</small>{project.status}</span><span><small>{project.number === "01" || project.number === "02" ? "Language" : "Year"}</small>{project.year}</span></div>
                <div className="project-actions">
                  {project.github && <a className="project-link" href={project.github} target="_blank" rel="noreferrer">GitHub <Icon name="github" size={17} /></a>}
                  {project.live && <a className="project-link" href={project.live} target="_blank" rel="noreferrer">Live demo <Icon name="external" size={17} /></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section journey-section" id="education">
          <SectionHeading eyebrow="My journey" title="Education & growth." />
          <div className="journey-grid">
            <div className="timeline">
              {education.map((item, index) => (
                <article className="timeline-item" key={item.title}>
                  <div className="timeline-marker"><span>{index + 1}</span></div>
                  <div className="timeline-card glass">
                    <span className="date"><Icon name="calendar" size={15} />{item.year}</span>
                    <h3>{item.title}</h3>
                    <strong>{item.detail}</strong>
                    <p>{item.place}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="college-card glass">
              <img src={assetPath("images/Holkar science collage.jpg")} alt="Government Holkar Model Autonomous Science College" />
              <div><span className="eyebrow">Current chapter</span><h3>Building a strong foundation in computer science.</h3><p>Studying Computer Science & Engineering in Indore while developing practical software projects.</p></div>
            </div>
          </div>
        </section>

        <section className="section" id="certifications">
          <SectionHeading eyebrow="Professional learning" title="Certificates & credentials." body="Continuous learning across web development, artificial intelligence and software engineering." />
          <div className="cert-grid">
            {certificates.map((cert, index) => {
              const fileUrl = assetPath(`certificates/${encodeURIComponent(cert.file)}`);
              return (
                <article className="cert-card glass" key={`${cert.title}-${index}`}>
                  <div className="cert-top"><div className="cert-monogram">{String(index + 1).padStart(2, "0")}</div><span>{cert.date}</span></div>
                  <span className="cert-issuer">{cert.issuer}</span>
                  <h3>{cert.title}</h3>
                  <p>{cert.topics}</p>
                  <div className="cert-actions">
                    <a href={fileUrl} target="_blank" rel="noreferrer">View <Icon name="external" size={15} /></a>
                    <a href={fileUrl} download>Download <Icon name="download" size={15} /></a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-panel glass">
            <div className="contact-glow" />
            <div className="contact-copy">
              <span className="eyebrow">Get in touch</span>
              <h2>Let&apos;s build something <span>amazing.</span></h2>
              <p>I&apos;m currently open to internships, freelance work and software development opportunities. Have an idea? Let&apos;s talk.</p>
              <a className="button primary" href="mailto:vishalbhinde73@gmail.com">Send me a message <Icon name="arrow" /></a>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <InputField label="Full name" name="user_name" value={formValues.user_name} onChange={(value) => setFormValues((current) => ({ ...current, user_name: value }))} placeholder="Your name" required />
                <InputField label="Email address" name="user_email" type="email" value={formValues.user_email} onChange={(value) => setFormValues((current) => ({ ...current, user_email: value }))} placeholder="you@email.com" required />
              </div>
              <InputField label="Project or subject" name="subject" value={formValues.subject} onChange={(value) => setFormValues((current) => ({ ...current, subject: value }))} placeholder="What would you like to build?" required />
              <TextareaField label="Message" name="message" rows={5} value={formValues.message} onChange={(value) => setFormValues((current) => ({ ...current, message: value }))} placeholder="Tell me a little about your idea..." required />
              <Button className="form-submit" variant="primary" type="submit" disabled={formStatus === "sending"} iconEnd={<Icon name="arrow" size={16} />}>
                {formStatus === "sending" ? "Sending..." : "Send message"}
              </Button>
              {formStatus === "sent" && <p className="form-note success">Your message was sent successfully.</p>}
              {formStatus === "error" && <p className="form-note error">The form could not send. Please email me directly at <a href="mailto:vishalbhinde73@gmail.com">vishalbhinde73@gmail.com</a>.</p>}
            </form>
          </div>
          <div className="contact-strip">
            <a href="mailto:vishalbhinde73@gmail.com"><Icon name="mail" /><span><small>Email</small>vishalbhinde73@gmail.com</span></a>
            <div><Icon name="map" /><span><small>Location</small>Madhya Pradesh, India</span></div>
            <a href="https://github.com/vishalbhinde73-sys" target="_blank" rel="noreferrer"><Icon name="github" /><span><small>GitHub</small>@vishalbhinde73-sys</span></a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">VB<span>.</span></a>
        <p>Designed and built with intention. © 2026 Vishal Bhinde.</p>
        <div><a href="https://github.com/vishalbhinde73-sys" target="_blank" rel="noreferrer"><Icon name="github" /></a><a href="https://www.linkedin.com/in/vishal-bhinde-41793232a" target="_blank" rel="noreferrer"><Icon name="linkedin" /></a></div>
      </footer>
    </div>
  );
}
