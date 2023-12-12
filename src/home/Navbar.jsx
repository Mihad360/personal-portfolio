import { FaDownload } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import resume from '../../../assets/Task Description.111.pdf'

const Navbar = () => {
    return (
        <div>
            <div className="flex items-center justify-between px-10 py-3 bg-sky-200">
                <div className="flex items-center gap-5">
                    <img className="w-32 h-24" src="https://i.ibb.co/QkT5b3N/1000003103-removebg-preview.png" alt="" />
                    <h1 className="text-3xl font-bold text-sky-600">Mihad</h1>
                </div>
                <div className="flex items-center gap-5">
                    <li className="list-none">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "btn-info btn" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="list-none">
                        <NavLink
                            to="/projects"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "btn-info btn" : ""
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className="list-none">
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "btn-info btn" : ""
                            }
                        >
                            About
                        </NavLink>
                    </li>
                </div>
                <div className="flex gap-5">
                    {/* <Link><button className="btn bg-orange-500 btn-info text-lg">View Resume</button></Link> */}
                    <button className="btn btn-info text-lg text-white bg-orange-500"><a href={resume} download className="download-btn flex items-center gap-3"><FaDownload /><span>Download Resume</span></a></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;