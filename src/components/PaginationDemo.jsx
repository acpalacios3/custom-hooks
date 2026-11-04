import usePagination from "../hooks/usePagination";
import { useState } from "react";

const items = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
    "Item 6", "Item 7", "Item 8", "Item 9", "Item 10",
    "Item 11", "Item 12", "Item 13", "Item 14", "Item 15",
    "Item 16", "Item 17", "Item 18", "Item 19", "Item 20",
    "Item 21", "Item 22", "Item 23", "Item 24", "Item 25",
    "Item 26", "Item 27", "Item 28", "Item 29", "Item 30",
    "Item 31", "Item 32", "Item 33", "Item 34", "Item 35",
    "Item 36", "Item 37", "Item 38", "Item 39", "Item 40",
    "Item 41", "Item 42", "Item 43", "Item 44", "Item 45",
    "Item 46", "Item 47", "Item 48", "Item 49", "Item 50",
    "Item 51", "Item 52", "Item 53", "Item 54", "Item 55",
    "Item 56", "Item 57", "Item 58", "Item 59", "Item 60",
    "Item 61", "Item 62", "Item 63", "Item 64", "Item 65",
    "Item 66", "Item 67", "Item 68", "Item 69", "Item 70",
    "Item 71", "Item 72", "Item 73", "Item 74", "Item 75",
    "Item 76", "Item 77", "Item 78", "Item 79", "Item 80",
    "Item 81", "Item 82", "Item 83", "Item 84", "Item 85",
    "Item 86", "Item 87", "Item 88", "Item 89", "Item 90",
    "Item 91", "Item 92", "Item 93", "Item 94", "Item 95",
    "Item 96", "Item 97", "Item 98", "Item 99", "Item 100",
    "Item 101", "Item 102", "Item 103", "Item 104", "Item 105",
    "Item 106", "Item 107", "Item 108", "Item 109", "Item 110",
    "Item 111", "Item 112", "Item 113", "Item 114", "Item 115",
    "Item 116", "Item 117", "Item 118", "Item 119", "Item 120",
    "Item 121", "Item 122", "Item 123"
];

function PaginacionDemo() {
    const {
        totalItems,
        itemsPerPage,
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        itemsOnCurrentPage,
        setPage,
        canPrevPage,
        canNextPage
    } = usePagination(items.length, 10, 1);

    const [pageNumber, setPageNumber] = useState(1);

    // slice() gets a part of the array without changing the original.
    const currentItems = items.slice(startIndex, endIndex);

    // const handleTestPage = () => {
    //     setPage(Number(pageNumber));
    //   };

    return (

        <section>
            <h2>Pagination Demo</h2>
            <p>Items per page: {itemsPerPage}</p>
            <p>Total Items: {totalItems}</p>
            <p>Current page: {currentPage}</p>
            <p>Total pages: {totalPages}</p>
            <p>Start index: {startIndex}</p>
            <p>End index: {endIndex}</p>
            <p>Items on current page: {itemsOnCurrentPage}</p>


            {/* <button onClick={handleTestPage}>
                Page:
            </button>
            <input
                type="number"
                value={pageNumber}
                onChange={(e) => setPageNumber(e.target.value)}
            /> */}

            <ul>
                {currentItems.map((item, index) => (
                    <li key={item}>
                        {index + 1}. {item}
                    </li>
                ))}
            </ul>

            <div>

                <button onClick={() => setPage(currentPage - 1)}
                    disabled={!canPrevPage}
                >
                    Previous
                </button>

                <button onClick={() => setPage(currentPage + 1)}
                    disabled={!canNextPage}
                >
                    Next
                </button>
            </div>

            <button onClick={() => setPage(1)}>1</button>
            <button onClick={() => setPage(2)}>2</button>
            <button onClick={() => setPage(3)}>3</button>
            <button onClick={() => setPage(4)}>4</button>
            <button onClick={() => setPage(5)}>5</button>
            <button onClick={() => setPage(6)}>6</button>
            <button onClick={() => setPage(7)}>7</button>
            <button onClick={() => setPage(8)}>8</button>
            <button onClick={() => setPage(9)}>9</button>
            <button onClick={() => setPage(10)}>10</button>
            <button onClick={() => setPage(11)}>11</button>
            <button onClick={() => setPage(12)}>12</button>
            <button onClick={() => setPage(13)}>13</button>

        </section>
    );
}

export default PaginacionDemo;