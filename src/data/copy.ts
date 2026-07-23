export const copy = {
  EN: {
    nav: ['SELECTED WORK', 'CAPABILITIES', 'METHOD', 'CONTACT'],
    location: 'YAOUNDÉ, CAMEROON',
    label: 'AI AUTOMATION SPECIALIST — INDEPENDENT PRACTICE',
    hero: 'I make work disappear.',
    heroEm: 'work',
    intro:
      'Jean Franky Nkot builds the quiet systems behind high-performing teams: agents that read, decide, route and report while you work on the actual work.',
    scroll: 'SCROLL\nTO TRACE ↓',
    proof: 'Proof, not promises.',
    proofText:
      'A selection of systems built with n8n, Python and LLMs to turn manual effort into reliable flow.',
    field: '01 / FIELD NOTES',
    capabilities: '02 / SYSTEM CAPABILITIES',
    model: '03 / OPERATING MODEL',
    method: 'Automation should feel like',
    methodHighlight: 'good infrastructure.',
    steps: [
      ['Observe', 'Find the manual friction hiding inside a process.'],
      ['Compose', 'Design the smallest reliable system that solves it.'],
      ['Release', 'Make it visible, usable and calm to maintain.'],
    ] as [string, string][],
    contact: '04 / SAY HELLO',
    contactTop: 'THE NEXT GOOD SYSTEM STARTS WITH A CONVERSATION.',
    available: 'AVAILABLE FOR\nSELECTED MISSIONS\n\nREPLY: <24H',
    view: 'NIGHT VIEW',
    dayView: 'DAY VIEW',
    detail:
      'Built with focused orchestration, human-readable monitoring and graceful failure handling.',
    footer: 'BUILT WITHOUT NOISE',
    stackTitle: 'Tech Stack',
    certsTitle: 'CERTIFICATIONS & EDUCATION',
    education: 'BSc Computer Science (L3)',
    university: 'University of Yaoundé I — 2023–2026',
  },
  FR: {
    nav: ['PROJETS', 'COMPÉTENCES', 'MÉTHODE', 'CONTACT'],
    location: 'YAOUNDÉ, CAMEROUN',
    label: 'SPÉCIALISTE EN AUTOMATISATION IA — PRATIQUE INDÉPENDANTE',
    hero: 'Je fais disparaître le travail.',
    heroEm: 'disparaître',
    intro:
      "Jean Franky Nkot construit les systèmes discrets derrière les équipes performantes : des agents qui lisent, décident, routent et reportent pendant que vous vous concentrez sur l'essentiel.",
    scroll: 'SUIVRE\nLA TRACE ↓',
    proof: 'Des preuves, pas des promesses.',
    proofText:
      'Une sélection de systèmes créés avec n8n, Python et des LLM pour transformer le travail manuel en flux fiable.',
    field: '01 / NOTES DE TERRAIN',
    capabilities: '02 / CAPACITÉS SYSTÈME',
    model: '03 / MODÈLE OPÉRATIONNEL',
    method: "L'automatisation doit ressembler à une",
    methodHighlight: 'bonne infrastructure.',
    steps: [
      ['Observer', 'Identifier la friction manuelle cachée dans un processus.'],
      ['Composer', 'Concevoir le plus petit système fiable qui la résout.'],
      ['Déployer', 'Le rendre visible, utile et serein à maintenir.'],
    ] as [string, string][],
    contact: '04 / PRENONS CONTACT',
    contactTop: 'LE PROCHAIN BON SYSTÈME COMMENCE PAR UNE CONVERSATION.',
    available: 'DISPONIBLE POUR\nDES MISSIONS CIBLÉES\n\nRÉPONSE : <24H',
    view: 'MODE NUIT',
    dayView: 'MODE JOUR',
    detail:
      "Construit avec une orchestration précise, un monitoring lisible et une gestion des erreurs élégante.",
    footer: 'CONÇU SANS BRUIT',
    stackTitle: 'Stack technique',
    certsTitle: 'CERTIFICATIONS & FORMATION',
    education: 'Licence Informatique (L3)',
    university: 'Université de Yaoundé I — 2023–2026',
  },
} as const;

export type Lang = keyof typeof copy;
