export interface Solution {
  id: string;
  file: string;
  docstring: string;
  answer: string | null;
  code: string;
  dataFiles: { name: string; url: string }[];
}

export interface Task {
  id: string;
  folder: string;
  title: string;
  hasTheory: boolean;
  theoryMarkdown: string;
  solutions: Solution[];
  githubUrl: string;
}

export interface Block {
  id: string;
  title: string;
  description: string;
  taskIds: string[];
}

export interface ExternalCourse {
  id: string;
  title: string;
  author: string;
  platform: string;
  type: string;
  url: string;
  description: string;
}

/** Уровень сложности задания по спецификации ФИПИ: базовый, повышенный, высокий. */
export type TaskLevel = 'Б' | 'П' | 'В';

export interface ExamTaskResult {
  /** Номер задания по проекту ФИПИ 2027. */
  number: number;
  topic: string;
  /** Уровень задания в 2027 году. */
  level: TaskLevel;
  /** Уровень задания в 2026 году, если он отличался. По нему считается порог. */
  level2026?: TaskLevel;
  /** Номер задания в 2026 году, если он отличался. */
  number2026?: number;
  maxScore: number;
  /** Средний процент выполнения, null если статистики нет. */
  percent: number | null;
  /** Номер сноски из notes. */
  note?: number;
}

export interface ExamResults {
  year: number;
  title: string;
  description: string;
  thresholdNote: string;
  source: { title: string; detail: string; url: string };
  levelNames: Record<TaskLevel, string>;
  thresholds: Record<TaskLevel, number>;
  parts: { title: string; first: number; last: number }[];
  notes: { id: number; text: string }[];
  tasks: ExamTaskResult[];
}

export interface ContentIndex {
  generatedAt: string;
  meta: { title: string; subtitle: string };
  blocks: Block[];
  tasks: Task[];
  externalCourses: ExternalCourse[];
  stats: { taskCount: number; solutionCount: number; theoryCount: number };
}
