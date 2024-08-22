import Aos from "aos";
import { useEffect } from "react";


const Features = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="" >
            {/* feature one  */}
            <section className="dark:bg-gray-100 dark:text-gray-800 " >
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-16 lg:px-8 lg:max-w-7xl" >
                    <div data-aos="zoom-in-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">Features</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-center  dark:text-gray-600">These smart features leverage technology to streamline workflows, enhance collaboration, and improve the overall learning experience for students and instructors alike.</p>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center" data-aos="zoom-out-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Learning Management Systems</h3>
                            <p className="mt-3 text-lg dark:text-gray-600"> Seamless integration with existing LMS platforms used by educational institutions, enabling easy access to course materials and assignment submissions.</p>
                            <div className="mt-7 space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Centralized Platform: </h4>
                                        <p className="mt-2 dark:text-gray-600"> LMS provides a centralized digital platform where educators can create, manage, and deliver educational content and activities, such as courses, assignments, quizzes, and discussions.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Student Engagement Tools:</h4>
                                        <p className="mt-2 dark:text-gray-600"> LMS typically includes features to facilitate student engagement, such as interactive multimedia content,</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Assessment and Grading: </h4>
                                        <p className="mt-2 dark:text-gray-600">LMS enables educators to create and administer assessments, including quizzes, tests, and assignments. It often includes grading tools for efficient evaluation and feedback provision.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://img.freepik.com/free-vector/e-learning-infographic-set_1284-16836.jpg?t=st=1715312560~exp=1715316160~hmac=ebbb22e1a248bbed73d4e7eada5ddc6ce5fa2600c52fd570bd252cb0c6479964&w=740" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                        </div>
                    </div>
                    <div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center" data-aos="zoom-in-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Resource Library</h3>
                                <p className="mt-3 text-lg dark:text-gray-600">Access to educational materials, readings, and reference documents related to assignments, helping students with their research and preparation.</p>
                                <div className="mt-7 space-y-6">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Content Repository: </h4>
                                            <p className="mt-2 dark:text-gray-600">A resource library serves as a repository or database of educational materials, including textbooks, articles, videos, lecture notes, and other learning resources </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Organization and Categorization:</h4>
                                            <p className="mt-2 dark:text-gray-600"> Resources within the library are typically organized and categorized based on topics, subjects, or themes, making it easy for users to navigate and find relevant materials.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Search and Discovery: </h4>
                                            <p className="mt-2 dark:text-gray-600"> Resource libraries often include search functionality, allowing users to quickly search for specific materials by keyword, author, title, or other criteria.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <img src="https://img.freepik.com/premium-photo/3d-cartoon-diverse-team-multitasking_1046319-1514.jpg?w=740" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
          
        </div>
    );
};

export default Features;