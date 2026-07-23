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
    metric: '50+',
    color: 'bg-[#ff694f]',
    en: [
      'CV & cover letter engine',
      'CVs and cover letters generated for multiple job postings and profiles. Analyzes offers, restructures documents to maximize recruiter match rate. Freemium SaaS with intelligent scoring and multi-format export.',
    ],
    fr: [
      'Moteur CV & lettres de motivation',
      "CV et lettres de motivation générés pour plusieurs offres et profils. Analyse les offres, restructure les documents pour maximiser le taux de correspondance recruteur. SaaS freemium avec scoring intelligent et export multi-format.",
    ],
    stack: ['Mistral AI', 'React', 'Django', 'Supabase', 'Vite'],
    link: { url: 'https://github.com/franky-nkot/cv-adapter', label: 'GitHub' },
  },
  {
    no: '03',
    name: 'Signal BI',
    metric: '97%',
    color: 'bg-[#78a7ff]',
    en: [
      'Reporting nervous system',
      'of reporting time removed. 18-node n8n workflow: multi-source collection, LLM classification via Groq, automatic Telegram alerts, Google Sheets dashboard. Score: 4.40/5 at the official n8n Community Challenge. Cost: €0.002 per execution.',
    ],
    fr: [
      'Système nerveux du reporting',
      "du temps de reporting supprimé. Workflow n8n de 18 nœuds : collecte multi-sources, classification LLM via Groq, alertes Telegram automatiques, dashboard Google Sheets. Score officiel 4,40/5 au n8n Community Challenge. Coût : 0,002€ par exécution.",
    ],
    stack: ['n8n', 'Groq', 'Llama 3.3', 'Google Sheets', 'Telegram'],
    link: { url: 'https://github.com/franky-nkot/n8n-workflows', label: 'GitHub' },
  },
  {
    no: '04',
    name: 'Motema Bot',
    metric: '6 tools',
    color: 'bg-[#d5ff55]',
    en: [
      '6-tool AI appointment agent',
      'tools orchestrated. Conversational Telegram bot for a dental clinic: memory-based AI agent, Google Calendar CRUD, email confirmations, real-time availability checking, multi-scenario handling (book, modify, cancel).',
    ],
    fr: [
      'Agent IA de RDV à 6 outils',
      "outils orchestrés. Bot Telegram conversationnel pour cabinet dentaire : agent IA avec mémoire, CRUD Google Calendar, confirmations email, vérification de disponibilité en temps réel, gestion multi-scénarios (réserver, modifier, annuler).",
    ],
    stack: ['n8n', 'Groq', 'Llama 4 Scout', 'Telegram', 'Google Calendar'],
    link: { url: 'https://github.com/franky-nkot/n8n-workflows', label: 'GitHub' },
  },
  {
    no: '05',
    name: 'Email Classifier',
    metric: '6 cat.',
    color: 'bg-[#78a7ff]',
    en: [
      'LLM email triage agent',
      'categories handled. Webhook trigger → Mistral Large classifies and drafts a contextual reply. Categories: setup, security, pricing, escalation, hr, spam. JSON parser with regex fallback. Official score: 4.40/5 at the n8n Community Challenge.',
    ],
    fr: [
      'Agent de tri email par LLM',
      "catégories gérées. Webhook trigger → Mistral Large classifie et rédige une réponse contextuelle. Catégories : setup, sécurité, pricing, escalade, RH, spam. Parser JSON avec fallback regex. Score officiel : 4,40/5 au n8n Community Challenge.",
    ],
    stack: ['n8n', 'Mistral Large', 'Webhook'],
    link: { url: 'https://github.com/franky-nkot/n8n-workflows', label: 'GitHub' },
  },
  {
    no: '06',
    name: 'Geopolitical Watch',
    metric: '2×/day',
    color: 'bg-[#ff694f]',
    en: [
      'Automated news intelligence agent',
      'broadcasts per day. Runs at 6AM and 7PM. Scrapes BBC World RSS, filters by geopolitical keywords (Iran, war, Trump, China, Israel, conflict, gas, US), summarizes in French via Groq Llama 3.3-70b, dispatches to a Telegram channel.',
    ],
    fr: [
      'Agent de veille géopolitique automatisé',
      "diffusions par jour. Tourne à 6h et 19h. Scrape BBC World RSS, filtre par mots-clés géopolitiques (Iran, guerre, Trump, Chine, Israël, conflit, gaz, US), résume en français via Groq Llama 3.3-70b, envoie sur un canal Telegram.",
    ],
    stack: ['n8n', 'Groq', 'Llama 3.3', 'BBC RSS', 'Telegram'],
    link: { url: 'https://github.com/franky-nkot/n8n-workflows', label: 'GitHub' },
  },
];
