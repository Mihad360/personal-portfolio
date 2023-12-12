

const Projects = () => {
    return (
        <div>
            {/* <h1 className="text-3xl font-semibold text-black pt-10 text-center">My Projects details</h1> */}
            <p className="text-3xl text-center font-semibold pt-8 pb-10">My top three projects</p>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-24 pb-16">
                    <div className="card shadow-xl hover:bg-sky-300">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/7r0NZhy/Screenshot-2023-12-11-175053.png" alt="Shoes" className="w-full h-80" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-black">Name: Course Registration</h2>
                            <p className="text-xl">Live link: <a className="text-orange-500 font-semibold underline" href="https://limping-arch.surge.sh/">Project-1</a></p>
                            <p className="text-lg text-justify px-3">It is a SPA project with javascript and react.Here a user can register a course with credit hour by price.I have implemented the javascript functionality</p>
                        </div>
                    </div>
                    <div className="card shadow-xl hover:bg-sky-300">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/XSQprxK/Screenshot-2023-12-11-175639.png" alt="Shoes" className="w-full h-80" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-black">Name: Entertainers Event</h2>
                            <p className="text-xl">Live link: <a className="text-orange-500 font-semibold underline" href="https://omniscient-parent.surge.sh/">Project-2</a></p>
                            <p className="text-lg text-justify px-3">It is a Simple react authentication website with firebase.Here a user can login and register.I have implemented aos package at home page with react router.</p>
                        </div>
                    </div>
                    <div className="card shadow-xl hover:bg-sky-300">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/0J22GKv/Screenshot-2023-12-11-180215.png" alt="Shoes" className="w-full h-80" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-black">Name: The Library</h2>
                            <p className="text-xl">Live link: <a className="text-orange-500 font-semibold underline" href="https://illustrious-beetle.surge.sh/">Project-3</a></p>
                            <p className="text-lg text-justify px-3">It is a react authentication website with firebase,private routes.Here i have used swiper,dark mode etc.There is react router implemented at the project.User can by his book from here.Please visit to know more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;