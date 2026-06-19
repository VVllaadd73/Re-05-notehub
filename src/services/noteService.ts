// src/services/noteService.ts

import type { Note, Notes, FetchProps } from '../types/note.ts'
import axios from 'axios';

const dataURL = () => {
  const token = import.meta.env.VITE_NOTEHUB_TOKEN;
  const API_URL = 'https://notehub-public.goit.study/api/notes';
  return { token, API_URL };
};

export async function fetchNotes({ page, searchQuery }: FetchProps): Promise<Notes> {
  const { token, API_URL } = dataURL();
  const response = await axios.get<Notes>(API_URL, {
    params: {
      page,
      ...(searchQuery && { search: searchQuery }),
      perPage: 12
    },
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}

export async function createNote(note: Note) {
  const { token, API_URL } = dataURL();
  const response = await axios.post<Note>(API_URL, note, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}

export default async function deleteNote(id: string) {
  const { token, API_URL } = dataURL();
  const response = await axios.delete(
  `${API_URL}/${id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
  return response.data;
}
