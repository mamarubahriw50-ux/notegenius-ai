export interface DocumentItem {
  id: string;
  title: string;
  subject: string;
  date: string;
  size: string;
  type: string;
  status: string;
  pages: number;
  content: string;
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  mastery: 'easy' | 'medium' | 'hard';
}

export interface FlashcardDeck {
  id: string;
  docId: string;
  title: string;
  subject: string;
  cards: Flashcard[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface StudyLog {
  id: string;
  date: string;
  action: string;
  detail: string;
  xp: number;
}
