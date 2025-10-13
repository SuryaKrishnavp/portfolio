'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import SkillCard from '@/components/SkillCard';
import ExperienceCard from '@/components/ExperienceCard';
// ...existing code... (SocialLink not used here)

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { title: 'Backend', skills: 'Python • Django • FastAPI', progress: 90, color: 'blue' as const },
    { title: 'Frontend', skills: 'JavaScript • React • Next.js', progress: 75, color: 'purple' as const },
    { title: 'Tools & Others', skills: 'Git • Docker • AWS • PostgreSQL • MongoDB', progress: 80, color: 'green' as const },
  ];

  const experiences = [
    {
      title: 'Freelance Developer',
      bulletPoints: [
        'Working on various client projects focusing on backend development',
        'Developing custom solutions using Python, Django, and FastAPI',
        'Building scalable and maintainable web applications',
      ],
    },
    {
      title: 'Jr. Software Developer',
      company: 'Extramind Technologies',
      bulletPoints: [
        'Developed and maintained backend systems using Python frameworks',
        'Collaborated with cross-functional teams on various projects',
        'Implemented RESTful APIs and database solutions',
      ],
    },
  ];

  return (
    <Layout>
  <main id="home" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-20 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        {/* Hero */}
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12 md:mb-20">
          {/* single column on mobile so the image sits below the name; two columns on md+ */}
          <div className="md:col-span-1">
            <h1 className="text-5xl sm:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">SURYAKRISHNA V P</h1>
            <h2 className="text-xl sm:text-lg text-gray-300 mb-4">FullStack Developer | Backend Specialist</h2>
            <p className="text-base text-gray-400 mb-4 max-w-xl md:hidden">I specialize in building robust backend systems and scalable web applications using Python, Django, and React.
</p>
            <p className="hidden md:block text-base text-gray-400 mb-4 max-w-xl">I specialize in building robust backend systems and scalable web applications with a strong foundation in Python, Django, and FastAPI. Alongside backend expertise, I design and develop modern, responsive, and user-friendly frontend experiences using React and Next.js. My focus is on delivering high-performance, secure, and maintainable solutions that not only meet business needs but also provide seamless experiences for end users. By combining strong problem-solving skills with a passion for clean architecture and efficient development practices, I ensure that every project is both future-ready and adaptable to growth.</p>
            <div className="flex gap-4">
              <a href="/SURYAKRISHNA V P - Backend & Fullstack Developer Resume.pdf" download="Suryakrishna_Resume.pdf" className="inline-flex items-center bg-blue-500 hover:bg-blue-400 text-black font-semibold px-3 py-2 rounded">Resume</a>
              <a href="#contact" className="inline-flex items-center border border-white/10 text-white px-3 py-2 rounded">Contact</a>
            </div>
          </div>

          <div className="md:col-span-1 flex justify-center md:justify-end">
            <div className="w-full h-[28rem] sm:h-[32rem] md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-lg overflow-hidden avatar-no-corner-mobile shadow-lg">
              {/* mobile: cover with object-top to preserve top; desktop (md+) use object-contain so image isn't cropped */}
              <img src="/surya.png" alt="Suryakrishna" className="w-full h-full object-cover object-top md:object-contain md:object-center block" />
            </div>
          </div>
        </section>

        {/* About (summary) */}
  <section id="about" className="mb-12 md:mb-20 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-semibold mb-4">About</h3>
            <p className="text-gray-300 mb-4 max-w-3xl">I am Suryakrishna V P from Thrissur, Kerala, India. I have completed my graduation in BA Sociology from IGNOU University. I am a self-taught developer with a passion for building robust backend systems and scalable web applications. Previously, I have served as an NCC volunteer, which helped me develop discipline, teamwork, and leadership skills. I specialize in creating APIs, background workers, and services using Python (Django, FastAPI), and I also develop frontend interfaces with React and Next.js when required. I manage end-to-end delivery — from backend architecture and deployment pipelines to ensuring quality and performance standards across development stages. Additionally, I handle client communication and maintain key documentation, including proposals, invoices, and agreements.</p>
            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 bg-white/5 rounded">Python</span>
              <span className="px-3 py-1 bg-white/5 rounded">Django</span>
              <span className="px-3 py-1 bg-white/5 rounded">FastAPI</span>
              <span className="px-3 py-1 bg-white/5 rounded">React</span>
              <span className="px-3 py-1 bg-white/5 rounded">Next.js</span>
              <span className="px-3 py-1 bg-white/5 rounded">PostgreSQL</span>
              <span className="px-3 py-1 bg-white/5 rounded">MongoDB</span>
            </div>
            
          </div>

          <aside className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Quick Facts</h4>
            <ul className="text-gray-300 space-y-1">
              <li><strong>Location:</strong> India</li>
              <li><strong>Availability:</strong> Freelance & Fulltime Opportunity</li>
              <li><strong>Experience:</strong> 2 year</li>
            </ul>
          </aside>
        </section>

        {/* Skills */}
        <section className="mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.title} title={skill.title} skills={skill.skills} progress={skill.progress} color={skill.color} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-12 md:mb-20">
          <h3 className="text-3xl font-semibold mb-8">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(() => {
              const projects = [
                {
                  name: 'DEVLOK Real Estate CRM',
                  repo: 'https://github.com/SuryaKrishnavp/devlokback',
                  details: 'Backend API for a real-estate CRM built with Django and MySQL, responsible for property, lead and user management.',
                  tech: ['Django', 'Celery', 'MySQL', 'Redis'],
                  working: 'Exposes REST endpoints for CRUD operations, authentication, role-based access and background tasks for email notifications.',
                  problems: [
                    {
                      problem: 'Background tasks occasionally failed under load',
                      solution: 'Switched to resilient Celery retry policies, increased worker concurrency, and monitored task rates to scale workers horizontally using Docker.'
                    },
                  ],
                },
                {
                  name: 'Broad Way App',
                  repo: 'https://github.com/SuryaKrishnavp/Broadway',
                  details: 'Django-based multi-service application providing on-demand services with a central REST API and MySQL backend.',
                  tech: ['Python', 'Django', 'MySQL', 'Social Auth'],
                  working: 'Central API handles requests from mobile/web clients; background workers process long-running tasks such as invoices and notifications.',
                  problems: [
                    {
                      problem: 'High latency on list endpoints with large datasets',
                      solution: 'Implemented pagination, indexed frequently queried DB fields and added query optimizations; also introduced Redis caching for heavy repeated queries.'
                    },
                  ],
                },
                {
                  name: 'Sayas Group Website',
                  repo: 'https://github.com/SuryaKrishnavp/sayasweb',
                  details: 'Responsive marketing website built with React + Vite to showcase company services and capture leads.',
                  tech: ['React', 'Vite', 'Tailwind CSS'],
                  working: 'Static site with client-side interactivity, contact form integration that submits leads to a backend API.',
                  problems: [
                    {
                      problem: 'SEO and fast load times required',
                      solution: 'Optimized images, implemented lazy-loading, and minimized bundle size by splitting routes and removing unused dependencies.'
                    },
                  ],
                },
              ];

              return projects.map((p) => (
                <article key={p.name} className="bg-gray-800 p-6 rounded-lg flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{p.name}</h4>
                    <p className="text-gray-300 mb-3">{p.details}</p>

                    <div className="mb-3">
                      <div className="text-sm text-gray-400 mb-2">Tech stack:</div>
                      <div className="flex gap-2 flex-wrap">
                        {p.tech.map((t: string) => (
                          <span key={t} className="px-2 py-1 bg-white/5 rounded text-xs">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="text-sm text-gray-400 mb-1">How it works:</div>
                      <p className="text-gray-300 text-sm">{p.working}</p>
                    </div>

                    <div>
                      <div className="text-sm text-gray-400 mb-2">Problems & solutions:</div>
                      <ul className="list-none pl-0 text-gray-300 space-y-2">
                        {p.problems.map((ps: { problem: string; solution: string }, idx: number) => (
                          <li key={idx} className="marker:hidden">
                            <div className="font-medium">{ps.problem}</div>
                            <div className="text-sm text-gray-300">{ps.solution}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <a href={p.repo} target="_blank" rel="noreferrer" className="text-blue-400">View repo</a>
                  </div>
                </article>
              ));
            })()}
          </div>
        </section>

        <section id="experience" className="mb-20">
          <h3 className="text-3xl font-semibold mb-8 text-center">Work Experience</h3>
          <div className="space-y-8">
            {(() => {
              const exps = [
                {
                  title: 'Freelance Developer',
                  period: '2025 - Present',
                  completedWorks: [
                    'Built backend APIs and admin dashboards for 5+ small businesses',
                    'Led end-to-end project delivery by overseeing timelines, coordinating teams, ensuring quality, and managing client communication and documentation',
                  ],
                  team: 'Worked independently and with small distributed teams (2-4 people) depending on the project',
                  responsibilities: [
                    'Design and implement RESTful APIs with Django/FastAPI',
                    'Deploy applications using cloud VPS',
                    'Write integration tests and CI pipelines'
                  ],
                  achievements: [
                    'Reduced average API response time by 40% for a client via query optimization and caching',
                  ]
                },
                {
                  title: 'Jr. Software Developer',
                  company: 'Extramind Technologies',
                  period: '2024 - 2025',
                  completedWorks: [
                    'Contributed to backend modules for internal tools',
                    'Implemented REST endpoints for order management and reporting',
                  ],
                  team: 'Part of a cross-functional team with 5 developers, 1 QA, and 1 PM',
                  responsibilities: [
                    'Support and extend existing Django applications',
                    'Collaborate with frontend teams to integrate APIs',
                    'Participate in code reviews and sprint planning'
                  ],
                  achievements: [
                    'Helped migrate legacy endpoints to a new modular service, improving maintainability'
                  ]
                }
              ];

              return exps.map((exp) => (
                <ExperienceCard key={exp.title} {...exp} />
              ));
            })()}
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h3 className="text-3xl font-semibold mb-8 text-center">Connect Me</h3>
          <p className="text-gray-300 text-center mb-6">Let’s connect and build something amazing together. Reach out through any of the channels below.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            <a href="https://wa.me/916282870940" target="_blank" rel="noreferrer" className="bg-green-700 hover:bg-green-600 text-black p-4 rounded-lg flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M20.52 3.48A11.89 11.89 0 0012 0C5.37 0 .5 5.37.5 12c0 2.11.55 4.09 1.6 5.86L0 24l6.39-1.62A11.89 11.89 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52z" fill="#fff"/>
                <path d="M17.07 14.04c-.28-.14-1.66-.82-1.92-.91-.26-.09-.44-.14-.63.14-.19.28-.76.91-.93 1.1-.17.19-.35.21-.63.07-.28-.14-1.05-.4-2-1.25-.74-.66-1.25-1.47-1.4-1.74-.15-.27-.02-.42.12-.56.14-.14.29-.36.44-.55.15-.19.2-.31.29-.51.08-.2.05-.37-.02-.52-.07-.15-.66-1.56-.9-2.14-.24-.58-.46-.5-.64-.51-.18-.01-.36-.01-.52-.01-.17 0-.42.02-.64.31-.22.29-.85.98-.85 2.4 0 1.42.87 2.49 1 2.68.13.19 2.03 3.11 4.95 4.37 2.38 1.03 2.03.67 2.38.61.35-.06 1.48-.67 1.69-1.3.21-.63.21-1.17.16-1.29-.05-.12-.24-.19-.52-.33z" fill="#000"/>
              </svg>
              <div className="text-sm font-semibold">WhatsApp</div>
            </a>

            <a href="mailto:vpsuryakrishna@gmail.com" className="bg-blue-700 hover:bg-blue-600 text-black p-4 rounded-lg flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" fill="#fff"/>
                <path d="M3 6l9 7 9-7" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div className="text-sm font-semibold">Email</div>
            </a>

            <a href="https://www.instagram.com/surya_krishnavp/?hl=en" target="_blank" rel="noreferrer" className="bg-pink-600 hover:bg-pink-500 text-black p-4 rounded-lg flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="6" fill="#fff"/>
                <circle cx="12" cy="12" r="3" fill="#000"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#000"/>
              </svg>
              <div className="text-sm font-semibold">Instagram</div>
            </a>

            <a href="https://github.com/SuryaKrishnavp" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.93.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.338 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.16.59.67.49C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" fill="#fff"/>
              </svg>
              <div className="text-sm font-semibold">GitHub</div>
            </a>

            <a href="https://www.linkedin.com/in/suryakrishna-vp/" target="_blank" rel="noreferrer" className="bg-blue-800 hover:bg-blue-700 text-white p-4 rounded-lg flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5z" fill="#fff"/>
                <path d="M0 8h5v16H0V8zm7.5 0h4.6v2.2h.1c.64-1.2 2.2-2.2 4.5-2.2 4.8 0 5.7 3.2 5.7 7.4V24h-5v-7.2c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-5V8z" fill="#fff"/>
              </svg>
              <div className="text-sm font-semibold">LinkedIn</div>
            </a>
            
            <a href="https://x.com/suryakrishna_vp" target="_blank" rel="noreferrer" className="bg-sky-500 hover:bg-sky-400 text-white p-4 rounded-lg flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M21.6 5.2c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8-.7.4-1.5.7-2.4.9C17.6 4 16.7 3.6 15.6 3.6c-1.6 0-2.9 1.3-2.9 2.9 0 .2 0 .4.1.6-2.4-.1-4.6-1.3-6-3.1-.3.5-.4 1-.4 1.6 0 1.1.6 2.1 1.6 2.7-.5 0-1-.2-1.4-.4v.1c0 1.4 1 2.6 2.4 2.8-.4.1-.8.1-1.2.1-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.6 3.3-1.7 1.3-3.7 2-5.9 2-.4 0-.8 0-1.2-.1 2.1 1.4 4.6 2.2 7.3 2.2 8.8 0 13.6-7.3 13.6-13.6v-.6c.9-.7 1.6-1.6 2.1-2.6-.8.4-1.7.6-2.6.7z" fill="#fff"/>
              </svg>
              <div className="text-sm font-semibold">X</div>
            </a>
            

            
          </div>
        </section>
      </main>
    </Layout>
  );
}