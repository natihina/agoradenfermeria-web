interface Summary {
  id: number;
  magazine_id: number;
  section_id: number;
  position: number;
  author: string;
  abstract_id: number;
  text_id: number;
  status: number;

  abstract: File | undefined;
  text: File | undefined;

  label: SummaryLabel | undefined;
  section: SummarySection | undefined;
  institution: Institution | undefined;
}

interface SummaryLabel {
  summary_id: number;
  language: Lang;
  title: string;
  subtitle: string;
  page: number | string;
  keywords: string;

  keywords_array: string[];
}

interface SummarySection {
  id: number;
  name: string;
  institution: number;
  advertising: number;
  type: number;
  status: number;

  label: SummarySectionLabel | undefined;
}

interface SummarySectionLabel {
  section_id: number;
  language: Lang;
  title: string;
}
