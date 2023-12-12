
const Banner = () => {
    return (
        <div className="flex justify-evenly items-center bg-sky-200 pt-10">
            <div className="space-y-2">
                <h1 className="text-black font-medium text-3xl">Hello..</h1>
                <p className="flex items-center gap-3"><span className="text-2xl font-medium ">I am</span> <span className="text-4xl font-bold text-sky-500">Montasir Mihad</span></p>
                <p className="text-black font-semibold text-xl flex items-center gap-3"><span className="flex gap-3">
                <img className="w-8" src="https://i.ibb.co/8DJ0rG0/Whats-App-Image-2023-12-11-at-01-23-44-4eb7165d.jpg" alt="" />
                <img className="w-8" src="https://i.ibb.co/5sfbDpT/Whats-App-Image-2023-12-11-at-01-23-44-883a31e4.jpg" alt="" />
                <img className="w-8" src="https://i.ibb.co/gFfG3Sz/Whats-App-Image-2023-12-11-at-01-23-44-65cdb951.jpg" alt="" />
                <img className="w-8" src="https://i.ibb.co/HPT6Y92/download.jpg" alt="" />
                </span>
                <span>MERN Stack Developer</span></p>
            </div>
            <div>
                <img src="https://i.ibb.co/phb1M6T/1000003039-removebg-preview.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;