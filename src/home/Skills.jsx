import { Line } from 'rc-progress';

const Skills = () => {
    return (
        <div>
            <h1 className="text-3xl text-center font-semibold text-black py-16">Skils</h1>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-32">
                    <div className="card shadow-xl bg-sky-200">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/ncFk52c/html5-original-wordmark-svg.png" alt="Shoes" className="w-40 h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-black">HTML-5</h2>
                            <Line percent={90} strokeWidth={4} strokeColor="#FFA500" trailColor='#FFF' strokeLinecap='round' />
                            <p className="text-lg text-justify px-3">I know how to use HTML to create websites. I use HTML5 to make websites look good and work well on different devices, like phones and computers.</p>
                        </div>
                    </div>
                    <div className="card  bg-sky-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/GV895ck/css3-original-wordmark-svg.png" alt="Shoes" className="w-40 h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-black">CSS</h2>
                            <Line percent={85} strokeWidth={4} strokeColor="#FFA500" trailColor='#FFF' strokeLinecap='round' />
                            <p className="text-lg text-justify px-3">CSS helps design web pages, deciding colors, fonts, and layout. It styles elements like text, images, and backgrounds, making websites visually attractive and appealing.</p>
                        </div>
                    </div>
                    <div className="card  bg-sky-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/7GhqXkq/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c.png" alt="Shoes" className="w-40 h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-black">Tailwind</h2>
                            <Line percent={92} strokeWidth={4} strokeColor="#FFA500" trailColor='#FFF' strokeLinecap='round' />
                            <p className="text-lg text-justify px-3">Tailwind is a utility-first CSS framework simplifying web design by applying pre-defined classes for quick and efficient styling.</p>
                        </div>
                    </div>
                    <div className="card  bg-sky-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/v3BzdGd/javascript-original-svg.png" alt="Shoes" className="w-40 h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-black">Javascript</h2>
                            <Line percent={75} strokeWidth={4} strokeColor="#FFA500" trailColor='#FFF' strokeLinecap='round' />
                            <p className="text-lg text-justify px-3">JavaScript (JS) is a programming language for web development, enabling interactive and dynamic content on websites, enhancing user experiences.</p>
                        </div>
                    </div>
                    <div className="card  bg-sky-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/nBtBh9s/download.png" alt="Shoes" className="w-40 h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-black">React</h2>
                            <Line percent={78} strokeWidth={4} strokeColor="#FFA500" trailColor='#FFF' strokeLinecap='round' />
                            <p className="text-lg text-justify px-3">
                                React is a JavaScript library for building user interfaces, allowing creation of interactive and reusable components for web applications.</p>
                        </div>
                    </div>
                    <div className="card  bg-sky-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/NYch5yy/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173.png" alt="Shoes" className="w-40 h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-black">Firebase</h2>
                            <Line percent={82} strokeWidth={4} strokeColor="#FFA500" trailColor='#FFF' strokeLinecap='round' />
                            <p className="text-lg text-justify px-3">Firebase is a platform by Google for developing web and mobile apps, offering services like hosting, databases, authentication, and more.</p>
                        </div>
                    </div>
                    <div className="card  bg-sky-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/jGNcfQt/express-js.png" alt="Shoes" className="w-40 h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-black">Express js</h2>
                            <Line percent={70} strokeWidth={4} strokeColor="#FFA500" trailColor='#FFF' strokeLinecap='round' />
                            <p className="text-lg text-justify px-3">Express.js is a web application framework for Node.js, simplifying server-side development by creating APIs and handling HTTP requests easily.</p>
                        </div>
                    </div>
                    <div className="card  bg-sky-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/Mk7TmPy/mongodb-logo-icon-170943.png" alt="Shoes" className="w-40 h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-black">mongoDB</h2>
                            <Line percent={72} strokeWidth={4} strokeColor="#FFA500" trailColor='#FFF' strokeLinecap='round' />
                            <p className="text-lg text-justify px-3">
                                MongoDB is a database system storing data in a flexible, document-based format, widely used for its scalability and versatility.</p>
                        </div>
                    </div>
                    <div className="card  bg-sky-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/9bZHF8h/nodejs-original-wordmark-svg.png" alt="Shoes" className="w-40 h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-black">Node js</h2>
                            <Line percent={65} strokeWidth={4} strokeColor="#FFA500" trailColor='#FFF' strokeLinecap='round' />
                            <p className="text-lg text-justify px-3">Node.js is a runtime environment using JavaScript to execute code outside browsers, popular for building scalable web applications and servers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;