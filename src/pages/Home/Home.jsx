import Banner from "./Banner";
import Faq from "./Faq";
import Features from "./Features";


const Home = () => {
    return (
        <div>
            <div className="">
                <Banner></Banner>
            </div>

            <div className="my-20">
                <Features></Features>
            </div>

            <Faq></Faq>
        </div>
    );
};

export default Home;