export type AudienceType = 'students' | 'entrepreneurs' | 'general';
export type PresentationLevel = 'beginner' | 'intermediate' | 'advanced';

export interface BulletPoint {
  text: string;
  highlight?: string;
  iconName?: string;
}

export interface MonetizationDetails {
  difficulty: 'آسان' | 'آسان تا متوسط' | 'متوسط' | 'متوسط به پیشرفته' | 'پیشرفته' | string;
  initialCapital: string;
  estimatedMonthlyIncomeToman: string;
  estimatedMonthlyIncomeUSD: string;
  timeToFirstIncome: string;
  tools: string[];
  realWorldExample: string;
  bestSuitedFor: string;
  attractivenessScore: number; // 1 to 10
}

export interface SlideData {
  id: number;
  slideNumber: number;
  category: 'intro' | 'method' | 'strategy' | 'closing';
  methodCode?: string; // e.g. "روش ۰۱"
  title: string;
  subtitle: string;
  bullets: BulletPoint[];
  visualSuggestion: {
    prompt: string;
    description: string;
    icon: string;
    imagePath?: string;
  };
  speakerNote: {
    hook: string;
    mainPoints: string[];
    bodyLanguageTip: string;
    pitfallToAvoid: string;
    audienceTip: {
      students: string;
      entrepreneurs: string;
      general: string;
    };
  };
  designAdvice: {
    colors: string[];
    colorNames: string;
    layoutType: string;
    slideArchetype: string;
  };
  monetization?: MonetizationDetails;
}

export interface ChecklistItem {
  id: string;
  category: 'hardware' | 'content' | 'rehearsal' | 'presentation';
  title: string;
  description: string;
  isDone: boolean;
  priority: 'ضروری' | 'مهم' | 'پیشنهادی';
}
