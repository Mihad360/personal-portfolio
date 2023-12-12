import { FaCircle,} from "react-icons/fa";

const Education = () => {
    return (
        <div>
            <h1 className="text-3xl text-center font-semibold py-8">Education---------Experience</h1>
            <div className="flex justify-center gap-32 pb-6">
                <img className="w-96" src="https://i.ibb.co/VgDK0C7/undraw-education-f8ru.png" alt="" />
                <img className="w-96" src="https://i.ibb.co/CVVj5Gx/undraw-Experience-design-re-dmqq.png" alt="" />
            </div>
            <div className="flex gap-20 justify-center items-center">
                <div className="space-y-5">
                    <div className="bg-sky-300 p-6 rounded-lg">
                        <h1 className="text-2xl text-black font-semibold">Junior school certificate</h1>
                        <p className="text-xl font-medium ">Year: 2019</p>
                        <p className="text-lg">Merchant workers high school</p>
                    </div>
                    <div className="bg-sky-300 p-6 rounded-lg">
                        <h1 className="text-2xl text-black font-semibold">Secondary school certificate</h1>
                        <p className="text-xl font-medium ">Year: 2022</p>
                        <p className="text-lg">Merchant workers high school</p>
                    </div>
                    <div className="bg-sky-300 p-6 rounded-lg">
                        <h1 className="text-2xl text-black font-semibold">Computer science & technology</h1>
                        <p className="text-xl font-medium ">3rd semester(Running)</p>
                        <p className="text-lg">Dhaka Polytechnic Institute</p>
                    </div>
                </div>
                <div>
                    <div className="bg-sky-300 p-6 rounded-lg">
                        <h1 className="flex items-center gap-2 text-2xl font-semibold"><FaCircle /><span>HTML-5, CSS-3, Tailwind, Javascript</span></h1>
                        <p className="text-xl pb-3">6 month of experience in HTML-5, CSS-3, Tailwind <br /> and Javascript good and sharp.</p>
                        
                        <h1 className="flex items-center gap-2 text-2xl font-semibold"><FaCircle /><span>React, Express, MongoDB, Node js</span></h1>
                        <p className="text-xl pb-3">Experience of MERN. Good in backend and database. <br /> Created lot of frontend and some mern projects</p>
                        
                        <h1 className="flex items-center gap-2 text-2xl font-semibold"><FaCircle /><span>Firebase, Github</span></h1>
                        <p className="text-xl pb-3">Six month of experience using Github and firebase <br /> authentication in the projects</p>

                        <h1 className="flex items-center gap-2 text-2xl font-semibold"><FaCircle /><span>English and others</span></h1>
                        <p className="text-xl">Pretty good in english.Can talk simply and others like <br /> I am exploring some react components and next js now.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;