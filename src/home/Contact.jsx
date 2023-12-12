import { FaGithub, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";


const Contact = () => {
    return (
        <div>
            <h1 className="text-3xl text-black text-center font-semibold py-16">Contact information</h1>
            <div>
                <div className="flex justify-evenly items-center py-12 bg-sky-200">
                    <div>
                        <h1 className="text-2xl text-black font-medium">Contact me by...</h1>
                        <p className="text-lg flex items-center gap-2 text-red-500 font-medium underline"><MdEmail className="text-red-500 text-xl" /><span>ahmedmihad962@gmail.com</span></p>
                        <p className="flex items-center text-lg gap-2 pb-4"><FaPhone /><span>01979053892</span></p>
                        <h1 className="text-2xl text-black font-medium pb-1">Connect in social...</h1>
                        <p><a href="https://www.facebook.com/miyad.ahammed.3"><FaSquareFacebook className="text-2xl" /></a></p>
                        <h1 className="text-2xl text-black font-medium pb-1 pt-4">Github profile...</h1>
                        <p><a href="https://github.com/Mihad360"><FaGithub className="text-2xl" /></a></p>
                    </div>
                    <div>
                        <img className="w-96" src="https://i.ibb.co/9gKqphN/contact-me-removebg-preview.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-2xl text-black font-medium pb-3">Send a message to my Gmail...</h1>
                        <input className="input input-bordered border-black w-72" type="text" name="" id="" placeholder="Your message" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;