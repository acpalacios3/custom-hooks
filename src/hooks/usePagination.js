import { useState } from 'react';


// Custom Hook
function usePagination(
  totalItems ,
  itemsPerPage = 10,
  initialPage = 1
) {

//    current page
  const [currentPage, setCurrentPage] = useState(initialPage);

// the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

// Calculate the starting index
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Calculate the ending index. Math.min() limits the maximum page number
  const endIndex = Math.min( startIndex + itemsPerPage, totalItems);

  // Calculate items on current page
  const itemsOnCurrentPage = endIndex - startIndex;
 
  return {
    totalItems,
    itemsPerPage,
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage
  };

}  

export default usePagination
