import type { ContentIndex, ExamResults } from '../types';
import index from '../data/content-index.json';
import examResults from '../../data/ege-2026-results.json';

export function getContentIndex(): ContentIndex {
  return index as ContentIndex;
}

/** Проценты выполнения заданий ЕГЭ 2026 (ФИПИ), правятся в app/data/ege-2026-results.json. */
export function getExamResults(): ExamResults {
  return examResults as ExamResults;
}

export function getTask(id: string) {
  return getContentIndex().tasks.find((t) => t.id === id);
}

export function getBlock(id: string) {
  return getContentIndex().blocks.find((b) => b.id === id);
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}
