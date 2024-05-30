import { useLoaderData } from "react-router-dom";
import AllAss from "./AllAss";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../components/hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion"


const Assignment = () => {
    const loadedAssignment = useLoaderData()
   const [itemsPerPage,setItemsPerPage]=useState(3)
   const [count,setCount]=useState(0)
    const [filter, setFilter] = useState('All');
    const [items, setItems] = useState([]);
    const { user } = useAuth()
    // const [difficulty, setDifficulty] = useState('Easy');
    // const [assignments, setAssignments] = useState(loadedAssignment);



    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/assignment`);
                setItems(response.data);
                
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, [])

    useEffect(() => {
        const countData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/countAssignments`);
                setCount(res.data.count)
                console.log(res.data)
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        countData();
    }, [])
    console.log(count,itemsPerPage)
    const page=Math.ceil(count/itemsPerPage)
    const pages = [...Array(page).keys()].map(Element=>Element +1)

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredItems = filter === 'All' ? items : items.filter(assignment => assignment.level === filter);

    // console.log(items)
    //   console.log(items?.level)
    //   console.log(loadedAssignment.level)
    //   console.log(items?.create?.creatorEmail)
    //     console.log(user?.email)


    const handleDelete = (id, email) => {
        // console.log(data.create.creatorEmail)
        if (email !== user?.email) {
            return toast.error('Deleting for not permit you!')
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
                        // console.log(data)
                        setItems(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = items.filter(p => {
                                console.log(p?._id)
                                return p?._id !== id
                            })
                            setItems(remaining)

                        }
                    })

            }
        });
    }
    return (
        <div>
            <div className="text-center mb-10">
                <label >Select Difficulty Level:</label>
                <select value={filter} onChange={handleFilterChange}   >
                    <option value="All">All</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>


            <motion.div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-7">
                {
                    filteredItems.map(assignment => <AllAss assignment={assignment} key={assignment._id} handleDelete={handleDelete}></AllAss>)
                }
            </motion.div>

            <div className="flex my-12 gap-4 lg:mx-20">
                <button className="btn"> Previous</button>
                <div>
                    {
                        pages.map(btnNum=>(<button className="btn mx-1 bg-gradient-to-r from-cyan-500 to-blue-500 px-7 text-2xl text-white" key={btnNum}> {btnNum}</button>))
                    }
                </div>
                <button className="btn"> Next</button>
              
            </div>
        </div >
    );
};

export default Assignment;