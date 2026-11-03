import usePagination from "../hooks/usePagination";
import { useState } from "react";

function PaginacionDemo(){ const { 
                            totalItems,
                            itemsPerPage,
                            currentPage,
                            totalPages,
                            startIndex,
                            endIndex,
                            itemsOnCurrentPage,
                            setPage
                        }=usePagination(123,10,1);

const [pageNumber, setPageNumber] = useState(1);


const handleTestPage = () => {
    setPage(Number(pageNumber));
  };
    
    return(
       
       <section>
            <h2>Pagination Demo</h2>
            <p>Items per page: {itemsPerPage}</p>
            <p>Total Items: {totalItems}</p>
            <p>Current page: {currentPage}</p>
            <p>Total pages: {totalPages}</p>
            <p>Start index: {startIndex}</p>
            <p>End index: {endIndex}</p>
            <p>Items on current page: {itemsOnCurrentPage}</p>
            <input
                type="number"
                value={pageNumber}
                onChange={(e) => setPageNumber(e.target.value)}
            />

            <button onClick={handleTestPage}>
                Page:
            </button>
    </section>
    );
}

export default PaginacionDemo;