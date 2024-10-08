import { useEffect, useState } from "react";
import AllAss from "../assaignments/assignment/AllAss";
import Banner from "./Banner";
import Faq from "./Faq";
import Features from "./Features";
import Material from "./materials/Material";
import Instructors from "./instructors/Instructors"
import axios from "axios";
import { Link } from "react-router-dom";
import Testimonials from "./testimonials/Testimonials";
import TopStudents from "./topStudents/TopStudents";
import Newsletter from "./subscribe/NewsLetter";
import { Helmet } from "react-helmet-async";


const Home = () => {

    const [items, setItems] = useState([]);
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
    }, []);

    return (
        <div>
            <Helmet>
                <title>EduHaven | Home </title>
            </Helmet>
            <div className="mb-16">
                <Banner></Banner>
            </div>
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-blue-500 mb-5">Top Assignments</h2>
                <p className="max-w-3xl mx-auto text-center dark:text-gray-600 mb-10 ">Programming assignments sharpen problem-solving skills and reinforce coding knowledge. <br /> They provide hands-on experience, improve debugging, and prepare students <br />  for real-world challenges in the tech industry.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-7 mb-5 lg:mb-12">
                {
                    items.slice(2, 8).map(item => <AllAss key={item._id} assignment={item}></AllAss>)
                }

            </div>
            <Link to="assignments"> <button className="btn btn-secondary px-7 text-2xl text-white flex  mx-auto mb-5 lg:mb-10"> View All Assignments</button></Link>


            <Instructors />
            <Material />
            <Testimonials />
            <TopStudents />
            <Newsletter />
            <Features></Features>
            <Faq></Faq>
        </div>
    );
};

export default Home;