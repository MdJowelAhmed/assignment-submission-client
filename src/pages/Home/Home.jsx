import Banner from "./Banner";
import Faq from "./Faq";
import Features from "./Features";
import Material from "./materials/Material";


const Home = () => {
    return (
        <div>
            <div className="mb-16">
                <Banner></Banner>
            </div>

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