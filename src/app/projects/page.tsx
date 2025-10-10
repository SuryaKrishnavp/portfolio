import Layout from '@/components/Layout';

export default function ProjectsPage() {
  return (
    <Layout>
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        {/* Detailed project cards */}
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

          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
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
              ))}
            </div>
          );
        })()}
      </main>
    </Layout>
  );
}
