import Banner from "./Banner";
import Contact from "./Contact";
import Skills from "./Skills";


const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Skills></Skills>
            </div>
            <div>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;