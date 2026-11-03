import { useState } from 'react';


// Custom Hook
function usePagination(
  totalItems ,
  itemsPerPage = 10,
  initialPage = 1

) {

//    current page
  const [currentPage, setCurrentPage] = useState(initialPage);
  console.log('currentPage====>'+currentPage );

// the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

// Calculate the starting index
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Calculate the ending index. Math.min() limits the maximum page number
  const endIndex = Math.min( startIndex + itemsPerPage, totalItems);

  // Calculate items on current page
  const itemsOnCurrentPage = endIndex - startIndex;

  // page number that the user can navigate to. 
  // Changes the current page with setCurrentPage  while keeping the page number
  // within the valid range (1 to totalPages).
  
const setPage = (pageNumberNav) => {
  const newPage = Math.max(1,
    Math.min(pageNumberNav, totalPages)
  );

  setCurrentPage(newPage);
};

 
  return {
    totalItems,
    itemsPerPage,
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage
  };

}  

export default usePagination
