export interface Project {
  no: string;
  name: string;
  metric: string;
  color: string;
  en: [string, string];
  fr: [string, string];
  stack: string[];
  link?: { url: string; label: string };
}

export const projects: Project[] = [
  {
    no: '01',
    name: 'JobCopilot',
    metric: '515+',
    color: 'bg-[#d5ff55]',
    en: [
      'Outbound intelligence system',
      'emails sent automatically. 8 parallel workers: scraping Guichet Emplois, email enrichment, AI scoring via Mistral, personalized Gmail sending, real-time Iron Man HUD monitoring dashboard on port 8081.',
    ],
    fr: [
      "Système d'intelligence outbound",
      "emails envoyés automatiquement. 8 workers parallèles : scraping Guichet Emplois, enrichissement email, scoring IA via Mistral, envoi Gmail personnalisé, dashboard monitoring Iron Man HUD en temps réel sur port 8081.",
    ],
    stack: ['Python', 'Selenium', 'Mistral AI', 'Gmail API', 'BeautifulSoup'],
    link: { url: 'https://github.com/franky-nkot/jobcopilot', label: 'GitHub' },
  },
  {
    no: '02',
    name: 'Akala AI',
    metric: 'v1',
    color: 'bg-[#ff694f]',
    en: [
      'CV adaptation engine',
      'Analyzes job postings, restructures the CV to maximize recruiter match rate. Freemium SaaS with intelligent scoring and multi-format export.',
    ],
    fr: [
      "Moteur d'adaptation de CV",
      "Analyse les offres d'emploi, restructure le CV pour maximiser le taux de correspondance recruteur. SaaS freemium avec scoring intelligent et export multi-format.",
    ],
    stack: ['Mistral AI', 'React', 'Django', 'Supabase', 'Vite'],
  },
  {
    no: '03',
    name: 'Signal BI',
    metric: '97%',
    color: 'bg-[#78a7ff]',
    en: [
      'Reporting nervous system',
      'of reporting time removed. 18-node n8n workflow: multi-source collection, LLM classification via Groq (scored 4.40/5 at n8n Community Challenge), automatic Telegram alerts, Google Sheets dashboard. Cost: €0.002 per execution.',
    ],
    fr: [
      'Système nerveux du reporting',
      "du temps de reporting supprimé. Workflow n8n de 18 nœuds : collecte multi-sources, classification LLM via Groq (score officiel 4,40/5 au n8n Community Challenge), alertes Telegram automatiques, dashboard Google Sheets. Coût : 0,002€ par exécution.",
    ],
    stack: ['n8n', 'Groq', 'Llama 3.3', 'Google Sheets', 'Telegram'],
  },
  {
    no: '04',
    name: 'Motema Bot',
    metric: '6',
    color: 'bg-[#d5ff55]',
    en: [
      'AI appointment agent',
      'tools orchestrated. Conversational Telegram bot for a dental clinic: memory-based AI agent, Google Calendar CRUD, email confirmations, real-time availability checking, multi-scenario handling (book, modify, cancel).',
    ],
    fr: [
      'Agent IA de prise de RDV',
      "outils orchestrés. Bot Telegram conversationnel pour cabinet dentaire : agent IA avec mémoire, CRUD Google Calendar, confirmations email, vérification de disponibilité en temps réel, gestion multi-scénarios (réserver, modifier, annuler).",
    ],
    stack: ['n8n', 'Groq', 'Llama 4 Scout', 'Telegram', 'Google Calendar'],
  },
];
