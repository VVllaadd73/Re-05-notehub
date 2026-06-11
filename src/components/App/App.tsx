// App.tsx

import { useState } from "react";
import Pagination from '../Pagination/Pagination.tsx';
import SearchBox from '../SearchBox/SearchBox.tsx'
import css from './App.module.css'

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox />
        {/* {<Pagination />} */}
        <button className={css.button}>Create note +</button>
      </header>
    </div>
  )
}
