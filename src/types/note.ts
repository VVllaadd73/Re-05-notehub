// src/types/note.ts

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: string;
}

export interface Notes {
  notes: Note[];
  totalPages: number;
}

export interface FetchProps {
  page: number;
  searchQuery: string;
}
