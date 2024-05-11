import { useLoaderData, useParams } from "react-router-dom";

const DetailsAss = () => {
    const loadedDetails = useLoaderData()
    const { id } = useParams()
    const details = loadedDetails.find(item => item._id == id)
    const { title, description, marks, thumbnail, level, date, create } = details
    return (
        <div className=" p-10" style={{backgroundImage: 'url(https://img.freepik.com/premium-vector/wave-3d-abstract-wave-dots-dark-background-big-data-technology-vector-background_691453-200.jpg)'}}>
            <div className="max-w-2xl overflow-hidden m-5 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">

                <img className="object-cover w-full" src={thumbnail} alt="" />
                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{title} </a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description} </p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">

                                <img className="object-cover h-10 rounded-full" src={create.photoURL} alt="" />
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">{create.name} </a>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300"> {new Date(date).toLocaleDateString()} </span>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default DetailsAss;