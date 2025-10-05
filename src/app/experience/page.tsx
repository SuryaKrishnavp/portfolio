import Layout from '@/components/Layout';
import ExperienceCard from '@/components/ExperienceCard';

const experiences = [
  {
    title: 'Freelance Developer',
    period: '2025 - Present',
    completedWorks: [
      'Built backend APIs and admin dashboards for 5+ small businesses',
      'Integrated payment gateways and automated invoicing for clients',
    ],
    team: 'Worked independently and with small distributed teams (2-4 people) depending on the project',
    responsibilities: [
      'Design and implement RESTful APIs with Django/FastAPI',
      'Deploy applications using Docker and cloud VPS',
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

export default function ExperiencePage() {
  return (
    <Layout>
      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Experience</h1>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.title} {...exp} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
