import { AiOutlinePhone, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { LiaSitemapSolid } from "react-icons/lia";
import { GrSystem } from "react-icons/gr";
import { CgPerformance } from "react-icons/cg";
import { IoAccessibilityOutline } from "react-icons/io5";

function MainContent() {
  return (
    <main className="main-content">
      <section className="section-hero">
        <h1>Keith Wallace</h1>
        <h2>Staff Software Engineer</h2>
        <p>I design and build frontend systems that scale, perform, and hold up under real-world complexity.</p>
        <nav>
          <a href="tel:+9179218436"><AiOutlinePhone /> 1-917-921-8436</a>
          <a href="https://github.com/Keith-Wallace" target="_blank"><AiOutlineGithub /> GitHub</a>
          <a href="https://www.linkedin.com/in/keithtwallace/" target="_blank"><AiOutlineLinkedin /> LinkedIn</a>
          <a href="mailto:keith@wallace.dev"><AiOutlineMail /> keith@wallace.dev</a>
        </nav>
      </section>
      <section className="section-ability-scores">
        <h2>What I Focus On</h2>
        <div className="card-info">
          <div><LiaSitemapSolid /></div>
          <div>
            <h3>Frontend Architecture</h3>
            <p>Building systems teams want to work in—scalable, maintainable, and clear.</p>
          </div>
        </div>
        <div className="card-info">
          <div><GrSystem /></div>
          <div>
            <h3>Systems Design</h3>
            <p>Thinking beyond the UI to how everything connects and evolves.</p>
          </div>
        </div>
        <div className="card-info">
          <div><CgPerformance /></div>
          <div>
            <h3>Performance Optimization</h3>
            <p>Sweating the details so products feel fast, fluid, and responsive.</p>
          </div>
        </div>
        <div className="card-info">
          <div><IoAccessibilityOutline /></div>
          <div>
            <h3>Accessibility</h3>
            <p>Making sure great experiences are actually usable by everyone.</p>
          </div>
        </div>
      </section>
      <section className="attack-table">
        <h2>Selected Work</h2>
        <div>
          <h3>WCAG Compliance - Teladoc Health</h3>
          <p>While at Teladoc Health, I led an initiative to bring our core user-facing flows into WCAG compliance, with a focus on improving accessibility for users with visual and motor impairments. I partnered with design and product to redesign key components, including form inputs, page navigation, and validation error handling, ensuring proper semantics, keyboard navigation, and screen reader support. These improvements expanded access for a broader set of users while also enhancing overall usability and consistency across the platform. As a result, we reduced user friction in critical flows (such as creating a virtual visit with a provider) and established accessibility patterns that scaled across future features.</p>
        </div>
        <div>
          <h3>PharmaDinners</h3>
          <p>Providing strategic and technical guidance on product architecture and engineering strategy for an early-stage startup</p>
        </div>
      </section>
      <section className="character-background">
        <h2>Experiences</h2>
        <div className="experience-card">
          <h3>Founding Engineer (Independent Project)</h3>
          <span>Stealth SaaS Startup | Remote | 2026-Present</span>
          <ul>
            <li>Define the technical vision and architecture for a greenfield SaaS platform from concept through MVP.</li>
            <li>Design and implement the platform's system architecture, including frontend, backend, authentication, data layer, and cloud infrastructure.</li>
            <li>Lead development of the platform using React, Supabase, PostgreSQL, and modern JavaScript development practices.</li>
            <li>Partner closely with executive leadership to translate product vision and business requirements into scalable software architecture and technical solutions.</li>
            <li>Design flexible data models, configurable business rules, and end-to-end application workflows that support scalability, maintainability, and future product evolution</li>
            <li>Evaluate AI-assisted development workflows and emerging LLM technologies to improve engineering productivity and inform future platform capabilities</li>
            <li>Establish engineering standards, development workflows, source control practices, and long-term technical strategy</li>
          </ul>
          <div className="skills">
            <span>React</span>
            <span>TypeScript</span>
            <span>Supabase</span>
            <span>Vite</span>
          </div>
        </div>
        <div className="experience-card">
          <h3>Chief Technical Advisor (Volunteer Side Project)</h3>
          <span>PharmaDinners | Remote | 2025–Present</span>
          <ul>
            <li>Provide strategic and technical guidance on product architecture and engineering strategy for an early-stage startup</li>
            <li>Partner with the founding team to define roadmap priorities and shape MVP features</li>
            <li>Mentor and guide a contract developer, ensuring scalable and maintainable code</li>
          </ul>
          <div className="skills">
            <span>React</span>
            <span>JavaScript</span>
            <span>Airtable</span>
            <span>Webflow (SMS)</span>
          </div>
        </div>
        <div className="experience-card">
          <h3>Staff Engineer</h3>
          <span>Teladoc Health, LLC | New York, NY | 2018–2026</span>
          <ul>
            <li>Lead development and deployment of high-scale features on the Teladoc platform, serving millions of users</li>
            <li>Manage a team of six co-sourced developers, providing guidance, conducting code reviews, and prioritizing development tasks</li>
            <li>Collaborate with Product, Design, QA, and leadership on roadmap planning and technical strategy</li>
            <li>Guide technical strategy decisions, balancing speed and long-term scalability; foster refactoring practices to keep the codebase efficient and future-proof</li>
            <li>Architect and maintain a reusable component library and design system, streamlining developer workflows and ensuring
            consistent UI/UX across the platform</li>
            <li>Leverage Jenkins CI/CD pipelines to automate testing and deployments, reducing release times and error rates</li>
            <li>Monitor the production environment for application errors, spikes in failure rates, or performance issues, using tools like New  Relic to promptly identify and resolve incidents</li>
            <li>Analyze user conversion funnels with Amplitude, identifying drop-off points and implementing UX improvements that increase
            consultation requests</li>
          </ul>
          <div className="skills">
            <span>React</span>
            <span>JavaScript</span>
            <span>Ruby on Rails</span>
            <span>Jenkins CL/CI</span>
            <span>Accessibility</span>
          </div>
        </div>
        <div className="experience-card">
          <h3>Senior Front-End Developer</h3>
          <span>Everplans (now National Guardian Life Insurance) | New York, NY | 2016–2018</span>
          <ul>
            <li>Delivered efficient, scalable code to support rapid feature releases and platform growth</li>
            <li>Helped architect reusable front-end components and resolve complex issues through comprehensive testing</li>
            <li>Collaborated with cross-functional teams to ensure seamless front-end/back-end integration</li>
          </ul>
          <div className="skills">
            <span>React</span>
            <span>JavaScript</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
