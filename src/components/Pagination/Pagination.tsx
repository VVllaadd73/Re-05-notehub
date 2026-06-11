// src/components/Pagination/Pagination.tsx

import css from './Pagination.module.css'
import ReactPaginate from 'react-paginate'; 

export default function Pagination() {
  return (
    <div className={css.pagination}>
      <ReactPaginate
        pageCount={10}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        containerClassName={css.paginationContainer}
        pageLinkClassName={css.pageLink}
        activeLinkClassName={css.activeLink}
      />
    </div>
  )
}