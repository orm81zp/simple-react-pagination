import React from 'react';
import classNames from 'classnames';

const Pagination = ({postsPerPage, totalPosts, currentPage, paginate}) => {
  const pageNumbers = []
  const maxLength = Math.ceil(totalPosts / postsPerPage);

  for(let i=1; i <= maxLength; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => {
          const liClasses = classNames("page-item", { active: currentPage === number });

          const content = currentPage === number
            ? ( <span className="page-link">{number}</span> )
            : ( <a className="page-link" onClick={(e) => paginate(e, number)} href="!#">{number}</a> );

          return (
            <li key={number} className={liClasses}>
              {content}
          </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Pagination;
