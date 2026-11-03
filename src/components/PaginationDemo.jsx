import usePagination from "../hooks/usePagination";

function PaginacionDemo(){ const { 
                            totalItems,
                            itemsPerPage,
                            currentPage,
                            totalPages,
                            startIndex,
                            endIndex,
                            itemsOnCurrentPage
                        }=usePagination(123,10,1);

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
    </section>
    );
}

export default PaginacionDemo;