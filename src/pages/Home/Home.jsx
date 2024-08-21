import { useEffect, useState } from "react";
import AllAss from "../assaignments/assignment/AllAss";
import Banner from "./Banner";
import Faq from "./Faq";
import Features from "./Features";
import Material from "./materials/Material";
import Instructors from "./instructors/Instructors"
import axios from "axios";
import { Link } from "react-router-dom";


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
            <div className="mb-16">
                <Banner></Banner>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-7 mb-12">
                {
                    items.slice(0,6).map(item=> <AllAss key={item._id} assignment={item}></AllAss>)
                }
               
            </div>
           <Link to="assignments"> <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 px-7 text-2xl text-white flex  mx-auto mb-12"> View All Assignments</button></Link>
                

                <Instructors/>
            <div className="">
                <Material/>
            </div>
            <div className="">
                <Features></Features>
            </div>

            <Faq></Faq>
        </div>
    );
};

export default Home;