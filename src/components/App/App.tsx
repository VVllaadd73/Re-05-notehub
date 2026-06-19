// src/components/App/App.tsx

import { useState } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { useQuery, keepPreviousData } from '@tanstack/react-query';

import Modal from '../Modal/Modal.tsx';
import NoteForm from '../NoteForm/NoteForm.tsx';
import Pagination from '../Pagination/Pagination.tsx';
import SearchBox from '../SearchBox/SearchBox.tsx'
import css from './App.module.css'

import { fetchNotes } from '../../services/noteService.ts'; 
import NoteList from "../NoteList/NoteList.tsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateSearchQuery = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value),
    300
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes', searchQuery, currentPage],
    queryFn: async () => fetchNotes({ page: currentPage, searchQuery: searchQuery }),
    placeholderData: keepPreviousData,
  });

  const totalPages = data ? data.totalPages : 1;

  if (isLoading) {
    return <p>Loading notes...</p>;
  }

  if (isError) {
    return <p>There was an error, please try again.</p>;
  }

  const handleCloseModal = () => {
  setIsModalOpen(false);
  };

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox onChange={updateSearchQuery} />

        {data && totalPages > 1 && (<Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />)}

        <button className={css.button} onClick={() => setIsModalOpen(true)}>
          Create note +
        </button>
      </header>
      {data && <NoteList notes={data.notes} />}
      {isModalOpen && (
        <Modal onClose={() => handleCloseModal}>
          <NoteForm onClose={() => handleCloseModal} />
        </Modal>
      )}
    </div>
  )
}
