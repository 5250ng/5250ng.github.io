// EBCDIC code pages supported by 5250ng.
// Source: 5250ng/README.md §Features and major_features.md §3.

export interface CodePage {
  id: string;
  region: string;
}

export const CODEPAGES: CodePage[] = [
  { id: 'CP037', region: 'US / Canada (default)' },
  { id: 'CP273', region: 'Germany / Austria' },
  { id: 'CP277', region: 'Denmark / Norway' },
  { id: 'CP278', region: 'Finland / Sweden' },
  { id: 'CP280', region: 'Italy' },
  { id: 'CP284', region: 'Spain / Latin America' },
  { id: 'CP285', region: 'United Kingdom' },
  { id: 'CP297', region: 'France' },
  { id: 'CP500', region: 'International' },
  { id: 'CP870', region: 'Central Europe (Latin-2)' },
  { id: 'CP420', region: 'Arabic' },
  { id: 'CP424', region: 'Hebrew' },
  { id: 'CP838', region: 'Thai' },
];
