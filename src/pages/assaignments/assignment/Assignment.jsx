import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../components/hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import AllAss from "./AllAss"; // Ensure this component is properly imported

const Assignment = () => {
    // State variables
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0);
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [items, setItems] = useState([]);
    const { user } = useAuth();

    // Fetch items with pagination
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/assignment?page=${currentPage}&size=${itemsPerPage}`);
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, [currentPage, itemsPerPage]);

    // Fetch item count
    useEffect(() => {
        const countData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/countAssignments`);
                setCount(res.data.count);
            } catch (error) {
                console.error('Error fetching count:', error);
            }
        };

        countData();
    }, []);

    // Pagination button handler
    const handlePaginationButton = (value) => {
        setCurrentPage(value);
    };

    // Next page handler
    const handleNextPage = () => {
        if (currentPage < Math.ceil(count / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Previous page handler
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Calculate total pages
    const page = Math.ceil(count / itemsPerPage);
    const pages = [...Array(page).keys()].map((Element) => Element + 1);

    // Handle filter change
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter and search items
    const filteredItems = items
        .filter(item => filter === 'All' || item.level === filter) // Filter by level
        .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())); // Search by name

    // Handle delete action
    const handleDelete = (id, email) => {
        if (email !== user?.email) {
            return toast.error('Deleting is not permitted!');
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/assignment/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setItems(items.filter(p => p._id !== id)); // Update items after deletion
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div className="text-center mb-10 flex justify-around">
                {/* Search Bar */}
                <div className="">
                    <input
                        type="text"
                        placeholder="Search assignments..."
                        className="px-4 py-2 border rounded-md w-full bg-gray-500  text-white "
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>

                {/* Filter Dropdown */}
                <div className="">
                    <label className="mr-5">Level:</label>
                    <select value={filter} onChange={handleFilterChange} className="btn btn-success text-white p-3 rounded-lg">
                        <option value="All">All</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
            </div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-7">
                {filteredItems.map(assignment => (
                    <AllAss assignment={assignment} key={assignment._id} handleDelete={handleDelete} />
                ))}
            </motion.div>

            <div className="flex my-12 gap-4 lg:mx-20">
                <button onClick={handlePreviousPage} disabled={currentPage === 1} className="btn">
                    Previous
                </button>
                <div>
                    {pages.map(btnNum => (
                        <button
                            onClick={() => handlePaginationButton(btnNum)}
                            className={`${currentPage === btnNum ? 'btn mx-1 bg-gradient-to-r from-cyan-500 to-blue-500 px-7 text-2xl text-white' : 'btn px-7 mx-1'}`}
                            key={btnNum}
                        >
                            {btnNum}
                        </button>
                    ))}
                </div>
                <button onClick={handleNextPage} disabled={currentPage === page} className="btn">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Assignment;
