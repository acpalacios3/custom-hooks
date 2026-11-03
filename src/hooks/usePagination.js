import React from "react";
import {useState} from React

import { useState } from 'react';

function usePagination(
  totalItems,
  itemsPerPage = 10,
  initialPage = 1
) {

//    current page
  const [currentPage, setCurrentPage] = useState(initialPage);

// the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

// Calculate the starting index
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Calculate the ending index
  const endIndex = Math.min( startIndex + itemsPerPage, totalItems);

}  

}
