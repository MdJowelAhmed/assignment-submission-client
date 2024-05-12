import { Link, useLoaderData, useParams } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
import { GiLevelEndFlag } from "react-icons/gi";

const DetailsAss = () => {
    const loadedDetails = useLoaderData()
    const { id } = useParams()
    const details = loadedDetails.find(item => item._id == id)
    const { _id,title, description, marks, thumbnail, level, date, create } = details
    return (
        <div className=" p-10" style={{ backgroundImage: 'url(https://img.freepik.com/premium-vector/wave-3d-abstract-wave-dots-dark-background-big-data-technology-vector-background_691453-200.jpg)' }}>
            <div className="max-w-2xl overflow-hidden m-5 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">

                <img className="object-cover h-72 w-full" src={thumbnail} alt="" />
                <div className="p-6">
                    <div>

                        <a href="#" className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link"> Title: {title} </a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-poppins"><span className="text-xl font-semibold">Description:</span> {description} </p>
                    </div>
                    <div className="flex justify-evenly my-4">
                        <h3>Marks: <span className="text-blue-600 text-xl font-medium">{marks} </span></h3>
                        <div className="flex items-center gap-1">
                            <GiLevelEndFlag className="text-3xl" />
                            <h3>Level: <span className="text-blue-600 text-xl font-medium">{level} </span></h3>
                        </div>
                        <p className="flex items-center">
                            <CiCalendarDate className="text-4xl" />
                            <span className="mx-1  text-gray-600 dark:text-gray-300  text-xl font-medium"> Date:  {new Date(date).toLocaleDateString()} </span></p>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <div className="flex items-center">

                                <img className="object-cover h-10 rounded-full" src={create.photoURL} alt="" />
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">{create.name} </a>
                            </div>
                            <div>
                                <Link to={`/submit/${_id}`}> <button className="btn btn-success">Take
                                    Assignment</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsAss;