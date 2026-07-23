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
      { name: 'Python', level: 'advanced' },
      { name: 'Claude API', level: 'advanced' },
      { name: 'Mistral AI', level: 'advanced' },
      { name: 'Groq', level: 'advanced' },
    ],
  },
  {
    title: 'Backend',
    titleFr: 'Backend',
    tools: [
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
      { name: 'AWS EC2', level: 'intermediate' },
      { name: 'Docker', level: 'advanced' },
      { name: 'Nginx', level: 'advanced' },
      { name: 'Cloudflare', level: 'advanced' },
    ],
  },
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export const certifications: Certification[] = [
  { title: 'Premiers pas dans le cloud', issuer: 'AWS SimuLearn', date: 'Jul 2026' },
  { title: 'Les fondamentaux du cloud', issuer: 'AWS SimuLearn', date: 'Jul 2026' },
  { title: 'Explorer l\'Amazon Bedrock Playgrounds', issuer: 'AWS SimuLearn', date: 'Jul 2026' },
  { title: 'Générer du code pour une page Web', issuer: 'AWS SimuLearn', date: 'Jul 2026' },
  { title: 'AI Fluency for Educators', issuer: 'Anthropic Academy', date: 'Jun 2026' },
  { title: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic Academy', date: 'May 2026' },
  { title: 'Claude 101', issuer: 'Anthropic Academy', date: 'Mar 2026' },
  { title: 'Claude Code 101', issuer: 'Anthropic Academy', date: 'Jul 2026' },
];
