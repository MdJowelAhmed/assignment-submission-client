import PropTypes from 'prop-types'
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { motion } from "framer-motion";

const AllAss = ({ assignment, handleDelete }) => {
    const { _id, thumbnail, title, marks, level, create, description } = assignment;

    return (
        <div className="p-4">
            <motion.div 
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative flex flex-col p-4 space-y-4 overflow-hidden rounded-lg shadow-lg dark:bg-gray-50 dark:text-gray-800 transform transition-transform duration-200"
                whileHover={{ y: -50, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)" }}
            >
                <img src={thumbnail} alt="" className="w-full h-40 object-cover mb-4 rounded-t-lg dark:bg-gray-500" />
                
                <h2 className="text-xl font-medium font-poppins truncate">{title}</h2>
                
                <p className="text-gray-700 truncate">
                    <span className='font-poppins text-blue-500 font-bold'>Description:</span> 
                    <span className='font-poppins'>{description?.slice(0, 80)}...</span>
                </p>

                <div className='flex justify-between'>
                    <p><span className='font-poppins text-blue-500 font-medium'>Marks:</span> <span className='font-poppins text-blue-500'>{marks}</span></p>
                    <p><span className='font-poppins text-blue-500 font-medium'>Level:</span> <span className='font-poppins text-blue-500'>{level}</span></p>
                </div>

                <div className='flex space-x-2 mt-2'>
                    <Link to={`/update/${_id}`}>
                        <button className='bg-blue-500 text-white p-2 rounded-md flex items-center transition-colors duration-300 hover:bg-blue-600'>
                            <TiEdit className='text-xl' />
                            <span className='ml-2'>Edit</span>
                        </button>
                    </Link>
                    
                    <button 
                        onClick={() => handleDelete(_id, create.creatorEmail)} 
                        className='bg-red-500 text-white p-2 rounded-md flex items-center transition-colors duration-300 hover:bg-red-600'>
                        <MdDelete className='text-xl' />
                        <span className='ml-2'>Delete</span>
                    </button>
                    
                    <Link to={`/details/${_id}`}>
                        <button className='bg-gray-500 text-white p-2 rounded-md flex items-center transition-colors duration-300 hover:bg-gray-600'>
                            <FcViewDetails className='text-xl' />
                            <span className='ml-2'>Details</span>
                        </button>
                    </Link>
                </div>
                
                <div className="flex justify-between mt-4">
                    <button aria-label="Share this post" type="button" className="p-2 text-center transition-colors duration-300 hover:text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-600">
                            <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                        </svg>
                    </button>
                    <button aria-label="Bookmark this post" type="button" className="p-2 transition-colors duration-300 hover:text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-600">
                            <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                        </svg>
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

AllAss.propTypes = {
    assignment: PropTypes.object.isRequired,
    handleDelete: PropTypes.func
}

export default AllAss;
