import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">About</h1>
        <p className="text-gray-300 leading-relaxed">
          I am Suryakrishna V P from Thrissur, Kerala, India. I have completed my graduation in BA Sociology from IGNOU University. I am a self-taught developer with a passion for building robust backend systems and scalable web applications. Previously, I have served as an NCC volunteer, which helped me develop discipline, teamwork, and leadership skills. I specialize in creating APIs, background workers, and services using Python (Django, FastAPI), and I also develop frontend interfaces with React and Next.js when required. I manage end-to-end delivery — from backend architecture and deployment pipelines to ensuring quality and performance standards across development stages. Additionally, I handle client communication and maintain key documentation, including proposals, invoices, and agreements.
        </p>
      </main>
    </Layout>
  );
}
