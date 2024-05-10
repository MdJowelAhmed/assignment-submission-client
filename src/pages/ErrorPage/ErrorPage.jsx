import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900  text-center">
                <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <div className="lg:ml-32">
                
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-5xl">Page not found</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.</p>

                        <div className="flex items-center mt-6 gap-x-3">
                          

                            <Link to='/'><button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600 text-center">
                                Go Back Home
                            </button></Link>
                        </div>
                    </div>
                    

                    <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                       <img className="h-96 w-96 rounded-3xl" src="https://img.freepik.com/free-vector/404-error-purple-background_24908-77785.jpg?t=st=1715308011~exp=1715311611~hmac=e6e089f1e5e85e5971f9dcedc3c35a2b0a8f4880fd6aaaabddb52ecc5a38426a&w=740" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;