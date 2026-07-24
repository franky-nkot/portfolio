export type Level = 'expert' | 'advanced' | 'intermediate';

export interface Tool {
  name: string;
  level: Level;
}

export interface StackCategory {
  title: string;
  titleFr: string;
  tools: Tool[];
}

export const stack: StackCategory[] = [
  {
    title: 'Automation & AI',
    titleFr: 'Automatisation & IA',
    tools: [
      { name: 'n8n', level: 'expert' },
      { name: 'Make.com', level: 'advanced' },
      { name: 'Python', level: 'advanced' },
      { name: 'Claude API', level: 'advanced' },
      { name: 'OpenAI API', level: 'advanced' },
      { name: 'Mistral AI', level: 'advanced' },
      { name: 'Groq', level: 'advanced' },
      { name: 'RAG / pgvector', level: 'advanced' },
    ],
  },
  {
    title: 'Backend',
    titleFr: 'Backend',
    tools: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Django', level: 'advanced' },
      { name: 'FastAPI', level: 'intermediate' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'Supabase', level: 'advanced' },
      { name: 'Redis', level: 'intermediate' },
    ],
  },
  {
    title: 'Frontend',
    titleFr: 'Frontend',
    tools: [
      { name: 'React', level: 'intermediate' },
      { name: 'Next.js', level: 'intermediate' },
      { name: 'TypeScript', level: 'intermediate' },
      { name: 'Tailwind CSS', level: 'advanced' },
    ],
  },
  {
    title: 'Infrastructure',
    titleFr: 'Infrastructure',
    tools: [
      { name: 'Docker', level: 'advanced' },
      { name: 'Linux/Bash', level: 'advanced' },
      { name: 'AWS EC2', level: 'intermediate' },
      { name: 'Nginx', level: 'advanced' },
      { name: 'Cloudflare', level: 'advanced' },
      { name: 'Git', level: 'advanced' },
    ],
  },
];

export interface Certification {
  en: string;
  fr: string;
  issuer: string;
  date: string;
}

export const certifications: Certification[] = [
  { en: 'Secure Conversational AI with Guardrails', fr: 'IA conversationnelle sécurisée avec des garde-fous', issuer: 'AWS SimuLearn', date: 'Jul 2026' },
  { en: 'First Steps in the Cloud', fr: 'Premiers pas dans le cloud', issuer: 'AWS SimuLearn', date: 'Jul 2026' },
  { en: 'Cloud Fundamentals', fr: 'Les fondamentaux du cloud', issuer: 'AWS SimuLearn', date: 'Jul 2026' },
  { en: 'Exploring Amazon Bedrock Playgrounds', fr: 'Explorer l\'Amazon Bedrock Playgrounds', issuer: 'AWS SimuLearn', date: 'Jul 2026' },
  { en: 'Generate Code for a Web Page', fr: 'Générer du code pour une page Web', issuer: 'AWS SimuLearn', date: 'Jul 2026' },
  { en: 'Claude Code 101', fr: 'Claude Code 101', issuer: 'Anthropic Academy', date: 'Jul 2026' },
  { en: 'AI Fluency for Educators', fr: 'AI Fluency for Educators', issuer: 'Anthropic Academy', date: 'Jun 2026' },
  { en: 'AI Fluency: Framework & Foundations', fr: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic Academy', date: 'May 2026' },
  { en: 'Claude 101', fr: 'Claude 101', issuer: 'Anthropic Academy', date: 'Mar 2026' },
  { en: 'Build Agents ADK', fr: 'Build Agents ADK', issuer: 'Google Cloud', date: '2026' },
  { en: 'MLOps for Generative AI', fr: 'MLOps pour l\'IA générative', issuer: 'Google Cloud', date: '2026' },
  { en: 'Prompt Engineering', fr: 'Prompt Engineering', issuer: 'Google Cloud', date: '2026' },
  { en: 'Intro to Generative AI', fr: 'Introduction à l\'IA générative', issuer: 'Google Cloud', date: '2026' },
  { en: 'MOOC Orange no-code (10/10)', fr: 'MOOC Orange no-code (10/10)', issuer: 'Orange Digital Center', date: 'Jun 2026' },
  { en: 'FutureWorks, Virtual Delegate', fr: 'FutureWorks, Délégué virtuel', issuer: 'World Bank Youth Summit', date: '2026' },
];
